// Vol. 28, No. 4 (October 2023) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2023-v28-i4-02",
  acknowledgments:
    "We thank participants at the Hanyang University macroeconomics seminar, the Mannheim environmental economics workshop and the annual meeting of the Korean Resource Economics Association, two anonymous referees and the handling Associate Editor for helpful comments. Staff of the Greenhouse Gas Inventory and Research Center of Korea answered questions on the sectoral emissions inventory. All errors are our own.",
  dataAvailability:
    "Input–output tables are published by the Bank of Korea; the national greenhouse gas inventory by the Greenhouse Gas Inventory and Research Center of Korea; energy balances by the Korea Energy Economics Institute; and household expenditure microdata from the Household Income and Expenditure Survey are available from Statistics Korea through its Microdata Integrated Service. Model code, calibration files and scenario output are available from the corresponding author.",
  editorialNote:
    "Hyun-Jin Kim and Markus Bauer develop a general-equilibrium model with energy inputs and find that a carbon tax of USD 30 per ton, phased in over 2025–2030, would cut Korean emissions by 18 percent by 2035 at a cumulative output cost of 0.6 percent of GDP; recycling the revenue through lower labour taxes reduces that cost by about 40 percent and offsets most of the burden on low-income households.",
  refs: [
    /* 1 */ "Nordhaus, W. D. (2017). Revisiting the social cost of carbon. Proceedings of the National Academy of Sciences, 114(7), 1518–1523.",
    /* 2 */ "Golosov, M., Hassler, J., Krusell, P., & Tsyvinski, A. (2014). Optimal taxes on fossil fuel in general equilibrium. Econometrica, 82(1), 41–88.",
    /* 3 */ "Goulder, L. H. (1995). Environmental taxation and the double dividend: A reader's guide. International Tax and Public Finance, 2(2), 157–183.",
    /* 4 */ "Bovenberg, A. L., & de Mooij, R. A. (1994). Environmental levies and distortionary taxation. American Economic Review, 84(4), 1085–1089.",
    /* 5 */ "Parry, I. W. H. (1995). Pollution taxes and revenue recycling. Journal of Environmental Economics and Management, 29(3), S64–S77.",
    /* 6 */ "Goulder, L. H., & Hafstead, M. A. C. (2018). Confronting the climate challenge: U.S. policy options. Columbia University Press.",
    /* 7 */ "Metcalf, G. E., & Stock, J. H. (2020). Measuring the macroeconomic impact of carbon taxes. AEA Papers and Proceedings, 110, 101–106.",
    /* 8 */ "Fischer, C., & Springborn, M. (2011). Emissions targets and the real business cycle: Intensity targets versus caps or taxes. Journal of Environmental Economics and Management, 62(3), 352–366.",
    /* 9 */ "Heutel, G. (2012). How should environmental policy respond to business cycles? Optimal policy under persistent productivity shocks. Review of Economic Dynamics, 15(2), 244–264.",
    /* 10 */ "Annicchiarico, B., & Di Dio, F. (2015). Environmental policy and macroeconomic dynamics in a new Keynesian model. Journal of Environmental Economics and Management, 69, 1–21.",
    /* 11 */ "Poterba, J. M. (1991). Is the gasoline tax regressive? Tax Policy and the Economy, 5, 145–164.",
    /* 12 */ "Fullerton, D. (2011). Six distributional effects of environmental policy. Risk Analysis, 31(6), 923–929.",
    /* 13 */ "Goulder, L. H., Hafstead, M. A. C., Kim, G., & Long, X. (2019). Impacts of a carbon tax across US household income groups: What are the equity-efficiency trade-offs? Journal of Public Economics, 175, 44–64.",
    /* 14 */ "Williams, R. C., Gordon, H., Burtraw, D., Carbone, J. C., & Morgenstern, R. D. (2015). The initial incidence of a carbon tax across income groups. National Tax Journal, 68(1), 195–213.",
    /* 15 */ "Rausch, S., Metcalf, G. E., & Reilly, J. M. (2011). Distributional impacts of carbon pricing: A general equilibrium approach with micro-data for households. Energy Economics, 33(S1), S20–S33.",
    /* 16 */ "Cronin, J. A., Fullerton, D., & Sexton, S. (2019). Vertical and horizontal redistributions from a carbon tax and rebate. Journal of the Association of Environmental and Resource Economists, 6(S1), S169–S208.",
    /* 17 */ "Hassler, J., Krusell, P., & Olovsson, C. (2021). Directed technical change as a response to natural resource scarcity. Journal of Political Economy, 129(11), 3039–3072.",
    /* 18 */ "van der Werf, E. (2008). Production functions for climate policy modeling: An empirical analysis. Energy Economics, 30(6), 2964–2979.",
    /* 19 */ "Narassimhan, E., Gallagher, K. S., Koester, S., & Alejo, J. R. (2018). Carbon pricing in practice: A review of existing emissions trading systems. Climate Policy, 18(8), 967–991.",
    /* 20 */ "Stern, N. (2008). The economics of climate change. American Economic Review, 98(2), 1–37.",
    /* 21 */ "Weitzman, M. L. (1974). Prices vs. quantities. Review of Economic Studies, 41(4), 477–491.",
    /* 22 */ "Smets, F., & Wouters, R. (2007). Shocks and frictions in US business cycles: A Bayesian DSGE approach. American Economic Review, 97(3), 586–606.",
    /* 23 */ "Galí, J., López-Salido, J. D., & Vallés, J. (2007). Understanding the effects of government spending on consumption. Journal of the European Economic Association, 5(1), 227–270.",
    /* 24 */ "Chetty, R., Guren, A., Manoli, D., & Weber, A. (2011). Are micro and macro labor supply elasticities consistent? A review of evidence on the intensive and extensive margins. American Economic Review, 101(3), 471–475.",
    /* 25 */ "Böhringer, C., Balistreri, E. J., & Rutherford, T. F. (2012). The role of border carbon adjustment in unilateral climate policy: Overview of an Energy Modeling Forum study (EMF 29). Energy Economics, 34(S2), S97–S110.",
    /* 26 */ "Burke, M., Hsiang, S. M., & Miguel, E. (2015). Global non-linear effect of temperature on economic production. Nature, 527(7577), 235–239.",
    /* 27 */ { jer: "2021-v26-i4-03" },
    /* 28 */ { jer: "2022-v27-i4-03" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Korea is among the most carbon-intensive of the advanced economies. Its greenhouse gas emissions, at about 680 million tons of CO2-equivalent in 2021, are roughly 13 tons per person, and its economy relies heavily on energy-intensive manufacturing — steel, petrochemicals, cement, semiconductors and shipbuilding — and on coal- and gas-fired electricity. In 2021 the government committed to reducing emissions by 40 percent from their 2018 level by 2030 and to reaching carbon neutrality by 2050. Meeting these targets will require a substantial increase in the effective price of carbon, which is currently low: the Korea Emissions Trading Scheme (K-ETS) covers about 70 percent of emissions, but most allowances have been allocated free of charge and prices have rarely exceeded KRW 30,000 per ton [19].",
        "Economists have long argued that a broad carbon price is the most cost-effective way to reduce emissions [1][20][21]. The macroeconomic costs of carbon pricing, and how they are distributed, nonetheless remain a central concern of policymakers, particularly in an export-oriented economy whose industrial structure was shaped by decades of support for heavy industry [28]. Two questions dominate the policy debate. First, how much output must be sacrificed to achieve a given emissions reduction? Second, who bears the cost, and can the revenue raised be used to reduce both the aggregate cost and the burden on vulnerable households?",
        "This paper addresses both questions using a dynamic general-equilibrium model calibrated to the Korean economy. The model treats energy as a production input that can be substituted, imperfectly, for capital and labour, distinguishes between fossil fuels and electricity generated from different sources, and includes households that differ in their access to financial markets. A carbon price raises the cost of fossil energy, induces substitution towards cleaner energy and away from energy altogether, and generates revenue that the government can return to the economy in different ways. We combine the model with household expenditure microdata to trace the incidence of carbon pricing across the income distribution.",
        "Our main scenario is a carbon tax that rises gradually from USD 6 per ton of CO2-equivalent in 2025 to USD 30 in 2030 and remains at that level thereafter, applied uniformly to all fossil-fuel emissions. We find that this tax reduces emissions by 18 percent by 2035 relative to a no-policy baseline. If the revenue is returned to households as an equal per-capita dividend, the cumulative output cost over 2025–2035 is 0.6 percent of GDP. If instead the revenue is used to cut taxes on labour income, the output cost falls by approximately 40 percent, to 0.36 percent of GDP, because lower labour taxes reduce a pre-existing distortion and raise employment. Emissions reductions are almost unchanged.",
        "The distributional effects are modest. Low-income households spend a larger share of their budgets on energy and therefore face proportionally larger direct cost increases: in the lowest income quintile, the direct cost of the tax in 2030 amounts to 1.42 percent of household expenditure, compared with 0.66 percent in the highest. Once indirect costs through the prices of other goods are included, the burden is mildly regressive. Under labour-tax recycling, combined with the existing indexation of public transfers to consumer prices, about three-quarters of the burden on the lowest quintile is offset; an equal per-capita dividend more than offsets it, at the cost of a higher aggregate output loss.",
        "We contribute to three strands of the literature. First, we add to work on the macroeconomic effects of carbon pricing [2][6][7] by providing estimates for an energy-intensive, export-oriented Asian economy. Second, we contribute to the literature on revenue recycling and the double dividend [3][4][5] by quantifying the efficiency gains from alternative uses of carbon revenue in a dynamic setting. Third, we contribute to the literature on the incidence of carbon taxes [13][14][15][16] by linking a macroeconomic model to household microdata for Korea. Section 2 describes the institutional background, Section 3 reviews related work, Sections 4 to 6 present the model, calibration and scenarios, Sections 7 to 9 present the results, distributional effects and sensitivity analysis, and Section 10 discusses policy implications.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korea's emissions grew rapidly during its industrialisation and peaked at about 727 million tons in 2018. Energy-related emissions account for about 87 percent of the total, and industrial processes for most of the remainder. Table 1 summarises the sectoral structure. Electricity and heat generation account for 37 percent of emissions, manufacturing for 34 percent and transport for 14 percent. Coal still generated around a third of electricity in 2021, gas about 30 percent and nuclear about 27 percent, with renewables contributing less than 8 percent. Energy costs represent more than 10 percent of gross output in primary metals, non-metallic minerals and petrochemicals, sectors that are also highly exposed to international trade.",
        "Carbon pricing in Korea takes the form of the K-ETS, launched in 2015 as the first national emissions trading scheme in East Asia. It covers about 680 large companies in power, industry, buildings, waste and domestic aviation. In its first two phases, nearly all allowances were allocated free of charge, and in the third phase, from 2021, the auctioned share was raised to 10 percent for sectors not deemed at risk of carbon leakage. Allowance prices fluctuated between KRW 15,000 and KRW 40,000 per ton during 2019–2021 before falling below KRW 15,000 in 2022 [19]. Because electricity tariffs are set by the government and the state-owned Korea Electric Power Corporation (KEPCO), carbon costs incurred by generators have been only partly passed on to consumers, which has weakened the scheme's effect on electricity demand. Existing energy taxes are levied mainly on transport fuels; there is no explicit carbon tax.",
        "These features shape our analysis. We model the carbon price as a uniform economy-wide price on fossil-fuel emissions, which could be implemented through a combination of a carbon tax on sectors outside the K-ETS and a price floor with full auctioning within it. We treat the pass-through of carbon costs to electricity prices as a key parameter and examine the consequences of continued tariff regulation in the sensitivity analysis.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Emissions and energy structure of the Korean economy, 2019",
          columns: ["Sector", "Share of emissions (%)", "Share of value added (%)", "Energy cost share of output (%)", "Export share of output (%)", "K-ETS coverage"],
          rows: [
            ["Electricity and heat", "37.2", "1.8", "48.6", "0.0", "Yes"],
            ["Primary metals", "13.9", "2.1", "14.2", "31.5", "Yes"],
            ["Petrochemicals and refining", "9.6", "3.4", "12.8", "42.7", "Yes"],
            ["Non-metallic minerals", "5.8", "0.7", "11.3", "9.4", "Yes"],
            ["Other manufacturing", "4.7", "20.9", "2.4", "46.2", "Partly"],
            ["Transport", "14.2", "3.6", "18.7", "22.3", "Partly"],
            ["Buildings and services", "8.1", "61.5", "2.1", "6.8", "Partly"],
            ["Agriculture and other", "6.5", "6.0", "6.4", "3.1", "No"],
          ],
          note: "Note: Emissions shares from the national greenhouse gas inventory, including industrial process emissions, allocated to the emitting sector. Value added, energy cost and export shares from the 2019 input–output tables of the Bank of Korea. Energy cost share is the value of purchased fossil fuels and electricity as a share of gross output.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "A large literature studies optimal carbon taxation in dynamic general-equilibrium models. {2} derive a simple formula for the optimal carbon tax in a model with climate damages and show that it is proportional to output, while {1} updates estimates of the social cost of carbon using an integrated assessment model. Business-cycle models with emissions show how the macroeconomic effects of carbon taxes and caps differ under productivity and demand shocks [8][9][10]. These models are typically calibrated to the United States or the global economy, and they abstract from the sectoral detail and distributional heterogeneity that matter for national policy design. Climate damages themselves, which we do not model, may be large for warm and middle-income economies [26].",
        "The second strand concerns the double dividend. {4} show that, in the presence of distortionary labour taxes, an environmental tax can exacerbate the distortion because it reduces real wages, so that the gross cost of the policy may exceed its partial-equilibrium cost even if revenue is recycled. {5} quantifies this tax-interaction effect, and {3} distinguishes between a weak double dividend, in which recycling revenue through distortionary tax cuts reduces costs relative to lump-sum recycling, and a strong double dividend, in which the policy has zero or negative gross cost. The weak form is widely supported; the strong form typically is not. {6} provide a comprehensive analysis for the United States, finding that recycling through capital tax cuts minimises output costs but is regressive, while lump-sum rebates are progressive but costlier.",
        "Empirical evidence on the macroeconomic effects of carbon taxes is limited but growing. {7} find no evidence that carbon taxes in European countries reduced employment or GDP growth, and our earlier work showed how quickly the large environmental gains from pandemic lockdowns reversed once activity resumed [27], highlighting the need for price-based rather than activity-based emissions reductions. On incidence, energy taxes appear regressive when measured against annual income but less so against lifetime income or consumption [11][12]. {14} and {13} show that the progressivity of a carbon tax depends largely on how revenue is used, {15} show that the sources-side incidence through factor prices can offset the uses-side regressivity, and {16} highlight the large horizontal variation in burdens within income groups.",
        "Studies for Korea have mostly used static computable general-equilibrium models to evaluate the K-ETS or energy taxes. Our contribution is a dynamic model in which capital accumulation and labour supply respond to carbon pricing and to the recycling of revenue, together with an analysis of incidence that combines model-generated price and wage changes with household microdata.",
      ],
    },
    {
      id: "model",
      heading: "4. The Model",
      paragraphs: [
        "The model is a dynamic general-equilibrium model of a small open economy with energy as a production input, two types of households, a government that levies distortionary taxes and a carbon price. Time is annual. We describe its main elements here and provide the full set of equilibrium conditions in Appendix A.",
      ],
      subsections: [
        {
          id: "households",
          heading: "4.1 Households",
          paragraphs: [
            "A share 1 − λ of households are Ricardian: they own the capital stock, trade bonds and choose consumption and labour supply to maximise lifetime utility. The remaining share λ are hand-to-mouth households who consume their after-tax labour income and transfers in each period, following {23}. Both types have preferences over a consumption composite and hours worked, with a Frisch elasticity of labour supply η. The consumption composite combines non-energy goods and household energy — electricity, heating fuels and transport fuels — with a low elasticity of substitution, so that household energy demand responds only modestly to prices in the short run. Hand-to-mouth households receive public transfers that are indexed to the consumer price index, mirroring the indexation of Korea's basic pension and livelihood allowances.",
          ],
        },
        {
          id: "production",
          heading: "4.2 Production and energy",
          paragraphs: [
            "Firms in eight sectors, corresponding to those in Table 1, produce gross output using capital, labour, energy and intermediate inputs. Within each sector, capital and energy are combined in a constant-elasticity-of-substitution aggregate with elasticity σ_KE, which is then combined with labour with elasticity σ_KL,E. This nesting follows the empirical evidence of {18}, which supports a capital–energy nest with low substitution elasticities, and is consistent with the short-run complementarity between energy and other inputs emphasised by {17}. Energy is itself a composite of electricity and direct fossil fuels (coal, oil products and gas).",
            "The electricity sector combines generation from coal, gas, nuclear and renewables with a relatively high elasticity of substitution, so that a carbon price shifts the generation mix towards low-carbon sources over time. Investment in new generation capacity is subject to adjustment costs and, for nuclear power, a capacity ceiling that reflects existing policy. Fossil fuels are imported at exogenous world prices. Exports and imports of goods respond to relative prices with Armington elasticities. Investment is subject to quadratic adjustment costs, as in {22}.",
          ],
        },
        {
          id: "government",
          heading: "4.3 Government, carbon price and revenue recycling",
          paragraphs: [
            "The government levies taxes on labour income (including social contributions), capital income and consumption, purchases goods and services, pays transfers and issues debt, subject to a fiscal rule that stabilises the debt-to-GDP ratio in the long run. The carbon price τ_t is applied to emissions from the combustion of each fossil fuel, in proportion to its carbon content, and to process emissions in cement and steel. We assume full pass-through of carbon costs to the prices of electricity and other goods in the benchmark.",
            "Carbon revenue can be used in six ways: returned to all households as an equal per-capita dividend (our benchmark, which is lump-sum and leaves other tax rates unchanged); used to reduce the average labour-income tax rate, implemented as a cut in employee social contributions; used to reduce the capital-income tax rate; used to finance additional government consumption; used to reduce public debt; or split equally between the labour-tax cut and the dividend. In each case the government budget is balanced in present value.",
          ],
        },
      ],
    },
    {
      id: "calibration",
      heading: "5. Data and Calibration",
      paragraphs: [
        "The model is calibrated to the Korean economy in 2019, the last year before the pandemic. Sectoral production and input–output linkages come from the Bank of Korea's input–output tables, aggregated to eight sectors. Emissions by sector and fuel come from the national greenhouse gas inventory, and energy use from the energy balances of the Korea Energy Economics Institute. Household expenditure patterns by income quintile come from the Household Income and Expenditure Survey of Statistics Korea, which records detailed expenditure on electricity, gas, heating fuels and transport fuels for about 7,200 households per year. Tax rates are effective average rates computed from national accounts revenue data.",
        "Table 2 reports the key parameters. The elasticity of substitution between capital and energy is set to 0.4, and that between the capital–energy composite and labour to 0.8, in the middle of the range estimated by {18}. The elasticity of substitution among generation technologies is 2.0. The Frisch elasticity of labour supply is 0.5, consistent with the macro evidence summarised by {24}. The share of hand-to-mouth households is 0.3, which matches the share of Korean households with liquid assets below two months of income. The discount factor implies a real interest rate of 2.5 percent, and the depreciation rate is 8 percent. Effective tax rates are 26 percent on labour income including social contributions, 24 percent on capital income and 9 percent on consumption.",
        "The baseline incorporates projections of GDP growth, population and world energy prices from official sources, the current nuclear capacity plan and the expansion of renewables already legislated. In the baseline, emissions decline slowly, to about 640 million tons in 2035, because of continued structural change and the planned retirement of older coal plants. All results are reported as deviations from this no-policy baseline.",
      ],
      tables: [
        {
          id: "table-2",
          caption: "Table 2. Key parameters of the benchmark calibration",
          columns: ["Parameter", "Symbol", "Value", "Source or target"],
          rows: [
            ["Elasticity of substitution, capital–energy", "σ_KE", "0.4", "van der Werf (2008)"],
            ["Elasticity of substitution, (capital–energy)–labour", "σ_KL,E", "0.8", "van der Werf (2008)"],
            ["Elasticity of substitution among generation technologies", "σ_G", "2.0", "Generation mix response, 2015–2021"],
            ["Household energy–goods elasticity", "σ_C", "0.3", "Price elasticity of residential energy demand"],
            ["Frisch elasticity of labour supply", "η", "0.5", "Chetty et al. (2011)"],
            ["Share of hand-to-mouth households", "λ", "0.30", "Liquid-asset distribution, HIES"],
            ["Real interest rate (annual)", "r", "2.5%", "Long-run real government bond yield"],
            ["Depreciation rate", "δ", "0.08", "Investment–capital ratio"],
            ["Investment adjustment cost", "κ", "4.0", "Investment volatility relative to output"],
            ["Labour-income tax rate (incl. contributions)", "t_L", "0.26", "National accounts revenue"],
            ["Capital-income tax rate", "t_K", "0.24", "National accounts revenue"],
            ["Consumption tax rate", "t_C", "0.09", "National accounts revenue"],
            ["Armington elasticity", "σ_A", "3.0", "Trade literature"],
          ],
          note: "Note: The model is calibrated to 2019 data. HIES = Household Income and Expenditure Survey. Sectoral parameters (factor shares, intermediate input shares, emissions intensities) are taken directly from the input–output tables and the emissions inventory and are not reported here.",
        },
      ],
    },
    {
      id: "scenarios",
      heading: "6. Policy Scenarios and Solution Method",
      paragraphs: [
        "Our main scenario introduces a carbon price of USD 6 per ton of CO2-equivalent in 2025 that rises linearly to USD 30 in 2030 and is held constant in real terms thereafter. At an exchange rate of KRW 1,300 per dollar, USD 30 corresponds to about KRW 39,000 per ton — above recent K-ETS prices but well below the prices prevailing in the European Union. The tax is announced in 2024, so firms and households anticipate its path. This gradual introduction is intended to give firms time to adjust their capital stock and to limit transitional costs. We also consider an immediate introduction at USD 30 in 2025, a lower price of USD 15 and a higher price of USD 50.",
        "The model is solved under perfect foresight using a Newton–Raphson algorithm on the full nonlinear system over a 100-year horizon, ensuring convergence to the new steady state. We define the cumulative output cost of each policy as the sum of output losses relative to baseline over 2025–2035, divided by the sum of baseline output over the same period. This measure, which equals the average percentage output loss over the period, captures both the transitional costs of adjustment and the longer-run loss of output as the economy shifts to a less energy-intensive structure. Welfare is measured as the permanent percentage change in baseline consumption that would make households indifferent between the baseline and the policy, ignoring climate benefits.",
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We present the macroeconomic effects of the benchmark scenario, compare alternative uses of carbon revenue, and describe the sectoral adjustment that underlies the aggregate results.",
      ],
      subsections: [
        {
          id: "macro",
          heading: "7.1 Macroeconomic effects",
          paragraphs: [
            "Table 3 reports the effects of the benchmark scenario, with revenue returned as an equal per-capita dividend, at selected horizons. Emissions fall by 3.1 percent in 2025, when the price is low, by 14.2 percent in 2030 and by 18.0 percent in 2035, when the capital stock has had more time to adjust. About three-fifths of the reduction in 2035 comes from the electricity sector, where the carbon price makes coal-fired generation uncompetitive relative to gas and renewables; the remainder comes from lower energy intensity in manufacturing and from lower fuel consumption in transport and buildings.",
            "GDP falls by 0.09 percent in 2025 and by 0.92 percent in 2035 relative to baseline. Averaged over 2025–2035, the cumulative output cost is 0.6 percent of GDP. The decline in output reflects higher energy costs, which reduce the marginal product of capital and labour, and the tax-interaction effect: by lowering real wages, the carbon price reduces employment in an economy where labour is already taxed. Investment falls by more than output, by 1.42 percent in 2035, because energy and capital are complements in production. Real wages fall by 0.66 percent and employment by 0.24 percent in 2035. Carbon revenue peaks at 0.86 percent of GDP in 2030 and declines slightly as emissions fall further.",
            "Figure 1 plots the path of GDP relative to baseline under the benchmark and under labour-tax recycling. Under the per-capita dividend, the output loss grows steadily as the carbon price rises and capital is reallocated. Under labour-tax recycling, the loss is roughly 40 percent smaller at every horizon, reaching 0.55 percent in 2035.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Macroeconomic effects of a USD 30 carbon tax with per-capita dividend (percent deviation from baseline)",
              columns: ["Variable", "2025", "2027", "2030", "2035"],
              rows: [
                ["Carbon price (USD per ton CO2e)", "6", "16", "30", "30"],
                ["Emissions", "−3.1", "−8.4", "−14.2", "−18.0"],
                ["GDP", "−0.09", "−0.34", "−0.66", "−0.92"],
                ["Private consumption", "−0.05", "−0.23", "−0.49", "−0.69"],
                ["Investment", "−0.21", "−0.65", "−1.18", "−1.42"],
                ["Employment (hours)", "−0.04", "−0.12", "−0.21", "−0.24"],
                ["Real wage", "−0.06", "−0.24", "−0.49", "−0.66"],
                ["Consumer energy prices", "2.3", "6.4", "11.8", "11.6"],
                ["Exports", "−0.12", "−0.41", "−0.78", "−1.02"],
                ["Carbon revenue (percent of GDP)", "0.18", "0.47", "0.86", "0.80"],
              ],
              note: "Note: Deviations from the no-policy baseline. The carbon price rises linearly from USD 6 in 2025 to USD 30 in 2030 and is constant in real terms thereafter. Revenue is returned to households as an equal per-capita dividend. Carbon revenue is reported as a share of GDP, not as a deviation.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. GDP relative to baseline under alternative revenue recycling, 2025–2035",
              kind: "line",
              xLabels: ["2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035"],
              yLabel: "GDP, percent deviation from baseline",
              series: [
                { name: "Per-capita dividend", values: [-0.09, -0.21, -0.34, -0.46, -0.57, -0.66, -0.74, -0.8, -0.85, -0.89, -0.92] },
                { name: "Labour-income tax cut", values: [-0.05, -0.12, -0.2, -0.27, -0.34, -0.4, -0.45, -0.48, -0.51, -0.53, -0.55] },
              ],
              marker: 5,
              note: "Note: The dashed line marks 2030, when the carbon price reaches USD 30. The cumulative output cost (average loss over 2025–2035) is 0.60 percent under the per-capita dividend and 0.36 percent under the labour-income tax cut.",
            },
          ],
        },
        {
          id: "recycling",
          heading: "7.2 Revenue recycling",
          paragraphs: [
            "Table 4 compares the six uses of carbon revenue. Using the revenue to cut labour-income taxes reduces the cumulative output cost from 0.60 to 0.36 percent of GDP, a reduction of 40 percent. The lower labour tax raises after-tax wages, offsetting the effect of the carbon price on labour supply; employment in 2035 is slightly higher than in the baseline, and the consumption loss is less than half as large as under the dividend. This is a clear weak double dividend in the sense of {3}. It is not a strong double dividend: output still falls, because the carbon price narrows the tax base and reduces the productivity of capital [4][5]. Emissions fall by 17.6 percent rather than 18.0 percent, because higher activity raises energy demand slightly.",
            "Cutting capital-income taxes reduces the output cost even further, to 0.29 percent, because capital taxes are the most distortionary in a dynamic model and because capital and energy are complements. But it generates the smallest consumption and welfare gains among the distortionary-tax options in the medium run, because the gains accrue initially as higher investment, and it is the most regressive option, since capital income is concentrated among high-income households. This trade-off between efficiency and equity mirrors the findings of {6} and {13} for the United States. Using the revenue to finance government consumption is the costliest option, with an output cost of 0.71 percent, and debt reduction lies between the dividend and the tax-cut options. A hybrid that splits the revenue equally between labour-tax cuts and a dividend yields an output cost of 0.48 percent and, as we show in Section 8, a more progressive distribution of net burdens.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Alternative uses of carbon revenue",
              columns: ["Recycling scheme", "Cumulative output cost (% of GDP)", "Change vs. dividend (%)", "Emissions, 2035 (%)", "Consumption, 2035 (%)", "Employment, 2035 (%)", "Welfare (CEV, %)"],
              rows: [
                ["Equal per-capita dividend (benchmark)", "0.60", "—", "−18.0", "−0.69", "−0.24", "−0.21"],
                ["Labour-income tax cut", "0.36", "−40", "−17.6", "−0.31", "0.06", "−0.09"],
                ["Capital-income tax cut", "0.29", "−52", "−17.4", "−0.52", "−0.08", "−0.14"],
                ["Government consumption", "0.71", "18", "−18.2", "−0.95", "−0.18", "−0.30"],
                ["Public debt reduction", "0.64", "7", "−18.1", "−0.58", "−0.27", "−0.19"],
                ["Half labour-tax cut, half dividend", "0.48", "−20", "−17.8", "−0.50", "−0.09", "−0.12"],
              ],
              note: "Note: Cumulative output cost is the sum of output losses over 2025–2035 divided by the sum of baseline output over the same period. Welfare is the consumption-equivalent variation for the average household, excluding climate benefits and the value of government consumption. All schemes are revenue-neutral in present value.",
            },
          ],
        },
        {
          id: "sectoral",
          heading: "7.3 Sectoral adjustment",
          paragraphs: [
            "The aggregate effects mask considerable sectoral reallocation. By 2035, output in the electricity sector is 4.8 percent lower than in the baseline, but the composition of generation changes far more: coal-fired generation falls by 41 percent, while gas-fired generation rises by 9 percent and renewable generation by 23 percent. Among manufacturing sectors, output falls most in primary metals (−3.9 percent), non-metallic minerals (−3.4 percent) and petrochemicals (−2.6 percent), which combine high energy intensity with high trade exposure. Output in other manufacturing and in services is almost unchanged, and rises slightly under labour-tax recycling. Exports fall by about 1 percent in 2035 under the benchmark, with the decline concentrated in steel and petrochemical products.",
            "The concentration of losses in a few energy-intensive and trade-exposed sectors raises concerns about carbon leakage and competitiveness that are familiar from the experience of other countries with unilateral carbon pricing [25]. In our model, about 12 percent of the emissions reduction in these sectors is offset by higher emissions abroad, a leakage rate at the lower end of the range found in multi-region studies. We examine border carbon adjustment as an option in Section 9.",
          ],
        },
      ],
    },
    {
      id: "distribution",
      heading: "8. Distributional Effects",
      paragraphs: [
        "To assess incidence, we combine the changes in consumer prices, wages, capital returns and transfers from the model with the expenditure and income patterns of households in each quintile of the income distribution in the Household Income and Expenditure Survey. We distinguish the direct cost of the carbon price, through higher prices for electricity, gas, heating fuels and transport fuels purchased by households, from the indirect cost, through higher prices for other goods that embody energy. We then add the effect of revenue recycling and of changes in factor incomes.",
        "Table 5 reports the results for 2030. Low-income households spend a larger share of their budgets on energy — 9.4 percent in the lowest quintile, compared with 4.4 percent in the highest — and therefore face proportionally larger direct cost increases: 1.42 percent of expenditure in the lowest quintile and 0.66 percent in the highest. Indirect costs are roughly proportional to expenditure across quintiles. The total cost before recycling is therefore mildly regressive, ranging from 2.13 percent of expenditure in the lowest quintile to 1.32 percent in the highest, consistent with evidence for other advanced economies [11][14][15].",
        "Revenue recycling changes the picture substantially. Under labour-tax recycling, the net burden on the lowest quintile falls to 0.48 percent of expenditure, so that about 77 percent of its gross burden is offset. Two features of the Korean system explain why a labour-tax cut, which might be expected to benefit mainly higher earners, offsets most of the burden on low-income households. First, we implement the cut as a reduction in employee social contributions, which are proportional to wages up to a ceiling and therefore represent a larger share of income for low-wage workers than the progressive income tax. Second, basic pensions and livelihood allowances, which account for a large share of income in the lowest quintile, are indexed to consumer prices, so that recipients are partly protected from the increase in the price level. Higher-income households gain more from the tax cut in absolute terms, and their net burden is close to zero.",
        "An equal per-capita dividend is strongly progressive: households in the lowest two quintiles gain on average, by 2.95 and 1.10 percent of expenditure, while those in the highest quintile lose 0.71 percent, consistent with the findings of {13} and {16} for the United States. Figure 2 compares the net burden across quintiles under the three regimes. The choice between dividend and labour-tax recycling thus involves a trade-off between aggregate efficiency and progressivity, which the hybrid scheme partly resolves: under the half-and-half scheme the lowest quintile gains 1.24 percent of expenditure and the highest loses 0.38 percent, at an output cost of 0.48 percent of GDP. Within-quintile variation is large, as emphasised by {16}: rural households and those heating with oil or kerosene face burdens roughly 50 percent higher than the quintile average, which calls for targeted support in addition to broad recycling [12].",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Incidence of the carbon tax by household income quintile, 2030 (percent of household expenditure)",
          columns: ["Quintile", "Energy budget share", "Direct cost", "Indirect cost", "Total cost before recycling", "Net, labour-tax recycling", "Net, per-capita dividend"],
          rows: [
            ["Q1 (lowest)", "9.4", "1.42", "0.71", "2.13", "0.48", "−2.95"],
            ["Q2", "7.6", "1.15", "0.70", "1.85", "0.41", "−1.10"],
            ["Q3", "6.5", "0.98", "0.69", "1.67", "0.27", "−0.31"],
            ["Q4", "5.6", "0.84", "0.68", "1.52", "0.12", "0.24"],
            ["Q5 (highest)", "4.4", "0.66", "0.66", "1.32", "0.05", "0.71"],
            ["All households", "6.2", "0.93", "0.68", "1.61", "0.20", "−0.24"],
          ],
          note: "Note: Positive values are costs and negative values are net gains, as a percentage of household consumption expenditure. Quintiles of equivalised disposable income from the Household Income and Expenditure Survey. Direct cost is the increase in the cost of energy purchased by households; indirect cost is the increase in the cost of other goods. Net figures include revenue recycling and changes in wages, capital income and indexed transfers. The averages for all households are weighted by expenditure.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Net burden of the carbon tax by income quintile under alternative recycling, 2030",
          kind: "bar",
          xLabels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
          yLabel: "Percent of household expenditure",
          series: [
            { name: "Before recycling", values: [2.13, 1.85, 1.67, 1.52, 1.32] },
            { name: "Labour-tax recycling", values: [0.48, 0.41, 0.27, 0.12, 0.05] },
            { name: "Per-capita dividend", values: [-2.95, -1.1, -0.31, 0.24, 0.71] },
          ],
          note: "Note: Values from Table 5. Positive values are net costs; negative values are net gains.",
        },
      ],
    },
    {
      id: "sensitivity",
      heading: "9. Sensitivity Analysis",
      paragraphs: [
        "Table 6 examines the sensitivity of our main results to key parameters and policy design choices. The elasticity of substitution between capital and energy is the most important parameter for the emissions response: halving it to 0.2 reduces the emissions reduction in 2035 to 13.5 percent and raises the output cost to 0.71 percent, while raising it to 0.6 increases the emissions reduction to 22.1 percent. The Frisch elasticity matters mainly for the output cost and for the gains from labour-tax recycling: with a higher elasticity, the tax-interaction effect is larger and so are the gains from cutting labour taxes. Across all variations, the reduction in output cost from labour-tax recycling relative to the dividend ranges from 35 to 46 percent, so our conclusion that it is approximately 40 percent is robust.",
        "The policy design choices also matter. A higher carbon price of USD 50 cuts emissions by 26.4 percent at an output cost of 1.08 percent, while a lower price of USD 15 cuts them by 10.1 percent at a cost of 0.28 percent; output costs rise more than proportionally with the price, as expected given the convexity of abatement costs. Introducing the full USD 30 price immediately in 2025 rather than gradually raises the output cost to 0.79 percent with only a slightly larger emissions reduction, which confirms the value of a gradual and pre-announced path in allowing the capital stock to adjust. Continued regulation of electricity tariffs, which we model as 50 percent pass-through of carbon costs to consumers, reduces the emissions response substantially, to 13.8 percent, because it mutes the price signal for electricity demand; the lower output cost in that scenario is misleading, since the unrecovered costs accumulate as losses of the state-owned utility. Finally, a border carbon adjustment on imports of steel, cement and petrochemicals slightly increases the emissions reduction and lowers the output cost by protecting energy-intensive sectors from import competition, consistent with the multi-model evidence of {25}.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Sensitivity of main results to parameters and policy design",
          columns: ["Variation", "Emissions, 2035 (%)", "Output cost, dividend (% of GDP)", "Output cost, labour-tax cut (% of GDP)", "Reduction from labour-tax recycling (%)"],
          rows: [
            ["Benchmark", "−18.0", "0.60", "0.36", "40"],
            ["σ_KE = 0.2", "−13.5", "0.71", "0.44", "38"],
            ["σ_KE = 0.6", "−22.1", "0.52", "0.30", "42"],
            ["Frisch elasticity = 0.25", "−17.9", "0.52", "0.34", "35"],
            ["Frisch elasticity = 1.0", "−18.1", "0.74", "0.40", "46"],
            ["Hand-to-mouth share = 0.15", "−18.0", "0.57", "0.35", "39"],
            ["Hand-to-mouth share = 0.45", "−18.0", "0.64", "0.38", "41"],
            ["Carbon price USD 15", "−10.1", "0.28", "0.16", "43"],
            ["Carbon price USD 50", "−26.4", "1.08", "0.67", "38"],
            ["Immediate introduction in 2025", "−18.3", "0.79", "0.49", "38"],
            ["50% pass-through to electricity prices", "−13.8", "0.48", "0.30", "38"],
            ["Border carbon adjustment", "−18.4", "0.55", "0.32", "42"],
          ],
          note: "Note: Each row changes one parameter or design feature relative to the benchmark. Output cost is the cumulative output loss over 2025–2035 relative to baseline output. Emissions are domestic emissions relative to the baseline.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results suggest that a moderate carbon price would deliver a substantial share of the emissions reductions Korea needs at a modest macroeconomic cost. An 18 percent reduction relative to baseline by 2035 corresponds to about 115 million tons of CO2-equivalent, a little over half of the gap between baseline emissions in 2035 and the level implied by the 2030 target. Further reductions would require higher prices, complementary regulation and investment in low-carbon infrastructure. The cumulative output cost of 0.6 percent of GDP, or 0.36 percent with labour-tax recycling, should be weighed against the avoided climate damages, which we do not model, and against the costs of reaching the same targets through less efficient regulatory instruments [6][20].",
        "Three policy implications follow. First, the use of carbon revenue matters as much as the carbon price itself. Recycling through labour-tax cuts reduces the output cost by about 40 percent, and the choice between labour-tax cuts and dividends determines whether low-income households are protected or made better off. A hybrid scheme, combined with targeted support for households with high heating-fuel burdens, appears to offer a reasonable balance between efficiency and equity. Second, the effectiveness of carbon pricing in Korea depends on reform of electricity pricing. As long as tariffs are set without regard to carbon costs, the price signal for electricity demand is muted and the costs of decarbonising the power sector accumulate as utility losses that taxpayers ultimately bear. Third, a gradual and credible price path reduces transitional costs considerably; policy uncertainty, by contrast, discourages the investment in low-carbon capital on which the long-run response depends [21].",
        "Our analysis has limitations. The model abstracts from climate damages and from the co-benefits of reduced local air pollution, which would add to the benefits of carbon pricing, and from induced technological change, which would lower its long-run costs [17]. It treats world energy prices as exogenous and does not model carbon pricing by trading partners, which would reduce leakage and competitiveness concerns. Its distributional analysis captures differences across income quintiles but not across regions, ages or occupations, where adjustment costs in coal-dependent communities may be concentrated. And, like all models of this kind, its quantitative results depend on elasticities that are estimated with uncertainty.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We use a dynamic general-equilibrium model with energy as a production input to evaluate carbon pricing in Korea. A carbon tax of USD 30 per ton of CO2-equivalent, introduced gradually over 2025–2030, reduces emissions by 18 percent by 2035 relative to a no-policy baseline, at a cumulative output cost of 0.6 percent of GDP when the revenue is returned as a per-capita dividend. Recycling the revenue through cuts in labour-income taxes reduces this cost by about 40 percent. Low-income households face proportionally larger direct energy-cost increases, but these are largely offset under labour-tax recycling and more than offset under a per-capita dividend.",
        "Carbon pricing is therefore neither costless nor prohibitively expensive for Korea. Its costs depend heavily on design choices — the speed of introduction, the use of revenue and the reform of electricity pricing — that are within the control of policymakers. Future work should extend the analysis to regional labour markets, to the interaction between carbon pricing and industrial policy for low-carbon technologies, and to the coordination of carbon pricing among Korea's main trading partners.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Model Equations and Calibration Details",
      paragraphs: [
        "Households. Ricardian households maximise Σ β^t [ln C_t − χ L_t^(1+1/η)/(1+1/η)] subject to a budget constraint that includes after-tax labour and capital income, dividends, carbon dividends where applicable, and bond holdings. The consumption composite is C_t = [α_C^(1/σ_C) G_t^((σ_C−1)/σ_C) + (1 − α_C)^(1/σ_C) E_t^(H (σ_C−1)/σ_C)]^(σ_C/(σ_C−1)), where G_t denotes non-energy goods and E_t^H household energy. Hand-to-mouth households have the same preferences but consume their after-tax income in each period; their labour supply is set equal to that of Ricardian households, a standard assumption that avoids implausible differences in hours.",
        "Production. In each sector j, gross output is a Leontief combination of value added plus energy (VAE) and non-energy intermediates. VAE_j = [a_j V_j^((σ−1)/σ) + (1 − a_j) L_j^((σ−1)/σ)]^(σ/(σ−1)) with σ = σ_KL,E, where V_j = [b_j K_j^((σ_KE−1)/σ_KE) + (1 − b_j) E_j^((σ_KE−1)/σ_KE)]^(σ_KE/(σ_KE−1)). Energy E_j is a CES composite of electricity and fossil fuels with elasticity 0.5. Electricity is produced by four technologies combined with elasticity σ_G; each technology uses technology-specific capital subject to adjustment costs.",
        "Carbon price and government. The price of fossil fuel f faced by users is p_f + τ_t e_f, where e_f is the carbon content per unit. Process emissions in cement and steel are taxed in proportion to output. The government budget constraint includes all tax revenues, carbon revenue, government consumption, transfers and debt service; a fiscal rule adjusts lump-sum transfers slowly to stabilise debt in the long run, except in the debt-reduction scenario. Calibration targets and the mapping from model households to survey quintiles are described in the replication files.",
      ],
    },
  ],
};
