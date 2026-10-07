// Vol. 28, No. 4 (October 2023) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2023-v28-i4-04",
  acknowledgments:
    "We thank seminar participants at Hanyang University, Korea University and the Bank of Korea, two anonymous referees and the handling Associate Editor for helpful comments. Research assistants at the Hanyang University Department of Economics helped annotate the training sample. All errors are our own.",
  dataAvailability:
    "Government bond yields, policy rates and macroeconomic series are from national central banks and statistical offices and are publicly available. News articles were obtained under licence from commercial news archives and cannot be redistributed; the daily sentiment indices, the dictionary, the fine-tuned classifier weights and the code to replicate all results are available from the corresponding author.",
  editorialNote:
    "Tae-Hee Kim and Jiwon Lee construct a daily news-sentiment index for six Asian economies from about 1.2 million articles over 2010–2023 and find that it explains about 10 percent of the monthly variation in 10-year government bond yields, rising to 29 percent during crisis episodes, and that adding it to an affine term-structure model improves out-of-sample yield forecasts by about 11 percent at the one-year horizon.",
  refs: [
    /* 1 */ "Tetlock, P. C. (2007). Giving content to investor sentiment: The role of media in the stock market. Journal of Finance, 62(3), 1139–1168.",
    /* 2 */ "Loughran, T., & McDonald, B. (2011). When is a liability not a liability? Textual analysis, dictionaries, and 10-Ks. Journal of Finance, 66(1), 35–65.",
    /* 3 */ "Baker, S. R., Bloom, N., & Davis, S. J. (2016). Measuring economic policy uncertainty. Quarterly Journal of Economics, 131(4), 1593–1636.",
    /* 4 */ "Gentzkow, M., Kelly, B., & Taddy, M. (2019). Text as data. Journal of Economic Literature, 57(3), 535–574.",
    /* 5 */ "Shapiro, A. H., Sudhof, M., & Wilson, D. J. (2022). Measuring news sentiment. Journal of Econometrics, 228(2), 221–243.",
    /* 6 */ "Diebold, F. X., & Li, C. (2006). Forecasting the term structure of government bond yields. Journal of Econometrics, 130(2), 337–364.",
    /* 7 */ "Duffee, G. R. (2002). Term premia and interest rate forecasts in affine models. Journal of Finance, 57(1), 405–443.",
    /* 8 */ "Ang, A., & Piazzesi, M. (2003). A no-arbitrage vector autoregression of term structure dynamics with macroeconomic and latent variables. Journal of Monetary Economics, 50(4), 745–787.",
    /* 9 */ "Joslin, S., Singleton, K. J., & Zhu, H. (2011). A new perspective on Gaussian dynamic term structure models. Review of Financial Studies, 24(3), 926–970.",
    /* 10 */ "Adrian, T., Crump, R. K., & Moench, E. (2013). Pricing the term structure with linear regressions. Journal of Financial Economics, 110(1), 110–138.",
    /* 11 */ "Cochrane, J. H., & Piazzesi, M. (2005). Bond risk premia. American Economic Review, 95(1), 138–160.",
    /* 12 */ "Ludvigson, S. C., & Ng, S. (2009). Macro factors in bond risk premia. Review of Financial Studies, 22(12), 5027–5067.",
    /* 13 */ "Gürkaynak, R. S., Sack, B., & Swanson, E. T. (2005). Do actions speak louder than words? The response of asset prices to monetary policy actions and statements. International Journal of Central Banking, 1(1), 55–93.",
    /* 14 */ "Blinder, A. S., Ehrmann, M., Fratzscher, M., De Haan, J., & Jansen, D.-J. (2008). Central bank communication and monetary policy: A survey of theory and evidence. Journal of Economic Literature, 46(4), 910–945.",
    /* 15 */ "Hansen, S., McMahon, M., & Prat, A. (2018). Transparency and deliberation within the FOMC: A computational linguistics approach. Quarterly Journal of Economics, 133(2), 801–870.",
    /* 16 */ "Diebold, F. X., & Mariano, R. S. (1995). Comparing predictive accuracy. Journal of Business & Economic Statistics, 13(3), 253–263.",
    /* 17 */ "Clark, T. E., & West, K. D. (2007). Approximately normal tests for equal predictive accuracy in nested models. Journal of Econometrics, 138(1), 291–311.",
    /* 18 */ "Baker, M., & Wurgler, J. (2006). Investor sentiment and the cross-section of stock returns. Journal of Finance, 61(4), 1645–1680.",
    /* 19 */ "Garcia, D. (2013). Sentiment during recessions. Journal of Finance, 68(3), 1267–1300.",
    /* 20 */ "Rey, H. (2013). Dilemma not trilemma: The global financial cycle and monetary policy independence. In Global dimensions of unconventional monetary policy: Proceedings of the Jackson Hole Economic Policy Symposium (pp. 285–333). Kansas City, MO: Federal Reserve Bank of Kansas City.",
    /* 21 */ "Miranda-Agrippino, S., & Rey, H. (2020). U.S. monetary policy and the global financial cycle. Review of Economic Studies, 87(6), 2754–2776.",
    /* 22 */ "Eichengreen, B., & Gupta, P. (2015). Tapering talk: The impact of expectations of reduced Federal Reserve security purchases on emerging markets. Emerging Markets Review, 25, 1–15.",
    /* 23 */ "Hördahl, P., Tristani, O., & Vestin, D. (2006). A joint econometric model of macroeconomic and term-structure dynamics. Journal of Econometrics, 131(1–2), 405–444.",
    /* 24 */ "Newey, W. K., & West, K. D. (1987). A simple, positive semi-definite, heteroskedasticity and autocorrelation consistent covariance matrix. Econometrica, 55(3), 703–708.",
    /* 25 */ "Thorsrud, L. A. (2020). Words are the new numbers: A newsy coincident index of the business cycle. Journal of Business & Economic Statistics, 38(2), 393–409.",
    /* 26 */ "Hamilton, J. D., & Wu, J. C. (2012). The effectiveness of alternative monetary policy tools in a zero lower bound environment. Journal of Money, Credit and Banking, 44(s1), 3–46.",
    /* 27 */ "Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of deep bidirectional transformers for language understanding. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (pp. 4171–4186). Minneapolis, MN: Association for Computational Linguistics.",
    /* 28 */ "Jordà, Ò. (2005). Estimation and inference of impulse responses by local projections. American Economic Review, 95(1), 161–182.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Long-term government bond yields are among the most closely watched prices in any economy. They anchor mortgage and corporate borrowing costs, determine the cost of public debt, and summarise market expectations about future short-term rates and the compensation investors demand for bearing duration risk. Standard models of the term structure explain yields with a small number of latent factors extracted from the cross-section of yields themselves, sometimes augmented with macroeconomic variables such as inflation and output growth [6][8][9]. Yet macroeconomic data arrive with a lag, are revised, and capture only part of the information that market participants process each day. Much of that information reaches investors in the form of news.",
        "This paper asks whether the tone of economic news contains information about government bond yields that standard term-structure models miss. We construct a daily news-sentiment index for six Asian economies — China, India, Indonesia, Japan, Korea and Thailand — using textual analysis of approximately 1.2 million economic news articles published between January 2010 and March 2023. The index combines a finance-specific dictionary in the spirit of Loughran and McDonald {2} with a transformer-based classifier fine-tuned on a hand-labelled sample of Asian economic news [27], and it is available in real time, without revision, for every trading day.",
        "We report three main findings. First, news sentiment explains a non-trivial share of the variation in 10-year government bond yields. Controlling for global yields, risk aversion and domestic policy-rate changes, the sentiment index accounts for about 10 percent of the variation in monthly 10-year yield changes on average across the six economies. Second, this explanatory power is concentrated in crisis episodes: during the European debt crisis, the 2013 taper tantrum, the 2015–2016 Chinese market turmoil, the COVID-19 shock and the 2022 global tightening cycle, the incremental share of explained variance rises to 29 percent. Third, adding sentiment as an unspanned factor to a standard three-factor affine term-structure model improves the out-of-sample forecast accuracy of the 10-year yield by approximately 11 percent at the one-year horizon, measured by the reduction in root mean squared forecast error.",
        "The sign of the relationship differs across economies in an informative way. In Japan, Korea, Thailand and China, more positive news is associated with higher long-term yields, consistent with news moving expectations of future policy rates. In India and Indonesia, where foreign investors hold a large share of local-currency government bonds and sovereign risk premia are larger, more positive news is associated with lower yields, consistent with news moving the term premium. A decomposition of yields into expected short rates and term premia using the regression-based approach of Adrian, Crump and Moench {10} confirms this interpretation.",
        "Our results contribute to three literatures. We add to the growing body of work that uses text as data in economics and finance [4][5][25] by constructing a multilingual, high-frequency sentiment measure for emerging and advanced Asian economies and showing that it is informative about bond markets rather than only equity markets [1][19]. We contribute to the literature on the predictability of bond yields and risk premia [7][11][12] by showing that news-based information improves forecasts beyond the factors spanned by the yield curve. And we inform the debate on central-bank communication [14][15] by documenting how much of the movement in long-term rates reflects the broader news environment rather than central-bank statements themselves.",
        "The remainder of the paper is organised as follows. Section 2 describes the institutional setting of Asian government bond markets. Section 3 reviews related literature and Section 4 sets out a simple framework that motivates our hypotheses. Section 5 describes the news corpus and the construction of the index, and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 examines mechanisms and heterogeneity, and Section 9 reports robustness checks. Section 10 discusses the implications for central-bank communication and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional background",
      paragraphs: [
        "Local-currency government bond markets in Asia have grown rapidly since the Asian financial crisis of 1997–1998, partly as a result of regional initiatives such as the Asian Bond Markets Initiative, which sought to reduce reliance on foreign-currency and short-term bank financing. By 2022 the six economies in our sample accounted for the large majority of outstanding local-currency government debt in Asia outside Australia and New Zealand. The markets nonetheless differ substantially in depth, liquidity and investor base. Japan's market is the largest and is dominated by domestic institutions and, since 2013, by the Bank of Japan, which has held around half of outstanding government bonds following its quantitative and qualitative easing and yield-curve control policies. Korea's market is deep and liquid and has attracted growing foreign participation, with the 10-year Korea Treasury Bond serving as a regional benchmark.",
        "China's interbank bond market opened gradually to foreign investors over the 2010s through schemes such as Bond Connect and inclusion in global bond indices from 2019. India's government securities market remained relatively closed for most of the sample, with foreign portfolio investment subject to quantitative limits, while Indonesia's local-currency market has had among the highest foreign ownership shares in emerging markets, at times exceeding a third of outstanding tradable government bonds. Thailand occupies an intermediate position, with a well-developed domestic investor base and moderate foreign participation.",
        "These differences matter for how news is transmitted to yields. Where foreign investors are marginal price-setters, long-term yields are exposed to the global financial cycle and to sudden shifts in risk appetite [20][21]. The taper tantrum of 2013 illustrated this vividly: emerging Asian economies with large foreign holdings and current-account deficits, including India and Indonesia, experienced sharp increases in long-term yields and currency depreciation, whereas yields in Japan and Korea moved much less [22]. Where domestic investors and central banks dominate, yields are more closely tied to expectations of domestic monetary policy. Our sample includes both kinds of market, which allows us to examine whether news affects yields through expected policy rates, term premia or both.",
        "The period we study was also one of exceptionally active monetary policy. Japan operated at or below the zero lower bound throughout, Korea and Thailand cut policy rates to historic lows in 2020, and all six central banks introduced or expanded asset purchases or liquidity facilities during the pandemic. From 2022 most of them raised rates in response to rising inflation and United States tightening. These episodes generated large volumes of economic news and substantial yield volatility, providing considerable variation with which to identify the relationship between news tone and bond prices.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related literature",
      paragraphs: [
        "A large literature in finance shows that the tone of news and other text predicts asset prices. Tetlock {1} found that pessimistic language in a popular Wall Street Journal column predicts downward pressure on stock prices followed by reversion, and Garcia {19} showed that the predictive power of news sentiment for stock returns is concentrated in recessions. Loughran and McDonald {2} demonstrated that general-purpose sentiment dictionaries misclassify many words in financial text and proposed a finance-specific word list that has become standard. Survey-based and market-based measures of investor sentiment have also been shown to affect the cross-section of stock returns [18]. Most of this work concerns equity markets in the United States.",
        "In macroeconomics, text-based measures have been used to track uncertainty, sentiment and economic activity in real time. Baker, Bloom and Davis {3} constructed an index of economic policy uncertainty from newspaper coverage, and Shapiro, Sudhof and Wilson {5} built a daily news-sentiment index for the United States that predicts consumer sentiment and responds to monetary policy surprises. Thorsrud {25} used topic models of a Norwegian business newspaper to construct a coincident index of the business cycle. Gentzkow, Kelly and Taddy {4} review the methods available for treating text as data. More recent work has applied deep-learning language models such as BERT [27], which capture context and negation better than dictionary methods.",
        "The term-structure literature has developed a rich toolkit for modelling and forecasting yields. Duffee {7} showed that essentially affine models improve forecasts relative to completely affine models, and Diebold and Li {6} found that a dynamic version of the Nelson–Siegel model forecasts well at longer horizons. Ang and Piazzesi {8} and Hördahl, Tristani and Vestin {23} incorporated macroeconomic variables into no-arbitrage models, while Joslin, Singleton and Zhu {9} provided a convenient normalisation and estimation strategy for Gaussian dynamic term-structure models. A related strand documents that bond risk premia vary over time and are predictable by forward rates [11] and by macroeconomic factors not spanned by the yield curve [12]. Adrian, Crump and Moench {10} proposed a regression-based estimator that makes term-premium decompositions straightforward to compute for many countries.",
        "Finally, a literature on central-bank communication examines how statements and minutes move asset prices. Gürkaynak, Sack and Swanson {13} showed that a substantial part of the response of long-term yields to FOMC announcements reflects statements about the future path of policy rather than current rate decisions, and Blinder et al. {14} surveyed the evidence that communication shapes expectations. Hansen, McMahon and Prat {15} applied computational linguistics to FOMC transcripts. Hamilton and Wu {26} studied the effect of asset purchases on the term structure at the zero lower bound. Our contribution is to study the broader news environment, of which central-bank communication is one part, and to do so for a set of Asian economies whose bond markets have received comparatively little attention in this literature.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual framework and hypotheses",
      paragraphs: [
        "To organise the analysis, decompose the n-period yield into the average expected short rate over the life of the bond and a term premium: y(n,t) = (1/n) Σ E_t[r(t+j)] + tp(n,t). News can affect either component. Positive news about economic activity and inflation should raise expected future policy rates and hence long-term yields, other things equal. At the same time, positive news may reduce the compensation investors demand for holding duration and sovereign credit risk, lowering the term premium. The net effect of good news on the long-term yield therefore depends on which channel dominates.",
        "We expect the expectations channel to dominate in economies with credible domestic monetary frameworks, low sovereign risk and a predominantly domestic investor base, and the term-premium channel to dominate where foreign investors are marginal price-setters and sovereign risk premia are larger. This motivates our first hypothesis: news sentiment is correlated with long-term yields, positively in the first group and negatively in the second, and the term-premium component accounts for a larger share of the response in the second group.",
        "Our second hypothesis concerns time variation. Information about fundamentals is more uncertain, and investors pay more attention to news, during crises. Models of limited attention and the empirical results of Garcia {19} suggest that news tone should matter most when uncertainty is high. We therefore expect the explanatory power of sentiment for yields to be larger during crisis episodes.",
        "Our third hypothesis concerns forecasting. If news contains information about future macroeconomic conditions and risk premia that is not yet reflected in the shape of the yield curve — an unspanned factor in the sense of Joslin, Singleton and Zhu {9} and Ludvigson and Ng {12} — then adding sentiment to a term-structure model should improve out-of-sample forecasts of yields. Because news is likely to anticipate slow-moving changes in policy and risk premia, we expect the gains to be larger at longer forecast horizons than at very short ones, where yields are close to a random walk.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our analysis combines a large corpus of economic news with daily government bond yields and macroeconomic and financial control variables for the six economies over January 2010 to March 2023.",
      ],
      subsections: [
        {
          id: "data-corpus",
          heading: "5.1 News corpus",
          paragraphs: [
            "We collected economic and financial news from two international newswires and from the leading business newspapers of each economy, obtained under licence from commercial news archives. For each economy we include articles in English and in the main local language — Chinese, Hindi (supplemented by English-language Indian business dailies), Indonesian, Japanese, Korean and Thai. Articles are assigned to an economy if the economy or one of its main cities, institutions or listed firms is mentioned in the headline or the first paragraph. We retain articles classified as economic or financial by the archives' subject codes and remove duplicates, very short items under 50 words and automated market-data reports, which carry price information but no narrative content.",
            "Table 1 describes the resulting corpus. It contains approximately 1.2 million articles, ranging from about 151,000 for Thailand to 248,000 for China. Local-language articles account for between 41 and 72 percent of the total depending on the economy. The average article contains about 480 words. The number of articles per day rises sharply during crisis episodes, by an average of 38 percent, reflecting the greater demand for economic news when conditions are volatile.",
          ],
          table: {
            id: "tab-corpus",
            caption: "Table 1. News corpus by economy, January 2010 – March 2023",
            columns: ["Economy", "Articles", "Local-language share (%)", "Articles per trading day", "Mean words per article", "Labelled sample"],
            rows: [
              ["China", "248,000", "72", "75.6", "455", "2,400"],
              ["India", "231,000", "41", "70.4", "510", "2,400"],
              ["Indonesia", "162,000", "63", "49.4", "430", "2,000"],
              ["Japan", "214,000", "68", "65.2", "495", "2,400"],
              ["Korea", "197,000", "66", "60.1", "520", "2,400"],
              ["Thailand", "151,000", "58", "46.0", "460", "2,000"],
              ["Total / mean", "1,203,000", "62", "61.1", "480", "13,600"],
            ],
            note: "Economic and financial news from two international newswires and the leading business newspapers of each economy, after removing duplicates, items under 50 words and automated market-data reports. Articles per trading day are averages over approximately 3,280 trading days. The labelled sample is the number of articles annotated by two independent coders and used to fine-tune and validate the classifier.",
          },
        },
        {
          id: "data-index",
          heading: "5.2 Constructing the sentiment index",
          paragraphs: [
            "We measure the tone of each article with two complementary methods. The first is dictionary-based. Starting from the finance-specific positive and negative word lists of Loughran and McDonald {2}, we translated the lists into each local language with the help of native-speaking economists, added terms specific to Asian economic reporting (for example, words describing export performance and capital flows), and computed net tone as the number of positive minus negative words divided by the total number of sentiment words, with negation handled by reversing the polarity of words preceded by a negator within three words. The second method fine-tunes a multilingual BERT model [27] on 13,600 articles that were labelled as positive, neutral or negative by two independent coders, with an inter-coder agreement of 0.81 (Cohen's kappa 0.71). On a held-out test set, the classifier achieves an accuracy of 0.79, compared with 0.66 for the dictionary method.",
            "The article-level score is the average of the standardised dictionary score and the classifier's predicted probability of a positive minus a negative label. Following Shapiro, Sudhof and Wilson {5}, the daily index for each economy is a weighted average of the scores of all articles published that day, where weights decline exponentially with the article's age with a half-life of 30 days, so that the index reflects the stock of recent news rather than only same-day articles. The index is standardised to have mean zero and unit variance over the full sample for each economy. Because the classifier is trained once on the labelled sample and article scores are never revised, the index can be computed in real time. For the term-structure analysis we use month-end values.",
            "Figure 1 plots the six-economy average of the index and the index for Korea at half-yearly frequency. The index falls sharply during each of the episodes we classify as crises — the European debt crisis in the second half of 2011, the taper tantrum in mid-2013, the Chinese stock-market collapse and devaluation of 2015–2016, the COVID-19 shock in the first half of 2020 and the global tightening cycle of 2022 — and recovers in between. It also captures less dramatic episodes, such as the escalation of trade tensions between the United States and China in 2018–2019. The correlation of the average index with the regional purchasing managers' index is 0.58, and with the regional economic policy uncertainty index of Baker, Bloom and Davis {3} −0.49.",
          ],
          figures: [
            {
              id: "fig-sentiment",
              caption: "Figure 1. News-sentiment index, six-economy average and Korea, 2010–2023",
              kind: "line",
              xLabels: ["2010H1", "2010H2", "2011H1", "2011H2", "2012H1", "2012H2", "2013H1", "2013H2", "2014H1", "2014H2", "2015H1", "2015H2", "2016H1", "2016H2", "2017H1", "2017H2", "2018H1", "2018H2", "2019H1", "2019H2", "2020H1", "2020H2", "2021H1", "2021H2", "2022H1", "2022H2", "2023H1"],
              yLabel: "Sentiment (standard deviations)",
              series: [
                { name: "Six-economy average", values: [0.2, 0.3, 0.1, -0.9, -0.4, -0.1, 0.2, -0.8, 0.1, 0.3, 0.2, -1.1, -0.6, 0.2, 0.6, 0.7, 0.4, -0.3, -0.2, -0.4, -2.3, -0.5, 0.5, 0.4, -0.9, -1.2, -0.3] },
                { name: "Korea", values: [0.3, 0.4, 0.2, -1.0, -0.5, -0.2, 0.3, -0.6, 0.2, 0.1, 0.0, -0.9, -0.4, 0.1, 0.7, 0.8, 0.5, -0.5, -0.4, -0.6, -2.0, -0.2, 0.7, 0.3, -1.0, -1.5, -0.4] },
              ],
              note: "Half-yearly averages of the daily news-sentiment index, standardised to mean zero and unit variance for each economy over January 2010 – March 2023. 2023H1 covers January–March 2023. The six-economy average weights each economy equally.",
            },
          ],
        },
        {
          id: "data-yields",
          heading: "5.3 Yields and control variables",
          paragraphs: [
            "Zero-coupon government bond yields at maturities of 3 months and 1, 2, 3, 5, 7 and 10 years are obtained from national central banks or estimated from par yields using the Nelson–Siegel–Svensson method. Our main dependent variable is the 10-year yield. Control variables include the domestic policy rate, the change in the United States 10-year Treasury yield, the CBOE volatility index (VIX) as a measure of global risk aversion, the log change in the bilateral exchange rate against the US dollar, and, at monthly frequency, year-on-year consumer price inflation and industrial production growth. We date crisis episodes as follows: August–December 2011, May–September 2013, June 2015–February 2016, February–June 2020 and March–October 2022. Together these cover 32 of the 159 months in the sample, or about 20 percent.",
            "Table 2 reports summary statistics. Average 10-year yields range from 0.4 percent in Japan to 7.5 percent in Indonesia. Indonesia has by far the most volatile long-term yields, with a standard deviation of monthly changes of 33 basis points, followed by India and Thailand. The sentiment index is moderately persistent, with a monthly autocorrelation of between 0.79 and 0.86, and is more volatile in crisis months, when its standard deviation is roughly 1.6 times that in non-crisis months.",
          ],
          table: {
            id: "tab-summary",
            caption: "Table 2. Summary statistics, monthly data, January 2010 – March 2023",
            columns: ["Economy", "10-year yield, mean (%)", "Std. dev. of monthly change (bp)", "Foreign holdings, mean (%)", "Sentiment, autocorrelation", "Sentiment std. dev., crisis / non-crisis"],
            rows: [
              ["China", "3.21", "11.4", "6.8", "0.84", "1.5"],
              ["India", "7.37", "16.9", "3.1", "0.81", "1.6"],
              ["Indonesia", "7.48", "33.2", "29.7", "0.79", "1.8"],
              ["Japan", "0.41", "4.9", "9.4", "0.86", "1.4"],
              ["Korea", "2.68", "14.3", "15.6", "0.83", "1.7"],
              ["Thailand", "2.70", "15.8", "13.2", "0.82", "1.6"],
            ],
            note: "Yields are month-end zero-coupon 10-year government bond yields. Foreign holdings are the share of outstanding local-currency government bonds held by non-residents, from national sources. The sentiment index is standardised to unit variance for each economy over the full sample; the last column reports the ratio of its standard deviation in crisis months to that in non-crisis months. Sample of 159 months.",
          },
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical strategy",
      paragraphs: [
        "We proceed in three steps. We first measure how much of the variation in long-term yields is associated with news sentiment, then decompose the yield response into expectations and term-premium components, and finally evaluate whether sentiment improves out-of-sample forecasts of yields.",
      ],
      subsections: [
        {
          id: "strategy-contemporaneous",
          heading: "6.1 Sentiment and yield changes",
          paragraphs: [
            "For each economy we estimate Δy(t) = α + β ΔS(t) + γ'X(t) + ε(t) at monthly frequency, where Δy(t) is the change in the 10-year yield in basis points, ΔS(t) the change in the sentiment index and X(t) a vector of controls: the change in the US 10-year yield, the change in the VIX, the change in the domestic policy rate and the exchange-rate change. Standard errors are computed with the Newey–West estimator with six lags [24]. Our measure of explanatory power is the incremental R², defined as the increase in R² when ΔS(t) is added to a regression containing the controls. We report it for the full sample and separately for crisis months by estimating the regression with sentiment interacted with crisis and non-crisis indicators and computing the incremental R² within each subsample.",
            "Because news may itself respond to yield movements — journalists write about bond-market sell-offs — the contemporaneous relationship should not be interpreted as causal. We address reverse causality in two ways. First, we construct a version of the index that excludes any article mentioning bonds, yields or interest rates, so that it captures news about the broader economy rather than reporting of bond-market developments. Second, we estimate local projections [28] of yields at horizons of one to twelve months on the lagged level of sentiment, which uses only information available before the yield change.",
          ],
        },
        {
          id: "strategy-decomposition",
          heading: "6.2 Expectations and term premia",
          paragraphs: [
            "To decompose yields, we estimate a five-factor affine term-structure model for each economy using the regression-based approach of Adrian, Crump and Moench {10}. The pricing factors are the first five principal components of zero-coupon yields. The model produces fitted yields and the yields that would prevail under risk-neutral pricing; the difference between them is the term premium. For Japan, where short rates were at or near zero throughout the sample, we follow the approach discussed by Hamilton and Wu {26} and treat the estimated risk-neutral component with caution, reporting results for Japan both with and without the decomposition. We then estimate the sentiment regression separately for changes in the expected-rate component and in the term premium.",
          ],
        },
        {
          id: "strategy-forecasting",
          heading: "6.3 Forecasting framework",
          paragraphs: [
            "Our benchmark forecasting model is a three-factor Gaussian affine term-structure model estimated with the normalisation of Joslin, Singleton and Zhu {9}, in which the factors are the first three principal components of yields (level, slope and curvature). The augmented model adds the sentiment index as an unspanned factor: it enters the vector autoregression that governs the dynamics of the factors under the physical measure but does not enter the pricing equation directly, so that it can forecast future factors without affecting the current cross-section of yields [12]. This specification is attractive because it nests the benchmark and allows us to attribute any forecast improvement to the information in news.",
            "Both models are estimated recursively on an expanding window starting in January 2010, with the first forecast origin in January 2016. At each monthly origin we forecast the 10-year yield 1, 3, 6 and 12 months ahead. With the sample ending in March 2023, this gives 86 forecasts at the one-month horizon and 75 at the twelve-month horizon for each economy. We compare models by the ratio of root mean squared forecast errors (RMSE) of the augmented model to the benchmark, so that a ratio below one indicates an improvement. Because the models are nested, we assess statistical significance with the Clark–West test [17], and report the Diebold–Mariano statistic [16] as a further check. We also compare both models with a random walk and with the dynamic Nelson–Siegel model of Diebold and Li {6}.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "This section presents the contemporaneous relationship between sentiment and yields, the out-of-sample forecasting results, and the dynamic responses of yields to sentiment.",
      ],
      subsections: [
        {
          id: "results-contemporaneous",
          heading: "7.1 How much of the variation in yields does sentiment explain?",
          paragraphs: [
            "Table 3 reports the monthly regressions. The sentiment coefficient is statistically significant at the 1 percent level in five of the six economies and at the 5 percent level in China. A one-standard-deviation improvement in sentiment is associated with a 6.3 basis point increase in the 10-year yield in Korea, a 4.9 basis point increase in Thailand, 4.1 basis points in China and 1.6 basis points in Japan, where yields were constrained by yield-curve control for much of the period. In India and Indonesia, by contrast, the same improvement is associated with yield declines of 5.2 and 11.8 basis points respectively. Relative to the volatility of monthly yield changes reported in Table 2, these are economically meaningful magnitudes: in Indonesia, a one-standard-deviation change in sentiment corresponds to more than a third of a standard deviation of monthly yield changes.",
            "The incremental R² averages 0.10 across the six economies over the full sample, ranging from 0.06 in China to 0.15 in Indonesia. In other words, news sentiment explains about 10 percent of the variation in monthly 10-year yield changes over and above global yields, risk aversion, policy-rate changes and exchange-rate movements. During crisis episodes the incremental R² rises substantially, to 0.29 on average and to 0.41 in Indonesia. Outside crises it averages only 0.05. This pattern supports our second hypothesis: news tone matters most for bond markets when uncertainty is high and investors pay closest attention to news. The results are similar when we use the version of the index that excludes all articles mentioning bonds or interest rates, for which the average incremental R² is 0.09 overall and 0.26 in crisis months, suggesting that the relationship does not simply reflect news reporting of bond-market movements.",
          ],
          table: {
            id: "tab-contemporaneous",
            caption: "Table 3. News sentiment and monthly changes in 10-year yields",
            columns: ["Economy", "β (bp per s.d.)", "Std. error", "Incremental R², full sample", "Incremental R², crisis months", "Incremental R², non-crisis months"],
            rows: [
              ["China", "4.1**", "(1.7)", "0.06", "0.19", "0.03"],
              ["India", "−5.2***", "(1.6)", "0.08", "0.27", "0.04"],
              ["Indonesia", "−11.8***", "(2.9)", "0.15", "0.41", "0.07"],
              ["Japan", "1.6***", "(0.5)", "0.07", "0.22", "0.04"],
              ["Korea", "6.3***", "(1.4)", "0.13", "0.33", "0.07"],
              ["Thailand", "4.9***", "(1.5)", "0.11", "0.30", "0.06"],
              ["Average", "—", "—", "0.10", "0.29", "0.05"],
            ],
            note: "Each row reports a regression of the monthly change in the 10-year zero-coupon yield (basis points) on the monthly change in the standardised sentiment index, controlling for changes in the US 10-year yield, the VIX, the domestic policy rate and the exchange rate against the US dollar. Newey–West standard errors with six lags in parentheses. The incremental R² is the increase in R² from adding sentiment to the regression with controls only. *** p < 0.01, ** p < 0.05, * p < 0.1. 158 monthly observations per economy.",
          },
        },
        {
          id: "results-forecasting",
          heading: "7.2 Out-of-sample forecasts",
          paragraphs: [
            "Table 4 reports the forecasting results. At the one-month horizon the augmented model offers only small gains: the RMSE ratio averages 0.98, and the improvement is statistically significant in two economies. This is unsurprising, since month-ahead changes in long-term yields are close to unpredictable. The gains grow with the horizon, to an average ratio of 0.95 at three months and 0.92 at six months. At the one-year horizon the ratio averages 0.89, meaning that adding news sentiment reduces the RMSE of the 10-year yield forecast by approximately 11 percent. The improvement at this horizon is significant at the 5 percent level or better according to the Clark–West test in five of the six economies, and is largest in Indonesia (17 percent) and India (14 percent) and smallest in Japan (5 percent).",
            "Figure 2 shows the average RMSE reduction by horizon for the full evaluation sample and for an evaluation sample excluding forecast targets that fall within crisis episodes. The gains outside crises are roughly two-thirds as large, at 7 percent at the one-year horizon, indicating that the improvement is not driven entirely by a few turbulent months but is largest when it matters most. The augmented model also outperforms the dynamic Nelson–Siegel model of Diebold and Li {6} at all horizons beyond one month, and beats the random walk at the six- and twelve-month horizons in every economy, which the benchmark affine model does in only three of the six.",
          ],
          table: {
            id: "tab-forecast",
            caption: "Table 4. Out-of-sample forecast accuracy for the 10-year yield: RMSE ratio of the sentiment-augmented to the benchmark affine model",
            columns: ["Economy", "h = 1 month", "h = 3 months", "h = 6 months", "h = 12 months", "Benchmark RMSE, h = 12 (bp)"],
            rows: [
              ["China", "0.99", "0.96", "0.94", "0.91**", "38"],
              ["India", "0.97*", "0.94**", "0.90**", "0.86***", "71"],
              ["Indonesia", "0.96**", "0.92**", "0.87***", "0.83***", "112"],
              ["Japan", "1.00", "0.98", "0.97", "0.95", "14"],
              ["Korea", "0.98", "0.95*", "0.91**", "0.88***", "64"],
              ["Thailand", "0.99", "0.96", "0.93*", "0.91**", "58"],
              ["Average", "0.98", "0.95", "0.92", "0.89", "60"],
            ],
            note: "RMSE ratios below one indicate that the model augmented with the news-sentiment index as an unspanned factor forecasts more accurately than the benchmark three-factor Gaussian affine term-structure model. Recursive estimation on an expanding window from January 2010; forecast origins January 2016 onwards, with targets up to March 2023 (86 forecasts at h = 1 and 75 at h = 12). Stars denote significance of the Clark–West test of equal predictive accuracy: *** p < 0.01, ** p < 0.05, * p < 0.1.",
          },
          figures: [
            {
              id: "fig-forecast-gains",
              caption: "Figure 2. Average reduction in RMSE of 10-year yield forecasts from adding news sentiment, by horizon",
              kind: "bar",
              xLabels: ["1 month", "3 months", "6 months", "12 months"],
              yLabel: "RMSE reduction relative to benchmark (%)",
              series: [
                { name: "Full evaluation sample", values: [2, 5, 8, 11] },
                { name: "Excluding crisis targets", values: [1, 3, 5, 7] },
              ],
              note: "Average across the six economies of one minus the RMSE ratio of the sentiment-augmented to the benchmark affine model, in percent. The second series excludes forecasts whose target month falls in one of the crisis episodes defined in Section 5.3.",
            },
          ],
        },
        {
          id: "results-dynamics",
          heading: "7.3 Dynamic responses",
          paragraphs: [
            "Local projections of the 10-year yield on the lagged level of sentiment, controlling for lagged yields, the policy rate and global variables, show that the information in news is absorbed gradually. In Korea, a one-standard-deviation improvement in sentiment is followed by a cumulative increase in the 10-year yield of 4.8 basis points after three months and 11.2 basis points after twelve months, both significant at the 5 percent level. In Indonesia the corresponding responses are declines of 9.4 and 23.1 basis points. In both cases the response at twelve months is roughly twice the contemporaneous coefficient, consistent with the forecasting gains growing with the horizon. The responses are not reversed within two years, which suggests that sentiment carries information about fundamentals and risk premia rather than transient noise that is subsequently corrected, a contrast with the short-lived equity-market effects documented by Tetlock {1}.",
            "The policy-rate response provides a further check on the interpretation. In Korea, Thailand and China, a positive sentiment shock is followed by a statistically significant increase in the policy rate within nine months, consistent with news anticipating monetary tightening. In India and Indonesia the policy-rate response is small and insignificant, so the yield response there must operate largely through other channels. We examine these channels next.",
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and heterogeneity",
      paragraphs: [
        "Table 5 decomposes the response of the 10-year yield into changes in the expected average short rate and the term premium. In Korea, Thailand and China, the expected-rate component accounts for between 62 and 74 percent of the total response, and the term-premium component is small and often insignificant. In India and Indonesia the picture is reversed: positive sentiment lowers the term premium by 6.1 and 13.0 basis points respectively, more than offsetting a small increase in expected rates. These results are consistent with our first hypothesis that the expectations channel dominates where the investor base is domestic and the monetary framework is credible, while the term-premium channel dominates where foreign investors set prices and risk premia are high. For Japan the decomposition is less reliable because of the lower bound and yield-curve control, but it attributes most of the small response to the term premium.",
        "Foreign ownership is the most important observable characteristic associated with the term-premium channel. Pooling the six economies and interacting sentiment with the time-varying share of government bonds held by non-residents, we find that a 10 percentage point increase in foreign holdings shifts the sentiment coefficient by −3.7 basis points per standard deviation (standard error 1.2). Within Indonesia, whose foreign ownership share fell from more than a third before 2020 to about 15 percent by 2022, the sentiment coefficient in the post-2020 period is roughly half its pre-2020 value. This within-country evidence is consistent with the view that the global financial cycle operates partly through the sentiment of foreign investors towards local assets [20][21].",
        "We also examine which types of news drive the results. Classifying articles by topic with a keyword-based procedure, we find that news about the domestic macroeconomy and trade accounts for most of the explanatory power for expected-rate components, while news about capital flows, exchange rates and the global economy accounts for most of the explanatory power for term premia. Articles reporting central-bank statements and decisions contribute only modestly: excluding them reduces the average incremental R² from 0.10 to 0.09, suggesting that the broader news environment, rather than central-bank communication itself, accounts for the bulk of the relationship.",
      ],
      table: {
        id: "tab-decomposition",
        caption: "Table 5. Decomposition of the yield response to sentiment into expected short rates and term premia",
        columns: ["Economy", "Total response (bp per s.d.)", "Expected short rate", "Term premium", "Expected-rate share (%)"],
        rows: [
          ["China", "4.1**", "2.9***", "1.2", "71"],
          ["India", "−5.2***", "0.9", "−6.1***", "—"],
          ["Indonesia", "−11.8***", "1.2", "−13.0***", "—"],
          ["Japan", "1.6***", "0.4", "1.2**", "25"],
          ["Korea", "6.3***", "3.9***", "2.4**", "62"],
          ["Thailand", "4.9***", "3.6***", "1.3", "74"],
        ],
        note: "Coefficients from monthly regressions of changes in the 10-year yield and its two components on changes in the sentiment index, with the controls of Table 3. Components are obtained from a five-factor affine term-structure model estimated by the regression-based method of Adrian, Crump and Moench (2013). The expected-rate share is not reported where the components have opposite signs. Results for Japan should be interpreted with caution because of the effective lower bound and yield-curve control. *** p < 0.01, ** p < 0.05, * p < 0.1.",
      },
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 summarises a range of robustness checks, reporting for each alternative the average incremental R² in crisis months and the average RMSE ratio at the one-year horizon. Using only the dictionary component of the index lowers the crisis-month incremental R² to 0.22 and raises the RMSE ratio to 0.93, while using only the classifier gives results close to the baseline, indicating that the contextual information captured by the language model adds value. Indices built only from local-language articles perform better than those built only from English-language articles, particularly for China, Indonesia and Thailand, which highlights the value of multilingual text for emerging markets where much economically relevant reporting is not available in English.",
        "The results are robust to controlling for the regional economic policy uncertainty index [3], which itself has little incremental forecasting power once sentiment is included, and to controlling for the forward-rate factor of Cochrane and Piazzesi {11}, which suggests that sentiment does not merely proxy for information already contained in forward rates. Varying the half-life of the exponential weights between 7 and 90 days changes the results little. Finally, the forecasting gains are similar when we evaluate the models over 2016–2019 only, before the pandemic, with an average RMSE ratio of 0.91 at the one-year horizon, and when we use a rolling rather than expanding estimation window.",
      ],
      table: {
        id: "tab-robustness",
        caption: "Table 6. Robustness of the main results to alternative index constructions and specifications",
        columns: ["Specification", "Incremental R², crisis months (average)", "RMSE ratio, h = 12 (average)", "Economies with significant gain at h = 12"],
        rows: [
          ["Baseline", "0.29", "0.89", "5 of 6"],
          ["Dictionary component only", "0.22", "0.93", "3 of 6"],
          ["Classifier component only", "0.28", "0.90", "5 of 6"],
          ["English-language articles only", "0.23", "0.92", "4 of 6"],
          ["Local-language articles only", "0.27", "0.90", "5 of 6"],
          ["Excluding articles on bonds and interest rates", "0.26", "0.90", "5 of 6"],
          ["Excluding central-bank news", "0.27", "0.90", "5 of 6"],
          ["Controlling for policy uncertainty index", "0.27", "0.90", "5 of 6"],
          ["Controlling for Cochrane–Piazzesi factor", "0.28", "0.90", "5 of 6"],
          ["Evaluation period 2016–2019 only", "—", "0.91", "4 of 6"],
          ["Rolling 72-month estimation window", "—", "0.90", "5 of 6"],
        ],
        note: "Averages across the six economies. The incremental R² is computed as in Table 3 for crisis months; the RMSE ratio is computed as in Table 4. The last column counts economies for which the Clark–West test rejects equal predictive accuracy at the 5 percent level at the twelve-month horizon.",
      },
    },
    {
      id: "discussion",
      heading: "10. Discussion and policy implications",
      paragraphs: [
        "Our findings have several implications for central banks in the region. First, a substantial part of the movement in long-term yields during crises reflects shifts in the tone of economic news that are only loosely connected to central-bank actions and statements. This means that the effectiveness of communication depends on the information environment in which it is received. When news sentiment deteriorates sharply, as it did in early 2020 and during 2022, the same policy message may be met with very different movements in long-term rates than in calmer periods. Central banks that monitor news sentiment in real time can better judge whether movements in yields reflect changes in the expected policy path or changes in risk premia, and tailor their communication accordingly [13][14].",
        "Second, the dominance of the term-premium channel in economies with high foreign ownership suggests that in these markets communication about financial stability, liquidity backstops and the policy reaction function to capital outflows may be as important as guidance about the path of policy rates. During the 2013 taper tantrum and the 2022 tightening cycle, yields in India and Indonesia rose sharply as sentiment fell, even though domestic policy-rate expectations changed little. Measures that reduce the sensitivity of term premia to swings in sentiment, such as deepening the domestic institutional investor base, may reduce the exposure of these economies to the global financial cycle.",
        "Third, the index provides a timely indicator of financial conditions. Because it is available daily and is not revised, it can complement indicators based on survey or hard data, which are available only with a lag. Its correlation with purchasing managers' indices and policy uncertainty and its forecasting power for yields suggest that it captures information that is relevant both for macroeconomic monitoring and for asset pricing. Central banks and finance ministries could construct similar indices from their own news monitoring at low cost.",
        "Several limitations should be noted. The relationship between sentiment and yields is not causal in a strict sense: news reflects underlying economic developments, and our results show that its tone is a useful summary of information relevant to bond pricing rather than that news causes yields to move independently of fundamentals. Our sample period includes an unusual period of low rates and unconventional policy, and the relationship may change as monetary policy normalises. Finally, our classifier was trained on articles published during the sample period; as language and media structures evolve, the index will need periodic validation.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We construct a daily news-sentiment index for six Asian economies from approximately 1.2 million economic news articles over 2010–2023, combining a finance-specific dictionary with a fine-tuned language model. The index explains about 10 percent of the variation in monthly changes in 10-year government bond yields, rising to 29 percent during crisis episodes, and adding it to a standard affine term-structure model improves the out-of-sample accuracy of one-year-ahead 10-year yield forecasts by approximately 11 percent. Good news raises long-term yields through expected policy rates in economies with domestic investor bases and credible monetary frameworks, and lowers them through term premia where foreign investors are marginal price-setters.",
        "These findings suggest that news sentiment is a useful real-time indicator of financial conditions and that central banks should take the broader information environment into account when designing and evaluating their communication. Future work could extend the index to corporate bond and foreign-exchange markets, examine the interaction between news sentiment and central-bank communication at higher frequency, and study how the growing role of social media and online news changes the transmission of information to bond markets.",
      ],
    },
    {
      id: "appendix-a",
      heading: "Appendix A. Construction of the sentiment index",
      paragraphs: [
        "Annotation. The labelled sample of 13,600 articles was drawn by stratified random sampling across economies, years and languages. Each article was labelled by two coders, native speakers of the article's language with training in economics, as positive, neutral or negative with respect to the economic outlook of the economy concerned. Disagreements, which occurred for 19 percent of articles, were resolved by a third coder. Of the labelled articles, 70 percent were used for training, 15 percent for validation and 15 percent for testing.",
        "Classifier. We fine-tuned the multilingual BERT base model on the training sample for four epochs with a learning rate of 2 × 10⁻⁵ and a maximum sequence length of 512 tokens, using the first 512 tokens of each article. Accuracy on the test sample is 0.79 overall and ranges from 0.74 (Thai) to 0.83 (English). The dictionary-based method achieves 0.66 overall. Combining the two scores improves the correlation with human labels from 0.68 for the classifier alone to 0.71.",
        "Dictionary. The local-language dictionaries contain between 1,850 and 2,600 positive and negative terms. Translations were made independently by two economists for each language and reconciled. Because Chinese, Japanese and Thai do not separate words with spaces, articles in these languages were segmented with standard open-source tokenisers before dictionary matching.",
        "Term-structure models. The benchmark affine model is estimated by maximum likelihood with three pricing factors and constant market prices of risk that depend linearly on the factors. Measurement errors are assumed to be independent and identically distributed across maturities. In the augmented model, the physical dynamics are a first-order vector autoregression in the three yield factors and the month-end sentiment index; the risk-neutral dynamics involve only the three yield factors, so that the model-implied cross-section of yields is identical to that of the benchmark.",
      ],
    },
  ],
};
