// Vol. 29, No. 3 (July 2024) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2024-v29-i3-01",
  acknowledgments:
    "We thank seminar participants at Hanyang University, the University of Mannheim and the Korea Labor Institute, two anonymous referees and the handling Associate Editor for helpful comments. We are grateful to the staff of the National Pension Service research data centre and of the Research Data Centre of the German Federal Employment Agency at the Institute for Employment Research for facilitating access to the linked records. All errors are our own.",
  dataAvailability:
    "Municipal and district employment series are compiled from public statistical yearbooks, the Korean Census on Establishments and the employment statistics of the German Federal Employment Agency. Linked worker records are confidential and were accessed on site under data-use agreements with the National Pension Service and the Institute for Employment Research; researchers may apply for access through the same procedures. Code and the constructed regional panels are available from the corresponding author.",
  editorialNote:
    "Markus Bauer and Sungho Park use synthetic control methods to show that coal phase-out policies in Kangwon, North Gyeongsang and the Ruhr reduced employment in coal-dependent labour markets by 7 to 11 percent ten years after implementation, with renewable energy adding at most 0.4 percent of baseline employment; active labour market programmes shortened displaced miners' non-employment by about three to five months but left re-employment wage losses of around 14 to 15 percent intact.",
  refs: [
    /* 1 */ "Abadie, A., & Gardeazabal, J. (2003). The economic costs of conflict: A case study of the Basque Country. American Economic Review, 93(1), 113–132.",
    /* 2 */ "Abadie, A., Diamond, A., & Hainmueller, J. (2010). Synthetic control methods for comparative case studies: Estimating the effect of California's tobacco control program. Journal of the American Statistical Association, 105(490), 493–505.",
    /* 3 */ "Abadie, A., Diamond, A., & Hainmueller, J. (2015). Comparative politics and the synthetic control method. American Journal of Political Science, 59(2), 495–510.",
    /* 4 */ "Abadie, A. (2021). Using synthetic controls: Feasibility, data requirements, and methodological aspects. Journal of Economic Literature, 59(2), 391–425.",
    /* 5 */ "Jacobson, L. S., LaLonde, R. J., & Sullivan, D. G. (1993). Earnings losses of displaced workers. American Economic Review, 83(4), 685–709.",
    /* 6 */ "Davis, S. J., & von Wachter, T. (2011). Recessions and the costs of job loss. Brookings Papers on Economic Activity, 2011(Fall), 1–72.",
    /* 7 */ "Couch, K. A., & Placzek, D. W. (2010). Earnings losses of displaced workers revisited. American Economic Review, 100(1), 572–589.",
    /* 8 */ "Blanchard, O. J., & Katz, L. F. (1992). Regional evolutions. Brookings Papers on Economic Activity, 1992(1), 1–75.",
    /* 9 */ "Autor, D. H., Dorn, D., & Hanson, G. H. (2013). The China syndrome: Local labor market effects of import competition in the United States. American Economic Review, 103(6), 2121–2168.",
    /* 10 */ "Dauth, W., Findeisen, S., & Suedekum, J. (2014). The rise of the East and the Far East: German labor markets and trade integration. Journal of the European Economic Association, 12(6), 1643–1675.",
    /* 11 */ "Black, D., McKinnish, T., & Sanders, S. (2005). The economic impact of the coal boom and bust. Economic Journal, 115(503), 449–476.",
    /* 12 */ "Amior, M., & Manning, A. (2018). The persistence of local joblessness. American Economic Review, 108(7), 1942–1970.",
    /* 13 */ "Card, D., Kluve, J., & Weber, A. (2018). What works? A meta analysis of recent active labor market program evaluations. Journal of the European Economic Association, 16(3), 894–931.",
    /* 14 */ "Kluve, J. (2010). The effectiveness of European active labor market programs. Labour Economics, 17(6), 904–918.",
    /* 15 */ "Lechner, M., Miquel, R., & Wunsch, C. (2011). Long-run effects of public sector sponsored training in West Germany. Journal of the European Economic Association, 9(4), 742–784.",
    /* 16 */ "Schmieder, J. F., von Wachter, T., & Bender, S. (2016). The effect of unemployment benefits and nonemployment durations on wages. American Economic Review, 106(3), 739–777.",
    /* 17 */ "Walker, W. R. (2013). The transitional costs of sectoral reallocation: Evidence from the Clean Air Act and the workforce. Quarterly Journal of Economics, 128(4), 1787–1835.",
    /* 18 */ "Curtis, E. M. (2018). Who loses under cap-and-trade programs? The labor market effects of the NOx Budget Trading Program. Review of Economics and Statistics, 100(1), 151–166.",
    /* 19 */ "Greenstone, M. (2002). The impacts of environmental regulations on industrial activity: Evidence from the 1970 and 1977 Clean Air Act Amendments and the Census of Manufactures. Journal of Political Economy, 110(6), 1175–1219.",
    /* 20 */ "Kline, P., & Moretti, E. (2014). Local economic development, agglomeration economies, and the big push: 100 years of evidence from the Tennessee Valley Authority. Quarterly Journal of Economics, 129(1), 275–331.",
    /* 21 */ "Austin, B., Glaeser, E., & Summers, L. (2018). Jobs for the heartland: Place-based policies in 21st-century America. Brookings Papers on Economic Activity, 2018(Spring), 151–232.",
    /* 22 */ "Ben-Michael, E., Feller, A., & Rothstein, J. (2021). The augmented synthetic control method. Journal of the American Statistical Association, 116(536), 1789–1803.",
    /* 23 */ "Arkhangelsky, D., Athey, S., Hirshberg, D. A., Imbens, G. W., & Wager, S. (2021). Synthetic difference-in-differences. American Economic Review, 111(12), 4088–4118.",
    /* 24 */ "Moretti, E. (2010). Local multipliers. American Economic Review, 100(2), 373–377.",
    /* 25 */ "Notowidigdo, M. J. (2020). The incidence of local labor demand shocks. Journal of Labor Economics, 38(3), 687–725.",
    /* 26 */ "Glaeser, E. L., & Gyourko, J. (2005). Urban decline and durable housing. Journal of Political Economy, 113(2), 345–375.",
    /* 27 */ { jer: "2023-v28-i4-02" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Decarbonisation requires the contraction of industries that have anchored regional economies for generations. Coal mining is the clearest case. Mines are geographically concentrated, employ workers with industry-specific skills, and sustain dense networks of suppliers and local services. When a phase-out policy closes them, the costs fall on a small number of places and on workers whose alternatives are limited. Understanding the size and persistence of these costs, and the extent to which new energy industries or public programmes offset them, is central to the design of a just transition.",
        "Evidence on the regional labour-market effects of industrial decline shows that local shocks are absorbed slowly. Following the classic analysis of Blanchard and Katz {8}, a large literature finds that adverse demand shocks reduce local employment for a decade or more, with adjustment through migration, lower participation and lower wages [9][10][12][25]. Studies of environmental regulation find that the workers directly affected by stricter rules bear substantial and lasting earnings losses [17][18][19]. Yet direct evidence on deliberate coal phase-out policies is scarce, in part because such policies are rare and each one affects only a handful of regions, which makes conventional difference-in-differences designs with many treated units infeasible.",
        "This paper studies three traditionally coal-intensive regions that experienced policy-driven closures of their mines: the coal fields of Kangwon province and of North Gyeongsang province in Korea, which contracted under the Coal Industry Rationalisation Policy launched in 1989, and the Ruhr region in Germany, where the Hard Coal Financing Act of 2007 set a binding end date for subsidised mining. In each case the timing and scale of closures were set by national policy rather than by local economic conditions, and the affected labour markets were heavily dependent on mining at the time of implementation. We estimate the effect of the phase-out on local employment using synthetic control methods [1][2][3][4], which construct a weighted combination of comparable unaffected labour markets that reproduces each treated region's pre-policy trajectory.",
        "We document persistent employment declines of 7 to 11 percent in coal-dependent local labour markets ten years after policy implementation: 11.0 percent in the Kangwon coal fields, 7.2 percent in the Mungyeong coal field of North Gyeongsang and 8.6 percent in the Ruhr coal districts. The gaps open within two to three years and show little sign of closing by year ten. Employment losses extend well beyond mining: roughly two-fifths of the decline occurs in local services, construction and manufacturing supply chains. We find limited evidence of compensating employment growth in renewable energy sectors, which by year ten account for no more than 0.4 percent of baseline employment in any of the three regions.",
        "We complement the regional analysis with linked employer–employee records for displaced miners in Korea and Germany. Miners who participated in active labour market programmes targeted at them — re-employment training under the Korean rationalisation programme and retraining and placement through transfer arrangements in the Ruhr — had non-employment spells that were three to five months shorter in the three years after displacement. However, their wages upon re-employment were about 14 to 15 percent below pre-displacement levels, almost exactly as for non-participants. Active labour market policies targeted at displaced workers therefore appear to shorten non-employment spells but do not eliminate wage losses.",
        "Section 2 describes the phase-out policies. Section 3 reviews related literature and Section 4 sets out a simple framework. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 examines mechanisms and the worker-level evidence, and Section 9 reports robustness checks. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional background",
      paragraphs: [
        "Korean coal mining expanded rapidly in the 1960s and 1970s to supply anthracite for the briquettes that heated most urban homes. Output peaked at 24 million tonnes in 1988, when about 350 mines employed roughly 62,000 miners, the large majority in the Taebaek mountain range of Kangwon province and a smaller field around Mungyeong in North Gyeongsang. Rising incomes, the spread of apartment housing heated by oil and natural gas, and government efforts to improve urban air quality caused briquette demand to fall sharply from the late 1980s. In 1989 the government launched the Coal Industry Rationalisation Policy, administered by the Coal Industry Rationalisation Agency, which paid mine owners closure subsidies per tonne of capacity retired and provided severance and relocation payments to miners. Within seven years more than 330 mines had closed and mining employment had fallen by about 80 percent.",
        "The policy was designed at the national level, and the schedule of closures reflected mine productivity and the nationally projected decline in briquette demand rather than conditions in local labour markets. Mining municipalities had few alternative employers: the coal towns of Taebaek, Samcheok, Jeongseon and Yeongwol were remote, mountainous and poorly connected to the industrial belt of the south-east. Regional support came only later. The Special Act on Assistance to the Development of Abandoned Mine Areas of 1995 provided for infrastructure investment and authorised a casino resort in Jeongseon, which opened in 2000, after the ten-year window we study for the Korean regions.",
        "In Germany, hard-coal mining in the Ruhr had been contracting since the 1960s under a system of production subsidies that guaranteed sales to power plants and steelmakers. By the mid-2000s the remaining mines, operated by RAG, still employed about 32,000 workers, most of them in the northern Ruhr. In 2007 the federal government, the states of North Rhine-Westphalia and Saarland, RAG and the mining union agreed to end subsidised hard-coal mining by the end of 2018, and the Hard Coal Financing Act gave the agreement legal force. The mines at Hamm, Kamp-Lintfort and Marl closed between 2010 and 2015, and the last mine, in Bottrop, closed in December 2018. Unlike in Korea, the agreement ruled out compulsory redundancies: workers were transferred between mines, offered early retirement from age 50 through an adjustment allowance, or moved into retraining and placement programmes.",
        "The two episodes thus differ in their historical context and in the generosity of support for workers, but share the features that matter for our design. In both, a national policy fixed the timing of closures independently of local conditions; in both, the affected labour markets were highly dependent on mining and its supply chain at the time of implementation; and in both, a large pool of comparable regions within the same country was not directly affected. The macroeconomic analysis of carbon pricing for Korea published in this journal [27] emphasises that aggregate costs of decarbonisation can be modest; our focus is on how those costs are distributed across places.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related literature",
      paragraphs: [
        "Our paper contributes to three literatures. The first studies regional responses to local labour-demand shocks. Blanchard and Katz {8} showed that US states recover from adverse shocks mainly through out-migration, with relative employment declines persisting for many years. More recent work using trade shocks finds that local manufacturing job losses translate into lower employment rates, lower wages and higher transfer receipt for at least a decade [9][10], and that local joblessness is persistent because migration responds only partially [12][25]. Durable housing slows population adjustment in declining places, so that residents stay and housing costs fall [26]. Black, McKinnish and Sanders {11} study the coal boom and bust in the United States and find substantial local employment multipliers in non-traded sectors. We add evidence on deliberate, policy-driven contraction and compare outcomes across two very different institutional settings.",
        "The second literature studies the labour-market costs of environmental policy. Greenstone {19} found that counties designated as out of compliance with air-quality standards lost manufacturing employment. Walker {17} used linked worker records to show that workers in newly regulated plants lost about 20 percent of pre-regulation earnings in present value, mainly through non-employment and lower wages after job changes, and Curtis {18} found employment declines in manufacturing industries affected by a cap-and-trade programme. The general-equilibrium analysis of Korean carbon pricing in this journal [27] finds small aggregate output effects. We extend this work to the closure of an entire extractive industry and quantify both regional and worker-level costs.",
        "The third literature concerns the costs of job displacement and the effectiveness of programmes designed to reduce them. Displaced workers suffer large and persistent earnings losses [5][6][7], which are larger when displacement occurs in weak labour markets [6]. Longer non-employment spells are associated with lower re-employment wages [16]. Meta-analyses find that training programmes have small short-run but larger medium-run effects on employment [13][14], and long-run evaluations for Germany find positive employment effects of public training several years after participation [15]. Our evidence suggests that, for displaced miners, programmes improve the speed of re-employment but not the quality of jobs found.",
        "Methodologically, we build on the synthetic control approach [1][2][3] and its recent extensions [4][22][23]. Synthetic controls are well suited to settings with a few treated regions and many potential comparison units, and have been used to evaluate place-specific shocks and policies. Our approach of applying the same design to three regions in two countries provides a form of external validity that single-case studies lack.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual framework and hypotheses",
      paragraphs: [
        "Consider a local labour market in which a fraction of employment is in a tradable extractive industry and the remainder in local non-tradable services and in other tradable industries. A phase-out policy eliminates extractive employment over a short period. In a standard spatial equilibrium model, the direct job loss lowers local labour demand, local wages and house prices; lower incomes reduce demand for local services, generating a local multiplier [24]; and some workers leave for other regions, while others withdraw from the labour force. If migration is costly and housing durable, adjustment is slow and local employment remains below its counterfactual for many years [8][12][26].",
        "The framework yields four hypotheses. First, local employment falls by more than direct mining employment because of multiplier effects in non-tradable sectors (H1). Second, the decline is persistent: employment does not return to its counterfactual path within a decade (H2). Third, new energy industries such as wind and solar, which are capital-intensive and employ few workers per unit of capacity once installed, do not offset the losses quantitatively (H3). Fourth, programmes that reduce search frictions or retrain displaced workers shorten non-employment, but cannot restore the wage premium earned in mining, which reflected industry-specific skills, compensating differentials for dangerous work and rents from subsidised production (H4). Because the mining wage premium is lost regardless of how quickly a worker finds a new job, wage losses conditional on re-employment should be similar for programme participants and non-participants.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We combine regional employment panels with linked worker records for both countries. This section describes the definition of the treated labour markets, the regional data and the worker-level data.",
      ],
      subsections: [
        {
          id: "data-regions",
          heading: "5.1 Treated labour markets",
          paragraphs: [
            "We define coal-dependent local labour markets as groups of contiguous municipalities or districts in which mining accounted for at least 5 percent of employment in the year before the policy and that contained mines closed under the policy within ten years. In Kangwon, the coal labour market consists of Taebaek, Samcheok, Jeongseon and Yeongwol; in North Gyeongsang, it is Mungyeong, including the former city of Jeomchon, which was merged with it in 1995. In the Ruhr, it comprises the independent cities of Bottrop, Gelsenkirchen and Hamm and the district of Recklinghausen, which contained or supplied the mines operating in 2007. For Korea the policy year is 1989; for the Ruhr it is 2007.",
            "Table 1 describes the three labour markets in the year before the policy. They differ in size, from 52,000 workers in Mungyeong to 362,000 in the Ruhr coal districts, and in their dependence on mining, which ranged from 36 percent of employment in the Kangwon coal fields to 7.8 percent in the Ruhr, where mining-related employment includes RAG's administrative and engineering staff and dedicated suppliers. Within ten years of implementation the phase-out eliminated about 36,500 mining jobs in Kangwon, 6,800 in Mungyeong and 21,300 in the Ruhr districts.",
          ],
          table: {
            id: "tab-regions",
            caption: "Table 1. Coal-dependent labour markets in the year before the phase-out policy",
            columns: ["Labour market", "Policy year", "Municipalities", "Employment", "Mining share (%)", "Mines closed within 10 years", "Mining jobs lost within 10 years"],
            rows: [
              ["Kangwon coal fields", "1989", "4", "118,400", "36.0", "212", "36,500"],
              ["Mungyeong (North Gyeongsang)", "1989", "1", "52,100", "15.3", "47", "6,800"],
              ["Ruhr coal districts", "2007", "4", "362,000", "7.8", "3", "21,300"],
            ],
            note: "Employment in the year before the policy (1988 for Korea, 2006 for the Ruhr). For Korea, total employment by place of work from municipal statistical yearbooks benchmarked to the 1985 and 1990 Population and Housing Censuses; for the Ruhr, employees subject to social insurance by place of work. Mining share includes employment in coal mining and, for the Ruhr, in RAG's central administration and dedicated mining suppliers. The fourth Ruhr mine, in Bottrop, closed in 2018, after the ten-year window.",
          },
        },
        {
          id: "data-regional",
          heading: "5.2 Regional employment data",
          paragraphs: [
            "For Korea we construct an annual panel of total and sectoral employment by place of work for 161 municipalities outside the capital region over 1981–2005. For 1994 onwards the data come from the Census on Establishments, which covers all establishments with at least one employee. For earlier years we use the employment tables of municipal statistical yearbooks, benchmarked to the employment counts of the 1980, 1985 and 1990 Population and Housing Censuses and, for mining and manufacturing, to the Mining and Manufacturing Survey. Municipal boundaries are harmonised to those of 2005. Predictor variables include the sectoral composition of employment, population density, the share of the population aged 15–29, the share with secondary education and distance to the nearest metropolitan city.",
            "For Germany we use annual counts of employees subject to social insurance by place of work for 401 districts over 1999–2019 from the Federal Employment Agency, together with district-level data on sectoral composition, population, age structure, the qualification structure of employment and commuting. Renewable-energy employment is measured in both countries using establishment-level industry codes for electricity generation from wind, solar, hydro and biomass, the manufacture of equipment for these technologies, and installation and maintenance services where separately identifiable.",
          ],
        },
        {
          id: "data-workers",
          heading: "5.3 Worker-level data",
          paragraphs: [
            "For Korea we link the records of the Coal Industry Rationalisation Agency, which list miners who received severance payments upon the closure of their mine between 1989 and 1996, to National Pension Service contribution records, which cover employees of firms with ten or more workers from 1988. The linked sample contains 21,400 miners displaced from mines in Kangwon and Mungyeong, of whom 6,900 participated in re-employment training financed under the rationalisation programme. For Germany we use an extract of the Integrated Employment Biographies of the Institute for Employment Research covering all workers employed in hard-coal mining in North Rhine-Westphalia in 2007 who separated from mining between 2008 and 2016, excluding those who entered the adjustment-allowance early-retirement scheme. This sample contains 8,600 workers, of whom 3,700 participated in retraining or placement measures.",
            "Earnings in both datasets are top-coded at the social-insurance contribution ceiling, which binds for fewer than 4 percent of miners. We measure non-employment as months without covered employment, and the re-employment wage as the average monthly (Korea) or daily (Germany) wage in the first full year of re-employment, deflated by consumer prices. Because the Korean pension records exclude small firms and self-employment, we confirm in Section 9 that our results are not driven by differential transitions into uncovered work.",
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical strategy",
      paragraphs: [
        "Our regional analysis applies the synthetic control method separately to each treated labour market, and our worker-level analysis compares displaced miners who did and did not participate in labour market programmes, exploiting variation in programme capacity across closure cohorts.",
      ],
      subsections: [
        {
          id: "strategy-scm",
          heading: "6.1 Synthetic control design",
          paragraphs: [
            "For each treated labour market j, let Y_jt be log employment and t = 0 the policy year. The synthetic control is a weighted average of untreated units in the donor pool, with non-negative weights summing to one chosen to minimise the distance between treated and synthetic values of pre-policy predictors, including log employment in each of the eight pre-policy years [2][4]. The estimated effect in event year t is the gap between the treated unit's outcome and that of its synthetic control. For Korea, the donor pool comprises 120 non-mining municipalities outside the capital region after excluding municipalities with any coal or metal mining employment above 1 percent and those adjacent to the treated labour markets. For Germany, it comprises 250 West German districts after excluding the Ruhr, Saarland, the Rhineland lignite districts and districts adjacent to the treated area. Because the treated units are aggregates of several municipalities, we construct donor units of comparable size by aggregating contiguous untreated municipalities into labour markets using commuting flows.",
            "Table 2 reports the predictor balance. The synthetic controls closely reproduce the treated regions' pre-policy employment growth and sectoral structure, except that no combination of donors can match the very high mining share of the Kangwon coal fields; the synthetic Kangwon instead matches its high share of employment in resource-based manufacturing and its low population density. The pre-policy root mean squared prediction error of log employment is 0.011 for Kangwon, 0.014 for Mungyeong and 0.006 for the Ruhr.",
          ],
          table: {
            id: "tab-balance",
            caption: "Table 2. Pre-policy predictor balance: treated labour markets and synthetic controls",
            columns: ["Predictor", "Kangwon", "Synthetic Kangwon", "Mungyeong", "Synthetic Mungyeong", "Ruhr", "Synthetic Ruhr"],
            rows: [
              ["Employment growth, pre-period (% per year)", "1.2", "1.3", "0.8", "0.9", "−0.3", "−0.3"],
              ["Manufacturing share (%)", "9.4", "13.8", "14.6", "15.1", "21.7", "22.4"],
              ["Construction share (%)", "6.1", "6.4", "7.2", "7.0", "5.9", "6.1"],
              ["Public sector share (%)", "8.8", "9.6", "10.4", "10.1", "7.4", "7.6"],
              ["Population aged 15–29 (%)", "31.5", "30.2", "28.9", "28.4", "17.1", "17.4"],
              ["Secondary education or above (%)", "34.2", "35.0", "38.6", "38.1", "81.5", "82.3"],
              ["Population density (persons per km²)", "142", "138", "205", "214", "1,416", "1,392"],
              ["Pre-period RMSPE, log employment", "—", "0.011", "—", "0.014", "—", "0.006"],
            ],
            note: "Pre-policy averages over 1981–1988 (Korea) and 1999–2006 (Ruhr). For the Ruhr, secondary education refers to the share of employees with a vocational or academic qualification. RMSPE is the root mean squared prediction error of log employment over the eight pre-policy years. The largest donor weights are Yeongju, Hongcheon and Gimcheon labour markets for Kangwon; Sangju and Yeongcheon for Mungyeong; and Salzgitter, Ludwigshafen and Bremerhaven for the Ruhr.",
          },
        },
        {
          id: "strategy-inference",
          heading: "6.2 Inference",
          paragraphs: [
            "We conduct inference by permutation [2][3]. We reassign treatment to each donor unit in turn, estimate its synthetic control from the remaining donors, and compare the ratio of post-policy to pre-policy root mean squared prediction error for the treated unit with the distribution of placebo ratios. The p-value is the share of units, including the treated unit, whose ratio is at least as large as that of the treated unit. With 120 Korean and 250 German donors, the smallest attainable p-values are 1/121 and 1/251. We report pooled estimates as simple averages of the three gaps, with confidence intervals obtained by combining the region-specific permutation distributions.",
          ],
        },
        {
          id: "strategy-workers",
          heading: "6.3 Displaced-worker design",
          paragraphs: [
            "For the worker-level analysis we estimate event-study regressions of earnings and employment on indicators for years relative to displacement, separately for programme participants and non-participants, with worker and calendar-year fixed effects [5][6]. Each displaced miner is matched to non-displaced workers of the same sex, age group and pre-displacement earnings decile in the same country who were employed outside mining in non-mining regions. Participation in programmes is not random, so we compare participants and non-participants within closure cohorts and exploit the fact that the number of programme places available to a cohort was determined by budget allocations and training-centre capacity set before closure dates were known. In Korea, the ratio of training places to displaced miners varied between 0.12 and 0.58 across the 31 closure cohorts; in the Ruhr, the share of separating workers offered a transfer arrangement varied between 0.21 and 0.69 across mine-year cohorts. We use the cohort-level offer rate as an instrument for individual participation, controlling for cohort fixed characteristics including mine size and the local unemployment rate at closure.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We first present the effects of the phase-out on total employment in each region, then the sectoral composition of the losses, and finally the contribution of renewable-energy employment.",
      ],
      subsections: [
        {
          id: "results-employment",
          heading: "7.1 Employment effects",
          paragraphs: [
            "Figure 1 plots the gap in log employment between each treated labour market and its synthetic control from eight years before to ten years after the policy. Before the policy, all three gaps fluctuate within about 1.5 percent of zero. After implementation, employment in each treated region falls steadily below its synthetic counterpart. The decline is fastest in the Kangwon coal fields, where most mines closed within four years and where the gap reaches 9 percent by year five. In Mungyeong and the Ruhr the decline is more gradual, reflecting the staggered timing of mine closures and, in Germany, the transfer of workers between remaining mines and the use of early retirement.",
            "Table 3 summarises the estimates. Ten years after the policy, employment is 11.0 percent below its synthetic counterpart in the Kangwon coal fields, 7.2 percent below in Mungyeong and 8.6 percent below in the Ruhr coal districts, with an average of 8.9 percent. All three gaps are statistically significant under permutation inference: the Kangwon ratio of post- to pre-policy prediction error is the largest among 121 units (p = 0.008), the Mungyeong ratio ranks fourth (p = 0.033) and the Ruhr ratio ranks third among 251 units (p = 0.012). Relative to baseline employment, the ten-year losses correspond to about 13,000 jobs in Kangwon, 3,800 in Mungyeong and 31,100 in the Ruhr districts.",
            "Comparing these totals with the mining jobs eliminated reveals strikingly different implied local multipliers. In the Kangwon coal fields, total employment losses are only about one-third as large as the mining losses in Table 1, because many displaced miners and their families left the region; employment in the remaining population fell much less than the population itself (Section 8). In Mungyeong, total losses are 0.56 times the mining losses. In the Ruhr, by contrast, total losses are about 1.5 times the direct mining losses, consistent with a local multiplier in services and supplier industries similar to estimates for the United States [11][24], and with weaker out-migration in a dense metropolitan region with durable housing [26].",
          ],
          figures: [
            {
              id: "fig-gaps",
              caption: "Figure 1. Gap in log employment between coal-dependent labour markets and their synthetic controls",
              kind: "line",
              xLabels: ["−8", "−7", "−6", "−5", "−4", "−3", "−2", "−1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
              yLabel: "Gap in employment (percent)",
              series: [
                { name: "Kangwon coal fields", values: [0.8, -0.6, 1.1, -0.9, 0.4, -1.2, 0.7, -0.3, -0.9, -3.1, -5.4, -7.2, -8.4, -9.0, -9.6, -10.1, -10.4, -10.8, -11.0] },
                { name: "Mungyeong", values: [-1.3, 0.9, -0.5, 1.4, -1.0, 0.6, -0.8, 0.4, -0.4, -1.6, -2.9, -3.9, -4.8, -5.5, -6.1, -6.5, -6.8, -7.0, -7.2] },
                { name: "Ruhr coal districts", values: [0.4, -0.3, 0.5, -0.6, 0.2, 0.6, -0.4, 0.1, -0.2, -0.9, -1.6, -2.6, -3.7, -4.8, -5.7, -6.6, -7.4, -8.1, -8.6] },
              ],
              marker: 7,
              note: "Gap between the log employment of each treated labour market and that of its synthetic control, multiplied by 100. Event year 0 is 1989 for the Korean regions and 2007 for the Ruhr. The dashed line marks the last pre-policy year.",
            },
          ],
          table: {
            id: "tab-main",
            caption: "Table 3. Synthetic control estimates of the effect of the phase-out on employment (percent)",
            columns: ["Labour market", "Year 1", "Year 3", "Year 5", "Year 10", "Average, years 1–10", "Permutation p-value"],
            rows: [
              ["Kangwon coal fields", "−3.1", "−7.2", "−9.0", "−11.0", "−8.5", "0.008"],
              ["Mungyeong", "−1.6", "−3.9", "−5.5", "−7.2", "−5.2", "0.033"],
              ["Ruhr coal districts", "−0.9", "−2.6", "−4.8", "−8.6", "−5.0", "0.012"],
              ["Average of three regions", "−1.9", "−4.6", "−6.4", "−8.9", "−6.2", "—"],
              ["90% interval, average", "[−3.2, −0.7]", "[−6.7, −2.6]", "[−8.9, −4.0]", "[−11.8, −6.1]", "[−8.4, −4.1]", "—"],
            ],
            note: "Gap in log employment between each treated labour market and its synthetic control, multiplied by 100. Permutation p-values are the share of units (treated and placebos) whose ratio of post- to pre-policy root mean squared prediction error is at least as large as that of the treated unit; 120 Korean and 250 German donor units. Intervals for the average combine the region-specific permutation distributions.",
          },
        },
        {
          id: "results-sectors",
          heading: "7.2 Sectoral composition of the losses",
          paragraphs: [
            "To understand where the losses occur, we estimate separate synthetic controls for employment in each major sector, normalised by total baseline employment so that the sectoral gaps sum approximately to the total effect. Table 4 reports the decomposition at year ten. Mining accounts for 6.6 of the 11.0 percent decline in Kangwon, 4.1 of 7.2 percent in Mungyeong and 4.9 of 8.6 percent in the Ruhr. In all three regions, the remaining two-fifths or so of the loss occurs in other sectors: manufacturing, particularly firms supplying mining equipment, explosives and transport services; construction, which contracted as population growth reversed; and retail, hospitality and personal services, which depend on local incomes.",
            "These sectoral patterns support H1. The local service losses are proportionately largest in the Ruhr, where the remaining population is larger and less mobile, and smallest in Kangwon, where much of the adjustment took the form of out-migration of entire households. Public-sector employment, which in all three regions depends mainly on national budget rules, changes little.",
          ],
          table: {
            id: "tab-sectors",
            caption: "Table 4. Sectoral decomposition of the employment gap ten years after the policy (percent of baseline employment)",
            columns: ["Sector", "Kangwon coal fields", "Mungyeong", "Ruhr coal districts"],
            rows: [
              ["Mining", "−6.6", "−4.1", "−4.9"],
              ["Manufacturing (incl. mining suppliers)", "−1.5", "−1.1", "−1.6"],
              ["Construction", "−1.0", "−0.6", "−0.5"],
              ["Retail, hospitality and personal services", "−1.6", "−1.2", "−1.4"],
              ["Business services and transport", "−0.4", "−0.3", "−0.5"],
              ["Public sector, health and education", "0.1", "0.0", "−0.1"],
              ["Renewable energy", "0.0", "0.1", "0.4"],
              ["Total (sum of sectors)", "−11.0", "−7.2", "−8.6"],
            ],
            note: "Each entry is the year-10 gap between sectoral employment in the treated labour market and in a synthetic control estimated for that sector, divided by total baseline employment and multiplied by 100. Renewable energy includes generation from wind, solar, hydro and biomass, manufacture of related equipment and identifiable installation and maintenance services. Totals may differ from the sum of rows because of rounding.",
          },
        },
        {
          id: "results-renewables",
          heading: "7.3 Renewable-energy employment",
          paragraphs: [
            "A central promise of the energy transition is that new clean-energy industries will replace jobs lost in fossil fuels, and coal regions are often proposed as sites for wind, solar and storage investment. Table 4 shows that, ten years after the policy, renewable-energy employment added at most 0.4 percent of baseline employment, in the Ruhr, and essentially nothing in the two Korean regions. For the Korean regions the ten-year window ends in 1999, before significant renewable investment; we therefore also examine longer horizons. By 2019, renewable-energy employment in the Kangwon coal fields, which host several wind farms on former mining land, reached about 0.3 percent of 1988 employment, and in Mungyeong about 0.2 percent. In the Ruhr, renewable employment grew mainly in engineering services and the installation of solar panels, and by 2019 reached 0.6 percent of 2006 employment.",
            "These magnitudes are an order of magnitude smaller than the employment losses, supporting H3. Renewable generation is capital-intensive, and once wind turbines or solar parks are installed they employ few workers. Equipment manufacturing, which is more labour-intensive, did not locate in the treated regions, which lacked the necessary supplier networks and offered no cost advantage. Former mining land and grid connections were valuable for siting renewable generation, but the resulting employment was small.",
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and heterogeneity",
      paragraphs: [
        "The persistence of the employment gaps depends on how workers and households adjust. This section examines population, participation and commuting responses, and then turns to the experience of displaced miners.",
      ],
      subsections: [
        {
          id: "mech-adjustment",
          heading: "8.1 Population, participation and commuting",
          paragraphs: [
            "Applying the same synthetic control design to the working-age population, we find that by year ten the population aged 15–64 is 24.5 percent below its synthetic counterpart in the Kangwon coal fields, 9.8 percent below in Mungyeong and 3.1 percent below in the Ruhr districts. The employment-to-population ratio of residents therefore rose slightly in Kangwon, where the households that left were disproportionately those of displaced miners, but fell by about 3.4 percentage points in the Ruhr, where most displaced workers and their families stayed. These differences mirror the contrast between the low-density, isolated Korean coal towns, in which housing had been provided by mining companies and had little value once mines closed, and the dense Ruhr agglomeration, in which home ownership and family ties discouraged mobility and in which jobs elsewhere in the metropolitan area were accessible by commuting.",
            "Commuting partly cushioned the shock in the Ruhr. The number of residents of the treated districts working elsewhere in the Ruhr rose by about 6 percent relative to the synthetic control, offsetting roughly one-fifth of the decline in local employment for residents. In the Korean regions, the remoteness of the coal fields made commuting to growing labour markets impractical. Heterogeneity across municipalities within the treated regions reinforces this interpretation: within the Kangwon coal fields, the employment decline was largest in Taebaek and Jeongseon, where mining shares exceeded 45 percent, and smallest in Yeongwol, whose economy was more diversified.",
          ],
        },
        {
          id: "mech-workers",
          heading: "8.2 Displaced miners and active labour market programmes",
          paragraphs: [
            "Figure 2 shows the earnings of displaced miners relative to matched non-displaced workers, by years since displacement, pooled across countries and separately for programme participants and non-participants. Earnings fall by more than 60 percent in the year of displacement and recover only partially. Participants recover faster in the first two years, reflecting shorter non-employment, but from year three onwards the two groups converge to a similar persistent loss of about 20 percent of pre-displacement earnings, in line with the long-run losses estimated for displaced workers in the United States [5][7] and for workers affected by environmental regulation [17].",
            "Table 5 reports instrumental-variable estimates of the effect of participation, using the cohort-level offer rate as an instrument. In Korea, participation reduces months of non-employment in the three years after displacement from 14.8 to 10.1; in the Ruhr, from 9.6 to 6.9. The first-stage F-statistics are 41 and 36. However, the wage on re-employment is 15.2 percent below the pre-displacement wage for Korean non-participants and 14.6 percent below for participants, and 14.1 versus 13.8 percent for Ruhr workers; the differences are small and statistically insignificant. The pattern supports H4: programmes accelerated re-employment, but did not restore the mining wage premium. Given evidence that longer non-employment reduces re-employment wages [16], one might have expected programmes that shorten spells to reduce wage losses; our results suggest that in this setting wage losses reflect the loss of industry-specific rents rather than skill depreciation during non-employment.",
            "Among participants, effects are larger for younger miners. For those aged under 40 at displacement, programme participation shortens non-employment by 6.1 months in Korea and 3.8 months in the Ruhr, compared with 2.9 and 1.7 months for those aged 40 and over. Older participants were also more likely to move into low-wage service occupations, consistent with the difficulty of transferring mining skills late in the career.",
          ],
          figures: [
            {
              id: "fig-earnings",
              caption: "Figure 2. Earnings of displaced miners relative to matched non-displaced workers, by programme participation",
              kind: "line",
              xLabels: ["−3", "−2", "−1", "0", "1", "2", "3", "4", "5", "6", "7", "8"],
              yLabel: "Earnings relative to matched workers (percent)",
              series: [
                { name: "Programme participants", values: [0.6, -0.4, -1.8, -58.4, -33.1, -24.6, -21.8, -20.9, -20.3, -19.8, -19.5, -19.2], lower: [-1.4, -2.4, -3.9, -61.2, -36.0, -27.3, -24.5, -23.7, -23.2, -22.8, -22.6, -22.5], upper: [2.6, 1.6, 0.3, -55.6, -30.2, -21.9, -19.1, -18.1, -17.4, -16.8, -16.4, -15.9] },
                { name: "Non-participants", values: [0.3, -0.7, -2.2, -64.7, -42.5, -29.9, -23.6, -21.7, -20.8, -20.1, -19.9, -19.6], lower: [-1.5, -2.5, -4.1, -67.1, -45.0, -32.3, -26.0, -24.2, -23.4, -22.8, -22.7, -22.5], upper: [2.1, 1.1, -0.3, -62.3, -40.0, -27.5, -21.2, -19.2, -18.2, -17.4, -17.1, -16.7] },
              ],
              marker: 2,
              note: "Event-study coefficients from regressions of annual earnings (including zeros) on years relative to displacement, with worker and calendar-year fixed effects, relative to matched non-displaced workers, pooled across the Korean and German samples with country-specific year effects. Shaded bands are 95 percent confidence intervals based on standard errors clustered by closure cohort. Year 0 is the year of displacement.",
            },
          ],
          table: {
            id: "tab-almp",
            caption: "Table 5. Active labour market programmes and outcomes of displaced miners",
            columns: ["Outcome", "Korea: non-participants", "Korea: participants", "Korea: IV effect", "Ruhr: non-participants", "Ruhr: participants", "Ruhr: IV effect"],
            rows: [
              ["Months non-employed, years 1–3", "14.8", "10.1", "−4.7*** (1.3)", "9.6", "6.9", "−2.7*** (0.8)"],
              ["Employed in year 3 (%)", "71.2", "79.5", "8.3** (3.4)", "80.4", "86.1", "5.7** (2.6)"],
              ["Re-employment wage vs. pre-displacement (%)", "−15.2", "−14.6", "0.6 (1.9)", "−14.1", "−13.8", "0.3 (1.6)"],
              ["Earnings loss, year 5 (%)", "−21.0", "−20.1", "0.9 (2.2)", "−20.5", "−20.6", "−0.1 (1.8)"],
              ["Moved to another region by year 5 (%)", "48.3", "44.7", "−3.6 (3.1)", "11.2", "9.8", "−1.4 (1.9)"],
              ["First-stage F-statistic", "—", "—", "41", "—", "—", "36"],
              ["Workers", "14,500", "6,900", "21,400", "4,900", "3,700", "8,600"],
            ],
            note: "Columns 1–2 and 4–5 report means for non-participants and participants. IV effects instrument individual participation with the closure-cohort offer rate (ratio of programme places to displaced workers), controlling for age, tenure, pre-displacement earnings, mine size and local unemployment at closure. Re-employment wage is the average monthly (Korea) or daily (Germany) wage in the first full year of re-employment relative to the pre-displacement wage. Standard errors clustered by closure cohort in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.1.",
          },
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 shows that our regional estimates are robust to alternative estimators, donor pools and definitions of the treated labour markets. The augmented synthetic control method of Ben-Michael, Feller and Rothstein {22}, which corrects for imperfect pre-treatment fit with an outcome model, yields year-ten gaps of 10.4, 7.5 and 8.3 percent. This correction matters most for Kangwon, whose mining share cannot be matched by the donor pool. Synthetic difference-in-differences [23] gives similar estimates. Restricting the donor pool to municipalities or districts at least 100 kilometres from the treated region, to address possible spillovers from migration, slightly increases the estimated losses.",
        "Leave-one-out estimates, which drop each donor with positive weight in turn, produce year-ten gaps within narrow ranges. Defining the treated labour markets more broadly to include adjacent municipalities with lower mining shares reduces the estimated effects, as expected if the shock is diluted, but they remain significant. Using population rather than employment as the denominator does not change the qualitative conclusions. Finally, placebo-in-time tests that assign the policy to four years before its actual date find no significant gaps in any region.",
        "For the worker-level results, two concerns are differential transitions into uncovered employment and selection in the instrument. In Korea, where the pension records exclude small firms and self-employment, we use the Coal Industry Rationalisation Agency's follow-up survey of a subsample of 2,100 displaced miners, which records employment in any job; non-employment reductions from participation in this subsample are similar to those in the administrative data. To probe the exclusion restriction, we show that the cohort offer rate is uncorrelated with pre-displacement earnings growth and with the local unemployment rate at closure, conditional on controls.",
      ],
      table: {
        id: "tab-robust",
        caption: "Table 6. Robustness of the year-ten employment gap (percent)",
        columns: ["Specification", "Kangwon coal fields", "Mungyeong", "Ruhr coal districts"],
        rows: [
          ["Baseline synthetic control", "−11.0", "−7.2", "−8.6"],
          ["Augmented synthetic control", "−10.4", "−7.5", "−8.3"],
          ["Synthetic difference-in-differences", "−10.7", "−6.9", "−8.8"],
          ["Donors at least 100 km away", "−11.6", "−7.8", "−9.1"],
          ["Leave-one-out, range", "[−11.9, −10.1]", "[−8.1, −6.4]", "[−9.3, −8.0]"],
          ["Broader labour-market definition", "−8.1", "−5.4", "−6.2"],
          ["Placebo policy four years earlier", "0.7", "−0.9", "0.4"],
        ],
        note: "Each entry is the year-ten gap in log employment between the treated labour market and its synthetic control, multiplied by 100. The broader definition adds adjacent municipalities or districts with mining shares between 1 and 5 percent. The placebo assigns the policy to 1985 (Korea) and 2003 (Ruhr) and reports the gap six years later, before the actual policy; none of the placebo gaps is significant at the 10 percent level under permutation inference.",
      },
    },
    {
      id: "discussion",
      heading: "10. Discussion and policy implications",
      paragraphs: [
        "Our findings have several implications for the design of coal phase-outs now under way in many countries, including Korea's plans to close its remaining state-owned mines and its coal-fired power plants. First, the regional costs of phase-outs are large and persistent. Employment losses of 7 to 11 percent a decade after implementation are comparable to the effects of the largest trade shocks on local labour markets [9][10], and they occurred despite substantial national transfers. Policy makers should plan for adjustment over decades rather than years.",
        "Second, the expectation that renewable energy will replace lost coal jobs in the same places is not supported by our evidence. Clean-energy investment may be desirable on environmental grounds, and former mining land may be well suited for it, but it is unlikely to be a significant source of local employment. Regional policies that aim to diversify local economies, improve transport links to growing labour markets or support mobility are likely to be more effective than relying on renewables for jobs. The evidence on place-based policies suggests that large, sustained investments can have lasting effects [20], but also that they are costly and that their benefits depend on local conditions [21].",
        "Third, the form of adjustment matters for welfare. In Kangwon, out-migration limited the decline in local employment rates but hollowed out the coal towns, leaving an older population and a shrinking tax base. In the Ruhr, workers stayed but local employment rates fell. Neither adjustment is costless, and policy should consider both the welfare of those who leave and of those who stay. The Ruhr's more generous worker protections, including early retirement and the absence of compulsory redundancies, slowed the pace of job loss but did not prevent it.",
        "Fourth, active labour market programmes for displaced workers are worthwhile, since they shorten non-employment and reduce the fiscal costs of benefits, but they should not be expected to restore workers' previous earnings. The loss of the mining wage premium, which reflected rents and compensating differentials, cannot be undone by retraining. If governments wish to compensate workers for these losses, wage insurance or direct transfers are better targeted instruments than training alone. Combining programmes that accelerate re-employment with temporary wage subsidies for older workers, whose losses are largest, may offer a reasonable balance.",
        "Our analysis has limitations. The Korean and German episodes occurred two decades apart, and labour markets, social insurance and the structure of regional economies have changed in the meantime. The synthetic control estimates are local to the three regions we study and may not generalise to regions where coal is a smaller part of the economy. And our worker-level analysis covers only miners, not the workers in supplier and service industries who also lost jobs.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Using synthetic control methods, we find that coal phase-out policies reduced employment in coal-dependent local labour markets in Kangwon, North Gyeongsang and the Ruhr by 7 to 11 percent ten years after implementation, with limited offsetting growth in renewable energy. Adjustment occurred through out-migration in the remote Korean coal fields and through lower employment rates and commuting in the Ruhr. Active labour market programmes shortened non-employment spells for displaced miners but did not reduce their wage losses.",
        "As more countries commit to phasing out coal, the experience of these regions offers a sobering lesson: the costs of transition are concentrated and persistent, and neither new energy industries nor training programmes alone can offset them. Future research could study the long-run effects of the regional development policies that followed the phase-outs, such as the Korean casino resort and the conversion of Ruhr mining sites, examine the effects on workers in supplier industries, and assess how the phase-out of coal-fired power generation, rather than mining, affects local labour markets.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data construction and synthetic control implementation",
      paragraphs: [
        "Korean regional data. Municipal statistical yearbooks report employment by industry based on administrative registers and periodic surveys. We benchmark them to the employment counts of the 1980, 1985 and 1990 Population and Housing Censuses by computing, for each municipality and census year, the ratio of census employment to yearbook employment, and interpolating these ratios linearly between census years. From 1994 onwards we use the Census on Establishments, and we splice the two series in 1994 using the ratio of the two measures in that year. Municipal boundaries are harmonised to 2005 by aggregating municipalities that merged, including the 1995 urban–rural consolidations.",
        "German regional data. District-level counts of employees subject to social insurance at 30 June of each year are from the Federal Employment Agency. Marginal part-time employment is excluded. District boundaries are harmonised to those of 2019. Mining-related employment includes employment in coal mining and in RAG's central administration, which is recorded in Essen and Herne; we allocate it to the treated districts in proportion to the location of mines and their workforce.",
        "Synthetic control implementation. Weights are chosen by minimising the weighted distance between treated and synthetic predictors, with predictor weights chosen by cross-validation over the pre-policy period: we fit weights over the first five pre-policy years and choose predictor weights that minimise the prediction error over the last three. Donor labour markets are formed by grouping contiguous untreated municipalities or districts using commuting flows so that the median donor has employment within a factor of two of the treated unit. Results using individual municipalities and districts as donors are similar but have worse pre-policy fit.",
        "Worker-level data. Miners are linked across the Korean datasets by resident registration number, which is replaced by an anonymous identifier in the research data centre. Displacement is defined as the separation from a mine in the year of its closure or in the year before. In Germany, we exclude workers aged 50 or over at separation who entered the adjustment-allowance scheme, since they did not search for new jobs. Matched non-displaced workers are drawn from the same pension or employment records and are required to have been continuously employed in the three years before the displacement year.",
      ],
    },
  ],
};
