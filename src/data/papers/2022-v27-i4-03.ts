// Vol. 27, No. 4 (October 2022) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2022-v27-i4-03",
  acknowledgments:
    "We thank seminar participants at the Korea Development Institute and Hanyang University, two anonymous referees and the handling editor for helpful comments, and the KDI Archives for access to historical planning documents. The views expressed are those of the authors and do not necessarily represent those of the Korea Development Institute. The submission was handled by Co-Editor Tae-Woo Lee and an independent Associate Editor.",
  dataAvailability:
    "Product-level export data are from the NBER–UN World Trade Flows database for 1962–2000 and from UN Comtrade for 2001–2019. Policy-loan and industry data were digitised from Bank of Korea and Ministry of Commerce and Industry publications held by the KDI Archives. The digitised industry panel and replication code are available from the corresponding author.",
  editorialNote:
    "Hyun-Ju Yang and Jae-Hoon Hwang use a difference-in-differences design across 58 manufacturing industries to show that sectors targeted by Korea's Heavy and Chemical Industry Drive increased export sophistication by 28 percent over 1980–2000 relative to other sectors, with effects of about 24 percent still visible in the 2010s, concentrated in sectors with pre-existing productive capacity and complementary human-capital investment.",
  refs: [
    /* 1 */ "Amsden, A. H. (1989). Asia's next giant: South Korea and late industrialization. New York: Oxford University Press.",
    /* 2 */ "Wade, R. (1990). Governing the market: Economic theory and the role of government in East Asian industrialization. Princeton, NJ: Princeton University Press.",
    /* 3 */ "Rodrik, D., Grossman, G., & Norman, V. (1995). Getting interventions right: How South Korea and Taiwan grew rich. Economic Policy, 10(20), 53–107.",
    /* 4 */ "Hausmann, R., Hwang, J., & Rodrik, D. (2007). What you export matters. Journal of Economic Growth, 12(1), 1–25.",
    /* 5 */ "Hidalgo, C. A., Klinger, B., Barabási, A.-L., & Hausmann, R. (2007). The product space conditions the development of nations. Science, 317(5837), 482–487.",
    /* 6 */ "Hidalgo, C. A., & Hausmann, R. (2009). The building blocks of economic complexity. Proceedings of the National Academy of Sciences, 106(26), 10570–10575.",
    /* 7 */ "Krueger, A. O., & Tuncer, B. (1982). An empirical test of the infant industry argument. American Economic Review, 72(5), 1142–1152.",
    /* 8 */ "Lee, J.-W. (1996). Government interventions and productivity growth. Journal of Economic Growth, 1(3), 391–414.",
    /* 9 */ "Harrison, A., & Rodríguez-Clare, A. (2010). Trade, foreign investment, and industrial policy for developing countries. In D. Rodrik & M. Rosenzweig (Eds.), Handbook of development economics (Vol. 5, pp. 4039–4214). Amsterdam: North-Holland.",
    /* 10 */ "Juhász, R. (2018). Temporary protection and technology adoption: Evidence from the Napoleonic blockade. American Economic Review, 108(11), 3339–3376.",
    /* 11 */ "Melitz, M. J. (2005). When and how should infant industries be protected? Journal of International Economics, 66(1), 177–196.",
    /* 12 */ "Rodrik, D. (2008). Normalizing industrial policy (Commission on Growth and Development Working Paper No. 3). Washington, DC: World Bank.",
    /* 13 */ "Aghion, P., Cai, J., Dewatripont, M., Du, L., Harrison, A., & Legros, P. (2015). Industrial policy and competition. American Economic Journal: Macroeconomics, 7(4), 1–32.",
    /* 14 */ "Kim, M., Lee, M., & Shin, Y. (2021). The plant-level view of an industrial policy: The Korean heavy industry drive of 1973 (NBER Working Paper No. 29252). Cambridge, MA: National Bureau of Economic Research.",
    /* 15 */ "Choi, J., & Levchenko, A. A. (2021). The long-term effects of industrial policy (NBER Working Paper No. 29263). Cambridge, MA: National Bureau of Economic Research.",
    /* 16 */ "World Bank. (1993). The East Asian miracle: Economic growth and public policy. New York: Oxford University Press.",
    /* 17 */ "Young, A. (1995). The tyranny of numbers: Confronting the statistical realities of the East Asian growth experience. Quarterly Journal of Economics, 110(3), 641–680.",
    /* 18 */ "Stern, J. J., Kim, J.-H., Perkins, D. H., & Yoo, J.-H. (1995). Industrialization and the state: The Korean heavy and chemical industry drive. Cambridge, MA: Harvard Institute for International Development.",
    /* 19 */ "Feenstra, R. C., Lipsey, R. E., Deng, H., Ma, A. C., & Mo, H. (2005). World trade flows: 1962–2000 (NBER Working Paper No. 11040). Cambridge, MA: National Bureau of Economic Research.",
    /* 20 */ "Hausmann, R., & Rodrik, D. (2003). Economic development as self-discovery. Journal of Development Economics, 72(2), 603–633.",
    /* 21 */ "Schott, P. K. (2004). Across-product versus within-product specialization in international trade. Quarterly Journal of Economics, 119(2), 647–678.",
    /* 22 */ "Kremer, M. (1993). The O-ring theory of economic development. Quarterly Journal of Economics, 108(3), 551–575.",
    /* 23 */ "Nunn, N., & Trefler, D. (2010). The structure of tariffs and long-term growth. American Economic Journal: Macroeconomics, 2(4), 158–194.",
    /* 24 */ "Acemoglu, D., & Zilibotti, F. (2001). Productivity differences. Quarterly Journal of Economics, 116(2), 563–606.",
    /* 25 */ "Bartelme, D., Costinot, A., Donaldson, D., & Rodríguez-Clare, A. (2019). The textbook case for industrial policy: Theory meets data (NBER Working Paper No. 26193). Cambridge, MA: National Bureau of Economic Research.",
    /* 26 */ "Imbs, J., & Wacziarg, R. (2003). Stages of diversification. American Economic Review, 93(1), 63–86.",
    /* 27 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 28 */ "Krugman, P. (1994). The myth of Asia's miracle. Foreign Affairs, 73(6), 62–78.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Industrial policy has returned to the centre of economic debate. Governments in advanced and developing economies alike are again using subsidies, credit allocation and public investment to promote particular sectors, from semiconductors to batteries and green technologies. Yet the evidence on whether such policies work remains thin, and much of the case for and against industrial policy still rests on readings of a handful of historical episodes [9][12]. Among these, none has been more influential than the Heavy and Chemical Industry (HCI) Drive launched by the Korean government in 1973. To its admirers, the HCI Drive created the steel, shipbuilding, machinery, electronics and chemical industries that underpin Korea's prosperity today [1][2]. To its critics, it misallocated capital, contributed to the macroeconomic crisis of 1979–1980 and succeeded, if at all, despite rather than because of government direction [16][28].",
        "The debate has been difficult to resolve because the HCI Drive was not randomly assigned. The government targeted industries that it expected to grow, and those industries might have expanded anyway as Korea accumulated capital and moved up the ladder of comparative advantage [17][26]. Aggregate comparisons of Korea with other economies cannot separate the effects of the HCI Drive from those of the many other policies and shocks that shaped Korean development. What is needed is a comparison of targeted and non-targeted sectors within Korea that accounts for pre-existing differences in their trajectories.",
        "This paper provides such a comparison for the composition and sophistication of Korean exports. We construct a panel of 58 manufacturing industries from 1962 to 2019 by mapping product-level export data to the industries targeted by HCI policy, and we measure export sophistication by the productivity level associated with each industry's export basket, following Hausmann, Hwang and Rodrik {4}. We then estimate difference-in-differences models that compare the evolution of export sophistication in targeted and non-targeted industries before, during and after the HCI Drive, exploiting both a binary treatment indicator and a continuous measure of exposure based on the share of each industry in policy loans in 1973–1979.",
        "We find that sectors exposed to HCI policy experienced a 28 percent increase in export sophistication relative to other sectors over the 1980–2000 period. There are no differential trends before 1973, and the gains build gradually during the 1970s and 1980s, as the investments made during the HCI Drive came on stream. The effects persist: in the 2010s, export sophistication in targeted sectors was still about 24 percent higher than the counterfactual implied by non-targeted sectors. The gains extend beyond sophistication to the extensive margin of exports and to unit values, indicating both a shift towards more sophisticated products and quality upgrading within products.",
        "The gains are highly uneven. They are concentrated in sectors with substantial pre-existing productive capacity in 1972 and in sectors that benefited from complementary investments in human capital, notably through the expansion of technical high schools and engineering education. Targeted sectors with little prior capacity and low human-capital intensity show small and statistically insignificant effects. This heterogeneity suggests that industrial policy in Korea worked by accelerating the development of capabilities that already existed in embryonic form, rather than by creating industries from nothing.",
        "Our paper contributes to a small but growing literature that evaluates historical industrial policies using modern methods [10][15]. Relative to recent work on the HCI Drive that focuses on output, productivity and plant-level outcomes [14][15], we focus on export upgrading over four decades, which links the HCI Drive to the literature on export sophistication and economic complexity [4][5][6]. We also provide new evidence on the conditions under which industrial policy succeeds, which we relate to contemporary debates about industrial policy in developing economies."
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "In January 1973, President Park Chung-hee announced the HCI Drive as the centrepiece of Korea's development strategy for the remainder of the decade. The policy designated six strategic industries — iron and steel, non-ferrous metals, shipbuilding, machinery, electronics and chemicals — and set ambitious targets for their share of manufacturing output and exports by 1981 [18]. The motivations were partly economic, reflecting concern that Korea's comparative advantage in light manufacturing would erode as wages rose, and partly strategic, reflecting the desire for a domestic defence-industrial base after the United States announced the withdrawal of troops from Korea.",
        "The government used a wide range of instruments. The most important was credit. The National Investment Fund, established in 1974, channelled household savings and public funds into long-term loans for designated projects at interest rates well below market rates, and commercial banks, then under government control, were directed to lend to HCI projects. Policy loans accounted for more than half of all domestic credit by the late 1970s, and HCI industries received the majority of them. Tax incentives under the Tax Exemption and Reduction Control Law provided tax holidays, accelerated depreciation and investment tax credits for designated industries. The government also built large industrial complexes dedicated to specific industries: the Pohang steelworks, the Changwon machinery complex, the Yeosu petrochemical complex, the Gumi electronics complex and the shipyards of Ulsan and Okpo.",
        "The HCI Drive also included substantial investments in human capital. Technical high schools were expanded and upgraded, the Korea Advanced Institute of Science, established in 1971, trained engineers for the new industries, and the Vocational Training Act required large firms to train skilled workers [1]. Importantly for our purposes, these investments were not distributed evenly across the targeted industries: machinery and electronics benefited much more from the expansion of technical training than non-ferrous metals or parts of the chemical industry.",
        "Table 1 summarises the six HCI sectors, the main instruments applied to each and their export performance. By 1979, the HCI Drive faced mounting problems: inflation, excess capacity in heavy machinery and power equipment, and a deterioration of the current account. The Comprehensive Stabilization Program of April 1979 scaled back new HCI investment, and after the political upheaval of 1979–1980 the new government restructured the overextended industries, merging firms in power-generation equipment, automobiles and heavy machinery. Policy loans were progressively reduced in the 1980s, and financial liberalisation removed most of the preferential credit regime by the early 1990s. We therefore treat 1973–1979 as the period of active intervention and study outcomes over the subsequent four decades.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Industries targeted by the Heavy and Chemical Industry Drive",
          columns: ["Sector", "Industries in panel", "Main complexes and projects", "Share of policy loans 1973–79 (%)", "Export share 1972 (%)", "Export share 2000 (%)"],
          rows: [
            ["Iron and steel", "3", "Pohang", "14.8", "2.9", "5.1"],
            ["Non-ferrous metals", "3", "Onsan", "4.6", "0.6", "1.0"],
            ["Shipbuilding", "2", "Ulsan, Okpo", "11.2", "0.7", "5.8"],
            ["Machinery", "6", "Changwon", "13.5", "1.3", "9.4"],
            ["Electronics", "5", "Gumi", "9.7", "6.4", "36.2"],
            ["Chemicals and petrochemicals", "5", "Yeosu, Ulsan", "12.9", "1.4", "9.7"],
            ["All HCI sectors", "24", "", "66.7", "13.3", "67.2"],
            ["Non-targeted manufacturing", "34", "", "33.3", "86.7", "32.8"],
          ],
          note: "Note: Industries are the manufacturing industries of our panel, defined at roughly the three-digit level of the Korean Standard Industrial Classification. Policy-loan shares are shares of manufacturing policy loans (National Investment Fund and directed bank lending) disbursed in 1973–1979. Export shares are shares of Korean manufacturing exports. Source: Bank of Korea; Ministry of Commerce and Industry; NBER–UN World Trade Flows; authors' calculations.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "The classic interpretations of Korean industrialisation are those of Amsden {1} and Wade {2}, who argued that selective government intervention, disciplined by export targets, was central to the East Asian success. Rodrik, Grossman and Norman {3} stressed the coordination failures that the Korean state overcame by organising large complementary investments. Critics have pointed to the macroeconomic costs of the HCI Drive and argued that factor accumulation, not targeted intervention, accounts for most of East Asian growth [17][28]. The World Bank {16} offered a middle position, crediting export promotion while expressing scepticism about sectoral targeting.",
        "Cross-industry econometric studies have generally found weak evidence for the effectiveness of targeting. Krueger and Tuncer {7} found little evidence that protected Turkish industries experienced faster productivity growth, and Lee {8} found that Korean industries receiving tax incentives and subsidised credit did not grow faster in total factor productivity. These studies, however, focus on short-run productivity and do not exploit the timing of policy or consider long-run outcomes. Harrison and Rodríguez-Clare {9} conclude that the empirical literature is largely uninformative because it rarely addresses the endogeneity of policy choices.",
        "A more recent literature uses natural experiments and long-run data. Juhász {10} shows that temporary protection from British competition during the Napoleonic blockade had lasting effects on the location of French cotton spinning, providing evidence for infant-industry learning. Aghion et al. {13} find that sectoral subsidies in China raised productivity when they were allocated in ways that preserved competition. For Korea, Kim, Lee and Shin {14} use plant-level data and find that targeted industries expanded output and employment, while Choi and Levchenko {15} estimate a quantitative model in which the HCI Drive had long-lasting effects through learning-by-doing. Bartelme et al. {25} provide a framework for assessing the case for industrial policy based on sector-level scale economies.",
        "Finally, our measure of outcomes draws on the literature on export sophistication. Hausmann, Hwang and Rodrik {4} show that countries exporting goods associated with higher productivity levels subsequently grow faster, and Hidalgo et al. {5} and Hidalgo and Hausmann {6} show that the capabilities embodied in a country's export basket constrain the products it can move into. Schott {21} documents that within-product unit values vary systematically with country income, so that quality upgrading is an important margin of export development. Hausmann and Rodrik {20} argue that discovering what a country can produce efficiently is subject to information externalities, providing a rationale for policies that subsidise the entry of firms into new activities.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Why might temporary intervention in the 1970s affect the composition of exports decades later? The theoretical literature offers three mechanisms. First, if production involves dynamic economies of scale, such as learning-by-doing or knowledge spillovers within an industry, temporary support can move an industry onto a higher productivity path that persists after support is withdrawn [11][25]. Second, if entry into new activities is subject to information externalities, the first firms to discover that a product can be produced profitably generate social returns that they cannot appropriate, and subsidies can induce socially valuable discovery [20]. Third, if the production of sophisticated goods requires a combination of complementary inputs, such as physical capital, specialised suppliers and skilled workers, then coordinated investment can overcome failures that no single firm could solve alone [3][22].",
        "These mechanisms imply our main hypothesis. H1: sectors exposed to HCI policy experienced larger increases in export sophistication after 1973 than other sectors, and the effects persisted after the end of active intervention in 1979. The mechanisms also imply that the effects of intervention should depend on the presence of complementary inputs. H2: the effects are larger in sectors with greater pre-existing productive capacity, since learning-by-doing and discovery are more likely to succeed where there is an existing base of firms, suppliers and experience. H3: the effects are larger in sectors that benefited from complementary investments in human capital, because the absorption of more sophisticated technologies requires workers with the skills to operate them [24].",
        "There are, however, reasons to expect small or even negative effects. Subsidised credit may have supported inefficient firms, delayed exit and crowded out more productive activities [8][16]. Large investments in capital-intensive sectors may have raised output without improving the sophistication of exports if the products made were standardised goods such as basic steel or petrochemicals. Whether the net effect is positive is therefore an empirical question.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-exports",
          heading: "5.1 Export Data and Sophistication",
          paragraphs: [
            "We use product-level export data from the NBER–UN World Trade Flows database for 1962–2000 [19], which reports bilateral trade at the four-digit level of the Standard International Trade Classification (SITC), and from UN Comtrade for 2001–2019, converted to the same classification. The data cover 612 manufactured product categories exported by Korea at some point in the sample. We map each product to one of 58 manufacturing industries, defined at roughly the three-digit level of the Korean Standard Industrial Classification, using concordances from the Bank of Korea input–output tables.",
            "Our main measure of export sophistication follows Hausmann, Hwang and Rodrik {4}. For each product k, PRODY_k is the weighted average of the per-capita incomes of the countries exporting k, with weights given by each country's revealed comparative advantage in k. For industry s in year t, export sophistication is EXPY_st = Σ_k (x_kst / X_st) · PRODY_k, where x_kst is Korea's exports of product k and X_st the total exports of industry s. To ensure that changes in EXPY reflect changes in Korea's export basket rather than changes in the incomes of other exporters, we fix PRODY at its average value over 1990–1994, computed from a balanced panel of 106 countries. Results are similar with PRODY fixed in other periods, as we show in Section 9.",
            "We complement EXPY with four other measures: the number of four-digit products in which an industry has revealed comparative advantage (the extensive margin), the share of Korea in world exports of the industry, the average unit value of Korean exports relative to the world average for the same product (a within-product measure of quality, following Schott {21}), and an index of product complexity in the spirit of Hidalgo and Hausmann {6}.",
          ],
        },
        {
          id: "data-policy",
          heading: "5.2 Policy Exposure and Industry Characteristics",
          paragraphs: [
            "We measure exposure to HCI policy in two ways. The binary measure equals one for the 24 industries belonging to the six designated sectors. The continuous measure is each industry's share of manufacturing policy loans disbursed in 1973–1979 relative to its share of manufacturing output in 1972, which we digitised from Bank of Korea and Ministry of Commerce and Industry publications. The continuous measure captures the substantial variation in the intensity of support within the targeted sectors: for example, shipbuilding and basic steel received far more credit relative to their initial size than household electronics or fertilisers.",
            "Pre-existing productive capacity is measured by the industry's 1972 value added relative to the average across manufacturing industries, and by whether the industry contained at least one plant with more than 300 employees in 1972. Human-capital complementarity is measured by the share of workers in the industry with a technical high-school or college engineering qualification in 1980, which reflects the expansion of technical education during the HCI Drive. We also collect industry-level tariffs and quantitative import restrictions, the inflow of foreign direct investment and the share of output produced by firms belonging to the largest business groups.",
            "Table 2 reports descriptive statistics for targeted and non-targeted industries in 1967–1972, before the HCI Drive. Targeted industries were smaller, more capital-intensive and had lower initial export sophistication, as one would expect of industries that the government sought to develop. The two groups were, however, on similar trajectories: the average annual growth of export sophistication in 1962–1972 was 1.4 percent in targeted and 1.5 percent in non-targeted industries.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Characteristics of targeted and non-targeted industries, 1967–1972",
              columns: ["Variable", "HCI industries", "Non-targeted industries", "Difference", "p-value"],
              rows: [
                ["Number of industries", "24", "34", "", ""],
                ["Log EXPY (1990–94 PRODY, USD)", "8.71", "8.83", "−0.12", "0.04"],
                ["Growth of log EXPY, 1962–72 (% per year)", "1.4", "1.5", "−0.1", "0.81"],
                ["Exports (USD million, 1972)", "21.4", "62.7", "−41.3", "0.02"],
                ["Products with RCA > 1", "2.1", "4.6", "−2.5", "0.01"],
                ["Capital per worker (index, manufacturing = 100)", "164", "71", "93", "0.00"],
                ["Relative value added, 1972", "0.82", "1.13", "−0.31", "0.09"],
                ["Technical-qualified worker share, 1970 (%)", "6.8", "3.9", "2.9", "0.01"],
                ["Average tariff (%)", "41.2", "48.6", "−7.4", "0.21"],
              ],
              note: "Note: Means across industries for 1967–1972 unless otherwise indicated. EXPY is the export-weighted average of PRODY over products in the industry, with PRODY fixed at 1990–1994 values. RCA is revealed comparative advantage in world exports. p-values are from t-tests of equality of means. Source: NBER–UN World Trade Flows; Bank of Korea; authors' calculations.",
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
          id: "strategy-did",
          heading: "6.1 Difference-in-Differences",
          paragraphs: [
            "Our baseline specification is y_st = α_s + δ_t + Σ_p β_p (HCI_s × Period_p,t) + X_st′γ + ε_st, where y_st is log export sophistication of industry s in year t, α_s and δ_t are industry and year fixed effects, HCI_s is the binary or continuous measure of exposure, and Period_p,t are indicators for the periods 1973–1979, 1980–2000 and 2001–2019, with 1962–1972 as the reference. The coefficient on the 1980–2000 interaction is our main estimate of the medium-run effect of the HCI Drive. The industry fixed effects absorb permanent differences between industries, such as the higher capital intensity of targeted sectors, while the year fixed effects absorb macroeconomic shocks and economy-wide trends in sophistication.",
            "To examine dynamics and pre-trends, we also estimate an event-study version with interactions between exposure and five-year periods, with 1967–1972 as the omitted period. The identifying assumption is that, in the absence of the HCI Drive, export sophistication in targeted and non-targeted industries would have evolved in parallel. Because the government selected industries it expected to grow, this assumption cannot be taken for granted, but the event study allows us to test whether the two groups were on parallel trends before 1973.",
          ],
        },
        {
          id: "strategy-threats",
          heading: "6.2 Threats to Identification",
          paragraphs: [
            "Three threats deserve discussion. First, the industries targeted by the HCI Drive are those in which countries typically specialise as they grow richer and accumulate capital [26]. If Korea would have shifted towards these industries anyway, our estimates would capture natural structural change rather than policy. We address this by controlling for the interaction of year fixed effects with capital intensity in 1972, and by using as an alternative counterfactual the evolution of the same industries in Taiwan, which developed similar industries with less aggressive targeting. Second, other policies, such as tariff protection and the liberalisation of foreign direct investment, varied across industries and over time. We control for industry-level tariffs, quantitative restrictions and FDI inflows. Third, with 58 industries, conventional clustered standard errors may be unreliable [27]; we report standard errors clustered by industry and wild-cluster bootstrap p-values.",
          ],
        },
        {
          id: "strategy-heterogeneity",
          heading: "6.3 Heterogeneity",
          paragraphs: [
            "To test H2 and H3, we interact the exposure measures with indicators for above-median pre-existing capacity and above-median human-capital complementarity, and estimate the effects separately for the four combinations of these characteristics. Because both characteristics are measured before or at the start of the HCI period (in 1972 for capacity, and in 1980 for human capital, reflecting investments made during the Drive), the human-capital split should be interpreted as describing the complementarity between credit and skill investments rather than as a pre-determined characteristic.",
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
          id: "results-main",
          heading: "7.1 Main Estimates",
          paragraphs: [
            "Table 3 reports the main difference-in-differences estimates. In column (1), with the binary treatment and industry and year fixed effects only, the coefficient for 1980–2000 is 0.247 log points (standard error 0.061), implying that export sophistication in targeted industries increased by 28 percent relative to non-targeted industries over the 1980–2000 period. The effect during the period of active intervention, 1973–1979, is smaller, at 0.062, reflecting the long gestation of the large investments made during the HCI Drive. The effect in 2001–2019 is 0.231, indicating considerable persistence.",
            "The estimates are robust to the inclusion of controls. Adding interactions of year fixed effects with 1972 capital intensity, which allow capital-intensive industries to follow different trends, reduces the 1980–2000 coefficient only slightly, to 0.236 (column 2). Controlling for tariffs, quantitative restrictions and FDI inflows yields 0.241 (column 3). The continuous exposure measure in column (4) gives a coefficient of 0.118 per unit of relative policy-loan intensity; evaluated at the mean intensity of targeted industries, 2.1, this corresponds to an effect of 0.248 log points, very close to the binary estimate. Wild-cluster bootstrap p-values are below 0.01 for the 1980–2000 coefficient in every column.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effect of HCI exposure on log export sophistication",
              columns: ["", "(1)", "(2)", "(3)", "(4)"],
              rows: [
                ["HCI × 1973–1979", "0.062 (0.041)", "0.055 (0.040)", "0.058 (0.042)", "0.031 (0.019)"],
                ["HCI × 1980–2000", "0.247*** (0.061)", "0.236*** (0.063)", "0.241*** (0.060)", "0.118*** (0.029)"],
                ["HCI × 2001–2019", "0.231*** (0.068)", "0.219*** (0.070)", "0.226*** (0.067)", "0.109*** (0.033)"],
                ["Exposure measure", "Binary", "Binary", "Binary", "Policy-loan intensity"],
                ["Industry and year fixed effects", "Yes", "Yes", "Yes", "Yes"],
                ["Year × capital intensity 1972", "No", "Yes", "Yes", "Yes"],
                ["Tariffs, quotas and FDI", "No", "No", "Yes", "Yes"],
                ["Wild bootstrap p-value (1980–2000)", "0.002", "0.004", "0.002", "0.001"],
                ["Observations", "3,364", "3,364", "3,364", "3,364"],
                ["R²", "0.91", "0.92", "0.92", "0.92"],
              ],
              note: "Note: The dependent variable is log EXPY of industry s in year t, with PRODY fixed at 1990–1994 values. The reference period is 1962–1972. The panel covers 58 industries over 1962–2019. Policy-loan intensity is the industry's share of manufacturing policy loans in 1973–1979 relative to its 1972 output share (mean 2.1 in targeted industries). Standard errors clustered by industry in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
            },
          ],
        },
        {
          id: "results-dynamics",
          heading: "7.2 Dynamics and Persistence",
          paragraphs: [
            "Figure 1 presents the event-study estimates by five-year period. The coefficients for 1962–1966 are small and statistically insignificant, supporting the parallel-trends assumption. After 1973, the effect rises gradually: to 0.062 in 1973–1979, 0.175 in 1980–1984 and 0.241 in 1985–1989, peaking at about 0.30 in the late 1990s. The average over the four periods from 1980 to 2000 is 0.250 log points, consistent with the 28 percent estimate in Table 3. Thereafter the effect declines only slowly, to 0.223 in 2011–2015 and 0.208 in 2016–2019, so that export sophistication in targeted sectors remained about 24 percent above the counterfactual in the 2010s.",
            "The gradual build-up of the effect is consistent with the mechanisms of learning-by-doing and discovery. Many HCI investments, such as the second and third phases of the Pohang steelworks and the large shipyards, only reached full capacity in the early 1980s, and the shift from assembly of imported components to domestic production of more sophisticated products took place over the following decade. The persistence of the effect for more than three decades after active intervention ended in 1979 suggests that the HCI Drive moved the targeted industries onto a permanently different path, as predicted by models with dynamic scale economies [11][15].",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Event-study estimates of the effect of HCI exposure on log export sophistication",
              kind: "line",
              xLabels: ["1962–66", "1967–72", "1973–79", "1980–84", "1985–89", "1990–94", "1995–00", "2001–05", "2006–10", "2011–15", "2016–19"],
              yLabel: "Effect on log EXPY",
              series: [
                {
                  name: "HCI × period",
                  values: [-0.018, 0.0, 0.062, 0.175, 0.241, 0.286, 0.298, 0.272, 0.246, 0.223, 0.208],
                  lower: [-0.094, 0.0, -0.018, 0.061, 0.118, 0.159, 0.167, 0.136, 0.106, 0.081, 0.062],
                  upper: [0.058, 0.0, 0.142, 0.289, 0.364, 0.413, 0.429, 0.408, 0.386, 0.365, 0.354],
                },
              ],
              marker: 1,
              note: "Note: Coefficients on interactions of the binary HCI indicator with period dummies, relative to 1967–1972, from a regression with industry and year fixed effects, year × 1972 capital intensity, and trade-policy and FDI controls; 95 percent confidence intervals based on standard errors clustered by industry. The dashed line marks the launch of the HCI Drive in January 1973.",
            },
          ],
        },
        {
          id: "results-margins",
          heading: "7.3 Margins of Export Upgrading",
          paragraphs: [
            "Table 4 examines which margins of export upgrading account for the increase in sophistication. Targeted industries expanded the number of products in which Korea had revealed comparative advantage by 3.6 relative to non-targeted industries over 1980–2000, from a pre-period base of 2.1, indicating substantial diversification into new products. Their share of world exports in the industry rose by 1.9 percentage points. Relative unit values rose by 11.4 percent, indicating that Korean exporters in targeted industries also upgraded quality within products. The product-complexity index rose by 0.42 standard deviations.",
            "A shift-share decomposition of the change in EXPY shows that about 70 percent of the relative increase in targeted industries reflects reallocation across products within industries — from basic steel to specialty steels, from small vessels to large container ships and tankers, from radios to semiconductors — and about 30 percent reflects the entry of new products. Because EXPY is computed with fixed PRODY values, it does not capture within-product quality upgrading, so the unit-value results indicate an additional margin of improvement. Exports of targeted industries also grew substantially faster in value, by about 1.1 log points relative to non-targeted industries, consistent with the large changes in export shares reported in Table 1.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Effects of HCI exposure on alternative margins of export upgrading, 1980–2000",
              columns: ["Outcome", "HCI × 1980–2000", "Standard error", "HCI × 2001–2019", "Standard error", "Pre-period mean (HCI)"],
              rows: [
                ["Log EXPY", "0.247***", "(0.061)", "0.231***", "(0.068)", "8.71"],
                ["Products with RCA > 1", "3.6***", "(1.1)", "3.2***", "(1.2)", "2.1"],
                ["Share of world exports (pp)", "1.9***", "(0.6)", "2.4***", "(0.8)", "0.3"],
                ["Log relative unit value", "0.108**", "(0.044)", "0.121**", "(0.052)", "−0.41"],
                ["Product complexity index (SD)", "0.42***", "(0.13)", "0.39***", "(0.14)", "−0.28"],
                ["Log export value", "1.12***", "(0.31)", "0.96***", "(0.34)", "2.71"],
              ],
              note: "Note: Each row reports coefficients from a separate regression with the specification of Table 3, column (3). Relative unit value is the ratio of Korean export unit values to the world average unit value for the same four-digit product, aggregated to industries with export weights. The product complexity index is standardised across all products in the world sample. *** p < 0.01, ** p < 0.05, * p < 0.10.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Table 5 shows that the gains from HCI policy are concentrated in sectors with substantial pre-existing productive capacity and complementary human-capital investments. Targeted industries with above-median relative value added in 1972 increased export sophistication by 0.346 log points (41 percent) over 1980–2000, compared with 0.086 log points for those with below-median capacity, an effect that is not statistically significant. Similarly, targeted industries with above-median shares of technically qualified workers increased sophistication by 0.322 log points (38 percent), compared with 0.112 for those with below-median shares. The differences are statistically significant at the 1 and 5 percent levels, respectively.",
        "Figure 2 shows the effects for the four combinations of these characteristics. Targeted industries with both high capacity and high human capital — principally electronics, transport equipment and general machinery — experienced increases of 0.43 log points, and the effects remain large in the 2010s. By contrast, targeted industries with low capacity and low human capital, including parts of non-ferrous metals and heavy electrical equipment, show effects close to zero. Mixed cases fall in between. Because the two characteristics are correlated, we also estimate a specification that includes both interactions simultaneously; both remain significant, with coefficients of 0.19 and 0.15, respectively, suggesting that capacity and human capital are separately important.",
        "These results support H2 and H3 and are consistent with the view that industrial policy works best when it builds on existing capabilities [5][20]. They also echo the case-study literature: Amsden {1} emphasised the role of engineers and the existing industrial base in absorbing foreign technology, and Stern et al. {18} documented the difficulties faced by HCI projects that lacked experienced managers and workers. The absence of effects in targeted industries without capacity or skills suggests that subsidised credit alone did not generate export upgrading. We also find that effects were larger in industries in which business groups (chaebol) accounted for a high share of output, but this difference disappears once capacity and human capital are controlled for, suggesting that group affiliation mattered mainly through its correlation with capabilities.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Heterogeneity in the effect of HCI exposure on log export sophistication",
          columns: ["Subsample of targeted industries", "HCI × 1980–2000", "Standard error", "HCI × 2001–2019", "Standard error", "Industries"],
          rows: [
            ["High pre-existing capacity", "0.346***", "(0.074)", "0.328***", "(0.081)", "12"],
            ["Low pre-existing capacity", "0.086", "(0.071)", "0.071", "(0.078)", "12"],
            ["High human-capital complementarity", "0.322***", "(0.072)", "0.306***", "(0.080)", "12"],
            ["Low human-capital complementarity", "0.112", "(0.073)", "0.094", "(0.079)", "12"],
            ["High chaebol share", "0.291***", "(0.076)", "0.268***", "(0.083)", "12"],
            ["Low chaebol share", "0.183**", "(0.077)", "0.172**", "(0.084)", "12"],
            ["Difference: capacity (high − low)", "0.260***", "(0.094)", "0.257***", "(0.101)", ""],
            ["Difference: human capital (high − low)", "0.210**", "(0.096)", "0.212**", "(0.103)", ""],
          ],
          note: "Note: Each pair of rows reports coefficients from a regression of log EXPY on interactions of the HCI indicator for the indicated subsample with period dummies, with all 34 non-targeted industries as the comparison group, using the specification of Table 3, column (3). High and low are defined relative to the median among targeted industries. *** p < 0.01, ** p < 0.05, * p < 0.10.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Effect of HCI exposure by pre-existing capacity and human-capital complementarity",
          kind: "bar",
          xLabels: ["High capacity, high skills", "High capacity, low skills", "Low capacity, high skills", "Low capacity, low skills"],
          yLabel: "Effect on log EXPY",
          series: [
            { name: "1980–2000", values: [0.43, 0.24, 0.19, 0.03] },
            { name: "2001–2019", values: [0.41, 0.22, 0.17, 0.01] },
          ],
          note: "Note: Coefficients on interactions of indicators for each group of targeted industries with period dummies, relative to non-targeted industries and the 1962–1972 period, from the specification of Table 3, column (3). The groups contain 8, 4, 4 and 8 industries, respectively.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 summarises the robustness of the main estimate. Fixing PRODY in 1975–1979 or 2005–2009 instead of 1990–1994 yields estimates of 0.229 and 0.258, respectively, indicating that the results are not driven by the choice of base period. Excluding electronics, the most successful targeted sector, reduces the estimate to 0.198, which remains highly significant; excluding shipbuilding has little effect. Dropping the years of the Asian financial crisis, 1997–1998, and restricting the sample to products exported in every year from 1970 onwards also leave the estimates largely unchanged.",
        "We also consider alternative counterfactuals. Using Taiwan's export sophistication in the same industries as an additional control, in a triple-difference specification that compares the gap between targeted and non-targeted industries in Korea with the same gap in Taiwan, yields an estimate of 0.172. This is smaller than the baseline, as expected if some of the shift towards heavy industries reflected regional trends in comparative advantage, but it is still economically large and statistically significant. A placebo test that assigns the start of the HCI Drive to 1967 and uses only pre-1973 data yields a coefficient close to zero. Finally, matching each targeted industry to non-targeted industries with similar 1972 capital intensity and export sophistication yields an estimate of 0.226.",
        "A remaining concern is that the government selected industries based on information about their future prospects that is not captured by our controls. The absence of pre-trends, the robustness to controls for capital intensity, and the heterogeneity results all argue against this interpretation: if the government had simply picked industries that would have grown anyway, we would not expect the effects to be concentrated in industries with particular pre-existing characteristics that were known to planners, nor to be absent in other targeted industries. Nevertheless, our estimates are best interpreted as the effect of the HCI package, including credit, tax incentives, public infrastructure and training, rather than of any single instrument.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness checks for the effect of HCI exposure on log export sophistication, 1980–2000",
          columns: ["Specification", "Estimate", "Standard error", "Observations"],
          rows: [
            ["Baseline (Table 3, column 3)", "0.241***", "(0.060)", "3,364"],
            ["PRODY fixed at 1975–1979", "0.229***", "(0.063)", "3,364"],
            ["PRODY fixed at 2005–2009", "0.258***", "(0.066)", "3,364"],
            ["Excluding electronics", "0.198***", "(0.058)", "3,074"],
            ["Excluding shipbuilding", "0.236***", "(0.062)", "3,248"],
            ["Excluding 1997–1998", "0.243***", "(0.061)", "3,248"],
            ["Products exported continuously since 1970", "0.219***", "(0.059)", "3,364"],
            ["Triple difference with Taiwan", "0.172***", "(0.057)", "6,728"],
            ["Placebo: treatment in 1967, 1962–1972 data", "0.011", "(0.038)", "638"],
            ["Matched control industries", "0.226***", "(0.064)", "2,436"],
          ],
          note: "Note: Each row reports the coefficient on HCI × 1980–2000 from a separate regression with the specification of Table 3, column (3), unless otherwise noted. The triple difference uses industry-level export data for Taiwan from the same sources. Standard errors clustered by industry. *** p < 0.01, ** p < 0.05, * p < 0.10.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our findings shed light on contemporary debates about industrial policy in developing economies. They suggest that Korea's HCI Drive did, on average, accelerate the upgrading of exports in targeted industries, and that the effects were long-lasting. A 28 percent increase in export sophistication is large: it is roughly equal to the difference in average EXPY between Korea and Mexico in the mid-1990s, and a simple calculation based on the cross-country relationship between EXPY and growth estimated by Hausmann, Hwang and Rodrik {4} suggests that it raised Korea's annual growth rate by between 0.3 and 0.5 percentage points over the 1980s and 1990s.",
        "This conclusion does not imply that the HCI Drive was efficient. Our estimates measure effects on export sophistication, not on welfare, and do not account for the costs of the policy: the fiscal and quasi-fiscal cost of subsidised credit, the misallocation of capital to unsuccessful projects, and the contribution of the Drive to the inflation and debt problems of the late 1970s [16]. Our heterogeneity results suggest that a substantial fraction of the policy's resources went to industries in which the effects on export upgrading were small. A more selective approach, focusing on industries with existing capabilities, might have achieved most of the gains at lower cost.",
        "The heterogeneity also carries lessons for countries considering industrial policy today. The Korean experience suggests that industrial policy is more likely to succeed when it builds on existing productive capacity and is accompanied by investments in the skills required by the targeted industries. Credit alone does not appear to have been sufficient. The disciplined use of export performance as a criterion for continued support, emphasised by Amsden {1} and Rodrik {12}, and competition among firms within targeted sectors [13] may also have been important, although our data do not allow us to test these mechanisms directly.",
        "The setting of the 1970s also differs from that of today in important ways. Korea had a highly educated workforce relative to its income, a government with substantial control over the financial system, and access to export markets that were largely open to manufactured goods. Contemporary trade agreements restrict the use of many of the instruments employed by Korea, and global value chains have changed the nature of industrial upgrading [23]. These differences counsel caution in drawing direct policy lessons, even if the principle of building on existing capabilities is likely to carry over.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "This paper has evaluated the long-run effects of Korea's Heavy and Chemical Industry Drive on the composition and sophistication of Korean exports. Using a difference-in-differences design across 58 manufacturing industries over 1962–2019, we find that sectors exposed to HCI policy experienced a 28 percent increase in export sophistication relative to other sectors over the 1980–2000 period, with effects of about 24 percent persisting into the 2010s. The gains reflect both diversification into new products and quality upgrading within products.",
        "The effects are concentrated in sectors with substantial pre-existing productive capacity and complementary human-capital investments, while targeted sectors lacking these characteristics show little improvement. Industrial policy in Korea, on this evidence, worked by accelerating the development of existing capabilities. For developing economies considering similar policies today, the lesson is that the selection of sectors and complementary investments in skills may matter as much as the scale of financial support.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Construction of PRODY and the Industry Panel",
      paragraphs: [
        "PRODY for product k is computed as PRODY_k = Σ_c [(x_ck / X_c) / Σ_c′ (x_c′k / X_c′)] · Y_c, where x_ck is country c's exports of product k, X_c its total exports and Y_c its real GDP per capita in PPP terms. We compute PRODY for each year of 1990–1994 using the 106 countries with complete data and take the average. The 612 four-digit SITC products are mapped to 58 industries using the Bank of Korea's 1975 input–output concordance; 31 products that span more than one industry are allocated in proportion to their 1975 output shares. Results are similar when these products are dropped.",
        "For 2001–2019, we convert UN Comtrade data reported in the Harmonized System to SITC Revision 2 using the standard UN concordances. To check for discontinuities at the transition between data sources, we compare EXPY computed from both sources for 1995–2000, the period in which they overlap; the correlation across industry-years is 0.98 and the mean difference is less than 1 percent. The panel is balanced, with 58 industries observed in each of the 58 years from 1962 to 2019, giving 3,364 industry-year observations.",
      ],
    },
  ],
};
