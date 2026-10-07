// Vol. 27, No. 1 (January 2022) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2022-v27-i1-04",
  title: "How Many Zombie Firms Are There in Korea?",
  authors: [{ name: "Roberto Rossi", corresponding: true }, { name: "Hyun-Sung Lim" }],
  abstract:
    "We measure the prevalence of 'zombie' firms — older firms unable to cover interest payments from operating profits for three consecutive years — among Korean listed and externally audited companies. The zombie share rose from 9.6 percent of firms in 2012 to 14.9 percent in 2020, and zombies accounted for 11.3 percent of corporate assets in 2020. Industries with a higher zombie share exhibit lower investment and employment growth among healthy firms, consistent with congestion effects. The pandemic and accompanying credit support may further delay the exit of unviable firms.",
  editorialNote:
    "Roberto Rossi and Hyun-Sung Lim document a rise in the share of zombie firms among Korean listed and externally audited companies from 9.6 percent in 2012 to 14.9 percent in 2020, when zombies held 11.3 percent of corporate assets, and find that a 10 percentage point higher industry zombie share is associated with 1.2 percentage points lower investment rates among healthy firms.",
  keywords: ["Zombie firms", "Corporate debt", "Productivity", "Credit allocation", "Korea"],
  jelCodes: ["G33", "D24", "G21"],
  pages: "93–104",
  volume: 27,
  issue: 1,
  year: 2022,
  received: "2021-07-05",
  accepted: "2021-10-18",
  published: "2022-01-15",
  publishedOnline: "2022-01-05",
  citations: 14,
  downloads: 1890,
  pdfSize: "0.78 MB",
  type: "Research Article",
  acknowledgments: "We thank the handling editor and two anonymous referees for constructive comments, and participants at a Hanyang University workshop on corporate restructuring for helpful discussions. All errors are our own.",
  dataAvailability: "Firm financial statements are available from commercial data providers. Code, the zombie classification for each firm-year and industry-level aggregates are available from the corresponding author.",
  refs: [
    /* 1 */ "Caballero, R. J., Hoshi, T., & Kashyap, A. K. (2008). Zombie lending and depressed restructuring in Japan. American Economic Review, 98(5), 1943–1977.",
    /* 2 */ "Banerjee, R., & Hofmann, B. (2018). The rise of zombie firms: Causes and consequences. BIS Quarterly Review, September, 67–78.",
    /* 3 */ "Adalet McGowan, M., Andrews, D., & Millot, V. (2018). The walking dead? Zombie firms and productivity performance in OECD countries. Economic Policy, 33(96), 685–736.",
    /* 4 */ "Acharya, V. V., Eisert, T., Eufinger, C., & Hirsch, C. (2019). Whatever it takes: The real effects of unconventional monetary policy. Review of Financial Studies, 32(9), 3366–3411.",
    /* 5 */ "Storz, M., Koetter, M., Setzer, R., & Westphal, A. (2017). Do we want these two to tango? On zombie firms and stressed banks in Europe. ECB Working Paper No. 2104. Frankfurt: European Central Bank.",
    /* 6 */ "Peek, J., & Rosengren, E. S. (2005). Unnatural selection: Perverse incentives and the misallocation of credit in Japan. American Economic Review, 95(4), 1144–1166.",
    /* 7 */ "Hoshi, T., & Kashyap, A. K. (2004). Japan's financial crisis and economic stagnation. Journal of Economic Perspectives, 18(1), 3–26.",
    /* 8 */ "Fukuda, S., & Nakamura, J. (2011). Why did 'zombie' firms recover in Japan? The World Economy, 34(7), 1124–1137.",
    /* 9 */ "Andrews, D., & Petroulakis, F. (2019). Breaking the shackles: Zombie firms, weak banks and depressed restructuring in Europe. ECB Working Paper No. 2240. Frankfurt: European Central Bank.",
    /* 10 */ "Banerjee, R., & Hofmann, B. (2020). Corporate zombies: Anatomy and life cycle. BIS Working Papers No. 882. Basel: Bank for International Settlements.",
    /* 11 */ "Hsieh, C.-T., & Klenow, P. J. (2009). Misallocation and manufacturing TFP in China and India. Quarterly Journal of Economics, 124(4), 1403–1448.",
    /* 12 */ "Foster, L., Haltiwanger, J., & Krizan, C. J. (2001). Aggregate productivity growth: Lessons from microeconomic evidence. In C. R. Hulten, E. R. Dean, & M. J. Harper (Eds.), New Developments in Productivity Analysis (pp. 303–372). Chicago: University of Chicago Press.",
    /* 13 */ "Gopinath, G., Kalemli-Özcan, Ş., Karabarbounis, L., & Villegas-Sanchez, C. (2017). Capital allocation and productivity in South Europe. Quarterly Journal of Economics, 132(4), 1915–1967.",
    /* 14 */ "Caballero, R. J., & Hammour, M. L. (1994). The cleansing effect of recessions. American Economic Review, 84(5), 1350–1368.",
    /* 15 */ "Gourinchas, P.-O., Kalemli-Özcan, Ṣ., Penciakova, V., & Sander, N. (2020). COVID-19 and SME failures. NBER Working Paper No. 27877. Cambridge, MA: National Bureau of Economic Research.",
    /* 16 */ "Giannetti, M., & Simonov, A. (2013). On the real effects of bank bailouts: Micro evidence from Japan. American Economic Journal: Macroeconomics, 5(1), 135–167.",
    /* 17 */ "Imai, K. (2016). A panel study of zombie SMEs in Japan: Identification, borrowing and investment behavior. Journal of the Japanese and International Economies, 39, 91–107.",
    /* 18 */ "Kwon, H. U., Narita, F., & Narita, M. (2015). Resource reallocation and zombie lending in Japan in the 1990s. Review of Economic Dynamics, 18(4), 709–732.",
    /* 19 */ "Restuccia, D., & Rogerson, R. (2008). Policy distortions and aggregate productivity with heterogeneous establishments. Review of Economic Dynamics, 11(4), 707–720.",
    /* 20 */ "Bartelsman, E., Haltiwanger, J., & Scarpetta, S. (2013). Cross-country differences in productivity: The role of allocation and selection. American Economic Review, 103(1), 305–334.",
    /* 21 */ "Tan, Y., Huang, Y., & Woo, W. T. (2016). Zombie firms and the crowding-out of private investment in China. Asian Economic Papers, 15(3), 32–55.",
    /* 22 */ "Schivardi, F., Sette, E., & Tabellini, G. (2020). Identifying the real effects of zombie lending. Review of Corporate Finance Studies, 9(3), 569–592.",
    /* 23 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 24 */ "Cameron, A. C., Gelbach, J. B., & Miller, D. L. (2008). Bootstrap-based improvements for inference with clustered errors. Review of Economics and Statistics, 90(3), 414–427.",
    /* 25 */ "Acharya, V. V., Crosignani, M., Eisert, T., & Eufinger, C. (2020). Zombie credit and (dis-)inflation: Evidence from Europe. NBER Working Paper No. 27158. Cambridge, MA: National Bureau of Economic Research.",
    /* 26 */ "Hoshi, T. (2006). Economics of the living dead. Japanese Economic Review, 57(1), 30–49.",
    /* 27 */ "Didier, T., Huneeus, F., Larrain, M., & Schmukler, S. L. (2021). Financing firms in hibernation during the COVID-19 pandemic. Journal of Financial Stability, 53, 100837.",
    /* 28 */ "Rajan, R. G., & Zingales, L. (1998). Financial dependence and growth. American Economic Review, 88(3), 559–586.",
    /* 29 */ { jer: "2021-v26-i1-01" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Zombie firms — unviable firms kept alive by continued credit — were blamed for Japan's prolonged stagnation in the 1990s, when banks with weak balance sheets rolled over loans to insolvent borrowers rather than recognise losses [1][6][7]. Their prevalence has risen across advanced economies since the global financial crisis [2][10], with evidence that they depress investment and productivity growth of healthy competitors [3] and that weak banks and accommodative monetary policy can sustain them [4][5][9]. By locking up capital and labour in low-productivity uses, zombies may weaken the reallocation that drives aggregate productivity growth [11][12][13] and blunt the cleansing effect of recessions [14].",
        "Korea has not been studied systematically in this literature, although concerns about marginal firms in shipbuilding, shipping and other industries have featured prominently in policy debates since the mid-2010s. The question has become more pressing since 2020. To protect firms from the pandemic, the government and public financial institutions expanded credit guarantees, deferred loan repayments and interest payments for small and medium-sized enterprises, and supported employment through retention subsidies [29]. These measures helped viable firms survive a temporary shock, but they also make it harder to identify — and easier to sustain — firms whose problems predate the pandemic [15][27].",
        "We provide comparable measurements for Korea, document trends by industry and size, and estimate whether a higher zombie share is associated with weaker performance of healthy firms in the same industry. Using financial statements of about 24,000 listed and externally audited non-financial firms for 2010–2020, we find that the zombie share rose from 9.6 percent in 2012 to 14.9 percent in 2020, and that zombies accounted for 11.3 percent of corporate assets and 10.1 percent of employment in 2020. Industries with more zombies saw lower investment and employment growth among non-zombie firms: a 10 percentage point higher zombie share of assets is associated with 1.2 percentage points lower investment rates and 0.8 percentage points lower employment growth.",
        "Three further findings help to interpret these results. First, zombies pay lower implied interest rates than healthy firms, and a majority continue to receive new bank loans, consistent with the evergreening of credit documented in Japan and Europe [1][6][22]. Second, zombie status is persistent but not permanent: of the firms classified as zombies in 2015, about a quarter had recovered three years later and about a third had exited, with exit least likely for firms affiliated with business groups and for those with large shares of guaranteed debt. Third, congestion operates mainly through product and credit markets rather than through wages: healthy firms in zombie-heavy industries have lower margins and slower credit growth, and the investment effect is concentrated in industries that depend on external finance [28].",
        "Our paper contributes to the international evidence on zombie firms [2][3][10] by extending it to an economy with a distinctive combination of large business groups, extensive public credit guarantees and a bank-dominated financial system. It also relates to research on misallocation and aggregate productivity [11][19][20], since zombie congestion is one channel through which credit frictions can lower productivity, and to the debate on the exit of firms after pandemic support is withdrawn [15][27].",
        "Section 2 describes Korea's corporate restructuring framework. Section 3 reviews related literature and Section 4 sets out a conceptual framework and hypotheses. Section 5 describes the data and the zombie definition, and Section 6 the empirical strategy. Section 7 reports the prevalence, dynamics and congestion effects of zombie firms, Section 8 examines mechanisms and heterogeneity, and Section 9 reports robustness checks. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korea's framework for dealing with distressed firms was shaped by the 1997–1998 financial crisis, when the failure of several highly leveraged business groups forced large-scale corporate restructuring. Two procedures have coexisted since then. Out-of-court workouts, coordinated by creditor banks under the Corporate Restructuring Promotion Act, allow creditors holding a qualified majority of claims to agree on debt rescheduling, debt-equity swaps and operational restructuring. Court-led rehabilitation under the Debtor Rehabilitation and Bankruptcy Act, which unified the previous insolvency laws in 2006, provides a stay on creditor claims and a court-supervised plan, or liquidation if the firm's going-concern value is below its liquidation value.",
        "Creditor banks conduct annual credit-risk assessments of large and medium-sized borrowers and classify firms into risk grades. Firms in the weakest grades are expected to enter a workout or court rehabilitation, but in practice classification depends on bank judgement and, critics argue, on concerns about recognising losses and about local employment. Two large episodes illustrate the stakes. In 2015–2017, as global shipbuilding and shipping markets collapsed, policy banks provided large support packages to a major shipbuilder, while one of the world's largest container lines was allowed to fail. Both cases were widely debated as tests of whether unviable firms would be allowed to exit.",
        "Public credit guarantees play an unusually large role in Korea. Two public guarantee institutions provide guarantees on bank loans to small and medium-sized enterprises, and the outstanding stock of guarantees is large relative to GDP by international standards. Guarantees lower the cost of credit to borrowers and transfer most of the default risk from banks to the public sector, which reduces banks' incentives to monitor and to recognise losses. Guarantees are often renewed for many years, so that firms with persistently weak profitability can continue to roll over guaranteed loans.",
        "The pandemic added a further layer of support. From April 2020, financial institutions deferred principal repayments and interest payments on loans to small and medium-sized firms and small businesses affected by the pandemic, a programme that was extended several times through 2021. Guarantee programmes were expanded, and policy banks provided emergency liquidity to large firms in hard-hit industries such as aviation. These measures likely prevented a wave of inefficient failures [15], but deferred interest payments are not recorded as interest expenses in the year they are deferred, which reduces measured interest burdens and may lead accounting-based measures to understate the zombie share in 2020.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "The modern literature on zombie firms began with Japan. Peek and Rosengren {6} show that Japanese banks with weak capital positions increased lending to the weakest firms in the 1990s, consistent with incentives to avoid recognising losses, and Hoshi and Kashyap {7} describe how such forbearance contributed to the country's stagnation. Caballero, Hoshi and Kashyap {1} identify zombies as firms receiving credit at interest rates below those paid by the most creditworthy borrowers and show that industries with more zombies had lower job creation, investment and productivity among healthy firms. Hoshi {26} documents the characteristics of Japanese zombies, Kwon, Narita and Narita {18} estimate the productivity losses from resource misallocation they caused, and Giannetti and Simonov {16} show that bank recapitalisations that were too small encouraged further evergreening. Fukuda and Nakamura {8} and Imai {17} study how zombie firms recovered and how they borrowed and invested.",
        "A second wave of studies documents the rise of zombies in advanced economies after the global financial crisis. Banerjee and Hofmann {2} show that the share of zombies among listed firms in 14 advanced economies rose from about 2 percent in the late 1980s to about 12 percent in 2016, and link the increase to lower interest rates; in later work they document the life cycle of zombies and their tendency to relapse after recovery [10]. Adalet McGowan, Andrews and Millot {3} find that a higher industry zombie share is associated with lower investment and employment growth of healthy firms in OECD countries. Storz et al. {5} and Andrews and Petroulakis {9} link zombies to weak banks in Europe, and Acharya et al. {4} show that the European Central Bank's Outright Monetary Transactions programme allowed weakly capitalised banks to extend credit to zombies. Acharya et al. {25} argue that zombie credit also lowers inflation by sustaining excess capacity, and Schivardi, Sette and Tabellini {22} caution that the real effects of zombie lending in Italy may be smaller than cross-industry regressions suggest. Tan, Huang and Woo {21} find that zombies crowd out private investment in China.",
        "More broadly, zombie congestion is one form of the misallocation of resources across firms emphasised by Restuccia and Rogerson {19}, Hsieh and Klenow {11} and Bartelsman, Haltiwanger and Scarpetta {20}. Reallocation from less to more productive firms accounts for a large share of productivity growth [12], and credit frictions can direct capital towards firms that are not the most productive [13]. Recessions can cleanse the economy of unproductive firms [14], but forbearance and subsidised credit may weaken this effect. The pandemic revived debate on the balance between preventing inefficient failures and delaying necessary exit [15][27].",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider an industry in which firms produce differentiated goods and compete for customers, credit and workers. A firm that would exit in the absence of subsidised credit continues to operate if its creditors roll over its loans or if public guarantees absorb the expected losses. As in Caballero, Hoshi and Kashyap {1}, such zombie firms keep producing, which holds down output prices and market shares for other firms, and they may absorb credit that would otherwise flow to healthy firms. The resulting lower expected profitability raises the productivity threshold that a healthy firm or potential entrant must reach to justify investment and hiring.",
        "Three channels are possible. In the product market, zombies depress prices and sales of competitors. In the credit market, banks with exposures to zombies may have less capacity or appetite to lend to healthy firms, particularly when bank capital is scarce [5][9]. In the labour market, zombies may hold on to workers and push up wages, although this channel is likely to be weak when labour markets are slack. Each channel predicts lower investment and employment growth among healthy firms in zombie-heavy industries, but they differ in their implications for margins, credit growth and wages.",
        "We test four hypotheses. Hypothesis 1: zombie prevalence rises after industry-specific shocks and where public credit support is widespread, and zombies pay lower interest rates than their fundamentals would justify. Hypothesis 2: a higher industry zombie share is associated with lower investment and employment growth of non-zombie firms, with larger effects for young firms, which compete most directly with incumbents for market share. Hypothesis 3: if congestion operates through product markets, healthy firms in zombie-heavy industries should have lower margins and sales growth; if it operates through credit markets, they should have slower credit growth, and effects should be larger in industries more dependent on external finance [28]. Hypothesis 4: zombie firms that restructure — by reducing debt and employment — are more likely to recover, while firms with strong external support are less likely to exit.",
      ],
    },
    {
      id: "data",
      heading: "5. Data and Definition",
      paragraphs: [],
      subsections: [
        {
          id: "data-sample",
          heading: "5.1 Firm Data",
          paragraphs: [
            "We use annual financial statements of about 24,000 listed and externally audited non-financial firms for 2010–2020, covering the large majority of corporate assets. Firms are required to undergo an external audit if they exceed thresholds for assets, sales or employment, or if they are listed, so the sample covers almost all large and medium-sized firms and a substantial number of smaller ones. We exclude firms in finance, insurance, real estate and public administration, and firm-years with missing or non-positive assets or sales. The data record balance-sheet and income-statement items, the date of incorporation, the number of employees, business group affiliation and two-digit industry. Firms that stop filing are classified by the reason for exit — liquidation, merger or delisting — using public disclosures and court records.",
          ],
        },
        {
          id: "data-definition",
          heading: "5.2 Defining Zombie Firms",
          paragraphs: [
            "Following Banerjee and Hofmann {2}, we define a zombie as a firm at least ten years old whose interest coverage ratio — operating profit divided by interest expenses — has been below one for three consecutive years. The age criterion distinguishes zombies from young firms that are temporarily unprofitable while they grow, and the three-year requirement excludes firms suffering a temporary shock. Because the definition requires three years of data, we report zombie shares from 2012.",
            "Several alternative definitions have been proposed. Some studies classify firms as zombies if they receive subsidised credit, measured by interest rates below those paid by the most creditworthy borrowers [1], while others combine low interest coverage with low expected growth, measured by Tobin's q [2], or with weak profitability over longer periods [3]. Our definition, based on interest coverage and age, is simple, uses only accounting data and is directly comparable to cross-country estimates [2][10]. We verify below that the trends we document are robust to alternative definitions, including one that requires the firm to have below-median Tobin's q in its industry, which can be applied only to listed firms.",
          ],
        },
        {
          id: "data-descriptive",
          heading: "5.3 Characteristics of Zombie Firms",
          paragraphs: [
            "Table 1 compares zombie and non-zombie firms in 2019. Zombies are older, more leveraged and less productive, with labour productivity about 40 percent lower than that of non-zombies in the same industry. They invest less and are more likely to be in manufacturing industries facing structural decline, such as shipbuilding and machinery, and in accommodation and food services. Despite their weak profitability, 62 percent of zombies received new bank loans in 2019, compared with 71 percent of non-zombies, consistent with continued access to credit.",
            "Strikingly, the implied interest rate paid by zombies in Table 1 is lower than that paid by healthy firms, a pattern that Caballero, Hoshi and Kashyap {1} interpret as evidence of subsidised credit. Some caution is warranted, since part of the gap reflects guarantees and policy loans targeted at distressed industries rather than forbearance by banks, but the pattern is consistent with the evergreening of loans documented in Japan [6] and Europe [5][9], and with Hypothesis 1. Zombies hold a larger share of their debt in guaranteed loans and policy loans than non-zombies, and the gap in implied interest rates disappears for loans without guarantees.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Characteristics of zombie and non-zombie firms, 2019",
              columns: ["Variable", "Zombie firms", "Non-zombie firms", "Difference"],
              rows: [
                ["Firm age (years)", "24.6", "19.8", "4.8***"],
                ["Debt / assets", "0.61", "0.44", "0.17***"],
                ["Interest coverage ratio (median)", "−0.4", "5.8", "−6.2***"],
                ["Log labour productivity (industry-demeaned)", "−0.41", "0.06", "−0.47***"],
                ["Investment rate", "0.042", "0.089", "−0.047***"],
                ["Received new bank loan (share)", "0.62", "0.71", "−0.09***"],
                ["Implied interest rate (percent)", "3.4", "3.7", "−0.3***"],
                ["Firms", "3,340", "20,660", ""],
              ],
              note: "Note: Listed and externally audited non-financial firms. The implied interest rate is interest expense divided by average interest-bearing debt. *** significant at the 1 percent level.",
            },
          ],
        },
      ],
    },
    {
      id: "method",
      heading: "6. Empirical Strategy",
      paragraphs: [],
      subsections: [
        {
          id: "method-congestion",
          heading: "6.1 Congestion Regressions",
          paragraphs: [
            "To test Hypothesis 2, we follow Caballero, Hoshi and Kashyap {1} and Adalet McGowan, Andrews and Millot {3} and estimate, for non-zombie firm i in two-digit industry j and year t, y_ijt = β·Z_jt + X_ijt′γ + μ_i + τ_t + ε_ijt, where y is the investment rate (capital expenditure divided by lagged fixed assets) or employment growth, Z_jt is the share of industry assets held by zombie firms, X_ijt contains log assets, leverage and lagged sales growth, and μ_i and τ_t are firm and year fixed effects. The coefficient β measures how the outcomes of healthy firms vary with the zombie share within industries over time, after removing aggregate shocks.",
            "Standard errors are clustered by industry, since the zombie share varies at that level [23]. With 68 two-digit industries, conventional clustered standard errors are reliable, but we also report wild cluster bootstrap p-values [24]. We estimate the same specification for margins, sales growth, wage growth and growth in bank credit to test the channels in Hypothesis 3, and interact the zombie share with an industry measure of dependence on external finance [28].",
          ],
        },
        {
          id: "method-identification",
          heading: "6.2 Identification",
          paragraphs: [
            "The main threat to a causal interpretation is that industry shocks raise the zombie share and simultaneously lower the investment and employment of healthy firms. Firm and year fixed effects do not remove such shocks. We address this concern in three ways. First, we control for industry-level demand using the growth of industry sales and exports. Second, we instrument the Korean industry zombie share with the average zombie share in the same industry in other OECD countries [3], which captures global industry trends in zombie prevalence that are plausibly unrelated to Korea-specific shocks to healthy firms. Third, we test whether the effects are larger for young firms and in industries dependent on external finance, as the congestion mechanism predicts, which would be harder to explain by common demand shocks alone. Even so, our estimates are best interpreted as robust associations rather than as precise causal effects [22].",
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
          id: "results-prevalence",
          heading: "7.1 Prevalence",
          paragraphs: [
            "The zombie share rose from 9.6 percent of firms in 2012 to 14.9 percent in 2020 (Table 2 and Figure 1). The increase was gradual over 2012–2016, accelerated in 2016–2017 as shipbuilding and shipping were hit by a global downturn, and rose again in 2019–2020. Zombies accounted for 11.3 percent of corporate assets and 10.1 percent of employment in 2020, indicating that they are on average smaller than other firms but far from negligible. Zombie shares among listed firms follow a similar trend at a slightly lower level.",
            "These levels are comparable to those reported for listed firms in advanced economies [2] and somewhat higher than OECD estimates based on broader samples of firms [3], which partly reflects differences in the age threshold and sample. The pace of increase in Korea since 2012 is, however, faster than in most of the economies studied by Banerjee and Hofmann {10}. As noted in Section 2, the 2020 figure may understate the underlying share, because deferred interest payments reduce reported interest expenses.",
            "Figure 2 shows that zombie shares vary widely across industries, from below 5 percent in electronic components to above 25 percent in shipbuilding. The largest increases between 2012 and 2020 were in shipbuilding, machinery and accommodation. Industries with high zombie shares are those that faced structural declines in demand, such as shipbuilding and textiles, or that were hit hard by the pandemic, such as accommodation and food services. Zombie shares are also higher among small and medium-sized firms than among large firms, although large zombies account for a disproportionate share of zombie assets.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Zombie firms among listed and externally audited firms",
              columns: ["Year", "Share of firms (%)", "Share of assets (%)", "Share of employment (%)"],
              rows: [
                ["2012", "9.6", "7.4", "6.8"],
                ["2014", "10.7", "8.1", "7.5"],
                ["2016", "12.1", "9.2", "8.5"],
                ["2018", "13.2", "10.0", "9.1"],
                ["2020", "14.9", "11.3", "10.1"],
              ],
              note: "Note: A zombie is a firm aged ten years or more with an interest coverage ratio below one for three consecutive years.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Share of zombie firms, 2012–2020",
              kind: "line",
              xLabels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
              yLabel: "Percent",
              series: [
                { name: "Share of firms", values: [9.6, 10.1, 10.7, 11.2, 12.1, 12.8, 13.2, 13.9, 14.9] },
                { name: "Share of assets", values: [7.4, 7.8, 8.1, 8.6, 9.2, 9.7, 10.0, 10.5, 11.3] },
              ],
              note: "Note: Listed and externally audited non-financial firms.",
            },
            {
              id: "figure-2",
              caption: "Figure 2. Zombie share of firms by industry, 2020",
              kind: "bar",
              xLabels: ["Shipbuilding", "Accommodation & food", "Machinery", "Textiles", "Construction", "Chemicals", "Electronic components"],
              yLabel: "Percent of firms",
              series: [{ name: "Zombie share", values: [26.4, 23.1, 18.7, 17.2, 13.5, 9.8, 4.6] }],
              note: "Note: Listed and externally audited firms in selected two-digit industries.",
            },
          ],
        },
        {
          id: "results-dynamics",
          heading: "7.2 Persistence, Recovery and Exit",
          paragraphs: [
            "Zombie status is persistent but not permanent. Table 3 follows the 2,516 firms classified as zombies in 2015. Three years later, 41 percent were still zombies, 27 percent had recovered to an interest coverage ratio above one, and 32 percent had exited through liquidation, merger or delisting. Recovery rates were higher for firms that reduced debt and employment substantially, consistent with evidence from Japan that restructuring is the main path out of zombie status [8][10] and with Hypothesis 4: among zombies that reduced debt by at least 20 percent and employment by at least 10 percent, 52 percent had recovered by 2018.",
            "Exit rates were lower for zombies affiliated with business groups and for those with large shares of guaranteed debt. Only 23 percent of group-affiliated zombies exited, compared with 34 percent of independent zombies, and the exit rate of zombies with an above-median share of guaranteed debt was 29 percent, compared with 35 percent for other zombies. These differences are consistent with internal capital markets within groups and with public guarantees both delaying exit. Recovery is not always durable: about a third of firms that recovered by 2018 were again classified as zombies by 2020, echoing the relapse rates reported for advanced economies [10].",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Status in 2018 of firms classified as zombies in 2015 (percent)",
              columns: ["Group", "Firms", "Still zombie", "Recovered", "Exited"],
              rows: [
                ["All zombies, 2015", "2,516", "41", "27", "32"],
                ["Business group affiliated", "412", "46", "31", "23"],
                ["Not affiliated", "2,104", "40", "26", "34"],
                ["Guaranteed debt share above median", "1,258", "47", "24", "29"],
                ["Guaranteed debt share below median", "1,258", "35", "30", "35"],
                ["Reduced debt ≥ 20% and employment ≥ 10%", "604", "22", "52", "26"],
              ],
              note: "Note: Recovered firms have an interest coverage ratio of at least one in 2018. Exit includes liquidation, merger and delisting with cessation of filing. Rows sum to 100 percent.",
            },
          ],
        },
        {
          id: "results-congestion",
          heading: "7.3 Zombie Congestion",
          paragraphs: [
            "If zombies depress the returns of healthy firms by holding down prices, raising wages or absorbing credit, industries with more zombies should see weaker investment and employment growth among non-zombie firms [1][3]. Table 4 reports the results. A 10 percentage point higher zombie share is associated with 1.2 percentage points lower investment rates and 0.8 percentage points lower employment growth among non-zombie firms. The effects are larger for young non-zombie firms, which compete most directly for market share, and the gap in labour productivity between zombies and non-zombies widens in industries where zombies are prevalent, in line with the evidence for Japan and OECD countries [1][3] and with Hypothesis 2.",
            "The magnitudes are economically meaningful. The increase in the average industry zombie share of assets between 2012 and 2020, about 4 percentage points, is associated with a reduction in the investment rate of non-zombie firms of roughly 0.5 percentage points, or about 6 percent of their average investment rate. Applied to the aggregate capital stock of non-zombie firms, this implies a cumulative shortfall in investment equivalent to around 2 percent of their capital by 2020. These figures are similar in magnitude to estimates of zombie congestion in Japan in the 1990s [1] and in OECD countries after the global financial crisis [3], although they are less precisely estimated.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Zombie share and performance of non-zombie firms",
              columns: ["", "Investment rate", "Employment growth", "Investment rate (young firms)"],
              rows: [
                ["Industry zombie share (assets)", "−0.12***", "−0.08**", "−0.19***"],
                ["", "(0.04)", "(0.03)", "(0.06)"],
                ["Firm and year fixed effects", "Yes", "Yes", "Yes"],
                ["Firm controls", "Yes", "Yes", "Yes"],
                ["Observations", "186,400", "186,400", "41,200"],
              ],
              note: "Note: Non-zombie firms, 2012–2020. Firm controls include log assets, leverage and lagged sales growth. Young firms are aged below ten years. Standard errors clustered by industry in parentheses. ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Table 5 examines the channels in Hypothesis 3. Healthy firms in industries with more zombies have slower sales growth and lower price–cost margins: a 10 percentage point higher zombie share is associated with 0.6 percentage points lower sales growth and 0.21 percentage points lower margins. Growth in bank credit to healthy firms is also lower, by 1.5 percentage points for the same difference in zombie share. By contrast, average wage growth at healthy firms is unrelated to the zombie share. These results suggest that zombies congest product and credit markets rather than labour markets, which is plausible given that labour markets in the industries with the most zombies were slack for much of the period.",
        "The credit channel is supported by heterogeneity across industries. In industries with above-median dependence on external finance, measured as in Rajan and Zingales {28}, the association between the zombie share and the investment rate of healthy firms is −0.17, whereas in less dependent industries it is −0.06 and insignificant. If congestion reflected only common demand shocks, there would be no reason for it to be concentrated in finance-dependent industries. The pattern is consistent with banks' exposure to zombies limiting lending to healthy firms, as documented in Japan [16] and Europe [5][9].",
        "Effects also differ by firm type. Congestion is weaker for healthy firms affiliated with business groups, which can rely on internal capital markets, with a coefficient of −0.05, and stronger for independent small and medium-sized firms. It is somewhat stronger after 2016, when zombie shares rose fastest, although the difference between periods is not statistically significant. These patterns suggest that congestion bears most heavily on the firms that would otherwise drive reallocation and productivity growth — young, independent and finance-dependent firms [12][13].",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Channels and heterogeneity of zombie congestion",
          columns: ["Outcome / sample", "Industry zombie share", "Std. error", "Observations"],
          rows: [
            ["Sales growth", "−0.06**", "(0.03)", "186,400"],
            ["Price–cost margin", "−0.021**", "(0.009)", "186,400"],
            ["Average wage growth", "0.004", "(0.011)", "184,900"],
            ["Bank credit growth", "−0.15***", "(0.05)", "171,300"],
            ["Investment rate: high external finance dependence", "−0.17***", "(0.05)", "94,100"],
            ["Investment rate: low external finance dependence", "−0.06", "(0.04)", "92,300"],
            ["Investment rate: business group affiliated", "−0.05", "(0.05)", "21,600"],
            ["Investment rate: independent firms", "−0.13***", "(0.04)", "164,800"],
          ],
          note: "Note: Non-zombie firms, 2012–2020. Each row is a separate regression with firm controls and firm and year fixed effects, as in Table 4. Standard errors clustered by industry. ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "The rise in zombie shares is robust to alternative definitions (Table 6). Using an interest coverage threshold of 1.5 instead of one, or requiring two rather than three consecutive years, raises the level of the zombie share but leaves the upward trend unchanged. Among listed firms, adding the requirement of below-median Tobin's q reduces the 2020 share to 8.2 percent, from 5.1 percent in 2012, a similar proportional increase. Excluding firms in shipbuilding and shipping, which experienced severe industry-specific shocks, reduces the increase between 2012 and 2020 by about a fifth.",
        "The congestion estimates are also robust. Results are similar when the zombie share is measured by the number of firms rather than assets, when shipbuilding and shipping are excluded, when we control for industry sales and export growth, and when we use the lagged zombie share. Instrumenting the Korean industry zombie share with zombie shares in the same industry in other OECD countries [3] yields a coefficient of −0.15, somewhat larger than the baseline but less precisely estimated. Wild cluster bootstrap p-values [24] are below 0.05 in all specifications for the investment rate. These estimates are associations, and congestion may partly reflect common industry shocks that affect both zombies and healthy firms, but the pattern is consistent across specifications.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness: alternative definitions and congestion specifications",
          columns: ["Specification", "Zombie share 2012 (%)", "Zombie share 2020 (%)", "Congestion coefficient (investment rate)"],
          rows: [
            ["Baseline", "9.6", "14.9", "−0.12*** (0.04)"],
            ["Interest coverage threshold 1.5", "13.8", "20.1", "−0.11*** (0.04)"],
            ["Two consecutive years", "12.4", "18.3", "−0.10** (0.04)"],
            ["Listed firms, adding below-median Tobin's q", "5.1", "8.2", "−0.14** (0.06)"],
            ["Excluding shipbuilding and shipping", "9.3", "13.5", "−0.11*** (0.04)"],
            ["Zombie share of firms instead of assets", "9.6", "14.9", "−0.09** (0.04)"],
            ["Controlling for industry sales and export growth", "9.6", "14.9", "−0.10** (0.04)"],
            ["IV: zombie share in same industry, other OECD countries", "9.6", "14.9", "−0.15** (0.07)"],
          ],
          note: "Note: Zombie shares are shares of firms. The congestion coefficient is the coefficient on the industry zombie share in the investment-rate regression of Table 4, column 1, with standard errors clustered by industry in parentheses. ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "The pandemic poses a dilemma. Credit guarantees, loan deferrals and other support helped viable firms survive a temporary shock and likely prevented a wave of inefficient failures [15][27]. But the same measures may have kept unviable firms in operation, and our 2020 figures likely understate the zombie share once support is withdrawn, because loan deferrals reduce reported interest expenses. Experience in Japan suggests that some zombies recover once restructured [8], while others survive for long periods without improving, so policy needs to distinguish between the two.",
        "The design of exit policies matters. Korea's court-led rehabilitation procedure and the out-of-court workouts coordinated by creditor banks have been used to restructure large distressed firms, notably in shipbuilding and shipping, but small and medium-sized zombies are rarely restructured and often survive on rolled-over guaranteed loans. Measures that would help include tighter monitoring of repeated guarantee renewals, simplified insolvency procedures for small firms, and supervisory scrutiny of loans to firms with persistently low interest coverage, as recommended for European banks [5][9].",
        "Our evidence on recovery suggests that restructuring, rather than simply continued financing, is the main path out of zombie status. Support programmes could therefore be conditioned on restructuring plans for firms that were already zombies before the pandemic, while continuing to support firms whose difficulties are clearly temporary. The lower exit rates of zombies with guaranteed debt indicate that guarantee institutions, which bear most of the credit risk, have a particular responsibility to assess viability when guarantees are renewed.",
        "Two limitations of our analysis should be noted. First, our data cover only listed and externally audited firms; smaller firms, which file simpler statements, may have different zombie dynamics, and pandemic support was particularly important for them. Second, our congestion estimates are associations at the industry level and may overstate causal effects if zombie shares and healthy-firm performance respond to common industry shocks [22]. Firm-level evidence linking zombie lending to specific banks, as in Japan and Europe [1][4], would help establish causality.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "The share of zombie firms in Korea rose from 9.6 percent in 2012 to 14.9 percent in 2020, and zombies held 11.3 percent of corporate assets in 2020. Their prevalence is associated with weaker investment and employment growth among healthy firms, mainly through product and credit markets, and the effects fall most heavily on young, independent and finance-dependent firms. Zombies pay lower interest rates than healthy firms, and those with business group affiliation or guaranteed debt are less likely to exit.",
        "As pandemic-era credit support is withdrawn, efficient restructuring and insolvency procedures, together with incentives for banks and guarantee institutions to recognise losses rather than roll over loans, will be important to reallocate resources towards viable firms [1][3].",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Sample. The sample includes all non-financial firms subject to external audit or listed on the stock exchange in at least one year between 2010 and 2020. Firm age is computed from the date of incorporation. Firms that changed their identification number after a merger or split are linked using public disclosures. Industry is defined at the two-digit level of the Korean Standard Industrial Classification, giving 68 industries.",
        "Interest coverage. Operating profit is earnings before interest and taxes from the income statement; interest expense is total interest paid on borrowings and bonds. Firms with zero interest expense are classified as non-zombies. Where operating profit is negative, the interest coverage ratio is negative and the firm satisfies the coverage criterion in that year. The implied interest rate is interest expense divided by the average of beginning- and end-of-year interest-bearing debt, winsorised at the 1st and 99th percentiles.",
        "Outcomes. The investment rate is capital expenditure on tangible fixed assets divided by lagged net tangible fixed assets. Employment growth is the change in the number of employees divided by the average of current and lagged employment. The price–cost margin is operating profit plus depreciation divided by sales. Bank credit growth is the log change in borrowings from banks. All outcomes are winsorised at the 1st and 99th percentiles.",
        "Instrument and inference. OECD industry zombie shares are computed from published cross-country estimates [3] and matched to Korean two-digit industries using a concordance. External finance dependence is measured as the median share of capital expenditure not financed by internal cash flow among large listed Korean firms in each industry over 2005–2009, following Rajan and Zingales {28}. Wild cluster bootstrap p-values use 999 replications with Rademacher weights, clustering by industry.",
      ],
    },
  ],
};
