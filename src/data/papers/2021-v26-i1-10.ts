// Vol. 26, No. 1 (January 2021) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i1-10",
  title: "Fuel Subsidy Reform and Household Welfare: Evidence from Indonesia's 2015 Price Liberalisation",
  authors: [
    { name: "Rizky Pratama", corresponding: true, affiliation: { department: "Department of Economics", institution: "Universitas Gadjah Mada", city: "Yogyakarta", country: "Indonesia" } },
    { name: "Hong-Mei Wang", corresponding: false, affiliation: { department: "National School of Development", institution: "Peking University", city: "Beijing", country: "China" } },
  ],
  abstract:
    "Fuel subsidies absorb a large share of public budgets in many developing countries, but reform is often resisted because of fears about its effects on the poor. We quantify the distributional consequences of Indonesia's January 2015 reform, which removed the subsidy on Premium gasoline and replaced the diesel subsidy with a fixed per-litre amount, cutting fiscal spending on fuel by about IDR 211 trillion. We combine SUSENAS consumption modules for 2013–2017 with the 2010 input-output table to capture both direct fuel spending and indirect price effects, and exploit regional variation in pre-reform fuel intensity in a difference-in-differences framework. The reform reduced real household consumption by 1.9 percent on average, with indirect effects through transport and food prices accounting for 58 percent of the total burden. Losses as a share of consumption were roughly flat across quintiles, but the concurrent Kartu Keluarga Sejahtera transfers offset 120 percent of losses for the bottom decile. Reallocated fiscal space financed infrastructure spending equal to 1.6 percent of GDP in 2015–2016. Well-targeted compensation can make fuel subsidy reform progressive.",
  keywords: ["fuel subsidies", "energy pricing", "distributional effects", "cash transfers", "Indonesia"],
  jelCodes: ["Q48", "H23", "D12", "I38"],
  pages: "1–24",
  volume: 26,
  issue: 1,
  year: 2021,
  received: "2019-10-21",
  accepted: "2020-08-27",
  published: "2021-01-15",
  publishedOnline: "2020-12-27",
  citations: 41,
  downloads: 2678,
  pdfSize: "1.50 MB",
  type: "Research Article",
  acknowledgments:
    "We thank seminar participants at Universitas Gadjah Mada and Peking University, two anonymous referees and the handling editor for constructive comments, and Statistics Indonesia (BPS) for assistance with the SUSENAS data.",
  dataAvailability:
    "SUSENAS microdata and the 2010 input-output table are available from Statistics Indonesia (BPS) under its data access policy. Fiscal data are from Ministry of Finance budget documents. Code is available from the corresponding author.",
  editorialNote:
    "Rizky Pratama and Hong-Mei Wang find that Indonesia's 2015 fuel subsidy reform reduced real household consumption by 1.9 percent on average, 58 percent of it through indirect price effects, while concurrent Kartu Keluarga Sejahtera transfers more than offset losses for the poorest decile and the freed fiscal space financed infrastructure spending of 1.6 percent of GDP.",
  refs: [
    /* 1 */ "Coady, D., Parry, I., Sears, L., & Shang, B. (2017). How large are global fossil fuel subsidies? World Development, 91, 11–27.",
    /* 2 */ "Arze del Granado, F. J., Coady, D., & Gillingham, R. (2012). The unequal benefits of fuel subsidies: A review of evidence for developing countries. World Development, 40(11), 2234–2248.",
    /* 3 */ "Clements, B., Coady, D., Fabrizio, S., Gupta, S., Alleyne, T., & Sdralevich, C. (Eds.). (2013). Energy subsidy reform: Lessons and implications. Washington, DC: International Monetary Fund.",
    /* 4 */ "Sterner, T. (Ed.). (2011). Fuel taxes and the poor: The distributional effects of gasoline taxation and their implications for climate policy. Washington, DC: RFF Press.",
    /* 5 */ "Dartanto, T. (2013). Reducing fuel subsidies and the implication on fiscal balance and poverty in Indonesia: A simulation analysis. Energy Policy, 58, 117–134.",
    /* 6 */ "Yusuf, A. A., & Resosudarmo, B. P. (2008). Mitigating distributional impact of fuel pricing reform: The Indonesian experience. ASEAN Economic Bulletin, 25(1), 32–47.",
    /* 7 */ "Pradiptyo, R., Susamto, A., Wirotomo, A., Adisasmita, A., & Beaton, C. (2016). Financing development with fossil fuel subsidies: The reallocation of Indonesia's gasoline and diesel subsidies in 2015. Winnipeg: International Institute for Sustainable Development.",
    /* 8 */ "Deaton, A. (1989). Rice prices and income distribution in Thailand: A non-parametric analysis. Economic Journal, 99(395), 1–37.",
    /* 9 */ "Deaton, A. (1997). The analysis of household surveys: A microeconometric approach to development policy. Baltimore: Johns Hopkins University Press.",
    /* 10 */ "Banks, J., Blundell, R., & Lewbel, A. (1997). Quadratic Engel curves and consumer demand. Review of Economics and Statistics, 79(4), 527–539.",
    /* 11 */ "Rentschler, J., & Bazilian, M. (2017). Reforming fossil fuel subsidies: Drivers, barriers and the state of progress. Climate Policy, 17(7), 891–914.",
    /* 12 */ "Davis, L. W. (2014). The economic cost of global fuel subsidies. American Economic Review, 104(5), 581–585.",
    /* 13 */ "Coady, D., Parry, I., Le, N.-P., & Shang, B. (2019). Global fossil fuel subsidies remain large: An update based on country-level estimates. IMF Working Paper No. 19/89. Washington, DC: International Monetary Fund.",
    /* 14 */ "Banerjee, A., Hanna, R., Kyle, J., Olken, B. A., & Sumarto, S. (2018). Tangible information and citizen empowerment: Identification cards and food subsidy programs in Indonesia. Journal of Political Economy, 126(2), 451–491.",
    /* 15 */ "Alatas, V., Banerjee, A., Hanna, R., Olken, B. A., & Tobias, J. (2012). Targeting the poor: Evidence from a field experiment in Indonesia. American Economic Review, 102(4), 1206–1240.",
    /* 16 */ "Olken, B. A. (2006). Corruption and the costs of redistribution: Micro evidence from Indonesia. Journal of Public Economics, 90(4–5), 853–870.",
    /* 17 */ "Kilian, L. (2008). The economic effects of energy price shocks. Journal of Economic Literature, 46(4), 871–909.",
    /* 18 */ "Miller, R. E., & Blair, P. D. (2009). Input-output analysis: Foundations and extensions (2nd ed.). Cambridge: Cambridge University Press.",
    /* 19 */ "Atkinson, A. B. (1970). On the measurement of inequality. Journal of Economic Theory, 2(3), 244–263.",
    /* 20 */ "Feldstein, M. (1972). Distributional equity and the optimal structure of public prices. American Economic Review, 62(1), 32–36.",
    /* 21 */ "Hanna, R., & Olken, B. A. (2018). Universal basic incomes versus targeted transfers: Anti-poverty programs in developing countries. Journal of Economic Perspectives, 32(4), 201–226.",
    /* 22 */ "Gertler, P., Shelef, O., Wolfram, C. D., & Fuchs, A. (2016). The demand for energy-using assets among the world's rising middle classes. American Economic Review, 106(6), 1366–1401.",
    /* 23 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 24 */ "Cameron, A. C., Gelbach, J. B., & Miller, D. L. (2008). Bootstrap-based improvements for inference with clustered errors. Review of Economics and Statistics, 90(3), 414–427.",
    /* 25 */ "Coady, D., Flamini, V., & Sears, L. (2015). The unequal benefits of fuel subsidies revisited: Evidence for developing countries. IMF Working Paper No. 15/250. Washington, DC: International Monetary Fund.",
    /* 26 */ "Ravallion, M., & Chen, S. (2003). Measuring pro-poor growth. Economics Letters, 78(1), 93–99.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Fossil fuel subsidies remain among the largest and least efficient items of public spending in many developing and emerging economies. Global pre-tax subsidies amounted to several hundred billion dollars a year in the early 2010s [1][13], and their economic cost in terms of deadweight loss is substantial [12]. Because richer households consume far more fuel, both directly and through the goods and services they buy, most of the benefits of universal price subsidies accrue to the non-poor [2][25]. Yet reform is politically difficult: fuel price increases are highly visible, affect transport and food prices, and have triggered protests and reversals in many countries [3][11].",
        "Indonesia illustrates both the costs of fuel subsidies and the difficulty of reform. For decades the government fixed retail prices of gasoline and diesel well below international levels, and in 2014 fuel subsidies absorbed about IDR 240 trillion, more than central government capital spending. Previous attempts at reform in 2005, 2008 and 2013 raised prices but left the subsidy regime intact, so that spending surged again whenever world oil prices rose. In November 2014, the newly elected government raised the price of Premium gasoline and diesel, and on 1 January 2015 it went further, removing the subsidy on Premium entirely and replacing the open-ended diesel subsidy with a fixed subsidy of IDR 1,000 per litre. Together with the fall in world oil prices, the reform cut fiscal spending on fuel by about IDR 211 trillion relative to the original 2015 budget allocation.",
        "This paper quantifies the distributional consequences of the 2015 reform. We address three questions. How much did the reform reduce household welfare, and how much of the burden came through indirect effects on the prices of other goods rather than through direct fuel spending? How was the burden distributed across the income distribution? And how far did the compensation measures introduced at the same time — notably the Kartu Keluarga Sejahtera (Family Welfare Card, KKS) cash transfers — offset losses for the poor?",
        "We combine household consumption data from the National Socio-Economic Survey (SUSENAS) for 2013–2017 with the 2010 input-output table of Statistics Indonesia (BPS). The input-output table allows us to compute the indirect price effects of the fuel price change on 185 sectors and to translate them into household-specific cost-of-living changes based on each household's consumption basket [8][18]. We complement this accounting approach with a difference-in-differences design that exploits variation across districts in pre-reform fuel intensity: districts whose households consumed more fuel, directly and indirectly, were more exposed to the reform. The empirical design allows us to estimate how real consumption actually responded, including behavioural adjustments that the accounting approach ignores.",
        "We find that the reform reduced real household consumption by 1.9 percent on average. Indirect effects through transport and food prices account for 58 percent of the total burden, so analyses that consider only direct fuel spending would substantially understate the welfare cost. Losses as a share of consumption were roughly flat across quintiles, because the poor spend a smaller share of their budgets on gasoline but a larger share on food and public transport, whose prices rose. The concurrent KKS transfers offset 120 percent of losses for the bottom decile, making the reform package progressive at the bottom of the distribution, although many near-poor households received no compensation. The fiscal space freed by the reform financed infrastructure spending equal to 1.6 percent of GDP in 2015–2016.",
        "The paper contributes to the literature on the incidence of energy price reform [2][4][25], which relies mostly on ex ante simulations, by combining an input-output accounting framework with ex post quasi-experimental estimates. It also contributes to the evaluation of Indonesia's social protection system [14][15], showing how cash transfers can be used to compensate the poor for price reform. Section 2 describes the reform, Section 3 reviews the literature and Section 4 develops a conceptual framework. Sections 5 and 6 describe the data and empirical strategy. Section 7 presents the main results, Section 8 examines heterogeneity and compensation, Section 9 reports robustness checks, and Sections 10 and 11 discuss policy implications and conclude.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Until 2014, retail prices of subsidised fuels in Indonesia — Premium gasoline (RON 88), Solar diesel and kerosene — were set by the government and adjusted only occasionally. The state oil company Pertamina was compensated for the difference between its costs and the regulated price, so that the subsidy bill rose and fell with world oil prices and the exchange rate. Kerosene subsidies had largely been phased out through a programme of conversion to liquefied petroleum gas between 2007 and 2012, leaving gasoline and diesel as the main subsidised fuels.",
        "Table 1 summarises the main price changes. On 18 November 2014, the price of Premium was raised from IDR 6,500 to IDR 8,500 per litre and that of Solar from IDR 5,500 to IDR 7,500. On 1 January 2015, the government announced that Premium would no longer be subsidised outside the Java–Madura–Bali region, where a small distribution cost subsidy was retained, and that diesel would receive a fixed subsidy of IDR 1,000 per litre. Because world oil prices had fallen sharply, the new market-based prices were initially below the November 2014 levels: Premium was set at IDR 7,600 in January 2015 and adjusted periodically thereafter. Crucially, however, the reform removed the open-ended subsidy, so that domestic prices would follow international prices in the future.",
        "To compensate poor households, the government launched three 'smart cards' in November 2014: the KKS, which provided unconditional cash transfers of IDR 200,000 per month to about 15.5 million households identified through the Unified Database for social protection; the Kartu Indonesia Pintar for school-age children; and the Kartu Indonesia Sehat for health insurance. The KKS transfers were paid in instalments in late 2014 and during 2015, and were subsequently integrated into the Program Keluarga Harapan conditional cash transfer and the rice subsidy programme. Revised 2015 budget documents reallocated much of the fiscal savings to infrastructure, village transfers and capital injections into state-owned enterprises [7].",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Regulated fuel prices and the subsidy regime, 2013–2016",
          columns: ["Date", "Premium gasoline (IDR/litre)", "Solar diesel (IDR/litre)", "Subsidy regime"],
          rows: [
            ["June 2013", "6,500", "5,500", "Fixed retail prices, open-ended subsidy"],
            ["18 Nov 2014", "8,500", "7,500", "Fixed retail prices, open-ended subsidy"],
            ["1 Jan 2015", "7,600", "7,250", "No Premium subsidy outside Java–Madura–Bali; diesel subsidy IDR 1,000/litre"],
            ["19 Jan 2015", "6,600", "6,400", "Market-based adjustment"],
            ["28 Mar 2015", "7,300", "6,900", "Market-based adjustment"],
            ["5 Jan 2016", "7,150", "5,950", "Market-based adjustment; diesel subsidy IDR 1,000/litre"],
          ],
          note: "Note: Prices are for the Java–Madura–Bali region. Source: Ministry of Energy and Mineral Resources regulations.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "A large literature documents that universal fuel subsidies are regressive in absolute terms. Arze del Granado, Coady and Gillingham {2} review evidence from 20 developing countries and find that the richest quintile receives about six times as much in fuel subsidies as the poorest; gasoline subsidies are especially regressive. Coady, Flamini and Sears {25} update these estimates with similar conclusions. As a share of consumption, however, the incidence of fuel price changes is often roughly proportional or even progressive in low-income countries, because the poor spend a larger share of their budgets on goods whose prices depend on fuel, such as transport and food [4]. This distinction between absolute and relative incidence is central to the political economy of reform.",
        "Most incidence studies are ex ante simulations that combine household budget data with input-output tables, following the approach of Deaton {8} for food price changes. These studies assume no behavioural response in the short run, so that first-order welfare losses are proportional to budget shares [9]. For Indonesia, Yusuf and Resosudarmo {6} and Dartanto {5} use computable general equilibrium models to simulate the effects of earlier fuel price increases and find that targeted cash transfers can offset the impact on poverty. The International Institute for Sustainable Development documents the reallocation of fiscal savings after 2015 [7].",
        "A smaller literature evaluates energy price changes ex post. The macroeconomic literature on oil price shocks emphasises their effects on consumer spending and inflation [17], while household-level studies examine how energy demand responds to income and price changes [22]. Evidence on how cash transfers interact with price reform is limited, although there is extensive research on targeting and delivery of transfers in Indonesia [14][15][16] and a broader debate on universal versus targeted transfers [21]. Our paper combines the accounting and quasi-experimental approaches for a major, recent reform.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework",
      paragraphs: [
        "Following Deaton {8}, the first-order welfare effect of a small price change on household h, expressed as a share of total consumption, is −Σ_k w_hk·dlnp_k, where w_hk is the budget share of good k and dlnp_k the proportional price change. We decompose the price changes into a direct component, the change in the price of fuels consumed by the household, and an indirect component, the change in the prices of other goods and services that use fuel as an input. Indirect price changes are computed from the input-output table under the assumption that cost increases are fully passed through to prices, using the Leontief price model [18].",
        "This first-order approximation ignores substitution away from goods whose prices rise and therefore overstates welfare losses for large price changes. Second-order effects depend on own- and cross-price elasticities, which we estimate from a quadratic almost ideal demand system [10]. In practice, for the price changes associated with the 2015 reform, second-order corrections reduce estimated losses by less than 10 percent. The framework also ignores general equilibrium effects on incomes, such as changes in wages in fuel-intensive sectors, which the difference-in-differences design partly captures.",
        "The distributional consequences of reform depend on how budget shares vary with income. If the rich spend a larger share of their budgets on gasoline but the poor spend more on food and public transport, the direct effect will be progressive and the indirect effect regressive. Whether a reform is progressive overall, and whether compensation can offset losses for the poor, are therefore empirical questions [19][20]. Fiscal savings add a further dimension: if they finance public goods or transfers that benefit the poor, the reform package may be progressive even when the price change itself is not.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We combine household survey data with the national input-output table and district-level administrative data.",
      ],
      subsections: [
        {
          id: "data-susenas",
          heading: "5.1 SUSENAS Consumption Modules",
          paragraphs: [
            "SUSENAS is a nationally representative household survey conducted by BPS. Its consumption module records household expenditure on more than 200 food and non-food items, including gasoline, diesel, kerosene, liquefied petroleum gas, electricity and transport services. We use the March rounds from 2013 to 2017, which include about 290,000 households per year and are representative at the district level. Our main outcome is real per capita household consumption, deflated by provincial consumer price indices with base year 2012. We exclude households in Papua and West Papua, where fuel prices are subject to separate equalisation policies, leaving 497 districts.",
            "Table 2 reports budget shares by consumption quintile in 2014, before the January 2015 reform. The share of consumption spent directly on gasoline rises from 2.1 percent in the bottom quintile to 4.4 percent in the top quintile, reflecting motorcycle and car ownership. In contrast, the shares spent on food and on public transport fall with income. Combining direct and indirect fuel content, the total fuel intensity of household consumption is similar across quintiles, at between 8.3 and 9.1 percent of the budget.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Budget shares and fuel intensity by consumption quintile, 2014 (percent of household consumption)",
              columns: ["Quintile", "Gasoline and diesel", "Public transport", "Food", "Other goods and services", "Total fuel intensity", "KKS recipients (%)"],
              rows: [
                ["1 (poorest)", "2.1", "2.4", "62.8", "32.7", "8.3", "61.4"],
                ["2", "2.7", "2.2", "58.9", "36.2", "8.6", "42.0"],
                ["3", "3.3", "2.0", "54.6", "40.1", "8.8", "27.3"],
                ["4", "3.8", "1.7", "49.3", "45.2", "9.1", "14.5"],
                ["5 (richest)", "4.4", "1.3", "39.5", "54.8", "8.9", "4.8"],
                ["All", "3.3", "1.9", "53.0", "41.8", "8.7", "30.0"],
              ],
              note: "Note: Total fuel intensity is the share of household consumption accounted for by fuel used directly and embodied in other goods and services, computed using the 2010 input-output table. KKS recipients are measured in the 2015 survey. Source: SUSENAS March 2014 and 2015.",
            },
          ],
        },
        {
          id: "data-io",
          heading: "5.2 Input-Output Table and District Exposure",
          paragraphs: [
            "The 2010 input-output table of BPS distinguishes 185 sectors, including petroleum refining. We compute the price effects of a change in fuel prices using the Leontief price model, treating the refined petroleum sector as exogenous. Table 3 reports the resulting price effects for selected sectors, scaled to the average increase in the effective price of subsidised fuels between 2014 and 2015 implied by the reform. Land transport prices rise by 6.8 percent, fishing by 4.1 percent and rice milling and other food processing by 1.2–2.0 percent, while most services are much less affected.",
            "For each district, we construct a measure of exposure to the reform equal to the average fuel intensity of household consumption in 2013–2014, combining direct fuel budget shares with the indirect fuel content of other goods consumed. Exposure varies substantially across districts, from 6.2 percent in urban districts of Java to 12.4 percent in remote districts of Kalimantan and Sulawesi, where transport costs are high and households rely heavily on motorcycles. We also use district-level data on infrastructure spending and KKS coverage from the Ministry of Finance and the Ministry of Social Affairs.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Simulated price effects of the reform on selected sectors (percent)",
              columns: ["Sector", "Fuel cost share", "Price effect", "Share of household budget"],
              rows: [
                ["Land transport", "0.214", "6.8", "1.9"],
                ["Water transport", "0.186", "5.9", "0.3"],
                ["Fishing", "0.129", "4.1", "2.6"],
                ["Rice milling", "0.038", "1.2", "11.8"],
                ["Other food processing", "0.063", "2.0", "14.2"],
                ["Trade and restaurants", "0.041", "1.3", "9.6"],
                ["Electricity and gas", "0.072", "2.3", "3.4"],
                ["Other services", "0.021", "0.7", "17.5"],
              ],
              note: "Note: Price effects are computed from the 2010 input-output table using the Leontief price model, assuming full pass-through of a 31.8 percent increase in the effective price of subsidised fuels. Fuel cost share includes direct and indirect fuel inputs per unit of output.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "We use two complementary approaches. The accounting approach applies the framework of Section 4 to each household in the 2014 SUSENAS, using observed budget shares and the price changes implied by the reform. The difference-in-differences approach estimates the actual change in real consumption associated with exposure to the reform, using variation across districts.",
      ],
      subsections: [
        {
          id: "strategy-did",
          heading: "6.1 Difference-in-Differences Specification",
          paragraphs: [
            "Our main specification is lnC_hdt = β·(Exposure_d × Post_t) + X_hdt'γ + α_d + δ_pt + ε_hdt, where C_hdt is real per capita consumption of household h in district d in year t, Exposure_d is the pre-reform fuel intensity of the district standardised to have mean zero and unit standard deviation, Post_t indicates the years 2015–2017, X_hdt includes household size, demographic composition and the education of the household head, α_d are district fixed effects and δ_pt are province-by-year fixed effects. Province-by-year fixed effects absorb shocks common to districts in the same province, including the provincial price indices used to deflate consumption. Standard errors are clustered at the district level [23].",
            "The coefficient β measures how much more real consumption fell in districts with higher exposure. To translate it into an average effect of the reform, we multiply β by the difference in exposure between the average district and a hypothetical district with zero fuel intensity, following the logic of continuous-treatment designs. We also estimate event-study specifications that interact exposure with year indicators, using 2014 as the reference year.",
          ],
        },
        {
          id: "strategy-identification",
          heading: "6.2 Identifying Assumptions",
          paragraphs: [
            "The key identifying assumption is that, absent the reform, consumption in more and less exposed districts would have followed parallel trends. This assumption could be violated if fuel-intensive districts were affected differently by other shocks, such as the decline in commodity prices in 2014–2015, which hit coal- and palm-oil-producing districts of Kalimantan and Sumatra. We address this concern by controlling for district-level exposure to commodity prices interacted with year, and by showing that results are similar when we exclude commodity-producing districts. Event-study estimates also allow us to test for differential pre-trends.",
            "A second concern is that compensation measures and infrastructure spending were not distributed uniformly across districts. Because KKS coverage was higher in poorer districts, which also tended to have lower fuel intensity, the reduced-form estimate of β combines the effect of the price change with that of compensation. We therefore estimate specifications that control for district KKS coverage interacted with year, and we analyse the effects of compensation directly at the household level in Section 8.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We first report the accounting estimates of welfare losses, then the difference-in-differences estimates, and finally the decomposition of losses by quintile.",
      ],
      subsections: [
        {
          id: "results-accounting",
          heading: "7.1 Direct and Indirect Effects",
          paragraphs: [
            "Applying the reform-induced price changes to 2014 budget shares, the first-order welfare loss averages 2.1 percent of household consumption, and 1.9 percent after accounting for substitution using estimated demand elasticities. Of the total loss, the direct effect through gasoline and diesel spending accounts for 0.8 percentage points, or 42 percent, and indirect effects through the prices of other goods and services account for 1.1 percentage points, or 58 percent. Within the indirect effect, transport services contribute 0.5 percentage points, food 0.4 points and other goods and services 0.2 points.",
            "The importance of indirect effects underlines the limitations of analyses that focus only on direct fuel spending. Because the poor rarely own cars and spend relatively little on gasoline, a direct-effects analysis would suggest that the reform imposed only small losses on them. The indirect effects, transmitted through public transport fares, the cost of moving food from producing to consuming regions and the fuel used by fishing boats, are what make the reform costly for poor households.",
          ],
        },
        {
          id: "results-did",
          heading: "7.2 Difference-in-Differences Estimates",
          paragraphs: [
            "Table 4 reports the difference-in-differences estimates. A one-standard-deviation increase in district exposure is associated with a 0.47 percent larger decline in real per capita consumption after the reform. Translated into an average effect using the distribution of exposure, the estimate implies that the reform reduced real consumption by 1.9 percent on average, closely matching the accounting estimate. The estimate is robust to controlling for commodity price exposure and for KKS coverage, and is somewhat larger when we restrict the sample to households that did not receive KKS transfers.",
            "Figure 1 reports event-study estimates. The coefficient for 2013 is small and statistically insignificant, supporting the parallel trends assumption. The effect of exposure appears in 2015, the first year after the reform, and persists in 2016 and 2017, although it declines slightly as households adjusted their consumption and as world oil prices remained low. The persistence suggests that the reform had lasting effects on relative prices rather than transitory effects that were quickly reversed.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Effect of exposure to the reform on log real per capita consumption",
              columns: ["", "(1) Baseline", "(2) Commodity controls", "(3) KKS coverage control", "(4) Non-recipients"],
              rows: [
                ["Exposure × Post", "−0.0047***", "−0.0045***", "−0.0051***", "−0.0058***"],
                ["", "(0.0012)", "(0.0012)", "(0.0013)", "(0.0014)"],
                ["Implied average effect (%)", "−1.9", "−1.8", "−2.1", "−2.3"],
                ["District fixed effects", "Yes", "Yes", "Yes", "Yes"],
                ["Province × year fixed effects", "Yes", "Yes", "Yes", "Yes"],
                ["Households", "1,412,860", "1,412,860", "1,412,860", "1,031,290"],
                ["Districts", "497", "497", "497", "497"],
              ],
              note: "Note: Exposure is the standardised pre-reform fuel intensity of household consumption in the district. The implied average effect multiplies the coefficient by the mean exposure in standard-deviation units relative to zero fuel intensity. Standard errors clustered by district in parentheses. *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Event-study estimates: effect of district exposure on log real consumption",
              kind: "line",
              xLabels: ["2013", "2014", "2015", "2016", "2017"],
              yLabel: "Coefficient (per s.d. of exposure, %)",
              series: [
                {
                  name: "Estimate",
                  values: [0.04, 0, -0.52, -0.48, -0.41],
                  lower: [-0.18, 0, -0.77, -0.75, -0.69],
                  upper: [0.26, 0, -0.27, -0.21, -0.13],
                },
              ],
              marker: 1,
              note: "Note: Coefficients on exposure interacted with year indicators, with 2014 as the reference year, and 95 percent confidence intervals based on district-clustered standard errors. The dashed line marks the January 2015 reform.",
            },
          ],
        },
        {
          id: "results-distribution",
          heading: "7.3 Distribution of Losses",
          paragraphs: [
            "Table 5 decomposes welfare losses by consumption quintile. Losses as a share of consumption were roughly flat across the distribution, ranging from 1.8 percent in the bottom quintile to 2.0 percent in the fourth quintile. This flat profile masks offsetting patterns: the direct effect is progressive, rising from 0.5 percent of consumption in the bottom quintile to 1.1 percent in the top quintile, while the indirect effect is regressive, falling from 1.3 percent to 0.8 percent. In absolute terms, losses of the richest quintile were about four times those of the poorest, confirming that the subsidies had disproportionately benefited the rich [2][25].",
            "The flat relative incidence implies that, in the absence of compensation, the reform would have raised poverty. Holding nominal consumption constant, a 1.8 percent decline in real consumption for the bottom quintile would have increased the national poverty headcount by roughly 0.9 percentage points. Whether the reform raised poverty in practice therefore depended on the compensation measures, to which we now turn.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Welfare effects of the reform and compensation by consumption quintile (percent of household consumption)",
              columns: ["Quintile", "Direct effect", "Indirect effect", "Total loss", "KKS transfer", "Net effect", "Indirect share of loss (%)"],
              rows: [
                ["1 (poorest)", "−0.5", "−1.3", "−1.8", "1.6", "−0.2", "72"],
                ["2", "−0.7", "−1.2", "−1.9", "0.8", "−1.1", "63"],
                ["3", "−0.8", "−1.1", "−1.9", "0.4", "−1.5", "58"],
                ["4", "−1.0", "−1.0", "−2.0", "0.2", "−1.8", "50"],
                ["5 (richest)", "−1.1", "−0.8", "−1.9", "0.0", "−1.9", "42"],
                ["All", "−0.8", "−1.1", "−1.9", "0.5", "−1.4", "58"],
              ],
              note: "Note: Welfare effects are second-order approximations based on 2014 budget shares and the price changes implied by the reform. KKS transfers are average annualised transfers as a share of consumption for all households in each quintile, including non-recipients. Components may not sum because of rounding.",
            },
          ],
        },
      ],
    },
    {
      id: "compensation",
      heading: "8. Compensation and Heterogeneity",
      paragraphs: [
        "The KKS transfers were well targeted on average: 61 percent of households in the bottom quintile received them, compared with 5 percent in the top quintile (Table 2). Averaged across all households in each quintile, including non-recipients, transfers were equivalent to 1.6 percent of consumption in the bottom quintile, offsetting almost 90 percent of losses. For the bottom decile, where coverage reached 72 percent, transfers equalled 2.2 percent of consumption, against losses of 1.8 percent, so that the transfers offset 120 percent of losses and the reform package raised real consumption of the poorest households on average.",
        "Figure 2 shows losses and transfers by decile. Compensation fell sharply above the second decile, and many near-poor households received no transfers, either because they were above the eligibility threshold or because of exclusion errors in the Unified Database, which had been compiled in 2011. Among households in the third and fourth deciles that did not receive KKS, net losses averaged 1.9 percent of consumption. Exclusion errors are a known weakness of proxy-means-tested programmes in Indonesia [15], and our results suggest that they limited the effectiveness of compensation for the near-poor.",
        "We find substantial heterogeneity by location. Households in rural areas outside Java experienced losses about 30 percent larger than those in urban Java, because they rely more on motorcycles and because the cost of transporting goods is higher. Fishing households experienced the largest losses, averaging 3.6 percent of consumption, reflecting the high fuel intensity of fishing. Households that owned motorcycles but not cars faced larger direct losses than those without motor vehicles, but the indirect effect was similar across vehicle ownership groups. These patterns suggest that compensation targeted solely on income misses important dimensions of vulnerability to fuel price changes.",
        "The household-level evidence on realised consumption confirms the role of compensation. Using the difference-in-differences design at the household level and interacting exposure with KKS receipt, we find that the decline in real consumption associated with exposure was about 70 percent smaller for recipients than for observationally similar non-recipients in the bottom two quintiles. This estimate should be interpreted with caution, because receipt was not randomly assigned, but it is consistent with the accounting results.",
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Welfare losses and KKS transfers by consumption decile (percent of consumption)",
          kind: "bar",
          xLabels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          yLabel: "Percent of consumption",
          series: [
            { name: "Welfare loss", values: [1.8, 1.8, 1.9, 1.9, 1.9, 1.9, 2.0, 2.0, 1.9, 1.9] },
            { name: "KKS transfer", values: [2.2, 1.0, 0.9, 0.7, 0.5, 0.3, 0.2, 0.2, 0.1, 0.0] },
          ],
          note: "Note: Average welfare losses from the reform and average annualised KKS transfers as a share of household consumption, including non-recipients, by 2014 consumption decile.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks for the difference-in-differences estimate. Using only the direct fuel budget share to measure exposure yields a smaller coefficient, consistent with the importance of indirect effects. Excluding districts in the top decile of commodity price exposure, excluding the provinces of Jakarta and Bali, which have unusual consumption patterns, and weighting districts by population all produce estimates close to the baseline. Using the 2005 rather than the 2010 input-output table to compute indirect fuel content also yields similar results.",
        "Because the number of districts is large, conventional clustered standard errors should be reliable, but wild cluster bootstrap p-values [24] with clustering at the province level, which allows for correlation across districts within a province, are also below 0.01. A placebo test that assigns the reform to January 2014 and uses only pre-reform data yields a small and insignificant coefficient. Finally, using household-level panel data from the subset of SUSENAS households re-interviewed in the panel component of the survey yields an estimate of −0.0044, close to the baseline.",
        "A further concern is that the decline in world oil prices in late 2014 and 2015 meant that the reform did not raise fuel prices as much as it would have under higher oil prices. Our accounting estimates use the actual change in effective fuel prices between 2014 and 2015, which reflects both the reform and world prices; the counterfactual under the old regime is that prices would have remained at their November 2014 level. Under this alternative counterfactual, the welfare effect of the reform itself would be smaller, but the fiscal savings would also be smaller. Our main estimates should therefore be interpreted as the effect of moving from the 2014 regime to the 2015 regime under the prevailing world prices.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness checks for the difference-in-differences estimate",
          columns: ["Specification", "Exposure × Post", "Std. error", "Implied average effect (%)"],
          rows: [
            ["Baseline (Table 4, column 1)", "−0.0047***", "(0.0012)", "−1.9"],
            ["Direct fuel budget share only", "−0.0029**", "(0.0012)", "−0.9"],
            ["Excluding high commodity-exposure districts", "−0.0049***", "(0.0013)", "−2.0"],
            ["Excluding Jakarta and Bali", "−0.0046***", "(0.0012)", "−1.9"],
            ["Population-weighted", "−0.0044***", "(0.0013)", "−1.8"],
            ["2005 input-output table", "−0.0045***", "(0.0012)", "−1.8"],
            ["SUSENAS panel households", "−0.0044***", "(0.0016)", "−1.8"],
            ["Placebo: reform in January 2014", "0.0006", "(0.0011)", "0.2"],
          ],
          note: "Note: Each row reports the coefficient from a separate regression with district and province-by-year fixed effects. Standard errors clustered by district in parentheses. ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "The fiscal consequences of the reform were large. Spending on fuel subsidies fell from the IDR 276 trillion allocated in the original 2015 budget to about IDR 65 trillion in the revised budget, a saving of about IDR 211 trillion. Much of this was reallocated: central government capital spending, mainly on roads, ports, dams and irrigation, rose sharply, and together with capital injections into state-owned infrastructure enterprises and increased transfers to villages, infrastructure spending financed by reallocated fiscal space amounted to 1.6 percent of GDP in 2015–2016 [7]. If even a modest share of this spending benefits poor households, through lower transport costs and better access to markets, the reform package as a whole was likely progressive.",
        "The Indonesian experience offers several lessons. First, timing matters: implementing the reform when world oil prices were falling limited the immediate increase in retail prices, reducing the political cost of reform. Second, compensation was essential to the reform's acceptability and its effects on the poor; the KKS transfers more than offset losses for the bottom decile, consistent with simulations of earlier reforms [5][6]. Third, the targeting of compensation could be improved: many near-poor households received no transfers, and vulnerability to fuel price changes depends on location and occupation as well as income. Fourth, the large indirect effects suggest that communication about reform should emphasise the effects on transport and food prices, which households experience directly, and explain how compensation addresses them.",
        "Our results also speak to the broader debate on universal versus targeted transfers [21]. Universal fuel subsidies are a poorly targeted form of transfer, delivering most of their benefits to the rich [2]. Replacing them with targeted cash transfers and public investment can make public spending more progressive and more productive, provided that targeting systems reach those who need compensation. The experience of 2015 suggests that Indonesia's investment in targeting infrastructure made this replacement feasible, even if imperfectly [14][15].",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We have quantified the distributional consequences of Indonesia's 2015 fuel subsidy reform. Combining household consumption data with the national input-output table and a difference-in-differences design, we find that the reform reduced real consumption by 1.9 percent on average, with indirect effects accounting for 58 percent of the burden. Losses were roughly proportional to consumption across the distribution, but the concurrent KKS transfers offset 120 percent of losses for the poorest decile, and the freed fiscal space financed infrastructure spending equal to 1.6 percent of GDP.",
        "These findings suggest that fuel subsidy reform need not harm the poor if it is accompanied by well-targeted compensation, and that the case for reform rests not only on fiscal savings but on the uses to which those savings are put. Future research could evaluate the long-run effects of the infrastructure investments financed by the reform on growth and poverty reduction [26], and examine how households adjusted their vehicle ownership and travel patterns in response to market-based fuel prices.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Construction of Price Effects and Welfare Measures",
      paragraphs: [
        "Leontief price model. Let A be the matrix of technical coefficients from the 2010 input-output table, partitioned into the refined petroleum sector (treated as exogenous) and the remaining 184 sectors. The vector of proportional price changes in the endogenous sectors is Δp = (I − A_nn')^(−1)·A_fn'·Δp_f, where A_fn is the row of fuel input coefficients and Δp_f the proportional change in the effective price of subsidised fuel. We assume full pass-through and constant technical coefficients, which is appropriate for the short run.",
        "Effective fuel price change. The effective price change of subsidised fuels is the volume-weighted average change in the retail prices of Premium and Solar between the 2014 average and the 2015 average, accounting for the November 2014 increase and the market-based adjustments during 2015. It equals 31.8 percent. Non-subsidised fuels, whose prices were already market-based, are assumed to have unchanged prices.",
        "Mapping to household consumption. We map the more than 200 SUSENAS consumption items to the 185 input-output sectors using a concordance developed by BPS, supplemented by our own mapping for items not covered. Items purchased at market stalls are mapped to the producing sector plus trade margins, which are themselves affected by fuel prices through transport costs.",
        "Second-order effects. Own- and cross-price elasticities for eight commodity groups are estimated from a quadratic almost ideal demand system using SUSENAS data for 2010–2014 and provincial price variation. The second-order welfare effect adds 0.5·Σ_k Σ_j w_hk·ε_kj·dlnp_k·dlnp_j to the first-order approximation.",
      ],
    },
  ],
};
