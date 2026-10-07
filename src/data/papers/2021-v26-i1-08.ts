// Vol. 26, No. 1 (January 2021) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i1-08",
  title: "Land Titling and Agricultural Investment: Evidence from Vietnam's Land Use Rights Certificates",
  authors: [
    { name: "Thi-Thu Nguyen", corresponding: true, affiliation: { department: "Faculty of International Economics", institution: "Foreign Trade University", city: "Hanoi", country: "Vietnam" } },
    { name: "Minh-Duc Tran", corresponding: false, affiliation: { department: "Institute of Development Economics", institution: "University of Economics Ho Chi Minh City", city: "Ho Chi Minh City", country: "Vietnam" } },
    { name: "Hendrik Vos", corresponding: false, affiliation: { department: "Development Economics Group", institution: "Wageningen University", city: "Wageningen", country: "Netherlands" } },
  ],
  abstract:
    "Do formal land-use rights certificates raise farm investment and productivity? We study Vietnam, where systematic titling campaigns issued land use rights certificates ('red books') to millions of rural plots at different times in different communes. Using plot-level panels from the Vietnam Access to Resources Household Survey for 2008–2018 in 12 provinces, matched to commune records on the timing of systematic titling campaigns, we estimate plot fixed-effects regressions that exploit the staggered arrival of campaigns, and we check the results with an instrumental-variables strategy based on distance to district land offices. Receiving a certificate raises the probability of long-term investment — irrigation, terracing and perennial crops — by 8.6 percentage points and rice yields by 5.2 percent. Titled plots are 12 percent more likely to be rented out, and titled households borrow from the Vietnam Bank for Agriculture and Rural Development at a 4.4 percentage point higher rate. All effects are strongest where women are named as co-holders. The results indicate that certificates work through tenure security, land market participation and collateral, and support completing titling in lagging communes.",
  keywords: ["land titling", "property rights", "agricultural investment", "tenure security", "Vietnam"],
  jelCodes: ["Q15", "O13", "K11", "Q12"],
  pages: "1–28",
  volume: 26,
  issue: 1,
  year: 2021,
  received: "2020-01-21",
  accepted: "2020-07-28",
  published: "2021-01-15",
  publishedOnline: "2021-01-07",
  citations: 38,
  downloads: 3353,
  pdfSize: "1.68 MB",
  type: "Research Article",
  acknowledgments:
    "We thank participants at the Vietnam Economists Annual Meeting and seminars at Foreign Trade University and Wageningen University, two anonymous referees and the handling editor for helpful comments. We are grateful to provincial Departments of Natural Resources and Environment for access to campaign records. All errors are our own.",
  dataAvailability:
    "The VARHS data are available on request from the survey's institutional custodians. Commune-level campaign dates were compiled from provincial records and, together with replication code, are available from the corresponding author.",
  editorialNote:
    "Thi-Thu Nguyen, Minh-Duc Tran and Hendrik Vos show that Vietnam's land use rights certificates raised long-term plot investment by 8.6 percentage points and rice yields by 5.2 percent, made plots 12 percent more likely to be rented out and raised formal borrowing from the agricultural bank by 4.4 percentage points, with the largest effects where women are named co-holders.",
  refs: [
    /* 1 */ "Besley, T. (1995). Property rights and investment incentives: Theory and evidence from Ghana. Journal of Political Economy, 103(5), 903–937.",
    /* 2 */ "Field, E. (2007). Entitled to work: Urban property rights and labor supply in Peru. Quarterly Journal of Economics, 122(4), 1561–1602.",
    /* 3 */ "Galiani, S., & Schargrodsky, E. (2010). Property rights for the poor: Effects of land titling. Journal of Public Economics, 94(9–10), 700–729.",
    /* 4 */ "Goldstein, M., & Udry, C. (2008). The profits of power: Land rights and agricultural investment in Ghana. Journal of Political Economy, 116(6), 981–1022.",
    /* 5 */ "Do, Q.-T., & Iyer, L. (2008). Land titling and rural transition in Vietnam. Economic Development and Cultural Change, 56(3), 531–579.",
    /* 6 */ "Deininger, K., & Jin, S. (2006). Tenure security and land-related investment: Evidence from Ethiopia. European Economic Review, 50(5), 1245–1277.",
    /* 7 */ "Ali, D. A., Deininger, K., & Goldstein, M. (2014). Environmental and gender impacts of land tenure regularization in Africa: Pilot evidence from Rwanda. Journal of Development Economics, 110, 262–275.",
    /* 8 */ "Jacoby, H. G., Li, G., & Rozelle, S. (2002). Hazards of expropriation: Tenure insecurity and investment in rural China. American Economic Review, 92(5), 1420–1447.",
    /* 9 */ "Feder, G., & Feeny, D. (1991). Land tenure and property rights: Theory and implications for development policy. World Bank Economic Review, 5(1), 135–153.",
    /* 10 */ "De Soto, H. (2000). The mystery of capital: Why capitalism triumphs in the West and fails everywhere else. New York: Basic Books.",
    /* 11 */ "Besley, T., & Ghatak, M. (2010). Property rights and economic development. In D. Rodrik & M. Rosenzweig (Eds.), Handbook of Development Economics (Vol. 5, pp. 4525–4595). Amsterdam: Elsevier.",
    /* 12 */ "Lawry, S., Samii, C., Hall, R., Leopold, A., Hornby, D., & Mtero, F. (2017). The impact of land property rights interventions on investment and agricultural productivity in developing countries: A systematic review. Journal of Development Effectiveness, 9(1), 61–81.",
    /* 13 */ "Newman, C., Tarp, F., & van den Broeck, K. (2015). Property rights and productivity: The case of joint land titling in Vietnam. Land Economics, 91(1), 91–105.",
    /* 14 */ "Deininger, K., Ali, D. A., & Alemu, T. (2011). Impacts of land certification on tenure security, investment, and land market participation: Evidence from Ethiopia. Land Economics, 87(2), 312–334.",
    /* 15 */ "Holden, S. T., Deininger, K., & Ghebru, H. (2009). Impacts of low-cost land certification on investment and productivity. American Journal of Agricultural Economics, 91(2), 359–373.",
    /* 16 */ "Banerjee, A. V., Gertler, P. J., & Ghatak, M. (2002). Empowerment and efficiency: Tenancy reform in West Bengal. Journal of Political Economy, 110(2), 239–280.",
    /* 17 */ "Brasselle, A.-S., Gaspart, F., & Platteau, J.-P. (2002). Land tenure security and investment incentives: Puzzling evidence from Burkina Faso. Journal of Development Economics, 67(2), 373–418.",
    /* 18 */ "Fenske, J. (2011). Land tenure and investment incentives: Evidence from West Africa. Journal of Development Economics, 95(2), 137–156.",
    /* 19 */ "Markussen, T., Tarp, F., & van den Broeck, K. (2011). The forgotten property rights: Evidence on land use rights in Vietnam. World Development, 39(5), 839–850.",
    /* 20 */ "Kemper, N., Ha, L. V., & Klump, R. (2015). Property rights and consumption volatility: Evidence from a land reform in Vietnam. World Development, 71, 107–130.",
    /* 21 */ "de Chaisemartin, C., & D'Haultfœuille, X. (2020). Two-way fixed effects estimators with heterogeneous treatment effects. American Economic Review, 110(9), 2964–2996.",
    /* 22 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 23 */ "Ravallion, M., & van de Walle, D. (2008). Land in transition: Reform and poverty in rural Vietnam. Washington, DC: World Bank and Palgrave Macmillan.",
    /* 24 */ "Carter, M. R., & Olinto, P. (2003). Getting institutions \"right\" for whom? Credit constraints and the impact of property rights on the quantity and composition of investment. American Journal of Agricultural Economics, 85(1), 173–186.",
    /* 25 */ "Feder, G., Onchan, T., Chalamwong, Y., & Hongladarom, C. (1988). Land policies and farm productivity in Thailand. Baltimore: Johns Hopkins University Press.",
    /* 26 */ "Deininger, K., & Feder, G. (2009). Land registration, governance, and development: Evidence and implications for policy. World Bank Research Observer, 24(2), 233–266.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Secure property rights over land are widely regarded as a precondition for agricultural investment, efficient land markets and access to credit in poor rural economies [9][10][11]. Farmers who fear that their land may be reallocated, expropriated or contested have weak incentives to make investments whose returns accrue over many seasons, such as irrigation channels, terraces or orchards. Formal titles may also allow land to be rented or sold to more productive users and pledged as collateral. On the strength of these arguments, governments and donors have spent billions of dollars on land registration programmes across Africa, Asia and Latin America [26].",
        "The empirical evidence on whether formal titles deliver these benefits is, however, mixed. Some studies find substantial effects of titling or certification on investment and productivity [1][6][14][15], while others find small or no effects, often because customary tenure already provided considerable security or because titles were not recognised by lenders [17][18][24]. Systematic reviews conclude that effects are larger in Asia and Latin America than in Africa, but that credible quasi-experimental evidence remains scarce [12]. Separating the causal effect of titles from the characteristics of plots and households that obtain them is the central empirical challenge.",
        "This paper studies Vietnam, where the state remains the owner of all land but households hold long-term land use rights that can be exchanged, leased, inherited and mortgaged. Since the 1993 Land Law, these rights have been documented by land use rights certificates, popularly known as 'red books'. Although certificates could in principle be requested individually, most rural plots were titled during systematic campaigns in which district land offices surveyed and registered all plots in a commune at once. Because the timing of campaigns depended largely on the administrative capacity of district land offices and the order in which provinces scheduled communes, otherwise similar plots received certificates in different years.",
        "We exploit this staggered rollout using plot-level panel data from the Vietnam Access to Resources Household Survey (VARHS), which follows rural households in 12 provinces every two years between 2008 and 2018. We match each plot to the year in which a systematic titling campaign reached its commune, compiled from provincial records, and estimate plot fixed-effects regressions that compare the same plot before and after certification, relative to plots in communes that had not yet been reached. As a check on the identifying assumption, we use an instrumental-variables strategy that exploits the distance between each commune and its district land office, which shaped the order in which communes were surveyed.",
        "We find that receiving a certificate raises the probability that a plot receives long-term investment — irrigation, terracing or conversion to perennial crops — by 8.6 percentage points, from a base of 14.3 percent per survey round. Rice yields rise by 5.2 percent. Titled plots are 12 percent more likely to be rented out, and titled households are 4.4 percentage points more likely to borrow from the Vietnam Bank for Agriculture and Rural Development (VBARD), the main formal lender in rural areas. Effects on investment, rental and credit are all strongest where women are named as co-holders on the certificate, a requirement introduced by the 2003 Land Law. Event-study estimates show no differential trends before campaigns arrived, and the instrumental-variables estimates are close to the fixed-effects estimates.",
        "Our contribution is threefold. First, we provide plot-level panel evidence on titling in Asia's largest transition economy outside China, complementing earlier cross-sectional work on Vietnam [5][13][19]. Second, we jointly estimate the three channels through which titles are thought to operate — investment security, land market participation and collateral — in a single setting. Third, we show that the gender of certificate holders shapes the returns to titling, extending evidence from Rwanda and Vietnam on joint titling [7][13]. Section 2 describes the institutional background, Section 3 reviews the literature and Section 4 sets out our hypotheses. Sections 5 and 6 present the data and empirical strategy, Sections 7–9 report results, mechanisms and robustness checks, and Sections 10 and 11 discuss policy implications and conclude.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Following decollectivisation in 1988, agricultural land in Vietnam was allocated to households on an egalitarian basis within each commune, typically in proportion to household size and with plots of varying quality to equalise holdings [23]. The 1993 Land Law granted households five rights over allocated land — to exchange, transfer, lease, inherit and mortgage land use rights — for terms of 20 years for annual crops and 50 years for perennial crops. The 2003 Land Law extended the regime, required that certificates for land held by married couples bear the names of both spouses, and simplified procedures for transactions. The 2013 Land Law extended the term for annual cropland to 50 years and strengthened compensation rules for land recovered by the state.",
        "The land use rights certificate is the legal proof of these rights. Without a certificate, households can farm their land, but transactions cannot be registered, land cannot be formally mortgaged, and households have weaker standing in disputes or when the state recovers land for public purposes. The first wave of certificates in the 1990s was issued quickly and often without proper cadastral maps [5]. From the mid-2000s the government launched a renewed drive, financed partly by the World Bank's Vietnam Land Administration Project, to complete systematic registration based on modern cadastral surveys and to reissue certificates to both spouses.",
        "Systematic campaigns followed a common procedure. The district office of the Department of Natural Resources and Environment surveyed all plots in a commune, resolved boundary disputes with the commune People's Committee, publicly displayed the cadastral map and issued certificates, typically within 12 to 18 months of the start of the survey. Because survey teams were scarce, provinces scheduled communes over several years. Table 1 summarises the timing of campaigns in our sample provinces. By 2008, 61 percent of sample plots held a certificate; by 2018, this share had risen to 83 percent, with most of the increase accounted for by systematic campaigns.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Systematic titling campaigns in the 12 VARHS provinces, 2008–2018",
          columns: ["Region", "Provinces", "Communes", "Campaign communes", "First campaign", "Share of plots titled 2008", "Share titled 2018"],
          rows: [
            ["Northern uplands", "Lao Cai, Phu Tho, Lai Chau, Dien Bien", "176", "112", "2009", "0.48", "0.79"],
            ["Red River Delta", "Ha Tay", "52", "31", "2010", "0.72", "0.88"],
            ["North and South Central Coast", "Nghe An, Quang Nam, Khanh Hoa", "128", "74", "2009", "0.66", "0.85"],
            ["Central Highlands", "Dak Lak, Dak Nong, Lam Dong", "94", "63", "2011", "0.55", "0.80"],
            ["Mekong River Delta", "Long An", "36", "18", "2010", "0.78", "0.91"],
            ["All provinces", "12", "486", "298", "2009", "0.61", "0.83"],
          ],
          note: "Note: Campaign communes are those reached by a systematic titling campaign between 2009 and 2017. Ha Tay was merged into Hanoi in 2008; we retain the original survey communes. Shares are computed over VARHS agricultural plots.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Theoretical work identifies three channels through which land rights affect investment [1][11]. The security channel operates because owners with insecure rights may lose the returns to their investments through expropriation or reallocation. The gains-from-trade channel operates because transferable rights allow investments to be recouped through sale or rental. The collateral channel operates because registered land can secure loans that finance investment. Besley {1} finds evidence consistent with these channels in Ghana, although he emphasises that investment may itself enhance tenure security under customary systems, which complicates identification.",
        "Subsequent studies have sought cleaner identification. Jacoby, Li and Rozelle {8} show that the risk of administrative land reallocation in rural China reduces the use of organic fertiliser, an investment with multi-year returns. Goldstein and Udry {4} show that Ghanaian farmers with less political power fallow their land less, because fallowed land risks being reallocated. In urban Peru, Field {2} finds that titling released household labour from guarding property, and Galiani and Schargrodsky {3} exploit a natural experiment in Buenos Aires to show that titled households invested more in housing. Banerjee, Gertler and Ghatak {16} show that improved tenure security for sharecroppers in West Bengal raised rice productivity substantially.",
        "Evidence from large-scale certification programmes in Africa is generally positive but modest. Low-cost certification in Ethiopia raised investment in soil conservation and land rental [6][14][15], and Rwanda's land tenure regularisation increased soil conservation investment, especially by female-headed households [7]. Brasselle, Gaspart and Platteau {17} and Fenske {18} find little effect of formal rights in West Africa, where customary institutions provide substantial security. Carter and Olinto {24} show that the investment effects of titling in Paraguay accrue mainly to wealthier farmers able to use land as collateral. The systematic review of Lawry and co-authors {12} reports average productivity gains from land rights interventions of about 40 percent in Latin America and Asia, but small effects in Africa. Earlier evidence from Thailand also suggested large productivity gains from titling [25].",
        "Vietnam has received particular attention. Do and Iyer {5} use variation across provinces in the speed of certificate issuance after the 1993 Land Law and find that titling increased the share of land devoted to perennial crops and the time households spent in non-farm activities. Markussen, Tarp and van den Broeck {19} show that informal restrictions on land use rights reduce investment, and Newman, Tarp and van den Broeck {13} find that plots titled jointly to husbands and wives or to women exhibit higher productivity. Kemper, Ha and Klump {20} show that titling reduced consumption volatility. Ravallion and van de Walle {23} analyse the distributional consequences of the transition to a land market. Our study complements this work by using a long plot-level panel and the staggered timing of systematic campaigns.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a household that farms a plot and chooses whether to undertake a lumpy investment with up-front cost c and returns r per season over T seasons. Let p denote the per-season probability that the household loses the plot through reallocation, recovery or dispute, and let λ denote the share of the remaining value of the investment that the household can recoup when it transfers the plot through rental or sale. The household invests if the expected discounted value of returns, accounting for both the probability of loss and the possibility of transfer, exceeds c plus the shadow cost of financing it. A certificate lowers p, raises λ by allowing transactions to be registered, and lowers the shadow cost of finance if the plot can be mortgaged.",
        "This framework yields four testable hypotheses. H1: certification increases long-term investments whose returns accrue over several seasons, such as irrigation, terracing and perennial crops, but has smaller effects on short-term inputs such as fertiliser. H2: certification raises yields, both through investment and through more intensive use of the plot. H3: certification increases land rental, because registered contracts reduce the risk that tenants claim rights over the land. H4: certification increases borrowing from formal lenders that accept certificates as collateral, notably VBARD, but has no effect on informal borrowing.",
        "The framework also predicts heterogeneity. Effects should be larger where pre-titling tenure insecurity was greater — for example, in communes with a history of administrative reallocation — and where households were credit-constrained. Naming women as co-holders may further strengthen effects. Within households, women's names on certificates protect their claims in case of divorce or widowhood and increase their bargaining power over plot use, which may raise investment if women place a higher value on long-term returns or if joint titling reduces intra-household disputes [7][13]. Lenders may also be more willing to accept certificates signed by both spouses, because consent from both is required to mortgage jointly held land.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our analysis combines household and plot data from VARHS with commune-level records on the timing of systematic titling campaigns.",
      ],
      subsections: [
        {
          id: "data-varhs",
          heading: "5.1 The VARHS Plot Panel",
          paragraphs: [
            "VARHS has surveyed approximately 2,200 rural households in 12 provinces every two years since 2006. The survey contains a detailed land module that records, for each plot, its size, land type, soil quality, distance from the house, irrigation status, crops grown, inputs, output and whether the household holds a land use rights certificate, together with the names on the certificate. It also records investments made on the plot since the previous survey, rental transactions and borrowing by source. We use the six rounds from 2008 to 2018 because the plot identifiers needed to link plots across rounds are consistent from 2008 onwards.",
            "Our main sample consists of 7,850 agricultural plots farmed by 2,160 households that appear in at least two rounds, yielding 34,200 plot-round observations. We exclude residential land and forest land allocated under separate programmes. Long-term investment is an indicator equal to one if, since the previous round, the household built or upgraded irrigation on the plot, constructed terraces or bunds, or planted perennial crops such as coffee, tea, fruit trees or pepper. Rice yields are measured in kilograms per hectare for plots that grow rice in the main season. Rental is an indicator equal to one if the plot is rented out to another household. Formal credit is an indicator equal to one if the household borrowed from VBARD since the previous round.",
        "Attrition from VARHS is modest: about 8 percent of households interviewed in 2008 are not observed in 2018, mainly because of migration of entire households to urban areas. Attrition is not correlated with the timing of titling campaigns in the household's commune, and reweighting the sample by the inverse of the predicted probability of remaining in the panel leaves our estimates virtually unchanged. Because plots may change hands through rental or sale, we follow plots farmed by the original household; plots rented out remain in the sample as observations of the owning household, with investment and yield outcomes recorded where the household reports them.",
          ],
        },
        {
          id: "data-campaigns",
          heading: "5.2 Campaign Timing and Summary Statistics",
          paragraphs: [
            "We compiled the start and completion dates of systematic campaigns for all 486 VARHS communes from the records of provincial Departments of Natural Resources and Environment and district land offices, cross-checked against the commune questionnaire of VARHS, which asks commune leaders whether and when cadastral surveys took place. Of the 486 communes, 298 were reached by a campaign between 2009 and 2017; the remainder had either completed systematic registration before 2008 or had not been reached by 2018. Our treatment variable is an indicator equal to one if the plot holds a certificate, and our instrument-based checks use the timing of campaigns directly.",
            "Table 2 reports summary statistics for plots in campaign communes before the campaign, separately for plots that were and were not titled by 2018, and for plots in communes never reached. Plots that received certificates during campaigns were similar to those that did not in size, soil quality and distance from the house, but were somewhat more likely to be irrigated. Households in never-reached communes are poorer and more likely to belong to ethnic minorities, which is why our preferred specifications rely on within-plot variation and campaign timing rather than cross-sectional comparisons.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Summary statistics, plot-round observations",
              columns: ["Variable", "Titled in campaign (pre)", "Not titled (pre)", "Never-reached communes", "All plots"],
              rows: [
                ["Plot size (m²)", "2,610", "2,480", "3,140", "2,690"],
                ["Distance to house (km)", "1.12", "1.20", "1.64", "1.24"],
                ["Good soil quality (share)", "0.38", "0.36", "0.31", "0.36"],
                ["Irrigated (share)", "0.58", "0.52", "0.41", "0.54"],
                ["Long-term investment since last round", "0.141", "0.138", "0.117", "0.143"],
                ["Rice yield (kg/ha)", "5,420", "5,360", "4,710", "5,280"],
                ["Rented out (share)", "0.073", "0.071", "0.058", "0.075"],
                ["Household borrowed from VBARD", "0.208", "0.214", "0.176", "0.210"],
                ["Woman named on certificate (titled plots)", "", "", "", "0.46"],
                ["Plot-round observations", "9,840", "3,120", "4,580", "34,200"],
              ],
              note: "Note: The first two columns describe plots in campaign communes in rounds before the campaign. The last column includes all rounds. Rice yield is for plots growing rice in the main season.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our baseline specification is Y_pht = β·Title_pht + X_ht'γ + α_p + δ_rt + ε_pht, where Y_pht is an outcome for plot p of household h in round t, Title_pht indicates that the plot holds a certificate, X_ht includes time-varying household characteristics (household size, head's age and education, and a wealth index), α_p are plot fixed effects and δ_rt are region-by-round fixed effects. Plot fixed effects absorb all time-invariant plot characteristics, such as soil quality, slope and location, that may affect both the probability of titling and the outcomes. Standard errors are clustered at the commune level, the level at which campaigns were assigned [22].",
      ],
      subsections: [
        {
          id: "strategy-staggered",
          heading: "6.1 Staggered Campaigns and Event Studies",
          paragraphs: [
            "Identification comes from plots whose certificate status changes during the sample period, most of which are in communes reached by campaigns. The key assumption is that, absent titling, outcomes on plots titled earlier and later would have evolved in parallel. To assess this assumption, we estimate event-study specifications that replace the treatment indicator with a set of indicators for rounds relative to the campaign in the plot's commune, from three rounds before to four rounds after. Because two-way fixed-effects estimators may be biased when treatment effects vary over time and across cohorts [21], we also report estimates that use only not-yet-treated communes as controls for each campaign cohort and aggregate cohort-specific effects with weights proportional to cohort size.",
          ],
        },
        {
          id: "strategy-iv",
          heading: "6.2 Instrumental Variables",
          paragraphs: [
            "Even with plot fixed effects, households may obtain certificates in response to changes in their circumstances — for example, applying individually when they plan to rent out or invest. We therefore instrument the certificate indicator with the interaction between the commune's distance to the district land office and a set of round indicators, controlling for plot fixed effects and region-by-round fixed effects. Survey teams were based at district offices and tended to start with nearby communes, so distance predicts the timing of campaigns. The exclusion restriction requires that distance affects changes in outcomes only through titling; we address threats to this restriction by controlling for distance to the district centre interacted with round, which captures differential growth of markets near district towns.",
            "Table 3 reports the first stage and balance tests. A 10-kilometre increase in distance to the district land office delays the arrival of a campaign by about 0.6 rounds and reduces the probability that a plot is titled in a given round by 5.1 percentage points, with a first-stage F-statistic of 31.8. Distance is not correlated with pre-campaign trends in investment, yields, rental or borrowing, nor with pre-campaign levels of plot characteristics once district fixed effects are included.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. First stage and balance tests for the distance instrument",
              columns: ["Dependent variable", "Coefficient on distance (per 10 km)", "Std. error", "Observations"],
              rows: [
                ["First stage: plot titled", "−0.051***", "(0.009)", "34,200"],
                ["Round of campaign arrival", "0.62***", "(0.11)", "298"],
                ["Pre-campaign trend: long-term investment", "0.002", "(0.006)", "9,840"],
                ["Pre-campaign trend: log rice yield", "−0.004", "(0.008)", "6,210"],
                ["Pre-campaign trend: rented out", "0.001", "(0.003)", "9,840"],
                ["Pre-campaign trend: VBARD borrowing", "−0.003", "(0.007)", "9,840"],
                ["Kleibergen-Paap F-statistic", "31.8", "", ""],
              ],
              note: "Note: First-stage regression includes plot and region-by-round fixed effects and distance to the district centre interacted with round. Balance regressions use pre-campaign rounds in campaign communes and include district fixed effects. Standard errors clustered by commune. *** p < 0.01.",
            },
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We present results for investment, productivity, and land rental and credit in turn.",
      ],
      subsections: [
        {
          id: "results-investment",
          heading: "7.1 Long-Term Investment",
          paragraphs: [
            "Table 4 reports the main estimates. In the plot fixed-effects specification, holding a certificate raises the probability of long-term investment on the plot by 8.6 percentage points, a 60 percent increase relative to the mean of 14.3 percent. The estimate is robust to adding household controls and to using the cohort-specific estimator, which yields 8.9 percentage points. The IV estimate is 9.4 percentage points, slightly larger but not statistically different, suggesting that endogenous individual applications do not drive the fixed-effects estimates.",
            "Breaking down the investment measure, about half of the effect reflects conversion to perennial crops, a third irrigation investments and the remainder terracing and bunds. Consistent with H1, the effect on short-term inputs is much smaller: chemical fertiliser use per hectare rises by only 1.8 percent, an effect that is not statistically significant. Figure 1 shows the event-study estimates. Coefficients for the three rounds before the campaign are small and statistically insignificant, supporting the parallel trends assumption. Investment rises in the round in which certificates are issued and remains elevated in subsequent rounds, as households continue to convert land to perennial crops.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Effects of land use rights certificates on investment, yields, rental and credit",
              columns: ["Outcome", "Plot FE", "Plot FE + controls", "Cohort-specific", "IV", "Mean"],
              rows: [
                ["Long-term investment", "0.086***", "0.084***", "0.089***", "0.094***", "0.143"],
                ["", "(0.017)", "(0.017)", "(0.021)", "(0.032)", ""],
                ["Log rice yield", "0.052***", "0.050***", "0.055***", "0.061**", ""],
                ["", "(0.014)", "(0.014)", "(0.018)", "(0.027)", ""],
                ["Plot rented out", "0.009***", "0.009***", "0.010***", "0.011*", "0.075"],
                ["", "(0.003)", "(0.003)", "(0.004)", "(0.006)", ""],
                ["Household borrowed from VBARD", "0.044***", "0.042***", "0.046***", "0.051**", "0.210"],
                ["", "(0.012)", "(0.012)", "(0.015)", "(0.023)", ""],
                ["Observations", "34,200", "34,200", "34,200", "34,200", ""],
              ],
              note: "Note: Each cell reports the coefficient on the certificate indicator from a separate regression, with standard errors clustered by commune in parentheses. All specifications include plot and region-by-round fixed effects. The cohort-specific estimator uses not-yet-treated communes as controls. Rice yields are estimated on 21,640 rice plot-rounds; VBARD borrowing is estimated at the plot level with household outcomes. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Event-study estimates: long-term investment around the titling campaign",
              kind: "line",
              xLabels: ["−3", "−2", "−1", "0", "1", "2", "3", "4"],
              yLabel: "Effect on probability of investment",
              series: [
                {
                  name: "Estimate",
                  values: [0.006, -0.004, 0, 0.058, 0.084, 0.092, 0.095, 0.091],
                  lower: [-0.026, -0.031, 0, 0.026, 0.049, 0.053, 0.051, 0.041],
                  upper: [0.038, 0.023, 0, 0.09, 0.119, 0.131, 0.139, 0.141],
                },
              ],
              marker: 2,
              note: "Note: Coefficients on indicators for survey rounds relative to the campaign, with round −1 as the reference; 95 percent confidence intervals based on commune-clustered standard errors. The dashed line marks the last pre-campaign round.",
            },
          ],
        },
        {
          id: "results-yields",
          heading: "7.2 Rice Yields",
          paragraphs: [
            "The second row of Table 4 shows that certification raises rice yields by 5.2 percent in the plot fixed-effects specification and by 6.1 percent in the IV specification. Evaluated at the mean yield of 5,280 kilograms per hectare, the fixed-effects estimate corresponds to about 275 kilograms per hectare per season. Yield gains emerge with a lag of one round, consistent with the time needed for irrigation investments to become productive.",
            "About two-fifths of the yield effect can be accounted for by irrigation investments: when we control for the plot's irrigation status, the coefficient falls to 3.1 percent. The remainder reflects more intensive cultivation, including a higher probability of double cropping and greater use of hired labour at transplanting and harvest. These results are consistent with H2 and with earlier evidence linking tenure security to productivity in Vietnam [13].",
          ],
        },
        {
          id: "results-markets",
          heading: "7.3 Land Rental and Formal Credit",
          paragraphs: [
            "Certification increases the probability that a plot is rented out by 0.9 percentage points, from a base of 7.5 percent — an increase of 12 percent. Rental transactions on titled plots are more likely to be written and to have terms of more than one year. The plots rented out are disproportionately those of households whose members have moved into non-farm work, consistent with the finding of Do and Iyer {5} that titling facilitates the reallocation of labour out of agriculture. We do not find that titling increases land sales, which remain rare in our sample.",
            "Titled households are 4.4 percentage points more likely to borrow from VBARD, a 21 percent increase relative to the mean of 21.0 percent. Loan sizes increase as well: the average VBARD loan of borrowing households rises by 14 percent. In contrast, certification has no significant effect on borrowing from informal lenders, relatives or the Vietnam Bank for Social Policies, which lends mostly without collateral to poor households. These results support H3 and H4, and suggest that the collateral channel complements the security channel.",
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Table 5 examines heterogeneity along the dimensions suggested by the framework. The investment effect is about 11.2 percentage points on plots where a woman is named on the certificate, compared with 6.1 percentage points on plots titled to men only. The difference is statistically significant at the 5 percent level and remains when we control for household characteristics interacted with the certificate indicator. Rental and credit effects are also larger when women are co-holders: VBARD borrowing rises by 6.0 percentage points for households with jointly titled plots, against 2.9 percentage points for others.",
        "Several explanations are consistent with this pattern. Joint certificates protect women's claims and may increase their bargaining power over land use, as found in Rwanda [7]. Bank officers report that jointly signed certificates reduce the risk that a mortgage is later contested by a spouse, which may explain the larger credit effect. We cannot fully rule out that households that chose to name women differ in unobserved ways, but the pattern holds within communes where the campaign issued joint certificates to all married couples, which limits the scope for selection.",
        "The effects are also larger where tenure insecurity was greater before titling. In communes whose leaders report an administrative land reallocation in the five years before the campaign, the investment effect is 12.4 percentage points, compared with 7.3 points elsewhere. Effects on credit are concentrated among households in the bottom two wealth quintiles, which are more likely to be credit-constrained, while effects on investment are similar across the wealth distribution — a contrast with the findings of Carter and Olinto {24} for Paraguay, where the poorest farmers gained little. Figure 2 summarises these differences for the investment outcome.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Heterogeneity in the effects of certification",
          columns: ["Subsample", "Long-term investment", "Log rice yield", "Rented out", "VBARD borrowing"],
          rows: [
            ["Woman named on certificate", "0.112***", "0.061***", "0.012***", "0.060***"],
            ["", "(0.021)", "(0.018)", "(0.004)", "(0.016)"],
            ["Men only on certificate", "0.061***", "0.043**", "0.006*", "0.029**"],
            ["", "(0.019)", "(0.017)", "(0.003)", "(0.013)"],
            ["Reallocation in previous five years", "0.124***", "0.068***", "0.011**", "0.047**"],
            ["", "(0.029)", "(0.024)", "(0.005)", "(0.020)"],
            ["No recent reallocation", "0.073***", "0.046***", "0.008**", "0.043***"],
            ["", "(0.019)", "(0.016)", "(0.003)", "(0.013)"],
            ["Bottom two wealth quintiles", "0.083***", "0.054***", "0.007*", "0.068***"],
            ["", "(0.023)", "(0.019)", "(0.004)", "(0.018)"],
            ["Top three wealth quintiles", "0.088***", "0.051***", "0.010***", "0.027**"],
            ["", "(0.020)", "(0.016)", "(0.003)", "(0.013)"],
          ],
          note: "Note: Plot fixed-effects estimates for each subsample with standard errors clustered by commune in parentheses. Wealth quintiles are based on a pre-campaign asset index. * p < 0.10, ** p < 0.05, *** p < 0.01.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Effect of certification on long-term investment, by subgroup",
          kind: "bar",
          xLabels: ["Woman co-holder", "Men only", "Recent reallocation", "No reallocation", "Bottom 40%", "Top 60%"],
          yLabel: "Percentage points",
          series: [{ name: "Effect on long-term investment", values: [11.2, 6.1, 12.4, 7.3, 8.3, 8.8] }],
          note: "Note: Plot fixed-effects estimates from Table 5, expressed in percentage points.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a series of robustness checks for the investment outcome. Restricting the sample to plots in communes reached by a campaign, so that identification comes only from differences in timing, yields an estimate of 8.2 percentage points. Excluding plots whose certificate was obtained through individual application rather than a campaign yields 8.8 percentage points. Results are similar when we drop the Central Highlands provinces, where the coffee boom may have driven both investment and demand for titles, and when we add commune-specific linear trends.",
        "We also address measurement concerns. Certificate status is self-reported, and some households may hold certificates that they cannot produce. Restricting the sample to plots for which enumerators saw the certificate yields an estimate of 8.4 percentage points. Investment is reported retrospectively for the period since the previous round; using only investments reported to have been completed within the last twelve months reduces the mean but leaves the proportional effect unchanged. Finally, wild cluster bootstrap p-values, which are more reliable with a moderate number of clusters, are below 0.01 for all four main outcomes.",
        "A concern specific to Vietnam is that campaigns may have coincided with other commune-level programmes, such as rural road construction under the New Rural Development programme launched in 2010. Controlling for indicators of commune infrastructure investments reported in the commune questionnaire leaves our estimates virtually unchanged. A placebo test that assigns campaign dates two rounds earlier than the true dates yields an estimate close to zero.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness checks: effect of certification on long-term investment",
          columns: ["Specification", "Estimate", "Std. error", "Observations"],
          rows: [
            ["Baseline (Table 4, column 1)", "0.086***", "(0.017)", "34,200"],
            ["Campaign communes only", "0.082***", "(0.019)", "21,450"],
            ["Excluding individual applications", "0.088***", "(0.018)", "31,920"],
            ["Excluding Central Highlands", "0.081***", "(0.018)", "27,630"],
            ["Commune-specific linear trends", "0.079***", "(0.020)", "34,200"],
            ["Certificate seen by enumerator", "0.084***", "(0.019)", "26,870"],
            ["Controlling for commune infrastructure", "0.085***", "(0.017)", "34,200"],
            ["Placebo: campaign two rounds earlier", "0.007", "(0.015)", "34,200"],
          ],
          note: "Note: Plot fixed-effects estimates with region-by-round fixed effects. Standard errors clustered by commune in parentheses. *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our estimates imply that Vietnam's systematic titling campaigns generated substantial returns. Converting the yield effect into value terms at average farm-gate prices, a certificate raises the annual value of rice output by roughly VND 1.4 million per hectare, before accounting for the returns to perennial crops and to land rented to more productive users. The cost of systematic registration under the Vietnam Land Administration Project was well below this per hectare, suggesting that completing registration in lagging communes would pass a cost-benefit test even on conservative assumptions.",
        "The results also speak to the design of titling programmes. First, the larger effects on plots titled jointly to women suggest that the requirement to name both spouses, introduced in 2003 and implemented unevenly, should be enforced consistently, and that reissuing older certificates in the names of both spouses could yield further gains. Second, the credit effects depend on lenders' willingness to accept certificates as collateral; the absence of effects on borrowing from the Vietnam Bank for Social Policies reflects its lending model rather than a lack of demand, and expanding collateral-based lending to poorer households may require complementary measures. Third, the larger effects where reallocation had occurred highlight that the value of certificates depends on the credibility of the commitment not to reallocate land, which the 2013 Land Law strengthened by extending tenure terms.",
        "Our findings are consistent with the broader literature suggesting that titling has larger effects in Asia than in Africa [12][26]. In Vietnam, where the state's administrative capacity is high and certificates are recognised by banks and courts, formal documents add security beyond what customary arrangements provide. In settings with weaker administration or strong customary institutions, the same intervention may yield smaller benefits [17][18]. The Vietnamese experience nonetheless shows that well-implemented registration can deliver gains to investment, productivity and financial inclusion at the same time.",
        "Two caveats apply. First, our estimates capture the effect of certificates in communes reached by campaigns during 2009–2017, which were disproportionately in upland and central provinces where registration had lagged. Effects may differ in the remaining unregistered communes, many of which are home to ethnic minorities and face complex customary claims. Second, titling may have general-equilibrium effects that our plot-level comparisons do not capture, such as changes in land prices or in the bargaining position of tenants. The rise in rental activity we document suggests that land markets became more active, but whether this improved the allocation of land across farmers is a question for further research.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We have used the staggered rollout of systematic land titling campaigns in Vietnam to estimate the effects of land use rights certificates on agricultural investment, productivity, land rental and credit. Certification raised long-term investment by 8.6 percentage points and rice yields by 5.2 percent, made plots 12 percent more likely to be rented out and raised formal borrowing by 4.4 percentage points. Effects are strongest where women are named as co-holders and where tenure insecurity was greatest.",
        "These findings suggest that property rights over land operate through all three channels emphasised by theory: security, gains from trade and collateral. Future research could examine the long-run consequences of titling for structural transformation, migration and the consolidation of fragmented holdings, as well as the effects of the land recovery provisions of the 2013 Land Law on the value of certificates in peri-urban areas.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Plot linking. VARHS assigns each plot an identifier within the household. We link plots across rounds using these identifiers and verify the link using plot size, land type and distance from the house; 4 percent of links that fail these checks are dropped. Plots that are split or merged are treated as new plots from the round of the change.",
        "Campaign dates. For each commune, we record the year in which the cadastral survey began and the year in which certificates were distributed. We assign a commune to a campaign round if certificates were distributed in the two years preceding the survey. In 37 communes where provincial and commune records disagree by more than one year, we use the commune questionnaire; results are robust to dropping these communes.",
        "Distance instrument. Distances from each commune's People's Committee office to the district land office and to the district centre are computed along the road network using 2010 maps. In 41 districts, the land office is located in the district centre, so the two distances coincide; identification in these districts comes only from the interaction with round fixed effects, and dropping them leaves the IV estimate unchanged at 9.3 percentage points.",
        "Inference. With 486 communes, conventional cluster-robust standard errors are reliable, but we also report wild cluster bootstrap p-values with 999 replications. Conley standard errors that allow for spatial correlation within 25 kilometres are within 10 percent of the clustered standard errors for all main outcomes.",
      ],
    },
  ],
};
