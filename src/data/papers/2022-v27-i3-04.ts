// Vol. 27, No. 3 (July 2022) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2022-v27-i3-04",
  title: "Exchange-Rate Shocks and Remittance Behaviour: Evidence from Vietnamese Migrant Households",
  authors: [{ name: "Thi-Thu Nguyen", corresponding: true }, { name: "Hyun-Sung Lim" }],
  abstract:
    "Remittances from workers abroad are a major source of income for Vietnamese households. We study how remittances respond to exchange-rate movements between migrants' host-country currencies and the Vietnamese dong, using the Vietnam Household Living Standards Survey for 2010–2020 linked to information on migrants' destinations, principally Korea, Japan and Taiwan. Because households with migrants in different countries experienced different exchange-rate shocks in the same year, we can control for common shocks in Vietnam. A 10 percent appreciation of the host-country currency raises remittances measured in dong by 6.1 percent, implying that migrants partly smooth the dong value of transfers rather than sending fixed amounts in host currency. Recipient households spend about a third of the additional remittance income on education and a quarter on durable goods and housing, with larger education effects for girls. The results show that host-country exchange rates are an important source of income risk for migrant-sending households.",
  keywords: ["Remittances", "Migration", "Exchange rates", "Household investment", "Vietnam"],
  jelCodes: ["F24", "O15", "F31", "D13"],
  pages: "331–360",
  volume: 27,
  issue: 3,
  year: 2022,
  received: "2021-09-27",
  accepted: "2022-04-11",
  published: "2022-07-15",
  publishedOnline: "2022-07-04",
  citations: 15,
  downloads: 1920,
  pdfSize: "1.49 MB",
  type: "Research Article",
  acknowledgments:
    "We thank participants at the Foreign Trade University development economics workshop and the Hanyang University economics seminar, two anonymous referees and the handling editor for helpful comments.",
  dataAvailability:
    "The Vietnam Household Living Standards Survey is available from the General Statistics Office of Vietnam on application; exchange-rate data are public. Code is available from the corresponding author.",
  refs: [
    /* 1 */ "Lucas, R. E. B., & Stark, O. (1985). Motivations to remit: Evidence from Botswana. Journal of Political Economy, 93(5), 901–918.",
    /* 2 */ "Rapoport, H., & Docquier, F. (2006). The economics of migrants' remittances. In S.-C. Kolm & J. Mercier Ythier (Eds.), Handbook of the Economics of Giving, Altruism and Reciprocity (Vol. 2, pp. 1135–1198). Amsterdam: Elsevier.",
    /* 3 */ "Yang, D. (2008). International migration, remittances and household investment: Evidence from Philippine migrants' exchange rate shocks. Economic Journal, 118(528), 591–630.",
    /* 4 */ "Yang, D., & Choi, H. (2007). Are remittances insurance? Evidence from rainfall shocks in the Philippines. World Bank Economic Review, 21(2), 219–248.",
    /* 5 */ "Clemens, M. A., & McKenzie, D. (2018). Why don't remittances appear to affect growth? Economic Journal, 128(612), F179–F209.",
    /* 6 */ "Ambler, K., Aycinena, D., & Yang, D. (2015). Channeling remittances to education: A field experiment among migrants from El Salvador. American Economic Journal: Applied Economics, 7(2), 207–232.",
    /* 7 */ "McKenzie, D., & Rapoport, H. (2011). Can migration reduce educational attainment? Evidence from Mexico. Journal of Population Economics, 24(4), 1331–1358.",
    /* 8 */ { jer: "2021-v26-i1-04" },
    /* 9 */ "Jack, W., & Suri, T. (2014). Risk sharing and transactions costs: Evidence from Kenya's mobile money revolution. American Economic Review, 104(1), 183–223.",
    /* 10 */ "Yang, D. (2011). Migrant remittances. Journal of Economic Perspectives, 25(3), 129–152.",
    /* 11 */ "Adams, R. H., Jr., & Page, J. (2005). Do international migration and remittances reduce poverty in developing countries? World Development, 33(10), 1645–1669.",
    /* 12 */ "Edwards, A. C., & Ureta, M. (2003). International migration, remittances, and schooling: Evidence from El Salvador. Journal of Development Economics, 72(2), 429–461.",
    /* 13 */ "Woodruff, C., & Zenteno, R. (2007). Migration networks and microenterprises in Mexico. Journal of Development Economics, 82(2), 509–528.",
    /* 14 */ "Gibson, J., McKenzie, D., & Stillman, S. (2011). The impacts of international migration on remaining household members: Omnibus results from a migration lottery program. Review of Economics and Statistics, 93(4), 1297–1318.",
    /* 15 */ "Clemens, M. A., & Tiongson, E. R. (2017). Split decisions: Household finance when a policy discontinuity allocates overseas work. Review of Economics and Statistics, 99(3), 531–543.",
    /* 16 */ "Ashraf, N., Aycinena, D., Martínez A., C., & Yang, D. (2015). Savings in transnational households: A field experiment among migrants from El Salvador. Review of Economics and Statistics, 97(2), 332–351.",
    /* 17 */ "Paxson, C. H. (1992). Using weather variability to estimate the response of savings to transitory income in Thailand. American Economic Review, 82(1), 15–33.",
    /* 18 */ "Townsend, R. M. (1994). Risk and insurance in village India. Econometrica, 62(3), 539–591.",
    /* 19 */ "Antman, F. M. (2011). The intergenerational effects of paternal migration on schooling and work: What can we learn from children's time allocations? Journal of Development Economics, 96(2), 200–208.",
    /* 20 */ "Cox, D. (1987). Motives for private income transfers. Journal of Political Economy, 95(3), 508–546.",
    /* 21 */ "Becker, G. S. (1974). A theory of social interactions. Journal of Political Economy, 82(6), 1063–1093.",
    /* 22 */ "Duflo, E. (2003). Grandmothers and granddaughters: Old-age pensions and intrahousehold allocation in South Africa. World Bank Economic Review, 17(1), 1–25.",
    /* 23 */ "Thomas, D. (1990). Intra-household resource allocation: An inferential approach. Journal of Human Resources, 25(4), 635–664.",
    /* 24 */ "Freund, C., & Spatafora, N. (2008). Remittances, transaction costs, and informality. Journal of Development Economics, 86(2), 356–366.",
    /* 25 */ "Beck, T., & Martínez Pería, M. S. (2011). What explains the price of remittances? An examination across 119 country corridors. World Bank Economic Review, 25(1), 105–131.",
    /* 26 */ "Theoharides, C. (2018). Manila to Malaysia, Quezon to Qatar: International migration and its effects on origin-country human capital. Journal of Human Resources, 53(4), 1022–1049.",
    /* 27 */ "Amuedo-Dorantes, C., & Pozo, S. (2006). Remittances as insurance: Evidence from Mexican immigrants. Journal of Population Economics, 19(2), 227–254.",
    /* 28 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Remittances are among the largest financial flows to developing countries, exceeding official development assistance and, for many countries, foreign direct investment [10]. They reduce poverty [11], finance schooling [12] and small enterprises [13], and help households cope with shocks [4][9][27]. Yet remittances are themselves exposed to shocks in migrants' host countries — to employment, wages and, importantly, exchange rates. How remittances respond to such shocks determines whether migration diversifies household income risk or simply adds a new source of it.",
        "Why migrants remit — out of altruism, as insurance, as repayment of family investments or to accumulate assets at home — shapes how remittances respond to shocks [1][2][20]. The response to exchange-rate movements is particularly informative. If migrants target a fixed value of support at home, the dong value of remittances should be unaffected by an appreciation of the host currency, and remittances in host currency should fall. If migrants instead send a fixed amount of host currency — for example, a fixed share of their wages — the dong value should rise one for one. The elasticity of home-currency remittances with respect to the exchange rate thus lies between zero and one depending on the strength of targeting.",
        "Vietnam is one of the largest remittance recipients in Asia. Alongside a large diaspora in the United States, it sends tens of thousands of contract workers each year to Korea, Japan and Taiwan, whose currencies moved very differently against the dong over 2010–2020: the yen appreciated sharply in 2010–2012 and then depreciated by more than a third, while the Taiwan dollar strengthened steadily and the won fluctuated. Following the approach of Yang {3}, we exploit this variation to estimate how remittances and household spending respond to exchange-rate shocks, using the Vietnam Household Living Standards Survey (VHLSS) for 2010–2020.",
        "Because households with migrants in different countries experienced different exchange-rate shocks in the same period, we can control for all common shocks in Vietnam, including inflation, monetary policy and the general strength of the dong. We find that a 10 percent appreciation of the host-country currency raises dong-denominated remittances by 6.1 percent. The elasticity is significantly below one: migrants reduce host-currency transfers when their currency strengthens, partly smoothing the value received at home. Responses to appreciations and depreciations are of similar size.",
        "Recipient households spend about a third of the additional remittance income on education and about a quarter on durable goods and housing improvements. School enrolment of 15- to 18-year-olds rises, with effects concentrated among girls. Exchange-rate movements in host countries thus translate into meaningful changes in household investment, and are an important source of income risk for migrant-sending households.",
        "Section 2 describes Vietnamese labour migration and exchange-rate movements. Section 3 reviews the literature and Section 4 presents a framework. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents results on remittances, spending and schooling, Section 8 examines heterogeneity and remittance motives, Section 9 reports robustness checks, Section 10 discusses implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Labour Migration and Exchange Rates",
      paragraphs: [
        "Vietnam's labour export programme sends workers abroad on fixed-term contracts, typically of three to five years, arranged through licensed recruitment agencies. In the 2010s the number of workers departing each year rose from about 85,000 to more than 140,000, with Taiwan, Japan and Korea accounting for the large majority. Workers in Taiwan are employed mainly in manufacturing and domestic care; in Japan, through the Technical Intern Training Programme, mainly in manufacturing, construction and agriculture; and in Korea, through the Employment Permit System, mainly in manufacturing, fishing and agriculture. Migrants commonly finance recruitment fees with loans from relatives or banks, which they repay from their earnings abroad.",
        "Table 1 summarises exchange-rate movements against the dong between consecutive survey rounds. The yen appreciated by 14 percent against the dong between 2010 and 2012, depreciated by 28 percent between 2012 and 2014 as Japanese monetary policy eased, and partially recovered thereafter. The Taiwan dollar appreciated in most periods, while the won depreciated between 2014 and 2016 and appreciated in other periods. Because the dong is managed against the US dollar, these movements largely reflect fluctuations of the host currencies against the dollar, driven by monetary policy and global financial conditions rather than by developments in Vietnam.",
        "Remittances to Vietnam are sent through banks, money transfer operators and informal channels, including carriers who travel between host countries and Vietnam. The cost of sending remittances from Korea, Japan and Taiwan declined over the period but remained substantial for small transfers, and many migrants send money monthly or every few months. Remittances can be received in dong or in foreign currency, but most recipients convert them to dong for spending. Migrants are therefore directly exposed to movements in the host-currency/dong exchange rate, both when deciding how much to send and in determining what their families receive.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Change in host-currency value against the Vietnamese dong between survey rounds (percent)",
          columns: ["Period", "Japanese yen", "Korean won", "Taiwan dollar", "US dollar"],
          rows: [
            ["2010–2012", "14.2", "8.6", "11.7", "10.1"],
            ["2012–2014", "−28.4", "−0.8", "−2.1", "1.6"],
            ["2014–2016", "13.6", "−6.9", "−1.4", "5.6"],
            ["2016–2018", "0.7", "8.2", "9.8", "2.4"],
            ["2018–2020", "3.4", "−5.1", "1.9", "0.3"],
          ],
          note: "Note: Change in the average exchange rate (dong per unit of host currency) over the twelve months preceding each survey round. Positive values indicate appreciation of the host currency. Source: State Bank of Vietnam and IMF International Financial Statistics.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper is most closely related to Yang {3}, who exploits the heterogeneous exchange-rate shocks experienced by Philippine migrants during the 1997 Asian financial crisis. He finds that appreciation of migrants' host currencies raised remittances and led to increased child schooling, reduced child labour and greater entrepreneurial investment in origin households. We study a later period, a different origin country and a set of shocks that include both appreciations and depreciations of similar size, which allows us to test for symmetry. Our estimates of remittance elasticities are also informative about migrants' motives, as discussed by Lucas and Stark {1} and in surveys of the literature [2][10].",
        "A second strand studies remittances as insurance. Remittances rise when origin households suffer adverse rainfall shocks [4], and migrants send more when origin-country economic conditions deteriorate [27]. Mobile money reduces the transaction costs of risk sharing and makes transfers more responsive to shocks [9], a finding echoed in this journal's evidence on mobile money and remittances [8]. More generally, households in developing countries insure themselves only partially against income shocks [17][18]. Remittance flows also respond to transaction costs, which vary widely across corridors [24][25].",
        "A third strand studies the effects of migration and remittances on origin households. Migration and remittances raise schooling in some contexts [12][26] but can reduce it in others, by raising the returns to migration relative to education or by removing parents from the household [7][19]. Lottery-based evidence shows that migration has large effects on household income but mixed effects on other outcomes of remaining members [14][15]. Migrants value control over how remittances are used: offering them the ability to channel funds directly to education raises educational spending [6], and savings products help transnational households accumulate assets [16]. At the macroeconomic level, remittances have not been robustly linked to growth [5].",
        "Finally, our findings on the gender composition of education effects relate to the literature on intra-household allocation, which shows that the identity of the recipient of income affects how it is spent [22][23]. In many Vietnamese migrant households, remittances are received and managed by mothers or grandmothers while fathers work abroad, which may help explain why additional income disproportionately benefits girls.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework",
      paragraphs: [
        "Consider a migrant who earns a wage w in host currency and chooses remittances R (in host currency) to maximise a weighted sum of own consumption and the consumption of the origin household, in the spirit of models of altruistic transfers [20][21]. The origin household receives eR in dong, where e is the exchange rate in dong per unit of host currency. An appreciation raises the dong value of each unit sent. This has an income effect — the migrant is effectively richer in terms of origin-household consumption — and a substitution effect, since supporting the household becomes cheaper in terms of forgone own consumption.",
        "If the migrant targets a fixed level of origin-household consumption, she will reduce R in proportion to the appreciation, so that eR is unchanged and the elasticity of dong remittances with respect to e is zero. If she sends a fixed share of her wage, the elasticity is one. Altruistic preferences with diminishing marginal utility generally imply an intermediate elasticity. Insurance motives also imply an intermediate elasticity: if the origin household is relatively well off, the migrant may send less when the exchange rate is favourable. Investment motives — for example, accumulating funds to build a house — imply an elasticity of one or more, since appreciation raises the return to saving at home [3].",
        "We therefore test three hypotheses. H1: the elasticity of dong-denominated remittances with respect to the host-currency exchange rate lies strictly between zero and one. H2: the elasticity is lower for poorer origin households, for which consumption targeting is more important. H3: additional remittance income is spent disproportionately on lumpy investments such as education, housing and durables rather than on current consumption, as predicted by models in which transitory income is saved or invested [17].",
        "The framework also highlights the role of migration debt. Migrants who borrowed to finance recruitment fees face obligations fixed in dong, and an appreciation of the host currency reduces the host-currency cost of repaying them. Such migrants may respond to an appreciation by sending more to accelerate repayment, implying a higher elasticity. Because debt repayment is recorded in the VHLSS as a use of household funds rather than consumption, this motive also predicts that part of the additional remittance income will be used to repay debts rather than spent.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-vhlss",
          heading: "5.1 The Vietnam Household Living Standards Survey",
          paragraphs: [
            "The VHLSS is conducted every two years by the General Statistics Office. Each round includes an expenditure module administered to about 9,400 households, roughly half of whom are re-interviewed in the following round, creating a rotating two-round panel. The survey records remittances received from household members and others abroad over the previous twelve months, household spending by detailed category, housing characteristics, durable assets and the schooling of all household members.",
            "We identify households with a member working abroad from the household roster, which records absent members and their location, supplemented by information on the source country of remittances. We use the 2010, 2012, 2014, 2016, 2018 and 2020 rounds and restrict attention to households observed in two consecutive rounds with a migrant in the same destination in both rounds. This yields 2,590 households with international migrants, of which 2,187 have migrants in Korea, Japan or Taiwan.",
          ],
        },
        {
          id: "data-shock",
          heading: "5.2 Exchange-Rate Shocks",
          paragraphs: [
            "For each household we compute the exchange-rate shock as the change in the log average exchange rate between the dong and the migrant's host-country currency over the twelve months preceding each survey round, matching the reference period for remittances. For households with migrants in more than one country, we weight each currency by the number of migrants. Remittances and spending are deflated to 2010 prices using the regional consumer price index.",
            "Table 2 describes migrant households by destination. Households with migrants in Japan receive the largest remittances, VND 72.8 million per year on average, followed by Korea and Taiwan. Remittances account for 38 percent of total income for the average migrant household. Households with migrants in different destinations are broadly similar in size, education and land holdings, although those with migrants in Korea are somewhat better off, reflecting the higher costs of migration to Korea.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Households with international migrants by destination, 2010–2020",
              columns: ["Destination", "Households", "Annual remittances (VND million)", "Remittance share of income", "Per-capita expenditure (VND million)", "Host currency"],
              rows: [
                ["Korea", "612", "61.4", "0.36", "27.1", "KRW"],
                ["Japan", "834", "72.8", "0.41", "25.8", "JPY"],
                ["Taiwan", "741", "54.2", "0.39", "23.4", "TWD"],
                ["Other", "403", "48.9", "0.33", "26.2", "Various"],
                ["All", "2,590", "61.0", "0.38", "25.5", ""],
              ],
              note: "Note: Means over household-rounds in 2010 prices. Remittances are those received from abroad over the previous twelve months.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our main specification is ΔlnR_ht = β·Δln e_ht + X_ht·γ + δ_pt + ε_ht, where ΔlnR_ht is the change in log real remittances received by household h between rounds t−1 and t, Δln e_ht is the change in the log exchange rate of the migrant's host currency, X_ht are household controls (initial household size, head's age and education, land holdings and the migrant's sex and relationship to the head), and δ_pt are province-by-round fixed effects. Because the specification is in differences, it removes all time-invariant household characteristics, including the choice of destination; the province-by-round fixed effects absorb common shocks to Vietnamese households in each province and period.",
      ],
      subsections: [
        {
          id: "identification",
          heading: "6.1 Identifying Assumption",
          paragraphs: [
            "Identification requires that destination-specific exchange-rate movements are unrelated to other changes in household circumstances. This assumption is plausible because migrants chose their destinations before the shocks occurred, and because exchange-rate movements were driven by host-country monetary policy and global financial conditions. A remaining concern is that exchange rates co-move with host-country labour market conditions — for example, if a depreciation coincides with a recession that reduces migrants' earnings. We control for changes in host-country unemployment and manufacturing wages, and show that results are similar when we exclude periods with large host-country output shocks.",
            "We also test whether future exchange-rate shocks predict past changes in remittances. If the identifying assumption holds, households whose migrants' currencies were about to appreciate should not have experienced different remittance trends beforehand. Standard errors are clustered by destination country and survey round, the level at which the shock varies, and we report wild-bootstrap p-values given the small number of clusters [28].",
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
          id: "remittances",
          heading: "7.1 Remittances",
          paragraphs: [
            "Table 3 reports the main estimates. A 10 percent appreciation of the host currency raises dong-denominated remittances by 6.1 percent (column 2). The elasticity of 0.61 is significantly different from both zero and one, in line with H1. Equivalently, migrants reduce host-currency remittances by about 3.9 percent for each 10 percent appreciation, partly targeting the value received at home. Adding controls for host-country labour market conditions has little effect (column 3), and the probability that a household receives any remittances is unaffected, so the response operates on the intensive margin.",
            "Column 4 allows separate coefficients for appreciations and depreciations. The elasticity is 0.63 for appreciations and 0.58 for depreciations; the difference is not statistically significant. The symmetry suggests that migrants' targeting behaviour does not depend on the direction of the shock, and that depreciations impose real losses on origin households of a similar magnitude to the gains from appreciations.",
            "Figure 1 reports estimates from a specification that includes the exchange-rate shock in the following round alongside the current and lagged shocks. Future shocks do not predict current changes in remittances, supporting the identifying assumption. The effect of the current shock is concentrated in the same round, with a small and insignificant further increase in the subsequent round, suggesting that migrants adjust remittances relatively quickly.",
            "The magnitude of the elasticity is close to that implied by Yang's estimates for Philippine migrants during the Asian financial crisis [3], despite differences in the size and nature of the shocks. That a similar elasticity emerges from appreciations and depreciations of moderate size in a later period suggests that partial targeting of the home-currency value of remittances is a general feature of migrant behaviour rather than a response specific to crisis conditions.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Exchange-rate shocks and remittances",
              columns: ["", "(1)", "(2)", "(3)", "(4)", "(5) Any remittances"],
              rows: [
                ["Δ log exchange rate", "0.57***", "0.61***", "0.59***", "", "0.04"],
                ["", "(0.15)", "(0.14)", "(0.15)", "", "(0.05)"],
                ["Δ log exchange rate × appreciation", "", "", "", "0.63***", ""],
                ["Δ log exchange rate × depreciation", "", "", "", "0.58***", ""],
                ["Household controls", "No", "Yes", "Yes", "Yes", "Yes"],
                ["Host-country labour market controls", "No", "No", "Yes", "Yes", "Yes"],
                ["Province-by-round fixed effects", "Yes", "Yes", "Yes", "Yes", "Yes"],
                ["Wild-bootstrap p-value (β = 1)", "0.01", "0.01", "0.02", "", ""],
                ["Observations", "2,590", "2,590", "2,590", "2,590", "2,590"],
              ],
              note: "Note: Dependent variable is the change in log real remittances received in dong (column 5: change in an indicator for any remittances). Standard errors clustered by destination-round in parentheses. *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Response of remittances to past, current and future exchange-rate shocks",
              kind: "line",
              xLabels: ["Shock in round t+1", "Shock in round t", "Shock in round t−1"],
              yLabel: "Elasticity of dong remittances",
              series: [
                {
                  name: "Estimate",
                  values: [0.04, 0.6, 0.08],
                  lower: [-0.24, 0.32, -0.2],
                  upper: [0.32, 0.88, 0.36],
                },
              ],
              marker: 0,
              note: "Note: Coefficients from a single regression of the change in log remittances between rounds t−1 and t on exchange-rate shocks in rounds t+1, t and t−1, with 95 percent confidence intervals. The dashed line separates the placebo lead from contemporaneous and lagged shocks.",
            },
          ],
        },
        {
          id: "spending",
          heading: "7.2 Household Spending",
          paragraphs: [
            "How do households use the additional remittance income? Table 4 reports estimates of the change in spending in each category on the change in remittances, instrumenting the latter with the exchange-rate shock. The coefficients can be interpreted as marginal propensities to spend out of exchange-rate-induced remittance income. Households spend about 33 percent of the additional income on education — tuition, extra classes, textbooks and boarding — and 24 percent on durable goods and housing improvements. Food and other current consumption absorb about 21 percent, and the remainder goes to saving and debt repayment, including repayment of loans used to finance migration.",
            "Figure 2 summarises this allocation. The large share devoted to education and durable investment, compared with an average budget share of about 9 percent for education and 12 percent for durables and housing among these households, is consistent with H3: households treat exchange-rate-induced remittance gains as transitory and invest them rather than raising current consumption [3][17].",
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Allocation of additional remittance income induced by exchange-rate shocks",
              kind: "bar",
              xLabels: ["Education", "Durables and housing", "Food and consumption", "Saving and debt repayment", "Other"],
              yLabel: "Share of additional income (percent)",
              series: [
                { name: "Marginal propensity", values: [33, 24, 21, 15, 7] },
                { name: "Average budget share", values: [9, 12, 58, 12, 9] },
              ],
              note: "Note: Marginal propensities from IV estimates in Table 4; average budget shares computed over migrant households' total income in the baseline round.",
            },
          ],
        },
        {
          id: "schooling",
          heading: "7.3 Schooling",
          paragraphs: [
            "Panel B of Table 4 examines children's schooling. A 10 percent appreciation of the host currency raises school enrolment of 15- to 18-year-olds by 1.9 percentage points on average. The effect is concentrated among girls, whose enrolment rises by 2.8 percentage points, compared with 1.0 point (not statistically significant) for boys. There are no significant effects on enrolment of younger children, which is close to universal, and hours of work of 15- to 18-year-olds fall modestly.",
            "The larger effects for girls are consistent with evidence that resources controlled by women are more likely to be spent on daughters [22][23]. In our sample, remittances are received by a female household member in about 70 percent of households, often the mother or grandmother of the children concerned. They also reflect a larger margin for girls, whose enrolment at ages 15–18 was 6 percentage points below that of boys in migrant households at baseline. The results contrast with evidence from Mexico that migration can reduce educational attainment [7], perhaps because returns to education are higher in Vietnam or because contract migration to East Asia does not require low-skilled children to forgo schooling to follow their parents.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Remittance income, household spending and schooling",
              columns: ["Outcome", "Estimate", "Std. error"],
              rows: [
                ["A. Marginal propensity out of remittance income (IV)", "", ""],
                ["Education", "0.33***", "(0.09)"],
                ["Durables and housing improvements", "0.24**", "(0.10)"],
                ["Food and other consumption", "0.21**", "(0.09)"],
                ["Saving and debt repayment", "0.15*", "(0.08)"],
                ["B. Effect of 10% appreciation on enrolment, age 15–18 (pp)", "", ""],
                ["All children", "1.9**", "(0.8)"],
                ["Girls", "2.8**", "(1.2)"],
                ["Boys", "1.0", "(1.1)"],
                ["Weekly hours worked, age 15–18", "−0.6*", "(0.3)"],
              ],
              note: "Note: Panel A regresses the change in spending in each category on the change in remittances (both in VND), instrumented with the exchange-rate shock. Panel B reports reduced-form effects of a 10 percent appreciation. All specifications include household controls and province-by-round fixed effects. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
      ],
    },
    {
      id: "heterogeneity",
      heading: "8. Heterogeneity and Remittance Motives",
      paragraphs: [
        "Table 5 examines heterogeneity in the remittance response to test hypotheses about remittance motives. Consistent with H2, the elasticity is lower for households in the bottom half of the baseline per-capita expenditure distribution (0.48) than for those in the top half (0.74): migrants from poorer households appear to target a level of support more closely, sending less in host currency when their currency appreciates. The elasticity is also lower when the migrant is a spouse of the household head than when the migrant is a son or daughter, which may reflect stronger consumption targeting by migrants supporting their own children.",
        "Households that report outstanding debt from financing migration have a higher elasticity, close to 0.8, suggesting that migrants use favourable exchange-rate movements to accelerate repayment. Households that built or upgraded their house during the period also have a higher elasticity, consistent with investment motives [3]. Finally, we interact the exchange-rate shock with local rainfall and typhoon shocks in the origin province. Remittances rise by 8 percent when the origin household experiences an adverse weather shock, consistent with insurance motives [4], but the exchange-rate elasticity is unaffected.",
        "Together, these patterns suggest that remittance behaviour combines altruistic targeting with investment and debt-repayment motives, as emphasised in the literature [1][2][10]. The aggregate elasticity of 0.61 masks substantial heterogeneity: migrants supporting poorer households smooth their families' consumption against exchange-rate risk to a greater extent, while those accumulating assets pass more of the exchange-rate gains or losses through.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Heterogeneity in the elasticity of remittances",
          columns: ["Group", "Elasticity", "Std. error", "p-value, equality"],
          rows: [
            ["Bottom half of baseline expenditure", "0.48***", "(0.16)", "0.04"],
            ["Top half of baseline expenditure", "0.74***", "(0.17)", ""],
            ["Migrant is spouse of head", "0.49***", "(0.18)", "0.09"],
            ["Migrant is son or daughter of head", "0.70***", "(0.16)", ""],
            ["Outstanding migration debt", "0.79***", "(0.19)", "0.06"],
            ["No migration debt", "0.52***", "(0.15)", ""],
            ["Adverse weather shock in origin (level effect on remittances)", "0.08**", "(0.04)", ""],
          ],
          note: "Note: Elasticities estimated in pooled regressions with interactions, using the specification of Table 3, column 2. The last row reports the coefficient on an indicator for adverse rainfall or typhoon shocks. ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks. The elasticity is similar when we restrict the sample to households with migrants in Korea, Japan or Taiwan; when we exclude the 2012–2014 period, in which the large yen depreciation provides much of the variation; when we exclude 2018–2020, which includes the onset of the COVID-19 pandemic; and when we use exchange rates averaged over the full two-year interval between rounds. Adding destination-specific linear trends reduces precision but leaves the point estimate essentially unchanged. Measuring remittances in US dollars rather than dong yields an elasticity of 0.60, confirming that results are not driven by Vietnamese price movements.",
        "A concern is that exchange-rate movements affect migrants' decisions to return home, changing the composition of households with migrants. We find no relationship between exchange-rate shocks and the probability that a migrant returns between rounds, and results are similar when we include households whose migrant returned, assigning them the shock of the previous destination. Finally, using the remittance cost of each corridor as a control, given evidence that costs affect remittance flows [24][25], does not change the estimates.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the remittance elasticity",
          columns: ["Specification", "Elasticity", "Std. error", "Observations"],
          rows: [
            ["Baseline (Table 3, column 2)", "0.61***", "(0.14)", "2,590"],
            ["Korea, Japan and Taiwan only", "0.63***", "(0.15)", "2,187"],
            ["Excluding 2012–2014", "0.58***", "(0.19)", "2,068"],
            ["Excluding 2018–2020", "0.62***", "(0.15)", "2,104"],
            ["Two-year average exchange rates", "0.57***", "(0.16)", "2,590"],
            ["Destination-specific trends", "0.60**", "(0.24)", "2,590"],
            ["Remittances in US dollars", "0.60***", "(0.14)", "2,590"],
            ["Including returned migrants", "0.58***", "(0.14)", "2,742"],
            ["Corridor remittance-cost control", "0.61***", "(0.14)", "2,590"],
          ],
          note: "Note: Specification of Table 3, column 2, with the indicated modification. ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion",
      paragraphs: [
        "Our results show that host-country exchange rates are an important source of income risk for Vietnamese migrant-sending households. With an elasticity of 0.61 and remittances accounting for 38 percent of income, a 10 percent depreciation of the host currency reduces the total income of the average migrant household by about 2.3 percent. The yen's depreciation between 2012 and 2014 alone reduced remittance income of households with migrants in Japan by roughly 17 percent. Because migration destinations are concentrated, such shocks can affect large numbers of households in specific provinces simultaneously.",
        "Migrants partially insulate their families from these shocks by adjusting the amounts they send, but the insurance is incomplete, and the burden of adjustment falls on household investment. Because households spend a large share of additional remittance income on education and housing, depreciations are likely to reduce these investments, particularly for girls. This suggests that the long-run human-capital benefits of migration depend on the stability of host-country currencies as well as on wages and employment.",
        "These findings have implications for policy. Lowering the cost of sending remittances would raise the amount received for a given sacrifice by migrants [24][25]. Savings and investment products that allow migrants to accumulate funds when exchange rates are favourable and draw them down when they are not, or to direct remittances to education [6][16], could help households smooth investment against exchange-rate fluctuations. Diversifying migration destinations across currencies would also reduce aggregate exposure, and pre-departure financial education could help migrants and their families anticipate the effects of exchange-rate movements.",
        "Our analysis has limitations. The VHLSS records remittances received rather than sent, and does not report migrants' earnings, so we cannot directly observe migrants' own consumption and saving responses. The biennial survey frequency limits our ability to study short-run dynamics. And although the identifying variation comes from shocks to host currencies, these shocks may also have affected migrants' employment in ways that our controls do not fully capture.",
        "The results also inform the measurement of household welfare. Studies that treat remittances as an exogenous source of income for origin households may overstate the stability of this income, since a substantial share of exchange-rate risk is passed on to recipients. Conversely, studies that focus on migrants' earnings in host currency may understate the extent to which migrants absorb shocks on behalf of their families. Our estimates indicate that migrants bear about 40 percent of the exchange-rate risk and origin households about 60 percent, a division that is likely to depend on the circumstances of both parties.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Exchange-rate movements in host countries are an important source of income variation for Vietnamese migrant households. A 10 percent appreciation of the host currency raises remittances received in dong by 6.1 percent, as migrants partly smooth the value received at home. Remittance gains are channelled substantially into education, especially for girls, and into durable goods and housing. Lowering transfer costs and offering savings products linked to remittances could help households benefit from favourable movements and buffer unfavourable ones [3][6].",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Sample Construction",
      paragraphs: [
        "Identifying migrants. The VHLSS household roster records members who have been absent for more than six months and their current location. We classify a household as having an international migrant if at least one such member is abroad, and record the destination country. Where the roster does not record a country, we use the reported source country of remittances received. Households with migrants in more than one country (about 4 percent of the sample) are assigned a migrant-weighted average shock.",
        "Panel linkage. Households are linked across rounds using the survey's household identifiers and verified using the age and sex of members. We drop households whose head changed between rounds unless the change reflects the death or departure of the previous head. Remittances above the 99th percentile are winsorised.",
        "Exchange rates. Monthly exchange rates of the dong against the yen, won, Taiwan dollar and other currencies are computed as cross rates through the US dollar using State Bank of Vietnam central rates and IMF data. The shock for each household is the change in the log average rate over the twelve months preceding the household's interview month in each round.",
      ],
    },
  ],
};
