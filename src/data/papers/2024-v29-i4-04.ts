// Vol. 29, No. 4 (October 2024) — full text for an existing article (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2024-v29-i4-04",
  acknowledgments:
    "We thank seminar participants at Seoul National University, Hanyang University and the Korea Labor Institute, two anonymous referees and the handling editor for helpful comments. Statistics Korea's Microdata Integrated Service kindly facilitated access to the census and internal migration microdata. All remaining errors are our own.",
  dataAvailability:
    "Population census and internal migration microdata, the Regional Employment Survey and the Survey on Labor Conditions by Employment Type are available to accredited researchers through Statistics Korea's Microdata Integrated Service. Establishment counts come from the Census on Establishments. Code to construct the commuting-zone panel and the shift-share instrument is available from the corresponding author.",
  editorialNote:
    "Da-Hye Song and Sang-Yoon Han show that a 1 percentage point increase in the migrant share of a Korean commuting zone's working-age population lowers the wages of competing local workers by 0.9 percent in the short run but raises them by 1.3 percent after five years, with the largest gains for workers in complementary occupations and the smallest for direct substitutes.",
  refs: [
    /* 1 */ "Card, D. (2001). Immigrant inflows, native outflows, and the local labor market impacts of higher immigration. Journal of Labor Economics, 19(1), 22–64.",
    /* 2 */ "Altonji, J. G., & Card, D. (1991). The effects of immigration on the labor market outcomes of less-skilled natives. In J. M. Abowd & R. B. Freeman (Eds.), Immigration, trade, and the labor market (pp. 201–234). Chicago: University of Chicago Press.",
    /* 3 */ "Borjas, G. J. (2003). The labor demand curve is downward sloping: Reexamining the impact of immigration on the labor market. Quarterly Journal of Economics, 118(4), 1335–1374.",
    /* 4 */ "Ottaviano, G. I. P., & Peri, G. (2012). Rethinking the effect of immigration on wages. Journal of the European Economic Association, 10(1), 152–197.",
    /* 5 */ "Peri, G., & Sparber, C. (2009). Task specialization, immigration, and wages. American Economic Journal: Applied Economics, 1(3), 135–169.",
    /* 6 */ "Jaeger, D. A., Ruist, J., & Stuhler, J. (2018). Shift-share instruments and the impact of immigration. NBER Working Paper No. 24285. Cambridge, MA: National Bureau of Economic Research.",
    /* 7 */ "Goldsmith-Pinkham, P., Sorkin, I., & Swift, H. (2020). Bartik instruments: What, when, why, and how. American Economic Review, 110(8), 2586–2624.",
    /* 8 */ "Borusyak, K., Hull, P., & Jaravel, X. (2022). Quasi-experimental shift-share research designs. Review of Economic Studies, 89(1), 181–213.",
    /* 9 */ "Adão, R., Kolesár, M., & Morales, E. (2019). Shift-share designs: Theory and inference. Quarterly Journal of Economics, 134(4), 1949–2010.",
    /* 10 */ "Dustmann, C., Schönberg, U., & Stuhler, J. (2016). The impact of immigration: Why do studies reach such different results? Journal of Economic Perspectives, 30(4), 31–56.",
    /* 11 */ "Dustmann, C., Schönberg, U., & Stuhler, J. (2017). Labor supply shocks, native wages, and the adjustment of local employment. Quarterly Journal of Economics, 132(1), 435–483.",
    /* 12 */ "Card, D. (1990). The impact of the Mariel boatlift on the Miami labor market. Industrial and Labor Relations Review, 43(2), 245–257.",
    /* 13 */ "Borjas, G. J. (2017). The wage impact of the Marielitos: A reappraisal. ILR Review, 70(5), 1077–1110.",
    /* 14 */ "Blanchard, O. J., & Katz, L. F. (1992). Regional evolutions. Brookings Papers on Economic Activity, 1992(1), 1–75.",
    /* 15 */ "Moretti, E. (2011). Local labor markets. In O. Ashenfelter & D. Card (Eds.), Handbook of Labor Economics (Vol. 4B, pp. 1237–1313). Amsterdam: Elsevier.",
    /* 16 */ "Glaeser, E. L., & Maré, D. C. (2001). Cities and skills. Journal of Labor Economics, 19(2), 316–342.",
    /* 17 */ "Bartik, T. J. (1991). Who benefits from state and local economic development policies? Kalamazoo, MI: W.E. Upjohn Institute for Employment Research.",
    /* 18 */ "Foged, M., & Peri, G. (2016). Immigrants' effect on native workers: New analysis on longitudinal data. American Economic Journal: Applied Economics, 8(2), 1–34.",
    /* 19 */ "Monras, J. (2020). Immigration and wage dynamics: Evidence from the Mexican peso crisis. Journal of Political Economy, 128(8), 3017–3089.",
    /* 20 */ "Lewis, E. (2011). Immigration, skill mix, and capital skill complementarity. Quarterly Journal of Economics, 126(2), 1029–1069.",
    /* 21 */ "Boustan, L. P., Fishback, P. V., & Kantor, S. (2010). The effect of internal migration on local labor markets: American cities during the Great Depression. Journal of Labor Economics, 28(4), 719–746.",
    /* 22 */ "Autor, D. H., Dorn, D., & Hanson, G. H. (2013). The China syndrome: Local labor market effects of import competition in the United States. American Economic Review, 103(6), 2121–2168.",
    /* 23 */ "Cortés, P. (2008). The effect of low-skilled immigration on U.S. prices: Evidence from CPI data. Journal of Political Economy, 116(3), 381–422.",
    /* 24 */ "Manacorda, M., Manning, A., & Wadsworth, J. (2012). The impact of immigration on the structure of wages: Theory and evidence from Britain. Journal of the European Economic Association, 10(1), 120–151.",
    /* 25 */ "Moretti, E. (2004). Estimating the social return to higher education: Evidence from longitudinal and repeated cross-sectional data. Journal of Econometrics, 121(1–2), 175–212.",
    /* 26 */ "Kleemans, M., & Magruder, J. (2018). Labour market responses to immigration: Evidence from internal migration driven by weather shocks. Economic Journal, 128(613), 2032–2065.",
    /* 27 */ { jer: "2023-v28-i2-03" },
    /* 28 */ { jer: "2021-v26-i2-02" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "How local labour markets absorb an inflow of workers is one of the oldest questions in labour economics. A large literature on international immigration has produced estimates that range from sizeable wage losses for competing workers to effects that are indistinguishable from zero [1][3][4][10]. Much of the disagreement stems from differences in identification, in the time horizon over which effects are measured and in how competing workers are defined [10][11]. Far less is known about internal migration, even though in most countries flows of workers between regions are many times larger than international inflows and are a central mechanism of regional adjustment [14][15].",
        "Korea is an instructive setting. Some 7 million people change their address each year, and roughly 2 million of these moves cross the boundary of a local labour market. Over the past two decades these flows have been shaped by forces that are largely external to the destination labour market: the collapse of shipbuilding employment on the southeast coast after 2015, the relocation of central-government ministries to Sejong City from 2012, the dispersal of 153 public institutions to ten Innovation Cities, and the long decline of agricultural and mining employment in many rural counties. Migrants who leave one region tend to follow earlier migrants from the same origin, so that flows into any destination are strongly shaped by historical settlement networks.",
        "We exploit this feature in a shift-share research design. For each commuting zone and year, we predict the inflow of working-age migrants by combining the share of each origin province's earlier migrants who settled in that commuting zone in 1995 with the current national outflow from that origin, excluding flows to the destination itself. The resulting instrument isolates variation in migrant inflows driven by conditions at origin rather than by labour demand at destination, which is the central identification problem in this literature [1][6][7][8]. We implement it on a panel of 160 commuting zones over 2008–2022, combining census and resident-registration migration records with worker-level wage data.",
        "Our central finding is that the effects of migration change sign over time. A 1 percentage point increase in the migrant share of a region's working-age population reduces wages of competing local workers by 0.9 percent in the short run but raises wages by 1.3 percent over a five-year horizon. The short-run decline is what a canonical model with a fixed capital stock and a downward-sloping labour demand curve predicts [3]. The medium-run increase is consistent with complementarity effects dominating once firms adjust capital, new establishments enter and local workers reallocate towards tasks in which they have a comparative advantage [4][5][20].",
        "The effects are heterogeneous across skill groups. Using a classification of occupations based on the overlap between the occupational distributions of migrants and incumbent workers, we find that the largest gains accrue to workers in complementary occupations — supervisory, technical and communication-intensive jobs — whose wages rise by 2.4 percent after five years, while direct substitutes experience the largest short-run losses and the smallest medium-run gains, of 0.3 percent. Establishment entry, investment in local services and the occupational upgrading of incumbents account for much of the medium-run gain.",
        "We contribute to three literatures. First, we add evidence on internal migration to a body of work dominated by international immigration [21][26], and show that the familiar tension between short-run substitution and medium-run complementarity [10][19] also characterises within-country mobility. Second, we apply recent advances in shift-share inference [7][8][9] and address the concern that settlement-based instruments conflate short- and long-run responses [6]. Third, we extend JER research on how Korean regional labour markets adjust to shocks [27][28]. Section 2 describes internal migration in Korea, Section 3 reviews the literature, Section 4 sets out a framework, Sections 5 and 6 describe the data and empirical strategy, Section 7 reports results, Section 8 examines mechanisms and heterogeneity, Section 9 presents robustness checks, and Sections 10 and 11 discuss implications and conclude.",
      ],
    },
    {
      id: "background",
      heading: "2. Internal Migration in Korea",
      paragraphs: [
        "Internal migration has been a defining feature of Korean development. During the period of rapid industrialisation from the 1960s to the 1980s, tens of millions of people moved from rural provinces to Seoul, its surrounding Gyeonggi province and the industrial cities of the southeast. The capital region's share of the national population rose from about 21 percent in 1960 to 43 percent in 1990 and passed 50 percent in 2019. Although gross migration rates have fallen as the population has aged, internal mobility remains high by international standards: in 2022 about 12 percent of residents changed address, and about one in four of these moves crossed a provincial boundary.",
        "Three features of recent migration matter for our design. First, flows are increasingly driven by shocks at origin. The restructuring of the shipbuilding industry in 2015–2017 eliminated more than 100,000 jobs in Geoje, Tongyeong, Ulsan and surrounding areas and triggered large outflows of working-age residents. The decline of coal mining in Gangwon and of agriculture in the southwestern provinces generated persistent outflows of younger workers. Second, migrants concentrate in destinations where earlier migrants from the same origin settled, a pattern that reflects family ties, information networks and regional associations. Third, government relocation policies generated large flows into a small number of destinations; we show below that our results are robust to excluding Sejong and the Innovation Cities.",
        "Table 1 summarises the scale and direction of internal migration over our sample period. Inter-commuting-zone moves by working-age adults averaged about 1.1 million per year. The capital region remained a net recipient throughout, but its net inflow fell sharply in 2012–2017, when Sejong and several Innovation Cities absorbed large numbers of public-sector workers and their families, before rising again after 2018 as young workers moved to Seoul and Gyeonggi. Southeastern industrial commuting zones turned from net recipients into net senders after 2015.",
        "Internal migrants differ from incumbent residents in ways that shape their labour-market effects. They are younger, somewhat more educated on average, and concentrated in a narrower set of occupations: manufacturing production, construction, personal services, sales and junior office work. Because they share language, institutions and in most cases the same educational system as local workers, they are likely to be closer substitutes for incumbents within a given occupation than international immigrants are [4], which makes the presence of medium-run complementarities all the more notable.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Internal migration of working-age adults across commuting zones, 2008–2022",
          columns: ["Period", "Gross moves (thousand per year)", "Migrant share (percent)", "Net flow: capital region", "Net flow: southeast industrial", "Net flow: other regions"],
          rows: [
            ["2008–2011", "1,184", "4.6", "+62", "+9", "−71"],
            ["2012–2014", "1,121", "4.3", "+14", "+6", "−20"],
            ["2015–2017", "1,086", "4.2", "+11", "−38", "+27"],
            ["2018–2020", "1,102", "4.3", "+71", "−42", "−29"],
            ["2021–2022", "1,047", "4.1", "+58", "−35", "−23"],
          ],
          note: "Note: Moves of residents aged 15–64 across the 160 commuting zones, from resident-registration internal migration statistics. Migrant share is the stock of residents who moved into their current commuting zone within the past five years, as a percentage of the working-age population, averaged across commuting zones. Net flows in thousands per year.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "The empirical literature on immigration and local labour markets began with spatial correlations between immigrant shares and wages [2] and natural experiments such as the Mariel boatlift [12]. Card's {12} finding of negligible effects in Miami has been contested by Borjas {13}, who argues that the wages of low-skilled men fell substantially, illustrating how sensitive conclusions are to the choice of comparison groups. National skill-cell approaches find larger negative effects for directly competing workers [3], while models that allow for imperfect substitution between immigrants and natives within skill cells find small or positive effects [4][24].",
        "A key insight of recent work is that the effect of a labour supply shock depends on the horizon. Dustmann, Schönberg and Stuhler {11} show that a policy-induced inflow of Czech commuters into German border regions reduced native wages and employment in the short run, while Monras {19} finds that Mexican immigration induced by the 1995 peso crisis lowered low-skilled wages initially, with effects dissipating as natives relocated. Jaeger, Ruist and Stuhler {6} argue that the standard shift-share instrument confounds short-run and long-run responses when settlement patterns are persistent, and propose controlling for lagged inflows. We follow their approach.",
        "Several mechanisms can generate medium-run gains. Native workers may specialise in communication- and supervision-intensive tasks in which they have a comparative advantage [5][18]; firms may adjust their technology and capital intensity to the local skill mix [20]; and inflows may raise local demand for non-traded services, lowering their prices and stimulating entry [15][23]. Human-capital externalities can also raise productivity in cities that attract skilled workers [16][25].",
        "Evidence on internal migration is scarcer. Boustan, Fishback and Kantor {21} find that Depression-era migrants to US cities displaced some incumbent workers and lowered their earnings, and Kleemans and Magruder {26} use weather-induced migration in Indonesia to show that internal inflows reduce the earnings and employment of incumbents, especially in informal work. Our study adds evidence from a high-income economy with large internal flows, and the shift-share design builds on Bartik's {17} approach and its application to local labour markets [22]. Within the JER, earlier work has studied a policy-induced population relocation [27] and the regional effects of import competition [28].",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a commuting zone in which output is produced with capital and several types of labour that differ in their occupational tasks. Migrants are concentrated in a subset of occupations. In the short run, capital and the number of establishments are fixed, so an inflow of migrants raises the supply of labour in their occupations and lowers the marginal product and wage of incumbents who perform the same tasks. Workers in other occupations may gain if their tasks are complementary to those of migrants, but with fixed capital the overall effect on the average incumbent wage is negative whenever the inflow is concentrated in occupations that make up a large share of local employment.",
        "Over time, three adjustments raise the return to local labour. First, the return to capital rises with the labour force, attracting investment and new establishments until the capital-labour ratio returns towards its previous level; in a constant-returns economy with perfectly elastic capital, the average wage then returns to its initial level [10][15]. Second, incumbents reallocate towards occupations in which migrants are under-represented, raising the wages of those who move and reducing competition for those who remain [5]. Third, if agglomeration economies or human-capital externalities are present, a larger and more diverse workforce raises productivity, so that wages can rise above their initial level [16][25].",
        "These considerations yield three hypotheses. H1: In the short run, an increase in the migrant share reduces the wages of incumbent workers on average. H2: Over a horizon of several years, the wage effect becomes less negative and may turn positive as capital, establishment entry and occupational reallocation respond. H3: Wage effects are most negative in the short run, and least positive in the medium run, for workers in occupations that directly substitute for migrants, and most positive for workers in complementary occupations. We test these hypotheses using local projections at horizons of zero to five years, and examine establishment entry, investment and occupational mobility as mechanisms.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We construct an annual panel of 160 commuting zones over 2008–2022. Commuting zones are defined by clustering the 229 municipalities on the basis of commuting flows in the 2010 Population and Housing Census, following standard procedures, so that most residents live and work within the same zone.",
      ],
      subsections: [
        {
          id: "data-migration",
          heading: "5.1 Migration",
          paragraphs: [
            "Migration flows come from the Internal Migration Statistics compiled by Statistics Korea from resident-registration records, which cover the universe of address changes and record age, sex and origin and destination municipality. We aggregate flows to commuting zones and define the migrant share as the stock of working-age residents (aged 15–64) who moved into the commuting zone from another zone within the previous five years, divided by the working-age population. The treatment variable is the annual change in this share, expressed in percentage points. Its mean across commuting-zone-years is close to zero, but its standard deviation is 0.8 percentage points, and changes exceeding 1 percentage point are common in mid-sized commuting zones.",
            "Historical settlement shares come from the 1995 Population and Housing Census, which records the province of residence five years earlier. For each of the 17 origin provinces, we compute the share of residents who had moved from that origin in 1990–1995 and were living in each commuting zone in 1995. Because these shares predate our sample by more than a decade, they reflect migration networks formed under very different economic conditions.",
          ],
        },
        {
          id: "data-labour",
          heading: "5.2 Wages, Employment and Occupations",
          paragraphs: [
            "Wages and occupations come from the Survey on Labor Conditions by Employment Type, an establishment-based survey of about 33,000 establishments and 970,000 workers per year that records hourly wages, hours, education, age, tenure and two-digit occupation, together with the location of the workplace. Employment rates and the occupational composition of residents come from the Regional Employment Survey, a household survey of about 200,000 households designed to be representative at the municipal level. Establishment counts by industry come from the Census on Establishments.",
            "Our main outcome is the composition-adjusted log hourly wage of incumbent workers in each commuting zone. To ensure that changes in measured wages are not driven by the arrival of migrants themselves, we restrict the wage sample to workers who have lived in the commuting zone for at least five years — information recorded in the survey's residence-history module from 2008 — and regress log wages on age, education, sex and tenure, extracting commuting-zone-by-year effects. Competing workers are defined as incumbents in the same occupations as migrants, as described in Section 8.",
            "Table 2 reports summary statistics. Commuting zones vary greatly in size, from rural zones with fewer than 50,000 working-age residents to the Seoul zone with more than 7 million. The average migrant share is 4.3 percent, and its year-to-year change has a standard deviation of 0.8 percentage points. Incumbent real hourly wages grew by an average of 2.1 percent per year.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Summary statistics, commuting-zone panel, 2008–2022",
              columns: ["Variable", "Mean", "Std. dev.", "10th pct.", "90th pct."],
              rows: [
                ["Working-age population (thousand)", "232", "614", "38", "421"],
                ["Migrant share (percent)", "4.3", "1.9", "2.2", "6.9"],
                ["Annual change in migrant share (pp)", "0.0", "0.8", "−0.9", "1.0"],
                ["Predicted inflow (instrument, pp)", "0.0", "0.5", "−0.6", "0.6"],
                ["Incumbent real hourly wage growth (percent)", "2.1", "2.6", "−0.8", "5.1"],
                ["Employment rate, age 15–64 (percent)", "65.8", "4.7", "59.9", "71.6"],
                ["Manufacturing employment share", "0.19", "0.09", "0.08", "0.31"],
                ["Establishments per 1,000 residents", "71.4", "9.8", "60.2", "83.7"],
                ["Observations (zone-years)", "2,400", "", "", ""],
              ],
              note: "Note: Statistics weighted by working-age population in 2008. Wages deflated by the regional consumer price index. Instrument defined in Section 6.1.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "We estimate local projections of the form ln w_r,t+h − ln w_r,t−1 = β_h · Δm_rt + γ_h · Δm_r,t−1 + X'_r,t−1 δ_h + α_p(r),t + ε_rt,h, where w_rt is the composition-adjusted incumbent wage in commuting zone r and year t, Δm_rt is the change in the migrant share in percentage points, X_r,t−1 contains lagged controls (log population, manufacturing share, share of college graduates and the employment rate), and α_p(r),t are province-by-year fixed effects that absorb regional business cycles and province-level policy. The coefficients β_h trace the response of wages h years after a 1 percentage point increase in the migrant share, for h = 0, …, 5.",
        "Including the lagged change in the migrant share, Δm_r,t−1, follows the recommendation of Jaeger, Ruist and Stuhler {6}. Because settlement patterns are persistent, places that receive many migrants today also received many in the past, and a shift-share instrument that ignores this persistence may pick up the delayed adjustment to earlier inflows. Conditioning on lagged inflows allows β_h to be interpreted as the response to a new inflow, holding constant the history of past inflows.",
      ],
      subsections: [
        {
          id: "instrument",
          heading: "6.1 Shift-Share Instrument",
          paragraphs: [
            "Migrant inflows are endogenous: migrants move to places where labour demand is growing, which biases ordinary least squares estimates of β_h upwards. We instrument Δm_rt with Z_rt = Σ_o s_or,1995 · F_o,t^(−r) / P_r,t−1, where s_or,1995 is the share of 1990–1995 migrants from origin province o who lived in commuting zone r in 1995, F_o,t^(−r) is the national outflow of working-age residents from origin o in year t excluding flows into r, and P_r,t−1 is the working-age population of r. The instrument predicts inflows by distributing origin-specific outflows across destinations according to historical settlement patterns. A second instrument, constructed analogously and lagged one year, is used for Δm_r,t−1.",
            "The validity of the instrument can be understood in two ways [7][8]. If the identifying variation comes from the shares, the requirement is that 1995 settlement patterns are uncorrelated with subsequent shocks to wage growth in destinations, conditional on controls. If it comes from the shocks, the requirement is that origin-specific outflows are as good as randomly assigned relative to destination wage shocks. The outflows we exploit are dominated by events such as the shipbuilding collapse and the decline of mining, which are plausibly unrelated to labour demand in destinations, and the leave-one-out construction excludes flows mechanically linked to the destination itself.",
          ],
        },
        {
          id: "inference",
          heading: "6.2 Inference and Diagnostics",
          paragraphs: [
            "Commuting zones with similar settlement shares receive correlated shocks, which can lead conventional clustered standard errors to understate uncertainty in shift-share designs [9]. We therefore report standard errors that are robust to correlation across commuting zones with similar exposure shares, following Adão, Kolesár and Morales {9}, alongside errors clustered by commuting zone. We also report the Rotemberg weights of Goldsmith-Pinkham, Sorkin and Swift {7}: the five origin provinces with the largest weights — South Gyeongsang, North Jeolla, South Jeolla, Gangwon and North Gyeongsang — together account for 71 percent of the identifying variation, and each yields estimates of the same sign and similar magnitude when used alone.",
            "Pre-trend tests provide further support. Regressing wage growth in the three years before t on the instrument yields small and insignificant coefficients (Figure 1), and the instrument is uncorrelated with lagged changes in the manufacturing share, the college share and house prices. The first stage is strong: a 1 percentage point increase in the predicted inflow raises the actual migrant share by 0.71 percentage points, with a Kleibergen–Paap F statistic of 38.4.",
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
          id: "results-short",
          heading: "7.1 Short-Run Effects",
          paragraphs: [
            "Table 3 reports the first stage and estimates of the short-run effect of migration on incumbent wages, measured over the year of the inflow and the following year (h = 1). The OLS estimate in column (1) is small and positive, consistent with migrants moving to places with strong wage growth. Instrumenting reverses the sign: column (3) shows that a 1 percentage point increase in the migrant share reduces incumbent wages by 0.9 percent in the short run, with a standard error of 0.31. The estimate is robust to the inclusion of the lagged inflow and to the shift-share-robust standard errors in column (4).",
            "The implied short-run inverse elasticity of wages with respect to labour supply is modest. Because migrants account for a disproportionate share of employment in some occupations, the effect on directly competing incumbents is larger, as we show in Section 8. Employment rates of incumbents decline by 0.3 percentage points in the short run, an effect that is marginally significant and that reflects reduced hours and slower hiring rather than layoffs. We find no evidence that the inflow triggered offsetting out-migration of incumbents within the first year, in contrast to some US findings [1][19].",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Migration and incumbent wages: first stage and short-run effects",
              columns: ["", "(1) OLS", "(2) First stage", "(3) IV", "(4) IV, SSR errors", "(5) IV, employment rate"],
              rows: [
                ["Change in migrant share (pp)", "0.21", "", "−0.90***", "−0.90***", "−0.31*"],
                ["", "(0.14)", "", "(0.31)", "(0.34)", "(0.17)"],
                ["Predicted inflow (instrument)", "", "0.71***", "", "", ""],
                ["", "", "(0.11)", "", "", ""],
                ["Lagged change in migrant share", "0.08", "0.32***", "0.12", "0.12", "0.05"],
                ["", "(0.10)", "(0.07)", "(0.18)", "(0.20)", "(0.11)"],
                ["Kleibergen–Paap F", "", "38.4", "", "", ""],
                ["Province × year FE, controls", "Yes", "Yes", "Yes", "Yes", "Yes"],
                ["Observations", "2,240", "2,240", "2,240", "2,240", "2,240"],
              ],
              note: "Note: The dependent variable in columns (1), (3) and (4) is the change in the composition-adjusted log hourly wage of incumbents (×100) between t−1 and t+1; in column (5) it is the change in the incumbent employment rate (pp). Standard errors clustered by commuting zone in parentheses, except column (4), which reports shift-share-robust standard errors. *** p<0.01, ** p<0.05, * p<0.1.",
            },
          ],
        },
        {
          id: "results-dynamics",
          heading: "7.2 Medium-Run Dynamics",
          paragraphs: [
            "Figure 1 traces the wage response over time. The coefficients for the three years before the inflow are close to zero, supporting the identifying assumption. Wages fall in the year of the inflow and reach their trough one year later, at −0.9 percent. They then recover steadily, return to their pre-inflow level after about three years and are 1.3 percent higher than they would otherwise have been five years after the inflow. The medium-run gain is statistically significant at the 5 percent level.",
            "Table 4 reports the corresponding estimates for wages, employment, establishment counts and capital investment. The recovery of wages coincides with a rise in the number of establishments, which increases by 1.8 percent per percentage point of migrant share after five years, and with a rise in investment per worker in manufacturing and services. Employment rates of incumbents recover within two years and are slightly higher after five years. These patterns are consistent with H2: once capital and firms adjust, the larger local workforce raises rather than lowers the return to local labour.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Dynamic effects of a 1 pp increase in the migrant share (IV local projections)",
              columns: ["Horizon h (years)", "Incumbent wages (%)", "Employment rate (pp)", "Establishments (%)", "Investment per worker (%)"],
              rows: [
                ["0", "−0.62** (0.27)", "−0.24 (0.15)", "0.21 (0.30)", "0.4 (1.1)"],
                ["1", "−0.90*** (0.31)", "−0.31* (0.17)", "0.48 (0.36)", "1.6 (1.3)"],
                ["2", "−0.41 (0.36)", "−0.09 (0.19)", "0.87** (0.41)", "3.1** (1.4)"],
                ["3", "0.28 (0.42)", "0.07 (0.21)", "1.22** (0.48)", "3.8** (1.6)"],
                ["4", "0.88* (0.49)", "0.15 (0.23)", "1.57*** (0.55)", "3.5** (1.7)"],
                ["5", "1.30** (0.56)", "0.19 (0.25)", "1.80*** (0.61)", "3.2* (1.8)"],
              ],
              note: "Note: Each cell is a separate IV local projection of the change in the outcome between t−1 and t+h on the change in the migrant share, instrumented as in Table 3. Horizons up to five years use base years 2008–2017. Standard errors clustered by commuting zone in parentheses. *** p<0.01, ** p<0.05, * p<0.1.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Response of incumbent wages to a 1 pp increase in the migrant share",
              kind: "line",
              xLabels: ["−3", "−2", "−1", "0", "1", "2", "3", "4", "5"],
              yLabel: "Percent change in incumbent wages",
              series: [
                {
                  name: "IV estimate",
                  values: [0.12, -0.08, 0.0, -0.62, -0.9, -0.41, 0.28, 0.88, 1.3],
                  lower: [-0.49, -0.66, 0.0, -1.15, -1.51, -1.12, -0.54, -0.08, 0.2],
                  upper: [0.73, 0.5, 0.0, -0.09, -0.29, 0.3, 1.1, 1.84, 2.4],
                },
              ],
              marker: 2,
              note: "Note: IV local-projection estimates with 95 percent confidence intervals; year −1 is the reference period. The dashed line marks the year of the inflow.",
            },
          ],
        },
        {
          id: "results-magnitude",
          heading: "7.3 Magnitudes and Interpretation",
          paragraphs: [
            "How large are these effects? A 1 percentage point increase in the migrant share corresponds to an inflow of about 2,300 working-age adults into a commuting zone of average size, and to roughly 1.2 standard deviations of the annual change in the migrant share. The short-run wage decline of 0.9 percent therefore corresponds to an inverse labour-supply elasticity of roughly −0.9 percent per percentage point, at the lower end of estimates from international immigration [3][11] and consistent with internal migrants being imperfect substitutes for many incumbents.",
            "The medium-run gain of 1.3 percent is economically meaningful. For a typical incumbent worker earning KRW 19,000 per hour, it amounts to about KRW 500,000 per year after five years. Summed over incumbents, the cumulative wage gains over five years exceed the short-run losses by a factor of about two in present value at a 3 percent discount rate. The finding that the average wage rises above its initial level suggests that adjustment involves more than a return of the capital-labour ratio to its previous value, and points to agglomeration effects or occupational upgrading, which we examine next.",
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "To test H3, we classify two-digit occupations by the extent to which migrants are over-represented relative to incumbents. For each occupation we compute the ratio of its share in migrant employment to its share in incumbent employment, using pre-sample data from 2005–2007. Occupations with a ratio above 1.4 — mainly manufacturing production, construction trades, elementary services and sales — are classified as direct substitutes; occupations with a ratio below 0.7 whose tasks involve supervision, technical support or communication with local clients are classified as complementary; the remainder are intermediate. Direct substitutes account for 34 percent of incumbent employment, complementary occupations for 29 percent and intermediate occupations for 37 percent.",
        "Table 5 reports estimates by group. The short-run decline is concentrated among direct substitutes, whose wages fall by 1.7 percent, while wages in complementary occupations barely change. After five years, all three groups gain, but the gains differ sharply: wages rise by 2.4 percent in complementary occupations, by 1.2 percent in intermediate occupations and by only 0.3 percent — statistically indistinguishable from zero — for direct substitutes. Figure 2 summarises these medium-run effects. The pattern by education and age is consistent: college-educated and prime-age incumbents gain most, while incumbents aged 15–29 without a college degree, who compete most directly with young migrants, experience the largest short-run losses.",
        "Three mechanisms account for the medium-run gains. First, establishment entry: the number of establishments rises by 1.8 percent after five years, with entry concentrated in non-traded services such as health care, food services and retail, consistent with increased local demand [15][23]. Second, occupational upgrading: in the Regional Employment Survey, incumbents in commuting zones with larger predicted inflows are more likely to move from substitute into complementary occupations, with the share of incumbents in complementary occupations rising by 0.6 percentage points per percentage point of migrant share after five years, in line with task specialisation [5][18]. Third, capital deepening: investment per worker rises by more than 3 percent in years two to five (Table 4), consistent with firms adjusting capital to a larger labour force [20].",
        "We find limited evidence for two alternative channels. Housing costs rise with migration — rents increase by about 0.6 percent per percentage point after five years — so real wage gains for renters are somewhat smaller than nominal gains, but the pattern of heterogeneity across occupations is unaffected. And the composition adjustment and restriction to incumbents rule out the possibility that wage gains reflect the arrival of higher-paid migrants. Out-migration of incumbents responds only weakly, so that selective departures of low-wage incumbents explain at most a small part of the gain.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Heterogeneous wage effects by occupational group, education and age",
          columns: ["Group", "Share of incumbents", "Short run, h = 1 (%)", "Medium run, h = 5 (%)"],
          rows: [
            ["Direct substitutes", "0.34", "−1.71*** (0.48)", "0.31 (0.71)"],
            ["Intermediate occupations", "0.37", "−0.79** (0.36)", "1.21** (0.58)"],
            ["Complementary occupations", "0.29", "−0.18 (0.33)", "2.42*** (0.69)"],
            ["College graduates", "0.41", "−0.38 (0.30)", "1.92*** (0.62)"],
            ["No college degree", "0.59", "−1.27*** (0.39)", "0.89 (0.60)"],
            ["Age 15–29, no college degree", "0.11", "−2.04*** (0.66)", "0.12 (0.94)"],
            ["Age 30–54", "0.63", "−0.84** (0.33)", "1.49** (0.59)"],
          ],
          note: "Note: IV local-projection estimates of the effect of a 1 pp increase in the migrant share on composition-adjusted incumbent wages in each group, specification as in Table 3. Standard errors clustered by commuting zone in parentheses. *** p<0.01, ** p<0.05, * p<0.1.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Five-year wage effects by occupational group",
          kind: "bar",
          xLabels: ["Direct substitutes", "Intermediate", "Complementary", "All incumbents"],
          yLabel: "Percent change in wages, h = 5",
          series: [
            { name: "Short run (h = 1)", values: [-1.71, -0.79, -0.18, -0.9] },
            { name: "Medium run (h = 5)", values: [0.31, 1.21, 2.42, 1.3] },
          ],
          note: "Note: IV estimates from Table 5 and Table 4 for a 1 pp increase in the migrant share of the working-age population.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a range of robustness checks for the short-run and five-year effects. Results are similar when we exclude Seoul and the capital region, whose size and role as the main destination might make them unusual; when we exclude Sejong and the ten Innovation Cities, whose inflows were driven by government relocation; and when we drop the southeastern shipbuilding commuting zones, which were large senders and whose labour markets were hit by the same shock that drives part of our instrument. Using 1990 rather than 1995 settlement shares, which predate the 1997 financial crisis by a wider margin, yields very similar estimates.",
        "Further checks address the construction of the instrument. Omitting the lagged inflow control, as in traditional shift-share designs, produces a smaller short-run decline and a larger medium-run gain, consistent with the conflation of short- and long-run responses emphasised by Jaeger, Ruist and Stuhler {6}. Using only the outflow from the five provinces with the largest Rotemberg weights, or excluding each in turn, does not change the conclusions. Measuring the migrant share using only moves across provincial boundaries, or defining migrants as those who moved within the past three years rather than five, also produces similar results.",
        "Finally, we examine alternative wage measures. Results are similar for monthly earnings, for wages of full-time workers only and for wages not adjusted for composition, and when we weight commuting zones equally rather than by population. Estimates using the employment-insurance records of a 2 percent sample of insured workers, which allow us to follow the same workers over time, show a short-run decline of 0.8 percent and a five-year gain of 1.2 percent for workers who remained in the same commuting zone.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the short-run and five-year wage effects",
          columns: ["Specification", "Short run, h = 1 (%)", "Medium run, h = 5 (%)", "First-stage F"],
          rows: [
            ["Baseline", "−0.90*** (0.31)", "1.30** (0.56)", "38.4"],
            ["Excluding capital region", "−0.97*** (0.35)", "1.21** (0.60)", "31.2"],
            ["Excluding Sejong and Innovation Cities", "−0.86*** (0.32)", "1.24** (0.58)", "36.9"],
            ["Excluding shipbuilding zones", "−0.93*** (0.33)", "1.35** (0.59)", "33.5"],
            ["1990 settlement shares", "−0.84** (0.34)", "1.38** (0.62)", "29.7"],
            ["No lagged-inflow control", "−0.58** (0.28)", "1.71*** (0.55)", "41.6"],
            ["Inter-provincial moves only", "−1.02*** (0.37)", "1.44** (0.65)", "27.8"],
            ["Unweighted", "−0.81** (0.36)", "1.19* (0.66)", "34.1"],
            ["Worker panel (employment insurance)", "−0.80** (0.34)", "1.20** (0.57)", "38.4"],
          ],
          note: "Note: IV estimates of the effect of a 1 pp increase in the migrant share on incumbent wages. Standard errors clustered by commuting zone in parentheses. *** p<0.01, ** p<0.05, * p<0.1.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our findings have several implications for regional policy in Korea. First, concerns that inflows of workers from declining regions depress wages in receiving areas are justified in the short run but not over a horizon of several years. Policies that impede mobility — for example, place-based subsidies conditional on residence or housing regulations that limit supply in receiving areas — may protect incumbents briefly but at the cost of forgoing medium-run gains in both sending and receiving regions [14][15].",
        "Second, the short-run costs are concentrated among young, less-educated workers in occupations that directly compete with migrants. Targeted support for these workers during the first two years after large inflows — training that facilitates movement into complementary occupations, or temporary wage subsidies — would distribute the gains from mobility more evenly. The occupational upgrading we document suggests that such transitions are feasible and that policy can accelerate them.",
        "Third, the speed of adjustment depends on how quickly firms and capital respond. The medium-run gains coincide with establishment entry and investment, which in turn depend on the availability of commercial space, credit and a predictable regulatory environment. Receiving regions that facilitate business entry are likely to see faster recovery of wages. This is particularly relevant for government relocation projects such as Sejong and the Innovation Cities, whose success in creating self-sustaining local labour markets depends on private investment following public employment.",
        "Our estimates also bear on the design of policies in sending regions. The shipbuilding and mining regions that lost workers have faced declining tax bases and ageing populations. While we do not study sending regions directly, the large and persistent outflows that drive our instrument suggest that mobility has been an important margin of adjustment to regional shocks in Korea, as Blanchard and Katz {14} documented for the United States. Supporting mobility, rather than resisting it, may therefore be part of an effective response to regional decline.",
        "Two caveats apply. Our estimates are local average effects for the commuting zones and origin-specific shocks that drive the instrument, and may not generalise to very large inflows or to the Seoul labour market, which is a special case. And our horizon of five years may not capture longer-run effects on housing markets, public services and the demographic structure of receiving regions.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Using a shift-share design based on historical settlement patterns, we find that internal migration in Korea reduces the wages of competing local workers in the short run but raises them over a five-year horizon. A 1 percentage point increase in the migrant share of a region's working-age population lowers incumbent wages by 0.9 percent after one year and raises them by 1.3 percent after five years. The gains are largest for workers in complementary occupations and smallest for direct substitutes, and they coincide with establishment entry, investment and occupational upgrading.",
        "These results reconcile the short-run substitution effects emphasised by some studies of international immigration with the medium-run complementarities emphasised by others [3][4][10]. Future work could use linked employer–employee data to examine how individual firms adjust their capital and workforce composition after inflows, study the effects of outflows on sending regions, and examine whether the adjustment process has changed as the Korean population ages and internal migration rates decline.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Commuting zones. We cluster the 229 municipalities using a hierarchical algorithm applied to the matrix of commuting flows from the 2010 census, with a dissimilarity cutoff chosen so that on average 89 percent of employed residents work within their commuting zone. The resulting 160 zones range from single large cities to clusters of up to four rural counties. Municipal boundary changes over the sample period are harmonised to 2010 boundaries.",
        "Migrant share. Internal Migration Statistics report each move with origin and destination municipality, age and sex. We aggregate moves of residents aged 15–64 to commuting-zone pairs and construct the five-year stock of in-migrants by summing inflows from other zones over the current and four previous years, net of subsequent moves out of the zone by the same cohort, estimated from the age profile of re-migration in the 2015 census. Results are similar when we use the census measure of residence five years earlier in the census years 2010, 2015 and 2020.",
        "Instrument. Origin-province outflows F_o,t are computed from the same statistics as moves of working-age residents out of province o to any other commuting zone. Settlement shares s_or,1995 are computed from the 2 percent public-use sample of the 1995 census. Leave-one-out outflows exclude moves into the destination zone r. The instrument for the lagged inflow uses F_o,t−1.",
        "Wages. Hourly wages are monthly regular earnings plus overtime pay divided by hours worked, deflated by regional consumer price indices. The composition adjustment regresses log hourly wages of incumbent workers on five-year age bands, four education categories, sex and tenure categories, separately for each year, and retains commuting-zone fixed effects. Occupational groups are defined using the 2005–2007 surveys and held fixed thereafter.",
      ],
    },
  ],
};
