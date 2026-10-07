// Vol. 29, No. 1 (January 2024) — full text for an existing article (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2024-v29-i1-04",
  acknowledgments:
    "We thank seminar participants at the University of Zurich, Hanyang University and the Korea Development Institute, two anonymous referees and the handling editor for helpful comments. Remaining errors are our own.",
  dataAvailability:
    "The firm-level data come from the Survey of Business Activities of Statistics Korea and are available to researchers through the Microdata Integrated Service under a confidentiality agreement. Industry deflators and input prices are published by the Bank of Korea. Code that reproduces all tables and figures from the licensed microdata is available from the corresponding author.",
  editorialNote:
    "Andreas Müller and Min-Su Park show that productivity estimates assuming perfect competition are biased upwards where markups have risen; a Hall-style markup correction lowers measured TFP growth in Korean manufacturing over 2010–2022 from 1.58 to 1.17 percent per year, a revision of about 0.4 percentage points per year concentrated in industries with the largest markup increases.",
  refs: [
    /* 1 */ "Hall, R. E. (1988). The relation between price and marginal cost in U.S. industry. Journal of Political Economy, 96(5), 921–947.",
    /* 2 */ "De Loecker, J., & Warzynski, F. (2012). Markups and firm-level export status. American Economic Review, 102(6), 2437–2471.",
    /* 3 */ "De Loecker, J., Eeckhout, J., & Unger, G. (2020). The rise of market power and the macroeconomic implications. Quarterly Journal of Economics, 135(2), 561–644.",
    /* 4 */ "Olley, G. S., & Pakes, A. (1996). The dynamics of productivity in the telecommunications equipment industry. Econometrica, 64(6), 1263–1297.",
    /* 5 */ "Levinsohn, J., & Petrin, A. (2003). Estimating production functions using inputs to control for unobservables. Review of Economic Studies, 70(2), 317–341.",
    /* 6 */ "Ackerberg, D. A., Caves, K., & Frazer, G. (2015). Identification properties of recent production function estimators. Econometrica, 83(6), 2411–2451.",
    /* 7 */ "Klette, T. J., & Griliches, Z. (1996). The inconsistency of common scale estimators when output prices are unobserved and endogenous. Journal of Applied Econometrics, 11(4), 343–361.",
    /* 8 */ "De Loecker, J. (2011). Product differentiation, multiproduct firms, and estimating the impact of trade liberalization on productivity. Econometrica, 79(5), 1407–1451.",
    /* 9 */ "Foster, L., Haltiwanger, J., & Syverson, C. (2008). Reallocation, firm turnover, and efficiency: Selection on productivity or profitability? American Economic Review, 98(1), 394–425.",
    /* 10 */ "Syverson, C. (2011). What determines productivity? Journal of Economic Literature, 49(2), 326–365.",
    /* 11 */ "Roeger, W. (1995). Can imperfect competition explain the difference between primal and dual productivity measures? Estimates for U.S. manufacturing. Journal of Political Economy, 103(2), 316–330.",
    /* 12 */ "Basu, S., & Fernald, J. G. (1997). Returns to scale in U.S. production: Estimates and implications. Journal of Political Economy, 105(2), 249–283.",
    /* 13 */ "Hsieh, C.-T., & Klenow, P. J. (2009). Misallocation and manufacturing TFP in China and India. Quarterly Journal of Economics, 124(4), 1403–1448.",
    /* 14 */ "Gandhi, A., Navarro, S., & Rivers, D. A. (2020). On the identification of gross output production functions. Journal of Political Economy, 128(8), 2973–3016.",
    /* 15 */ "Wooldridge, J. M. (2009). On estimating firm-level production functions using proxy variables to control for unobservables. Economics Letters, 104(3), 112–114.",
    /* 16 */ "Basu, S. (2019). Are price-cost markups rising in the United States? A discussion of the evidence. Journal of Economic Perspectives, 33(3), 3–22.",
    /* 17 */ "Bond, S., Hashemi, A., Kaplan, G., & Zoch, P. (2021). Some unpleasant markup arithmetic: Production function elasticities and their estimation from production data. Journal of Monetary Economics, 121, 1–14.",
    /* 18 */ "Petrin, A., & Levinsohn, J. (2012). Measuring aggregate productivity growth using plant-level data. RAND Journal of Economics, 43(4), 705–725.",
    /* 19 */ "Baqaee, D. R., & Farhi, E. (2020). Productivity and misallocation in general equilibrium. Quarterly Journal of Economics, 135(1), 105–163.",
    /* 20 */ "Autor, D., Dorn, D., Katz, L. F., Patterson, C., & Van Reenen, J. (2020). The fall of the labor share and the rise of superstar firms. Quarterly Journal of Economics, 135(2), 645–709.",
    /* 21 */ "Hahn, C. H. (2004). Exporting and performance of plants: Evidence from Korean manufacturing. NBER Working Paper No. 10208. Cambridge, MA: National Bureau of Economic Research.",
    /* 22 */ "Diewert, W. E., & Fox, K. J. (2008). On the estimation of returns to scale, technical progress and monopolistic markups. Journal of Econometrics, 145(1–2), 174–193.",
    /* 23 */ "Melitz, M. J., & Polanec, S. (2015). Dynamic Olley-Pakes productivity decomposition with entry and exit. RAND Journal of Economics, 46(2), 362–375.",
    /* 24 */ "Raval, D. (2023). Testing the production approach to markup estimation. Review of Economic Studies, 90(5), 2592–2611.",
    /* 25 */ "Calligaris, S., Criscuolo, C., & Marcolin, L. (2018). Mark-ups in the digital era. OECD Science, Technology and Industry Working Papers No. 2018/10. Paris: OECD Publishing.",
    /* 26 */ { jer: "2023-v28-i1-03" },
    /* 27 */ "Hall, R. E. (2018). New evidence on the markup of prices over marginal costs and the role of mega-firms in the US economy. NBER Working Paper No. 24574. Cambridge, MA: National Bureau of Economic Research.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Total factor productivity (TFP) is the single most important statistic in growth accounting, and firm-level estimates of TFP have become the workhorse outcome variable in applied work on trade liberalisation, innovation, regulation and misallocation [10][13]. Almost all of this work rests on a production function whose output elasticities are either imputed from input shares in revenue or estimated by proxy-variable methods that use deflated revenue as the measure of output [4][5][6]. Both routes rely, explicitly or implicitly, on the assumption that firms price at marginal cost, or at least that the wedge between price and marginal cost is constant over time and across firms.",
        "That assumption has become harder to defend. A large literature documents rising price-cost markups in the United States and in other advanced economies over the past three decades [3][16][25], and increasing concentration of sales in a small number of highly productive firms [20]. Whatever the welfare interpretation of these trends, they have a direct and mechanical consequence for productivity measurement. When markups rise, input shares in revenue fall below the true output elasticities, so that input growth is under-weighted in the Solow residual; and when firm prices rise faster than the industry deflator because of market power, deflated revenue grows faster than physical output. Both effects push measured TFP growth above true technical progress.",
        "This paper revisits the estimation of firm-level TFP in industries with endogenous markups and quantifies the resulting bias for Korean manufacturing. We show that the standard production-function approach assuming perfect competition can generate upward-biased TFP estimates in industries where market power has risen, and we derive a decomposition of the bias into a factor-weighting term, proportional to the level of the markup and the growth of inputs, and a price term, proportional to the growth of the markup that is not absorbed by industry deflators. The decomposition makes clear that the bias is not a curiosity of particular estimators: it affects index-number residuals, proxy-variable estimators and their aggregates alike.",
        "We then propose a simple correction based on a Hall-style markup estimate [1]. Hall's insight was that, under constant returns, output growth should respond one-for-one to cost-share-weighted input growth when prices equal marginal cost, and more than one-for-one when they do not; the coefficient identifies the markup if input growth is instrumented with demand shocks uncorrelated with technology. We estimate industry-specific markups that are allowed to trend over time, and use them to re-weight inputs and to purge the markup component from deflated revenue. The correction requires only the data already used in standard productivity studies, plus a small set of aggregate instruments, and can therefore be applied routinely by statistical agencies and researchers.",
        "Using firm-level data from the Survey of Business Activities for 2010–2022, covering 78,420 firm-year observations on 9,846 manufacturing firms, we find that the sales-weighted Hall-style markup in Korean manufacturing rose from 1.19 in 2010 to 1.26 in 2022. Uncorrected TFP growth averages 1.58 percent per year over the period; after the correction it averages 1.17 percent per year. The correction thus reduces estimated TFP growth by approximately 0.4 percentage points per year — 0.41 points in our baseline — of which 0.17 points come from factor weighting and 0.24 points from markup growth passed into deflated revenue. The adjustment grows over time, from 0.30 points in 2010–2014 to 0.50 points in 2018–2022, and is concentrated in industries where markups rose most, notably electronics and pharmaceuticals, where it reaches 0.79 points per year.",
        "The adjustment is substantively important. Cumulated over twelve years, it lowers the level of manufacturing TFP in 2022 by about five percent relative to the uncorrected index, and it changes the interpretation of the post-2010 productivity record: roughly a quarter of measured TFP growth reflects rising market power rather than technical progress. Section 2 describes the institutional background, Section 3 the related literature and Section 4 the conceptual framework. Section 5 describes the data and Section 6 the empirical strategy. Section 7 reports results, Section 8 examines heterogeneity and mechanisms, Section 9 presents robustness checks, Section 10 discusses implications, and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background: Korean Manufacturing after 2010",
      paragraphs: [
        "Korean manufacturing emerged from the global financial crisis with a rapid recovery in 2010, driven by exports of semiconductors, displays, automobiles and petrochemicals. Over the following decade the sector's share of nominal value added stabilised at around 27 percent of GDP, one of the highest among OECD economies, while its employment share continued its slow decline. Growth became increasingly concentrated in a few export-oriented industries, and within them in a small number of large business groups whose affiliates account for a dominant share of sales in electronics, motor vehicles and chemicals.",
        "These developments coincided with a shift in the composition of manufacturing towards industries with high fixed costs, intensive research and development, and differentiated products. In semiconductors and pharmaceuticals in particular, firms invest heavily in intangible assets and price well above short-run marginal cost to recover those investments. Competition policy in this period focused on abuse of dominance and on transactions within business groups, and regulatory reforms aimed at lowering barriers to entry were introduced gradually; earlier JER work has shown that the easing of product market regulation raised entry rates in affected industries [26], which is one channel through which markups might be contained.",
        "Official productivity statistics for Korea are produced by the Korea Productivity Center and by the Bank of Korea within the national accounts, using growth-accounting methods in which output elasticities are proxied by income shares. Like most statistical agencies, these producers deflate nominal output with industry producer price indices rather than firm-specific prices. Neither practice adjusts for market power. If markups rose over the period, as international evidence suggests, official estimates would overstate TFP growth in exactly the industries that have been the engine of Korean growth.",
        "The question is of more than academic interest. Productivity growth assumptions enter the medium-term fiscal projections of the Ministry of Economy and Finance and the potential-output estimates used by the Bank of Korea to assess the output gap. An overestimate of trend TFP growth of 0.4 percentage points per year would translate into a similar overestimate of potential output growth in manufacturing, with implications for the assessment of inflationary pressure and for the sustainability of long-run pension and health-care commitments.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our analysis builds on three strands of literature. The first concerns the estimation of production functions. Olley and Pakes {4} introduced the use of investment as a proxy for unobserved productivity, Levinsohn and Petrin {5} replaced investment with intermediate inputs, and Ackerberg, Caves and Frazer {6} and Wooldridge {15} addressed the collinearity problem in the first stage and proposed one-step GMM implementations. Gandhi, Navarro and Rivers {14} showed that gross-output production functions are not identified by proxy methods without additional restrictions and proposed using first-order conditions for flexible inputs. All of these estimators use deflated revenue as output, and their consistency under imperfect competition depends on how prices vary across firms and over time.",
        "Klette and Griliches {7} first emphasised that, when firm prices are unobserved and differ from the industry deflator, revenue-based estimators are inconsistent and scale estimates are biased downwards. De Loecker {8} developed a framework in which demand is modelled jointly with production to recover physical productivity from revenue data, and showed that ignoring price variation substantially overstates the productivity gains from trade liberalisation. Foster, Haltiwanger and Syverson {9} documented with plant-level price data that revenue productivity and physical productivity diverge systematically, and that new entrants have lower prices and therefore higher physical productivity than revenue measures indicate.",
        "The second strand estimates markups. Hall {1} proposed the regression approach that underlies our correction, using instruments such as oil prices and military spending to identify markups from the comovement of output and inputs in US industries. Roeger {11} showed that combining primal and dual Solow residuals removes the need for instruments under certain conditions, and Basu and Fernald {12} emphasised the importance of distinguishing markups from returns to scale and of correcting for utilisation. Diewert and Fox {22} developed an index-number approach to jointly estimate returns to scale, technical progress and markups. More recently, De Loecker and Warzynski {2} proposed recovering firm-level markups as the ratio of a flexible input's output elasticity to its revenue share, an approach used by De Loecker, Eeckhout and Unger {3} to document rising markups in US public firms and by Calligaris, Criscuolo and Marcolin [25] for OECD countries.",
        "The production approach to markups has been subject to critical scrutiny. Bond, Hashemi, Kaplan and Zoch {17} show that output elasticities estimated from revenue data are not informative about markups in the absence of price data, and Raval {24} documents that markups estimated with different flexible inputs often move in opposite directions. Basu {16} reviews the evidence and argues that the case for rising US markups is suggestive but not conclusive, while Hall {27} finds rising markups using an updated version of his own regression approach. These critiques motivate our choice of the Hall method, which identifies markups from output and input growth together with external instruments, rather than from estimated elasticities alone, and our use of the firm-level approach only as a robustness check.",
        "The third strand concerns the aggregation of productivity. Petrin and Levinsohn {18} show that aggregate productivity growth should be defined as the change in final demand minus the change in the cost of primary inputs, and that this measure differs from aggregated firm-level TFP when there are wedges between prices and marginal costs. Baqaee and Farhi {19} develop a general-equilibrium framework in which markups drive a wedge between technical change and measured productivity, and in which reallocation towards high-markup firms raises aggregate TFP. Melitz and Polanec {23} provide the decomposition we use to separate within-firm and reallocation components. For Korea, Hahn {21} used plant-level census data to study the productivity of exporters, but to our knowledge no study has examined the consequences of market power for Korean productivity measurement.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework",
      paragraphs: [
        "Consider firm i in industry j producing physical output Q_it = Ω_it·F(X_it), where X_it is a vector of inputs (labour, capital and materials), F is homogeneous of degree γ, and Ω_it is Hicks-neutral technical efficiency. Cost minimisation implies that the output elasticity of each flexible input equals the markup μ_it = P_it / MC_it multiplied by the input's share in revenue: θ_k = μ_it·α^R_k, where α^R_k = W_k X_k / (P Q). Equivalently, θ_k = γ·α^C_k, where α^C_k is the share of input k in total cost. Under constant returns (γ = 1), the cost shares sum to one and the revenue shares sum to 1/μ.",
        "The standard growth-accounting residual measures TFP growth as Δtfp^S = Δr − Σ_k α^R_k Δx_k, where Δr is the growth of deflated revenue and lower-case letters denote logarithms. True technical progress is Δω = Δq − Σ_k θ_k Δx_k. Writing deflated revenue growth as Δr = Δq + (Δp_i − Δp_j), where Δp_j is the growth of the industry deflator, and substituting the elasticities, gives Δtfp^S − Δω = (μ − 1)·Σ_k α^R_k Δx_k + (Δp_i − Δp_j). The first term is the factor-weighting bias: when μ > 1, revenue shares understate output elasticities, and any growth in inputs is partly attributed to productivity. The second term is the price bias: firm price growth in excess of the deflator is counted as output growth.",
        "The price term contains movements in marginal cost as well as in markups. Writing Δp_i = Δmc_i + Δln μ_i and noting that the industry deflator averages firm price growth, the systematic component of the price bias is the growth of the firm's markup relative to the average markup growth embodied in the deflator, plus the average markup growth itself whenever the deflator is constructed from list or contract prices that do not fully track transaction prices. In practice we treat the share of markup growth passed through into deflated revenue as an empirical quantity, ψ, which we estimate in Section 6.",
        "Proxy-variable estimators do not escape the bias. They estimate θ_k from the covariance of revenue with inputs, conditional on a control function for productivity. When markups vary over time, the control function absorbs part of the markup variation but not its trend, and the estimated elasticities converge to revenue elasticities rather than output elasticities [7][17]. Residual TFP then contains the markup trend. This yields our two hypotheses. First (H1), measured TFP growth exceeds true technical progress in industries where markups rose, by an amount increasing in the markup level and its growth. Second (H2), the bias is negligible in industries with stable, low markups, so that cross-industry differences in measured productivity growth partly reflect differences in the evolution of market power.",
        "The correction follows directly. Given an estimate of μ_jt, we replace revenue shares with markup-adjusted elasticities, θ_k = μ_jt·α^R_k, and subtract ψ·Δln μ_jt from deflated revenue growth. The corrected residual is Δtfp^C = Δr − ψ·Δln μ_jt − μ_jt·Σ_k α^R_k Δx_k. When a proxy-variable estimator is used, we include the estimated markup as a control in the production function and impose that elasticities scale with it, which amounts to estimating the production function on cost-share-weighted rather than revenue-share-weighted inputs.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-source",
          heading: "5.1 Firm-Level Data",
          paragraphs: [
            "Our main source is the Survey of Business Activities conducted annually by Statistics Korea since 2006. The survey covers all firms with at least 50 regular employees and paid-in capital of at least KRW 300 million, and collects balance-sheet and income-statement information together with employment, research and development, and export data. We use manufacturing firms observed in 2010–2022, classified by the Korean Standard Industrial Classification (KSIC) at the two-digit level, and aggregate the 24 two-digit industries into ten industry groups for reporting.",
            "Output is measured as sales plus the change in finished-goods inventories, deflated by the Bank of Korea producer price index at the most detailed available level. Labour is the number of regular employees, and the wage bill includes salaries, bonuses and employer social insurance contributions. Materials comprise the cost of raw materials, purchased components, energy and outsourced processing, deflated by the corresponding input price indices from the Bank of Korea input-output price series. Capital is constructed by the perpetual inventory method from the book value of tangible fixed assets in the first year a firm appears, using industry-specific investment deflators and depreciation rates.",
            "After removing firms with missing or non-positive values of output, employment, materials or capital, and trimming the top and bottom one percent of the ratios of output to each input within industry-year cells, the sample contains 78,420 firm-year observations on 9,846 firms. Table 1 reports summary statistics. The median firm employs 112 workers; the distribution is highly skewed, and firms with 300 or more employees account for 14 percent of observations but 71 percent of sales. Exporters account for 58 percent of observations.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Summary statistics, Korean manufacturing firms, 2010–2022",
              columns: ["Variable", "Mean", "Median", "Std. dev.", "Sales-weighted mean"],
              rows: [
                ["Employees", "318", "112", "1,184", "4,962"],
                ["Real output (KRW billion, 2015 prices)", "182.4", "38.6", "1,412.7", "9,847.3"],
                ["Labour share of revenue", "0.152", "0.138", "0.071", "0.098"],
                ["Materials share of revenue", "0.642", "0.661", "0.128", "0.614"],
                ["Capital share of revenue (user cost)", "0.089", "0.076", "0.052", "0.092"],
                ["Sum of revenue shares", "0.883", "0.887", "0.094", "0.804"],
                ["Exporter (share)", "0.58", "", "", ""],
                ["Firms with 300+ employees (share)", "0.14", "", "", ""],
                ["Firm-year observations", "78,420", "", "", ""],
              ],
              note: "Note: Survey of Business Activities, Statistics Korea. Capital share computed with a user cost of capital equal to the corporate bond yield plus industry depreciation less expected capital-goods inflation. Sales weights use nominal sales in each year.",
            },
          ],
        },
        {
          id: "data-aggregate",
          heading: "5.2 Industry Aggregates and Instruments",
          paragraphs: [
            "For the Hall-style markup estimation we aggregate firm data to the two-digit industry level and construct annual growth rates of real output and of cost-share-weighted input growth for 2010–2022. Because the survey is a panel of firms above a size threshold, we complement it with industry totals from the Mining and Manufacturing Survey, which covers all establishments with ten or more workers, and verify that aggregate growth rates are similar in the two sources (the correlation of annual industry output growth across sources is 0.93).",
            "The instruments must shift demand for an industry's output without being correlated with its technology. We use three: the annual change in the Dubai crude oil price in won, which Hall {1} also used; the growth of real import demand in Korea's export markets, constructed as a weighted average of partner-country imports using each industry's 2009 export destinations as weights; and the growth of real government consumption expenditure. Partner-country import demand is plausibly exogenous to Korean industry technology, since Korean exporters account for a small share of partner imports in most product categories, and we drop semiconductors in a robustness check because Korea's global market share there is large.",
            "The sum of revenue shares in Table 1 already contains information about markups. Under constant returns, its reciprocal is the cost-weighted markup, so a sales-weighted sum of 0.804 implies an average markup of about 1.24 for large firms, while the unweighted sum of 0.883 implies about 1.13 for the typical firm. The difference anticipates one of our findings: market power, and therefore the measurement bias, is concentrated among large firms. These revenue-share calculations depend on the user cost of capital, however, which is why we rely on the regression approach for our main estimates.",
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our strategy proceeds in three steps. We first estimate industry markups and their trends with the Hall method; we then estimate firm-level production functions with and without the markup correction; and finally we aggregate firm-level productivity growth to the manufacturing level and compare corrected and uncorrected series.",
      ],
      subsections: [
        {
          id: "hall",
          heading: "6.1 Hall-Style Markup Estimation",
          paragraphs: [
            "Following Hall {1}, we estimate for each industry group j the regression Δq_jt = μ_j·Δx^C_jt + λ_j·(t − 2016)·Δx^C_jt + δ_j + ε_jt, where Δx^C_jt = Σ_k α^C_kjt Δx_kjt is the cost-share-weighted growth of inputs, δ_j is average technical progress, and ε_jt is the deviation of technical progress from its mean. The coefficient μ_j is the markup at the mid-point of the sample and λ_j its annual trend. Under constant returns, cost shares are computed from the wage bill, materials expenditure and capital user cost; we relax constant returns in Section 9.",
            "Ordinary least squares estimates of μ_j are biased because input growth responds to technology shocks. We estimate the equation by two-stage least squares with the three demand instruments and their interactions with the time trend. Pooling the 24 two-digit industries within each group, the first-stage F-statistics range from 14.2 to 41.8. The estimated markup for industry j in year t is μ_jt = μ_j + λ_j·(t − 2016), and the manufacturing average is weighted by nominal sales.",
            "The pass-through parameter ψ is estimated by regressing the growth of firm-level unit values, available for a subsample of 2,814 single-product firms that report physical quantities in 2015–2022, on the growth of the estimated industry markup, controlling for the growth of input prices. The estimate is ψ = 0.52 (standard error 0.14), indicating that about half of markup growth is passed into deflated revenue because the producer price index captures transaction prices only partly. We apply this value to all industries and vary it in robustness checks.",
          ],
        },
        {
          id: "pf",
          heading: "6.2 Production Function Estimation",
          paragraphs: [
            "We estimate Cobb-Douglas gross-output production functions r_it = β_l l_it + β_k k_it + β_m m_it + ω_it + η_it separately for each industry group, using OLS, the Levinsohn and Petrin {5} estimator, and the Ackerberg, Caves and Frazer {6} estimator implemented in one step following Wooldridge {15}, with materials as the proxy variable. The corrected estimator replaces deflated revenue r_it by r_it − ψ·ln μ_jt, and estimates the production function on inputs multiplied by the industry markup, so that the estimated coefficients are interpretable as cost-share-based output elasticities. Productivity is the residual ω_it.",
            "Aggregate TFP growth is the sales-weighted average of firm-level productivity growth, decomposed with the dynamic Olley-Pakes method of Melitz and Polanec {23} into a within-firm component, a between-firm reallocation component, and the contributions of entry and exit. For growth-accounting comparisons we also compute index-number residuals using revenue shares (uncorrected) and markup-adjusted shares (corrected), which do not require estimating elasticities and which correspond to the formulas in Section 4.",
          ],
        },
        {
          id: "inference",
          heading: "6.3 Inference",
          paragraphs: [
            "Because the corrected TFP series depends on estimated markups, we obtain standard errors by a block bootstrap that resamples firms within industries and re-estimates the markup regressions, the pass-through parameter, the production functions and the aggregation in each of 499 replications. The bootstrap 95 percent confidence interval for the baseline correction of 0.41 percentage points per year is [0.27, 0.56], so the correction is precisely estimated relative to its size.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We present the results in three steps: the estimated markups, the production-function elasticities with and without correction, and the implications for aggregate TFP growth.",
      ],
      subsections: [
        {
          id: "markups",
          heading: "7.1 Hall-Style Markups",
          paragraphs: [
            "Table 2 reports estimated markups for the ten industry groups, averaged over 2010–2014 and 2018–2022. Markups are significantly above one in eight of the ten groups. They are highest in pharmaceuticals (1.34 rising to 1.48) and electronics and semiconductors (1.27 rising to 1.40), and lowest in textiles and apparel and in shipbuilding and other transport equipment, where they are close to one and did not rise. Chemicals also experienced a substantial increase, from 1.21 to 1.30. In the remaining groups, markups rose modestly or not at all.",
            "Figure 1 shows the evolution of the sales-weighted manufacturing markup. The Hall-style estimate rises steadily from 1.19 in 2010 to 1.26 in 2022, an increase of 0.07, or about 5.7 log points. Firm-level markups estimated by the De Loecker and Warzynski {2} method, with materials as the flexible input, are higher in level, starting at 1.24 and reaching 1.35, but follow a similar trend. The higher level is consistent with the tendency of the production approach to produce larger markups when output elasticities are estimated from revenue [17][24]; for our purposes the important point is that both methods indicate rising market power.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Hall-style markup estimates by industry group",
              columns: ["Industry group", "Markup 2010–2014", "Markup 2018–2022", "Change", "First-stage F", "Share of sales 2022"],
              rows: [
                ["Food and beverages", "1.22***", "1.25***", "0.03", "18.6", "0.07"],
                ["Textiles and apparel", "1.08*", "1.07", "−0.01", "14.2", "0.03"],
                ["Chemicals and refined petroleum", "1.21***", "1.30***", "0.09**", "27.4", "0.16"],
                ["Pharmaceuticals", "1.34***", "1.48***", "0.14***", "15.9", "0.03"],
                ["Rubber and plastics", "1.12**", "1.14**", "0.02", "21.3", "0.04"],
                ["Basic metals", "1.10**", "1.12**", "0.02", "33.1", "0.10"],
                ["Fabricated metals and machinery", "1.15***", "1.19***", "0.04", "24.7", "0.14"],
                ["Electronics and semiconductors", "1.27***", "1.40***", "0.13***", "41.8", "0.24"],
                ["Motor vehicles", "1.18***", "1.22***", "0.04*", "29.5", "0.14"],
                ["Shipbuilding and other transport", "1.06", "1.05", "−0.01", "16.8", "0.05"],
                ["Manufacturing (sales-weighted)", "1.20***", "1.25***", "0.05***", "", "1.00"],
              ],
              note: "Note: Two-stage least squares estimates of the Hall regression with a linear markup trend, using oil price changes, partner-country import demand and government consumption growth (and their interactions with the trend) as instruments. Stars on markup levels test μ = 1; stars on changes test a zero trend. * p < 0.10, ** p < 0.05, *** p < 0.01; bootstrap standard errors.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Sales-weighted markups in Korean manufacturing, 2010–2022",
              kind: "line",
              xLabels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
              yLabel: "Price over marginal cost",
              series: [
                { name: "Hall-style (industry)", values: [1.19, 1.19, 1.2, 1.2, 1.21, 1.21, 1.22, 1.23, 1.23, 1.24, 1.24, 1.25, 1.26] },
                { name: "De Loecker–Warzynski (firm)", values: [1.24, 1.25, 1.25, 1.26, 1.27, 1.28, 1.29, 1.3, 1.3, 1.31, 1.32, 1.34, 1.35] },
              ],
              note: "Note: Industry markups from the Hall regression in Table 2, weighted by nominal sales; firm-level markups from the ratio of the materials elasticity to the materials revenue share, weighted by sales.",
            },
          ],
        },
        {
          id: "elasticities",
          heading: "7.2 Production Function Elasticities",
          paragraphs: [
            "Table 3 reports pooled estimates of the production function, averaging industry-specific coefficients with sales weights. The uncorrected estimators give a materials elasticity of 0.66–0.68 and implied returns to scale of 0.92–0.95. These values are close to the revenue shares in Table 1, as expected if revenue-based estimators recover revenue elasticities. Decreasing returns of this magnitude are implausible for manufacturing and are a classic symptom of the Klette and Griliches {7} bias.",
            "The corrected Ackerberg–Caves–Frazer estimator raises all three elasticities and implies returns to scale of 1.02, statistically indistinguishable from one. The largest change is in the materials elasticity, which rises from 0.67 to 0.73. Because materials growth exceeded labour growth over the period, the larger weight on materials absorbs a substantial part of what the uncorrected estimator attributes to productivity. The corrected elasticities are also close to the cost shares implied by Table 1, providing an internal consistency check on the Hall-style markups.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Production function estimates, Korean manufacturing (sales-weighted average of industry estimates)",
              columns: ["Coefficient", "OLS", "Levinsohn–Petrin", "ACF", "ACF, markup-corrected"],
              rows: [
                ["Labour", "0.21", "0.18", "0.17", "0.19"],
                ["", "(0.01)", "(0.02)", "(0.02)", "(0.02)"],
                ["Capital", "0.06", "0.08", "0.09", "0.10"],
                ["", "(0.01)", "(0.01)", "(0.02)", "(0.02)"],
                ["Materials", "0.68", "0.66", "0.67", "0.73"],
                ["", "(0.01)", "(0.02)", "(0.02)", "(0.03)"],
                ["Returns to scale", "0.95", "0.92", "0.93", "1.02"],
                ["Test of constant returns (p-value)", "0.000", "0.000", "0.000", "0.412"],
                ["Observations", "78,420", "78,420", "78,420", "78,420"],
              ],
              note: "Note: Gross-output Cobb-Douglas production functions estimated separately for ten industry groups; coefficients are averaged with 2022 sales weights. Bootstrap standard errors (499 replications, clustered by firm) in parentheses.",
            },
          ],
        },
        {
          id: "aggregate",
          heading: "7.3 Aggregate TFP Growth",
          paragraphs: [
            "Table 4 reports aggregate TFP growth for the full period and three sub-periods. Uncorrected TFP growth averages 1.58 percent per year over 2010–2022. After the correction it averages 1.17 percent per year, a reduction of 0.41 percentage points. The factor-weighting term contributes 0.17 points and the price term 0.24 points. The correction rises over time, from 0.30 points in 2010–2014 to 0.42 points in 2014–2018 and 0.50 points in 2018–2022, reflecting both the rising level of markups, which enlarges the weighting bias, and their accelerating growth after 2018, which enlarges the price bias.",
            "Figure 2 plots the cumulative TFP index. By 2022 the uncorrected index stands at 120.8 (2010 = 100) and the corrected index at 115.1, a gap of 4.7 percent. The two series move together year to year, because the correction is smooth relative to cyclical fluctuations in measured productivity; in particular, both register a decline in 2020 and a strong rebound in 2021. The divergence is cumulative, however, so that the corrected series attributes roughly a quarter of the measured productivity gain since 2010 to rising markups.",
            "The Melitz–Polanec decomposition shows that the correction reduces both the within-firm and the reallocation components. Of the 0.41-point correction, 0.26 points fall on the within-firm term and 0.15 points on the between-firm term. The latter reflects the fact that market share shifted towards large firms whose markups rose most, so that part of the apparent reallocation of activity towards more productive firms is in fact reallocation towards firms with more market power — a distinction that, as Baqaee and Farhi {19} emphasise, matters for the welfare interpretation of reallocation.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Aggregate TFP growth in Korean manufacturing: uncorrected and corrected (percent per year)",
              columns: ["Period", "Uncorrected", "Corrected", "Correction", "Factor-weighting term", "Price term"],
              rows: [
                ["2010–2014", "1.70", "1.40", "−0.30", "−0.14", "−0.16"],
                ["2014–2018", "1.50", "1.08", "−0.42", "−0.17", "−0.25"],
                ["2018–2022", "1.53", "1.03", "−0.50", "−0.19", "−0.31"],
                ["2010–2022", "1.58", "1.17", "−0.41", "−0.17", "−0.24"],
                ["Bootstrap 95% CI, 2010–2022", "", "[1.01, 1.31]", "[−0.56, −0.27]", "", ""],
              ],
              note: "Note: Sales-weighted average of firm-level TFP growth from the ACF estimator. The correction applies Hall-style industry markups to the factor weights and removes the passed-through share (ψ = 0.52) of markup growth from deflated revenue. Components may not sum because of rounding.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Cumulative TFP in Korean manufacturing, uncorrected and markup-corrected (2010 = 100)",
              kind: "line",
              xLabels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
              yLabel: "TFP index",
              series: [
                { name: "Uncorrected", values: [100, 102.6, 104.1, 105.3, 107.0, 108.3, 109.7, 112.0, 113.7, 114.2, 113.7, 117.8, 120.8] },
                { name: "Markup-corrected", values: [100, 102.4, 103.5, 104.4, 105.8, 106.6, 107.6, 109.3, 110.4, 110.5, 109.6, 112.9, 115.1] },
              ],
              note: "Note: Cumulated sales-weighted TFP growth from the ACF estimator. Average growth is 1.58 percent per year (uncorrected) and 1.17 percent per year (corrected).",
            },
          ],
        },
      ],
    },
    {
      id: "heterogeneity",
      heading: "8. Heterogeneity and Mechanisms",
      paragraphs: [
        "Hypothesis H2 predicts that the bias should be concentrated where markups rose. Table 5 tests this by grouping industries into terciles of the estimated markup change between 2010–2014 and 2018–2022. In the bottom tercile, which includes textiles, shipbuilding, basic metals and rubber and plastics, the correction is only 0.04 percentage points per year and is not statistically significant. In the middle tercile it is 0.32 points. In the top tercile, dominated by electronics and semiconductors, pharmaceuticals and chemicals, uncorrected TFP growth of 2.04 percent per year falls to 1.25 percent, a correction of 0.79 points. Strikingly, the large gap in measured productivity growth between the top and bottom terciles — 0.92 points before correction — shrinks to 0.17 points after it.",
        "The correction is also larger for large firms and for exporters. For firms with 300 or more employees it is 0.52 points, compared with 0.22 points for smaller firms, consistent with the concentration of market power suggested by the revenue shares in Table 1. Among exporters the correction is 0.46 points, compared with 0.23 points among non-exporters. This pattern echoes the finding of De Loecker and Warzynski {2} that exporters charge higher markups, and suggests that part of the measured productivity premium of exporters documented in earlier work on Korea [21] may reflect market power.",
        "Which component drives the heterogeneity? In the top tercile, the price term accounts for about 60 percent of the correction, because markup growth was large; in the middle tercile, the two terms contribute roughly equally. This matters for researchers who use firm-level TFP as an outcome: the factor-weighting bias is largely absorbed by firm or industry fixed effects in regression analyses, but the price bias, which varies with the evolution of market power, is not, and can generate spurious correlations between measured productivity and any policy or shock that affects competition.",
        "Finally, we ask whether markup increases reflect changes in competitive conditions. Industries in which the Herfindahl index of sales rose by more than the median experienced markup increases about twice as large as other industries, and industries affected by the deregulation episodes studied in earlier JER work [26] experienced smaller increases. These correlations are not causal, but they support the interpretation that the measured bias is linked to market power rather than to unmeasured changes in technology such as increasing returns.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. TFP growth correction by industry and firm characteristics, 2010–2022 (percent per year)",
          columns: ["Group", "Share of value added", "Uncorrected", "Corrected", "Correction", "Std. error"],
          rows: [
            ["Bottom tercile of markup change", "0.30", "1.12", "1.08", "−0.04", "(0.05)"],
            ["Middle tercile of markup change", "0.33", "1.49", "1.17", "−0.32***", "(0.08)"],
            ["Top tercile of markup change", "0.37", "2.04", "1.25", "−0.79***", "(0.15)"],
            ["Firms with 300+ employees", "0.68", "1.79", "1.27", "−0.52***", "(0.09)"],
            ["Firms with fewer than 300 employees", "0.32", "1.13", "0.91", "−0.22***", "(0.06)"],
            ["Exporters", "0.81", "1.70", "1.24", "−0.46***", "(0.08)"],
            ["Non-exporters", "0.19", "1.07", "0.84", "−0.23***", "(0.07)"],
          ],
          note: "Note: Terciles are formed over the 24 two-digit industries by the change in the Hall-style markup between 2010–2014 and 2018–2022. Bootstrap standard errors of the correction in parentheses. *** p < 0.01.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a range of robustness checks for the correction to aggregate TFP growth. Replacing the Hall-style industry markups with firm-level De Loecker–Warzynski markups yields a somewhat larger correction of 0.47 points, reflecting the steeper trend in Figure 1. Estimating the Hall regression in rolling five-year windows rather than with a linear trend gives 0.38 points. A translog production function gives 0.43 points, and a value-added specification, which is less affected by the weighting of materials, gives 0.36 points.",
        "The results are not sensitive to the choice of instruments: using only the oil price gives 0.44 points, and using only partner-country import demand gives 0.39 points. Excluding semiconductors, where Korean firms may influence world prices and thus the exogeneity of partner demand is questionable, lowers the correction to 0.29 points, because semiconductors had one of the largest markup increases; the correction remains significant. Relaxing constant returns by estimating γ jointly with the markup, following Basu and Fernald {12}, yields returns to scale of 1.03 and a correction of 0.37 points.",
        "The pass-through parameter is the least precisely estimated input to the correction. Setting ψ to zero, which attributes none of the markup growth to deflated revenue and retains only the factor-weighting term, gives a lower bound of 0.17 points. Setting ψ to one gives an upper bound of 0.64 points. Our baseline of 0.41 points lies in the middle of this range. Using firm-level unit values for single-product firms to deflate revenue directly, which removes the price bias by construction for this subsample, yields a correction of 0.39 points when combined with the Hall-style weights, close to the baseline. Finally, the Roeger {11} primal-dual approach, which does not require instruments, gives a mean markup of 1.23 and a correction of 0.42 points.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the correction to aggregate TFP growth, 2010–2022 (percentage points per year)",
          columns: ["Specification", "Correction", "Std. error", "Corrected TFP growth"],
          rows: [
            ["Baseline (Hall markups with trend, ACF, ψ = 0.52)", "−0.41***", "(0.07)", "1.17"],
            ["Firm-level De Loecker–Warzynski markups", "−0.47***", "(0.09)", "1.11"],
            ["Rolling five-year Hall regressions", "−0.38***", "(0.08)", "1.20"],
            ["Translog production function", "−0.43***", "(0.08)", "1.15"],
            ["Value-added production function", "−0.36***", "(0.07)", "1.22"],
            ["Oil price instrument only", "−0.44***", "(0.11)", "1.14"],
            ["Partner import demand instrument only", "−0.39***", "(0.09)", "1.19"],
            ["Excluding semiconductors", "−0.29***", "(0.07)", "1.12"],
            ["Returns to scale estimated jointly", "−0.37***", "(0.08)", "1.21"],
            ["ψ = 0 (factor weighting only)", "−0.17***", "(0.04)", "1.41"],
            ["ψ = 1 (full pass-through)", "−0.64***", "(0.12)", "0.94"],
            ["Roeger primal-dual markups", "−0.42***", "(0.08)", "1.16"],
          ],
          note: "Note: Each row re-estimates markups, production functions and aggregate TFP growth under the stated change. Uncorrected TFP growth is 1.58 percent per year except when semiconductors are excluded (1.41) and in the value-added specification (1.58). Bootstrap standard errors in parentheses. *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our findings have three implications. The first concerns official productivity statistics. A correction of about 0.4 percentage points per year is large relative to measured TFP growth of 1.58 percent: it implies that roughly a quarter of the productivity growth recorded in Korean manufacturing since 2010 reflects rising market power. Because the correction requires only industry data and a small set of aggregate instruments, statistical agencies could publish markup-adjusted productivity series alongside their standard estimates, as a diagnostic rather than a replacement.",
        "The second implication concerns potential output. Estimates of trend TFP growth enter the potential-output models used for monetary and fiscal policy. If trend manufacturing TFP growth is closer to 1.2 than to 1.6 percent, potential output growth is correspondingly lower, the output gap correspondingly smaller, and medium-term revenue projections correspondingly less optimistic. The adjustment has grown over time, so its relevance for current projections is greater than the period average suggests.",
        "The third implication concerns applied microeconomic research. Firm-level TFP is widely used to evaluate trade, industrial and competition policies. Our results show that the bias is concentrated in industries and firms where markups rose, and that the price component of the bias varies with competitive conditions. A policy that softens competition may therefore appear to raise productivity, while one that intensifies competition may appear to lower it, even if neither affects technology. Researchers studying such policies should at a minimum report results with markup-corrected productivity, and ideally use price data where available [8][9].",
        "We stress the limits of the correction. The Hall method identifies industry-level markups and their trends, not firm-level markups, and our pass-through parameter is estimated on a subsample of single-product firms. The correction also assumes that the cost shares and user cost of capital are correctly measured; if part of the decline in revenue shares reflects unmeasured intangible capital rather than market power, as some authors have argued for the United States [16], our correction would overstate the bias. The robustness checks suggest that these concerns affect the magnitude of the correction at the margin but not its sign or broad size.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We have shown that standard production-function approaches to TFP estimation, which assume perfect competition, overstate productivity growth in industries where markups have risen, and we have proposed a simple correction based on Hall-style markup estimates. Applied to Korean manufacturing firm-level data for 2010–2022, the correction reduces estimated TFP growth from 1.58 to 1.17 percent per year, by approximately 0.4 percentage points per year, with the adjustment concentrated in electronics, pharmaceuticals and chemicals and in large, exporting firms. The adjustment grew over the period as markups rose from 1.19 to 1.26.",
        "Several extensions would be valuable. Matching firm-level price data to the Survey of Business Activities would allow the pass-through of markups into deflated revenue to be estimated for all firms rather than a subsample. Extending the analysis to services, where markups and their measurement are even less well understood, would test whether the bias is a general feature of the Korean economy. And combining the correction with a general-equilibrium aggregation framework would allow the welfare consequences of rising markups, as distinct from their measurement consequences, to be quantified. In the meantime, our results suggest that researchers and statistical agencies should treat productivity estimates in concentrated industries with caution.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Derivation and Implementation Details",
      paragraphs: [
        "Derivation of the bias. Cost minimisation for flexible input k implies P·∂Q/∂X_k = μ·W_k, so θ_k = (∂Q/∂X_k)(X_k/Q) = μ·W_k X_k/(P Q) = μ·α^R_k. Substituting into Δω = Δq − Σ_k θ_k Δx_k and using Δr = Δq + Δp_i − Δp_j gives Δtfp^S = Δr − Σ_k α^R_k Δx_k = Δω + (μ − 1) Σ_k α^R_k Δx_k + (Δp_i − Δp_j). For capital, which is quasi-fixed, the relation holds with the shadow user cost; we measure it with the external user cost described in the note to Table 1, and show in Table 6 that a value-added specification that weights capital differently gives similar results.",
        "Hall regression. Growth rates are computed as log differences of industry aggregates. Cost shares are two-year averages (Törnqvist weights). The instruments enter in first differences and are standardised. The trend interaction is centred on 2016 so that μ_j is the mid-sample markup. We tested for serial correlation in the residuals and found none at conventional levels; standard errors are nevertheless obtained by bootstrapping firms within industries to account for the generated regressors in the second step.",
        "Pass-through parameter. The 2,814 single-product firms report physical quantities for their main product from 2015 onwards. We compute unit values as sales divided by quantity, and regress their log change on the log change in the industry markup and in the industry input price index, with firm and year fixed effects. The coefficient on markup growth is 0.52 (0.14). Because the industry deflator is subtracted from revenue growth in the TFP calculation, this coefficient measures the share of markup growth that survives deflation.",
        "Aggregation. Firm-level TFP growth is aggregated with nominal sales weights averaged over adjacent years. Entry and exit contributions follow Melitz and Polanec {23}, defining entrants as firms that cross the survey threshold for the first time and exiters as firms that drop below it or close. Because the survey threshold is based on employment and capital, entry and exit partly reflect firm growth around the threshold; the corrected and uncorrected series treat these flows identically, so they do not affect the correction.",
      ],
    },
  ],
};
