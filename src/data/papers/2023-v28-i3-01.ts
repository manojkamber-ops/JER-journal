// Vol. 28, No. 3 (July 2023) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2023-v28-i3-01",
  acknowledgments:
    "We thank seminar participants at Hanyang University and the University of Ibadan, two anonymous referees and the handling Associate Editor for helpful comments and suggestions. We are grateful to staff at several national debt management offices for clarifying the timing of rule adoption. All errors are our own.",
  dataAvailability:
    "Sovereign yield data were obtained from Bloomberg and national central bank publications and are subject to licence restrictions. Fiscal-rule information comes from the IMF Fiscal Rules Dataset and national legislation; macroeconomic controls are from the IMF World Economic Outlook and International Financial Statistics. Code and the country-level rule chronology used in the analysis are available from the corresponding author.",
  editorialNote:
    "Hyun-Sung Lim and Samuel Adeyemi find, using synthetic controls for 38 emerging markets over 2000–2022, that adopting a fiscal rule lowers 10-year sovereign yields by an average of 64 basis points over five years, with the largest effects where enforcement is credible and monetary frameworks are rule-based, and with expenditure-growth rules outperforming debt-to-GDP rules.",
  refs: [
    /* 1 */ "Kydland, F. E., & Prescott, E. C. (1977). Rules rather than discretion: The inconsistency of optimal plans. Journal of Political Economy, 85(3), 473–491.",
    /* 2 */ "Alesina, A., & Tabellini, G. (1990). A positive theory of fiscal deficits and government debt. Review of Economic Studies, 57(3), 403–414.",
    /* 3 */ "Alesina, A., & Perotti, R. (1996). Fiscal discipline and the budget process. American Economic Review, 86(2), 401–407.",
    /* 4 */ "Kopits, G., & Symansky, S. (1998). Fiscal policy rules (IMF Occasional Paper No. 162). International Monetary Fund.",
    /* 5 */ "Debrun, X., Moulin, L., Turrini, A., Ayuso-i-Casals, J., & Kumar, M. S. (2008). Tied to the mast? National fiscal rules in the European Union. Economic Policy, 23(54), 297–362.",
    /* 6 */ "Schaechter, A., Kinda, T., Budina, N., & Weber, A. (2012). Fiscal rules in response to the crisis: Toward the \"next-generation\" rules. A new dataset (IMF Working Paper No. 12/187). International Monetary Fund.",
    /* 7 */ "Poterba, J. M., & Rueben, K. S. (2001). Fiscal news, state budget rules, and tax-exempt bond yields. Journal of Urban Economics, 50(3), 537–562.",
    /* 8 */ "Bayoumi, T., Goldstein, M., & Woglom, G. (1995). Do credit markets discipline sovereign borrowers? Evidence from U.S. states. Journal of Money, Credit and Banking, 27(4), 1046–1059.",
    /* 9 */ "Iara, A., & Wolff, G. B. (2014). Rules and risk in the euro area. European Journal of Political Economy, 34, 222–236.",
    /* 10 */ "Heinemann, F., Osterloh, S., & Kalb, A. (2014). Sovereign risk premia: The link between fiscal rules and stability culture. Journal of International Money and Finance, 41, 110–127.",
    /* 11 */ "Thornton, J., & Vasilakis, C. (2018). Fiscal rules and government borrowing costs: International evidence. Economic Inquiry, 56(1), 446–459.",
    /* 12 */ "Reinhart, C. M., Rogoff, K. S., & Savastano, M. A. (2003). Debt intolerance. Brookings Papers on Economic Activity, 2003(1), 1–74.",
    /* 13 */ "Eaton, J., & Gersovitz, M. (1981). Debt with potential repudiation: Theoretical and empirical analysis. Review of Economic Studies, 48(2), 289–309.",
    /* 14 */ "Calvo, G. A. (1988). Servicing the public debt: The role of expectations. American Economic Review, 78(4), 647–661.",
    /* 15 */ "Arellano, C. (2008). Default risk and income fluctuations in emerging economies. American Economic Review, 98(3), 690–712.",
    /* 16 */ "Longstaff, F. A., Pan, J., Pedersen, L. H., & Singleton, K. J. (2011). How sovereign is sovereign credit risk? American Economic Journal: Macroeconomics, 3(2), 75–103.",
    /* 17 */ "Hilscher, J., & Nosbusch, Y. (2010). Determinants of sovereign risk: Macroeconomic fundamentals and the pricing of sovereign debt. Review of Finance, 14(2), 235–262.",
    /* 18 */ "Bohn, H. (1998). The behavior of U.S. public debt and deficits. Quarterly Journal of Economics, 113(3), 949–963.",
    /* 19 */ "Ghosh, A. R., Kim, J. I., Mendoza, E. G., Ostry, J. D., & Qureshi, M. S. (2013). Fiscal fatigue, fiscal space and debt sustainability in advanced economies. Economic Journal, 123(566), F4–F30.",
    /* 20 */ "Kaminsky, G. L., Reinhart, C. M., & Végh, C. A. (2004). When it rains, it pours: Procyclical capital flows and macroeconomic policies. NBER Macroeconomics Annual, 19, 11–53.",
    /* 21 */ "Frankel, J. A., Végh, C. A., & Vuletin, G. (2013). On graduation from fiscal procyclicality. Journal of Development Economics, 100(1), 32–47.",
    /* 22 */ "Sargent, T. J., & Wallace, N. (1981). Some unpleasant monetarist arithmetic. Federal Reserve Bank of Minneapolis Quarterly Review, 5(3), 1–17.",
    /* 23 */ "Abadie, A., & Gardeazabal, J. (2003). The economic costs of conflict: A case study of the Basque Country. American Economic Review, 93(1), 113–132.",
    /* 24 */ "Abadie, A., Diamond, A., & Hainmueller, J. (2010). Synthetic control methods for comparative case studies: Estimating the effect of California's tobacco control program. Journal of the American Statistical Association, 105(490), 493–505.",
    /* 25 */ "Abadie, A., Diamond, A., & Hainmueller, J. (2015). Comparative politics and the synthetic control method. American Journal of Political Science, 59(2), 495–510.",
    /* 26 */ "Abadie, A. (2021). Using synthetic controls: Feasibility, data requirements, and methodological aspects. Journal of Economic Literature, 59(2), 391–425.",
    /* 27 */ "Ben-Michael, E., Feller, A., & Rothstein, J. (2021). The augmented synthetic control method. Journal of the American Statistical Association, 116(536), 1789–1803.",
    /* 28 */ "Arkhangelsky, D., Athey, S., Hirshberg, D. A., Imbens, G. W., & Wager, S. (2021). Synthetic difference-in-differences. American Economic Review, 111(12), 4088–4118.",
    /* 29 */ { jer: "2021-v26-i2-03" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Over the past two decades, numerical fiscal rules have spread from a handful of advanced economies to a large part of the emerging world. In 2000 only a few emerging-market governments operated under a binding legal limit on deficits, debt or spending; by 2022 more than half of the economies in our sample did. Brazil's Fiscal Responsibility Law of 2000, India's Fiscal Responsibility and Budget Management Act of 2003, Chile's structural balance rule, Mexico's balanced-budget law of 2006, Colombia's structural fiscal rule of 2011 and Thailand's Fiscal Responsibility Act of 2018 are prominent examples. The stated aim of these rules is almost always the same: to strengthen the credibility of fiscal policy, to contain the deficit bias that arises from political economy frictions [2][3], and thereby to lower the cost at which governments can borrow.",
        "Whether fiscal rules actually deliver lower borrowing costs is far from obvious. Rules can be suspended, circumvented through creative accounting or simply ignored, and financial markets may see through rules that are not backed by political commitment or enforcement. Conversely, rules may be adopted precisely when fiscal positions and market conditions are already improving, so that a simple comparison of yields before and after adoption confounds the effect of the rule with the circumstances of its adoption. Existing evidence comes mostly from advanced economies — US states [7][8] and the euro area [5][9][10] — where institutional settings differ from those of emerging markets, whose governments face higher and more volatile risk premia and are more exposed to shifts in global investor sentiment [12][20].",
        "This paper estimates the effect of fiscal-rule adoption on 10-year sovereign bond yields in 38 emerging-market economies over 2000–2022. We combine a new chronology of rule adoption, compiled from the IMF Fiscal Rules Dataset [6] and national legislation, with annual data on sovereign yields and macroeconomic fundamentals. To deal with the non-random timing of adoption, we use the synthetic-control method [23][24][25]: for each of the 23 countries that adopted a first national numerical fiscal rule during the sample period, we construct a weighted combination of non-adopting countries that closely reproduces the adopter's yield path and fundamentals in the years before adoption, and we measure the effect of the rule as the post-adoption gap between the adopter and its synthetic counterpart. Averaging across adopters yields an estimate of the average effect of adoption.",
        "We find that fiscal-rule adoption reduces 10-year sovereign yields by an average of 64 basis points over the five years following adoption. The effect builds gradually, from 18 basis points in the year after adoption to 108 basis points in the fifth year, a pattern consistent with markets learning about the rule's durability rather than with an immediate announcement effect. Permutation inference based on placebo adoptions in the donor pool rejects the null hypothesis of no effect at conventional levels, and the pre-adoption fit is close: the average root mean squared prediction error before adoption is 21 basis points, small relative to the estimated effects.",
        "The effects are strongly heterogeneous. They are concentrated in countries with rule-based monetary frameworks — inflation targeting with an independent central bank — and in countries whose rules are backed by credible enforcement mechanisms, such as statutory correction procedures, independent fiscal councils or constitutional anchoring. In these groups the average reduction exceeds 90 basis points, whereas it is around 30 basis points and statistically insignificant elsewhere. Numerical rules targeting expenditure growth are more effective than debt-to-GDP rules: the average reduction is 89 basis points for expenditure rules and 40 basis points for debt rules. We show that the yield reductions are accompanied by improvements in primary balances, lower public debt ratios and higher credit ratings, and that the results are robust to a range of placebo and falsification tests, alternative estimators [27][28] and alternative samples, and are not driven by selection on observables.",
        "The rest of the paper is organised as follows. Section 2 describes the institutional background, Section 3 reviews the related literature and Section 4 develops our hypotheses. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 examines heterogeneity and mechanisms, and Section 9 reports robustness checks. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "A fiscal rule is a long-lasting constraint on fiscal policy through numerical limits on budgetary aggregates [4]. Following the classification used by the IMF [6], we distinguish four types of rule. Budget-balance rules cap the overall or structural deficit, sometimes over the cycle; debt rules set an explicit limit or target for public debt as a share of GDP; expenditure rules limit the growth of total, primary or current spending, typically in real terms or relative to potential output growth; and revenue rules set floors or ceilings on revenue, usually to channel windfalls into savings. Many countries combine several types, for instance a debt anchor with an operational expenditure ceiling.",
        "The wave of adoption in emerging markets had three phases. The first, around 2000–2005, followed the crises of the late 1990s and early 2000s and was often associated with IMF-supported stabilisation programmes; Brazil, Peru, Argentina, India, Indonesia, Pakistan and Sri Lanka adopted rules in this period, typically in the form of deficit and debt ceilings in fiscal responsibility laws. The second phase followed the global financial crisis, when countries such as Colombia, Serbia, Romania, Hungary and Kenya introduced or redesigned rules, often adding expenditure ceilings and escape clauses. The third, from the mid-2010s, saw the spread of independent fiscal councils and of 'second-generation' rules with explicit correction mechanisms, as in Georgia, Paraguay and Thailand. During the COVID-19 pandemic most countries activated escape clauses, which we treat as part of the rule's design rather than as abandonment.",
        "The design and enforcement of rules vary widely. Some are enshrined in the constitution or in organic laws that require a supermajority to amend; others are set out in ordinary legislation or even in government policy statements. Some provide for automatic correction when the limit is breached, with sanctions for officials, while others rely solely on reputational costs. Independent fiscal councils that monitor compliance and publish assessments exist in only a minority of emerging markets. These differences provide a natural basis for testing whether the effect of rules depends on their credibility.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper relates to three strands of literature. The first concerns the rationale for fiscal rules. Following Kydland and Prescott {1}, the case for rules rests on the time inconsistency of discretionary policy: governments that cannot commit to future fiscal restraint face higher borrowing costs because lenders anticipate future deficits. Political economy models attribute deficit bias to strategic debt accumulation by governments that may lose power [2] and to common-pool problems in the budget process [3]. Rules are a commitment device, but their value depends on whether they can be enforced; Kopits and Symansky {4} set out the properties of a well-designed rule, emphasising simplicity, flexibility and enforceability.",
        "The second strand estimates the effect of rules on borrowing costs. Bayoumi, Goldstein and Woglom {8} and Poterba and Rueben {7} show that US states with stricter balanced-budget rules pay lower yields on their bonds. For the European Union, Debrun et al. {5} find that stronger national rules are associated with better primary balances, and Iara and Wolff {9} and Heinemann, Osterloh and Kalb {10} show that stronger rules are associated with lower sovereign risk premia, with effects that are larger in periods of market stress. Thornton and Vasilakis {11} extend this analysis to a broad panel of countries and find that rules are associated with lower borrowing costs, particularly in developing economies. These studies rely mainly on panel regressions with rule-strength indices, which are vulnerable to the endogeneity of adoption. We contribute a design that compares each adopter with a tailored counterfactual and that allows the effect to vary over time since adoption.",
        "The third strand studies the determinants of sovereign risk in emerging markets. Theory emphasises the willingness to repay [13], self-fulfilling expectations [14] and the interaction of default risk with output volatility [15]. Empirical work shows that emerging-market spreads reflect both domestic fundamentals [17] and global factors such as risk appetite and US financial conditions [16], and that emerging economies can sustain lower debt levels than advanced economies before they face market pressure [12]. Fiscal policy in emerging markets has historically been procyclical [20], although many countries have 'graduated' towards countercyclicality in part through improved institutions [21]. A large literature on fiscal sustainability examines whether primary balances respond to debt [18][19]. Our results suggest that fiscal rules strengthen this response and that markets reward them, but only where the institutional environment makes them credible. Finally, our use of synthetic controls follows a growing literature applying the method to macroeconomic policy questions [26], complementing quasi-experimental evidence on fiscal policy at the subnational level [29].",
      ],
    },
    {
      id: "hypotheses",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a government that issues long-term debt to investors who price it on the basis of expected default losses, expected inflation and a risk premium. A fiscal rule can lower yields through three channels. First, by constraining future deficits it lowers the expected path of debt and therefore default risk. Second, by reducing the risk that the government will eventually resort to inflationary finance [22], it lowers expected inflation and the inflation risk premium on local-currency debt. Third, by reducing uncertainty about future policy, it may lower the compensation investors demand for bearing fiscal risk. All three channels operate only to the extent that investors believe the rule will be respected.",
        "The credibility of a rule depends on the cost of breaking it. Where a rule is anchored in the constitution or in organic law, where breaches trigger automatic corrections, and where an independent body monitors compliance, the political cost of abandoning the rule is high. Credibility also depends on the monetary regime. In a country with an independent, inflation-targeting central bank, the government cannot easily inflate away its debt, so fiscal discipline and monetary discipline reinforce each other; a fiscal rule in a country with a subordinate central bank may be undermined by monetary financing. Finally, the type of rule matters. Debt rules target a variable that the government controls only imperfectly, since debt depends on growth, interest rates and exchange rates, and they provide weak operational guidance in the short run. Expenditure rules target a variable that the government directly controls, are easier to monitor and do not force procyclical tightening when revenues fall.",
        "This framework yields four hypotheses. H1: fiscal-rule adoption reduces long-term sovereign yields, with an effect that builds over time as the rule establishes a track record. H2: the effect is larger in countries with rule-based monetary frameworks. H3: the effect is larger where rules are backed by credible enforcement mechanisms. H4: expenditure rules reduce yields by more than debt rules. In addition, if rules operate through the channels described above, adoption should be followed by improvements in fiscal outcomes and credit ratings.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our sample consists of 38 emerging-market economies observed annually over 2000–2022. We include all economies classified as emerging or frontier markets by the main bond index providers for which a 10-year sovereign yield is available for at least 15 years and which did not have a national numerical fiscal rule in force in 2000. Countries that adopted a rule before 2000 (for example Poland, whose constitutional debt limit dates from 1997) are excluded because their pre-adoption period cannot be observed.",
      ],
      subsections: [
        {
          id: "data-rules",
          heading: "5.1 Fiscal rules",
          paragraphs: [
            "We date the adoption of a country's first national numerical fiscal rule using the IMF Fiscal Rules Dataset [6] and its subsequent updates, cross-checked against the original legislation. The adoption year is the year in which the rule first applied to the budget, which is usually the year after the law was passed. We record the type of rule (budget balance, debt, expenditure or revenue), its legal basis, whether it includes a formal correction mechanism and whether compliance is monitored by an independent fiscal council. We classify enforcement as credible if the rule has a constitutional or organic-law basis and either a correction mechanism or an independent monitoring body. Of the 38 countries, 23 adopted a first rule between 2004 and 2017, which leaves at least four years of pre-adoption data and five years of post-adoption data for each adopter; 15 had no national numerical rule in force at any time during 2000–2022 and form the donor pool. Countries adopting a rule in 2001–2003 or after 2017 are not part of the 38-country sample.",
            "Table 1 summarises the sample. Among the 23 adopters, 9 adopted a debt rule as their principal constraint, 8 an expenditure rule and 6 a budget-balance rule; 12 adopted rules with credible enforcement under our definition, and 13 had an inflation-targeting central bank at the time of adoption. The median adoption year is 2010. Adopters and non-adopters had broadly similar yields in 2000–2003, but adopters had somewhat higher debt ratios and were more likely to have had an IMF programme in the preceding five years.",
          ],
          table: {
            id: "tab-sample",
            caption: "Table 1. Sample composition and summary statistics, 2000–2022",
            columns: ["Variable", "Adopters (23)", "Donor pool (15)", "All (38)", "Difference (p-value)"],
            rows: [
              ["10-year sovereign yield, 2000–2003 average (%)", "10.8", "10.2", "10.6", "0.61"],
              ["Gross public debt, 2000–2003 average (% of GDP)", "52.4", "44.9", "49.4", "0.18"],
              ["Primary balance, 2000–2003 average (% of GDP)", "−0.9", "−0.4", "−0.7", "0.43"],
              ["CPI inflation, 2000–2003 average (%)", "7.9", "8.6", "8.2", "0.72"],
              ["Real GDP growth, 2000–2003 average (%)", "3.8", "4.1", "3.9", "0.66"],
              ["Credit rating, 2003 (notches, AAA = 21)", "10.2", "10.6", "10.4", "0.57"],
              ["IMF programme in 1995–1999 (share)", "0.48", "0.27", "0.39", "0.19"],
              ["Rule type: debt / expenditure / balance (count)", "9 / 8 / 6", "—", "—", ""],
              ["Credible enforcement (count)", "12", "—", "—", ""],
              ["Inflation targeting at adoption (count)", "13", "—", "—", ""],
              ["Adoption year, median (range)", "2010 (2004–2017)", "—", "—", ""],
            ],
            note: "Adopters are countries whose first national numerical fiscal rule took effect between 2004 and 2017. The donor pool contains countries with no national numerical fiscal rule in force during 2000–2022. Credit ratings are the average of S&P, Moody's and Fitch long-term foreign-currency ratings converted to a 21-point scale. The last column reports p-values for differences in means between adopters and the donor pool.",
          },
        },
        {
          id: "data-yields",
          heading: "5.2 Sovereign yields and covariates",
          paragraphs: [
            "Our outcome is the annual average 10-year sovereign bond yield. For 29 countries we use local-currency 10-year government bond yields from Bloomberg and national central banks. For the remaining nine countries, in which a liquid local-currency 10-year market did not exist for much of the sample, we construct a dollar yield by adding the country's sovereign spread from the JP Morgan EMBI Global index to the 10-year US Treasury yield. Because the two measures differ in their exposure to inflation and currency risk, we include a measure-type indicator among the matching variables and show that the results are similar when we restrict the sample to local-currency yields.",
            "The covariates used to construct synthetic controls are those that the literature identifies as determinants of sovereign risk [12][16][17]: gross general government debt and the primary balance as shares of GDP, real GDP growth, CPI inflation, the current-account balance, foreign exchange reserves in months of imports, and the average sovereign credit rating. Macroeconomic data come from the IMF World Economic Outlook and International Financial Statistics. We also collect information on IMF programmes, banking and currency crises, and changes in the monetary policy regime for use in robustness checks.",
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
          id: "strategy-sc",
          heading: "6.1 Synthetic controls",
          paragraphs: [
            "For each adopter j with adoption year T(j), we construct a synthetic control as a weighted average of the 15 donor countries, with non-negative weights summing to one, chosen to minimise the distance between the adopter and the synthetic unit in the pre-adoption period [24][26]. The matching variables are the yields in each of the pre-adoption years (from 2000 or, where data start later, the first available year) together with pre-adoption averages of the covariates listed in Section 5.2. The relative importance of the covariates is chosen by minimising the mean squared prediction error of yields over the pre-adoption period, following Abadie, Diamond and Hainmueller {25}. The effect for adopter j in event year k is the difference between its yield and that of its synthetic control, Y(j,T+k) − Ŷ(j,T+k), for k = 0, …, 5.",
            "Our main parameter is the average effect over event years 1 to 5, averaged across the 23 adopters. We report also the average effect by event year. Because several adopters overlap in calendar time, the synthetic controls share donors, but each adopter has its own weights, so that common shocks in a given calendar year affect adopter and synthetic control alike. We exclude from the donor pool of each adopter any country that experienced a sovereign default or a change of monetary regime within two years of the adopter's adoption date, to avoid contaminating the counterfactual with idiosyncratic shocks [26].",
          ],
        },
        {
          id: "strategy-inference",
          heading: "6.2 Inference and selection",
          paragraphs: [
            "We conduct inference by permutation [24]. For each adopter we reassign the adoption date to each donor country in turn, compute the placebo effect, and compare the adopter's ratio of post- to pre-adoption root mean squared prediction error (RMSPE) with the distribution of placebo ratios. For the average effect, we draw one placebo country for each adopter, compute the average placebo effect, repeat this 10,000 times and report the share of draws with an average effect at least as large in absolute value as the estimated one. We report also confidence intervals obtained by inverting this test.",
            "The key identifying assumption is that, conditional on matching the pre-adoption path of yields and fundamentals, the synthetic control provides a valid counterfactual for the adopter's post-adoption yields. The main threat is selection: governments may adopt rules when they expect fiscal positions or market conditions to improve. Matching on the full pre-adoption yield path addresses selection on any factor that affected yields before adoption, including persistent unobserved determinants [24]. To address selection on transitory shocks around adoption, we test for anticipation effects by moving the adoption date backwards (in-time placebos), examine whether adoption predicts changes in fundamentals that should not be affected by rules, and show that the results hold when we exclude adoptions that coincided with IMF programmes or with the end of a crisis. We also compare the synthetic-control estimates with those of the augmented synthetic control [27] and synthetic difference-in-differences [28] estimators, which relax the requirement of exact pre-period fit.",
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
          id: "results-fit",
          heading: "7.1 Pre-adoption fit",
          paragraphs: [
            "Table 2 compares adopters with their synthetic controls and with the simple average of the donor pool in the four years before adoption. The synthetic controls reproduce the adopters' yields closely, with an average gap of 3 basis points and an average pre-adoption RMSPE of 21 basis points. They also match the adopters' fundamentals well: debt, primary balance, inflation, growth, reserves and ratings differ by small and statistically insignificant amounts. By contrast, the simple donor average has lower debt and a better credit rating than the adopters, which illustrates why a naïve comparison would be misleading. The synthetic controls are typically composed of three to five donor countries; the countries receiving the largest average weights are those with similar income levels and similar exposure to commodity prices.",
          ],
          table: {
            id: "tab-balance",
            caption: "Table 2. Pre-adoption balance: adopters, synthetic controls and donor average (years −4 to −1)",
            columns: ["Variable", "Adopters", "Synthetic controls", "Donor average", "Adopter − synthetic (p-value)"],
            rows: [
              ["10-year sovereign yield (%)", "8.47", "8.44", "7.91", "0.88"],
              ["Gross public debt (% of GDP)", "48.6", "47.9", "41.3", "0.79"],
              ["Primary balance (% of GDP)", "−0.6", "−0.5", "0.1", "0.84"],
              ["CPI inflation (%)", "5.9", "6.1", "6.4", "0.81"],
              ["Real GDP growth (%)", "4.2", "4.3", "4.0", "0.90"],
              ["Current-account balance (% of GDP)", "−2.4", "−2.2", "−1.1", "0.77"],
              ["Reserves (months of imports)", "5.1", "5.3", "5.9", "0.74"],
              ["Credit rating (notches)", "10.9", "11.0", "11.7", "0.85"],
              ["Pre-adoption RMSPE of yields (bp)", "—", "21", "—", ""],
            ],
            note: "Averages over event years −4 to −1 across the 23 adopters. Synthetic controls are constructed separately for each adopter from the 15-country donor pool. The donor average is the unweighted mean over donors in the same calendar years. p-values are from permutation tests that reassign adoption to donor countries.",
          },
        },
        {
          id: "results-main",
          heading: "7.2 Effect on sovereign yields",
          paragraphs: [
            "Figure 1 plots the average yield of the 23 adopters and of their synthetic controls in event time, from eight years before to five years after adoption. Before adoption the two series move almost exactly together, falling gradually as emerging-market yields declined in the 2000s. After adoption a gap opens and widens steadily: by the fifth year the adopters' average yield is more than one percentage point below that of the synthetic controls.",
            "Table 3 reports the estimates by event year. In the adoption year itself the gap is small at 6 basis points and insignificant, suggesting that markets did not react strongly to the announcement of rules. The effect is 18 basis points in the first year after adoption, 41 in the second, 67 in the third, 86 in the fourth and 108 in the fifth. The average effect over years 1 to 5 is 64 basis points, with a permutation p-value of 0.004 and a 95 percent confidence interval from 31 to 97 basis points. Twenty of the 23 adopters have negative average effects, and 15 have post- to pre-adoption RMSPE ratios in the top decile of their placebo distributions.",
          ],
          figures: [
            {
              id: "fig-yields",
              caption: "Figure 1. Average 10-year sovereign yields of adopters and synthetic controls, event time",
              kind: "line",
              xLabels: ["−8", "−7", "−6", "−5", "−4", "−3", "−2", "−1", "0", "1", "2", "3", "4", "5"],
              yLabel: "10-year yield (%)",
              series: [
                { name: "Adopters (23 countries)", values: [9.84, 9.61, 9.32, 9.05, 8.81, 8.58, 8.39, 8.11, 7.93, 7.71, 7.45, 7.19, 6.97, 6.72] },
                { name: "Synthetic controls", values: [9.81, 9.65, 9.29, 9.08, 8.77, 8.55, 8.36, 8.09, 7.99, 7.89, 7.86, 7.86, 7.83, 7.80] },
              ],
              marker: 8,
              note: "Event year 0 is the first year in which the fiscal rule applied to the budget. Simple averages across the 23 adopters and their country-specific synthetic controls; years before 2000 are not observed for early adopters, so the earliest event years average over fewer countries.",
            },
          ],
          table: {
            id: "tab-main",
            caption: "Table 3. Effect of fiscal-rule adoption on 10-year sovereign yields, by event year",
            columns: ["Event year", "Average effect (bp)", "Permutation p-value", "95% CI (bp)", "Countries with negative effect"],
            rows: [
              ["0", "−6", "0.482", "[−24, 12]", "13 / 23"],
              ["1", "−18", "0.141", "[−42, 6]", "16 / 23"],
              ["2", "−41**", "0.022", "[−75, −7]", "18 / 23"],
              ["3", "−67***", "0.006", "[−112, −22]", "19 / 23"],
              ["4", "−86***", "0.003", "[−139, −33]", "20 / 23"],
              ["5", "−108***", "0.002", "[−171, −45]", "20 / 23"],
              ["Average, years 1–5", "−64***", "0.004", "[−97, −31]", "20 / 23"],
              ["Pre-adoption RMSPE (bp)", "21", "", "", ""],
            ],
            note: "Effects are differences between adopters' yields and those of their synthetic controls, in basis points, averaged across the 23 adopters. p-values are from 10,000 permutations in which each adopter is replaced by a randomly drawn donor with the same adoption date. Confidence intervals are obtained by test inversion. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
        {
          id: "results-magnitude",
          heading: "7.3 Magnitude and interpretation",
          paragraphs: [
            "How large is a 64 basis point reduction? For the average adopter, with gross public debt of about 49 percent of GDP, a reduction of this size in the yield on newly issued long-term debt lowers annual interest costs by roughly 0.3 percent of GDP once the debt stock has been refinanced, and by more in the fifth year when the effect exceeds one percentage point. The reduction is about one-fifth of the decline in the adopters' average yield over the five post-adoption years, and comparable to the effect of a two-notch upgrade in the sovereign credit rating in standard spread regressions [17]. It is larger than the effects of rule-strength indices on euro-area spreads reported by Iara and Wolff {9} and Heinemann, Osterloh and Kalb {10}, which is consistent with the greater importance of fiscal credibility in economies with a history of debt intolerance [12].",
            "The gradual build-up of the effect is informative. If markets fully priced the rule at announcement, yields would fall immediately and remain stable. Instead, the effect grows over five years, which suggests that markets reward rules as they establish a record of compliance. This interpretation is supported by the observation that the effect continues to grow for adopters that complied with their rules in the first three years, but levels off after the third year for adopters that breached them, as we discuss in Section 8.",
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Heterogeneity and Mechanisms",
      paragraphs: [],
      subsections: [
        {
          id: "mechanisms-heterogeneity",
          heading: "8.1 Monetary frameworks, enforcement and rule design",
          paragraphs: [
            "Table 4 reports average effects over years 1 to 5 for subgroups of adopters. Consistent with H2, the effect is concentrated in countries that had an inflation-targeting central bank at the time of adoption: the average reduction is 92 basis points for these 13 countries and 27 basis points, statistically insignificant, for the other 10. Consistent with H3, the effect is also much larger where rules are backed by credible enforcement mechanisms — 91 basis points against 34 basis points. The two dimensions overlap but are not identical: among adopters with both a rule-based monetary framework and credible enforcement, the average reduction is 118 basis points, while among adopters with neither it is only 11 basis points.",
            "Figure 2 and the lower panel of Table 4 compare rule types. Consistent with H4, expenditure rules are associated with the largest reductions, at 89 basis points on average, followed by budget-balance rules at 66 basis points and debt rules at 40 basis points. The difference between expenditure and debt rules is significant at the 5 percent level. Part of this difference reflects the fact that expenditure rules were more often adopted in combination with enforcement mechanisms; but the ranking persists within the credible-enforcement group, where expenditure rules reduce yields by 114 basis points and debt rules by 62. Compliance also matters: adopters that complied with their rule in each of the first three years experienced an average reduction of 88 basis points, compared with 27 basis points for those that breached it at least once.",
          ],
          table: {
            id: "tab-hetero",
            caption: "Table 4. Heterogeneity in the effect of fiscal-rule adoption (average effect, years 1–5)",
            columns: ["Subgroup", "Countries", "Average effect (bp)", "Permutation p-value", "Difference (p-value)"],
            rows: [
              ["Inflation targeting at adoption", "13", "−92***", "0.001", ""],
              ["No inflation targeting", "10", "−27", "0.214", "0.008"],
              ["Credible enforcement", "12", "−91***", "0.002", ""],
              ["Weak enforcement", "11", "−34", "0.168", "0.019"],
              ["Both inflation targeting and credible enforcement", "8", "−118***", "0.001", ""],
              ["Neither", "6", "−11", "0.633", "0.002"],
              ["Expenditure rule", "8", "−89***", "0.004", ""],
              ["Budget-balance rule", "6", "−66**", "0.037", ""],
              ["Debt rule", "9", "−40*", "0.081", "0.046 (vs. expenditure)"],
              ["Complied in years 0–2", "14", "−88***", "0.002", ""],
              ["Breached at least once in years 0–2", "9", "−27", "0.297", "0.011"],
            ],
            note: "Average synthetic-control effects over event years 1–5 for each subgroup of adopters. Enforcement is credible if the rule has a constitutional or organic-law basis and either a formal correction mechanism or an independent fiscal council. Rule type refers to the principal numerical constraint at adoption. Differences are tested by permuting subgroup labels. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
          figures: [
            {
              id: "fig-types",
              caption: "Figure 2. Average yield effects by rule type and enforcement (years 1–5, basis points)",
              kind: "bar",
              xLabels: ["Expenditure", "Budget balance", "Debt"],
              yLabel: "Effect on 10-year yield (bp)",
              series: [
                { name: "Credible enforcement", values: [-114, -84, -62] },
                { name: "Weak enforcement", values: [-47, -30, -29] },
              ],
              note: "Average synthetic-control effects over event years 1–5 for adopters grouped by the principal type of numerical rule and by the credibility of enforcement. Cells contain between two and five countries; estimates for individual cells are imprecise.",
            },
          ],
        },
        {
          id: "mechanisms-fiscal",
          heading: "8.2 Fiscal outcomes, ratings and risk premia",
          paragraphs: [
            "If fiscal rules lower yields by improving expected fiscal outcomes, we should observe improvements in those outcomes after adoption. Table 5 reports synthetic-control estimates for alternative outcomes, constructed in the same way as for yields. Over years 1 to 5 the primary balance of adopters improves by 1.1 percent of GDP relative to their synthetic controls, and by year 5 their gross debt ratio is 4.8 percentage points lower. These magnitudes are consistent with a stronger response of the primary balance to debt, as emphasised in the literature on fiscal reaction functions [18][19]. Fiscal policy also becomes less procyclical: the correlation between the cyclical components of government spending and output falls from positive to roughly zero, in line with the evidence on graduation from procyclicality [21].",
            "Credit ratings of adopters improve by 0.7 notches on average by year 5, and for the subset of countries with traded credit default swaps, five-year CDS spreads fall by 52 basis points. The fall in CDS spreads, which measure default risk directly, accounts for most of the yield reduction for the countries in which both are observed, suggesting that the main channel is lower perceived default risk. For local-currency yields, we find also a modest reduction in survey-based long-term inflation expectations of 0.3 percentage points, consistent with a smaller inflation-risk channel [22]. By contrast, adoption has no significant effect on real GDP growth or on the current-account balance, which suggests that the yield reductions do not reflect a general improvement in economic conditions.",
          ],
          table: {
            id: "tab-mechanisms",
            caption: "Table 5. Effects of fiscal-rule adoption on fiscal outcomes, ratings and risk measures",
            columns: ["Outcome", "Average effect, years 1–5", "Effect in year 5", "Permutation p-value (average)", "Countries"],
            rows: [
              ["Primary balance (% of GDP)", "1.1***", "1.4", "0.006", "23"],
              ["Gross public debt (% of GDP)", "−2.6**", "−4.8", "0.031", "23"],
              ["Spending–output cyclical correlation", "−0.21**", "", "0.044", "23"],
              ["Credit rating (notches)", "0.4**", "0.7", "0.027", "23"],
              ["5-year CDS spread (bp)", "−41***", "−52", "0.009", "16"],
              ["Long-term inflation expectations (pp)", "−0.3*", "−0.4", "0.072", "17"],
              ["Real GDP growth (%)", "0.1", "0.2", "0.689", "23"],
              ["Current-account balance (% of GDP)", "0.2", "0.3", "0.574", "23"],
            ],
            note: "Synthetic-control estimates for each outcome, constructed with the same donor pool and matching variables as the yield estimates, with the pre-adoption path of the outcome replacing yields among the matching variables. The cyclical correlation is computed over rolling five-year windows using Hodrick–Prescott filtered real spending and output. CDS spreads and inflation expectations are available for a subset of countries. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks and falsification tests. The first group varies the estimator. The augmented synthetic control method [27], which corrects for imperfect pre-period fit with an outcome model, gives an average effect of 59 basis points; synthetic difference-in-differences [28] gives 67 basis points; and a standard event-study regression with country and year fixed effects, using the never-adopters as controls, gives 55 basis points. The second group varies the sample: restricting attention to local-currency yields, excluding the crisis years 2008–2009, dropping adoptions that coincided with an IMF programme, and dropping each adopter in turn all yield estimates between 56 and 71 basis points. Excluding from the donor pool countries whose weight exceeds 0.4 in any synthetic control also leaves the estimate essentially unchanged.",
        "The falsification tests support a causal interpretation. In-time placebos that move the adoption date four years earlier, using only pre-adoption data, produce an average 'effect' of 4 basis points, indicating no anticipation or pre-existing divergence. In-space placebos that assign adoption to donor countries produce a distribution of average effects centred on zero, with the estimated effect lying below the 1st percentile. Adoption does not predict changes in variables that rules should not affect in the short run, such as the share of debt held by non-residents in the pre-adoption year or terms-of-trade shocks. Finally, to address selection on observables, we re-estimate the synthetic controls matching additionally on the change in debt and yields in the two years before adoption, and restrict the sample to adopters whose pre-adoption fit is in the best two-thirds; both give similar or larger effects. Selection on improving fundamentals, which would bias the estimates upward, therefore does not appear to drive our results.",
      ],
      table: {
        id: "tab-robustness",
        caption: "Table 6. Robustness checks and falsification tests (average effect, years 1–5)",
        columns: ["Specification", "Average effect (bp)", "p-value", "Adopters", "Pre-period RMSPE (bp)"],
        rows: [
          ["Baseline synthetic control (Table 3)", "−64***", "0.004", "23", "21"],
          ["Augmented synthetic control", "−59***", "0.006", "23", "14"],
          ["Synthetic difference-in-differences", "−67***", "0.003", "23", "—"],
          ["Event-study regression, never-adopters as controls", "−55***", "0.009", "23", "—"],
          ["Local-currency yields only", "−69***", "0.005", "17", "19"],
          ["Excluding 2008–2009", "−61***", "0.007", "23", "22"],
          ["Excluding adoptions during IMF programmes", "−71***", "0.004", "17", "20"],
          ["Leave-one-adopter-out (range)", "[−56, −68]", "≤ 0.01", "22", "20–22"],
          ["Donor weights capped at 0.4", "−62***", "0.005", "23", "24"],
          ["Matching on pre-adoption changes in debt and yields", "−66***", "0.004", "23", "20"],
          ["Best two-thirds of pre-period fit", "−72***", "0.002", "15", "13"],
          ["In-time placebo: adoption moved 4 years earlier", "−4", "0.712", "19", "18"],
        ],
        note: "Each row reports the average effect over event years 1–5 under the stated modification. p-values are from permutation inference except for the event-study regression, which uses standard errors clustered by country. The in-time placebo uses only data from before the actual adoption date and is restricted to adopters with at least eight pre-adoption years. *** p < 0.01, ** p < 0.05, * p < 0.10.",
      },
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our findings have three implications for the design of fiscal frameworks in emerging markets. First, fiscal rules can lower borrowing costs substantially, but they are not a free lunch. The yield reductions we estimate accrue gradually and depend on a record of compliance, and they coincide with measurable improvements in primary balances and debt. Markets appear to reward rules that change fiscal behaviour, not rules that merely exist on paper. Governments that adopt rules to signal discipline without the intention of complying are unlikely to see lasting benefits, and breaches early in a rule's life appear particularly costly in terms of foregone credibility.",
        "Second, rules are complements to other institutions. The effects are largest where the central bank is independent and targets inflation, and where the rule is anchored in law and monitored by an independent body. This suggests that reforms to fiscal and monetary frameworks reinforce each other, and that countries considering a fiscal rule should invest at the same time in the institutions that make it credible — statutory correction mechanisms, transparent reporting and independent fiscal councils. The weak effects we find in countries without such institutions caution against viewing a fiscal rule as a substitute for broader institutional reform.",
        "Third, rule design matters. Expenditure rules, which target a variable under direct government control and allow automatic stabilisers to operate on the revenue side, are more effective than debt rules, whose targets depend on growth, interest rates and exchange rates and which can force procyclical tightening in downturns. This finding supports the move towards 'second-generation' frameworks that combine a debt anchor with an operational expenditure ceiling and well-defined escape clauses. The experience of the pandemic, when escape clauses were widely activated, will provide an important test of whether rules with such flexibility can retain their credibility once suspended.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "This paper has estimated the effect of fiscal-rule adoption on sovereign bond yields in 38 emerging-market economies over 2000–2022, using synthetic controls constructed from countries that did not adopt rules. We find that adoption reduces 10-year sovereign yields by an average of 64 basis points over the five years following adoption, with an effect that grows over time. The effects are concentrated in countries with rule-based monetary frameworks and credible enforcement mechanisms, and expenditure rules are more effective than debt-to-GDP rules. The yield reductions are accompanied by improvements in primary balances, debt ratios and credit ratings, and they are robust to alternative estimators, samples and placebo tests.",
        "Several questions remain for future research. Our sample period ends before most countries had restored their rules after the pandemic, and the long-run effects of escape-clause activation on credibility are not yet known. The interaction between national fiscal rules and the rules imposed by IMF programmes or regional arrangements also deserves closer study. Finally, while we focus on long-term yields, fiscal rules may also affect the maturity and currency composition of public debt, which matter for vulnerability to crises in emerging markets.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Rule Chronology and Estimation Details",
      paragraphs: [
        "Rule chronology. For each country we identify the first national numerical fiscal rule applying to the central or general government budget. Rules applying only to subnational governments, rules set out solely in non-binding medium-term frameworks, and supranational rules are not counted. Where a fiscal responsibility law introduced several numerical limits at once, we classify the rule by the limit described as binding in the law and in subsequent budget documents. Discrepancies between the IMF dataset and national legislation, which arose for five countries, were resolved in favour of the legal text.",
        "Yields. Annual yields are averages of end-of-month observations. For countries in which the 10-year benchmark was introduced during the sample period, we splice the series with the closest available maturity (7 or 12 years) adjusted by the average maturity spread in the overlapping year. Dollar yields are constructed as the EMBI Global country spread plus the 10-year US Treasury yield, both as annual averages.",
        "Synthetic-control estimation. Weights are obtained by nested optimisation over donor weights and covariate importance weights, with the pre-adoption period split into a training period (the first two-thirds of pre-adoption years) and a validation period used to select covariate weights [26]. Results are similar when all covariate weights are set equal. For permutation inference, each donor's placebo synthetic control is constructed from the remaining donors and the adopters' own pre-adoption data are excluded.",
      ],
    },
  ],
};
