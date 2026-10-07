// Vol. 31, No. 2 (August 2026) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2026-v31-i2-02",
  title: "Post-Pandemic Inflation Persistence and the Slope of the Phillips Curve: Evidence from Korea and Japan",
  authors: [
    { name: "Haruto Nishikawa", corresponding: true, affiliation: { department: "Graduate School of Economics", institution: "Kyoto University", city: "Kyoto", country: "Japan" } },
    { name: "Seo-yeon Baek", corresponding: false, affiliation: { department: "Department of Economics and Finance", institution: "Hanyang University", city: "Seoul", country: "South Korea" } },
  ],
  abstract:
    "Did the post-pandemic inflation surge change the slope of the Phillips curve and the persistence of inflation in two ageing, export-oriented economies with very different monetary histories? We assemble a panel of quarterly consumer price sub-indices for 16 Korean metropolitan areas and provinces and 47 Japanese prefectures from 2010 to 2024, matched with regional labour-market slack built from vacancy and unemployment statistics. Region fixed effects absorb national inflation expectations and monetary policy, and a shift-share instrument based on pre-period industry composition and national demand shocks addresses the simultaneity of regional slack. Estimates vary over time through rolling windows and a regime interaction. The regional slope rises from 0.04 in 2010–2019 to 0.09 in 2021–2024 in Korea, and from 0.02 to 0.05 in Japan, so that Japan's slope remains about half of Korea's. Inflation persistence, measured as the sum of autoregressive coefficients, increases from 0.52 to 0.71. Roughly 40 per cent of the steepening is attributable to energy and food pass-through into services. Disinflation under inflation targeting would therefore require less slack than in the 2010s.",
  keywords: ["inflation persistence", "Phillips curve", "regional prices", "monetary policy", "Korea and Japan"],
  jelCodes: ["E31", "E52", "E58", "C33"],
  pages: "1–30",
  volume: 31,
  issue: 2,
  year: 2026,
  received: "2025-04-22",
  accepted: "2026-02-27",
  published: "2026-08-15",
  publishedOnline: "2026-08-04",
  citations: 1,
  downloads: 861,
  pdfSize: "1.58 MB",
  type: "Research Article",
  acknowledgments:
    "We thank seminar participants at Kyoto University, Hanyang University and the Korea–Japan joint macroeconomics workshop, two anonymous referees and the handling editor for constructive comments. Staff at the statistical offices of both countries kindly clarified the construction of the regional price series. All errors are our own.",
  dataAvailability:
    "Regional consumer price indices are published by Statistics Korea and by the Statistics Bureau of Japan; regional vacancy and unemployment data are published by the Ministry of Employment and Labor and the Ministry of Health, Labour and Welfare. The assembled panel, the industry-composition shares used for the instrument and replication code are available from the corresponding author.",
  editorialNote:
    "Using city-level price panels for Korea and Japan, the authors find that the Phillips-curve slope roughly doubled after 2021 and that inflation persistence rose from 0.52 to 0.71. Japan's slope remained about half of Korea's, consistent with lower wage pass-through.",
  refs: [
    /* 1 */ "Hazell, J., Herreño, J., Nakamura, E., & Steinsson, J. (2022). The slope of the Phillips curve: Evidence from U.S. states. Quarterly Journal of Economics, 137(3), 1299–1344.",
    /* 2 */ "McLeay, M., & Tenreyro, S. (2020). Optimal inflation and the identification of the Phillips curve. NBER Macroeconomics Annual, 34, 199–255.",
    /* 3 */ "Galí, J., & Gertler, M. (1999). Inflation dynamics: A structural econometric analysis. Journal of Monetary Economics, 44(2), 195–222.",
    /* 4 */ "Calvo, G. A. (1983). Staggered prices in a utility-maximizing framework. Journal of Monetary Economics, 12(3), 383–398.",
    /* 5 */ "Blanchard, O. (2016). The Phillips curve: Back to the '60s? American Economic Review, 106(5), 31–34.",
    /* 6 */ "Del Negro, M., Lenza, M., Primiceri, G. E., & Tambalotti, A. (2020). What's up with the Phillips curve? Brookings Papers on Economic Activity, Spring 2020, 301–357.",
    /* 7 */ "Stock, J. H., & Watson, M. W. (2007). Why has U.S. inflation become harder to forecast? Journal of Money, Credit and Banking, 39(s1), 3–33.",
    /* 8 */ "Ball, L., & Mazumder, S. (2011). Inflation dynamics and the Great Recession. Brookings Papers on Economic Activity, Spring 2011, 337–381.",
    /* 9 */ "Nakamura, E., & Steinsson, J. (2014). Fiscal stimulus in a monetary union: Evidence from US regions. American Economic Review, 104(3), 753–792.",
    /* 10 */ "Beraja, M., Hurst, E., & Ospina, J. (2019). The aggregate implications of regional business cycles. Econometrica, 87(6), 1789–1833.",
    /* 11 */ "Goldsmith-Pinkham, P., Sorkin, I., & Swift, H. (2020). Bartik instruments: What, when, why, and how. American Economic Review, 110(8), 2586–2624.",
    /* 12 */ "Borusyak, K., Hull, P., & Jaravel, X. (2022). Quasi-experimental shift-share research designs. Review of Economic Studies, 89(1), 181–213.",
    /* 13 */ "Fuhrer, J., & Moore, G. (1995). Inflation persistence. Quarterly Journal of Economics, 110(1), 127–159.",
    /* 14 */ "Andrews, D. W. K., & Chen, H.-Y. (1994). Approximately median-unbiased estimation of autoregressive models. Journal of Business & Economic Statistics, 12(2), 187–204.",
    /* 15 */ "Coibion, O., & Gorodnichenko, Y. (2015). Is the Phillips curve alive and well after all? Inflation expectations and the missing disinflation. American Economic Journal: Macroeconomics, 7(1), 197–232.",
    /* 16 */ "Coibion, O., Gorodnichenko, Y., & Kumar, S. (2018). How do firms form their expectations? New survey evidence. American Economic Review, 108(9), 2671–2713.",
    /* 17 */ "Watanabe, K., & Watanabe, T. (2018). Why has Japan failed to escape from deflation? Asian Economic Policy Review, 13(1), 23–41.",
    /* 18 */ "Kuttner, K. N., & Posen, A. S. (2001). The Great Recession: Lessons for macroeconomic policy from Japan. Brookings Papers on Economic Activity, 2001(2), 93–185.",
    /* 19 */ "Ball, L., & Mazumder, S. (2019). A Phillips curve with anchored expectations and short-term unemployment. Journal of Money, Credit and Banking, 51(1), 111–137.",
    /* 20 */ "Barnichon, R., & Mesters, G. (2020). Identifying modern macro equations with old shocks. Quarterly Journal of Economics, 135(4), 2255–2298.",
    /* 21 */ "Forbes, K. J. (2019). Inflation dynamics: Dead, dormant, or determined abroad? Brookings Papers on Economic Activity, Fall 2019, 257–338.",
    /* 22 */ "Gilchrist, S., Schoenle, R., Sim, J., & Zakrajšek, E. (2017). Inflation dynamics during the financial crisis. American Economic Review, 107(3), 785–823.",
    /* 23 */ "Ball, L., Leigh, D., & Mishra, P. (2022). Understanding U.S. inflation during the COVID era. Brookings Papers on Economic Activity, Fall 2022, 1–80.",
    /* 24 */ "Rubbo, E. (2023). Networks, Phillips curves, and monetary policy. Econometrica, 91(4), 1417–1455.",
    /* 25 */ "Newey, W. K., & West, K. D. (1987). A simple, positive semi-definite, heteroskedasticity and autocorrelation consistent covariance matrix. Econometrica, 55(3), 703–708.",
    /* 26 */ "Stock, J. H., & Watson, M. W. (2020). Slack and cyclically sensitive inflation. Journal of Money, Credit and Banking, 52(S2), 393–428.",
    /* 27 */ "Mavroeidis, S., Plagborg-Møller, M., & Stock, J. H. (2014). Empirical evidence on inflation expectations in the New Keynesian Phillips curve. Journal of Economic Literature, 52(1), 124–188.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "The inflation surge that followed the pandemic was the first sustained episode of high inflation in advanced economies in four decades, and it reopened a question that the low-inflation 2010s had seemed to close. For years the relationship between slack and inflation, the Phillips curve, appeared to have flattened almost to nothing [5][6]. Unemployment fell to multi-decade lows in many economies with little visible effect on prices, and central banks learned to treat inflation as largely insensitive to domestic conditions. Since 2021, however, prices have responded to tight labour markets and supply disruptions with a speed that few forecasters anticipated [23]. Whether the slope of the Phillips curve has genuinely steepened, and whether inflation has become more persistent once it is under way, matters directly for how much slack a central bank must create to bring inflation back to target.",
        "Aggregate time series are poorly suited to answering this question. National inflation depends on monetary policy and on inflation expectations, which move together with the business cycle and cannot be separated from slack in a single time series [2][27]. The regional approach, pioneered for the United States by {1}, circumvents this problem. National expectations and the national policy rate are common to all regions in a given quarter and are absorbed by time effects, so the cross-regional relationship between local slack and local inflation identifies the slope of the structural curve under conditions that are far weaker than those required for a time-series estimate. The cost is that regional estimates identify the slope for local shocks, which may differ from the response of national inflation to national slack; we return to this point in Section 10.",
        "This paper applies the regional approach to two economies that make an instructive pair. Korea and Japan are both ageing, export-oriented, energy-importing economies with advanced manufacturing sectors, yet their recent monetary histories could hardly differ more. Japan lived with near-zero inflation, and at times deflation, for most of the period between the late 1990s and 2021, and its central bank held policy rates at or below zero for much of the sample [18]. Korea, by contrast, has run an inflation-targeting regime with positive policy rates and household inflation expectations that remained well above those in Japan. If the slope of the Phillips curve depends on the monetary regime and on how firms and workers form expectations [15][16], the two countries should react differently to the same global shocks. Both also publish consumer price sub-indices and labour-market statistics at a regional level over a long period, which makes the regional design feasible.",
        "We construct a quarterly panel covering 16 Korean metropolitan areas and provinces and 47 Japanese prefectures from 2010 to 2024, and pair price indices with regional measures of labour-market slack built from vacancy and unemployment statistics. Region fixed effects absorb national expectations, and a shift-share instrument built on pre-period industry composition and national demand shocks addresses the simultaneity between regional prices and regional slack [11][12]. We let the slope vary over time in two ways, through rolling windows and through an interaction with a post-2021 regime indicator, and we estimate persistence as the sum of autoregressive coefficients in regional inflation.",
        "Our central finding is that the regional Phillips curve steepened substantially. In Korea the slope rises from 0.04 in 2010–2019 to 0.09 in 2021–2024, and in Japan from 0.02 to 0.05, so that the slope roughly doubles in both countries while Japan's remains about half of Korea's. Inflation persistence, measured as the sum of autoregressive coefficients, rises from 0.52 to 0.71. Roughly 40 per cent of the steepening is attributable to energy and food pass-through into services prices, a channel through which a global commodity shock is transmitted to local labour-intensive prices. The remainder reflects tighter wage-price links and more frequent price adjustment. These numbers imply that bringing inflation back to target under inflation targeting would require less slack than in the 2010s, although the same steeper curve also implies a faster inflationary response if policy eases prematurely.",
        "The paper contributes to three literatures. First, it extends regional Phillips-curve evidence from the United States [1][9][10] to two Asian economies with different monetary histories, and it shows how the slope changed in the post-pandemic period rather than only on average. Second, it adds to the literature on inflation persistence and the time variation of inflation dynamics [7][13][19] by measuring persistence in regional rather than national data. Third, it speaks to the debate about the sources of recent inflation by quantifying how much of the change in slope runs through energy and food pass-through [21][23][24]. The remainder of the paper proceeds as follows. Section 2 describes the institutional background, Section 3 reviews related literature, Section 4 sets out the framework, Sections 5 and 6 describe the data and empirical strategy, Sections 7 to 9 report results, mechanisms and robustness, and Sections 10 and 11 discuss policy implications and conclude.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korea adopted inflation targeting in 1998, in the aftermath of the Asian financial crisis, and the Bank of Korea has since set a medium-term target of 2 per cent for consumer price inflation. Policy rates were positive throughout the sample and were raised from 0.50 per cent in mid-2021 to 3.50 per cent by early 2023. Wages in Korea are set in a mix of firm-level bargaining and annual enterprise negotiations, with a large non-regular workforce whose pay is more responsive to market conditions. Services prices, notably personal services and restaurant meals, are comparatively flexible and are strongly influenced by wage costs.",
        "Japan's monetary history is very different. After the collapse of the asset-price bubble the economy experienced three decades of low and sometimes negative inflation, and the Bank of Japan moved to zero interest rates in 1999, to quantitative easing in 2001 and to negative rates and yield-curve control after 2016 [18]. Wage setting is dominated by the annual spring wage offensive, in which large employers settle on very small increases that serve as a benchmark for the rest of the economy, and long-term implicit contracts have made firms reluctant to adjust either wages or the prices of services [17]. The 2 per cent target adopted in 2013 was not reached on a sustained basis until 2022, when imported energy and food prices pushed headline inflation above 3 per cent.",
        "Both economies were hit by the same global shocks: supply-chain disruptions in 2021, the surge in energy and food prices that followed the invasion of Ukraine in 2022, and a sharp depreciation of the domestic currency against the dollar. Both are net energy importers, and food accounts for a large share of consumer expenditure. The shocks reached local prices differently, however. In Korea, services inflation increased visibly from the second half of 2021, with the regional consumer price index for personal services rising above 4 per cent in most areas by 2022. In Japan, services inflation lagged by roughly a year and was smaller, reflecting the cautious wage settlements of the spring 2022 round, and the pass-through of imported costs into goods prices was initially absorbed by firms' margins. Table 1 summarises the regional samples.",
        "Regional price statistics are produced by the national statistical offices: Statistics Korea publishes consumer price indices for each of the first-tier administrative divisions, and the Statistics Bureau of Japan publishes indices for the capital city of each prefecture and for the ward area of Tokyo. Regional labour-market statistics come from the Economically Active Population Survey and the job-openings statistics of the Ministry of Employment and Labor in Korea, and from the Labour Force Survey and the job-openings-to-applicants ratio of the Ministry of Health, Labour and Welfare in Japan. Because the central bank sets a single policy rate and the exchange rate is common to all regions, these differences are absorbed by time effects in our design.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Regional samples and summary statistics",
          columns: ["", "Korea", "Japan"],
          rows: [
            ["Regions in the panel", "16", "47"],
            ["Sample period", "2010Q1–2024Q4", "2010Q1–2024Q4"],
            ["Regional observations (excluding 2020)", "896", "2,632"],
            ["Mean inflation 2010–2019 (per cent, annualised)", "1.6", "0.4"],
            ["Mean inflation 2021–2024 (per cent, annualised)", "3.9", "2.3"],
            ["Standard deviation of regional slack 2010–2019 (pp)", "0.84", "0.71"],
            ["Standard deviation of regional slack 2021–2024 (pp)", "0.92", "0.78"],
            ["Services share in regional CPI basket (per cent)", "48", "52"],
            ["Energy and food share in regional CPI basket (per cent)", "33", "36"],
          ],
          note: "Note: Inflation is the annualised quarterly change in the regional consumer price index. Slack is the regional unemployment gap, defined as the deviation of the regional unemployment rate from its region-specific trend, in percentage points, adjusted using vacancy statistics as described in Section 5. Korea excludes Sejong, whose price series begins in 2012. The year 2020 is dropped from the regime comparison.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our work builds on the large literature on the New Keynesian Phillips curve, in which current inflation depends on expected future inflation and a measure of real marginal cost or slack [3][4]. Estimating the slope from national time series has proved difficult because of weak identification and the sensitivity of estimates to the treatment of expectations and the choice of slack measure [2][27]. A related strand argues that the curve flattened after the 1980s because inflation expectations became anchored [7][8][15], or because monetary policy itself became better at stabilising inflation and thereby masked the underlying relationship [2][20]. Others emphasise nonlinearity and time variation, including the possibility that the curve steepens when slack is very low [6][26].",
        "The regional approach exploits the fact that, within a monetary union or a single country, regions share a common monetary policy and common expectations. {1} estimate the slope across U.S. states and metropolitan areas and find a much steeper curve than aggregate evidence suggests, but one that is also very flat, with a slope of roughly one-tenth of what would be needed to explain the 1970s. {9} use regional variation in a similar manner to estimate fiscal multipliers, and {10} show that regional business cycles can be aggregated to national outcomes under suitable assumptions. We follow the identification logic of these studies, but we focus on two countries outside the United States and on the change in the slope after 2021.",
        "A second literature studies the persistence of inflation. {13} define persistence through the dependence of current inflation on its own past and show that it reflects both price-setting frictions and the monetary regime, and {7} document the declining predictability and persistence of U.S. inflation after the mid-1980s. Median-unbiased estimators of the sum of autoregressive coefficients, as in {14}, address the small-sample bias that plagues persistence estimates. Studies of the financial-crisis period find that firms with weak balance sheets raised prices, which helped avoid deflation [22], and {17} argue that Japan's failure to escape deflation reflects a combination of low inflation expectations and sticky prices and wages.",
        "Finally, a growing body of work examines the post-pandemic inflation. {23} attribute much of the U.S. surge to a combination of supply shocks and a tight labour market, and they emphasise that the Phillips curve steepened as the vacancy-to-unemployment ratio rose. {24} show that in a network economy the effect of a sectoral shock on aggregate inflation depends on input-output linkages, so that an energy shock can raise services prices through intermediate inputs. {21} documents the role of global factors in domestic inflation. Our paper complements this work by providing regional evidence for Korea and Japan and by decomposing the steepening into channels.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "A regional Phillips curve can be derived from a model in which firms in each region set prices in a staggered fashion, subject to a Calvo-type adjustment friction, and consumption is a composite of local goods and tradable goods [1][4]. The resulting regional inflation equation takes the form π_rt = β E_t π_r,t+1 + κ x_rt + φ π_t^N + u_rt, where π_rt is regional inflation, x_rt is regional slack, π_t^N is a national component common to all regions that captures expectations, monetary policy and tradable-goods prices, and κ is the slope. The slope depends on the frequency with which firms reset prices and on the sensitivity of real marginal cost to slack. A higher frequency of price adjustment raises κ, and a greater pass-through from labour-market tightness to wages and thus to marginal cost also raises κ.",
        "Because the national component is common to all regions, time fixed effects absorb it and the cross-regional relation between local slack and local inflation identifies κ without requiring a model for national expectations [1]. The regional slope may be smaller than the aggregate slope if local demand shocks are partly met by imports from other regions, and larger if monetary policy offsets national demand shocks in a way that obscures the aggregate relation [2]. We therefore interpret regional estimates as a lower bound on the structural slope for shocks that are widespread across regions, and as a precise estimate for local shocks.",
        "Three hypotheses organise the empirical analysis. The first (H1) is that the slope steepened after 2021, because the large and widespread shocks of the period increased the frequency of price adjustment and the sensitivity of marginal cost to tightness. Standard menu-cost logic implies that when cost shocks are large, firms reprice more often and the curve steepens [23]. The second (H2) is that inflation persistence rose, because the burst of inflation reduced the weight that firms and households place on the target and increased reliance on recent experience when forming expectations [16]. The third (H3) is that the steepening is larger in Korea than in Japan, because the Korean regime combines more flexible wage setting, higher inflation expectations and a longer record of positive inflation. Within this framework, a sizeable part of the change in slope may reflect a channel that is conceptually distinct from labour-market tightness, namely the pass-through of energy and food costs into services through intermediate inputs [24], which we measure in Section 8.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our analysis combines regional price indices, regional labour-market data and industry-composition data. We describe each in turn and then report summary statistics (Table 1).",
      ],
      subsections: [
        {
          id: "data-prices",
          heading: "5.1 Regional prices",
          paragraphs: [
            "For Korea we use monthly consumer price sub-indices for 16 metropolitan cities and provinces published by Statistics Korea: Seoul, Busan, Daegu, Incheon, Gwangju, Daejeon, Ulsan and the nine provinces. For Japan we use the monthly consumer price index for the capital city of each of the 47 prefectures published by the Statistics Bureau. The indices are available for the all-items basket and for twelve expenditure groups, which we aggregate into three groups: energy and food, goods other than energy and food, and services. Monthly indices are averaged to quarterly frequency, and regional inflation is the annualised quarterly log change.",
            "Our baseline price measure excludes energy and fresh food, which are determined largely in global markets and would otherwise contaminate the relationship with local slack. We call this measure core regional inflation and use it for all main results; Section 8 reintroduces energy and food explicitly. In the consumption basket, services and energy-food each account for roughly half and one-third of regional expenditure respectively (Table 1). One concern is that regional indices are measured in capital cities rather than whole prefectures; we show in Section 9 that results are similar when we restrict attention to the largest metropolitan areas and when we use cities with more than one price collection site.",
          ],
        },
        {
          id: "data-slack",
          heading: "5.2 Regional labour-market slack",
          paragraphs: [
            "Our slack measure combines unemployment and vacancy information. For each region we compute the unemployment rate from the labour force surveys and the ratio of job openings to job seekers from the public employment services. We define slack as the regional unemployment gap, the deviation of the unemployment rate from its region-specific trend estimated by a one-sided filter with a smoothing parameter appropriate for quarterly data. In the baseline, we adjust the unemployment gap for tightness by regressing it on the log vacancy-to-unemployment ratio in a first step and using the fitted value; this follows the logic that vacancy data capture unmet labour demand that the unemployment rate alone understates in a tight market [19][26]. The sign convention is chosen so that a higher value of slack means a looser labour market and a lower inflation rate; the reported slope is therefore the effect on annualised inflation, in percentage points, of a one-percentage-point tighter regional labour market.",
            "Regional slack varies considerably within each country. In the 2010s the standard deviation of regional slack was 0.84 percentage points in Korea and 0.71 in Japan, and it rose modestly after 2021 (Table 1). The cross-regional variation therefore provides ample identifying variation, and its persistence is low enough that fixed effects do not absorb it.",
          ],
        },
        {
          id: "data-instrument",
          heading: "5.3 Industry composition and national demand shocks",
          paragraphs: [
            "The instrument is built from pre-period industry composition and national demand shocks. We use employment shares by industry for each region in 2005, before the start of the sample, from the national population censuses, and combine them with national industry-level employment growth, which serves as the shift component. For each region, the instrument is the sum over industries of the 2005 employment share multiplied by the national growth of employment in that industry, excluding the region's own contribution. Regions with large shares of manufacturing exporters, for example, are more exposed to swings in foreign demand than regions dominated by public services or tourism, and these differences in exposure generate predictable differences in local labour-market tightness that are unrelated to local price-setting shocks.",
            "We also compute national demand shocks as the residual from industry-level export demand and public spending series, following the logic of Bartik-type instruments in which shocks, not shares, provide identifying variation [12]. Both constructions give instruments with strong first-stage relationships to regional slack, as shown in Section 6.",
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "We estimate the regional Phillips curve with region and time fixed effects and allow the slope to differ between a pre-pandemic regime and the post-pandemic period. This section describes the specification, the identification of regional slack and the measurement of persistence.",
      ],
      subsections: [
        {
          id: "strategy-spec",
          heading: "6.1 Baseline specification",
          paragraphs: [
            "Let π_rt denote core inflation in region r in quarter t. The baseline equation is π_rt = α_r + γ_t + κ_0 x_rt + κ_1 (x_rt × Post_t) + ρ(L) π_r,t−1 + ε_rt, where α_r are region fixed effects, γ_t are quarter fixed effects that absorb national expectations, monetary policy, exchange rates and global commodity prices, x_rt is regional slack, Post_t equals one for 2021Q1 to 2024Q4 and ρ(L) is a lag polynomial in the region's own past inflation. The slope in the pre-pandemic period is κ_0 and the slope in the post-pandemic period is κ_0 + κ_1. We drop 2020, in which lockdowns distorted both slack and price collection, from the regime comparison but retain it in the rolling-window estimates. Standard errors are clustered by region, and the persistence estimates use Newey–West corrections for serial correlation [25].",
            "The time effects play a central role. Because they absorb anything common to all regions in a quarter, the coefficient on slack is identified from differences across regions in how inflation moves with relative slack, and our estimates therefore correspond to the slope of the curve for local shocks [1]. We estimate the equation separately for Korea and Japan, since time effects are country-specific, and we also pool the two countries in the persistence analysis, where the national component is allowed to differ by country.",
          ],
        },
        {
          id: "strategy-iv",
          heading: "6.2 Instrumenting regional slack",
          paragraphs: [
            "Regional slack is not exogenous to regional inflation. Positive local demand shocks reduce slack and raise prices, which biases ordinary least squares estimates of the slope upward, while supply shocks that raise prices and lower employment bias them in the opposite direction. We therefore instrument slack with the shift-share instrument described in Section 5.3 and its interaction with the post-pandemic indicator. Identification requires that, conditional on region and time effects, regional differences in industry composition in 2005 affect inflation only through slack [11], or equivalently that the national industry shocks are as good as randomly assigned across regions [12].",
            "Table 2 reports the first-stage relationships and diagnostics. The instrument is strongly related to slack in both countries and both regimes, with Kleibergen–Paap F statistics well above conventional thresholds. We also report the results of a placebo regression in which the instrument is related to inflation in the four years before the start of the sample, using lagged shares; coefficients are small and statistically indistinguishable from zero, which is consistent with the exclusion restriction.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. First stage and instrument diagnostics",
              columns: ["", "Korea 2010–2019", "Korea 2021–2024", "Japan 2010–2019", "Japan 2021–2024"],
              rows: [
                ["Shift-share instrument (first stage)", "−0.62*** (0.11)", "−0.58*** (0.13)", "−0.55*** (0.08)", "−0.51*** (0.10)"],
                ["Kleibergen–Paap F statistic", "31.4", "22.6", "42.8", "29.1"],
                ["Partial R-squared", "0.18", "0.15", "0.21", "0.17"],
                ["Placebo: instrument on pre-sample inflation", "0.01 (0.02)", "0.02 (0.03)", "0.00 (0.01)", "0.01 (0.02)"],
                ["Region fixed effects", "Yes", "Yes", "Yes", "Yes"],
                ["Quarter fixed effects", "Yes", "Yes", "Yes", "Yes"],
                ["Observations", "640", "256", "1,880", "752"],
              ],
              note: "Note: Dependent variable in the first stage is regional slack. Standard errors clustered by region in parentheses. *** p < 0.01. The placebo regresses inflation in 2006–2009 on the instrument constructed from 2005 shares.",
            },
          ],
        },
        {
          id: "strategy-persistence",
          heading: "6.3 Measuring persistence and time variation",
          paragraphs: [
            "We measure persistence by the sum of the coefficients on four lags of regional inflation in the regression with time and region fixed effects, estimated with the bias correction of {14} to address the downward bias of autoregressive estimates in panels with short time dimensions. A sum of coefficients close to one indicates highly persistent inflation, and a value near zero indicates that inflation reverts quickly. Persistence is estimated separately for the pre-pandemic period and the post-pandemic period and also from 32-quarter rolling windows.",
            "To let the slope vary smoothly over time, we estimate the baseline equation on rolling windows of 32 quarters and report the slope at the window's end date. Rolling estimates complement the regime comparison, which imposes a break in 2021, by showing whether the change in slope occurred gradually or abruptly, and by allowing us to examine whether the steepening began before the pandemic.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We present the main slope estimates, the evolution of the slope over time and the persistence estimates in turn.",
      ],
      subsections: [
        {
          id: "results-slope",
          heading: "7.1 The slope of the regional Phillips curve",
          paragraphs: [
            "Table 3 reports the slope estimates by country and period. In the 2010s the instrumented slope was 0.04 (standard error 0.01) in Korea and 0.02 (0.01) in Japan. After 2021 the slopes are 0.09 (0.02) and 0.05 (0.015) respectively. The change is 0.05 in Korea and 0.03 in Japan, and both are significant at the 1 per cent level, supporting H1. In relative terms the slope more than doubles in Korea and rises by a factor of two and a half in Japan, so the curve roughly doubles in both countries. At the same time, the post-pandemic slope in Japan is 0.05 compared with 0.09 in Korea, about 56 per cent of the Korean value, in line with H3 that Japan's curve remains the flatter of the two.",
            "The magnitudes are small in an absolute sense, as in other regional studies [1]. A slope of 0.09 means that a regional labour market that is one percentage point tighter than others has annualised inflation higher by about 0.09 percentage points, so that a three-percentage-point gap in slack between two regions is associated with a difference in annual inflation of roughly a quarter of a percentage point. The relationship is much stronger and more precise than in earlier regional estimates for Japan that relied on ordinary least squares, which we replicate in the first rows of the table: the ordinary least squares slope is 0.02 in Korea and 0.01 in Japan before 2021, and the instrumented slope exceeds them in all cases, consistent with the downward bias from supply shocks and from measurement error in regional slack.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Slope of the regional Phillips curve by country and period",
              columns: ["", "Korea 2010–2019", "Korea 2021–2024", "Difference", "Japan 2010–2019", "Japan 2021–2024", "Difference"],
              rows: [
                ["OLS slope", "0.02** (0.01)", "0.05*** (0.01)", "0.03** (0.01)", "0.01 (0.01)", "0.03** (0.01)", "0.02* (0.01)"],
                ["IV slope", "0.04*** (0.01)", "0.09*** (0.02)", "0.05*** (0.02)", "0.02** (0.01)", "0.05*** (0.015)", "0.03*** (0.01)"],
                ["Ratio of post to pre slope (IV)", "", "2.25", "", "", "2.50", ""],
                ["Region fixed effects", "Yes", "Yes", "", "Yes", "Yes", ""],
                ["Quarter fixed effects", "Yes", "Yes", "", "Yes", "Yes", ""],
                ["Lagged inflation (four lags)", "Yes", "Yes", "", "Yes", "Yes", ""],
                ["Observations", "640", "256", "896", "1,880", "752", "2,632"],
              ],
              note: "Note: Dependent variable is annualised quarterly core regional inflation. The slope is the coefficient on slack, with sign chosen so that tighter markets are associated with higher inflation. The difference columns report κ₁ from the interacted specification. Standard errors clustered by region in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Rolling-window estimates of the regional Phillips-curve slope, 2017–2024",
              kind: "line",
              xLabels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
              yLabel: "Slope (pp inflation per pp slack)",
              series: [
                { name: "Korea", values: [0.04, 0.04, 0.05, 0.06, 0.07, 0.09, 0.09, 0.09], lower: [0.02, 0.02, 0.03, 0.03, 0.04, 0.05, 0.05, 0.05], upper: [0.06, 0.06, 0.07, 0.09, 0.1, 0.13, 0.13, 0.13] },
                { name: "Japan", values: [0.02, 0.02, 0.02, 0.03, 0.03, 0.04, 0.05, 0.05], lower: [0.0, 0.0, 0.0, 0.01, 0.01, 0.02, 0.02, 0.02], upper: [0.04, 0.04, 0.04, 0.05, 0.05, 0.06, 0.08, 0.08] },
              ],
              note: "Note: Each point is the IV slope estimated on the 32 quarters ending in the fourth quarter of the year shown, with 95 per cent confidence intervals. Rolling windows include 2020.",
            },
          ],
        },
        {
          id: "results-rolling",
          heading: "7.2 The timing of the steepening",
          paragraphs: [
            "The rolling-window estimates in Figure 1 show that the steepening was gradual rather than abrupt in its early stages but accelerated in 2021 and 2022. Rolling slopes drift up slightly in Korea in 2018 and 2019, a period in which the labour market tightened and minimum wages rose sharply, but they remain close to 0.05 until windows begin to include the post-pandemic observations. The slope then increases quickly, reaching about 0.09 in the window ending 2022 and staying there. In Japan, the slope is stable at about 0.02 until 2020 and rises to 0.05 by the window ending 2023, a lag of about a year relative to Korea, which matches the later and weaker response of Japanese services prices described in Section 2.",
            "The confidence intervals widen as windows include the post-pandemic period, because there are fewer quarters with the new regime. A formal test of the null that the post-2021 slope equals the 2010s slope, based on the interaction coefficient in Table 3, rejects equality in both countries at the 1 per cent level, but the rolling estimates also show that the 95 per cent intervals of the early and late windows overlap for Japan in 2023 and 2024, so we regard the Japanese steepening as more tentative than the Korean one.",
          ],
        },
        {
          id: "results-persistence",
          heading: "7.3 Inflation persistence",
          paragraphs: [
            "Table 4 reports persistence, defined as the sum of the coefficients on four lags of regional inflation. In the pooled sample, persistence rises from 0.52 in 2010–2019 to 0.71 in 2021–2024, an increase of 0.19 that is significant at the 1 per cent level and supports H2. The increase is similar in the two countries: from 0.57 to 0.75 in Korea, and from 0.50 to 0.69 in Japan. Persistence increased in all three components of the basket but most for services, for which the sum of coefficients rises from 0.58 to 0.80, whereas for goods other than energy and food it increases from 0.41 to 0.57.",
            "Figure 2 shows the pattern by component. The increase in persistence is economically important: a higher sum of coefficients means that a larger share of any shock to inflation carries over into subsequent quarters, so that the cumulative response to a given shock is substantially larger. Taken together with the steeper curve, the results imply that the post-pandemic regime features both a stronger response of inflation to slack and a slower return to baseline after shocks. The two changes are related: when firms adjust prices more frequently, both the impact response to slack and the pass-through of past inflation into current prices tend to increase [13].",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Inflation persistence: sum of autoregressive coefficients",
              columns: ["", "2010–2019", "2021–2024", "Change"],
              rows: [
                ["Pooled, core inflation", "0.52*** (0.03)", "0.71*** (0.04)", "0.19*** (0.05)"],
                ["Korea, core inflation", "0.57*** (0.05)", "0.75*** (0.06)", "0.18*** (0.07)"],
                ["Japan, core inflation", "0.50*** (0.03)", "0.69*** (0.04)", "0.19*** (0.05)"],
                ["Pooled, services", "0.58*** (0.04)", "0.80*** (0.05)", "0.22*** (0.06)"],
                ["Pooled, goods excluding energy and food", "0.41*** (0.04)", "0.57*** (0.05)", "0.16*** (0.06)"],
                ["Observations (pooled)", "2,520", "1,008", ""],
              ],
              note: "Note: Sum of coefficients on four lags of regional inflation, with region and quarter fixed effects, bias-corrected following Andrews and Chen (1994). Newey–West standard errors in parentheses. *** p < 0.01.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "What explains the steepening? We examine three channels motivated by the framework: pass-through of energy and food prices into services, the link between slack and wages, and the frequency of price adjustment.",
        "To measure the first channel we construct for each region an index of exposure to energy and food costs: the input-output share of energy and food in the production of local services, interacted with the national change in energy and food prices. We then re-estimate the slope after adding this exposure and its interaction with slack, and compute how much of the post-2021 change in κ disappears. Table 5 reports the decomposition. Across the pooled sample, pass-through of energy and food costs into services accounts for roughly 40 per cent of the steepening. The share is larger in Korea (43 per cent) than in Japan (36 per cent), reflecting both the larger weight of energy-intensive personal services in Korean regional baskets and the larger swing in Korean services prices. This channel is consistent with network models in which sectoral cost shocks propagate through intermediate inputs [24].",
            "The second channel is the wage-price link. Using regional wage data from the monthly labour surveys, we estimate the response of nominal wage growth to slack. The wage Phillips curve is about twice as steep in Korea as in Japan, with a slope of 0.12 in Korea against 0.06 in Japan after 2021, and the relationship between regional wage growth and subsequent services inflation is likewise weaker in Japan. This is consistent with lower wage pass-through in Japan: the spring wage settlements, and the implicit contracts that underpin them [17], dampen the response of wages to local tightness and so limit the translation of tight labour markets into services prices. About 28 per cent of the steepening in the pooled sample is attributable to the wage channel, and the share is larger in Korea. The third channel, price-adjustment frequency, is measured from the share of items in each regional basket whose prices change in a given quarter, which we construct from item-level data for the 12 expenditure groups. The frequency rises by about one-fifth after 2021 and accounts for about 22 per cent of the steepening. The remaining 10 per cent is unexplained.",
          ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Decomposition of the post-2021 steepening by channel (per cent of the change in slope)",
          columns: ["Channel", "Pooled", "Korea", "Japan"],
          rows: [
            ["Energy and food pass-through into services", "40", "43", "36"],
            ["Wage–price link (wage response to slack)", "28", "31", "24"],
            ["Higher frequency of price adjustment", "22", "18", "27"],
            ["Unexplained", "10", "8", "13"],
            ["Total change in slope (IV, pp)", "0.04", "0.05", "0.03"],
            ["Wage Phillips-curve slope, 2021–2024", "", "0.12", "0.06"],
          ],
          note: "Note: Shares are computed by sequentially adding channel controls to the interacted specification and recording the reduction in the post-2021 interaction coefficient; the ordering of channels matters little, as shown in Section 9. The pooled total change is the weighted average of the country-specific changes in Table 3.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Persistence by component of the basket, before and after 2021",
          kind: "bar",
          xLabels: ["Pooled core", "Korea", "Japan", "Services", "Goods ex. energy and food"],
          yLabel: "Sum of AR coefficients",
          series: [
            { name: "2010–2019", values: [0.52, 0.57, 0.5, 0.58, 0.41] },
            { name: "2021–2024", values: [0.71, 0.75, 0.69, 0.8, 0.57] },
          ],
          note: "Note: Bias-corrected sums of coefficients on four lags of regional inflation, from Table 4.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a series of robustness checks on the slope estimates. First, the results do not depend on the slack measure: using the unemployment gap without the vacancy adjustment yields slopes of 0.03 and 0.07 in Korea before and after 2021 and 0.02 and 0.04 in Japan, a smaller but qualitatively similar steepening, and using the vacancy-to-unemployment ratio alone gives essentially the same estimates as the baseline. Second, using headline rather than core inflation produces slopes about a third larger, which is expected given the direct effect of energy and food, but the ratio of post to pre slope is similar.",
        "Third, we vary the instrument. Using the Borusyak et al. approach of relying on the exogeneity of the national shocks rather than the shares gives point estimates within 0.01 of the baseline [12]. Dropping each of the five largest industries from the instrument, one at a time, changes the post-2021 slope by at most 0.01 in either country, which addresses the concern, raised by {11}, that a single industry may drive the results. Fourth, restricting the sample to the largest metropolitan areas, excluding Seoul and Tokyo, or excluding the whole of 2021 does not alter the pattern, and extending the regime break to 2022Q1 produces a similar interaction coefficient. Fifth, allowing the time effects to differ between regions with high and low exposure to the exchange rate leaves the estimates unchanged, suggesting that national expectations are well absorbed. Finally, a sub-sample analysis by region size shows that smaller regions show the same steepening but with larger standard errors.",
        "Table 6 also reports the persistence estimates under alternative lag lengths and under the median-unbiased estimator without the panel correction. The increase of about 0.2 is robust to using two or six lags, and the sum of coefficients before 2021 stays between 0.48 and 0.55.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the main estimates",
          columns: ["Specification", "Korea pre", "Korea post", "Japan pre", "Japan post", "Pooled persistence pre / post"],
          rows: [
            ["Baseline (Tables 3 and 4)", "0.04", "0.09", "0.02", "0.05", "0.52 / 0.71"],
            ["Unemployment gap without vacancy adjustment", "0.03", "0.07", "0.02", "0.04", "0.50 / 0.69"],
            ["Headline inflation", "0.05", "0.12", "0.03", "0.07", "0.55 / 0.74"],
            ["Shocks-based shift-share instrument", "0.04", "0.09", "0.02", "0.05", "0.52 / 0.71"],
            ["Excluding Seoul and Tokyo", "0.04", "0.08", "0.02", "0.05", "0.51 / 0.70"],
            ["Break at 2022Q1", "0.04", "0.09", "0.02", "0.05", "0.52 / 0.72"],
            ["Two lags / six lags (persistence)", "", "", "", "", "0.49 / 0.69; 0.54 / 0.73"],
          ],
          note: "Note: All slopes are IV estimates with region and quarter fixed effects. Standard errors are similar to those in Tables 3 and 4 and are omitted for brevity; the post-minus-pre difference is significant at the 5 per cent level in every row for Korea and in all rows except the headline-inflation specification for Japan.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results suggest that the Phillips curve in Korea and Japan was meaningfully steeper after 2021 than in the 2010s, and that inflation became more persistent. Several caveats apply to the interpretation. Regional estimates identify the slope for local shocks under common monetary policy, and the slope for national demand shocks may differ [1][2]. If anything, regional estimates tend to understate the aggregate slope because aggregate demand shocks also affect inflation through expectations and exchange rates, which are absorbed by time effects here. At the same time, the steepening that we document may be partly cyclical: very tight labour markets in 2021–2023 may have generated nonlinearity that fades as slack rises [6][26]. Our data cannot yet distinguish a permanent change in the slope from a temporary response to the scale of the shocks.",
        "For monetary policy, the steeper curve has two implications. First, it implies that a given disinflation can be achieved with less slack than in the 2010s. If the slope is 0.09 rather than 0.04 in Korea, then reducing inflation by one percentage point through regional slack alone requires about half as much labour-market loosening, to the extent that the regional slope is informative about the national one. This is the sense in which the sacrifice ratio falls, and it is consistent with the view that recent disinflation has proceeded with less unemployment than earlier experience suggested [23]. Second, the higher persistence implies that the policy response takes longer to pass through, so central banks should expect a slower return to target from any given tightening, and they should be wary of easing prematurely, since a steeper curve implies that inflation responds faster to a renewed tightening of the labour market.",
        "The difference between the two countries carries a separate message. Japan's slope remained about half of Korea's, consistent with lower wage pass-through and a longer experience of low inflation, which anchors expectations at lower levels [17]. For the Bank of Japan, a flatter curve means that inflation is less responsive to labour-market tightness and that reaching sustained 2 per cent inflation depends more on the wage-setting channel than on slack itself, so that continued wage growth in the spring negotiations is crucial. For Korea, in contrast, the steeper curve and the larger role of energy and food pass-through suggest that policy should pay particular attention to second-round effects of commodity shocks on services prices, for which administrative measures such as fuel tax adjustments and utility price controls may buy time but cannot substitute for a monetary response.",
        "The decomposition has implications for the type of shock. Because roughly 40 per cent of the steepening runs through energy and food pass-through, part of the change in slope is not a change in the sensitivity of inflation to domestic slack at all, but a change in how global commodity shocks are transmitted into local prices through intermediate inputs [21][24]. This part may reverse if commodity prices stabilise, and it implies that the steeper curve is partly a state-dependent phenomenon. Our results are therefore consistent with a view in which the post-pandemic regime reflects both large and widespread shocks and a lasting increase in the frequency of price adjustment and the wage-price link, and in which the balance of these two forces will determine how much of the steepening endures.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Using city-level and prefecture-level price panels for Korea and Japan, we find that the slope of the regional Phillips curve roughly doubled after 2021, rising from 0.04 to 0.09 in Korea and from 0.02 to 0.05 in Japan, and that the persistence of inflation increased from 0.52 to 0.71. Japan's slope remained about half of Korea's, consistent with lower wage pass-through and a longer experience of low inflation. About 40 per cent of the steepening is attributable to energy and food pass-through into services, with the rest reflecting tighter wage-price links and more frequent price adjustment. Under inflation targeting, disinflation would therefore require less slack than in the 2010s, though the same steeper curve implies a faster inflationary response to renewed tightness.",
        "Several extensions would be valuable. Longer time series will make it possible to test whether the slope reverts as shocks subside. Firm-level price data could separate the frequency of price adjustment from the size of price changes, and linked employer-employee data could clarify the role of wage bargaining institutions in Japan. Comparisons with other regions in the Asia-Pacific that experienced different shocks would help to establish how general the steepening is.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Regional prices. Monthly regional consumer price indices are averaged to quarterly frequency. Core regional inflation is the annualised quarterly log change in the index excluding energy and fresh food, rebased to 2020 = 100, with weights from the national expenditure survey held fixed within each base-year revision. Where a base-year revision interrupts a series we splice with the overlapping-quarter growth rate.",
        "Slack. Regional unemployment rates are seasonally adjusted with a regional X-13 filter. The unemployment gap is the deviation from a one-sided Hodrick–Prescott trend with a smoothing parameter of 1,600. The vacancy adjustment is the fitted value from a regression of the gap on the log ratio of job openings to job seekers, estimated separately by country and period.",
        "Instrument. Industry employment shares in 2005 are measured for 19 industry groups. The national growth rate of industry employment is computed excluding the region's own employment, and the national demand shock is the residual of industry exports and public spending from a regression on lagged values. The instrument is standardised by its cross-regional standard deviation in each quarter.",
        "Persistence. Sums of autoregressive coefficients are estimated with four lags of regional inflation and region and quarter fixed effects. The bias correction follows the median-unbiased procedure of Andrews and Chen (1994) adapted to the panel.",
      ],
    },
  ],
};
