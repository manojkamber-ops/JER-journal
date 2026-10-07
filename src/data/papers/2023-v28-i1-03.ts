// Vol. 28, No. 1 (January 2023) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2023-v28-i1-03",
  acknowledgments:
    "We thank seminar participants at Hanyang University, the University of Zurich and the Korea Development Institute, two anonymous referees and the handling Associate Editor for helpful comments. Officials of the Office for Government Policy Coordination kindly answered questions about the implementation of the reform. All errors are our own.",
  dataAvailability:
    "Establishment counts are derived from the Census on Establishments (Statistics Korea), consumer prices from the consumer price index micro-items, and complaint records from the Korea Consumer Agency; access to the micro-data is subject to the providers' conditions. The reform coding, the entry-restrictiveness index and replication code are available from the corresponding author.",
  editorialNote:
    "Min-Jae Choi and Andreas Müller evaluate Korea's 2014 reform that lowered entry barriers in 52 professions and find that firm entry rose by 11.2 percent over four years while consumer prices fell by 3.4 percent, with no measurable rise in complaint rates.",
  refs: [
    /* 1 */ "Djankov, S., La Porta, R., Lopez-de-Silanes, F., & Shleifer, A. (2002). The regulation of entry. Quarterly Journal of Economics, 117(1), 1–37.",
    /* 2 */ "Klapper, L., Laeven, L., & Rajan, R. (2006). Entry regulation as a barrier to entrepreneurship. Journal of Financial Economics, 82(3), 591–629.",
    /* 3 */ "Bertrand, M., & Kramarz, F. (2002). Does entry regulation hinder job creation? Evidence from the French retail industry. Quarterly Journal of Economics, 117(4), 1369–1413.",
    /* 4 */ "Kleiner, M. M., & Krueger, A. B. (2013). Analyzing the extent and influence of occupational licensing on the labor market. Journal of Labor Economics, 31(S1), S173–S202.",
    /* 5 */ "Kleiner, M. M. (2000). Occupational licensing. Journal of Economic Perspectives, 14(4), 189–202.",
    /* 6 */ "Blanchard, O., & Giavazzi, F. (2003). Macroeconomic effects of regulation and deregulation in goods and labor markets. Quarterly Journal of Economics, 118(3), 879–907.",
    /* 7 */ "Nicoletti, G., & Scarpetta, S. (2003). Regulation, productivity and growth: OECD evidence. Economic Policy, 18(36), 9–72.",
    /* 8 */ "Aghion, P., Blundell, R., Griffith, R., Howitt, P., & Prantl, S. (2009). The effects of entry on incumbent innovation and productivity. Review of Economics and Statistics, 91(1), 20–32.",
    /* 9 */ "Bresnahan, T. F., & Reiss, P. C. (1991). Entry and competition in concentrated markets. Journal of Political Economy, 99(5), 977–1009.",
    /* 10 */ "Shapiro, C. (1986). Investment, moral hazard, and occupational licensing. Review of Economic Studies, 53(5), 843–862.",
    /* 11 */ "Leland, H. E. (1979). Quacks, lemons, and licensing: A theory of minimum quality standards. Journal of Political Economy, 87(6), 1328–1346.",
    /* 12 */ "Stigler, G. J. (1971). The theory of economic regulation. Bell Journal of Economics and Management Science, 2(1), 3–21.",
    /* 13 */ "Kleiner, M. M., & Kudrle, R. T. (2000). Does regulation affect economic outcomes? The case of dentistry. Journal of Law and Economics, 43(2), 547–582.",
    /* 14 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 15 */ "Callaway, B., & Sant'Anna, P. H. C. (2021). Difference-in-differences with multiple time periods. Journal of Econometrics, 225(2), 200–230.",
    /* 16 */ "Goodman-Bacon, A. (2021). Difference-in-differences with variation in treatment timing. Journal of Econometrics, 225(2), 254–277.",
    /* 17 */ "Sun, L., & Abraham, S. (2021). Estimating dynamic treatment effects in event studies with heterogeneous treatment effects. Journal of Econometrics, 225(2), 175–199.",
    /* 18 */ "Branstetter, L., Lima, F., Taylor, L. J., & Venâncio, A. (2014). Do entry regulations deter entrepreneurship and job creation? Evidence from recent reforms in Portugal. Economic Journal, 124(577), 805–832.",
    /* 19 */ "Bruhn, M. (2011). License to sell: The effect of business registration reform on entrepreneurial activity in Mexico. Review of Economics and Statistics, 93(1), 382–386.",
    /* 20 */ "Kaplan, D. S., Piedra, E., & Seira, E. (2011). Entry regulation and business start-ups: Evidence from Mexico. Journal of Public Economics, 95(11–12), 1501–1515.",
    /* 21 */ "Schivardi, F., & Viviano, E. (2011). Entry barriers in retail trade. Economic Journal, 121(551), 145–170.",
    /* 22 */ "Haltiwanger, J., Jarmin, R. S., & Miranda, J. (2013). Who creates jobs? Small versus large versus young. Review of Economics and Statistics, 95(2), 347–361.",
    /* 23 */ "Barone, G., & Cingano, F. (2011). Service regulation and growth: Evidence from OECD countries. Economic Journal, 121(555), 931–957.",
    /* 24 */ "Anderson, D. M., Brown, R., Charles, K. K., & Rees, D. I. (2020). Occupational licensing and maternal health: Evidence from early midwifery laws. Journal of Political Economy, 128(11), 4337–4383.",
    /* 25 */ "Ciccone, A., & Papaioannou, E. (2007). Red tape and delayed entry. Journal of the European Economic Association, 5(2–3), 444–458.",
    /* 26 */ "Cameron, A. C., Gelbach, J. B., & Miller, D. L. (2008). Bootstrap-based improvements for inference with clustered errors. Review of Economics and Statistics, 90(3), 414–427.",
    /* 27 */ "Roth, J. (2022). Pretest with caution: Event-study estimates after testing for parallel trends. American Economic Review: Insights, 4(3), 305–322.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Barriers to entry into markets for goods and services are among the most persistent features of economic regulation. Licensing requirements, minimum capital rules, numerical caps on the number of providers and restrictions on business form are justified as protections for consumers, yet they also shield incumbents from competition. Cross-country evidence associates heavier entry regulation with fewer new firms, higher prices and lower productivity growth [1][2][7], but cross-country comparisons struggle to separate the effect of regulation from the many institutional differences that accompany it. Evidence from well-identified reforms within a single country remains comparatively scarce, especially for professional and personal services.",
        "This paper studies a large and abrupt change in entry regulation in Korea. In 2014 the government adopted a regulatory reform package that removed or substantially relaxed entry barriers in 52 previously restricted professions, ranging from real-estate brokerage and customs brokerage to driving instruction, opticians, funeral services and private tutoring academies. The reform was part of a government-wide drive to reduce the stock of regulation, and the selection of professions was driven largely by a centralised review of whether each restriction had a documented consumer-protection rationale rather than by the economic trajectory of individual professions. Many other licensed professions were reviewed and left unchanged, providing a natural comparison group.",
        "We assemble a profession-by-year panel covering 116 licensed professions over 2009–2018, combining establishment counts from the Census on Establishments with price indices constructed from consumer price micro-items and complaint records from the Korea Consumer Agency. We code each profession's pre-reform entry restrictions into an index of restrictiveness, which allows us to study not only whether the reform mattered but where it mattered most. Our design compares the 52 reformed professions with 64 licensed professions that were not reformed, before and after 2014, in a difference-in-differences framework with profession and year fixed effects.",
        "We find that the reform raised firm entry in treated professions by 11.2 percent over the subsequent four years relative to control professions. Event-study estimates show no differential trend before the reform and an effect that builds over the first two years and then stabilises. The effect is strongly increasing in pre-reform restrictiveness: entry rose by 18.6 percent in the most restrictive tercile of professions, compared with 4.1 percent in the least restrictive tercile. Consumer prices in treated professions fell by an average of 3.4 percent over the same period, and complaint rates per thousand establishments — our proxy for service quality — show no measurable change.",
        "These results speak to a long-standing debate about whether entry regulation in services primarily protects consumers or incumbents [10][11][12]. If restrictions were binding quality floors, we would expect deregulation to raise complaints as lower-quality entrants appear. If they were mainly rents, we would expect entry to rise and prices to fall without quality deterioration. The Korean evidence is closer to the second interpretation, at least for the professions covered by the reform. Our findings complement evidence from retail trade in France and Italy [3][21] and from business-registration reforms in Mexico and Portugal [18][19][20], extending it to licensed professional and personal services in an advanced Asian economy.",
        "The remainder of the paper is organised as follows. Section 2 describes the reform. Section 3 reviews the related literature and Section 4 sets out a simple framework and hypotheses. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 examines mechanisms and heterogeneity, and Section 9 reports robustness checks. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korea's system of occupational and business licensing grew rapidly during the period of state-led industrialisation. By the early 2010s, more than 200 business categories required a licence, registration or designation from a central ministry or local government before an establishment could begin operating. Requirements differed widely: some professions required only registration and a modest fee, while others imposed examinations with fixed annual pass quotas, minimum capital and facility requirements, restrictions on corporate ownership, or explicit caps on the number of licences issued in each district. International comparisons consistently ranked Korea's product-market regulation in services as more restrictive than the OECD average, even as its manufacturing sector was among the most open [7][23].",
        "In early 2014 the government launched a regulatory reform programme under which every ministry was required to review its stock of registered regulations and to justify or remove each restriction. A central committee under the Office for Government Policy Coordination evaluated restrictions on entry into professions according to a common checklist: whether there was documented evidence of consumer harm in the absence of the restriction, whether less restrictive alternatives such as information disclosure or ex-post liability were available, and whether the restriction had been reviewed in the previous ten years. Restrictions that failed the checklist were placed on a reform list, and the corresponding laws and enforcement decrees were amended in a package that took effect in the second half of 2014.",
        "The reform altered entry conditions in 52 professions. In 21 professions, numerical caps or district quotas on the number of establishments were abolished; in 17, minimum capital, staffing or facility requirements were reduced or eliminated; and in 14, licensing was replaced by simple registration or restrictions on corporate ownership and multi-branch operation were lifted. Table 1 summarises the reformed professions by sector and by the main type of change. Professional and business services account for the largest group, followed by personal services and transport-related services. Health professions with direct clinical responsibilities, legal and accounting professions with statutory examinations, and professions regulated under international agreements were outside the scope of the review and remained unchanged.",
        "Two features of the reform are important for identification. First, the timing was common across professions and determined by the government-wide review cycle rather than by conditions in individual markets. Second, the checklist criteria related to the legal justification of restrictions rather than to recent trends in entry, prices or employment. We nonetheless examine whether treated and control professions differed in their pre-reform trajectories, and we show in Section 7 that they did not.",
      ],
      table: {
        id: "tab-reform",
        caption: "Table 1. Professions affected by the 2014 reform, by sector and type of change",
        columns: ["Sector", "Caps or quotas abolished", "Capital/facility rules relaxed", "Licence to registration", "Total reformed", "Unreformed controls"],
        rows: [
          ["Professional and business services", "7", "6", "5", "18", "19"],
          ["Personal services", "5", "5", "4", "14", "12"],
          ["Transport-related services", "6", "2", "2", "10", "9"],
          ["Education and training", "2", "3", "2", "7", "8"],
          ["Health-related (non-clinical)", "1", "1", "1", "3", "16"],
          ["Total", "21", "17", "14", "52", "64"],
        ],
        note: "Classification by the main change in entry conditions; where several changes applied, the most important as assessed from the amended enforcement decree is used. Unreformed controls are licensed professions reviewed under the same programme whose entry conditions were not changed.",
      },
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper relates to three strands of literature. The first studies the economic effects of entry regulation. Djankov et al. {1} documented large cross-country differences in the number of procedures, time and cost required to start a business and showed that heavier regulation is associated with more corruption and a larger informal economy rather than better quality. Klapper, Laeven and Rajan {2} found that entry regulation reduces entry rates especially in industries that would naturally have high entry, and Ciccone and Papaioannou {25} showed that countries with faster start-up procedures experienced more entry into industries facing expanding global demand. Within-country evidence comes from reforms that simplified business registration: Bruhn {19} and Kaplan, Piedra and Seira {20} found modest increases in registered firms after Mexico's rapid business-opening system, while Branstetter et al. {18} found that Portugal's 'On the Spot Firm' reform raised entry mainly among small, low-productivity firms.",
        "A related literature examines entry restrictions in specific sectors. Bertrand and Kramarz {3} showed that zoning boards' approval requirements for large retail stores in France slowed employment growth, and Schivardi and Viviano {21} found that entry barriers in Italian retail raised margins and reduced productivity and prices fell where barriers were relaxed. At the industry level, Nicoletti and Scarpetta {7} and Barone and Cingano {23} linked restrictive service regulation to lower productivity growth in downstream industries. On the theoretical side, Blanchard and Giavazzi {6} showed how deregulation in goods markets reduces rents and raises output in general equilibrium, and Aghion et al. {8} documented that the threat of entry stimulates incumbent innovation near the technological frontier.",
        "The second strand concerns occupational licensing. Kleiner {5} and Kleiner and Krueger {4} documented the growth of licensing in the United States and estimated substantial wage premia for licensed workers. Kleiner and Kudrle {13} found that stricter licensing of dentists raised prices without improving measured dental health. More recent work by Anderson et al. {24} shows that licensing can improve outcomes when it addresses genuine information problems, such as early midwifery laws that reduced maternal mortality. The theory of licensing emphasises this trade-off: Leland {11} showed that minimum quality standards can raise welfare when consumers cannot observe quality, while Shapiro {10} highlighted that licensing raises the average quality of services at the cost of higher prices, harming consumers with a low valuation of quality. Stigler {12} offered the classic account of regulation as captured by the regulated industry. Our setting allows us to assess which of these views best describes the restrictions removed by the Korean reform.",
        "The third strand is methodological. Recent work has clarified the conditions under which two-way fixed-effects difference-in-differences estimates recover meaningful averages of treatment effects when effects vary over time or treatment is staggered [15][16][17]. Because the Korean reform took effect simultaneously for all treated professions, our design avoids the most serious problems that arise from staggered timing, but we nevertheless report estimates from the Callaway and Sant'Anna {15} estimator and follow Roth {27} in assessing the power of pre-trend tests. Our inference accounts for serial correlation and the moderate number of clusters [14][26].",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a profession in which potential entrants differ in their fixed cost of establishment and in the quality of service they would provide. Entry regulation raises the cost of entry, either directly through capital and facility requirements, or by limiting the number of licences through caps and quotas. In a standard model of entry into local markets [9], the number of establishments is determined by the condition that the marginal entrant just covers its fixed cost; lowering the entry cost therefore raises the equilibrium number of establishments and reduces the price–cost margin. Where entry is capped by a binding quota, the effect of abolishing the cap is larger because the pre-reform number of establishments lies below the free-entry level.",
        "The effect on quality depends on the role of the restriction. If the regulation acts as a minimum quality standard in a market with asymmetric information [11], removing it allows low-quality providers to enter and average quality may fall. If quality is observable to consumers through reputation, repeat purchases or online reviews, or if quality is enforced through other instruments such as liability rules, then entry restrictions primarily protect rents, and removing them lowers prices without reducing quality [10][12]. Restrictions on corporate ownership and multi-branch operation fall into a third category: they may prevent the entry of chain operators with lower costs and standardised quality.",
        "These considerations generate three hypotheses. H1: the reform raised entry in treated professions, with larger effects in professions where pre-reform restrictions were more binding, and particularly where numerical caps were abolished. H2: prices in treated professions fell relative to control professions, by more where entry rose more. H3: if pre-reform restrictions mainly protected rents, complaint rates — our proxy for quality — did not rise; if they acted as binding quality floors, complaint rates rose. We test these hypotheses in turn.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our analysis combines three data sources at the level of profession and year for 2009–2018. We map each licensed profession to the most detailed industry codes of the Korean Standard Industrial Classification and to the corresponding consumer price micro-items. The resulting panel contains 116 professions — 52 treated and 64 controls — observed for ten years.",
      ],
      subsections: [
        {
          id: "data-entry",
          heading: "5.1 Firm entry",
          paragraphs: [
            "Entry is measured using the annual Census on Establishments, which covers all establishments with at least one worker. We define an entrant as an establishment that appears in the census for the first time and that does not belong to a firm present in the previous year in the same profession; we thus count new firms rather than new branches of existing firms, although we examine branch openings separately in Section 8. For professions where the industry code is broader than the licensed activity, we use licence registers held by the relevant ministries to compute the share of establishments in the code that hold the licence and apply it to the census counts. In an average pre-reform year, treated professions recorded 1,180 entrants and control professions 1,240.",
            "We also measure exit, the stock of establishments, total employment and average establishment size. Exit is defined symmetrically as the last appearance of a firm in the census. Because entry is highly skewed across professions, we use the logarithm of entrants as the main outcome and report results in levels and as entry rates relative to the lagged stock in robustness checks.",
          ],
        },
        {
          id: "data-prices",
          heading: "5.2 Prices and service quality",
          paragraphs: [
            "Prices come from the micro-items underlying the consumer price index. For 81 of the 116 professions, at least one CPI item directly measures the price of the professional service, such as real-estate brokerage commissions, driving-school tuition or eyeglass lenses; for the remainder, prices are not observed. We construct a profession-level price index by chaining the relevant items with their CPI weights and normalising to 2013 = 100. The price sample contains 37 treated and 44 control professions.",
            "Our proxy for service quality is the complaint rate: the number of consumer complaints recorded by the Korea Consumer Agency per thousand establishments in the profession. The agency records complaints filed by telephone, online or in person and classifies them by business category; we map these categories to professions and exclude complaints relating to prices or contract cancellation, which may change mechanically with the number of transactions. Complaint rates are an imperfect measure of quality, but they capture the most visible failures of service and have been used in similar settings. We discuss their limitations in Section 10.",
          ],
        },
        {
          id: "data-index",
          heading: "5.3 Pre-reform restrictiveness and descriptive statistics",
          paragraphs: [
            "To measure the intensity of pre-reform restrictions, we code each profession's enforcement decrees in 2013 on six dimensions: the existence of a numerical cap or district quota, examination pass quotas, minimum capital, minimum staffing or facility requirements, restrictions on corporate ownership, and restrictions on multi-branch operation. Each dimension is scored from 0 to 1 and the index is the average, scaled from 0 to 10, following the logic of the OECD product-market regulation indicators [7]. The index averages 5.8 for treated professions and 4.9 for control professions.",
            "Table 2 compares treated and control professions in the pre-reform period. Treated professions were somewhat more restrictive, had slightly lower entry rates and higher price levels relative to the 2010 base, but were similar in establishment size, employment growth and complaint rates. Importantly, the growth rates of entry, employment and prices over 2009–2013 were statistically indistinguishable between the two groups, consistent with the parallel-trends assumption examined formally below.",
          ],
          table: {
            id: "tab-desc",
            caption: "Table 2. Pre-reform characteristics of treated and control professions, 2009–2013",
            columns: ["Variable", "Treated (52)", "Control (64)", "Difference", "p-value"],
            rows: [
              ["Entrants per year", "1,180", "1,240", "−60", "0.71"],
              ["Entry rate (% of stock)", "8.4", "9.1", "−0.7", "0.22"],
              ["Exit rate (% of stock)", "7.9", "8.3", "−0.4", "0.41"],
              ["Workers per establishment", "3.6", "3.8", "−0.2", "0.53"],
              ["Restrictiveness index (0–10)", "5.8", "4.9", "0.9", "0.03"],
              ["Price index, 2013 (2010 = 100)", "108.6", "106.9", "1.7", "0.18"],
              ["Complaints per 1,000 establishments", "14.2", "13.6", "0.6", "0.62"],
              ["Growth of entrants, 2009–13 (% p.a.)", "1.3", "1.5", "−0.2", "0.79"],
              ["Growth of employment, 2009–13 (% p.a.)", "2.1", "2.4", "−0.3", "0.58"],
            ],
            note: "Means across professions of profession-level averages for 2009–2013. Price and complaint statistics refer to the 81 professions with price data (37 treated, 44 control) and to all 116 professions, respectively. p-values from two-sided t-tests of equal means.",
          },
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our strategy compares changes in outcomes in reformed professions with changes in unreformed licensed professions before and after the reform. Because control professions were subject to the same macroeconomic conditions, the same administrative review and broadly similar licensing institutions, they provide a plausible counterfactual for the evolution of treated professions in the absence of the reform.",
      ],
      subsections: [
        {
          id: "strategy-did",
          heading: "6.1 Difference-in-differences",
          paragraphs: [
            "Our baseline specification is y_pt = β (Treated_p × Post_t) + α_p + γ_st + X_pt'δ + ε_pt, where y_pt is the outcome of profession p in year t, Treated_p indicates the 52 reformed professions, Post_t equals one from 2015 onwards, α_p are profession fixed effects and γ_st are sector-by-year fixed effects for the five broad sectors in Table 1. Sector-by-year effects absorb shocks common to, for example, all transport-related services, so that identification comes from comparisons within broad sectors. The vector X_pt includes the log of household consumption of the relevant expenditure category and, in some specifications, profession-specific linear trends. Because the reform took effect in the second half of 2014, we treat 2014 as a transition year and exclude it from the baseline; including it as a post year attenuates the estimates slightly. The post-reform period covers the four years 2015–2018.",
            "The coefficient β measures the average change in outcomes in treated professions relative to controls over the four post-reform years. With log outcomes, the percentage effect is exp(β) − 1. Because all treated professions were reformed at the same time, the two-way fixed-effects estimator does not suffer from the negative weighting problems associated with staggered adoption [16], but we report the Callaway and Sant'Anna {15} estimator as a check.",
          ],
        },
        {
          id: "strategy-event",
          heading: "6.2 Event study",
          paragraphs: [
            "To examine dynamics and pre-trends, we estimate y_pt = Σ_k β_k (Treated_p × 1[t = 2014 + k]) + α_p + γ_st + ε_pt, with 2013 (k = −1) as the omitted year. The coefficients for k < 0 test for differential pre-trends, while those for k > 0 trace the evolution of the effect. Following Sun and Abraham {17}, the single treatment date implies that these coefficients are interpretable as average effects at each horizon. We also report the smallest linear pre-trend that our pre-period test would detect with 80 percent power, as suggested by Roth {27}.",
          ],
        },
        {
          id: "strategy-inference",
          heading: "6.3 Inference",
          paragraphs: [
            "Standard errors are clustered by profession to allow for arbitrary serial correlation in the errors [14]. With 116 clusters, conventional cluster-robust inference should be reliable, but we also report wild cluster bootstrap p-values [26] for the main estimates. Because the treatment is assigned at the profession level and professions in the same sector may be subject to correlated shocks, we additionally report standard errors clustered by the 34 two-digit industry groups to which the professions belong.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "This section presents the effects of the reform on firm entry, consumer prices and service quality, corresponding to hypotheses H1 to H3.",
      ],
      subsections: [
        {
          id: "results-entry",
          heading: "7.1 Firm entry",
          paragraphs: [
            "Table 3 reports the main estimates for firm entry. In column (1), with profession and year fixed effects only, the reform raised the log number of entrants by 0.112, or 11.9 percent. Adding sector-by-year fixed effects in column (2) and controls for household expenditure in column (3) yields a coefficient of 0.106, implying that entry in treated professions rose by 11.2 percent over the four years after the reform relative to control professions. Column (3) is our preferred specification. Including profession-specific linear trends in column (4) leaves the estimate essentially unchanged at 0.101, and the Callaway–Sant'Anna estimator in column (5) gives 0.109. The estimates are precisely estimated, with wild bootstrap p-values below 0.01 in all specifications.",
            "Columns (6) and (7) examine other margins. The reform raised the entry rate, measured as entrants relative to the lagged stock of establishments, by 0.9 percentage points from a pre-reform base of 8.4 percent, consistent with the log estimate. Exit rates were essentially unchanged, so the stock of establishments in treated professions grew by about 6 percent relative to controls by 2018. The absence of an increase in exit suggests that new entrants did not simply displace incumbents one for one, but rather that the reform allowed the market to accommodate more providers.",
            "Figure 1 shows the event-study estimates. The coefficients for 2009–2012 are small and statistically insignificant, and a joint test of the pre-reform coefficients does not reject zero (p = 0.64). Our pre-period test has 80 percent power to detect a linear pre-trend of 1.4 percent per year, well below the size of the estimated effect, so the absence of significant pre-trends is informative. Entry rose by about 6 percent in 2015, the first full year after the reform, and by 11 to 14 percent in 2016–2018. The gradual build-up is consistent with the time needed for potential entrants to raise capital, secure premises and complete registration.",
          ],
          table: {
            id: "tab-entry",
            caption: "Table 3. Effect of the reform on firm entry",
            columns: ["", "(1)", "(2)", "(3)", "(4)", "(5) CS", "(6) Entry rate", "(7) Exit rate"],
            rows: [
              ["Treated × Post", "0.112***", "0.108***", "0.106***", "0.101***", "0.109***", "0.91***", "−0.12"],
              ["", "(0.031)", "(0.030)", "(0.029)", "(0.033)", "(0.032)", "(0.27)", "(0.24)"],
              ["Implied effect (%)", "11.9", "11.4", "11.2", "10.6", "11.5", "—", "—"],
              ["Wild bootstrap p-value", "0.001", "0.001", "0.002", "0.004", "—", "0.002", "0.63"],
              ["Profession FE", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
              ["Sector × year FE", "No", "Yes", "Yes", "Yes", "—", "Yes", "Yes"],
              ["Expenditure controls", "No", "No", "Yes", "Yes", "Yes", "Yes", "Yes"],
              ["Profession trends", "No", "No", "No", "Yes", "No", "No", "No"],
              ["Observations", "1,044", "1,044", "1,044", "1,044", "1,044", "1,044", "1,044"],
            ],
            note: "Dependent variable in columns (1)–(5): log number of entrant firms; in (6) and (7): entry and exit rates in percent of the lagged stock. Sample: 116 professions, 2009–2018 excluding the transition year 2014. Column (5) uses the Callaway–Sant'Anna estimator with never-treated controls. Standard errors clustered by profession in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.1.",
          },
          figures: [
            {
              id: "fig-event-entry",
              caption: "Figure 1. Event-study estimates of the effect of the reform on log firm entry",
              kind: "line",
              xLabels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
              yLabel: "Effect on log entrants",
              series: [
                {
                  name: "Treated × year",
                  values: [0.012, -0.018, 0.009, -0.006, 0, 0.021, 0.058, 0.112, 0.131, 0.124],
                  lower: [-0.041, -0.069, -0.040, -0.052, 0, -0.027, 0.006, 0.054, 0.068, 0.057],
                  upper: [0.065, 0.033, 0.058, 0.040, 0, 0.069, 0.110, 0.170, 0.194, 0.191],
                },
              ],
              marker: 4,
              note: "Coefficients from the event-study specification with profession and sector-by-year fixed effects; 2013 is the omitted year. Shaded bands show 95 percent confidence intervals based on standard errors clustered by profession. The reform took effect in the second half of 2014.",
            },
          ],
        },
        {
          id: "results-prices",
          heading: "7.2 Consumer prices",
          paragraphs: [
            "Table 4 reports the effects on prices for the 81 professions with price data. In the preferred specification, column (2), the reform reduced the log price index by 0.035, implying that consumer prices in treated professions fell by an average of 3.4 percent over 2015–2018 relative to control professions. The estimate is robust to profession-specific trends (−3.1 percent) and to weighting professions by their CPI weights (−3.7 percent). To verify that the reduction in prices is not driven by changes in the composition of the price sample, column (4) restricts attention to items with continuous price quotations throughout the sample, yielding a similar estimate.",
            "Figure 2 shows the dynamics of the price effect. Prices did not diverge before the reform; afterwards, they declined gradually, with the effect reaching about 4 percent by 2017–2018. The timing mirrors the build-up in entry in Figure 1, which is consistent with the hypothesis that the price reduction reflects increased competition rather than a coincident shock to costs. Using a two-stage approach in which the reform instruments for the log number of establishments, we estimate an elasticity of prices with respect to the number of establishments of about −0.55, within the range of estimates from studies of local service markets [9][21].",
          ],
          table: {
            id: "tab-prices",
            caption: "Table 4. Effects of the reform on consumer prices and complaint rates",
            columns: ["", "(1) Log price", "(2) Log price", "(3) Log price, trends", "(4) Log price, balanced items", "(5) Complaints per 1,000", "(6) Log complaints"],
            rows: [
              ["Treated × Post", "−0.038***", "−0.035***", "−0.031**", "−0.033***", "0.21", "0.018"],
              ["", "(0.011)", "(0.010)", "(0.013)", "(0.011)", "(0.64)", "(0.047)"],
              ["Implied effect (%)", "−3.7", "−3.4", "−3.1", "−3.2", "1.5", "1.8"],
              ["Pre-reform mean (treated)", "108.6", "108.6", "108.6", "108.6", "14.2", "—"],
              ["Sector × year FE", "No", "Yes", "Yes", "Yes", "Yes", "Yes"],
              ["Professions", "81", "81", "81", "72", "116", "116"],
              ["Observations", "729", "729", "729", "648", "1,044", "1,044"],
            ],
            note: "All specifications include profession fixed effects and year (or sector-by-year) fixed effects and expenditure controls. Column (4) restricts the sample to professions whose price items are quoted continuously over 2009–2018. Implied effect in column (5) is the coefficient relative to the pre-reform mean. Standard errors clustered by profession in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.1.",
          },
          figures: [
            {
              id: "fig-event-prices",
              caption: "Figure 2. Event-study estimates of the effect of the reform on log consumer prices",
              kind: "line",
              xLabels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
              yLabel: "Effect on log price index",
              series: [
                {
                  name: "Treated × year",
                  values: [-0.004, 0.006, -0.003, 0.002, 0, -0.008, -0.019, -0.032, -0.041, -0.043],
                  lower: [-0.022, -0.012, -0.020, -0.015, 0, -0.025, -0.038, -0.053, -0.064, -0.067],
                  upper: [0.014, 0.024, 0.014, 0.019, 0, 0.009, 0.000, -0.011, -0.018, -0.019],
                },
              ],
              marker: 4,
              note: "Coefficients from the event-study specification for the 81 professions with price data; 2013 is the omitted year. Bands show 95 percent confidence intervals based on standard errors clustered by profession.",
            },
          ],
        },
        {
          id: "results-quality",
          heading: "7.3 Service quality",
          paragraphs: [
            "Columns (5) and (6) of Table 4 report effects on complaint rates. The point estimate implies an increase of 0.21 complaints per thousand establishments, or 1.5 percent of the pre-reform mean of 14.2, with a standard error of 0.64. We can therefore rule out, at the 95 percent level, increases in complaint rates larger than 1.5 complaints per thousand establishments, or about 10 percent of the pre-reform mean. The log specification yields a similarly small and insignificant estimate. Event-study estimates for complaint rates, reported in Appendix A, show no trend either before or after the reform.",
            "One might worry that complaint rates fail to rise because complaints are spread over a larger number of establishments, or because new entrants serve consumers less likely to complain. We address the first concern by examining complaints per thousand households, which also show no significant change. On the second, we find no evidence that complaints shifted toward categories filed by older or lower-income consumers, for whom the agency records demographic information. Taken together, the evidence does not support the view that the removed restrictions were acting as binding quality floors.",
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Hypothesis H1 predicts that the effect of the reform should be largest where pre-reform restrictions were most binding. Table 5 tests this prediction by splitting treated professions into terciles of the pre-reform restrictiveness index and by type of reform. The effect on entry rises monotonically with restrictiveness: entry increased by 18.6 percent in the most restrictive tercile, by 9.8 percent in the middle tercile and by 4.1 percent in the least restrictive tercile, where the last estimate is not statistically significant. Price reductions follow the same gradient, from −5.6 percent in the most restrictive tercile to −1.2 percent in the least restrictive.",
        "By type of change, the abolition of numerical caps and district quotas had the largest effect on entry, at 17.1 percent, followed by the relaxation of minimum capital and facility requirements, at 8.7 percent, and the replacement of licensing by registration, at 6.0 percent. This ordering is consistent with the framework in Section 4: caps directly constrain the number of establishments, whereas capital and facility rules raise fixed costs only for a subset of potential entrants. Where restrictions on corporate ownership and multi-branch operation were lifted, a large part of the increase in establishments took the form of new branches of existing firms rather than new firms; branch openings in these professions rose by 21 percent.",
        "We also examine who entered. New entrants in treated professions after the reform were on average smaller and younger-owned than pre-reform entrants, and the share of entrants that were sole proprietorships rose by 3.2 percentage points. Survival rates of post-reform entrants after two years were 71 percent, compared with 73 percent for entrants in control professions over the same period, a difference that is not statistically significant. These patterns suggest that the reform opened markets to small entrants without attracting a wave of short-lived firms, in contrast to the low-productivity entry found after some registration reforms [18]. Young firms also contribute disproportionately to employment growth [22]; consistent with this, employment in treated professions rose by 4.8 percent relative to controls by 2018.",
        "Finally, we ask whether incumbents responded. Average revenue per incumbent establishment fell by about 2 percent relative to controls, consistent with the erosion of rents, while labour productivity among incumbents that survived through 2018 rose slightly, by 1.3 percent, an estimate that is imprecise. The direction of the productivity response is consistent with the evidence that entry threats stimulate incumbent improvement [8], although our data do not allow us to identify the specific margins of adjustment.",
      ],
      table: {
        id: "tab-het",
        caption: "Table 5. Heterogeneity by pre-reform restrictiveness and type of reform",
        columns: ["Group", "Professions", "Effect on log entry", "Implied entry effect (%)", "Effect on log price", "Implied price effect (%)"],
        rows: [
          ["Restrictiveness: top tercile", "17", "0.171*** (0.041)", "18.6", "−0.058*** (0.016)", "−5.6"],
          ["Restrictiveness: middle tercile", "18", "0.093*** (0.035)", "9.8", "−0.031** (0.014)", "−3.1"],
          ["Restrictiveness: bottom tercile", "17", "0.040 (0.034)", "4.1", "−0.012 (0.013)", "−1.2"],
          ["Caps or quotas abolished", "21", "0.158*** (0.039)", "17.1", "−0.051*** (0.015)", "−5.0"],
          ["Capital/facility rules relaxed", "17", "0.083** (0.036)", "8.7", "−0.027* (0.014)", "−2.7"],
          ["Licence replaced by registration", "14", "0.058* (0.033)", "6.0", "−0.019 (0.014)", "−1.9"],
          ["All treated professions", "52", "0.106*** (0.029)", "11.2", "−0.035*** (0.010)", "−3.4"],
        ],
        note: "Each row reports the coefficient on Treated × Post from the preferred specification (Table 3, column 3, and Table 4, column 2) in which the treated group is restricted to the professions listed and all 64 control professions are retained. Terciles of the 2013 restrictiveness index among treated professions. Standard errors clustered by profession in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.1.",
      },
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 summarises a series of robustness checks for the entry and price estimates. First, the choice of control group might matter if some unreformed professions were affected indirectly. Restricting controls to professions in the same sectors as the treated professions, or to the 38 controls that were reviewed but whose restrictions were judged justified, gives estimates of 10.4 and 11.8 percent for entry and −3.2 and −3.6 percent for prices. Excluding the health-related professions, where the control group is relatively large, has little effect.",
        "Second, we address concerns about specific professions. Real-estate brokerage, the largest treated profession, was affected by housing-market developments in 2015–2018; dropping it changes the entry estimate to 11.0 percent. Dropping private tutoring academies, which were subject to separate rules on operating hours, yields 11.5 percent. A leave-one-out exercise in which each treated profession is dropped in turn produces entry estimates between 10.1 and 12.3 percent. Third, we examine alternative definitions of outcomes. Counting all new establishments, including branches, yields a larger entry effect of 13.4 percent, consistent with the branch openings discussed in Section 8. Estimating the model in levels with a Poisson pseudo-maximum-likelihood estimator gives 10.8 percent.",
        "Fourth, we conduct a placebo test in which the reform is assigned to 2011 using only pre-reform data; the estimated placebo effect is 0.6 percent for entry and 0.2 percent for prices, both insignificant. A permutation test in which treatment is randomly reassigned across professions 1,000 times places our entry estimate above the 99th percentile of the placebo distribution. Finally, clustering by two-digit industry group increases the standard error of the entry estimate from 0.029 to 0.034, without affecting significance at the 1 percent level.",
      ],
      table: {
        id: "tab-robust",
        caption: "Table 6. Robustness checks",
        columns: ["Specification", "Entry effect (%)", "Std. error (log)", "Price effect (%)", "Std. error (log)"],
        rows: [
          ["Baseline (Tables 3 and 4)", "11.2", "0.029", "−3.4", "0.010"],
          ["Same-sector controls only", "10.4", "0.031", "−3.2", "0.011"],
          ["Reviewed-and-retained controls (38)", "11.8", "0.035", "−3.6", "0.013"],
          ["Excluding health-related professions", "11.0", "0.030", "−3.3", "0.011"],
          ["Excluding real-estate brokerage", "11.0", "0.030", "−3.2", "0.010"],
          ["Excluding private tutoring academies", "11.5", "0.030", "−3.5", "0.010"],
          ["Including 2014 as post-reform year", "10.1", "0.028", "−3.0", "0.010"],
          ["All new establishments incl. branches", "13.4", "0.032", "—", "—"],
          ["Poisson PML in levels", "10.8", "0.030", "—", "—"],
          ["Placebo reform in 2011", "0.6", "0.027", "0.2", "0.009"],
          ["Clustering by two-digit industry", "11.2", "0.034", "−3.4", "0.012"],
        ],
        note: "Each row reports the implied percentage effect and the standard error of the underlying log coefficient from a variant of the preferred specification. The placebo uses 2009–2013 data only with a fictitious reform in 2011. All estimates other than the placebo are significant at the 1 percent level for entry and at least the 5 percent level for prices.",
      },
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our estimates allow a rough calculation of the consumer gains from the reform. Household expenditure on the 37 treated professions with price data amounted to about KRW 9.6 trillion in 2013. A price reduction of 3.4 percent therefore corresponds to annual savings of about KRW 330 billion on unchanged quantities, before accounting for the additional consumer surplus from increased consumption. Extrapolating the average price effect to treated professions without price data would raise the figure to roughly KRW 500 billion per year, or about 0.06 percent of household consumption. These gains are modest in aggregate but substantial relative to the administrative cost of the reform, and they accrue disproportionately to households that spend a large share of their budget on personal and transport-related services.",
        "The heterogeneity results have a clear policy message: the gains from deregulation are concentrated where restrictions are most binding, particularly numerical caps and quotas. Reform efforts with limited political capital may therefore achieve the largest benefits by targeting quantitative restrictions first. Replacing licensing with registration in professions where entry was already relatively easy had small effects, which suggests that the burden of licensing procedures as such was less important than the substantive restrictions attached to them.",
        "The absence of a measurable decline in service quality is reassuring but should be interpreted with care. Complaint rates capture visible service failures but may miss subtle quality changes, such as reduced investment in training or less thorough service, and consumers may not complain about problems they do not recognise. The professions covered by the reform also excluded those where information asymmetries are most severe, such as clinical health care and legal advice; our results therefore do not imply that all entry restrictions are unjustified. As Anderson et al. {24} show, licensing can have real benefits where quality is hard to observe and failures are costly. The appropriate conclusion is narrower: in a broad set of professional and personal services, entry restrictions in Korea protected incumbents' rents more than they protected consumers.",
        "Finally, the reform illustrates the value of a systematic review process. The checklist approach forced ministries to justify restrictions on the basis of evidence, and it identified professions where restrictions were unnecessary. Periodic reviews of this kind, combined with ex-post evaluation of the type undertaken here, could help to prevent the gradual re-accumulation of entry barriers that the political economy of regulation tends to produce [12].",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We have used Korea's 2014 regulatory reform, which reduced entry barriers in 52 professions, to estimate the effects of product-market regulation on firm entry, prices and quality. The reform raised firm entry by 11.2 percent over four years, with effects concentrated in the most restrictive professions and where numerical caps were abolished. Consumer prices fell by 3.4 percent and complaint rates did not rise. These findings support the view that a substantial part of entry regulation in Korean services protected incumbents rather than consumers, and that well-designed regulatory reform can deliver meaningful consumer-welfare gains.",
        "Several questions remain for future research. Longer post-reform data would show whether the effects persist or whether incumbents find new ways to restrict competition. Linking establishment data to workers would reveal how the reform affected earnings in treated professions and whether the rents previously protected were shared with employees. Finally, richer measures of quality, such as online ratings or inspection records, would allow a more complete assessment of the quality consequences of deregulation.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction and Additional Results",
      paragraphs: [
        "Profession mapping. Each licensed profession was matched to one or more five-digit industry codes. For 69 professions, the licensed activity corresponds exactly to an industry code; for the remaining 47, we used ministry licence registers for 2013 to compute the share of establishments in the code that held the relevant licence and applied this share to all years. Results are similar when the 47 professions with imputed counts are excluded (entry effect 11.6 percent, standard error of the log coefficient 0.037).",
        "Restrictiveness index. Two research assistants coded the 2013 enforcement decrees independently; disagreements, which affected 7 percent of items, were resolved by the authors. Numerical caps and examination quotas were scored 1 if binding in at least half of districts, 0.5 if binding in fewer, and 0 otherwise. Minimum capital requirements were scored relative to the median capital of entrants in the profession. The correlation between the index and the number of restrictions removed by the reform is 0.61.",
        "Complaint data. Complaints were mapped to professions using the agency's business-category codes. We excluded complaints about prices, contract cancellation and refunds, which together account for 38 percent of complaints. Event-study coefficients for complaint rates per thousand establishments for 2015–2018 range from −0.4 to 0.6, with no estimate significant at the 10 percent level; pre-reform coefficients range from −0.5 to 0.3.",
        "Inference. Wild cluster bootstrap p-values use 999 replications with Rademacher weights and impose the null hypothesis. Permutation tests reassign treatment status randomly to 52 of the 116 professions, holding the sector composition of the treated group fixed, and re-estimate the preferred specification in each of 1,000 draws.",
      ],
    },
  ],
};
