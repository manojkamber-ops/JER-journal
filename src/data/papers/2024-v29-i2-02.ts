// Vol. 29, No. 2 (April 2024) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2024-v29-i2-02",
  acknowledgments:
    "We thank seminar participants at Keio University, Hanyang University and the Korea Institute for International Economic Policy, two anonymous referees and the handling Associate Editor for helpful comments. We are grateful to staff at the Korea Customs Service and Statistics Korea for assistance with access to the micro-data. All errors are our own.",
  dataAvailability:
    "Firm-level customs declarations and Survey of Business Activities micro-data are confidential and can be accessed through the Statistics Korea Microdata Integrated Service and the on-site research facility of the Korea Customs Service, subject to approval. Tariff schedules are public and were obtained from the Korea Customs Service and the WTO tariff databases. Code and constructed tariff measures are available from the corresponding author.",
  editorialNote:
    "Yuki Tanaka and Min-Su Park use customs micro-data for 2005–2022 to show that input-tariff cuts under Korea's free trade agreements raised firm productivity by 2.1 percent on average, with gains three times larger in the top than in the bottom quartile of initial productivity, and that reallocation accounts for about 40 percent of the aggregate productivity gain.",
  refs: [
    /* 1 */ "Amiti, M., & Konings, J. (2007). Trade liberalization, intermediate inputs, and productivity: Evidence from Indonesia. American Economic Review, 97(5), 1611–1638.",
    /* 2 */ "Topalova, P., & Khandelwal, A. (2011). Trade liberalization and firm productivity: The case of India. Review of Economics and Statistics, 93(3), 995–1009.",
    /* 3 */ "Goldberg, P. K., Khandelwal, A. K., Pavcnik, N., & Topalova, P. (2010). Imported intermediate inputs and domestic product growth: Evidence from India. Quarterly Journal of Economics, 125(4), 1727–1767.",
    /* 4 */ "Halpern, L., Koren, M., & Szeidl, A. (2015). Imported inputs and productivity. American Economic Review, 105(12), 3660–3703.",
    /* 5 */ "Kasahara, H., & Rodrigue, J. (2008). Does the use of imported intermediates increase productivity? Plant-level evidence. Journal of Development Economics, 87(1), 106–118.",
    /* 6 */ "Pavcnik, N. (2002). Trade liberalization, exit, and productivity improvements: Evidence from Chilean plants. Review of Economic Studies, 69(1), 245–276.",
    /* 7 */ "Trefler, D. (2004). The long and short of the Canada–U.S. Free Trade Agreement. American Economic Review, 94(4), 870–895.",
    /* 8 */ "Melitz, M. J. (2003). The impact of trade on intra-industry reallocations and aggregate industry productivity. Econometrica, 71(6), 1695–1725.",
    /* 9 */ "Melitz, M. J., & Ottaviano, G. I. P. (2008). Market size, trade, and productivity. Review of Economic Studies, 75(1), 295–316.",
    /* 10 */ "Olley, G. S., & Pakes, A. (1996). The dynamics of productivity in the telecommunications equipment industry. Econometrica, 64(6), 1263–1297.",
    /* 11 */ "Melitz, M. J., & Polanec, S. (2015). Dynamic Olley–Pakes productivity decomposition with entry and exit. RAND Journal of Economics, 46(2), 362–375.",
    /* 12 */ "Ackerberg, D. A., Caves, K., & Frazer, G. (2015). Identification properties of recent production function estimators. Econometrica, 83(6), 2411–2451.",
    /* 13 */ "Levinsohn, J., & Petrin, A. (2003). Estimating production functions using inputs to control for unobservables. Review of Economic Studies, 70(2), 317–341.",
    /* 14 */ "De Loecker, J., Goldberg, P. K., Khandelwal, A. K., & Pavcnik, N. (2016). Prices, markups, and trade reform. Econometrica, 84(2), 445–510.",
    /* 15 */ "Lileeva, A., & Trefler, D. (2010). Improved access to foreign markets raises plant-level productivity… for some plants. Quarterly Journal of Economics, 125(3), 1051–1099.",
    /* 16 */ "Bustos, P. (2011). Trade liberalization, exports, and technology upgrading: Evidence on the impact of MERCOSUR on Argentinian firms. American Economic Review, 101(1), 304–340.",
    /* 17 */ "Bloom, N., Draca, M., & Van Reenen, J. (2016). Trade induced technical change? The impact of Chinese imports on innovation, IT and productivity. Review of Economic Studies, 83(1), 87–117.",
    /* 18 */ "Autor, D. H., Dorn, D., & Hanson, G. H. (2013). The China syndrome: Local labor market effects of import competition in the United States. American Economic Review, 103(6), 2121–2168.",
    /* 19 */ "Hsieh, C.-T., & Klenow, P. J. (2009). Misallocation and manufacturing TFP in China and India. Quarterly Journal of Economics, 124(4), 1403–1448.",
    /* 20 */ "Bartelsman, E., Haltiwanger, J., & Scarpetta, S. (2013). Cross-country differences in productivity: The role of allocation and selection. American Economic Review, 103(1), 305–334.",
    /* 21 */ "Baier, S. L., & Bergstrand, J. H. (2007). Do free trade agreements actually increase members' international trade? Journal of International Economics, 71(1), 72–95.",
    /* 22 */ "Bernard, A. B., Jensen, J. B., & Schott, P. K. (2006). Trade costs, firms and productivity. Journal of Monetary Economics, 53(5), 917–937.",
    /* 23 */ "Fernandes, A. M. (2007). Trade policy, trade volumes and plant-level productivity in Colombian manufacturing industries. Journal of International Economics, 71(1), 52–71.",
    /* 24 */ "Bas, M., & Strauss-Kahn, V. (2015). Input-trade liberalization, export prices and quality upgrading. Journal of International Economics, 95(2), 250–262.",
    /* 25 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 26 */ { jer: "2024-v29-i1-04" },
    /* 27 */ { jer: "2023-v28-i2-04" },
    /* 28 */ { jer: "2022-v27-i4-03" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "How trade liberalisation raises productivity is one of the central questions of international economics. Theory identifies two broad channels. Within firms, cheaper and more varied imported inputs allow producers to adopt better technologies and raise efficiency [3][4]. Across firms, falling trade costs reallocate market share from less to more productive producers and force the least productive to exit [8][9]. Empirical work on the large unilateral liberalisations of the 1980s and 1990s in Chile, India and Indonesia has found evidence of both [1][2][6], but much less is known about the gradual, bilateral and preferential liberalisation that has characterised trade policy since the 2000s, and about how the two channels combine to shape aggregate productivity in an advanced, highly integrated economy.",
        "Korea provides an ideal setting. Between 2004 and 2022 it concluded free trade agreements (FTAs) with 58 economies, including the United States, the European Union, China, the members of ASEAN and, through the Regional Comprehensive Economic Partnership, Japan. These agreements were negotiated separately, entered into force at different dates and phased tariff reductions in over periods of up to twenty years. Because Korean manufacturers sourced their inputs from very different combinations of countries before the agreements, the same FTA reduced the tariffs paid by some firms far more than others. This variation, across firms and over time within narrowly defined industries, allows us to isolate the effect of input-tariff reductions from industry-wide shocks.",
        "We combine firm-level customs micro-data, which record every import declaration by product, origin and applicable tariff regime, with balance-sheet data on manufacturing firms for 2005–2022. For each firm we construct an input tariff that weights the tariff applicable to each product–origin pair by the firm's pre-sample import shares. We then estimate firm productivity using a control-function approach that accounts for variable markups, and relate it to the firm's input tariff.",
        "We find that tariff reductions on imported inputs raise firm productivity by 2.1 percent on average over the sample period. The gains are strongly heterogeneous: firms in the upper quartile of initial productivity experience gains three times larger than those in the lower quartile (3.3 versus 1.1 percent), because they are better placed to exploit new input varieties and to complement them with investments in technology. Aggregating across firms with a dynamic Olley–Pakes decomposition, reallocation of market share towards more productive firms and the exit of less productive ones account for approximately 40 percent of the total effect of FTA tariff reductions on aggregate productivity, with the remainder driven by within-firm improvements. Effects are muted in industries with limited import competition, where neither firms nor markets appear to respond strongly to cheaper inputs.",
        "The paper makes three contributions. First, it provides firm-level evidence on the productivity effects of preferential, bilateral liberalisation in an advanced economy, complementing studies of unilateral reforms in developing countries [1][2][23]. Second, by combining the firm-level estimates with a decomposition of aggregate productivity, it quantifies the relative importance of within-firm upgrading and reallocation — the two channels emphasised in the theoretical literature — for the same policy change. Third, it documents that the benefits of input liberalisation accrue disproportionately to already productive firms, a finding with implications for the distributional consequences of trade agreements and for the design of complementary policies.",
        "The rest of the paper is organised as follows. Section 2 describes Korea's FTA programme. Section 3 reviews the literature and Section 4 presents the conceptual framework. Sections 5 and 6 describe the data and empirical strategy. Section 7 presents the main results, Section 8 investigates mechanisms and heterogeneity, and Section 9 reports robustness checks. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Until the early 2000s Korea relied almost entirely on multilateral liberalisation under the GATT and WTO. Its first FTA, with Chile, entered into force in April 2004, and the government's 2003 FTA Roadmap set out an ambitious strategy of simultaneous negotiations with large economies. Agreements with Singapore and the European Free Trade Association followed in 2006 and with ASEAN in 2007. The agreements with the European Union (July 2011) and the United States (March 2012) were the most significant in terms of trade coverage, followed by the FTA with China, which entered into force in December 2015. Agreements with India, Peru, Turkey, Australia, Canada, New Zealand, Vietnam, Colombia and Central American countries followed, and in February 2022 the Regional Comprehensive Economic Partnership created Korea's first preferential trade arrangement with Japan.",
        "Table 1 summarises the main agreements. By 2022 FTA partners accounted for about 68 percent of Korea's imports, up from 1 percent in 2004. Korea's most-favoured-nation (MFN) applied tariffs on manufactured intermediate goods averaged around 6 to 8 percent, so preferential rates — typically zero after phase-in — implied meaningful reductions in input costs. Phase-in schedules varied by product: tariffs on many intermediate goods were eliminated immediately, while sensitive products were phased out over five to fifteen years. Because preferential tariffs require proof of origin, not all eligible imports use the preferential regime; utilisation rates rose from about 50 percent in the first years of an agreement to over 80 percent for the large agreements by the late 2010s.",
        "For identification, the key institutional feature is that the timing and scope of each agreement were determined by diplomatic negotiations at the national level, with tariff schedules set for thousands of products at once. It is implausible that individual firms could influence the tariff applied to their specific product–origin combinations, and the firms' pre-sample sourcing patterns, which determine their exposure, were set before the FTA strategy was announced.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Korea's main free trade agreements, 2004–2022",
          columns: ["Partner", "In force", "Share of Korean imports, 2004 (%)", "Avg. MFN tariff on inputs from partner (%)", "Avg. preferential tariff, 2022 (%)", "Max. phase-in (years)"],
          rows: [
            ["Chile", "Apr 2004", "0.9", "4.9", "0.0", "16"],
            ["EFTA / Singapore", "2006", "3.2", "5.8", "0.1", "10"],
            ["ASEAN", "Jun 2007", "10.1", "7.1", "0.6", "16"],
            ["India", "Jan 2010", "1.0", "7.3", "1.4", "10"],
            ["European Union", "Jul 2011", "10.3", "6.4", "0.0", "15"],
            ["United States", "Mar 2012", "12.8", "6.2", "0.0", "15"],
            ["Australia / Canada / NZ", "2014–15", "5.1", "5.6", "0.2", "15"],
            ["China", "Dec 2015", "13.2", "7.8", "3.1", "20"],
            ["Vietnam", "Dec 2015", "0.6", "7.4", "0.9", "15"],
            ["RCEP (incl. Japan)", "Feb 2022", "20.6", "6.9", "5.2", "20"],
          ],
          note: "Note: Import shares from Korea Customs Service trade statistics. Average tariffs are simple averages across HS 6-digit intermediate goods (BEC classification) of the Korean tariff applied to imports from the partner: MFN applied rate before the agreement and preferential rate in 2022. For RCEP, the share and tariffs refer to all members not previously covered by a Korean FTA (Japan accounts for 20.6 percent of 2004 imports). Phase-in is the longest tariff-elimination schedule on industrial goods.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "A large literature studies the effect of trade liberalisation on firm productivity. Early work focused on output tariffs and import competition: {6} shows that productivity in Chile's import-competing sectors rose after liberalisation, and {7} finds that the Canada–U.S. FTA raised labour productivity in Canadian manufacturing, partly through the exit of low-productivity plants. {1} show that in Indonesia a reduction in input tariffs raised productivity by considerably more than an equivalent reduction in output tariffs, and {2} and {3} find similar results for India, where cheaper inputs also expanded the range of products firms produced. {4} and {5} show that importing raises productivity, through both the quality and the variety of inputs, and {24} find that input-tariff cuts allowed French exporters to upgrade quality.",
        "A related literature emphasises the reallocation of activity across firms. In the model of {8}, falling trade costs raise aggregate productivity by shifting market share towards more productive exporters and forcing the least productive firms to exit; {9} show how larger markets toughen competition and lower markups. {22} provide evidence that falling trade costs induce reallocation in U.S. manufacturing. Decompositions of aggregate productivity [10][11] allow the contributions of within-firm growth and reallocation to be measured, and cross-country work shows that allocative efficiency differs widely across economies [19][20]. Export market access can also raise productivity by encouraging investment in technology [15][16], and import competition can stimulate innovation [17] or reduce employment in exposed regions [18].",
        "Measuring productivity in the presence of trade reform raises its own challenges. Production function estimates based on revenue conflate efficiency with prices and markups, which themselves respond to trade reform [14]. We use the control-function approach of {12}, which builds on {13}, with an adjustment for variable markups following {14}; earlier work in this journal shows that ignoring rising markups biases productivity estimates for Korean manufacturing upwards {26}. Finally, our paper relates to evidence that FTAs increase members' trade [21], to work on Korea's position in Asian value-added trade networks {27} and to research on the long-run effects of Korean industrial policy on export upgrading {28}.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider an industry with heterogeneous firms in the spirit of {8}, in which each firm combines labour with a bundle of domestic and imported intermediate inputs. As in {4}, imported inputs are imperfect substitutes for domestic ones, and using more varieties raises effective productivity, but each imported variety entails a fixed cost. A reduction in input tariffs lowers the price of imported varieties and has two effects. First, it raises the productivity of firms that already import and induces them to expand the set of imported varieties — the within-firm effect. Second, because firms with higher initial productivity are larger and can more easily cover the fixed costs of sourcing additional varieties, their gains are larger, and they expand at the expense of less productive competitors. This raises aggregate productivity through reallocation, even if within-firm productivity changes are unchanged on average.",
        "The strength of reallocation depends on competitive pressure. If cost savings are passed through to prices and demand is elastic, more productive firms gain market share rapidly. In industries with limited import competition — where domestic incumbents face few foreign rivals and markets are concentrated — firms may retain cost savings as higher markups rather than expanding output, and the pressure to upgrade technology is weaker [9][17]. The framework yields three hypotheses. H1: reductions in input tariffs raise firm-level productivity. H2: gains are increasing in initial productivity, so that reallocation contributes to the aggregate gain. H3: both within-firm and reallocation effects are weaker in industries with limited import competition.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We link three confidential micro-data sets through a common business registration number.",
      ],
      subsections: [
        {
          id: "data-sources",
          heading: "5.1 Customs and firm data",
          paragraphs: [
            "Customs declarations from the Korea Customs Service record, for every import transaction between 2003 and 2022, the importing firm, the 10-digit HSK product code, the country of origin, the value, and the tariff regime applied (MFN, a specific FTA, or a duty-free scheme), together with the tariff paid. We aggregate transactions to the firm–product–origin–year level. Firm characteristics come from Statistics Korea's Survey of Business Activities, which covers all firms with at least 50 employees and capital of at least KRW 300 million, supplemented for smaller firms by the Mining and Manufacturing Survey. These provide sales, value added, employment, tangible assets, material costs, R&D expenditure and exports.",
            "Our sample consists of manufacturing firms observed in at least three years between 2005 and 2022. After dropping firms with missing or non-positive values of key variables, it contains 21,384 firms and 213,906 firm-year observations. Of these firms, 64 percent imported intermediate goods in 2003–2004, the pre-sample period used to construct exposure weights; non-importers are included and face input-tariff changes through domestic suppliers, as described below. Table 2 reports summary statistics.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Summary statistics, manufacturing firms, 2005–2022",
              columns: ["Variable", "Mean", "Std. dev.", "p25", "p75"],
              rows: [
                ["Employment", "186", "642", "28", "142"],
                ["Log TFP (markup-adjusted)", "0.00", "0.48", "−0.29", "0.30"],
                ["Firm input tariff (%)", "4.21", "2.67", "2.08", "6.02"],
                ["Change in firm input tariff, 2005–2022 (pp)", "−4.52", "2.91", "−6.40", "−2.33"],
                ["Industry output tariff (%)", "5.14", "3.38", "2.70", "7.15"],
                ["Imported input share of materials", "0.18", "0.21", "0.01", "0.29"],
                ["Number of imported varieties (product–origin)", "23.7", "61.2", "1", "19"],
                ["Exporter (share)", "0.41", "0.49", "", ""],
                ["R&D intensity (% of sales)", "1.36", "2.94", "0.00", "1.52"],
                ["Industry import penetration (%)", "24.8", "16.3", "11.9", "34.6"],
              ],
              note: "Note: N = 213,906 firm-year observations on 21,384 firms. TFP is estimated by industry using the Ackerberg–Caves–Frazer method with a correction for variable markups and normalised to mean zero in each industry-year. Imported varieties are counts of HSK 10-digit product–origin pairs. Import penetration is imports divided by domestic absorption at the KSIC 3-digit level, averaged over 2003–2004.",
            },
          ],
        },
        {
          id: "data-tariffs",
          heading: "5.2 Measuring input tariffs",
          paragraphs: [
            "For each firm f we compute a direct input tariff τ_ft = Σ_{p,c} w_{fpc} τ_{pct}, where w_{fpc} is the share of product p from origin c in the firm's imports of intermediate goods in 2003–2004 and τ_{pct} is the tariff applicable to imports of p from c in year t: the MFN applied rate before an FTA with c enters into force, and the lower of the MFN and the preferential rate afterwards, adjusted for the product-level utilisation rate of the preferential regime. Fixing the weights before the sample period ensures that the measure reflects policy, not firms' endogenous sourcing responses.",
            "Firms also benefit indirectly from cheaper imported inputs purchased by their domestic suppliers. We therefore compute an indirect input tariff by weighting industry-level average tariffs by the input–output coefficients of the 2005 Bank of Korea input–output table, and define the firm's input tariff as a weighted average of its direct and indirect tariffs, with weights given by the firm's pre-sample share of imported in total materials. The average firm input tariff fell from 6.8 percent in 2005 to 2.3 percent in 2022, a decline of 4.5 percentage points, with large variation across firms within industries (Table 2). We also construct industry output tariffs, which capture the import competition faced by each firm in its output market.",
          ],
        },
        {
          id: "data-tfp",
          heading: "5.3 Measuring productivity",
          paragraphs: [
            "We estimate gross-output production functions separately for 22 two-digit industries using the method of {12}, with materials as the proxy variable, and include the firm's input tariff, export status and import status in the law of motion for productivity to avoid assuming that productivity evolves independently of trade policy [14]. Because revenue-based productivity rises mechanically when firms raise markups, we follow {14} and recover markups from the first-order condition for materials, then deflate revenue productivity by the estimated markup. This correction matters: unadjusted revenue TFP shows larger effects of tariff cuts, consistent with partial retention of cost savings as higher markups, as also documented for Korean manufacturing in {26}.",
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our empirical strategy has two parts: firm-level regressions that estimate the effect of input tariffs on productivity, and an aggregate decomposition that translates these effects into contributions to industry productivity.",
      ],
      subsections: [
        {
          id: "strategy-firm",
          heading: "6.1 Firm-level specification",
          paragraphs: [
            "We estimate ln TFP_ft = β τ_ft + γ τᴼ_jt + X′_ft θ + μ_f + λ_jt + ε_ft, where τ_ft is the firm's input tariff, τᴼ_jt the output tariff of its industry j, X_ft time-varying controls (firm age and its square), μ_f firm fixed effects and λ_jt industry-by-year fixed effects at the KSIC three-digit level. Firm fixed effects absorb permanent differences in productivity, and industry-by-year effects absorb demand shocks, technology trends and any industry-wide policy, including the output-tariff effect in the most demanding specification. The coefficient β is identified from differences in input-tariff changes across firms in the same industry and year, which arise from differences in their pre-sample sourcing patterns and the different timing of FTAs across partners. Standard errors are clustered by firm [25].",
            "The identifying assumption is that, absent the FTAs, productivity in firms more exposed to tariff reductions would have evolved in parallel with that of less exposed firms in the same industry. We assess this in an event-study specification around the year in which a firm experienced its largest single-year input-tariff reduction, and by testing whether pre-sample productivity growth predicts later tariff changes. To examine heterogeneity, we interact τ_ft with quartiles of the firm's productivity in 2005 (or its first year in the sample) and with terciles of industry import penetration.",
          ],
        },
        {
          id: "strategy-aggregate",
          heading: "6.2 Aggregate decomposition",
          paragraphs: [
            "To quantify the aggregate effect, we use the dynamic Olley–Pakes decomposition of {11}. Industry productivity, defined as the output-share-weighted average of firm productivity, is decomposed into the change in the unweighted mean productivity of surviving firms (the within component), the change in the covariance between market share and productivity among survivors (reallocation among survivors), and the contributions of entering and exiting firms. We construct a counterfactual in which input tariffs remain at their 2005 levels: firm productivity is reduced by the estimated effect of each firm's tariff change, and market shares and exit probabilities are adjusted using separately estimated responses of firm sales growth and exit to input tariffs. The difference between the actual and counterfactual decompositions gives the contribution of FTA tariff cuts to each component.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "This section presents the average effect of input tariffs, its dynamics, and the heterogeneity across firms that underlies the aggregate results.",
      ],
      subsections: [
        {
          id: "results-main",
          heading: "7.1 Input tariffs and firm productivity",
          paragraphs: [
            "Table 3 reports the main estimates. With firm and year fixed effects only (column 1), a 1 percentage point reduction in the input tariff raises productivity by 0.52 percent. Adding industry output tariffs (column 2) and industry-by-year fixed effects (column 3) reduces the coefficient only slightly, to −0.47, our preferred estimate. Multiplying by the average decline in firm input tariffs of 4.5 percentage points implies that input-tariff reductions raised firm productivity by 2.1 percent on average over 2005–2022. Output tariffs have a smaller effect: a 1 percentage point reduction raises productivity by 0.18 percent (column 2), consistent with the larger effects of input than output liberalisation found in Indonesia and India [1][2].",
            "The remaining columns examine alternative measures. Using only direct input tariffs (column 4) gives a coefficient of −0.39 on a sample restricted to pre-sample importers, and unadjusted revenue TFP (column 5) gives a larger coefficient of −0.61. The difference between columns 3 and 5 indicates that about one-quarter of the measured revenue-productivity gain reflects higher markups rather than efficiency, in line with incomplete pass-through of input-cost savings [14]. Labour productivity, measured as value added per worker, rises by 0.55 percent per percentage point (column 6).",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effect of input tariffs on firm productivity",
              columns: ["", "(1)", "(2)", "(3)", "(4) Direct tariff, importers", "(5) Revenue TFP", "(6) Labour productivity"],
              rows: [
                ["Input tariff", "−0.522*** (0.081)", "−0.488*** (0.079)", "−0.467*** (0.084)", "−0.391*** (0.072)", "−0.613*** (0.092)", "−0.548*** (0.101)"],
                ["Output tariff", "", "−0.183*** (0.049)", "", "", "", ""],
                ["Implied effect of average tariff cut (%)", "2.4", "2.2", "2.1", "1.8", "2.8", "2.5"],
                ["Firm fixed effects", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
                ["Year fixed effects", "Yes", "Yes", "—", "—", "—", "—"],
                ["Industry × year fixed effects", "No", "No", "Yes", "Yes", "Yes", "Yes"],
                ["Observations", "213,906", "213,906", "213,906", "141,072", "213,906", "213,906"],
                ["R²", "0.81", "0.81", "0.83", "0.84", "0.82", "0.86"],
              ],
              note: "Note: Dependent variable is log markup-adjusted TFP (×100) except in columns 5 (log revenue TFP) and 6 (log value added per worker). Tariffs are in percent, so coefficients give the percent change in productivity per percentage point of tariff. The implied effect multiplies the coefficient by the average decline in the relevant tariff over 2005–2022 (4.5 pp for the combined input tariff). Column 4 restricts the sample to firms that imported in 2003–2004. All columns control for firm age and its square. Standard errors clustered by firm in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "results-dynamics",
          heading: "7.2 Dynamics and pre-trends",
          paragraphs: [
            "Figure 1 plots event-study coefficients around the year of each firm's largest input-tariff reduction, comparing firms whose largest cut exceeded 2 percentage points with firms experiencing smaller cuts in the same industry and year. Productivity is flat in the four years before the cut, with coefficients close to zero and jointly insignificant (p = 0.58). It begins to rise in the year of the cut and continues to increase for three to four years, reaching about 1.6 percent after five years. The gradual pattern is consistent with the time needed to search for new suppliers, to adapt production processes to new inputs and to complement them with investment.",
            "We also find that pre-sample productivity growth over 2001–2004 is unrelated to subsequent input-tariff changes, with a coefficient close to zero. Firms that would later experience large tariff cuts were therefore not on different productivity trajectories, which supports the parallel-trends assumption.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Firm productivity around the largest input-tariff reduction",
              kind: "line",
              xLabels: ["−4", "−3", "−2", "−1", "0", "1", "2", "3", "4", "5"],
              yLabel: "Log TFP relative to year −1 (×100)",
              series: [
                {
                  name: "Large tariff cut",
                  values: [0.12, -0.18, 0.09, 0, 0.41, 0.83, 1.12, 1.38, 1.51, 1.62],
                  lower: [-0.46, -0.71, -0.39, 0, -0.04, 0.31, 0.53, 0.72, 0.79, 0.84],
                  upper: [0.7, 0.35, 0.57, 0, 0.86, 1.35, 1.71, 2.04, 2.23, 2.4],
                },
              ],
              marker: 3,
              note: "Note: Coefficients on indicators for years relative to the firm's largest single-year input-tariff reduction, for firms whose largest cut exceeded 2 percentage points, with 95 percent confidence intervals. Year −1 is the omitted category. Specification includes firm and industry-by-year fixed effects; standard errors clustered by firm. The dashed line marks the year before the tariff cut.",
            },
          ],
        },
        {
          id: "results-heterogeneity",
          heading: "7.3 Heterogeneity by initial productivity",
          paragraphs: [
            "Table 4 shows that the effect of input tariffs increases steadily with initial productivity. For firms in the bottom quartile of the 2005 productivity distribution, a 1 percentage point reduction raises productivity by 0.24 percent, implying a gain of 1.1 percent from the average tariff cut. The corresponding implied gains are 1.7 percent in the second quartile, 2.3 percent in the third and 3.3 percent in the top quartile: firms in the upper quartile experience gains three times larger than those in the lower quartile. The differences between the top and bottom quartiles are statistically significant (p < 0.01).",
            "The heterogeneity is not explained by differences in exposure: firms in the top quartile experienced input-tariff reductions only slightly larger than those in the bottom quartile (4.7 versus 4.3 percentage points), and the coefficients in Table 4 are semi-elasticities that hold exposure constant. Rather, more productive firms appear better able to translate a given tariff reduction into efficiency gains. Figure 2 shows that this gradient is present in industries with medium and high import competition but largely absent in industries with low import competition, where effects are small across the distribution.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Heterogeneity by initial productivity and by import competition",
              columns: ["", "Q1 (lowest)", "Q2", "Q3", "Q4 (highest)", "Low import competition", "Medium/high import competition"],
              rows: [
                ["Input tariff", "−0.241*** (0.088)", "−0.377*** (0.085)", "−0.508*** (0.090)", "−0.731*** (0.104)", "−0.152 (0.117)", "−0.618*** (0.089)"],
                ["Average input-tariff cut (pp)", "4.3", "4.4", "4.6", "4.7", "4.2", "4.7"],
                ["Implied productivity gain (%)", "1.1", "1.7", "2.3", "3.3", "0.7", "2.8"],
                ["Initial log TFP (mean)", "−0.58", "−0.17", "0.15", "0.61", "0.02", "−0.01"],
                ["Observations", "53,474", "53,477", "53,478", "53,477", "71,324", "142,582"],
              ],
              note: "Note: Columns 1–4 report coefficients from a single regression interacting the input tariff with quartiles of the firm's initial (2005 or first-year) productivity within its industry; columns 5–6 from a regression interacting the input tariff with an indicator for KSIC 3-digit industries in the bottom tercile of pre-sample import penetration. All specifications include the controls and fixed effects of Table 3, column 3. The test of equality between Q1 and Q4 has p < 0.01; between low and medium/high import competition p < 0.01. Standard errors clustered by firm in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Implied productivity gain from input-tariff cuts by initial productivity quartile and import competition",
              kind: "bar",
              xLabels: ["Q1 (lowest)", "Q2", "Q3", "Q4 (highest)"],
              yLabel: "Productivity gain, 2005–2022 (%)",
              series: [
                { name: "Low import competition", values: [0.4, 0.6, 0.8, 1.0] },
                { name: "Medium/high import competition", values: [1.4, 2.2, 3.0, 4.4] },
              ],
              note: "Note: Implied productivity gains equal the estimated semi-elasticity in each cell multiplied by the cell's average input-tariff decline over 2005–2022. Low import competition denotes industries in the bottom tercile of pre-sample import penetration. Estimates from a single regression with the controls and fixed effects of Table 3, column 3.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms, Reallocation and Aggregate Productivity",
      paragraphs: [
        "We now turn to the channels behind the within-firm gains and to the reallocation of activity across firms.",
      ],
      subsections: [
        {
          id: "mech-within",
          heading: "8.1 Within-firm channels",
          paragraphs: [
            "Three pieces of evidence suggest that within-firm gains arise from access to new and better inputs. First, a 1 percentage point reduction in the input tariff raises the number of imported product–origin varieties by 2.6 percent and the imported share of materials by 0.4 percentage points, with the largest increases among top-quartile firms. Second, firms switch sources towards FTA partners with higher unit values for the same product, consistent with quality upgrading of inputs [24]. Third, input-tariff reductions raise R&D intensity among firms in the top two quartiles of initial productivity but not among others, suggesting complementarity between cheaper inputs and technology investment [16]. These responses are consistent with models in which imported inputs and firm capabilities are complements [4][15], and they explain why the most productive firms gain most.",
          ],
        },
        {
          id: "mech-aggregate",
          heading: "8.2 Reallocation and the aggregate effect",
          paragraphs: [
            "Input-tariff reductions also shifted activity across firms. Sales growth responds more strongly to tariff cuts among initially more productive firms: in the top quartile, a 1 percentage point reduction raises annual sales growth by 0.9 percentage points, compared with 0.2 points in the bottom quartile. Exit probabilities rise for low-productivity firms in industries with large input-tariff reductions, because their competitors' costs fall faster than their own. These patterns are exactly those predicted by heterogeneous-firm models of trade [8][9].",
            "Table 5 reports the decomposition of the aggregate productivity effect. Between 2005 and 2022, FTA input-tariff reductions raised output-weighted aggregate manufacturing productivity by 3.5 percent relative to the counterfactual with unchanged tariffs. Of this, 2.1 percentage points (60 percent) come from the within-firm component — the average firm-level gain estimated above. The remaining 1.4 percentage points (40 percent) come from reallocation: 1.0 point from the increased covariance between market share and productivity among surviving firms and 0.4 point from net entry and exit. Reallocation therefore accounts for approximately 40 percent of the total effect, a share in line with estimates of reallocation's contribution to productivity growth in the wake of the Canada–U.S. FTA and the Chilean liberalisation [6][7].",
            "The contribution of reallocation is markedly smaller in industries with limited import competition, where it accounts for only about one-fifth of a much smaller total effect of 0.9 percent. In those industries, concentrated market structures and the absence of foreign rivals appear to blunt both the incentives for firms to upgrade and the competitive mechanism through which more efficient firms expand. Allocative efficiency, measured by the covariance term, has risen faster in Korean industries that were more exposed to tariff reductions, consistent with the view that lower trade costs reduce misallocation [19][20].",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Decomposition of the aggregate productivity effect of FTA input-tariff reductions, 2005–2022",
              columns: ["Component", "All manufacturing", "Share of total (%)", "Low import competition", "Medium/high import competition"],
              rows: [
                ["Total effect on aggregate TFP (%)", "3.5", "100", "0.9", "4.6"],
                ["Within-firm (unweighted mean, survivors)", "2.1", "60", "0.7", "2.8"],
                ["Reallocation among survivors (covariance)", "1.0", "29", "0.1", "1.3"],
                ["Net entry and exit", "0.4", "11", "0.1", "0.5"],
                ["Reallocation, total", "1.4", "40", "0.2", "1.8"],
                ["Memo: actual aggregate TFP growth (%)", "18.7", "", "11.2", "21.9"],
              ],
              note: "Note: Dynamic Olley–Pakes decomposition (Melitz and Polanec, 2015) of the difference in output-share-weighted log TFP between actual outcomes and a counterfactual with input tariffs held at their 2005 levels. Counterfactual firm productivity, market shares and exit are constructed from the estimated effects of input tariffs on productivity, sales growth and exit, by initial productivity quartile. Shares may not sum exactly because of rounding. Bootstrap 95 percent confidence interval for the reallocation share in column 1: 31 to 49 percent.",
            },
          ],
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks for the firm-level estimate. A potential concern is that FTA tariff schedules were negotiated with an eye to industries in which Korean firms were expanding. Excluding products whose tariffs were eliminated immediately, which may have been prioritised by negotiators, leaves the coefficient essentially unchanged (row 2). Instrumenting the firm's applied input tariff, which depends on preferential-regime utilisation, with a statutory tariff that assumes full utilisation yields a slightly larger coefficient (row 3), suggesting that measurement error in utilisation attenuates the baseline.",
        "Results are also robust to sample and specification choices. Excluding the years of the global financial crisis (2008–2009) and the pandemic (2020–2021) gives −0.45 (row 4). Excluding the China FTA, which coincided with China's own industrial upgrading, gives −0.44 (row 5), and excluding RCEP, whose effects are observed for only one year, gives −0.47 (row 6). Using Levinsohn–Petrin productivity estimates [13] gives −0.50 (row 7), and clustering standard errors by industry rather than firm widens confidence intervals only modestly (row 8). Finally, controlling for the firm's export-market tariff reductions under the same FTAs, which may raise productivity through market access [15][16], reduces the input-tariff coefficient only slightly, to −0.43 (row 9).",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the effect of input tariffs on firm productivity",
          columns: ["Specification", "Input tariff coefficient", "Std. error", "Implied gain (%)", "Observations"],
          rows: [
            ["(1) Baseline (Table 3, column 3)", "−0.467***", "(0.084)", "2.1", "213,906"],
            ["(2) Excluding immediately liberalised products", "−0.459***", "(0.091)", "2.1", "213,906"],
            ["(3) IV: statutory tariff with full utilisation", "−0.528***", "(0.097)", "2.4", "213,906"],
            ["(4) Excluding 2008–09 and 2020–21", "−0.451***", "(0.088)", "2.0", "167,412"],
            ["(5) Excluding the Korea–China FTA", "−0.442***", "(0.090)", "2.0", "213,906"],
            ["(6) Excluding RCEP (sample ends 2021)", "−0.471***", "(0.085)", "2.1", "202,653"],
            ["(7) Levinsohn–Petrin TFP", "−0.502***", "(0.087)", "2.3", "213,906"],
            ["(8) Standard errors clustered by industry", "−0.467***", "(0.118)", "2.1", "213,906"],
            ["(9) Controlling for export-market tariffs", "−0.433***", "(0.083)", "1.9", "213,906"],
          ],
          note: "Note: Each row reports the coefficient on the firm input tariff from a separate regression with log markup-adjusted TFP (×100) as the dependent variable and the controls and fixed effects of Table 3, column 3. In row 2 the tariff measure excludes products with immediate tariff elimination. In row 5 the China FTA tariff changes are set to zero. Implied gain multiplies the coefficient by the 4.5 pp average decline in input tariffs. Standard errors clustered by firm unless otherwise noted. * p < 0.10, ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results indicate that Korea's FTA programme raised manufacturing productivity substantially through cheaper imported inputs. An aggregate gain of 3.5 percent over seventeen years is modest relative to total productivity growth in the period, but it is large relative to the static gains from tariff reduction usually computed in trade models, and it accrues on top of the effects of FTAs on export market access and trade volumes [21]. Input liberalisation is therefore an important and sometimes overlooked component of the gains from trade agreements, which public debate in Korea, as elsewhere, tends to frame in terms of export opportunities and import competition in final goods.",
        "Two features of the results bear on policy design. First, the benefits of input liberalisation accrue disproportionately to already productive firms, and part of the aggregate gain comes from the contraction and exit of less productive firms. This implies adjustment costs for workers and owners of those firms, which strengthen the case for adjustment assistance and for programmes that help smaller and less productive firms access imported inputs — for example by reducing the administrative costs of certifying origin, which weigh most heavily on small importers. Raising preferential-regime utilisation among small firms could increase both the level and the inclusiveness of the gains.",
        "Second, the muted effects in industries with limited import competition suggest that liberalisation and competition policy are complements. Where markets are concentrated and foreign rivals are absent, cost savings from cheaper inputs appear to be retained rather than passed on, and the reallocation mechanism is weak. Opening such industries to competition, or addressing regulatory barriers to entry, may be necessary to realise the full productivity benefits of trade agreements.",
        "Our analysis has limitations. The counterfactual decomposition relies on partial-equilibrium firm-level responses and does not capture general-equilibrium effects on wages and factor prices. The productivity measure, although corrected for markups, cannot fully separate efficiency from product quality. And our period ends shortly after RCEP entered into force, so its effects, including Korea's first preferential tariff reductions on Japanese inputs, remain to be assessed.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Using firm-level customs micro-data for 2005–2022, we show that input-tariff reductions under Korea's free trade agreements raised firm productivity by 2.1 percent on average, with gains three times larger for firms in the top quartile of initial productivity than for those in the bottom quartile. Reallocation of market share towards more productive firms and the exit of less productive ones account for approximately 40 percent of the aggregate productivity gain, with the remaining 60 percent driven by within-firm improvements. Effects are muted in industries with limited import competition.",
        "Future research could examine how the gains from input liberalisation are shared between firms, workers and consumers, how they interact with the reorganisation of global value chains in East Asia, and whether the RCEP agreement, by liberalising trade with Japan, reproduces the patterns we document for earlier agreements.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Construction of Tariff and Productivity Measures",
      paragraphs: [
        "Tariff data. MFN applied tariffs and preferential tariff schedules at the HSK 10-digit level are taken from the Korea Customs Service tariff schedules for each year, cross-checked against the WTO Integrated Database. Preferential schedules are taken from the annexes of each agreement. Where an agreement specifies tariff-rate quotas, we use the in-quota rate for products whose imports were below the quota. Product codes are concorded across revisions of the Harmonized System (2007, 2012, 2017 and 2022) using official correlation tables; where a code splits, we assign the trade-weighted average tariff of its successors.",
        "Utilisation. Product-level utilisation rates for each agreement and year are computed from customs declarations as the share of eligible imports from partner c entering under the preferential regime. The applied tariff equals the utilisation-weighted average of the preferential and MFN rates. In the robustness check in Table 6, row 3, the statutory rate assumes full utilisation from the date of entry into force.",
        "Productivity. Production functions are translog in labour, capital and materials, estimated by industry with the Ackerberg–Caves–Frazer two-step procedure. Output and materials are deflated by industry producer price indices from the Bank of Korea, and capital by the investment-goods deflator. Markups are computed as the output elasticity of materials divided by the materials share of revenue, and markup-adjusted TFP is revenue TFP minus the log markup, normalised to mean zero within each industry-year.",
      ],
    },
  ],
};
