// Vol. 27, No. 1 (January 2022) — short communication (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2022-v27-i1-04",
  title: "How Many Zombie Firms Are There in Korea?",
  authors: [{ name: "Roberto Rossi", corresponding: true }, { name: "Hyun-Sung Lim" }],
  abstract:
    "We measure the prevalence of 'zombie' firms — older firms unable to cover interest payments from operating profits for three consecutive years — among Korean listed and externally audited companies. The zombie share rose from 9.6 percent of firms in 2012 to 14.9 percent in 2020, and zombies accounted for 11.3 percent of corporate assets in 2020. Industries with a higher zombie share exhibit lower investment and employment growth among healthy firms, consistent with congestion effects. The pandemic and accompanying credit support may further delay the exit of unviable firms.",
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
  acknowledgments: "We thank the handling editor and two anonymous referees for constructive comments.",
  dataAvailability: "Firm financial statements are available from commercial data providers. Code and industry-level aggregates are available from the corresponding author.",
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
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Zombie firms — unviable firms kept alive by continued credit — were blamed for Japan's prolonged stagnation in the 1990s, when banks with weak balance sheets rolled over loans to insolvent borrowers rather than recognise losses [1][6][7]. Their prevalence has risen across advanced economies since the global financial crisis [2][10], with evidence that they depress investment and productivity growth of healthy competitors [3] and that weak banks and accommodative monetary policy can sustain them [4][5][9]. By locking up capital and labour in low-productivity uses, zombies may weaken the reallocation that drives aggregate productivity growth [11][12][13] and blunt the cleansing effect of recessions [14].",
        "Korea has not been studied systematically in this literature, although concerns about marginal firms in shipbuilding, shipping and other industries have featured prominently in policy debates since the mid-2010s. We provide comparable measurements for Korea, document trends by industry and size, and estimate whether a higher zombie share is associated with weaker performance of healthy firms in the same industry. We find that the zombie share rose from 9.6 percent in 2012 to 14.9 percent in 2020 and that industries with more zombies saw lower investment and employment growth among non-zombie firms.",
      ],
    },
    {
      id: "method",
      heading: "2. Data and Definition",
      paragraphs: [
        "We use annual financial statements of about 24,000 listed and externally audited non-financial firms for 2010–2020, covering the large majority of corporate assets. Following Banerjee and Hofmann {2}, we define a zombie as a firm at least ten years old whose interest coverage ratio — operating profit divided by interest expenses — has been below one for three consecutive years. The age criterion distinguishes zombies from young firms that are temporarily unprofitable while they grow, and the three-year requirement excludes firms suffering a temporary shock. Because the definition requires three years of data, we report zombie shares from 2012.",
        "Table 1 compares zombie and non-zombie firms in 2019. Zombies are older, more leveraged and less productive, with labour productivity about 40 percent lower than that of non-zombies in the same industry. They invest less and are more likely to be in manufacturing industries facing structural decline, such as shipbuilding and machinery, and in accommodation and food services. Despite their weak profitability, 62 percent of zombies received new bank loans in 2019, compared with 71 percent of non-zombies, consistent with continued access to credit.",
        "Several alternative definitions have been proposed. Some studies classify firms as zombies if they receive subsidised credit, measured by interest rates below those paid by the most creditworthy borrowers [1], while others combine low interest coverage with low expected growth, measured by Tobin's q [2], or with weak profitability over longer periods [3]. Our definition, based on interest coverage and age, is simple, uses only accounting data and is directly comparable to cross-country estimates [2][10]. We verify below that the trends we document are robust to alternative definitions, including one that requires the firm to have below-median Tobin's q in its industry, which can be applied only to listed firms.",
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
    {
      id: "results",
      heading: "3. Prevalence",
      paragraphs: [
        "The zombie share rose from 9.6 percent of firms in 2012 to 14.9 percent in 2020 (Table 2 and Figure 1). The increase was gradual over 2012–2016, accelerated in 2016–2017 as shipbuilding and shipping were hit by a global downturn, and rose again in 2019–2020. Zombies accounted for 11.3 percent of corporate assets and 10.1 percent of employment in 2020, indicating that they are on average smaller than other firms but far from negligible. Zombie shares among listed firms follow a similar trend at a slightly lower level.",
        "The largest increases were in shipbuilding, machinery and accommodation. Strikingly, the implied interest rate paid by zombies in Table 1 is lower than that paid by healthy firms, a pattern that Caballero, Hoshi and Kashyap {1} interpret as evidence of subsidised credit. Some caution is warranted, since part of the gap reflects guarantees and policy loans targeted at distressed industries rather than forbearance by banks, but the pattern is consistent with the evergreening of loans documented in Japan [6] and Europe [5][9].",
        "Zombie status is persistent but not permanent. Of firms classified as zombies in 2015, 41 percent were still zombies in 2018, 27 percent had recovered to an interest coverage ratio above one, and 32 percent had exited through liquidation, merger or delisting. Recovery rates were higher for firms that reduced debt and employment substantially, consistent with evidence from Japan that restructuring is the main path out of zombie status [8][10]. Exit rates were lower for zombies affiliated with business groups and for those with large shares of guaranteed debt.",
        "The rise in zombie shares is robust to alternative definitions. Using an interest coverage threshold of 1.5 instead of one, or requiring two rather than three consecutive years, raises the level of the zombie share but leaves the upward trend unchanged. Among listed firms, adding the requirement of below-median Tobin's q reduces the 2020 share to 8.2 percent, from 5.1 percent in 2012, a similar proportional increase. Excluding firms in shipbuilding and shipping, which experienced severe industry-specific shocks, reduces the increase between 2012 and 2020 by about a fifth.",
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
      ],
    },
    {
      id: "congestion",
      heading: "4. Zombie Congestion",
      paragraphs: [
        "If zombies depress the returns of healthy firms by holding down prices, raising wages or absorbing credit, industries with more zombies should see weaker investment and employment growth among non-zombie firms [1][3]. We regress non-zombie firms' investment rates and employment growth on the zombie share of assets in their two-digit industry, controlling for firm characteristics, firm fixed effects and year fixed effects. Table 3 reports the results. A 10 percentage point higher zombie share is associated with 1.2 percentage points lower investment rates and 0.8 percentage points lower employment growth among non-zombie firms. The effects are larger for young non-zombie firms, which compete most directly for market share, and the gap in labour productivity between zombies and non-zombies widens in industries where zombies are prevalent, in line with the evidence for Japan and OECD countries [1][3].",
        "Figure 2 shows that zombie shares vary widely across industries, from below 5 percent in electronic components to above 25 percent in shipbuilding. Results are robust to defining zombies by asset share or firm share, to excluding shipbuilding, and to instrumenting the Korean industry zombie share with zombie shares in the same industry in other OECD countries [3]. These estimates are associations, and congestion may partly reflect common industry shocks that affect both zombies and healthy firms, but the pattern is consistent across specifications.",
        "The magnitudes are economically meaningful. The increase in the average industry zombie share of assets between 2012 and 2020, about 4 percentage points, is associated with a reduction in the investment rate of non-zombie firms of roughly 0.5 percentage points, or about 6 percent of their average investment rate. Applied to the aggregate capital stock of non-zombie firms, this implies a cumulative shortfall in investment equivalent to around 2 percent of their capital by 2020. These figures are similar in magnitude to estimates of zombie congestion in Japan in the 1990s [1] and in OECD countries after the global financial crisis [3], although they are less precisely estimated.",
      ],
      tables: [
        {
          id: "table-3",
          caption: "Table 3. Zombie share and performance of non-zombie firms",
          columns: ["", "Investment rate", "Employment growth", "Investment rate (young firms)"],
          rows: [
            ["Industry zombie share (assets)", "−0.12***", "−0.08**", "−0.19***"],
            ["", "(0.04)", "(0.03)", "(0.06)"],
            ["Firm and year fixed effects", "Yes", "Yes", "Yes"],
            ["Firm controls", "Yes", "Yes", "Yes"],
            ["Observations", "186,400", "186,400", "41,200"],
          ],
          note: "Note: Non-zombie firms, 2012–2020. Firm controls include log assets, leverage and lagged sales growth. Young firms are aged below ten years. Standard errors clustered by industry. ** p < 0.05, *** p < 0.01.",
        },
      ],
      figures: [
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
      id: "discussion",
      heading: "5. Discussion",
      paragraphs: [
        "The pandemic poses a dilemma. Credit guarantees, loan deferrals and other support helped viable firms survive a temporary shock and likely prevented a wave of inefficient failures [15]. But the same measures may have kept unviable firms in operation, and our 2020 figures likely understate the zombie share once support is withdrawn, because loan deferrals reduce reported interest expenses. Experience in Japan suggests that some zombies recover once restructured [8], while others survive for long periods without improving, so policy needs to distinguish between the two.",
        "The design of exit policies matters. Korea's court-led rehabilitation procedure and the out-of-court workouts coordinated by creditor banks have been used to restructure large distressed firms, notably in shipbuilding and shipping, but small and medium-sized zombies are rarely restructured and often survive on rolled-over guaranteed loans. Measures that would help include tighter monitoring of repeated guarantee renewals, simplified insolvency procedures for small firms, and supervisory scrutiny of loans to firms with persistently low interest coverage, as recommended for European banks [5][9].",
        "Two limitations of our analysis should be noted. First, our data cover only listed and externally audited firms; smaller firms, which file simpler statements, may have different zombie dynamics, and pandemic support was particularly important for them. Second, our congestion estimates are associations at the industry level and may overstate causal effects if zombie shares and healthy-firm performance respond to common industry shocks. Firm-level evidence linking zombie lending to specific banks, as in Japan and Europe [1][4], would help establish causality.",
      ],
    },
    {
      id: "conclusion",
      heading: "6. Conclusion",
      paragraphs: [
        "The share of zombie firms in Korea rose from 9.6 percent in 2012 to 14.9 percent in 2020, and their prevalence is associated with weaker investment and employment growth among healthy firms. As pandemic-era credit support is withdrawn, efficient restructuring and insolvency procedures, together with incentives for banks to recognise losses rather than roll over loans, will be important to reallocate resources towards viable firms [1][3].",
      ],
    },
  ],
};
