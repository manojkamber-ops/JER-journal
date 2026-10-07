// Vol. 27, No. 1 (January 2022) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2022-v27-i1-03",
  title: "Supply Chain Disruptions and Inventory Behaviour: Evidence from the 2019 Japan–Korea Export Restrictions",
  authors: [{ name: "Yuki Tanaka", corresponding: true }, { name: "Wei Zhang" }],
  abstract:
    "In July 2019 Japan tightened export controls on three chemicals essential to Korean semiconductor and display production — fluorinated polyimide, photoresists and hydrogen fluoride — and in August removed Korea from its list of preferred trading partners. We use customs transaction data and firm financial statements for 2017–2020 to study how Korean importers responded. Firms exposed to the restrictions increased inventories of affected inputs by 14 percent, reduced the share of Japanese suppliers in affected products by 19 percentage points and shifted towards domestic and third-country sources. Unit input prices rose by about 6 percent, but output losses were small, at around 0.3 percent, because firms drew on precautionary stocks while diversifying. The episode illustrates how firms insure against trade-policy risk through inventories and supplier diversification, and how geopolitical shocks can accelerate the reorganisation of supply chains.",
  keywords: ["Supply chains", "Export controls", "Inventories", "Trade policy uncertainty", "Semiconductors"],
  jelCodes: ["F13", "F14", "L23", "F51"],
  pages: "61–92",
  volume: 27,
  issue: 1,
  year: 2022,
  received: "2021-04-19",
  accepted: "2021-11-08",
  published: "2022-01-15",
  publishedOnline: "2022-01-05",
  citations: 26,
  downloads: 2740,
  pdfSize: "1.71 MB",
  type: "Research Article",
  acknowledgments: "We thank seminar participants at Keio University and Fudan University, two anonymous referees and the handling editor for helpful comments, and the Korea Customs Service for access to transaction records.",
  dataAvailability: "Customs transaction records were accessed through the Korea Customs Service's research data centre under confidentiality conditions; firm financial statements are available from commercial providers. Code is available from the corresponding author.",
  refs: [
    /* 1 */ "Barrot, J.-N., & Sauvagnat, J. (2016). Input specificity and the propagation of idiosyncratic shocks in production networks. Quarterly Journal of Economics, 131(3), 1543–1592.",
    /* 2 */ "Boehm, C. E., Flaaen, A., & Pandalai-Nayar, N. (2019). Input linkages and the transmission of shocks: Firm-level evidence from the 2011 Tōhoku earthquake. Review of Economics and Statistics, 101(1), 60–75.",
    /* 3 */ "Carvalho, V. M., Nirei, M., Saito, Y. U., & Tahbaz-Salehi, A. (2021). Supply chain disruptions: Evidence from the Great East Japan Earthquake. Quarterly Journal of Economics, 136(2), 1255–1321.",
    /* 4 */ "Handley, K., & Limão, N. (2017). Policy uncertainty, trade, and welfare: Theory and evidence for China and the United States. American Economic Review, 107(9), 2731–2783.",
    /* 5 */ "Amiti, M., Redding, S. J., & Weinstein, D. E. (2019). The impact of the 2018 tariffs on prices and welfare. Journal of Economic Perspectives, 33(4), 187–210.",
    /* 6 */ "Fajgelbaum, P. D., Goldberg, P. K., Kennedy, P. J., & Khandelwal, A. K. (2020). The return to protectionism. Quarterly Journal of Economics, 135(1), 1–55.",
    /* 7 */ "Antràs, P., & Chor, D. (2013). Organizing the global value chain. Econometrica, 81(6), 2127–2204.",
    /* 8 */ { jer: "2021-v26-i2-02" },
    /* 9 */ "Acemoglu, D., Carvalho, V. M., Ozdaglar, A., & Tahbaz-Salehi, A. (2012). The network origins of aggregate fluctuations. Econometrica, 80(5), 1977–2016.",
    /* 10 */ "Baker, S. R., Bloom, N., & Davis, S. J. (2016). Measuring economic policy uncertainty. Quarterly Journal of Economics, 131(4), 1593–1636.",
    /* 11 */ "Caldara, D., Iacoviello, M., Molligo, P., Prestipino, A., & Raffo, A. (2020). The economic effects of trade policy uncertainty. Journal of Monetary Economics, 109, 38–59.",
    /* 12 */ "Bloom, N. (2009). The impact of uncertainty shocks. Econometrica, 77(3), 623–685.",
    /* 13 */ "Alessandria, G., Kaboski, J. P., & Midrigan, V. (2010). Inventories, lumpy trade, and large devaluations. American Economic Review, 100(5), 2304–2339.",
    /* 14 */ "Kahn, J. A. (1987). Inventories and the volatility of production. American Economic Review, 77(4), 667–679.",
    /* 15 */ "Blinder, A. S., & Maccini, L. J. (1991). Taking stock: A critical assessment of recent research on inventories. Journal of Economic Perspectives, 5(1), 73–96.",
    /* 16 */ "Pierce, J. R., & Schott, P. K. (2016). The surprisingly swift decline of US manufacturing employment. American Economic Review, 106(7), 1632–1662.",
    /* 17 */ "Flaaen, A., & Pierce, J. (2019). Disentangling the effects of the 2018–2019 tariffs on a globally connected U.S. manufacturing sector. Finance and Economics Discussion Series 2019-086. Washington, DC: Board of Governors of the Federal Reserve System.",
    /* 18 */ "Cavallo, A., Gopinath, G., Neiman, B., & Tang, J. (2021). Tariff pass-through at the border and at the store: Evidence from US trade policy. American Economic Review: Insights, 3(1), 19–34.",
    /* 19 */ "Johnson, R. C., & Noguera, G. (2012). Accounting for intermediates: Production sharing and trade in value added. Journal of International Economics, 86(2), 224–236.",
    /* 20 */ "Antràs, P., Fort, T. C., & Tintelnot, F. (2017). The margins of global sourcing: Theory and evidence from US firms. American Economic Review, 107(9), 2514–2564.",
    /* 21 */ "Halpern, L., Koren, M., & Szeidl, A. (2015). Imports, inputs, and productivity. American Economic Review, 105(12), 3660–3703.",
    /* 22 */ "Goldberg, P. K., Khandelwal, A. K., Pavcnik, N., & Topalova, P. (2010). Imported intermediate inputs and domestic product growth: Evidence from India. Quarterly Journal of Economics, 125(4), 1727–1767.",
    /* 23 */ "Rauch, J. E. (1999). Networks versus markets in international trade. Journal of International Economics, 48(1), 7–35.",
    /* 24 */ "Broda, C., & Weinstein, D. E. (2006). Globalization and the gains from variety. Quarterly Journal of Economics, 121(2), 541–585.",
    /* 25 */ "Sun, L., & Abraham, S. (2021). Estimating dynamic treatment effects in event studies with heterogeneous treatment effects. Journal of Econometrics, 225(2), 175–199.",
    /* 26 */ "Callaway, B., & Sant'Anna, P. H. C. (2021). Difference-in-differences with multiple time periods. Journal of Econometrics, 225(2), 200–230.",
    /* 27 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 28 */ "Handley, K. (2014). Exporting under trade policy uncertainty: Theory and evidence. Journal of International Economics, 94(1), 50–66.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Firms that depend on specialised inputs are vulnerable to disruptions at their suppliers, and such shocks propagate through production networks to customers and their customers in turn [1][2][3][9]. Most evidence on this propagation comes from natural disasters, which are sudden, temporary and unanticipated. Trade-policy disruptions differ in important ways: they may be anticipated, may persist for an unknown period and can be reversed by negotiation, so firms' responses depend on their expectations about future policy [4][28]. As geopolitical tensions have increasingly been expressed through export controls and other restrictions on trade in critical inputs, understanding how firms respond to such measures has become a pressing question.",
        "Japan's 2019 export controls on three chemicals used in Korean semiconductor and display manufacturing provide an unusual natural experiment. In July 2019 Japan ended the bulk licensing that had allowed exporters to ship fluorinated polyimide, photoresists and high-purity hydrogen fluoride to Korea under general authorisations, requiring instead individual licences for each contract that could take up to 90 days to process. In August, Japan removed Korea from its list of preferred trading partners, extending licensing requirements to a wider set of products. The measures introduced delays and considerable uncertainty for a narrow and well-defined set of inputs, for which Japanese suppliers held dominant market shares.",
        "We use monthly customs transaction data and quarterly firm financial statements for 2017–2020 to study how Korean importers responded through inventories, sourcing and prices, and what happened to their output. Exposed firms — those that imported affected products from Japan before the measures — increased inventories of affected inputs by 14 percent within two quarters, reduced the share of Japanese suppliers in their imports of affected products by 19 percentage points by the end of 2020 and shifted towards suppliers in Taiwan, the United States and Belgium as well as to domestic producers. Unit input prices rose by about 6 percent.",
        "Despite these disruptions, output losses were small, at around 0.3 percent, and statistically insignificant after the first two quarters. Firms with larger pre-existing stocks of affected inputs experienced smaller output effects, consistent with inventories acting as insurance against policy risk [14][15]. The episode thus illustrates how firms insure against trade-policy risk by holding precautionary stocks and diversifying suppliers, and how a narrowly targeted geopolitical shock can permanently reshape sourcing patterns.",
        "We relate to the literature on the propagation of shocks in production networks [1][2][3][9], to studies of the effects of trade policy on prices and sourcing [5][6][17][18], and to the literature on inventories and trade [13]. Our setting also complements evidence in this journal on Korea's position in Asian value chains, including its role as a supplier of intermediate goods to China [8]: the same specialisation that made Korea a central node in electronics supply chains left it exposed to disruptions upstream.",
        "Section 2 describes the export restrictions. Section 3 reviews related literature and Section 4 presents a framework. Sections 5 and 6 describe the data and empirical strategy, Section 7 reports results, Section 8 examines mechanisms, Section 9 reports robustness checks and Sections 10 and 11 discuss implications and conclude.",
      ],
    },
    {
      id: "background",
      heading: "2. The 2019 Export Restrictions",
      paragraphs: [
        "On 1 July 2019, Japan's Ministry of Economy, Trade and Industry announced that, from 4 July, exports to Korea of fluorinated polyimide (used in flexible displays), photoresists (used in lithography) and hydrogen fluoride (used for etching and cleaning wafers) would require individual export licences. Japan cited concerns about the management of sensitive materials, though the measures were widely interpreted as a response to a bilateral dispute over compensation for wartime forced labour. On 2 August, Japan's cabinet approved the removal of Korea from its 'white list' of countries eligible for simplified export procedures, effective 28 August. Korea responded by removing Japan from its own list of preferred trading partners and filed a complaint with the World Trade Organization.",
        "Japanese firms dominated global production of the three chemicals. Before the restrictions, Japan supplied over 90 percent of Korea's imports of fluorinated polyimide and photoresists and over 40 percent of its imports of high-purity hydrogen fluoride. Korean semiconductor and display manufacturers held inventories of a few weeks to a few months of these inputs and had qualified few alternative suppliers, because qualification of a new chemical supplier for advanced semiconductor processes can take many months of testing.",
        "In practice, Japan did approve licences, beginning with a first approval for photoresists in August 2019. Approvals were slow and unpredictable, however, and Korean firms could not be sure that licences would continue to be granted. The government of Korea announced a programme to support domestic production of key materials, parts and equipment, including subsidies, tax incentives and expedited environmental permits, and Korean chemical firms expanded production of high-purity hydrogen fluoride. The restrictions on the three chemicals remained in place throughout our sample period, although tensions eased somewhat after late 2019.",
        "The measures came at a difficult time for the Korean semiconductor industry. Memory chip prices had fallen sharply from their peak in 2018, and producers were reducing output and capital expenditure. Some observers argued that the downturn reduced the immediate impact of the restrictions, since firms needed smaller quantities of inputs, while others noted that the restrictions threatened production lines for advanced chips that were central to producers' recovery strategies. Our industry-by-quarter fixed effects absorb the common component of the cycle, so our estimates capture the effects of exposure to the restrictions relative to other firms in the same industry.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "A growing literature shows that idiosyncratic shocks propagate through production networks. Acemoglu et al. {9} show theoretically that network structure can turn firm-level shocks into aggregate fluctuations. Barrot and Sauvagnat {1} show that natural disasters affecting suppliers reduce sales growth of their customers, particularly when inputs are specific. Boehm, Flaaen and Pandalai-Nayar {2} find that US affiliates of Japanese multinationals reduced output almost one-for-one with imports after the 2011 Tōhoku earthquake, implying very low short-run elasticities of substitution between inputs. Carvalho et al. {3} trace the propagation of the same earthquake through Japan's domestic supply chains.",
        "The 2018–2019 US tariffs on China were passed through almost completely to import prices [5][6][18] and reduced employment in manufacturing industries reliant on imported inputs [17]. Earlier research shows that reductions in trade-policy uncertainty, rather than tariff levels, explain much of the growth of Chinese exports to the United States and the decline of US manufacturing [4][16][28]. Aggregate measures of policy and trade-policy uncertainty predict declines in investment [10][11], consistent with theories in which uncertainty raises the option value of waiting [12]. Our setting involves licensing requirements rather than tariffs and inputs with few substitutes, so that uncertainty concerns the availability of supply rather than its price.",
        "Inventories allow firms to smooth production in the face of demand and supply shocks [14][15]. Alessandria, Kaboski and Midrigan {13} show that importers hold larger inventories than domestic purchasers because of fixed costs and delivery lags in international trade. Research on global sourcing emphasises that firms select suppliers across countries based on cost and reliability [7][20], that imported inputs raise productivity because they are imperfect substitutes for domestic ones [21][22], and that new varieties generate welfare gains [24]. Relationship-specific inputs, which are traded through networks rather than on organised exchanges [23], may be especially hard to replace.",
      ],
    },
    {
      id: "framework",
      heading: "4. Framework",
      paragraphs: [
        "Consider a firm that requires a specialised input from a foreign supplier and faces a probability that deliveries are interrupted. It can respond in two ways. First, it can hold inventories, which allow production to continue for a period after an interruption; the optimal stock rises with the probability and expected duration of interruption, and falls with storage costs and the cost of capital [13][14]. Second, it can pay a fixed cost to qualify an alternative supplier, which reduces exposure to interruption at the cost of higher unit prices if the alternative is less efficient.",
        "An increase in the perceived probability of interruption — as caused by the licensing requirement — has three predictions. In the short run, firms should accumulate inventories, raising imports from the incumbent supplier where possible. In the medium run, they should diversify towards alternative suppliers, even if these are more expensive, raising unit input prices. Output should fall only if inventories are insufficient to bridge the period before alternative supply is qualified; firms with larger initial stocks, or that can qualify alternatives more quickly, should experience smaller output effects. Because qualification costs are sunk, diversification should persist even if the perceived risk later declines [4].",
        "The framework also has implications for the dynamics of imports from the incumbent supplier. If firms expect the restrictions to tighten further, they should accelerate purchases before new requirements take effect, generating a temporary spike in imports from Japan followed by a decline. If licensing introduces delays but not outright refusals, imports from Japan should recover partially once licences are granted, but firms that have qualified alternatives should continue to use them, so the Japanese share should not return to its pre-restriction level. We examine both predictions in Section 7.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-customs",
          heading: "5.1 Customs Transactions",
          paragraphs: [
            "Monthly customs records identify every import transaction by firm, product at the ten-digit HS level, country of origin, value and quantity. We use records for January 2017 to December 2020. We define affected products as the restricted chemicals and closely related inputs that became subject to individual licensing, using the product lists published by Japan's Ministry of Economy, Trade and Industry and mapping them to Korean HS codes; this yields 23 ten-digit products. Unit values are computed as value divided by quantity at the firm-product-origin-month level.",
          ],
        },
        {
          id: "data-firms",
          heading: "5.2 Firm Financial Statements",
          paragraphs: [
            "Inventories and output come from quarterly financial statements of listed and externally audited firms. Listed firms report inventories of raw materials separately from work in progress and finished goods; for affected inputs specifically, we combine reported raw material inventories with the cumulative difference between imports and estimated usage, based on pre-2019 ratios of input purchases to output. Output is measured as deflated sales adjusted for changes in finished-goods inventories.",
            "We define exposed firms as those that imported any affected product from Japan in 2017–2018, before the measures were announced. Of the 2,002 firms that imported chemicals in 2018, 142 are exposed. Table 1 compares exposed firms with other chemical importers. Exposed firms are larger, hold more inventories relative to sales and are concentrated in semiconductors and displays; we address these differences through firm fixed effects and industry-by-time controls.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Importers of restricted products, 2018",
              columns: ["Variable", "Exposed firms", "Other chemical importers"],
              rows: [
                ["Number of firms", "142", "1,860"],
                ["Japanese share of affected-product imports", "0.84", "—"],
                ["Affected products / total imports (value)", "0.17", "—"],
                ["Inventory / quarterly sales", "0.48", "0.41"],
                ["Raw-material inventory / quarterly input purchases", "0.71", "0.63"],
                ["Number of supplier countries (affected products)", "1.6", "—"],
                ["Semiconductor or display industry (share)", "0.61", "0.08"],
                ["Listed firm (share)", "0.44", "0.21"],
                ["Log sales", "19.4", "17.8"],
              ],
              note: "Note: Exposed firms imported at least one affected product from Japan in 2017–2018. Dashes indicate not applicable.",
            },
          ],
        },
        {
          id: "data-sourcing",
          heading: "5.3 Aggregate Sourcing Patterns",
          paragraphs: [
            "Table 2 shows the origin of Korean imports of affected products before and after the restrictions. Japan's share fell from 74 percent in 2018 to 53 percent in 2020, while the shares of Taiwan, the United States, Belgium and China rose. Total imports of affected products fell by 11 percent in value over the same period, reflecting the expansion of domestic production of high-purity hydrogen fluoride, which replaced a large part of imports from Japan.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Korean imports of affected products by origin (percent of value)",
              columns: ["Origin", "2017", "2018", "2019", "2020", "Change 2018–2020"],
              rows: [
                ["Japan", "75.2", "73.9", "67.1", "53.4", "−20.5"],
                ["Taiwan", "6.1", "6.4", "8.9", "13.6", "7.2"],
                ["United States", "7.8", "8.1", "9.6", "13.2", "5.1"],
                ["Belgium", "2.3", "2.5", "3.4", "5.6", "3.1"],
                ["China", "5.0", "5.4", "6.6", "7.9", "2.5"],
                ["Other", "3.6", "3.7", "4.4", "6.3", "2.6"],
                ["Total imports (index, 2018 = 100)", "94", "100", "96", "89", "−11"],
              ],
              note: "Note: Customs records for the 23 affected ten-digit products. Shares may not sum to 100 because of rounding.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "We estimate event studies comparing exposed and non-exposed importers, and exposed and non-exposed products within firms, before and after July 2019. Because exposure is defined by pre-2019 import patterns, before the measures were announced, it is not affected by firms' anticipation of the policy.",
      ],
      subsections: [
        {
          id: "specification",
          heading: "6.1 Specification",
          paragraphs: [
            "For firm-level outcomes, we estimate Y_it = Σ_k β_k·Exposed_i·1[t = k] + α_i + δ_jt + ε_it, where Y_it is log inventories or log output of firm i in quarter t, α_i are firm fixed effects and δ_jt are industry-by-quarter fixed effects. The coefficients β_k trace the evolution of outcomes of exposed firms relative to other firms in the same industry, with the second quarter of 2019 as the reference period. For sourcing outcomes, the unit of observation is firm-product-month, and we compare affected and unaffected products within exposed firms, with firm-by-month and product-by-month fixed effects. Standard errors are clustered by firm [27].",
            "Because all exposed firms are treated at the same time, our design does not suffer from the biases that arise in two-way fixed-effects estimators with staggered treatment timing [25][26]. Our main estimates pool the four quarters after July 2019 into a single post-period coefficient.",
          ],
        },
        {
          id: "identification",
          heading: "6.2 Identification",
          paragraphs: [
            "The identifying assumption is that, absent the restrictions, outcomes of exposed firms would have evolved in parallel with those of other firms in the same industry. The main threat is that the semiconductor cycle, which turned down in late 2018 and recovered in late 2019, affected exposed firms differently. Industry-by-quarter fixed effects absorb common shocks within semiconductors and displays, and pre-period coefficients are small and insignificant for all outcomes, as Figure 1 shows for the Japanese supplier share.",
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
          id: "results-inventories",
          heading: "7.1 Inventories",
          paragraphs: [
            "Table 3 reports the main estimates. Inventories of affected inputs held by exposed firms rose by 14 percent within two quarters of the announcement, relative to other firms in the same industry. The increase was achieved partly by accelerating imports from Japan in the weeks before the licensing requirement took effect and partly by purchasing from alternative suppliers. Total raw-material inventories rose by 6 percent, indicating that firms accumulated stocks of affected inputs specifically rather than of inputs in general. The build-up was concentrated in photoresists and hydrogen fluoride; inventories of fluorinated polyimide, used in flexible displays, rose less because display producers were slower to obtain licences.",
            "Monthly customs data show the anticipatory response predicted by the framework. Imports of affected products from Japan by exposed firms rose by about 30 percent in June 2019, before the announcement, as rumours of restrictions circulated, and again in late July before the white-list removal took effect. They then fell sharply in August and September, as individual licences were slow to be granted, before recovering partially from October. By early 2020, imports from Japan had stabilised at a level about a quarter below their 2018 average.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Responses of exposed importers (four quarters after July 2019)",
              columns: ["Outcome", "Estimate", "Std. error", "Pre-period mean", "Observations"],
              rows: [
                ["Log inventories of affected inputs", "0.14***", "(0.04)", "—", "2,272"],
                ["Log raw-material inventories (all inputs)", "0.06**", "(0.03)", "—", "32,032"],
                ["Japanese supplier share (affected products)", "−0.19***", "(0.05)", "0.84", "41,180"],
                ["Number of supplier countries", "0.62***", "(0.14)", "1.6", "41,180"],
                ["Log unit input price", "0.058**", "(0.024)", "—", "41,180"],
                ["Log output", "−0.003", "(0.006)", "—", "32,032"],
                ["Log employment", "0.002", "(0.005)", "—", "32,032"],
              ],
              note: "Note: Firm and industry-by-quarter fixed effects for firm-level outcomes; firm-by-month and product-by-month fixed effects for sourcing outcomes. Supplier share and unit price are estimated by 2020Q4. Standard errors clustered by firm. ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "results-sourcing",
          heading: "7.2 Supplier Diversification",
          paragraphs: [
            "The share of Japanese suppliers in exposed firms' imports of affected products fell by 19 percentage points by the end of 2020, relative to unaffected products in the same firms. Figure 1 shows the dynamics. The share was stable before July 2019, fell by 6 points in the third quarter and continued to decline through 2020, even after licences were being granted regularly. The number of origin countries from which exposed firms sourced affected products rose by 0.62, from an average of 1.6. That diversification continued while the immediate risk of interruption receded is consistent with the sunk costs of qualifying suppliers emphasised in Section 4: once alternatives had been qualified, firms continued to use them.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Japanese share of affected-product imports, exposed firms (event study)",
              kind: "line",
              xLabels: ["2018Q1", "2018Q2", "2018Q3", "2018Q4", "2019Q1", "2019Q2", "2019Q3", "2019Q4", "2020Q1", "2020Q2", "2020Q3", "2020Q4"],
              yLabel: "Change in Japanese share (vs. 2019Q2)",
              series: [
                {
                  name: "Estimate",
                  values: [0.01, 0.0, -0.01, 0.01, 0.0, 0.0, -0.06, -0.11, -0.14, -0.16, -0.18, -0.19],
                  lower: [-0.03, -0.04, -0.05, -0.03, -0.04, 0.0, -0.11, -0.18, -0.22, -0.25, -0.28, -0.29],
                  upper: [0.05, 0.04, 0.03, 0.05, 0.04, 0.0, -0.01, -0.04, -0.06, -0.07, -0.08, -0.09],
                },
              ],
              marker: 5,
              note: "Note: Coefficients on exposed product × quarter with 95 percent confidence intervals; 2019Q2 is the reference quarter. The dashed line marks the July 2019 announcement.",
            },
          ],
        },
        {
          id: "results-prices",
          heading: "7.3 Prices and Output",
          paragraphs: [
            "Unit input prices of affected products rose by about 6 percent by the end of 2020, reflecting both higher prices from alternative suppliers and the costs of expedited shipping and smaller lot sizes during the transition. Pass-through to output prices was limited, as exposed firms sell in competitive global markets. Despite the disruption, exposed firms' output fell by only about 0.3 percent relative to controls, and the effect is statistically insignificant after the first two quarters. Employment was unaffected. These small output effects contrast sharply with the near one-for-one output losses after the Tōhoku earthquake [2], a difference we attribute to the gradual and partly anticipated nature of the policy shock, which gave firms time to adjust.",
            "Price increases were largest in the first two quarters after the announcement, when firms paid premia for expedited shipments from alternative suppliers and purchased in smaller lots, and moderated somewhat in 2020 as supply contracts with new suppliers were formalised. Prices of affected products imported from Japan itself rose by about 3 percent, reflecting the administrative costs of licensing, while prices from new suppliers were on average 8 percent higher than the prices exposed firms had paid to Japanese suppliers in 2018.",
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms: Inventories as Insurance",
      paragraphs: [
        "If inventories insured firms against the disruption, firms with larger pre-existing stocks of affected inputs should have experienced smaller output effects. Table 4 splits exposed firms by their 2018 ratio of raw-material inventories to quarterly input purchases. Firms with below-median inventories reduced output by 1.1 percent in the first two quarters after the announcement, a statistically significant effect, while firms with above-median inventories experienced no output loss. Low-inventory firms also built up stocks more aggressively and diversified more quickly, consistent with a greater perceived risk of running out. By the end of 2020, output differences between the two groups had disappeared.",
        "Effects also differ with the specificity of inputs. Hydrogen fluoride, a relatively standardised chemical for which domestic production could be expanded, saw the largest shift away from Japan; photoresists for advanced lithography, which require lengthy qualification, saw smaller shifts and larger price increases. This pattern accords with evidence that disruptions to specific inputs are harder to absorb [1][23].",
      ],
      tables: [
        {
          id: "table-4",
          caption: "Table 4. Heterogeneous effects by pre-existing inventories",
          columns: ["Outcome", "Below-median inventories", "Above-median inventories", "Difference"],
          rows: [
            ["Log output, first two quarters", "−0.011**", "0.001", "−0.012**"],
            ["", "(0.005)", "(0.004)", "(0.006)"],
            ["Log output, four quarters", "−0.006", "0.000", "−0.006"],
            ["", "(0.008)", "(0.006)", "(0.009)"],
            ["Log inventories of affected inputs", "0.19***", "0.09**", "0.10*"],
            ["", "(0.06)", "(0.04)", "(0.06)"],
            ["Japanese supplier share", "−0.24***", "−0.14***", "−0.10*"],
            ["", "(0.07)", "(0.05)", "(0.06)"],
          ],
          note: "Note: Exposed firms split at the median 2018 ratio of raw-material inventories to quarterly input purchases. Standard errors clustered by firm in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01.",
        },
      ],
      subsections: [
        {
          id: "replacement",
          heading: "8.1 Replacement Sources",
          paragraphs: [
            "Where did replacement supply come from? Table 5 decomposes the 19 percentage point decline in the Japanese share for exposed firms by replacement origin. Taiwan accounts for the largest share, followed by the United States, Belgium, China and other countries (Figure 2). Some of the replacement came from subsidiaries of Japanese firms located in third countries — notably Belgium and Taiwan — so that the decline in Japanese-origin imports overstates the decline in purchases from Japanese-owned firms. Domestic production is not captured in customs data, but the 11 percent decline in total imports of affected products and the expansion of domestic hydrogen fluoride capacity indicate that domestic suppliers replaced a substantial part of imports.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Change in origin shares of affected-product imports, exposed firms (2018–2020)",
              columns: ["Origin", "Change (percentage points)", "Std. error", "Of which: Japanese-owned suppliers"],
              rows: [
                ["Japan", "−19.0***", "(5.0)", "—"],
                ["Taiwan", "7.1***", "(2.4)", "2.3"],
                ["United States", "4.6**", "(2.1)", "0.4"],
                ["Belgium", "3.2**", "(1.4)", "2.1"],
                ["China", "2.1*", "(1.2)", "0.6"],
                ["Other", "2.0", "(1.3)", "0.5"],
              ],
              note: "Note: Changes relative to unaffected products in the same firms. The last column reports the part of each increase attributable to subsidiaries of Japanese firms. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Change in origin shares of affected-product imports, exposed firms, 2018–2020",
              kind: "bar",
              xLabels: ["Japan", "Taiwan", "United States", "Belgium", "China", "Other"],
              yLabel: "Percentage points",
              series: [{ name: "Change in share", values: [-19.0, 7.1, 4.6, 3.2, 2.1, 2.0] }],
              note: "Note: Estimates from Table 5.",
            },
          ],
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks. Estimates are similar when we restrict the comparison group to semiconductor and display firms that did not import affected products from Japan, when we define exposure using only 2018 imports, and when we exclude the three largest exposed firms, which account for a large share of affected imports. Using products that became subject to licensing only after the August white-list removal as a second treatment group yields smaller effects, consistent with their lesser importance and greater availability of substitutes. Placebo estimates that assign the event to July 2018 show no effects.",
        "A further concern is that the US–China trade war affected Korean firms' sourcing over the same period. Controlling for firms' exposure to US tariffs on Chinese goods, measured by the share of their exports going to China for assembly into products exported to the United States, does not affect the estimates. Clustering by product rather than firm, or two-way clustering, yields similar standard errors.",
        "We also verify that our results are not driven by changes in the classification of products or in reporting practices after the restrictions. The number of exposed firms reporting imports of affected products under alternative HS codes did not change discontinuously after July 2019, and aggregating products to the six-digit level yields similar estimates of the change in the Japanese share. Results are also similar when unit values are computed using quantities in kilograms rather than in the units reported on customs declarations.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness checks",
          columns: ["Specification", "Log inventories", "Japanese share", "Log unit price", "Log output"],
          rows: [
            ["Baseline", "0.14***", "−0.19***", "0.058**", "−0.003"],
            ["Semiconductor and display firms only", "0.13***", "−0.18***", "0.061**", "−0.004"],
            ["Exposure from 2018 imports only", "0.15***", "−0.20***", "0.055**", "−0.003"],
            ["Excluding three largest firms", "0.12**", "−0.17***", "0.052*", "−0.002"],
            ["White-list products (August 2019)", "0.05", "−0.07**", "0.021", "−0.001"],
            ["Placebo: event in July 2018", "0.01", "0.01", "0.004", "0.002"],
            ["Controlling for US–China tariff exposure", "0.14***", "−0.19***", "0.057**", "−0.003"],
            ["Two-way clustering (firm and product)", "0.14***", "−0.19***", "0.058*", "−0.003"],
          ],
          note: "Note: Each cell is a separate regression. * p < 0.10, ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion",
      paragraphs: [
        "The episode offers three lessons. First, firms can absorb even severe disruptions to critical inputs with small output losses if they hold sufficient inventories and have time to diversify. The contrast with natural disasters, after which output losses are large and immediate [2][3], suggests that the gradual and partly anticipated nature of trade-policy shocks matters for their effects. Inventories that may appear wasteful under just-in-time production methods provide valuable insurance when supply risks rise.",
        "Second, trade-policy risk can permanently reshape sourcing even when the policy itself is narrowly targeted and partly relaxed. Exposed firms continued to diversify away from Japan after licences were being granted, and Korean domestic production of key materials expanded with government support. Because qualifying suppliers involves sunk costs, temporary policies can have persistent effects, echoing the importance of policy uncertainty for trade patterns [4][28]. Japanese suppliers lost market share that they may not regain, partly offset by supplying through subsidiaries in third countries.",
        "Third, diversification is costly. Unit input prices rose by about 6 percent, and firms incurred costs of qualifying suppliers and holding larger stocks that our data do not capture. Whether the resulting increase in resilience justifies these costs depends on the probability of future disruptions, which is difficult to assess. Global value chains are organised to exploit specialisation [7][19][20], and a widespread shift towards diversified sourcing would sacrifice some of the gains from trade in intermediate inputs [21][22][24].",
        "Our findings also inform the design of policies to strengthen supply-chain resilience, which have attracted growing attention since the pandemic. Mandating larger stockpiles of critical inputs or subsidising domestic production can reduce vulnerability, but at a cost that depends on the efficiency of alternative suppliers. The Korean experience suggests that firms themselves responded strongly to the increase in perceived risk, holding more inventories and qualifying alternative suppliers without being required to do so. Public intervention may be most valuable where private incentives to insure are weak, for example where firms do not internalise the effects of their disruptions on downstream customers [1][9].",
        "Finally, the episode highlights a limitation of our analysis. We observe firms' responses for only 18 months after the restrictions, and the long-run consequences for the organisation of supply chains in East Asia remain to be seen. Whether domestic production of key materials in Korea will become competitive without continued support, and whether Japanese suppliers will recover their position, are questions for future research.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Korean firms absorbed the 2019 export restrictions with little loss of output by drawing on inventories and diversifying suppliers, at the cost of higher input prices. Exposed firms raised inventories of affected inputs by 14 percent and cut the Japanese share of their suppliers by 19 percentage points. The episode shows that trade-policy risk can permanently reshape sourcing decisions, even when the policy itself is narrowly targeted [4][7], and that inventories provide valuable insurance against geopolitical shocks to supply chains.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Affected products. Japan's licensing requirement applied to products defined by technical specifications rather than HS codes. We map the specifications to Korean ten-digit HS codes using customs classification rulings and the product descriptions recorded in import declarations, identifying 23 codes that cover the three chemicals and closely related inputs. Results are similar when we use only the five codes that most closely match the three named chemicals.",
        "Inventories of affected inputs. For firms that do not report inventories by input type, we estimate stocks of affected inputs using a perpetual inventory approach: starting from the 2018 raw-material inventory multiplied by the share of affected products in input purchases, we add monthly imports of affected products and subtract estimated usage, computed as output multiplied by the firm's 2017–2018 ratio of affected-input purchases to output. Estimates are similar for the subsample of listed firms that report inventories in greater detail.",
        "Unit values. Unit values are winsorised at the 1st and 99th percentiles within product-origin cells to limit the influence of recording errors in quantities. Price effects are estimated on the balanced panel of firm-product pairs observed both before and after July 2019, and are similar when estimated on all observations with quantity-weighted unit values.",
        "Exposure definition. Our baseline definition classifies a firm as exposed if it imported any affected product from Japan in 2017–2018, regardless of the value. Using a continuous measure — the value of affected imports from Japan relative to total input purchases — yields similar results, with effects increasing in the intensity of exposure. Firms in the top quartile of exposure increased inventories of affected inputs by about 22 percent and reduced the Japanese share by 26 percentage points.",
      ],
    },
  ],
};
