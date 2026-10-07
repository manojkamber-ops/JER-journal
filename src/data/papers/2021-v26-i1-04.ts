// Vol. 26, No. 1 (January 2021) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i1-04",
  title: "Mobile Money and Remittance Smoothing: Evidence from Rural Bangladesh",
  authors: [{ name: "Lakshmi Iyer", corresponding: true }, { name: "Samuel Adeyemi" }],
  abstract:
    "We study whether mobile money helps rural households in Bangladesh smooth consumption after income shocks by making it cheaper for migrant relatives to send money home. Using three rounds of a nationally representative household panel (2011/12, 2015 and 2018/19) combined with the rollout of mobile-money agents, we compare households with and without access to mobile money when they experience crop losses from floods and drought. Households using mobile money reduce food consumption by 4.1 percent after a shock, about one-third of the 12.3 percent decline among non-users. The difference is explained by remittances: users receive 26 percent more remittance income in shock years, compared with 6 percent for non-users. Effects are largest for households with a migrant member in Dhaka and for female-headed households. The results show that lowering transaction costs within migrant networks can provide meaningful informal insurance.",
  keywords: ["Mobile money", "Remittances", "Risk sharing", "Consumption smoothing", "Bangladesh"],
  jelCodes: ["O16", "O15", "D14", "G21"],
  pages: "89–118",
  volume: 26,
  issue: 1,
  year: 2021,
  received: "2020-05-27",
  accepted: "2020-10-30",
  published: "2021-01-15",
  publishedOnline: "2021-01-05",
  citations: 27,
  downloads: 2310,
  pdfSize: "1.62 MB",
  type: "Research Article",
  acknowledgments: "We thank seminar participants at the University of Notre Dame and the University of Ibadan, two anonymous referees and the handling editor for their comments.",
  dataAvailability:
    "The household panel is publicly available from its producers; agent-location data were obtained from the operator under a non-disclosure agreement. Replication code is available from the corresponding author.",
  refs: [
    /* 1 */ "Townsend, R. M. (1994). Risk and insurance in village India. Econometrica, 62(3), 539–591.",
    /* 2 */ "Jack, W., & Suri, T. (2014). Risk sharing and transactions costs: Evidence from Kenya's mobile money revolution. American Economic Review, 104(1), 183–223.",
    /* 3 */ "Suri, T., & Jack, W. (2016). The long-run poverty and gender impacts of mobile money. Science, 354(6317), 1288–1292.",
    /* 4 */ "Riley, E. (2018). Mobile money and risk sharing against village shocks. Journal of Development Economics, 135, 43–58.",
    /* 5 */ "Yang, D., & Choi, H. (2007). Are remittances insurance? Evidence from rainfall shocks in the Philippines. World Bank Economic Review, 21(2), 219–248.",
    /* 6 */ "Munshi, K., & Rosenzweig, M. (2016). Networks and misallocation: Insurance, migration, and the rural-urban wage gap. American Economic Review, 106(1), 46–98.",
    /* 7 */ "Aker, J. C. (2010). Information from markets near and far: Mobile phones and agricultural markets in Niger. American Economic Journal: Applied Economics, 2(3), 46–59.",
    /* 8 */ "Jensen, R. (2007). The digital provide: Information (technology), market performance, and welfare in the South Indian fisheries sector. Quarterly Journal of Economics, 122(3), 879–924.",
    /* 9 */ "Deaton, A. (1992). Household saving in LDCs: Credit markets, insurance and welfare. Scandinavian Journal of Economics, 94(2), 253–273.",
    /* 10 */ "Morduch, J. (1995). Income smoothing and consumption smoothing. Journal of Economic Perspectives, 9(3), 103–114.",
    /* 11 */ "Fafchamps, M., & Lund, S. (2003). Risk-sharing networks in rural Philippines. Journal of Development Economics, 71(2), 261–287.",
    /* 12 */ "Rosenzweig, M. R., & Stark, O. (1989). Consumption smoothing, migration, and marriage: Evidence from rural India. Journal of Political Economy, 97(4), 905–926.",
    /* 13 */ "Ligon, E., Thomas, J. P., & Worrall, T. (2002). Informal insurance arrangements with limited commitment: Theory and evidence from village economies. Review of Economic Studies, 69(1), 209–244.",
    /* 14 */ "Bryan, G., Chowdhury, S., & Mobarak, A. M. (2014). Underinvestment in a profitable technology: The case of seasonal migration in Bangladesh. Econometrica, 82(5), 1671–1748.",
    /* 15 */ "Mobarak, A. M., & Rosenzweig, M. R. (2013). Informal risk sharing, index insurance, and risk taking in developing countries. American Economic Review, 103(3), 375–380.",
    /* 16 */ "Blumenstock, J. E., Eagle, N., & Fafchamps, M. (2016). Airtime transfers and mobile communications: Evidence in the aftermath of natural disasters. Journal of Development Economics, 120, 157–181.",
    /* 17 */ "Dercon, S. (2002). Income risk, coping strategies, and safety nets. World Bank Research Observer, 17(2), 141–166.",
    /* 18 */ "Kochar, A. (1999). Smoothing consumption by smoothing income: Hours-of-work responses to idiosyncratic agricultural shocks in rural India. Review of Economics and Statistics, 81(1), 50–61.",
    /* 19 */ "Mbiti, I., & Weil, D. N. (2015). Mobile banking: The impact of M-Pesa in Kenya. In S. Edwards, S. Johnson, & D. N. Weil (Eds.), African Successes, Volume III: Modernization and Development (pp. 247–293). Chicago: University of Chicago Press.",
    /* 20 */ "Demirgüç-Kunt, A., Klapper, L., Singer, D., Ansar, S., & Hess, J. (2018). The Global Findex Database 2017: Measuring Financial Inclusion and the Fintech Revolution. Washington, DC: World Bank.",
    /* 21 */ "Gertler, P., Levine, D. I., & Moretti, E. (2009). Do microfinance programs help families insure consumption against illness? Health Economics, 18(3), 257–273.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Rural households in low-income countries face large income risks from weather, pests, illness and price fluctuations, and have limited access to formal insurance and credit [9][17]. They rely instead on a combination of savings, adjustments in labour supply and informal transfers within families and villages [10][18]. A long literature shows that these arrangements smooth consumption only partially: consumption still moves with household income, particularly for poorer households [1][13].",
        "Migration widens the reach of informal insurance. Family members working in cities or abroad face shocks that are less correlated with those of their origin households and can send money home when crops fail [5][12]. But transferring money has traditionally been costly, slow and risky in rural areas lacking bank branches. Cash was often carried home by migrants themselves or sent through informal intermediaries charging high fees. These transaction costs limit the extent to which migrant networks can provide insurance.",
        "Mobile money lowers these costs dramatically. In Kenya, households using M-Pesa were able to absorb negative shocks without reducing consumption, because they received more transfers from a wider network of senders [2], and access to mobile money reduced poverty and enabled women to move out of agriculture [3][19]. Bangladesh offers a natural setting to test whether these benefits generalise. Its mobile financial services expanded rapidly after 2011, it combines high internal migration from rural areas to Dhaka and Chittagong with frequent climate shocks, and seasonal migration is an important coping strategy for rural households [14].",
        "We use three rounds of a nationally representative rural household panel together with data on the rollout of mobile-money agents. Among non-users, a crop-loss shock reduces per capita food consumption by 12.3 percent. Among users, the decline is only 4.1 percent. The difference is explained by remittances: users receive 26 percent more remittance income in shock years, compared with 6 percent for non-users, and receive transfers from a larger number of senders. Instrumenting adoption with distance to the nearest agent yields similar estimates.",
        "The mechanism behind these effects is clear in the data. In shock years, mobile-money users receive transfers from more senders, receive them faster, and are much less likely to resort to costly coping strategies such as selling livestock, taking loans from moneylenders at high interest rates or skipping meals. Non-users who receive remittances after shocks typically receive them weeks later, often when a migrant returns home with cash. By compressing the time between a shock and the arrival of support, mobile money allows households to avoid distress sales of productive assets that would reduce their future incomes.",
        "Section 2 describes mobile money in Bangladesh. Section 3 reviews related work, Section 4 sets out a simple model of remittances as insurance, Section 5 describes the data, and Section 6 the empirical strategy. Section 7 presents results, Section 8 examines mechanisms Section 9 robustness and Section 10 a discussion of welfare and policy. Section 11 concludes.",
        "Our contribution is threefold. First, we provide evidence on the insurance value of mobile money from South Asia, complementing the influential evidence from East Africa [2][4]. The setting differs in important respects — a bank-led regulatory model, a dense population and a migration system centred on large garment-producing cities — so it is informative about the external validity of earlier findings. Second, we document the mechanism in detail, showing how mobile money changes the number of senders, the timing of transfers and the coping strategies households use. Third, we show that the benefits are concentrated among female-headed households and households with migrants in the largest cities, which has implications for targeting policies that promote digital financial inclusion.",
      ],
    },
    {
      id: "background",
      heading: "2. Mobile Money in Bangladesh",
      paragraphs: [
        "Bangladesh adopted a bank-led model of mobile financial services in 2011, under which licensed banks provide services through subsidiaries and networks of retail agents. The largest provider expanded from a few thousand agents in 2011 to more than 180,000 by 2018, reaching nearly every sub-district. Customers register with a national identity card, deposit cash with an agent, and can send money to any other registered user by text message for a small fee. Recipients withdraw cash from any agent. By 2017 about a fifth of adults reported having a mobile money account, one of the highest rates outside East Africa [20].",
        "Domestic remittances are the dominant use. Garment workers, construction labourers and rickshaw drivers in the cities send money to family members in rural areas, often monthly. Before mobile money, such transfers were typically hand-carried or sent through bus drivers and informal agents, with transfer costs that could reach several percent of the amount sent and delays of days.",
        "Agent density varies considerably across the country. Agents first spread in peri-urban areas and along major roads, and only gradually reached remote villages in the char lands of the major rivers and the coastal south-west, which are also among the regions most exposed to floods and cyclones. By the final survey round, more than four-fifths of sample villages had an agent within two kilometres, but there remained substantial variation in proximity during the period when adoption was spreading, which our instrumental-variables strategy exploits.",
        "Mobile money is used primarily for person-to-person transfers. In our survey, more than 90 percent of mobile-money users report receiving domestic remittances through their accounts, while fewer than 15 percent report using them to save, pay bills or receive government transfers. This pattern makes Bangladesh a particularly clean setting to study the remittance channel through which mobile money may provide insurance.",
        "Table 1 documents the rapid growth of mobile-money accounts, agents and transaction values between 2011 and 2019.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Mobile money in Bangladesh, 2011–2019",
          columns: ["Indicator", "2011", "2015", "2019"],
          rows: [
            ["Registered accounts (millions)", "0.3", "31.9", "72.5"],
            ["Agents (thousands)", "12", "556", "967"],
            ["Monthly transaction value (BDT billion)", "1", "167", "397"],
            ["Sample villages with an agent within 2 km (share)", "0.06", "0.58", "0.83"],
          ],
          note: "Note: National figures across all providers from central-bank statistics; village coverage from our agent-location data.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper contributes to the literature on informal insurance in developing countries, which documents that households pool risk within villages and kinship networks [1][11][13] and that such networks shape migration decisions [6]. Remittances respond to shocks in origin households: in the Philippines, remittances rose in response to rainfall shocks, replacing a substantial share of lost income [5]. Index insurance can complement informal risk sharing [15].",
        "A key insight of this literature is that the extent of risk sharing depends on enforcement and information frictions. When transfers are costly or slow, households cannot easily make state-contingent transfers, and when commitment is limited, households that are currently fortunate may refuse to help [13]. Mobile money reduces the transaction-cost friction but not the commitment friction. Our finding that transfers from non-household relatives rise substantially among users suggests that, in Bangladesh, transaction costs rather than limited commitment were the binding constraint on remittance-based insurance for many households.",
        "We also contribute to the literature on mobile phones and mobile money. Mobile phones improve market integration by reducing information frictions [7][8], and airtime transfers rose sharply after natural disasters in Rwanda, suggesting a role for mobile networks in disaster response [16]. Riley {4} finds that mobile money helps Tanzanian households cope with village-level rainfall shocks, which local risk-sharing cannot insure. We focus on the role of mobile money in lowering the cost of migrant remittances in South Asia.",
        "Our work also relates to research on migration as a response to risk in Bangladesh. Bryan, Chowdhury and Mobarak {14} show that small incentives to migrate seasonally during the pre-harvest lean season substantially increased consumption of origin households, indicating that many households underinvest in migration because of risk and uncertainty. Mobile money may complement such interventions by making it easier for migrants to send their earnings home quickly and safely. Evidence from microfinance suggests that access to credit can also help households insure against health shocks [21], but formal credit is rarely available quickly after covariate shocks such as floods, when lenders themselves face elevated risk.",
      ],
    },
    {
      id: "model",
      heading: "4. A Simple Model of Remittances as Insurance",
      paragraphs: [
        "Consider a migrant who cares about the consumption of an origin household and can send transfers at a cost proportional to the amount sent, τ. When the origin household suffers an income shock, the marginal value of an additional transfer rises. The migrant sends money until the marginal utility of the household's consumption, net of the transfer cost, equals the migrant's own marginal utility. A fall in τ has two effects. First, it raises transfers in all states, an income effect. Second, it makes transfers more responsive to shocks, because the cost of fine-tuning transfers to the household's circumstances falls. The model therefore predicts that mobile money increases the sensitivity of remittances to shocks and reduces the sensitivity of consumption to shocks [2].",
        "The model generates two further predictions that we test. First, the effect of mobile money should be larger for households whose migrant members face shocks that are weakly correlated with those of the origin household — for example, migrants in large cities rather than nearby market towns, whose incomes depend partly on local agriculture. Second, mobile money should reduce reliance on costly coping strategies such as selling productive assets or borrowing at high interest rates, since these are the alternatives to remittances for households facing a shock [17][18].",
        "An alternative channel is that mobile money affects households through savings rather than transfers, by providing a safe place to store money. In Kenya, savings on mobile accounts were small relative to the volume of transfers [2], and savings products with commitment features rather than basic accounts appear to be important for raising saving. We test whether mobile money changes savings behaviour in our sample and find that balances held on mobile accounts are small, which allows us to focus on the transfer channel.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-panel",
          heading: "5.1 Household Panel",
          paragraphs: [
            "The household panel follows about 6,500 rural households across three rounds collected in 2011/12, 2015 and 2018/19. It records detailed consumption of food and non-food items, income by source including domestic and international remittances, the location and occupation of household members living elsewhere, landholdings and crop production, and self-reported shocks. We define a crop-loss shock as a reported loss exceeding 20 percent of the normal value of the harvest due to floods, drought, pests or crop disease. About 23 percent of households report such a shock in a given round.",
            "Self-reported shocks may be affected by recall and by households' perceptions of what constitutes a loss. We therefore construct an alternative shock measure from satellite rainfall data, defined as rainfall during the main growing season more than one standard deviation above or below the long-run mean for the sub-district, which captures flood and drought conditions. The two measures are strongly correlated: households in sub-districts with rainfall shocks are twice as likely to report crop losses. We show in Section 9 that results are similar using either measure.",
            "Consumption is measured using a detailed seven-day recall module for food and a thirty-day or annual recall module for non-food items, following standard practice in household surveys in South Asia. We deflate consumption using regional price indices constructed from unit values reported in the survey. Remittance income includes cash and in-kind transfers received from household members and other relatives living elsewhere during the previous twelve months.",
            "Mobile-money use is reported directly from the second round onwards. We define users as households in which any member sent or received money through a mobile account in the past year.",
          ],
        },
        {
          id: "data-agents",
          heading: "5.2 Agent Locations",
          paragraphs: [
            "We obtained the location and registration date of every agent of the largest mobile money provider and compute, for each village and survey round, the distance to the nearest agent. Agent expansion followed the availability of shops with reliable mobile coverage and electricity, which we show are uncorrelated with the incidence of crop shocks.",
            "We also obtained the registration dates of agents, allowing us to measure proximity at the time of each survey round. Because agent registration accelerated sharply between 2012 and 2015, many villages that had no agent nearby in the first round had one in the second, while others gained access only by the third round. This staggered rollout generates variation in access that is plausibly unrelated to the shocks households experienced in each round.",
            "Table 2 compares the characteristics of households that use mobile money with those that do not.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Household characteristics by mobile-money use (2018/19 round)",
              columns: ["Variable", "Users", "Non-users", "Difference"],
              rows: [
                ["Monthly food consumption per capita (BDT)", "2,140", "1,920", "220***"],
                ["Has a migrant member", "0.58", "0.34", "0.24***"],
                ["Migrant member in Dhaka", "0.31", "0.15", "0.16***"],
                ["Remittance income share", "0.21", "0.11", "0.10***"],
                ["Landholding (decimals)", "64", "71", "−7"],
                ["Female-headed household", "0.14", "0.12", "0.02"],
                ["Experienced crop loss", "0.23", "0.24", "−0.01"],
                ["Distance to nearest agent (km)", "0.9", "2.3", "−1.4***"],
                ["Households", "2,710", "3,790", ""],
              ],
              note: "Note: *** significant at the 1 percent level.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Following the risk-sharing tests of Townsend {1} and Jack and Suri {2}, we estimate Δlog c_ivt = β·Shock_ivt + γ·User_ivt + δ·(Shock_ivt × User_ivt) + α_i + μ_vt + ε_ivt, where c is per capita food consumption of household i in village v and round t, α_i household fixed effects and μ_vt village-by-round fixed effects that absorb common shocks. The coefficient δ measures how much mobile-money use dampens the consumption response to shocks. We estimate the same specification for remittance income and the number of remittance senders. Standard errors are clustered by village.",
      ],
      subsections: [
        {
          id: "iv",
          heading: "6.1 Instrumental Variables",
          paragraphs: [
            "Adoption of mobile money is a choice that may be correlated with unobserved characteristics affecting the ability to cope with shocks, such as the strength of migrant networks. We therefore instrument use and its interaction with shocks using distance to the nearest agent and its interaction with the shock indicator. The first stage, reported in Table 3, is strong: each kilometre closer to an agent raises the probability of use by 9 percentage points (F = 64).",
          ],
          tables: [
            {
              id: "table-iv",
              caption: "Table 3. First stage: agent proximity and mobile-money use",
              columns: ["Regressor", "Mobile-money user", "User × shock"],
              rows: [
                ["Distance to nearest agent (km)", "−0.091***", "−0.004"],
                ["", "(0.011)", "(0.006)"],
                ["Distance × shock", "0.003", "−0.087***"],
                ["", "(0.009)", "(0.014)"],
                ["Kleibergen–Paap F-statistic", "64.2", "41.7"],
                ["Household and village-by-round fixed effects", "Yes", "Yes"],
                ["Observations", "13,000", "13,000"],
              ],
              note: "Note: Standard errors clustered by village in parentheses. *** p < 0.01.",
            },
          ],
        },
        {
          id: "identification",
          heading: "6.2 Identifying Assumptions",
          paragraphs: [
            "The IV estimates require that agent proximity affects consumption smoothing only through mobile-money use. In the first round, before mobile money was widely available, distance to the location of future agents does not predict smoothing, supporting the exclusion restriction. Shocks themselves are uncorrelated with prior adoption and with agent proximity.",
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
          id: "consumption",
          heading: "7.1 Consumption Smoothing",
          paragraphs: [
            "Table 4 reports the main estimates. Among non-users, a crop-loss shock reduces per capita food consumption by 12.3 percent. For users the decline is only 4.1 percent, and the interaction coefficient of 8.2 percentage points is statistically significant in both OLS and IV specifications. Non-food consumption shows a similar pattern, while expenditure on education is protected for users but cut by non-users.",
            "The magnitude of the smoothing effect is economically large. Non-users lose roughly one-eighth of their food consumption in a shock year, a decline that nutrition research associates with reduced calorie intake and, for young children, increased risk of stunting. Users experience a decline about one-third as large. Applying the estimates to the share of households experiencing shocks in each round, mobile money reduces the variance of food consumption growth among rural households by about 15 percent.",
            "The comparison of OLS and IV estimates is informative. The IV estimates are slightly larger than OLS, which suggests that, if anything, households that adopted mobile money early were less able to smooth consumption than later adopters with similar observable characteristics — perhaps because adoption was concentrated among households that relied heavily on migrant support. Selection on unobservable coping ability does not appear to explain our results.",
            "Figure 1 summarises these results graphically, showing the change in food consumption and remittances received after a crop-loss shock for users and non-users.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 4. Consumption and remittance responses to crop-loss shocks",
              columns: ["Outcome", "Shock (non-users)", "Shock × user (OLS)", "Shock × user (IV)", "Observations"],
              rows: [
                ["Δ log food consumption", "−0.123***", "0.082***", "0.094***", "13,000"],
                ["Δ log non-food consumption", "−0.097***", "0.061**", "0.072**", "13,000"],
                ["Δ log education spending", "−0.141***", "0.118***", "0.126**", "9,860"],
                ["Δ log remittance income", "0.058", "0.201***", "0.233***", "13,000"],
                ["Δ number of senders", "0.03", "0.21***", "0.24***", "13,000"],
              ],
              note: "Note: Household and village-by-round fixed effects; standard errors clustered by village. ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Change in food consumption and remittances after a crop-loss shock",
              kind: "bar",
              xLabels: ["Food consumption", "Remittance income"],
              yLabel: "Percent change",
              series: [
                { name: "Non-users", values: [-12.3, 5.8], lower: [-16.0, -2.2], upper: [-8.6, 13.8] },
                { name: "Mobile-money users", values: [-4.1, 25.9], lower: [-7.6, 17.4], upper: [-0.6, 34.4] },
              ],
              note: "Note: Estimated percent changes in shock years with 95 percent confidence intervals.",
            },
          ],
        },
        {
          id: "heterogeneity",
          heading: "7.2 Heterogeneity",
          paragraphs: [
            "Effects are largest for households with a migrant member in Dhaka — the destination with the highest wages and densest agent network — whose consumption barely falls after shocks (Table 5). Female-headed households, many of which rely on remittances from husbands working elsewhere, also benefit strongly: their consumption decline is almost fully offset. Effects are smaller for households with migrants only in nearby towns, whose earnings may be correlated with local agricultural conditions.",
            "The heterogeneity by migrant destination is consistent with the model's prediction that remittances provide more insurance when the incomes of senders and recipients are less correlated. Garment and construction wages in Dhaka are largely unaffected by floods or droughts in rural districts, whereas incomes of migrants working as agricultural labourers or traders in nearby towns are likely to fall when the local harvest fails. The finding also suggests that the expansion of mobile money may increase the returns to long-distance migration by making it easier for migrants to support their families.",
            "Landless and marginal farming households benefit more than larger landholders, consistent with their more limited access to savings and credit. Larger landholders can sell stored grain, draw on savings or borrow against land, whereas poorer households have few alternatives to transfers from relatives. This pattern reinforces evidence that informal insurance is weakest for the poorest households [1][13].",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 5. Heterogeneity in the smoothing effect of mobile money (food consumption)",
              columns: ["Group", "Shock (non-users)", "Shock × user", "Households"],
              rows: [
                ["Migrant member in Dhaka", "−0.118***", "0.104***", "1,520"],
                ["Migrant only in nearby towns", "−0.121***", "0.047*", "1,130"],
                ["No migrant member", "−0.129***", "0.031", "3,850"],
                ["Female-headed", "−0.152***", "0.139***", "830"],
                ["Male-headed", "−0.118***", "0.071***", "5,670"],
                ["Landless or marginal farmers", "−0.141***", "0.096***", "2,940"],
              ],
              note: "Note: * p < 0.10, *** p < 0.01.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms",
      paragraphs: [
        "The model predicts that mobile money works by making remittances more responsive to shocks. Consistent with this, users receive remittances from more senders in shock years and the timing of transfers changes: users receive transfers within a median of six days after a shock is reported, compared with 21 days for non-users who receive any transfer. Users are not more likely to sell livestock or take high-interest loans after shocks, whereas non-users are, suggesting that mobile money substitutes for costly coping strategies [17][21].",
        "We find little evidence that mobile money affects households' own labour-supply responses to shocks, or that it increases savings held on mobile accounts, which remain small. The insurance effect operates primarily through the network of senders, as in Kenya [2].",
        "We further examine who sends the additional remittances. In shock years, users receive additional transfers both from household members working elsewhere and from other relatives, including siblings and adult children who are not counted as household members. Transfers from non-household relatives account for about two-fifths of the increase, suggesting that mobile money extends insurance beyond the immediate household to the wider kinship network, as found in Kenya [2] and consistent with the broader literature on risk-sharing networks [11].",
        "Figure 2 shows how the use of other coping strategies, such as selling livestock, taking high-interest loans and reducing meals, differs between users and non-users after a shock.",
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Coping strategies after a crop-loss shock (share of households)",
          kind: "bar",
          xLabels: ["Sold livestock", "High-interest loan", "Reduced meals", "Received remittance"],
          yLabel: "Share of households (%)",
          series: [
            { name: "Non-users", values: [24, 31, 19, 38] },
            { name: "Mobile-money users", values: [14, 17, 8, 71] },
          ],
          note: "Note: Shares of shock-affected households reporting each strategy in the survey round of the shock.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 shows that results are robust to alternative shock definitions (losses above 10 or 30 percent of harvest value; rainfall deviations measured from satellite data), to excluding households that moved, to controlling for household characteristics interacted with shocks, and to restricting the sample to villages with an agent within five kilometres by the final round.",
        "We also address the possibility that mobile-money adoption coincided with other changes that improved households' ability to cope with shocks, such as the expansion of microfinance, roads or electricity. Controlling for village access to microfinance branches, paved roads and electricity, each interacted with the shock indicator, leaves our estimates essentially unchanged. A placebo test using the first survey round, before mobile money was available, shows no differential smoothing among households that later became users, conditional on village fixed effects.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 6. Robustness of the smoothing effect (Δ log food consumption, Shock × user)",
          columns: ["Specification", "Estimate", "Std. error"],
          rows: [
            ["Baseline", "0.082***", "(0.024)"],
            ["Shock: loss above 10% of harvest", "0.067***", "(0.021)"],
            ["Shock: loss above 30% of harvest", "0.103***", "(0.031)"],
            ["Shock: satellite rainfall deviation", "0.074***", "(0.026)"],
            ["Excluding households that moved", "0.084***", "(0.025)"],
            ["Characteristics × shock controls", "0.077***", "(0.025)"],
            ["Villages with agent within 5 km", "0.088***", "(0.027)"],
          ],
          note: "Note: *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion",
      paragraphs: [
        "How large are the welfare gains from the improved consumption smoothing we document? A simple calculation based on a constant-relative-risk-aversion utility function with a coefficient of relative risk aversion of two suggests that reducing the consumption decline after a shock from 12.3 to 4.1 percent is equivalent to a permanent increase in consumption of about 0.6 percent for a household facing shocks with the frequency observed in our sample. While modest, this gain is comparable to the cost of mobile-money fees for typical remittance flows and is concentrated among the poorest households.",
        "Our results have implications for policy. First, regulatory frameworks that allow agent networks to expand quickly into rural areas are likely to yield insurance benefits beyond the convenience of payments. Second, reducing transfer fees for small amounts, which are disproportionately used by poor households, would strengthen these benefits. Third, governments can use mobile-money platforms to deliver emergency transfers after disasters, combining formal and informal support.",
        "Our study has limitations. Adoption of mobile money is not randomly assigned, and although our instrumental-variables estimates rely on variation in agent proximity that does not predict smoothing before mobile money was available, we cannot rule out all forms of selection. Our survey data are collected only every few years, so we cannot observe the high-frequency dynamics of transfers around shocks except through recall questions. Finally, our analysis focuses on crop-loss shocks; the insurance value of mobile money against health shocks or job loss of migrants may differ.",
        "The COVID-19 pandemic, which began after our final survey round, illustrates both the potential and the limits of remittance-based insurance. When garment factories in Dhaka closed temporarily in spring 2020 and migrant workers lost income, the shock hit senders rather than recipients, and remittances to rural areas fell sharply. Informal insurance through migrant networks works well against idiosyncratic or regional shocks to origin households, but provides little protection when the senders themselves are affected. Formal social protection, which can also be delivered through mobile-money platforms, remains essential for such aggregate shocks.",
        "Finally, our findings speak to the debate on the gender impacts of digital finance. Female-headed households in our sample are typically headed by women whose husbands work elsewhere, and they rely heavily on remittances. The near-complete smoothing we document for these households suggests that mobile money can strengthen the economic security of women in migrant-sending households, consistent with the long-run gender effects found in Kenya [3]. Whether it also changes the balance of decision-making within households, by giving women direct control over transfers received on their own accounts, is an important question for future work.",
        "Our results have implications for policy towards mobile financial services. Bangladesh's regulatory model, which allowed bank-led mobile-money providers to expand rapidly through agent networks, has been credited with extending access to millions of rural households. Our evidence suggests that the resulting reduction in transaction costs has had meaningful welfare benefits by enabling informal insurance within migrant networks. Policies that raise the cost of mobile transfers — such as transaction taxes or restrictions on agent operations — could undermine these benefits, particularly for poor rural households without access to formal insurance or credit.",
        "At the same time, mobile money is not a substitute for formal social protection. Remittance-based insurance depends on migrant relatives having stable incomes, and it may fail when shocks are correlated across rural and urban areas, as during the COVID-19 pandemic, when urban employment and remittances fell sharply at the same time. Households without migrant members, often among the poorest, benefit little from lower transfer costs. Mobile-money infrastructure could, however, be used to deliver public transfers quickly and cheaply after disasters, complementing informal networks with formal support targeted at those who lack them.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Mobile money substantially improves the ability of rural Bangladeshi households to cope with crop losses by making remittances from migrant relatives faster, cheaper and more responsive to need. As climate shocks become more frequent, expanding agent networks in remote areas and reducing transfer fees could be a cost-effective complement to formal social protection [2][3]. Combining mobile money with policies that support migration, such as information and small subsidies for seasonal migrants [14], may further strengthen informal insurance.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Variable Definitions and Data Construction",
      paragraphs: [
        "Consumption. Food consumption combines purchases, home production and in-kind receipts recorded in the seven-day recall module, valued at median village unit values and converted to monthly per capita terms using adult-equivalent scales. Non-food consumption includes clothing, fuel, transport, communication and household goods; durable goods and housing are excluded. All values are deflated to 2011/12 prices using regional food and non-food price indices constructed from survey unit values.",
        "Remittances. Remittance income includes all cash and in-kind transfers received from individuals living outside the household during the previous twelve months, including household members working elsewhere and other relatives and friends. International remittances, which account for about a sixth of the total in our sample, are included; results are similar when they are excluded. The number of senders counts distinct individuals reported as having sent transfers.",
        "Mobile-money use and agent proximity. A household is classified as a mobile-money user in a round if any member reports having sent or received money through a mobile account during the previous twelve months. Distance to the nearest agent is computed as the straight-line distance from the village centroid to the nearest agent registered at least six months before the survey interview. Results are robust to using road distance for the subset of villages for which road networks are available.",
        "Shocks. The crop-loss indicator equals one if the household reports that floods, drought, pests or crop disease reduced the value of its harvest by more than 20 percent in the twelve months before the survey. The rainfall shock indicator equals one if growing-season rainfall in the sub-district was more than one standard deviation above or below its 1981–2010 mean, based on satellite-derived precipitation estimates.",
        "Shock definition. A household is classified as experiencing a crop-loss shock in a survey round if it reports losing at least 25 percent of the expected harvest of its main crop because of floods, drought or excessive rain in the preceding twelve months. Self-reported shocks may be measured with error; as a check, we construct an alternative indicator based on rainfall deviations at the sub-district level, which yields similar estimates. About 18 percent of household-round observations are classified as shock years under the baseline definition.",
      ],
    },
  ],
};
