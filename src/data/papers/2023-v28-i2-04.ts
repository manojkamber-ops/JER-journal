// Vol. 28, No. 2 (April 2023) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2023-v28-i2-04",
  acknowledgments:
    "We thank seminar participants at Keio University, Fudan University and Hanyang University, two anonymous referees and the handling Associate Editor for helpful comments. We are grateful to colleagues who shared their experience with multi-regional input–output tables. All errors are our own.",
  dataAvailability:
    "The analysis uses publicly available multi-regional input–output tables (the Asian Development Bank Multi-Regional Input–Output database and the OECD Inter-Country Input–Output tables underlying the Trade in Value Added database) and UN Comtrade gross trade data. The constructed value-added trade matrices, centrality series and replication code are available from the corresponding author.",
  editorialNote:
    "Yuki Tanaka and Wei Zhang compute four network-centrality measures for Asian economies in the value-added trade network over 2000–2022 and document Korea's steadily rising centrality — from 14th to 8th in eigenvector centrality — and the sharper rise of China after its 2001 WTO accession.",
  refs: [
    /* 1 */ "Freeman, L. C. (1978). Centrality in social networks conceptual clarification. Social Networks, 1(3), 215–239.",
    /* 2 */ "Bonacich, P. (1987). Power and centrality: A family of measures. American Journal of Sociology, 92(5), 1170–1182.",
    /* 3 */ "Newman, M. E. J. (2010). Networks: An introduction. Oxford: Oxford University Press.",
    /* 4 */ "Opsahl, T., Agneessens, F., & Skvoretz, J. (2010). Node centrality in weighted networks: Generalizing degree and shortest paths. Social Networks, 32(3), 245–251.",
    /* 5 */ "Wasserman, S., & Faust, K. (1994). Social network analysis: Methods and applications. Cambridge: Cambridge University Press.",
    /* 6 */ "Serrano, M. Á., & Boguñá, M. (2003). Topology of the world trade web. Physical Review E, 68(1), 015101.",
    /* 7 */ "Fagiolo, G., Reyes, J., & Schiavo, S. (2009). World-trade web: Topological properties, dynamics, and evolution. Physical Review E, 79(3), 036115.",
    /* 8 */ "De Benedictis, L., & Tajoli, L. (2011). The world trade network. The World Economy, 34(8), 1417–1454.",
    /* 9 */ "Kali, R., & Reyes, J. (2007). The architecture of globalization: A network approach to international economic integration. Journal of International Business Studies, 38(4), 595–620.",
    /* 10 */ "Johnson, R. C., & Noguera, G. (2012). Accounting for intermediates: Production sharing and trade in value added. Journal of International Economics, 86(2), 224–236.",
    /* 11 */ "Koopman, R., Wang, Z., & Wei, S.-J. (2014). Tracing value-added and double counting in gross exports. American Economic Review, 104(2), 459–494.",
    /* 12 */ "Hummels, D., Ishii, J., & Yi, K.-M. (2001). The nature and growth of vertical specialization in world trade. Journal of International Economics, 54(1), 75–96.",
    /* 13 */ "Johnson, R. C. (2014). Five facts about value-added exports and implications for macroeconomics and trade research. Journal of Economic Perspectives, 28(2), 119–142.",
    /* 14 */ "Baldwin, R., & Lopez-Gonzalez, J. (2015). Supply-chain trade: A portrait of global patterns and several testable hypotheses. The World Economy, 38(11), 1682–1721.",
    /* 15 */ "Timmer, M. P., Dietzenbacher, E., Los, B., Stehrer, R., & de Vries, G. J. (2015). An illustrated user guide to the World Input–Output Database: The case of global automotive production. Review of International Economics, 23(3), 575–605.",
    /* 16 */ "Los, B., Timmer, M. P., & de Vries, G. J. (2015). How global are global value chains? A new approach to measure international fragmentation. Journal of Regional Science, 55(1), 66–92.",
    /* 17 */ "Antràs, P., Chor, D., Fally, T., & Hillberry, R. (2012). Measuring the upstreamness of production and trade flows. American Economic Review, 102(3), 412–416.",
    /* 18 */ "Acemoglu, D., Carvalho, V. M., Ozdaglar, A., & Tahbaz-Salehi, A. (2012). The network origins of aggregate fluctuations. Econometrica, 80(5), 1977–2016.",
    /* 19 */ "Carvalho, V. M., & Tahbaz-Salehi, A. (2019). Production networks: A primer. Annual Review of Economics, 11, 635–663.",
    /* 20 */ "Baldwin, R. (2016). The great convergence: Information technology and the new globalization. Cambridge, MA: Harvard University Press.",
    /* 21 */ "Brandt, L., Van Biesebroeck, J., Wang, L., & Zhang, Y. (2017). WTO accession and performance of Chinese manufacturing firms. American Economic Review, 107(9), 2784–2820.",
    /* 22 */ "Pierce, J. R., & Schott, P. K. (2016). The surprisingly swift decline of US manufacturing employment. American Economic Review, 106(7), 1632–1662.",
    /* 23 */ "Barrat, A., Barthélemy, M., Pastor-Satorras, R., & Vespignani, A. (2004). The architecture of complex weighted networks. Proceedings of the National Academy of Sciences, 101(11), 3747–3752.",
    /* 24 */ "Brin, S., & Page, L. (1998). The anatomy of a large-scale hypertextual web search engine. Computer Networks and ISDN Systems, 30(1–7), 107–117.",
    /* 25 */ "Andrews, D. W. K. (1993). Tests for parameter instability and structural change with unknown change point. Econometrica, 61(4), 821–856.",
    /* 26 */ { jer: "2022-v27-i4-03" },
    /* 27 */ { jer: "2021-v26-i2-02" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "The rise of Asia in world trade over the past two decades is usually summarised by trade shares: the proportion of world exports or imports accounted for by a country or region. Such measures are informative but incomplete. They record the size of a country's trade but not its position in the web of bilateral linkages through which goods, services and the value added embodied in them flow. Two economies with the same share of world trade can occupy very different positions — one connected mainly to a single large partner, the other linked to many partners that are themselves well connected. These differences matter for how shocks propagate across borders, for bargaining power in trade negotiations and for the resilience of supply chains [18][19].",
        "Network analysis provides tools to measure such positions. Treating economies as nodes and bilateral trade flows as weighted links, centrality measures summarise how important each node is to the network as a whole [1][2][3]. A growing literature has applied these tools to the world trade network, documenting its increasing density and the heterogeneity of countries' positions within it [6][7][8][9]. Most studies, however, use gross trade flows, which can give a misleading picture when production is fragmented across borders. When a smartphone assembled in one country from components made in several others is exported, gross trade records its full value as an export of the assembling country, double-counting the value of imported components and overstating the importance of assembly hubs [10][11][13].",
        "This paper computes and compares four network-centrality measures for Asian economies in the global trade network over 2000–2022 using a value-added trade matrix. We construct annual matrices of bilateral value-added trade — the value added generated in one economy and absorbed in final demand in another — for 62 economies from multi-regional input–output tables. For each economy and year we compute strength (weighted degree), closeness, betweenness and eigenvector centrality, which capture, respectively, the volume of an economy's direct linkages, its proximity to all other economies, its role as an intermediary, and its connection to other central economies.",
        "Our main findings are as follows. Korea's centrality has risen steadily across all measures, consistent with its integration into global value chains. Its eigenvector centrality nearly doubled between 2000 and 2022, raising its rank among the 62 economies from 14th to 8th, and its rise was gradual rather than concentrated in particular years. China's centrality has risen more sharply, particularly after its 2001 WTO accession: its eigenvector centrality more than tripled, its rank moved from 9th to 2nd, and a structural-break test identifies 2002 as the start of an acceleration in its centrality growth that lasted until the global financial crisis. Japan's centrality declined over the same period across all measures, while India and Vietnam rose rapidly from low levels.",
        "We also show that centrality measures and trade shares, while highly correlated in levels, diverge in informative ways. Changes in eigenvector and betweenness centrality are only moderately correlated with changes in trade shares, because they depend on the identity and connectedness of an economy's partners as well as on the volume of its trade. Value-added and gross-trade networks also produce different rankings: assembly-oriented economies such as Vietnam and, earlier, China appear considerably more central in gross terms than in value-added terms, while upstream and services-oriented economies such as Japan and India appear more central in value-added terms. The results suggest that network analysis provides useful complementary information to standard trade-share measures in understanding the structure and evolution of regional trade integration.",
        "Section 2 describes the background of trade integration in Asia. Section 3 reviews related literature and Section 4 introduces the centrality measures and what they capture. Section 5 describes the data and Section 6 the methodology. Section 7 presents the main results, Section 8 decomposes the sources of changes in centrality and Section 9 reports robustness checks. Section 10 discusses implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Background: Trade Integration in Asia",
      paragraphs: [
        "Asian trade integration since the 1980s has been driven to an unusual extent by the international fragmentation of production. Beginning with Japanese firms relocating labour-intensive stages of electronics and automobile production to Southeast Asia after the appreciation of the yen in the mid-1980s, a dense network of production linkages — often called Factory Asia — emerged in which components and intermediate goods cross borders several times before final assembly [14][20]. Korea and Taiwan developed from assembly locations into suppliers of sophisticated components such as semiconductors and displays, and a growing share of final assembly moved to China and, more recently, to Vietnam and other ASEAN economies.",
        "China's accession to the World Trade Organization in December 2001 was a defining event. Accession lowered tariffs on Chinese imports of intermediate inputs, removed uncertainty about China's access to foreign markets, and led to a surge in foreign direct investment in export-oriented manufacturing [21][22]. Chinese exports grew by more than 20 percent per year between 2002 and 2008, and China became the main assembly hub of Asian value chains, importing components from Japan, Korea, Taiwan and ASEAN and exporting final goods to the United States and Europe. The effects on Korean manufacturing and regional labour markets were substantial [27]. After the global financial crisis, China's growth shifted increasingly towards domestic demand, and the domestic content of its exports rose as Chinese firms moved into the production of components previously imported.",
        "Korea's integration followed a different path. Building on the heavy and chemical industries developed from the 1970s [26], Korean firms specialised in capital- and technology-intensive intermediate goods — semiconductors, displays, petrochemicals, steel — and in final goods such as automobiles and ships. Korea's imports of raw materials and its exports of intermediate goods to China grew rapidly after 2001, and from the 2010s Korean firms invested heavily in production in Vietnam. These developments suggest that Korea's position in the network should be shaped by its links with China and ASEAN as well as by its traditional ties with the United States and Japan, which is precisely what network measures can capture and trade shares cannot.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper builds on the literature applying network analysis to international trade. Serrano and Boguñá {6} documented the topological properties of the world trade web, including its scale-free degree distribution and high clustering. Kali and Reyes {9} showed that countries' positions in the trade network are associated with their growth and with their vulnerability to financial crises. Fagiolo, Reyes and Schiavo {7} studied the weighted world trade network and found that most links are weak while a few strong links account for a large share of trade, and De Benedictis and Tajoli {8} described the evolution of the network between 1950 and 2000, emphasising the role of the GATT and WTO in increasing its density. These studies use gross trade flows.",
        "A second strand measures trade in value added. Hummels, Ishii and Yi {12} introduced measures of vertical specialisation based on the import content of exports. Johnson and Noguera {10} constructed bilateral value-added trade from global input–output tables and showed that the ratio of value-added to gross exports varies widely across countries and has declined over time. Koopman, Wang and Wei {11} decomposed gross exports into value-added components, Timmer et al. {15} described the World Input–Output Database, and Los, Timmer and de Vries {16} showed that value chains have become increasingly global rather than regional. Johnson {13} summarises the implications of value-added trade for trade and macroeconomic research, and Antràs et al. {17} propose measures of countries' upstreamness in production.",
        "A third strand studies production networks and the propagation of shocks. Acemoglu et al. {18} show that idiosyncratic shocks to central sectors can generate aggregate fluctuations when the input–output network is asymmetric, and Carvalho and Tahbaz-Salehi {19} review this literature. Their insights apply equally to international networks: shocks to central economies propagate more widely. Our contribution is to combine these strands by computing several centrality measures on a value-added trade network over a long period, focusing on the evolving positions of Asian economies, and comparing the resulting picture with that given by gross trade and by conventional trade shares.",
      ],
    },
    {
      id: "framework",
      heading: "4. Centrality Measures and What They Capture",
      paragraphs: [
        "Different centrality measures formalise different notions of importance, and no single measure is best for all purposes [1][3][5]. We use four complementary measures, adapted to weighted directed networks. Strength, or weighted degree, is the sum of an economy's value-added exports and imports, expressed as a share of total world value-added trade [23]. It is the network analogue of a trade share and captures the volume of direct linkages. Closeness centrality measures how near an economy is to all others, defined as the inverse of the average shortest-path distance to all other nodes, where the length of each link is the inverse of its weight [4]. An economy with high closeness is linked by strong direct or indirect connections to all others, so that shocks originating in it reach the rest of the network quickly.",
        "Betweenness centrality measures the share of shortest paths between all other pairs of economies that pass through a given economy [1][4]. It captures an economy's role as an intermediary or bridge in the network, which in a value-added network corresponds to channelling value added between economies that are not strongly linked directly. Eigenvector centrality assigns each economy a score proportional to the sum of the scores of its partners, weighted by the strength of the links [2]. An economy is central in this sense if it is strongly linked to other central economies. It is closely related to the PageRank algorithm [24] and to the influence vectors that determine the propagation of shocks in production networks [18].",
        "These measures lead to different expectations about how integration into value chains affects an economy's position. If an economy increases its trade without changing its partners, strength rises roughly in proportion to its trade share, while the other measures change less. If it forms links with economies that are themselves central, or becomes an intermediary between previously separate clusters, its eigenvector or betweenness centrality may rise much more than its trade share. We therefore expect, first, that centrality measures will be highly correlated with trade shares in levels but less so in changes; second, that economies integrating into value chains through links to a rising hub — as Korea did with China — will see larger gains in eigenvector centrality than in strength; and third, that value-added centrality will be lower than gross centrality for assembly-oriented economies whose exports have high foreign content.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Constructing a value-added trade network requires multi-regional input–output (MRIO) tables that record the flows of intermediate and final goods and services between all sectors in all countries. We combine two sources to obtain a consistent annual series for 2000–2022.",
      ],
      subsections: [
        {
          id: "data-mrio",
          heading: "5.1 Input–output tables",
          paragraphs: [
            "For 2007–2022 we use the Asian Development Bank (ADB) MRIO database, which covers 62 economies plus a rest-of-the-world region and 35 sectors, and which provides particularly detailed coverage of Asian economies including Vietnam, Bangladesh and several Central Asian economies. The 2022 table is a provisional estimate based on national accounts and trade statistics. For 2000–2006 we use the OECD Inter-Country Input–Output tables, which underlie the Trade in Value Added database, mapped to the 62 ADB economies and 35 sectors. For 2000, both sources are available, and we use the overlap to verify that the two produce similar value-added trade flows; the correlation of bilateral flows between the two sources is 0.98, and centrality rankings in 2000 are nearly identical. To examine the period before China's WTO accession, we also construct a gross trade network for 1995–2001 from UN Comtrade bilateral trade data.",
          ],
        },
        {
          id: "data-vatrade",
          heading: "5.2 Value-added trade matrix",
          paragraphs: [
            "From each MRIO table we compute the bilateral value-added trade matrix following Johnson and Noguera {10}. Let V be the diagonal matrix of value-added coefficients, L the global Leontief inverse and F the matrix of final demand by destination. The matrix VLF gives the value added generated in each country-sector that is absorbed in final demand in each destination country. Summing over sectors yields a 62 × 62 matrix whose off-diagonal element (i, j) is the value added of economy i absorbed in economy j. We use this matrix as the weighted adjacency matrix of a directed network, excluding the rest-of-the-world region and self-loops. Because it traces value added to the country of final absorption, the matrix assigns trade to economies according to the domestic value added they contribute rather than the gross value of their exports [10][11].",
            "Table 1 summarises the evolution of the network. Total value-added trade among the 62 economies rose from USD 6.1 trillion in 2000 to USD 21.8 trillion in 2022, and the share of flows involving at least one Asian economy rose from 34 to 47 percent. The network is dense: almost all pairs of economies are linked by some value-added flow, so that binary measures based on the presence of links are uninformative and weighted measures are essential. The distribution of strength became less concentrated over time, with the Gini coefficient falling from 0.71 to 0.64, mainly because of the rise of China and other emerging economies relative to the United States, Japan and the large European economies.",
          ],
          table: {
            id: "tab-network",
            caption: "Table 1. Summary statistics of the value-added trade network, selected years",
            columns: ["Statistic", "2000", "2007", "2012", "2017", "2022"],
            rows: [
              ["Economies (nodes)", "62", "62", "62", "62", "62"],
              ["Total value-added trade (USD trillion)", "6.1", "11.9", "15.2", "16.4", "21.8"],
              ["Share involving an Asian economy (%)", "34", "39", "43", "45", "47"],
              ["Intra-Asian share of total (%)", "11", "14", "17", "18", "19"],
              ["Weighted density", "0.21", "0.24", "0.26", "0.26", "0.27"],
              ["Gini coefficient of strength", "0.71", "0.69", "0.66", "0.65", "0.64"],
              ["Value-added / gross exports (world, %)", "79", "74", "73", "74", "72"],
            ],
            note: "Value-added trade is the value added of economy i absorbed in final demand of economy j, computed from MRIO tables (OECD ICIO for 2000–2006, ADB MRIO for 2007–2022), excluding the rest of the world. Asian economies are the 23 economies of East, Southeast, South and Central Asia in the ADB MRIO. Weighted density is the average link weight divided by the maximum link weight. The 2022 table is provisional.",
          },
        },
      ],
    },
    {
      id: "methodology",
      heading: "6. Methodology",
      paragraphs: [],
      subsections: [
        {
          id: "method-measures",
          heading: "6.1 Computing centrality",
          paragraphs: [
            "Let W(t) be the value-added trade matrix in year t, with element w(ij) equal to value added from i absorbed in j. Strength is s(i) = Σ(j) [w(ij) + w(ji)] / 2Σ(ij) w(ij), so that strengths sum to one. For closeness and betweenness we symmetrise the network by summing flows in both directions and define the length of each link as the inverse of its weight relative to the mean weight, following Opsahl, Agneessens and Skvoretz {4}; shortest paths are computed with Dijkstra's algorithm. Eigenvector centrality is the leading eigenvector of the symmetrised weight matrix. Because the network is strongly connected, the Perron–Frobenius theorem guarantees a unique positive eigenvector [3]. We normalise closeness, betweenness and eigenvector centrality in each year by dividing by their maximum across economies, so that the most central economy has a score of one, and we also report ranks, which are invariant to normalisation.",
          ],
        },
        {
          id: "method-comparison",
          heading: "6.2 Comparisons and structural breaks",
          paragraphs: [
            "We compare centrality measures with each other and with trade shares using Spearman rank correlations in levels and in changes over 2000–2022. To compare value-added and gross networks, we compute the same measures on a gross trade network constructed from the same MRIO tables, in which link weights are bilateral gross exports of intermediate and final goods and services. Differences between the two rankings indicate where gross trade misrepresents an economy's position because of the foreign content of its exports.",
            "To test whether China's centrality accelerated after WTO accession, we estimate trend regressions of the log of each centrality measure for China, allowing for a break in the trend at an unknown date and applying the supremum Wald test of Andrews {25}. For the period before 2000 we use the gross trade network for 1995–2001, rescaled to match value-added centrality in the overlapping years 2000 and 2001. We also estimate a panel regression for Asian economies of log centrality on economy-specific trends, with an additional trend for China after 2001, to compare China's acceleration with the experience of other emerging Asian economies over the same period.",
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
          id: "results-levels",
          heading: "7.1 Centrality of Asian economies in 2000 and 2022",
          paragraphs: [
            "Table 2 reports the four centrality measures and the eigenvector rank for the United States, Germany and eleven Asian economies in 2000 and 2022. In 2000 the network was dominated by the United States, Germany and Japan, which ranked first to third on eigenvector centrality. China ranked ninth, with a strength of 3.9 percent of world value-added trade and an eigenvector centrality of 0.28 relative to the United States. By 2022 the picture had changed substantially. China's strength had risen to 13.6 percent, exceeding that of the United States, and it ranked first on closeness and betweenness and second on eigenvector centrality, with a score of 0.93. Japan's centrality had declined on all four measures, and its eigenvector rank fell from third to sixth.",
            "Korea's centrality rose across all four measures. Its strength increased from 1.9 to 2.6 percent of world value-added trade, its closeness from 0.66 to 0.77, its betweenness from 0.04 to 0.09 and its eigenvector centrality from 0.17 to 0.31, raising its eigenvector rank from 14th to 8th. Notably, its eigenvector centrality rose proportionally much more than its strength — by 82 percent compared with 37 percent — reflecting the fact that Korea's trade grew particularly fast with China, which became much more central itself. India and Vietnam also rose substantially from low levels, with Vietnam climbing from 38th to 19th place, while the centrality of Malaysia and Singapore changed relatively little.",
          ],
          table: {
            id: "tab-centrality",
            caption: "Table 2. Centrality of selected economies in the value-added trade network, 2000 and 2022",
            columns: ["Economy", "Strength (%) 2000 / 2022", "Closeness 2000 / 2022", "Betweenness 2000 / 2022", "Eigenvector 2000 / 2022", "Eigenvector rank 2000 / 2022"],
            rows: [
              ["United States", "15.8 / 11.9", "1.00 / 0.97", "1.00 / 0.71", "1.00 / 1.00", "1 / 1"],
              ["Germany", "8.6 / 7.0", "0.93 / 0.88", "0.48 / 0.37", "0.71 / 0.66", "2 / 3"],
              ["China", "3.9 / 13.6", "0.71 / 1.00", "0.12 / 1.00", "0.28 / 0.93", "9 / 2"],
              ["Japan", "7.4 / 4.1", "0.89 / 0.81", "0.36 / 0.18", "0.52 / 0.36", "3 / 6"],
              ["Korea", "1.9 / 2.6", "0.66 / 0.77", "0.04 / 0.09", "0.17 / 0.31", "14 / 8"],
              ["India", "0.8 / 2.3", "0.55 / 0.71", "0.01 / 0.06", "0.08 / 0.24", "24 / 10"],
              ["Taiwan", "1.6 / 1.7", "0.63 / 0.70", "0.02 / 0.05", "0.14 / 0.21", "16 / 12"],
              ["Singapore", "1.0 / 1.2", "0.61 / 0.68", "0.05 / 0.07", "0.10 / 0.15", "19 / 16"],
              ["Vietnam", "0.2 / 0.9", "0.41 / 0.62", "0.00 / 0.03", "0.03 / 0.13", "38 / 19"],
              ["Indonesia", "0.7 / 1.0", "0.52 / 0.63", "0.01 / 0.02", "0.07 / 0.11", "26 / 21"],
              ["Thailand", "0.7 / 0.9", "0.53 / 0.64", "0.01 / 0.02", "0.07 / 0.11", "27 / 22"],
              ["Malaysia", "0.8 / 0.8", "0.56 / 0.62", "0.02 / 0.02", "0.08 / 0.10", "23 / 24"],
              ["Philippines", "0.4 / 0.5", "0.49 / 0.56", "0.00 / 0.01", "0.05 / 0.07", "31 / 30"],
            ],
            note: "Strength is the economy's value-added exports plus imports as a share of twice total world value-added trade. Closeness, betweenness and eigenvector centrality are computed on the symmetrised weighted network and normalised by the maximum across the 62 economies in each year. Ranks are among 62 economies.",
          },
        },
        {
          id: "results-korea",
          heading: "7.2 The evolution of Korea's centrality",
          paragraphs: [
            "Figure 1 plots eigenvector centrality over 2000–2022 for China, Japan, Korea, India and Vietnam. Korea's centrality rose steadily throughout the period, from 0.17 in 2000 to 0.25 in 2010 and 0.31 in 2022. Unlike China's, its rise was not concentrated in particular years: the average annual increase was similar before and after the global financial crisis, and there was no visible reversal during the crisis or the pandemic. The other three measures show the same pattern of steady increase. The smooth path is consistent with gradual integration into global value chains through a widening range of intermediate-goods exports and an expanding set of partners, rather than with a one-off change in trade policy.",
            "The gradual rise of Korea's centrality contrasts with its trade share, which fluctuated considerably with exchange rates, commodity prices and the semiconductor cycle. Between 2011 and 2016, for instance, Korea's share of world gross exports was broadly flat, while its eigenvector centrality continued to rise as its value-added links with China and Vietnam deepened. This illustrates how centrality can reveal structural changes in an economy's position that are masked by cyclical movements in trade volumes.",
          ],
          figures: [
            {
              id: "fig-eigenvector",
              caption: "Figure 1. Eigenvector centrality of selected Asian economies in the value-added trade network, 2000–2022",
              kind: "line",
              xLabels: ["2000", "2002", "2004", "2006", "2008", "2010", "2012", "2014", "2016", "2018", "2020", "2022"],
              yLabel: "Eigenvector centrality (max = 1)",
              series: [
                { name: "China", values: [0.28, 0.34, 0.45, 0.56, 0.64, 0.70, 0.76, 0.82, 0.86, 0.89, 0.91, 0.93] },
                { name: "Japan", values: [0.52, 0.50, 0.48, 0.46, 0.44, 0.43, 0.41, 0.40, 0.39, 0.38, 0.37, 0.36] },
                { name: "Korea", values: [0.17, 0.18, 0.20, 0.22, 0.24, 0.25, 0.27, 0.28, 0.29, 0.30, 0.30, 0.31] },
                { name: "India", values: [0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.18, 0.20, 0.21, 0.22, 0.23, 0.24] },
                { name: "Vietnam", values: [0.03, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.10, 0.11, 0.12, 0.13, 0.13] },
              ],
              marker: 0,
              note: "Eigenvector centrality computed on the symmetrised value-added trade network of 62 economies and normalised by the maximum in each year (the United States in all years shown). The dashed line marks China's WTO accession in December 2001. Values for 2000–2006 are based on OECD ICIO tables and for 2007–2022 on ADB MRIO tables; 2022 is provisional.",
            },
          ],
        },
        {
          id: "results-china",
          heading: "7.3 China and WTO accession",
          paragraphs: [
            "China's centrality rose much more sharply than Korea's, and the timing of the rise points to WTO accession. Table 3 reports trend regressions for China's log centrality. Using the gross trade network for 1995–2001 and the value-added network thereafter, the growth rate of China's eigenvector centrality was 3.1 percent per year in 1995–2001, rising to 14.2 percent per year in 2002–2008 and falling to 3.6 percent per year in 2009–2022. The supremum Wald test of Andrews {25} rejects the null of a stable trend at the 1 percent level, with the estimated break date in 2002 for eigenvector centrality and strength and in 2003 for betweenness. In the panel of Asian economies, China's post-2001 trend exceeds the average trend of other emerging Asian economies by 9.8 percentage points per year for eigenvector centrality, and the difference is highly significant.",
            "The acceleration after 2001 is consistent with the evidence that WTO accession reduced policy uncertainty and input tariffs and spurred export growth [21][22]. It was particularly marked for betweenness, which rose from 0.12 in 2000 to 0.58 in 2008 and 1.00 by 2022: China became the main conduit through which value added from Japan, Korea, Taiwan and ASEAN reached final consumers in the United States and Europe. After the global financial crisis, the growth of China's centrality slowed but remained positive, driven increasingly by its own final demand, which absorbed a rising share of the value added exported by other Asian economies.",
          ],
          table: {
            id: "tab-wto",
            caption: "Table 3. Trend growth and structural breaks in China's centrality",
            columns: ["Measure", "Trend 1995–2001 (% p.a.)", "Trend 2002–2008 (% p.a.)", "Trend 2009–2022 (% p.a.)", "Sup-Wald statistic", "Estimated break", "China × post-2001 (panel)"],
            rows: [
              ["Strength", "4.8", "12.6", "4.2", "31.7***", "2002", "8.1*** (1.9)"],
              ["Closeness", "1.2", "3.9", "1.6", "18.4***", "2002", "2.4*** (0.7)"],
              ["Betweenness", "6.3", "23.7", "7.1", "26.9***", "2003", "15.6*** (4.2)"],
              ["Eigenvector", "3.1", "14.2", "3.6", "34.2***", "2002", "9.8*** (2.3)"],
            ],
            note: "Trend growth rates from regressions of log centrality on piecewise linear trends. 1995–2001 values use the gross trade network from UN Comtrade, rescaled to value-added centrality in the overlapping years. The sup-Wald statistic tests for a single break at an unknown date with 15 percent trimming (Andrews, 1993). The last column reports the coefficient (in percentage points per year) on a China-specific trend after 2001 in a panel of 14 emerging Asian economies with economy-specific trends, with standard errors clustered by economy in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
      ],
    },
    {
      id: "decomposition",
      heading: "8. Sources of Changing Centrality",
      paragraphs: [
        "What lies behind these changes? We examine three questions: how the different measures relate to each other and to trade shares; how value-added and gross networks differ; and which sectors and partners account for Korea's rise.",
      ],
      subsections: [
        {
          id: "decomp-correlations",
          heading: "8.1 Centrality measures and trade shares",
          paragraphs: [
            "Table 4 reports Spearman rank correlations between the four measures and the share of world gross trade, in levels in 2022 and in changes over 2000–2022. In levels, all measures are highly correlated with each other and with trade shares, with correlations between 0.71 and 0.97: large economies with large trade flows tend to be central on every measure. In changes, however, correlations are considerably lower. The correlation between the change in the trade share and the change in eigenvector centrality is 0.62, and that with the change in betweenness is only 0.48. Changes in centrality therefore contain substantial information that is not captured by changes in trade shares.",
            "The divergence arises because eigenvector and betweenness centrality depend on the network position of an economy's partners. An economy that increases its trade with a rising hub gains more centrality than one that increases its trade by the same amount with a peripheral partner. Korea and Vietnam are examples of the former, gaining more eigenvector centrality than their trade shares alone would suggest, while several commodity exporters whose trade shares rose with commodity prices in the 2000s saw much smaller gains in centrality because their exports were concentrated on a small number of partners.",
          ],
          table: {
            id: "tab-correlations",
            caption: "Table 4. Spearman rank correlations between centrality measures and trade shares",
            columns: ["", "Strength", "Closeness", "Betweenness", "Eigenvector", "Gross trade share"],
            rows: [
              ["A. Levels, 2022", "", "", "", "", ""],
              ["Strength", "1.00", "", "", "", ""],
              ["Closeness", "0.88", "1.00", "", "", ""],
              ["Betweenness", "0.79", "0.71", "1.00", "", ""],
              ["Eigenvector", "0.93", "0.86", "0.74", "1.00", ""],
              ["Gross trade share", "0.97", "0.85", "0.77", "0.91", "1.00"],
              ["B. Changes, 2000–2022", "", "", "", "", ""],
              ["Strength", "1.00", "", "", "", ""],
              ["Closeness", "0.64", "1.00", "", "", ""],
              ["Betweenness", "0.52", "0.47", "1.00", "", ""],
              ["Eigenvector", "0.71", "0.68", "0.55", "1.00", ""],
              ["Gross trade share", "0.83", "0.57", "0.48", "0.62", "1.00"],
            ],
            note: "Spearman rank correlations across 62 economies. Panel A uses 2022 levels; Panel B uses changes between 2000 and 2022. Gross trade share is the economy's share of world gross exports plus imports of goods and services.",
          },
        },
        {
          id: "decomp-gross",
          heading: "8.2 Value-added versus gross trade networks",
          paragraphs: [
            "Table 5 compares eigenvector ranks in the value-added network with those in the gross trade network. Differences are systematic. Economies that specialise in assembly and whose exports have high foreign content — Vietnam, China in 2000, Singapore and to a lesser extent Korea and Taiwan — rank higher in the gross network than in the value-added network, because gross trade attributes to them the value of imported components embodied in their exports [11][13]. In 2022 Vietnam ranked 13th in the gross network but only 19th in value-added terms. Conversely, Japan and India rank higher in value-added terms: Japan because it supplies high-value components that are embodied in other countries' exports, and India because its exports are intensive in services with low import content [17].",
            "The gap between China's gross and value-added ranks narrowed over time, from two places in 2000 to one place in 2022, consistent with the rising domestic content of Chinese exports. For Korea, the gap of two places in 2022 reflects the substantial import content of its exports, particularly of energy and materials. These comparisons show that gross trade networks overstate the centrality of downstream assembly economies and understate that of upstream suppliers, and that value-added networks give a more accurate picture of where value is created and absorbed.",
          ],
          table: {
            id: "tab-gross-va",
            caption: "Table 5. Eigenvector rank in value-added and gross trade networks",
            columns: ["Economy", "Gross 2000", "Value added 2000", "Gross 2022", "Value added 2022", "Foreign content of exports 2022 (%)"],
            rows: [
              ["China", "7", "9", "1", "2", "16"],
              ["Japan", "3", "3", "7", "6", "18"],
              ["Korea", "11", "14", "6", "8", "33"],
              ["India", "25", "24", "12", "10", "19"],
              ["Taiwan", "12", "16", "9", "12", "38"],
              ["Singapore", "10", "19", "11", "16", "42"],
              ["Vietnam", "35", "38", "13", "19", "47"],
              ["Malaysia", "18", "23", "20", "24", "39"],
              ["Thailand", "24", "27", "18", "22", "34"],
            ],
            note: "Eigenvector ranks among 62 economies. The gross network uses bilateral gross exports of goods and services from the same MRIO tables. Foreign content of exports is the share of foreign value added in gross exports, computed from the 2022 ADB MRIO table following Koopman, Wang and Wei (2014).",
          },
        },
        {
          id: "decomp-korea",
          heading: "8.3 Sectors and partners behind Korea's rise",
          paragraphs: [
            "Figure 2 decomposes the increase in Korea's strength between 2000 and 2022 by sector of origin of value added and compares it with China's. Electronics and electrical equipment, dominated by semiconductors and displays, account for 41 percent of the increase in Korea's strength, followed by transport equipment (18 percent), chemicals and petroleum products (16 percent), business services (11 percent) and machinery (9 percent). China's increase is more broadly based, with a larger contribution from services and from other manufacturing, consistent with its broader industrial structure.",
            "By partner, China accounts for 38 percent of the increase in Korea's value-added trade, ASEAN economies for 22 percent — of which Vietnam alone accounts for 14 percent — and the United States for 15 percent. The contribution of Japan was negative, as Korea's value-added trade with Japan grew more slowly than total trade. These partner shifts explain why Korea's eigenvector centrality rose more than its strength: an increasing share of its value-added trade was with China, whose own centrality was rising sharply, and with fast-growing ASEAN economies that were becoming better connected to the rest of the network.",
          ],
          figures: [
            {
              id: "fig-sectors",
              caption: "Figure 2. Contributions of sectors to the increase in strength, Korea and China, 2000–2022",
              kind: "bar",
              xLabels: ["Electronics", "Transport equipment", "Chemicals and petroleum", "Machinery", "Business services", "Other"],
              yLabel: "Share of increase in strength (%)",
              series: [
                { name: "Korea", values: [41, 18, 16, 9, 11, 5] },
                { name: "China", values: [29, 8, 12, 14, 17, 20] },
              ],
              note: "Contribution of each sector of origin of value added to the change in the economy's value-added exports plus imports between 2000 and 2022, as a percentage of the total change. Sectors are aggregated from the 35 MRIO sectors.",
            },
          ],
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 examines whether our main findings depend on methodological choices. For each alternative we report Korea's and China's eigenvector ranks in 2000 and 2022 and the correlation of the resulting centrality series with our baseline across all economies and years. Using the directed rather than the symmetrised network — computing eigenvector centrality from value-added exports only, which emphasises an economy's role as a source of value added — leaves Korea's rise essentially unchanged and moves China's 2022 rank to first. Retaining only the strongest links that account for 90 percent of total flows (a network backbone), defining link lengths for closeness and betweenness as the negative logarithm of normalised weights, or using PageRank instead of eigenvector centrality also gives very similar results [24].",
        "The results are also robust to the choice of data. Using OECD tables throughout, for the years in which they are available, gives the same rankings for Korea and China in 2000 and similar rankings in 2018, the latest year in the OECD tables we use. Excluding the provisional 2022 table and ending the analysis in 2021 does not change our conclusions. Finally, deflating flows to constant prices or normalising weights by the GDP of the partner economies changes the levels of the measures but not the trends we emphasise: Korea's centrality rises steadily on all measures, China's rises sharply after 2001, and Japan's declines.",
      ],
      table: {
        id: "tab-robustness",
        caption: "Table 6. Robustness of eigenvector centrality rankings",
        columns: ["Specification", "Korea 2000 / 2022", "China 2000 / 2022", "Japan 2000 / 2022", "Correlation with baseline"],
        rows: [
          ["Baseline (symmetrised value-added network)", "14 / 8", "9 / 2", "3 / 6", "1.00"],
          ["Directed network, value-added exports", "13 / 8", "8 / 1", "3 / 5", "0.96"],
          ["Backbone: links covering 90% of flows", "14 / 9", "9 / 2", "3 / 6", "0.98"],
          ["PageRank (damping 0.85)", "15 / 8", "10 / 2", "3 / 6", "0.97"],
          ["Log-distance for path-based measures", "14 / 8", "9 / 2", "3 / 6", "0.99"],
          ["OECD ICIO tables only (to 2018)", "14 / 9", "9 / 2", "3 / 6", "0.97"],
          ["Ending in 2021 (excluding provisional 2022)", "14 / 8", "9 / 2", "3 / 6", "1.00"],
          ["Constant-price flows", "14 / 8", "9 / 2", "3 / 6", "0.99"],
          ["Weights normalised by partner GDP", "12 / 7", "11 / 3", "4 / 6", "0.91"],
        ],
        note: "Eigenvector ranks among 62 economies. For the OECD-only specification the final year is 2018. The last column reports the Pearson correlation between the alternative and baseline eigenvector centrality across all economies and years.",
      },
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results have several implications for understanding regional trade integration. First, the increase in Korea's centrality across all measures indicates that its integration into global value chains has strengthened its position in the network, not merely the volume of its trade. A more central position implies greater influence on the network but also greater exposure to shocks that propagate through it [18][19]. The concentration of Korea's gains in electronics and in links with China suggests that its position depends heavily on a narrow set of sectors and on one partner, which may matter for the resilience of its trade to sector-specific shocks, such as a downturn in the semiconductor cycle, or to geopolitical tensions affecting China.",
        "Second, the dramatic rise of China's centrality after WTO accession illustrates how a single policy event can reshape a regional network. China's emergence as the main hub of Asian value-added trade changed the positions of all other Asian economies: those that formed strong links with China, such as Korea and Taiwan, became more central, while Japan, whose own hub role was partly displaced, became less so. Policymakers assessing regional trade agreements, such as the Regional Comprehensive Economic Partnership that entered into force in 2022, could use network measures to anticipate how agreements may shift the positions of member and non-member economies.",
        "Third, the differences between value-added and gross-trade measures, and between centrality and trade shares, caution against relying on any single indicator. Trade shares capture volumes, gross networks overstate the role of assembly hubs, and different centrality measures emphasise different aspects of position. A combination of indicators, computed on value-added data, provides a richer and more reliable picture of how economies are connected [13][14][16]. Statistical agencies and international organisations that already publish value-added trade data could readily compute and publish such indicators.",
        "Our analysis has limitations. Value-added trade matrices rely on MRIO tables that are themselves constructed from national input–output tables, trade statistics and assumptions about the destination of imports, which introduces measurement error, particularly for recent provisional years. Centrality measures are descriptive: they summarise network positions but do not identify the causal effects of policies or the welfare consequences of changing positions. Linking centrality to outcomes such as output volatility or the transmission of shocks is an important task for future work.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We have computed and compared four network-centrality measures — strength, closeness, betweenness and eigenvector centrality — for Asian economies in a value-added trade network of 62 economies over 2000–2022. Korea's centrality has risen steadily across all measures, consistent with its integration into global value chains, and its eigenvector rank improved from 14th to 8th. China's centrality has risen more sharply, particularly after its 2001 WTO accession, with a structural break in 2002 and a rise in eigenvector rank from 9th to 2nd. Japan's centrality has declined, while India and Vietnam have risen rapidly from low levels.",
        "Centrality measures are highly correlated with trade shares in levels but much less so in changes, and value-added networks give systematically different rankings from gross trade networks. The results suggest that network analysis provides useful complementary information to standard trade-share measures in understanding the structure and evolution of regional trade integration. Extending the analysis to sector-level networks, to the propagation of specific shocks such as the pandemic-era supply disruptions, and to the effects of recent regional trade agreements are natural next steps.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Construction of the Network and Centrality Measures",
      paragraphs: [
        "Bridging the input–output sources. The OECD ICIO tables for 2000–2006 cover 66 economies and 45 industries. We aggregate industries to the 35 ADB MRIO sectors using a published concordance, and map economies to the 62 ADB economies, allocating the OECD rest-of-the-world region to the ADB economies not separately identified (mainly in Central Asia and the Pacific) in proportion to their gross trade in UN Comtrade. In the overlap year 2000, the correlation between bilateral value-added flows from the two sources is 0.98, and the rank correlation of eigenvector centrality is 0.99.",
        "Value-added trade. Value-added coefficients are value added divided by gross output for each country-sector. The global Leontief inverse is computed for each year from the full intercountry input–output matrix, including the rest-of-the-world region, which is then excluded from the network. Flows are measured in current US dollars; Section 9 reports results with flows deflated by the US GDP deflator.",
        "Path-based measures. For closeness and betweenness, the length of the link between i and j is d(ij) = w̄ / w(ij), where w(ij) is the symmetrised flow and w̄ its mean across all pairs. Closeness is the inverse of the average shortest-path length to all other economies. Betweenness counts, for each pair of other economies, the fraction of shortest paths that pass through the economy, summed over pairs [1][4]. Because the network is dense and weights are continuous, shortest paths are almost always unique.",
        "Eigenvector and PageRank. Eigenvector centrality is computed by power iteration on the symmetrised weight matrix until the change in the normalised vector is below 10⁻¹⁰. PageRank uses the column-normalised directed matrix with a damping factor of 0.85 [24]. The 1995–2001 gross trade network used in Section 7.3 is built from UN Comtrade bilateral merchandise trade, mirrored where reporter data are missing, and supplemented with services trade estimates; its centrality series is rescaled so that its average over 2000–2001 equals that of the value-added series.",
      ],
    },
  ],
};
