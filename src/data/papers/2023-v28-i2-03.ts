// Vol. 28, No. 2 (April 2023) — full text (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2023-v28-i2-03",
  acknowledgments:
    "We thank seminar participants at Seoul National University and the University of Notre Dame, officials of Incheon Metropolitan City and Ongjin County for background information on the relocation, two anonymous referees and the handling editor for helpful comments. All errors are our own.",
  dataAvailability:
    "The Local Area Labour Force Survey, internal migration statistics and the Census on Establishments are published by Statistics Korea. Employment Insurance records were accessed through the Korea Employment Information Service under a confidentiality agreement and cannot be shared; code and aggregated district-level series are available from the corresponding author.",
  editorialNote:
    "Da-Hye Song and Lakshmi Iyer use the relocation of about 1,400 Yeonpyeong Island residents to Incheon after the 2010 shelling to show that a sudden population inflow left the wages of incumbent low-skilled workers statistically unchanged over five years while raising local unemployment by 1.6 percentage points, with the shock absorbed mainly through non-tradable services and internal migration.",
  refs: [
    /* 1 */ "Card, D. (1990). The impact of the Mariel boatlift on the Miami labor market. Industrial and Labor Relations Review, 43(2), 245–257.",
    /* 2 */ "Borjas, G. J. (2017). The wage impact of the Marielitos: A reappraisal. ILR Review, 70(5), 1077–1110.",
    /* 3 */ "Peri, G., & Yasenov, V. (2019). The labor market effects of a refugee wave: Synthetic control method meets the Mariel boatlift. Journal of Human Resources, 54(2), 267–309.",
    /* 4 */ "Hunt, J. (1992). The impact of the 1962 repatriates from Algeria on the French labor market. Industrial and Labor Relations Review, 45(3), 556–572.",
    /* 5 */ "Friedberg, R. M. (2001). The impact of mass migration on the Israeli labor market. Quarterly Journal of Economics, 116(4), 1373–1408.",
    /* 6 */ "Abadie, A., & Gardeazabal, J. (2003). The economic costs of conflict: A case study of the Basque Country. American Economic Review, 93(1), 113–132.",
    /* 7 */ "Abadie, A., Diamond, A., & Hainmueller, J. (2010). Synthetic control methods for comparative case studies: Estimating the effect of California's tobacco control program. Journal of the American Statistical Association, 105(490), 493–505.",
    /* 8 */ "Abadie, A., Diamond, A., & Hainmueller, J. (2015). Comparative politics and the synthetic control method. American Journal of Political Science, 59(2), 495–510.",
    /* 9 */ "Abadie, A. (2021). Using synthetic controls: Feasibility, data requirements, and methodological aspects. Journal of Economic Literature, 59(2), 391–425.",
    /* 10 */ "Borjas, G. J. (2003). The labor demand curve is downward sloping: Reexamining the impact of immigration on the labor market. Quarterly Journal of Economics, 118(4), 1335–1374.",
    /* 11 */ "Card, D. (2001). Immigrant inflows, native outflows, and the local labor market impacts of higher immigration. Journal of Labor Economics, 19(1), 22–64.",
    /* 12 */ "Ottaviano, G. I. P., & Peri, G. (2012). Rethinking the effect of immigration on wages. Journal of the European Economic Association, 10(1), 152–197.",
    /* 13 */ "Dustmann, C., Schönberg, U., & Stuhler, J. (2017). Labor supply shocks, native wages, and the adjustment of local employment. Quarterly Journal of Economics, 132(1), 435–483.",
    /* 14 */ "Dustmann, C., Schönberg, U., & Stuhler, J. (2016). The impact of immigration: Why do studies reach such different results? Journal of Economic Perspectives, 30(4), 31–56.",
    /* 15 */ "Foged, M., & Peri, G. (2016). Immigrants' effect on native workers: New analysis on longitudinal data. American Economic Journal: Applied Economics, 8(2), 1–34.",
    /* 16 */ "Clemens, M. A., & Hunt, J. (2019). The labor market effects of refugee waves: Reconciling conflicting results. ILR Review, 72(4), 818–857.",
    /* 17 */ "Tumen, S. (2016). The economic impact of Syrian refugees on host countries: Quasi-experimental evidence from Turkey. American Economic Review, 106(5), 456–460.",
    /* 18 */ "Glitz, A. (2012). The labor market impact of immigration: A quasi-experiment exploiting immigrant location rules in Germany. Journal of Labor Economics, 30(1), 175–213.",
    /* 19 */ "Angrist, J. D., & Kugler, A. D. (2003). Protective or counter-productive? Labour market institutions and the effect of immigration on EU natives. Economic Journal, 113(488), F302–F331.",
    /* 20 */ "Altonji, J. G., & Card, D. (1991). The effects of immigration on the labor market outcomes of less-skilled natives. In J. M. Abowd & R. B. Freeman (Eds.), Immigration, trade, and the labor market (pp. 201–234). Chicago: University of Chicago Press.",
    /* 21 */ "Lewis, E. (2011). Immigration, skill mix, and capital skill complementarity. Quarterly Journal of Economics, 126(2), 1029–1069.",
    /* 22 */ "Blanchard, O. J., & Katz, L. F. (1992). Regional evolutions. Brookings Papers on Economic Activity, 1992(1), 1–75.",
    /* 23 */ "Moretti, E. (2010). Local multipliers. American Economic Review, 100(2), 373–377.",
    /* 24 */ "Cortes, P. (2008). The effect of low-skilled immigration on U.S. prices: Evidence from CPI data. Journal of Political Economy, 116(3), 381–422.",
    /* 25 */ "Deryugina, T., Kawano, L., & Levitt, S. (2018). The economic impact of Hurricane Katrina on its victims: Evidence from individual tax returns. American Economic Journal: Applied Economics, 10(2), 202–233.",
    /* 26 */ "McIntosh, M. F. (2008). Measuring the labor market impacts of Hurricane Katrina migration: Evidence from Houston, Texas. American Economic Review, 98(2), 54–57.",
    /* 27 */ "Ferman, B., & Pinto, C. (2021). Synthetic controls with imperfect pretreatment fit. Quantitative Economics, 12(4), 1197–1221.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "How local labour markets absorb a sudden inflow of people is one of the oldest questions in empirical labour economics. Standard competitive models predict that an unexpected increase in the supply of workers lowers the wages of the incumbent workers with whom the newcomers compete, at least until capital, firms and other workers adjust [10][20]. A large literature has nevertheless found that wage effects of immigration are small and difficult to detect, and the interpretation of that finding remains contested [11][12][14]. Part of the difficulty is that most migrants choose where to settle, so that inflows are correlated with local demand conditions. Episodes in which people arrive suddenly and for reasons unrelated to local economic conditions are therefore especially valuable.",
        "The most famous such episode, the Mariel boatlift of 1980, has generated an enduring debate. Card {1} found no measurable effect of the arrival of about 125,000 Cuban migrants on the wages or unemployment of low-skilled workers in Miami, whereas Borjas {2} argued that the wages of the most directly competing workers fell substantially once the comparison is restricted to non-Hispanic men without a high-school diploma. Peri and Yasenov {3} revisited the episode with a synthetic-control design and found no significant wage effect, and Clemens and Hunt {16} showed that much of the disagreement reflects changes in the composition of the small survey samples involved. Similar natural experiments include the repatriation of French settlers from Algeria [4], the mass migration from the former Soviet Union to Israel [5], the Syrian refugee inflow to Turkey [17] and the dispersal of Hurricane Katrina evacuees [25][26].",
        "This paper studies an episode that is smaller in absolute size but unusually clean in its timing and causes. On 23 November 2010, North Korean artillery shelled Yeonpyeong Island, a fishing community of about 1,700 residents in the Yellow Sea close to the Northern Limit Line. Within days, almost the entire civilian population was evacuated to the mainland city of Incheon, and approximately 1,400 residents remained there for an extended period while the island's housing and infrastructure were rebuilt and its security situation was reassessed. The relocation was unanticipated, was dictated entirely by military events, and concentrated the evacuees in a small number of neighbourhoods of a single district of Incheon. It therefore provides a natural experiment for estimating the effect of a sudden labour-supply shock on a receiving community.",
        "We use a synthetic-control approach [6][7][8] to construct a counterfactual for the receiving labour market from a weighted combination of comparable coastal and port districts elsewhere in Korea. Using district-level data from the Local Area Labour Force Survey and individual Employment Insurance records, we find no statistically significant effect on the wages of incumbent low-skilled workers over the five years following the relocation: the average wage gap relative to the synthetic control is −0.8 percent, with a permutation p-value of 0.53. The local unemployment rate, by contrast, rose by 1.6 percentage points relative to its synthetic counterpart over 2011–2015, an effect that is large relative to the placebo distribution and ranks second among 47 treated and donor districts.",
        "We then show how the labour-supply shock was absorbed. Roughly half of the rise in unemployment reflects the difficulty of the evacuees themselves, most of whom had worked in fishing and related activities, in finding mainland jobs; the other half reflects higher unemployment among incumbent residents. Employment in local non-tradable services such as retail, food and accommodation and personal services rose by 6.2 percent relative to the synthetic control, consistent with the additional local demand generated by the newcomers and with the use of these sectors as an entry point by evacuees who did find work. At the same time, net out-migration of incumbent working-age residents without tertiary education increased by 0.9 percentage points per year, so that part of the shock was transmitted to the rest of the metropolitan area through internal migration, as emphasised by Card {11} and Dustmann, Schönberg and Stuhler {13}.",
        "Our findings contribute to the literature on refugee inflows in three ways. First, they provide evidence from an East Asian labour market characterised by low unemployment, a large self-employed service sector and limited previous experience of population inflows. Second, because the evacuees were Korean citizens who shared the language and institutions of the receiving community, the episode isolates a pure labour-supply shock from the cultural and legal barriers that complicate the interpretation of most refugee studies. Third, the combination of stable wages and higher unemployment suggests that, in the short run, quantities rather than prices bore the burden of adjustment. Section 2 describes the relocation, Section 3 reviews related literature and Section 4 sets out a simple framework. Sections 5 and 6 describe the data and empirical strategy, Section 7 reports the main results, Section 8 examines mechanisms, Section 9 reports robustness checks, Section 10 discusses implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. The Yeonpyeong Island Shelling and Relocation",
      paragraphs: [
        "Yeonpyeong Island lies about 80 kilometres west of Incheon and about 12 kilometres from the North Korean coast. It is administratively part of Ongjin County within Incheon Metropolitan City. Before 2010 its civilian economy was based on fishing, particularly for blue crab, on small-scale agriculture and on services supplying the island's residents and the military garrison stationed there. Residents had lived with periodic naval clashes in the surrounding waters since 1999, but no civilian area of the island had previously been attacked.",
        "The shelling on the afternoon of 23 November 2010 killed two marines and two civilians, injured many more and destroyed or damaged a large number of houses and public buildings. Most residents left on fishing boats and naval and coast-guard vessels during the following two days. They were first accommodated in a public bathhouse and other emergency shelters in Incheon and, from late December 2010, in temporary rental apartments supplied through the Korea Land and Housing Corporation. Table 1 summarises the main characteristics of the relocated population. Of the approximately 1,400 residents who remained on the mainland in early 2011, about 1,050 were aged 15 or over and about 700 had been economically active on the island, a participation rate well above the national average because of the prevalence of family fishing enterprises.",
        "The government provided emergency living allowances during the first months and subsequently a monthly stipend, but these payments were modest and were phased down during 2011 as the reconstruction of the island advanced. Reconstruction of houses, shelters and public facilities proceeded through 2011 and 2012. Some residents returned once their homes were rebuilt, but many — particularly younger households with children enrolled in mainland schools and those who had found mainland jobs — did not. Administrative records indicate that about 900 of the evacuees were still resident in Incheon's mainland districts at the end of 2013, so that the inflow represented a persistent rather than a purely transitory increase in the local population.",
        "Two features of the relocation are important for our design. First, the evacuees were concentrated in a single district, Jung-gu, which contains Incheon's old port and the coastal neighbourhoods closest to the ferry terminal serving the western islands. The relocated population represented about 1.5 percent of the district's working-age population and a larger share of its low-skilled labour force. Second, the evacuees' skills were highly specific: about 58 percent had worked in fishing, seafood processing or related activities, and only a small minority had experience of formal wage employment. On the mainland they therefore competed primarily with low-skilled incumbents for jobs in services, construction and casual labour.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Characteristics of the relocated Yeonpyeong population, early 2011",
          columns: ["Characteristic", "Evacuees", "Jung-gu residents (2010)", "Korea (2010)"],
          rows: [
            ["Persons relocated to Incheon (approx.)", "1,400", "—", "—"],
            ["Aged 15 and over", "1,050", "—", "—"],
            ["Economically active before relocation", "700", "—", "—"],
            ["Share aged 55 and over (percent)", "41", "27", "24"],
            ["Share without tertiary education, aged 25–64 (percent)", "84", "63", "55"],
            ["Labour force participation rate, aged 15+ (percent)", "67", "58", "61"],
            ["Share employed in fishing and seafood processing (percent)", "58", "2", "1"],
            ["Share self-employed or family workers (percent)", "71", "29", "29"],
            ["Still resident on the mainland at end-2013 (approx.)", "900", "—", "—"],
          ],
          note: "Note: Evacuee characteristics are from Ongjin County relief registers and the authors' tabulations of Employment Insurance records; comparison figures are from the 2010 Population and Housing Census and the Economically Active Population Survey. — denotes not applicable.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper is part of a large literature on the labour-market effects of immigration. Spatial correlation studies relate changes in local outcomes to the inflow of immigrants across cities [11][20], while national skill-cell approaches compare the wages of workers in education-experience groups that received different numbers of immigrants [10][12]. The former generally find small effects and the latter larger ones; Dustmann, Schönberg and Stuhler {14} show that much of this difference reflects the different parameters estimated by each approach and the degree to which immigrants and natives in the same cell are truly substitutes. Longitudinal studies that follow individual natives find that low-skilled natives respond to immigration by moving into more complex, less manual occupations [15].",
        "Natural experiments have played a central role because they address the endogeneity of migrants' location choices. In addition to the Mariel boatlift [1][2][3][16], the arrival of repatriates from Algeria in France in 1962 reduced the wages of French workers only slightly and raised their unemployment modestly [4]. Friedberg {5} used the Soviet emigration to Israel and found no adverse effect on native wages once the endogenous occupational choices of immigrants were accounted for. Glitz {18} exploited the assignment of ethnic German repatriates to German regions and found sizeable displacement of native employment but no effect on wages, a pattern close to the one we document. Dustmann, Schönberg and Stuhler {13} studied the commuting of Czech workers into German border regions and found that the shock was absorbed mainly through lower native employment rather than lower wages.",
        "Several studies highlight the role of labour-market institutions in determining whether adjustment occurs through prices or quantities. Angrist and Kugler {19} find that immigration reduces native employment more in European countries with rigid labour markets and restrictive product-market regulation. In Turkey, the arrival of Syrian refugees displaced informal native workers but raised formal employment [17]. Studies of disaster-induced displacement show that the receiving labour market can experience higher unemployment without large wage changes: after Hurricane Katrina, the arrival of evacuees in Houston was associated with lower employment of local workers and small wage effects [26], while the evacuees themselves experienced an initial decline in earnings followed by recovery [25].",
        "Our work also relates to studies of regional adjustment. Blanchard and Katz {22} show that regional labour-demand shocks in the United States are absorbed primarily through migration within a few years, with only transitory effects on wages and unemployment. Local labour-supply shocks also affect local prices and the demand for non-tradable services, which can partly offset their effect on incumbents [23][24]. Finally, firms may adjust their technology in response to an increase in the supply of low-skilled labour [21], although such adjustments are unlikely to be important for a shock of the size and duration we study.",
        "Methodologically, we draw on the synthetic-control method of Abadie and Gardeazabal {6} and Abadie, Diamond and Hainmueller {7}, which has been widely used for case studies of a single treated unit [8]. Abadie {9} discusses the conditions under which the method is appropriate, including the availability of a sufficiently long pre-treatment period and of donor units unaffected by the intervention, and Ferman and Pinto {27} examine the properties of the estimator when the pre-treatment fit is imperfect. The application closest to ours is that of Peri and Yasenov {3}, who use the method for the Mariel boatlift.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework",
      paragraphs: [
        "Consider a local labour market in which output is produced with low-skilled labour, high-skilled labour and capital, and in which a share of output consists of non-tradable services consumed locally. An unexpected inflow of low-skilled workers shifts out the local supply of low-skilled labour. If wages are fully flexible and capital and the other factors are fixed, the wage of low-skilled incumbents falls in proportion to the size of the inflow divided by the elasticity of labour demand [10]. With an inflow of the order of 1–2 percent of the low-skilled labour force and conventional demand elasticities, the predicted wage decline is small, of the order of 0.5–1.5 percent.",
        "Several adjustment margins can attenuate or redirect this effect. First, newcomers raise the local demand for non-tradable goods and services, which increases the demand for the low-skilled labour that produces them [23][24]. Second, incumbent workers and potential in-migrants can respond by moving elsewhere, spreading the shock across a wider area [11][22]. Third, if wages are rigid downwards in the short run — because of minimum wages, implicit contracts or the wage-setting norms of small service firms — the adjustment may take place through employment and unemployment rather than wages [13][19]. Finally, newcomers may themselves experience higher unemployment if their skills are poorly matched to local demand.",
        "These considerations generate three hypotheses. H1: the wages of low-skilled incumbents fall by at most a small amount, and the decline may not be statistically detectable. H2: if wages are rigid, the inflow raises local unemployment, both among newcomers and among incumbents who compete most directly with them. H3: the shock is absorbed through an expansion of local non-tradable services and through net out-migration of incumbent workers, both of which should be observable within a few years. Evidence consistent with H2 and H3 but not with large wage effects would indicate that quantities rather than prices bear the brunt of short-run adjustment in the receiving labour market.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our analysis combines survey and administrative data at the level of the si-gun-gu (city, county or district), which is the smallest geographical unit for which consistent labour-market statistics are available in Korea.",
      ],
      subsections: [
        {
          id: "data-lalfs",
          heading: "5.1 Unemployment and Employment",
          paragraphs: [
            "District-level unemployment, employment and participation rates come from the Local Area Labour Force Survey, a large semi-annual survey conducted by Statistics Korea since 2008 and designed to produce representative estimates for each si-gun-gu. The survey samples about 200,000 households nationwide, and the sample for Jung-gu is large enough to estimate the unemployment rate with a standard error of about 0.4 percentage points per half-year. Our sample covers the first half of 2008 to the second half of 2015, giving six pre-relocation and ten post-relocation half-years. To lengthen the pre-treatment period for robustness checks, we also use the number of registered unemployment-benefit claimants per insured worker, which is available monthly from 2005.",
          ],
        },
        {
          id: "data-ei",
          heading: "5.2 Wages of Incumbent Workers",
          paragraphs: [
            "Wages come from the Employment Insurance database, which records the monthly insured earnings of all employees covered by the scheme. We construct a panel of incumbent workers, defined as individuals employed at an establishment located in Jung-gu or in a donor district in 2009, and follow them through 2015. Low-skilled incumbents are those without tertiary education according to the linked education records, aged 20–64 in 2009. Following them, rather than computing the average wage of whoever is employed in the district in a given year, avoids confounding the wage effect with changes in the composition of the workforce — a problem that has complicated the interpretation of the Mariel evidence [2][16]. Annual average real daily earnings are available for 2006–2015.",
            "The Employment Insurance database covers wage employees in firms subject to the scheme and therefore misses the self-employed and many casual workers. Because a large share of the evacuees had been self-employed or family workers, the database is better suited to measuring the effect on incumbent employees than on the evacuees themselves, whose labour-market outcomes we infer from the survey data and from a linked extract of the relief registers described in Appendix A.",
          ],
        },
        {
          id: "data-other",
          heading: "5.3 Sectoral Employment, Migration and the Donor Pool",
          paragraphs: [
            "Employment by industry comes from the annual Census on Establishments, which covers all establishments with at least one worker, and gross internal migration flows by age and education come from the Internal Migration Statistics compiled from resident registration records. The donor pool consists of 46 urban coastal and port districts outside the Incheon metropolitan area, chosen because they share Jung-gu's combination of port activity, old commercial centres and an ageing population. We exclude the other districts of Incheon, which may have received evacuees or been affected by migration responses, and use them separately to examine spillovers.",
            "Table 2 compares Jung-gu with the average of the donor districts and with its synthetic control over the pre-relocation period. Jung-gu had a somewhat higher unemployment rate and lower wages than the average donor district, a larger share of employment in transport and storage, and a higher share of residents aged 65 or over. The synthetic control matches these characteristics closely, as discussed below.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Pre-relocation characteristics: Jung-gu, synthetic control and donor average",
              columns: ["Predictor (2008–2010 average)", "Jung-gu", "Synthetic Jung-gu", "Donor average"],
              rows: [
                ["Unemployment rate (percent)", "3.7", "3.7", "3.2"],
                ["Employment-population rate, 15+ (percent)", "55.4", "55.6", "57.9"],
                ["Labour force participation rate, 15+ (percent)", "57.5", "57.7", "59.8"],
                ["Real daily earnings, low-skilled (KRW thousand)", "84.1", "84.6", "88.9"],
                ["Employment share: retail, food and accommodation", "0.247", "0.241", "0.218"],
                ["Employment share: transport and storage", "0.121", "0.114", "0.072"],
                ["Employment share: manufacturing", "0.106", "0.112", "0.164"],
                ["Population share aged 65+", "0.128", "0.126", "0.109"],
                ["Population growth, 2005–2010 (percent per year)", "0.4", "0.3", "0.2"],
              ],
              note: "Note: The synthetic control is a weighted average of donor districts with the weights in Table 3. The donor average is the unweighted mean over 46 districts.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our treated unit is Jung-gu, which received the large majority of the evacuees. Treatment begins in the second half of 2010, the half-year in which the shelling occurred; because the evacuees arrived only at the end of November, we treat 2010H2 as the last pre-treatment period for outcomes measured semi-annually and 2010 as the last pre-treatment year for annual outcomes. The post-treatment period covers the five years 2011–2015.",
      ],
      subsections: [
        {
          id: "synthetic-control",
          heading: "6.1 Synthetic Control",
          paragraphs: [
            "Let Y_jt denote an outcome for district j in period t, with j = 1 the treated district and j = 2, …, 47 the donors. The synthetic-control estimator chooses non-negative weights w_j summing to one so that the weighted average of donors reproduces the pre-treatment path of the outcome and a set of predictors for the treated district [7]. The estimated effect in period t is the gap Y_1t − Σ_j w_j Y_jt, and we summarise effects by the average gap over the post-treatment period. Predictors include the pre-treatment averages of the unemployment rate, the employment rate, low-skilled earnings, the industry shares and demographic variables reported in Table 2, together with the outcome in selected pre-treatment periods. Predictor weights are chosen by minimising the mean squared prediction error over the pre-treatment period.",
            "Table 3 reports the donor weights for the unemployment-rate synthetic control. Seven districts receive positive weight: three port districts of Busan, which account for 65 percent of the weight, an industrial port district of Ulsan, and three coastal cities in the south-west and south-east. All are old port areas with ageing populations and large service sectors, which supports the plausibility of the counterfactual. Synthetic controls for the other outcomes use similar donors with somewhat different weights, reported in Appendix A.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Donor weights in synthetic Jung-gu (unemployment rate)",
              columns: ["Donor district", "Province", "Weight"],
              rows: [
                ["Jung-gu", "Busan", "0.31"],
                ["Yeongdo-gu", "Busan", "0.22"],
                ["Dong-gu", "Ulsan", "0.14"],
                ["Dong-gu", "Busan", "0.12"],
                ["Mokpo-si", "South Jeolla", "0.11"],
                ["Nam-gu (Pohang)", "North Gyeongsang", "0.06"],
                ["Yeosu-si", "South Jeolla", "0.04"],
                ["Remaining 39 donors", "—", "0.00"],
              ],
              note: "Note: Weights minimise the pre-treatment mean squared prediction error of the unemployment rate and the predictors in Table 2 over 2008H1–2010H2.",
            },
          ],
        },
        {
          id: "inference",
          heading: "6.2 Inference",
          paragraphs: [
            "Because there is a single treated unit, conventional standard errors are not available. We follow Abadie, Diamond and Hainmueller {7} and conduct permutation inference: we apply the synthetic-control procedure to each donor district in turn, treating it as if it had received the evacuees, and compare the treated district's estimated effect with the resulting placebo distribution. Because placebo districts with poor pre-treatment fit can produce large spurious gaps, our test statistic is the ratio of post-treatment to pre-treatment root mean squared prediction error (RMSPE). The permutation p-value is the share of the 47 districts whose ratio is at least as large as that of Jung-gu.",
            "Two concerns specific to our setting deserve mention. First, the pre-treatment period for the survey outcomes is short, consisting of six half-years, which increases the risk of overfitting [9]. We address this by also using predictors measured over a longer period and by repeating the analysis with administrative claimant data available from 2005. Second, the evacuees were a small share of Jung-gu's population, so the treatment is modest relative to the sampling noise in the survey. We therefore emphasise average effects over the whole post-treatment period, which are estimated much more precisely than effects in individual half-years, and we complement the synthetic-control estimates with difference-in-differences estimates against matched donors [27].",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We report results in three steps: the effect on unemployment, the effect on the wages of low-skilled incumbents, and the effect on employment and participation. Table 4 collects the main estimates.",
      ],
      subsections: [
        {
          id: "results-unemployment",
          heading: "7.1 Unemployment",
          paragraphs: [
            "Figure 1 plots the unemployment rate of Jung-gu and of its synthetic control. Before the relocation, the two series track each other closely, with a pre-treatment RMSPE of 0.10 percentage points. From the first half of 2011, Jung-gu's unemployment rate rises sharply, peaking at 6.1 percent in the second half of 2011, compared with 3.9 percent for the synthetic control. The gap narrows gradually thereafter but remains above one percentage point throughout the post-treatment period. Averaged over 2011–2015, the unemployment rate in Jung-gu was 5.4 percent, compared with 3.8 percent in the synthetic control, a gap of 1.6 percentage points.",
            "Table 4 shows that this effect is large relative to the placebo distribution. The post/pre RMSPE ratio of Jung-gu ranks second among the 47 districts, giving a permutation p-value of 0.04. The only donor with a larger ratio is a district whose pre-treatment fit is poor and whose post-treatment gap reflects the restructuring of its shipbuilding industry from 2014. Excluding donors whose pre-treatment RMSPE exceeds five times that of Jung-gu, Jung-gu has the largest ratio of all.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Unemployment rate: Jung-gu (Incheon) and synthetic control, 2008–2015",
              kind: "line",
              xLabels: ["08H1", "08H2", "09H1", "09H2", "10H1", "10H2", "11H1", "11H2", "12H1", "12H2", "13H1", "13H2", "14H1", "14H2", "15H1", "15H2"],
              yLabel: "Unemployment rate (percent)",
              series: [
                { name: "Jung-gu", values: [3.5, 3.7, 4.1, 3.8, 3.6, 3.5, 5.9, 6.1, 5.8, 5.6, 5.4, 5.2, 5.1, 5.0, 4.9, 4.8] },
                { name: "Synthetic Jung-gu", values: [3.6, 3.6, 4.0, 3.9, 3.5, 3.6, 3.8, 3.9, 3.7, 3.8, 3.8, 3.7, 3.8, 3.9, 3.8, 3.8] },
              ],
              marker: 5,
              note: "Note: Semi-annual estimates from the Local Area Labour Force Survey. The dashed line marks the shelling and relocation of November 2010.",
            },
          ],
        },
        {
          id: "results-wages",
          heading: "7.2 Wages of Low-Skilled Incumbents",
          paragraphs: [
            "Figure 2 reports the gap in real daily earnings between low-skilled incumbent workers in Jung-gu and those in the synthetic control, together with the 5th and 95th percentiles of the placebo distribution. Before 2011 the gap fluctuates within half a percentage point of zero. After the relocation, earnings of low-skilled incumbents in Jung-gu are slightly lower than those of the synthetic control, by 1.6 percent in 2011 and by progressively smaller amounts thereafter. The average gap over 2011–2015 is −0.8 percent, well within the range of the placebo distribution: the permutation p-value is 0.53.",
            "The absence of a significant wage effect is consistent with H1. A back-of-the-envelope calculation using the framework of Section 4 suggests that an inflow of about 700 economically active persons, equal to roughly 2.3 percent of Jung-gu's low-skilled labour force, would reduce low-skilled wages by about 1 percent if wages were flexible and labour demand had an elasticity of −2 to −3. Our point estimate is close to this prediction, but the confidence region also includes zero, and we cannot reject the hypothesis that wages were entirely unaffected. Earnings of all incumbent employees, including those with tertiary education, show an even smaller gap of 0.3 percent.",
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Gap in real daily earnings of low-skilled incumbents, Jung-gu minus synthetic control",
              kind: "line",
              xLabels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
              yLabel: "Earnings gap (percent)",
              series: [
                {
                  name: "Gap",
                  values: [0.3, -0.4, 0.2, -0.1, 0.1, -1.6, -1.1, -0.6, -0.4, -0.3],
                  lower: [-1.4, -1.6, -1.3, -1.5, -1.4, -3.9, -3.7, -3.5, -3.6, -3.8],
                  upper: [1.5, 1.3, 1.4, 1.6, 1.5, 3.7, 3.8, 3.6, 3.7, 3.9],
                },
              ],
              marker: 4,
              note: "Note: Employment Insurance panel of workers without tertiary education employed in the district in 2009. Bands show the 5th and 95th percentiles of the placebo gaps across the 46 donor districts.",
            },
          ],
        },
        {
          id: "results-employment",
          heading: "7.3 Employment and Participation",
          paragraphs: [
            "Table 4 also reports effects on the employment-population rate and the participation rate. The employment rate in Jung-gu fell by 0.9 percentage points relative to the synthetic control, and the participation rate rose by 0.5 percentage points, but neither effect is statistically significant. The combination of a modest increase in participation and a modest decline in employment accounts arithmetically for the rise in the unemployment rate: the evacuees raised the labour force of the district, and a substantial share of them, together with some incumbent workers, did not find jobs.",
            "Taken together, the results support H2. The inflow did not measurably depress the wages of low-skilled incumbents, but it raised local unemployment by an amount that was both statistically significant and economically meaningful. Relative to an inflow of about 700 economically active persons into a labour force of about 46,000, a 1.6 percentage point increase in unemployment corresponds to roughly 740 additional unemployed persons — more than the number of evacuees who were unemployed, implying that some incumbent workers also lost or failed to find jobs.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Synthetic-control estimates of the effect of the relocation, 2011–2015",
              columns: ["Outcome", "Jung-gu", "Synthetic", "Gap", "Permutation p", "Pre-RMSPE"],
              rows: [
                ["Unemployment rate (percent)", "5.4", "3.8", "1.6**", "0.04", "0.10"],
                ["Low-skilled incumbent earnings (gap, percent)", "—", "—", "−0.8", "0.53", "0.24"],
                ["All incumbent earnings (gap, percent)", "—", "—", "0.3", "0.81", "0.19"],
                ["Employment-population rate (percent)", "54.2", "55.1", "−0.9", "0.17", "0.31"],
                ["Labour force participation rate (percent)", "57.3", "56.8", "0.5", "0.36", "0.28"],
                ["Registered claimants per 100 insured (from 2005)", "4.9", "3.9", "1.0**", "0.04", "0.12"],
              ],
              note: "Note: Averages over 2011–2015. Permutation p-values are the share of 47 districts with a post/pre RMSPE ratio at least as large as Jung-gu's. Earnings gaps are averages of annual percentage gaps for the 2009 incumbent panel. ** p < 0.05.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Adjustment Margins",
      paragraphs: [
        "We next examine the channels through which the labour-supply shock was absorbed, following H3. Table 5 reports synthetic-control estimates for employment by sector and for internal migration, together with a decomposition of the unemployment effect.",
        "Who became unemployed? Linking the relief registers to the survey and Employment Insurance records, we estimate that about 410 of the 700 economically active evacuees were unemployed on average in 2011–2012, and about 300 in 2013–2015. Averaged over the five years, the evacuees' own unemployment accounts for about 0.8 percentage points of the 1.6 percentage point increase in Jung-gu's unemployment rate. The remaining 0.8 percentage points reflect higher unemployment among incumbent residents, concentrated among workers without tertiary education aged 50 and over in retail, cleaning, security and casual construction work — the same jobs that evacuees sought when they entered the mainland labour market. The pattern is consistent with the displacement found in other settings where wages adjust slowly [13][18][19].",
        "Employment in local non-tradable services rose by 6.2 percent relative to the synthetic control (p = 0.06). The increase is concentrated in food and accommodation, small retail and personal services, sectors that respond to local consumption and that offer low barriers to entry for workers without formal qualifications. This expansion reflects both the additional demand created by the newcomers, many of whom received relief payments and spent them locally [23][24], and the employment of evacuees themselves: among evacuees who found mainland jobs, about two thirds worked in these sectors. Employment in manufacturing and in transport and storage, which serve markets outside the district, shows no significant change. Without the expansion of non-tradable services the rise in unemployment would plausibly have been considerably larger.",
        "Internal migration provided a second margin of adjustment. Net out-migration of incumbent residents aged 25–54 without tertiary education rose by 0.9 percentage points per year relative to the synthetic control (p = 0.09), with most movers relocating to other districts of Incheon and to neighbouring cities of Gyeonggi Province. In-migration of low-skilled working-age adults into Jung-gu from elsewhere also fell, by 0.4 percentage points per year, although this estimate is imprecise. These responses are consistent with evidence that native mobility partly offsets immigrant inflows [11][22], and imply that part of the shock was diffused across the wider metropolitan labour market. Because the other districts of Incheon are much larger than Jung-gu, the implied effects there are too small to detect: estimates for the remaining mainland districts of Incheon show no significant change in unemployment.",
        "Heterogeneity across incumbent groups reinforces this interpretation. The earnings gap is slightly more negative for incumbents aged 50 and over (−1.3 percent) and for women (−1.1 percent), who were more concentrated in the service jobs into which evacuees moved, but neither estimate is statistically significant. The unemployment effect is larger among incumbents without tertiary education than among graduates, for whom we find no effect. These patterns suggest that competition occurred mainly along the margin of hiring into low-skilled service jobs, rather than through lower pay for those already employed.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Adjustment margins: sectoral employment, migration and decomposition of the unemployment effect",
          columns: ["Outcome", "Gap, 2011–2015", "Permutation p"],
          rows: [
            ["Employment, non-tradable services (percent)", "6.2*", "0.06"],
            ["Employment, manufacturing (percent)", "−0.4", "0.79"],
            ["Employment, transport and storage (percent)", "0.7", "0.68"],
            ["Employment, construction (percent)", "1.9", "0.47"],
            ["Employment, public and social services (percent)", "2.4", "0.30"],
            ["Net out-migration, low-skilled aged 25–54 (pp per year)", "0.9*", "0.09"],
            ["In-migration, low-skilled aged 25–54 (pp per year)", "−0.4", "0.24"],
            ["Unemployment effect due to evacuees (pp)", "0.8", "—"],
            ["Unemployment effect due to incumbents (pp)", "0.8", "—"],
          ],
          note: "Note: Employment from the Census on Establishments; migration from Internal Migration Statistics, as a percentage of the 2010 population in the group. The decomposition uses the linked relief-register extract described in Appendix A. * p < 0.10.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a range of robustness checks for the unemployment and wage effects. The unemployment effect is similar when we restrict the donor pool to the 20 districts with the closest pre-treatment fit, when we exclude the three Busan districts that receive the largest weights, and when we use the augmented synthetic-control estimator, which corrects for imperfect pre-treatment fit. A leave-one-out exercise, in which each donor with positive weight is excluded in turn, yields unemployment effects between 1.3 and 1.8 percentage points.",
        "Defining the treated unit more broadly, as Jung-gu and the neighbouring Dong-gu combined, reduces the estimated effect to 0.9 percentage points, as expected if the evacuees were concentrated in Jung-gu and the effect is diluted by a larger denominator; the implied number of additional unemployed persons is similar. A placebo test that assigns treatment to the second half of 2009, a year before the relocation, produces a gap of 0.2 percentage points that is not significant. Using administrative claimant rates, which allow a pre-treatment period starting in 2005, gives a gap equivalent to 1.0 claimants per 100 insured workers, with a similar permutation ranking. Finally, a difference-in-differences comparison between Jung-gu and the five donors with the closest pre-treatment fit yields an unemployment effect of 1.4 percentage points, significant at the 5 percent level with wild-bootstrap inference.",
        "Wage estimates are similarly robust: in no specification is the earnings effect on low-skilled incumbents larger than 1.5 percent in absolute value or statistically significant. We also verified that the results are not driven by other events. The major redevelopment projects in Jung-gu during the period, including the expansion of the Yeongjong area around Incheon International Airport, were planned well before 2010; excluding the Yeongjong neighbourhoods from the district aggregates, using the Census on Establishments, does not change the sectoral estimates. Nor do the results reflect the regional effects of the 2008–2009 global financial crisis, from which Jung-gu and its synthetic control recovered at the same pace before the shelling.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the unemployment and wage effects",
          columns: ["Specification", "Unemployment gap (pp)", "p", "Low-skilled earnings gap (%)", "p"],
          rows: [
            ["Baseline", "1.6**", "0.04", "−0.8", "0.53"],
            ["Donors restricted to 20 best-fitting districts", "1.5**", "0.05", "−0.7", "0.57"],
            ["Excluding Busan donors", "1.7*", "0.06", "−1.0", "0.46"],
            ["Augmented synthetic control", "1.5**", "0.04", "−0.6", "0.61"],
            ["Treated unit: Jung-gu and Dong-gu", "0.9*", "0.09", "−0.5", "0.66"],
            ["In-time placebo (treatment in 2009H2)", "0.2", "0.70", "0.1", "0.92"],
            ["Difference-in-differences, five matched donors", "1.4**", "0.03", "−0.9", "0.41"],
          ],
          note: "Note: p denotes permutation p-values for synthetic-control specifications and wild-cluster-bootstrap p-values for the difference-in-differences specification. * p < 0.10, ** p < 0.05.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results contribute to the debate about why wage effects of immigration and refugee inflows are often small. In our setting, the inflow was unambiguously exogenous, the newcomers were concentrated in a well-defined labour market, and they were, if anything, close substitutes for the low-skilled incumbents with whom they competed. Even so, we find no significant effect on the wages of incumbent workers. Rather, the shock was reflected in higher unemployment, an expansion of local services and net out-migration of incumbents. This pattern is close to those found in Germany [13][18] and among the European economies with rigid labour markets studied by Angrist and Kugler {19}, and suggests that in labour markets where wages adjust slowly, studies focusing only on wages may understate the costs borne by incumbents.",
        "Why were wages so rigid? Low-skilled service jobs in Jung-gu are concentrated in small establishments whose wages are anchored by the statutory minimum wage, which rose by 5.1 percent in 2011 and by about 6 percent per year thereafter, and by local norms. A large share of low-skilled incumbents were paid close to the minimum, limiting the scope for downward wage adjustment. Under these conditions, a local increase in labour supply is more likely to lengthen job queues than to reduce pay, a mechanism consistent with the concentration of incumbent unemployment among older workers seeking jobs in the same occupations as the evacuees.",
        "The episode also offers lessons for the design of relocation policies. Korea's response to the Yeonpyeong relocation emphasised emergency housing and income support, but provided little in the way of job search assistance or retraining for evacuees whose skills were tied to island fishing. Our estimates suggest that the evacuees' own unemployment accounted for half of the local increase. Targeted employment services could have reduced both their unemployment and, by easing competition for the same entry-level jobs, the displacement of incumbents. Spreading resettlement across a wider area would also have reduced pressure on a single local labour market, although at the cost of dispersing an established community.",
        "More broadly, the findings are relevant to policies for internally displaced persons and refugees. Korea has received growing numbers of North Korean defectors and, more recently, of refugees and humanitarian migrants, and other Asian economies face displacement from conflict and natural disasters. Our evidence suggests that receiving communities can absorb sudden inflows without large wage declines, but that unemployment among both newcomers and competing incumbents can rise for several years. Policies that help newcomers find jobs that match their skills, and that support incumbents in the most exposed occupations, can reduce these costs. Because our estimates come from a single episode of modest size, however, they should be extrapolated to larger inflows with caution: the effects of an inflow equal to several percent of the labour force could be proportionally larger if non-tradable demand and migration responses are subject to limits.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "The relocation of approximately 1,400 residents of Yeonpyeong Island to Incheon after the shelling of November 2010 provides a rare natural experiment in which a population inflow was unexpected, concentrated and unrelated to local economic conditions. Using a synthetic-control approach, we find no statistically significant effect on the wages of incumbent low-skilled workers over 2011–2015, but a 1.6 percentage point increase in local unemployment. The shock was absorbed primarily through an expansion of local non-tradable services and through internal migration of incumbent workers to other parts of the metropolitan area.",
        "These results suggest that in labour markets with rigid wages the costs of sudden labour-supply shocks fall on employment rather than pay, and that the distribution of those costs depends on the capacity of local service sectors to expand and on the mobility of incumbent workers. Future research could use linked longitudinal records to follow the evacuees and the displaced incumbents over longer horizons, to examine whether their unemployment spells left lasting scars, and to compare the Yeonpyeong experience with the resettlement of other displaced populations in Korea and elsewhere in Asia.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction and Additional Details",
      paragraphs: [
        "Relief-register extract. Ongjin County maintained registers of evacuees eligible for living allowances, which record the age, sex, household and pre-relocation occupation of each registered resident and the address of their mainland accommodation. Under a data-use agreement, an anonymised extract was linked by the Korea Employment Information Service to Employment Insurance records, allowing us to identify evacuees who entered insured employment and their industry. Evacuees not observed in insured employment were classified as unemployed, self-employed or inactive using a follow-up survey conducted by the county in 2012 and 2014; we interpolate between survey dates.",
        "Synthetic controls for other outcomes. For low-skilled earnings, positive weights are assigned to the same seven donors as in Table 3 with weights ranging from 0.03 to 0.29, plus Gunsan-si (0.05). For sectoral employment and migration, synthetic controls are constructed separately for each outcome using the same predictors; the largest weights are again assigned to the Busan port districts. Pre-treatment RMSPEs are reported in Table 4 for the main outcomes.",
        "Survey estimates. Local Area Labour Force Survey estimates for Jung-gu are computed using the survey's district weights. Because the evacuees were initially housed in emergency shelters that may not have been in the survey frame, the survey may undercount them in the first half of 2011; from the second half of 2011, when most were in rental apartments, they are covered. The unemployment effect for 2011H1 may therefore understate the true effect, which would bias our average estimate slightly downwards.",
        "Inference details. The permutation distribution is computed by applying the synthetic-control procedure to each of the 46 donors with Jung-gu excluded from its donor pool. Ratios of post- to pre-treatment RMSPE are compared across all 47 districts. The wild-cluster-bootstrap inference for the difference-in-differences specification uses 999 replications with Webb weights, clustering by district.",
      ],
    },
  ],
};
