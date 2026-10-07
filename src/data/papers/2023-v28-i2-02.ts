// Vol. 28, No. 2 (April 2023) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2023-v28-i2-02",
  acknowledgments:
    "We thank seminar participants at Hanyang University and the Paris School of Economics, two anonymous referees and the handling Associate Editor for helpful comments. Staff at the Microdata Integrated Service of Statistics Korea provided invaluable assistance with data access. All errors are our own.",
  dataAvailability:
    "Firm-level data from the Survey of Business Activities are available to approved researchers through the Microdata Integrated Service of Statistics Korea. Regional broadband coverage data were compiled from published reports of the Ministry of Science and ICT and the National Information Society Agency. Code to construct the instrument and replicate all results is available from the corresponding author.",
  editorialNote:
    "Min-Jae Choi and Caroline Dubois instrument e-commerce adoption with pre-existing broadband infrastructure and find that a 10 percentage point increase in online penetration raises retail TFP by 3.4 percent, with larger effects for firms with bigger store networks and gains driven by within-firm improvements in inventory turnover and labour productivity rather than reallocation.",
  refs: [
    /* 1 */ "Brynjolfsson, E., & Hitt, L. M. (2000). Beyond computation: Information technology, organizational transformation and business performance. Journal of Economic Perspectives, 14(4), 23–48.",
    /* 2 */ "Bloom, N., Sadun, R., & Van Reenen, J. (2012). Americans do IT better: US multinationals and the productivity miracle. American Economic Review, 102(1), 167–201.",
    /* 3 */ "Foster, L., Haltiwanger, J., & Krizan, C. J. (2006). Market selection, reallocation, and restructuring in the U.S. retail trade sector in the 1990s. Review of Economics and Statistics, 88(4), 748–758.",
    /* 4 */ "Basker, E. (2012). Raising the barcode scanner: Technology and productivity in the retail sector. American Economic Journal: Applied Economics, 4(3), 1–27.",
    /* 5 */ "Goldfarb, A., & Tucker, C. (2019). Digital economics. Journal of Economic Literature, 57(1), 3–43.",
    /* 6 */ "Akerman, A., Gaarder, I., & Mogstad, M. (2015). The skill complementarity of broadband internet. Quarterly Journal of Economics, 130(4), 1781–1824.",
    /* 7 */ "Hjort, J., & Poulsen, J. (2019). The arrival of fast internet and employment in Africa. American Economic Review, 109(3), 1032–1079.",
    /* 8 */ "Olley, G. S., & Pakes, A. (1996). The dynamics of productivity in the telecommunications equipment industry. Econometrica, 64(6), 1263–1297.",
    /* 9 */ "Levinsohn, J., & Petrin, A. (2003). Estimating production functions using inputs to control for unobservables. Review of Economic Studies, 70(2), 317–341.",
    /* 10 */ "Ackerberg, D. A., Caves, K., & Frazer, G. (2015). Identification properties of recent production function estimators. Econometrica, 83(6), 2411–2451.",
    /* 11 */ "Melitz, M. J., & Polanec, S. (2015). Dynamic Olley-Pakes productivity decomposition with entry and exit. RAND Journal of Economics, 46(2), 362–375.",
    /* 12 */ "Syverson, C. (2011). What determines productivity? Journal of Economic Literature, 49(2), 326–365.",
    /* 13 */ "Hortaçsu, A., & Syverson, C. (2015). The ongoing evolution of US retail: A format tug-of-war. Journal of Economic Perspectives, 29(4), 89–112.",
    /* 14 */ "Brynjolfsson, E., Hu, Y. J., & Smith, M. D. (2003). Consumer surplus in the digital economy: Estimating the value of increased product variety at online booksellers. Management Science, 49(11), 1580–1596.",
    /* 15 */ "Goolsbee, A., & Klenow, P. J. (2006). Valuing consumer products by the time spent using them: An application to the Internet. American Economic Review, 96(2), 108–113.",
    /* 16 */ "Cavallo, A. (2017). Are online and offline prices similar? Evidence from large multi-channel retailers. American Economic Review, 107(1), 283–303.",
    /* 17 */ "Fort, T. C. (2017). Technology and production fragmentation: Domestic versus foreign sourcing. Review of Economic Studies, 84(2), 650–687.",
    /* 18 */ "Bertschek, I., Cerquera, D., & Klein, G. J. (2013). More bits – more bucks? Measuring the impact of broadband internet on firm performance. Information Economics and Policy, 25(3), 190–203.",
    /* 19 */ "Forman, C., Goldfarb, A., & Greenstein, S. (2012). The Internet and local wages: A puzzle. American Economic Review, 102(1), 556–575.",
    /* 20 */ "Goldsmith-Pinkham, P., Sorkin, I., & Swift, H. (2020). Bartik instruments: What, when, why, and how. American Economic Review, 110(8), 2586–2624.",
    /* 21 */ "Borusyak, K., Hull, P., & Jaravel, X. (2022). Quasi-experimental shift-share research designs. Review of Economic Studies, 89(1), 181–213.",
    /* 22 */ "Staiger, D., & Stock, J. H. (1997). Instrumental variables regression with weak instruments. Econometrica, 65(3), 557–586.",
    /* 23 */ "Bartelsman, E., Haltiwanger, J., & Scarpetta, S. (2013). Cross-country differences in productivity: The role of allocation and selection. American Economic Review, 103(1), 305–334.",
    /* 24 */ "Hsieh, C.-T., & Klenow, P. J. (2009). Misallocation and manufacturing TFP in China and India. Quarterly Journal of Economics, 124(4), 1403–1448.",
    /* 25 */ "Bresnahan, T. F., Brynjolfsson, E., & Hitt, L. M. (2002). Information technology, workplace organization, and the demand for skilled labor: Firm-level evidence. Quarterly Journal of Economics, 117(1), 339–376.",
    /* 26 */ "De Loecker, J., & Warzynski, F. (2012). Markups and firm-level export status. American Economic Review, 102(6), 2437–2471.",
    /* 27 */ "Holmes, T. J. (2001). Bar codes lead to frequent deliveries and superstores. RAND Journal of Economics, 32(4), 708–725.",
    /* 28 */ { jer: "2022-v27-i1-02" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Few sectors have been transformed by digital technology as visibly as retail. Online sales have grown from a niche channel into a major share of consumer spending in many economies, and the COVID-19 pandemic accelerated this shift further. The consequences for consumers — lower search costs, greater product variety and more competitive prices — have been studied extensively [5][14][16]. Much less is known about the consequences for the productivity of retail firms themselves. Does selling online make retailers more productive, or does it simply shift sales from one channel to another? And if productivity rises, is this because adopting firms improve their operations, or because the market reallocates activity towards firms that were already more productive?",
        "These questions matter for understanding aggregate productivity. Retail and wholesale trade account for a substantial share of employment in most advanced economies, and the acceleration of US productivity growth in the late 1990s was concentrated to a striking extent in retail, driven by information technology and by the entry of more productive establishments [3][13]. Whether the current wave of digitalisation will deliver similar gains depends on how firms use the new technology [1][2]. Korea provides an attractive setting to study this question: it has one of the most developed e-commerce markets in the world, a rich firm-level survey that records online sales separately from total sales, and a history of broadband deployment that generated substantial regional variation in the timing of high-speed internet access.",
        "We estimate the effect of e-commerce penetration on retail-sector productivity using Korean firm-level data over 2010–2022. The main challenge is that adoption of online sales is endogenous: more productive and better-managed firms are more likely to sell online, so a simple correlation between e-commerce and productivity overstates the causal effect. To address this, we exploit pre-existing variation in broadband infrastructure as an instrument for online sales adoption. Regions differed substantially in the share of households covered by very-high-speed fibre networks in 2008, before the main expansion of e-commerce, as a result of a national deployment programme whose sequencing was driven by engineering costs and the location of existing trunk networks. Firms whose stores and customers were located in better-connected regions were exposed to a larger online market when national e-commerce took off.",
        "We find that a 10 percentage point increase in e-commerce penetration, measured as the share of online sales in total sales, raises retail-sector total factor productivity (TFP) by 3.4 percent. The instrumental-variable (IV) estimate is almost twice as large as the ordinary least squares (OLS) estimate, consistent with measurement error in self-reported online sales and with the possibility that firms with temporarily low productivity turn to online channels. The effect is concentrated in firms with larger pre-existing store networks, for which a 10 percentage point increase raises TFP by 5.3 percent, compared with 1.6 percent for firms with smaller networks.",
        "We then investigate the sources of the productivity gains. Productivity gains are driven by within-firm improvements in inventory turnover and labour productivity rather than by reallocation across firms. A 10 percentage point increase in e-commerce penetration raises inventory turnover by 6.1 percent and sales per worker by 4.2 percent, while markups are unaffected. A dynamic Olley–Pakes decomposition shows that more than four-fifths of the aggregate productivity gain associated with e-commerce occurs within continuing firms, with only a small contribution from the reallocation of market share towards more productive firms or from entry and exit. The results are robust to a range of specifications and placebo tests, including tests on pre-period productivity growth, on manufacturing firms in the same regions and on alternative measures of productivity.",
        "The rest of the paper is organised as follows. Section 2 describes the institutional background, Section 3 reviews the related literature and Section 4 develops the hypotheses. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 examines mechanisms and heterogeneity and Section 9 reports robustness checks. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korea invested early and heavily in broadband infrastructure. Following the Korea Information Infrastructure initiative of the late 1990s, asymmetric digital subscriber line services spread rapidly in the early 2000s, and Korea led the OECD in broadband penetration for most of the decade. From 2004 the government promoted the Broadband convergence Network, which aimed to provide very-high-speed connections of 50 to 100 megabits per second through fibre-to-the-home and related technologies. Deployment proceeded unevenly: dense apartment complexes in large cities were connected first because the cost per household was lowest, while many smaller cities and rural counties gained very-high-speed access only in the early 2010s. In 2008, the share of households covered by very-high-speed networks ranged from below 20 percent in some rural counties to above 90 percent in parts of Seoul and the new towns around it.",
        "E-commerce in Korea expanded rapidly from this base. According to Statistics Korea's online shopping survey, online shopping transactions grew roughly eightfold between 2010 and 2022, and their share in total retail sales rose from around 10 percent to around 30 percent, with a particularly sharp increase during the pandemic in 2020–2021. Growth was initially driven by pure online marketplaces, but traditional retailers — department stores, supermarket chains, specialised chains and smaller multi-store firms — increasingly developed their own online channels, often combining online ordering with store pick-up, same-day delivery from local stores and shared inventory systems. By 2022 a majority of medium and large retail firms reported some online sales.",
        "The integration of online and offline channels is central to our analysis. A retailer that sells online can use its stores as fulfilment centres, pool inventory across locations and use data on online orders to forecast demand more precisely. These benefits are larger for firms with many stores, because pooling across more locations reduces the safety stock required to meet a given service level and because a dense store network allows fast delivery to more customers. Such complementarities between information technology and organisational assets have long been emphasised in the literature on IT and productivity [1][25][27].",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper contributes to three strands of literature. The first studies the effects of information technology on firm productivity. Brynjolfsson and Hitt {1} argue that the returns to IT depend on complementary organisational changes, and Bresnahan, Brynjolfsson and Hitt {25} show that IT, workplace organisation and skilled labour are complements. Bloom, Sadun and Van Reenen {2} find that US multinationals obtain higher productivity from IT than other firms in Europe, which they attribute to management practices; related evidence for Korean manufacturing shows that management quality is strongly associated with productivity [28]. Syverson {12} reviews the broader determinants of productivity differences across firms.",
        "The second strand concerns technology and productivity in retail. Foster, Haltiwanger and Krizan {3} show that productivity growth in US retail in the 1990s was driven largely by the entry of more productive establishments of national chains and the exit of less productive single-store firms. Basker {4} finds that the adoption of barcode scanners raised labour productivity in grocery stores by around 4.5 percent, and Holmes {27} shows that barcode technology facilitated more frequent deliveries and larger store formats. Hortaçsu and Syverson {13} document that the growth of e-commerce in the United States has been gradual and that warehouse clubs and supercentres have shaped retail at least as much as online sales. Studies of the consumer side of e-commerce emphasise increased variety and lower prices [14][15][16].",
        "The third strand uses broadband deployment to estimate the effects of internet access. Akerman, Gaarder and Mogstad {6} use the staggered roll-out of broadband in Norway to show that it complements skilled labour and raises firm productivity. Hjort and Poulsen {7} find that the arrival of fast internet in Africa increased employment, particularly in skilled occupations. Forman, Goldfarb and Greenstein {19} show that the internet raised wages mainly in already prosperous regions, and Bertschek, Cerquera and Klein {18} find effects of broadband on firm innovation in Germany. Fort {17} shows that improved communication technology facilitated production fragmentation. We extend this approach by using broadband infrastructure as an instrument for a specific use of the internet — online selling — and by examining how its productivity effects arise.",
      ],
    },
    {
      id: "hypotheses",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a retailer that sells through a network of stores and can also sell online. Its output is the retail service it provides, measured by real gross margin or real sales, and its inputs are labour, capital (including store space) and inventory. Selling online can affect measured TFP through several channels. First, online orders can be fulfilled from pooled inventory, which reduces the stock required per unit of sales and raises inventory turnover. Second, online sales require less labour per transaction than in-store sales, since customers search, select and pay without assistance, raising labour productivity. Third, data from online orders improve demand forecasting and assortment decisions. Each of these channels raises output per unit of input within the firm.",
        "Alternatively, e-commerce might raise aggregate retail productivity mainly by reallocation: online channels intensify competition and allow more productive firms to expand their reach beyond their local markets, while less productive firms shrink or exit [3][23][24]. In this case, the productivity of individual firms would change little, but the market shares of productive firms would rise. The two channels have different policy implications, since within-firm gains depend on firms' ability to adopt and integrate the technology, while reallocation depends on the competitiveness of markets and the ease of entry and exit.",
        "This framework yields three hypotheses. H1: an increase in e-commerce penetration raises the TFP of retail firms. H2: the effect is larger for firms with larger pre-existing store networks, because the gains from pooling inventory and using stores as fulfilment centres increase with the number of stores. H3: the aggregate effect is driven mainly by within-firm improvements in inventory management and labour productivity rather than by reallocation of market shares. We test H1 with the IV design described below, H2 by splitting the sample by pre-period store counts, and H3 using direct measures of operational efficiency and a productivity decomposition [11].",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our main data source is the Survey of Business Activities (SBA) conducted annually by Statistics Korea. The SBA covers all firms with at least 50 employees and paid-in capital of at least KRW 300 million and collects detailed information on sales, costs, employment, assets, inventories, the number of establishments and the use of information technology, including the value of sales made through online channels.",
      ],
      subsections: [
        {
          id: "data-sample",
          heading: "5.1 Sample and variables",
          paragraphs: [
            "We restrict the sample to firms whose main activity is retail trade (Korean Standard Industrial Classification division 47) and observe them over 2010–2022, with data for 2006–2009 used for placebo tests. After removing firms with missing information on key variables, the sample contains 2,146 firms and 19,872 firm-year observations. E-commerce penetration is the share of a firm's sales made through online channels, including its own websites and mobile applications and third-party marketplaces. Average penetration in our sample rose from 6.8 percent in 2010 to 24.5 percent in 2022, broadly in line with the aggregate statistics.",
            "Table 1 reports summary statistics. The average firm in our sample employs 312 workers and operates 21 stores, but the distribution is highly skewed, with a median of 6 stores. Inventory turnover, defined as the cost of goods sold divided by the average inventory stock, averages 9.4 per year. Labour productivity is real sales per worker, deflated by sub-industry retail price indices. The store network of each firm is measured by the number of establishments it reported in 2009, before the sample period, and by their location by municipality (si-gun-gu), which we obtain by linking the SBA to the Census on Establishments.",
          ],
          table: {
            id: "tab-summary",
            caption: "Table 1. Summary statistics, Korean retail firms, 2010–2022",
            columns: ["Variable", "Mean", "Std. dev.", "Median", "Observations"],
            rows: [
              ["E-commerce penetration (% of sales)", "14.9", "19.6", "7.2", "19,872"],
              ["Log TFP (ACF, demeaned by sub-industry)", "0.00", "0.48", "−0.02", "19,872"],
              ["Employees", "312", "804", "118", "19,872"],
              ["Number of stores (2009)", "21.3", "58.7", "6", "2,146"],
              ["Inventory turnover (per year)", "9.4", "7.1", "7.6", "19,872"],
              ["Real sales per worker (KRW million)", "612", "548", "471", "19,872"],
              ["Markup (price over marginal cost)", "1.27", "0.21", "1.24", "19,872"],
              ["Broadband coverage 2008, store-weighted (%)", "68.4", "17.9", "71.0", "2,146"],
              ["Instrument (standardised)", "0.00", "1.00", "−0.08", "19,872"],
            ],
            note: "Sample of retail firms (KSIC 47) in the Survey of Business Activities, 2010–2022. TFP is estimated by the Ackerberg–Caves–Frazer method separately for each two-digit retail sub-industry. Broadband coverage is the share of households covered by very-high-speed (50 Mbps or more) networks in 2008, averaged over the municipalities of each firm's 2009 stores using sales-floor weights.",
          },
        },
        {
          id: "data-tfp",
          heading: "5.2 Measuring productivity",
          paragraphs: [
            "We estimate TFP from value-added production functions using the control-function approach of Ackerberg, Caves and Frazer {10}, which builds on Olley and Pakes {8} and Levinsohn and Petrin {9} and uses intermediate inputs to control for unobserved productivity shocks. Output is real value added, defined as gross margin less purchased services, deflated by sub-industry price indices; inputs are employment and the real capital stock, including the value of leased store space capitalised at market rents. Production functions are estimated separately for each two-digit retail sub-industry, allowing coefficients to differ between, for example, general merchandise stores and specialised food retailers. Because e-commerce may change the composition of a firm's products and prices, we also report results for markups estimated following De Loecker and Warzynski {26}, to check whether measured TFP gains reflect price changes rather than physical efficiency.",
          ],
        },
        {
          id: "data-broadband",
          heading: "5.3 Broadband infrastructure",
          paragraphs: [
            "Data on broadband coverage by municipality come from published reports on the deployment of very-high-speed networks. For each of 229 municipalities we record the share of households covered by networks providing at least 50 megabits per second in 2008. Coverage in 2008 was strongly associated with population density and the share of households living in large apartment complexes, which reduced deployment costs, and with distance to the nearest trunk fibre node. Conditional on these characteristics and on province fixed effects, it was not associated with pre-2008 growth in retail employment or sales, which we verify in Section 9.",
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
          id: "strategy-spec",
          heading: "6.1 Specification",
          paragraphs: [
            "Our main specification relates log TFP of firm i in year t to its e-commerce penetration: log TFP(it) = β · Ecom(it) + α(i) + δ(s,t) + X(it)′γ + ε(it), where Ecom is the share of online sales (as a fraction), α(i) are firm fixed effects, δ(s,t) are sub-industry-by-year fixed effects and X includes controls for firm age and the log number of stores. Firm fixed effects absorb time-invariant differences in productivity, and sub-industry-by-year effects absorb common shocks to each type of retailer, including the national growth of e-commerce in that segment. The coefficient β therefore measures how TFP changes as a firm's online penetration rises relative to other firms in the same sub-industry.",
          ],
        },
        {
          id: "strategy-iv",
          heading: "6.2 Instrument",
          paragraphs: [
            "We instrument e-commerce penetration with the interaction between a firm's pre-existing exposure to broadband infrastructure and the national growth of online retail. Exposure is the average 2008 broadband coverage of the municipalities in which the firm operated stores in 2009, weighted by sales floor area; the national shifter is the share of online shopping in total retail sales in year t, excluding the firm's own sub-industry. The instrument thus has a shift-share structure in which the identifying variation comes from the pre-determined exposure shares [20][21]. The intuition is simple: when national online shopping grows, firms whose stores and customers are located in well-connected regions face a larger potential online market and lower costs of building online channels, since their local customers are already used to shopping online and fast delivery from stores is more valuable.",
            "The exclusion restriction requires that, conditional on fixed effects and controls, 2008 broadband exposure affects the evolution of firm TFP only through e-commerce adoption. The main threat is that well-connected regions experienced faster growth in demand or productivity for other reasons. We address this in three ways. First, we control for interactions between year effects and baseline regional characteristics, including population density, the apartment share and income per capita. Second, we test for pre-trends using 2006–2009 data, before e-commerce took off. Third, we show that the instrument has no effect on the TFP of manufacturing firms located in the same regions, which use broadband but sell little online to consumers. Standard errors are clustered by the municipality of the firm's headquarters, and we report Kleibergen–Paap F statistics for instrument strength [22].",
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
          id: "results-first",
          heading: "7.1 First stage",
          paragraphs: [
            "Figure 1 illustrates the variation underlying the first stage. It plots average e-commerce penetration over 2010–2022 for firms in the top and bottom terciles of 2008 broadband exposure. The two groups had similar penetration in 2010, at 7.4 and 6.1 percent, but diverged steadily as national online shopping grew, reaching 28.9 and 19.3 percent respectively by 2022. The gap widened particularly sharply during the pandemic years 2020–2021, when national online shopping surged. Column (1) of Table 2 reports the corresponding first-stage regression. A one-standard-deviation increase in the instrument raises e-commerce penetration by 3.1 percentage points, and the Kleibergen–Paap F statistic of 38.6 indicates that the instrument is strong.",
          ],
          figures: [
            {
              id: "fig-ecom-trends",
              caption: "Figure 1. E-commerce penetration by 2008 broadband exposure, 2010–2022",
              kind: "line",
              xLabels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
              yLabel: "Online share of sales (%)",
              series: [
                { name: "High broadband exposure (top tercile)", values: [7.4, 8.6, 10.1, 11.6, 13.2, 14.9, 16.4, 18.0, 19.7, 21.3, 25.6, 28.1, 28.9] },
                { name: "Low broadband exposure (bottom tercile)", values: [6.1, 6.7, 7.5, 8.3, 9.2, 10.1, 11.0, 11.9, 12.9, 13.8, 16.6, 18.7, 19.3] },
              ],
              note: "Average share of online sales in total sales for retail firms in the top and bottom terciles of store-weighted 2008 very-high-speed broadband coverage. Survey of Business Activities, balanced panel of firms observed in all years.",
            },
          ],
        },
        {
          id: "results-main",
          heading: "7.2 Effect on productivity",
          paragraphs: [
            "Table 2 reports the main estimates. The OLS estimate in column (2) implies that a 10 percentage point increase in e-commerce penetration is associated with a 1.8 percent increase in TFP. The IV estimate in column (3) is 0.34, implying that a 10 percentage point increase in penetration raises TFP by 3.4 percent. Column (4) adds interactions between year effects and baseline regional characteristics; the estimate is essentially unchanged at 0.33. Column (5) reports the reduced form: a one-standard-deviation increase in the instrument raises TFP by 1.1 percent. The IV estimate is larger than the OLS estimate, which is consistent with attenuation bias from measurement error in self-reported online sales — online shares are often rounded and sometimes exclude sales through third-party platforms — and with the possibility that firms experiencing negative productivity shocks are more likely to experiment with online channels.",
            "The magnitude is economically meaningful but plausible. Between 2010 and 2022 average e-commerce penetration in our sample rose by about 18 percentage points, which on our estimates would account for an increase of about 6 percent in the TFP of the average retail firm, or roughly one-third of measured TFP growth in Korean retail over the period. The estimate is close to the effects of barcode scanners on grocery productivity estimated by Basker {4}, and somewhat smaller than the productivity effects of broadband found for Norwegian firms by Akerman, Gaarder and Mogstad {6}, which encompass a broader set of uses of the internet.",
          ],
          table: {
            id: "tab-main",
            caption: "Table 2. E-commerce penetration and retail TFP: OLS and IV estimates",
            columns: ["", "(1) First stage", "(2) OLS", "(3) IV", "(4) IV + regional trends", "(5) Reduced form"],
            rows: [
              ["Dependent variable", "Ecom share", "Log TFP", "Log TFP", "Log TFP", "Log TFP"],
              ["E-commerce penetration", "", "0.181***", "0.342***", "0.331***", ""],
              ["", "", "(0.038)", "(0.094)", "(0.101)", ""],
              ["Instrument (standardised)", "0.031***", "", "", "", "0.011***"],
              ["", "(0.005)", "", "", "", "(0.003)"],
              ["Firm fixed effects", "Yes", "Yes", "Yes", "Yes", "Yes"],
              ["Sub-industry × year effects", "Yes", "Yes", "Yes", "Yes", "Yes"],
              ["Regional characteristics × year", "No", "No", "No", "Yes", "No"],
              ["Kleibergen–Paap F", "38.6", "", "38.6", "33.2", ""],
              ["Observations", "19,872", "19,872", "19,872", "19,872", "19,872"],
            ],
            note: "E-commerce penetration is measured as a fraction of sales, so coefficients multiplied by 0.1 give the effect of a 10 percentage point increase. The instrument is the store-weighted 2008 broadband coverage of the firm's municipalities interacted with the national online share of retail sales (leave-own-sub-industry-out), standardised. Controls: firm age and log number of stores. Standard errors in parentheses are clustered by headquarters municipality. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
        {
          id: "results-dynamics",
          heading: "7.3 Pre-trends and dynamics",
          paragraphs: [
            "Figure 2 plots coefficients from a regression of log TFP on 2008 broadband exposure interacted with year dummies, with 2009 as the reference year, controlling for firm and sub-industry-by-year fixed effects. Before 2010 the coefficients are small and statistically insignificant, indicating that firms with high and low broadband exposure followed similar productivity trends before e-commerce took off. From 2011 onwards the coefficients rise gradually, tracking the growth of national online shopping, and they increase more steeply in 2020–2022. The absence of pre-trends supports the exclusion restriction, and the gradual build-up of effects is consistent with productivity gains that accumulate as firms reorganise their operations around online channels rather than with a one-off shift in demand.",
          ],
          figures: [
            {
              id: "fig-event",
              caption: "Figure 2. Reduced-form effect of broadband exposure on log TFP by year",
              kind: "line",
              xLabels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
              yLabel: "Effect on log TFP (per SD of exposure)",
              series: [
                {
                  name: "Exposure × year",
                  values: [0.002, -0.003, 0.001, 0, 0.002, 0.004, 0.006, 0.008, 0.009, 0.011, 0.012, 0.014, 0.015, 0.017, 0.022, 0.026, 0.028],
                  lower: [-0.008, -0.013, -0.009, 0, -0.007, -0.005, -0.003, -0.001, 0.000, 0.002, 0.003, 0.004, 0.005, 0.006, 0.010, 0.013, 0.015],
                  upper: [0.012, 0.007, 0.011, 0, 0.011, 0.013, 0.015, 0.017, 0.018, 0.020, 0.021, 0.024, 0.025, 0.028, 0.034, 0.039, 0.041],
                },
              ],
              marker: 3,
              note: "Coefficients on standardised 2008 broadband exposure interacted with year dummies; 2009 is the omitted year. Regressions include firm and sub-industry-by-year fixed effects. Bands show 95 percent confidence intervals based on standard errors clustered by headquarters municipality. The 2006–2009 estimates use the pre-sample panel of firms observed in the Survey of Business Activities.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [],
      subsections: [
        {
          id: "mechanisms-heterogeneity",
          heading: "8.1 Store networks and firm characteristics",
          paragraphs: [
            "Table 3 examines heterogeneity in the effect of e-commerce on TFP. Consistent with H2, the effect is concentrated in firms with larger pre-existing store networks. For firms with more than the median of six stores in 2009, a 10 percentage point increase in e-commerce penetration raises TFP by 5.3 percent; for firms with six or fewer stores the effect is 1.6 percent and not statistically significant. The difference is significant at the 5 percent level. The pattern is similar when we split firms by the geographic dispersion of their stores, and it is stronger in sub-industries in which stores carry broadly similar assortments, such as general merchandise and food, where inventory pooling across stores is most feasible.",
            "By contrast, the effect does not differ significantly by firm age or by whether the firm belongs to a large business group, suggesting that the gains reflect the complementarity between online channels and physical networks rather than access to finance or group resources. Nor is the effect larger for firms in the Seoul metropolitan area once store-network size is controlled for. These results are consistent with the view, emphasised in the IT-productivity literature, that the returns to digital technology depend on complementary assets [1][2][25].",
          ],
          table: {
            id: "tab-hetero",
            caption: "Table 3. Heterogeneity in the effect of e-commerce on retail TFP (IV estimates)",
            columns: ["Sample split", "Group A", "Group B", "Difference (p-value)", "First-stage F (A / B)"],
            rows: [
              ["Stores in 2009: > 6 (A) vs. ≤ 6 (B)", "0.527*** (0.141)", "0.158 (0.112)", "0.031", "27.4 / 19.8"],
              ["Store dispersion: high (A) vs. low (B)", "0.471*** (0.137)", "0.204* (0.118)", "0.118", "24.1 / 21.6"],
              ["Sub-industry: general and food (A) vs. specialised (B)", "0.438*** (0.126)", "0.239** (0.115)", "0.214", "26.3 / 18.7"],
              ["Firm age: ≥ 20 years (A) vs. < 20 years (B)", "0.351*** (0.122)", "0.329** (0.137)", "0.884", "22.8 / 17.4"],
              ["Business group: yes (A) vs. no (B)", "0.362** (0.158)", "0.336*** (0.104)", "0.887", "12.6 / 31.9"],
            ],
            note: "Each row reports IV estimates of the coefficient on e-commerce penetration (as a fraction of sales) for two subsamples, with the specification of column (3) of Table 2. Standard errors clustered by headquarters municipality in parentheses. Store dispersion is the number of distinct provinces in which the firm had stores in 2009. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
        {
          id: "mechanisms-operations",
          heading: "8.2 Inventory turnover and labour productivity",
          paragraphs: [
            "Table 4 reports IV estimates for direct measures of operational efficiency. A 10 percentage point increase in e-commerce penetration raises inventory turnover by 6.1 percent and real sales per worker by 4.2 percent. It also reduces the ratio of inventories to sales by 5.4 percent, while sales floor area per unit of sales falls by 2.9 percent, consistent with stores being used more intensively as both selling and fulfilment points. Employment falls slightly but not significantly, and average wages rise by 1.3 percent, suggesting a modest shift towards more skilled tasks such as logistics and data analysis, in line with the skill complementarity of internet technologies found elsewhere [6][7].",
            "Importantly, e-commerce has no significant effect on markups, estimated following De Loecker and Warzynski {26}. This indicates that the measured TFP gains are not driven by higher prices: if anything, the point estimate on markups is slightly negative, consistent with the increased price transparency of online channels [16]. The gains therefore appear to reflect genuine improvements in the efficiency with which retail firms transform labour, capital and inventory into retail services.",
          ],
          table: {
            id: "tab-mechanisms",
            caption: "Table 4. Operational outcomes: IV estimates of the effect of e-commerce penetration",
            columns: ["Dependent variable (log)", "Coefficient", "Std. error", "Effect of +10 pp (%)", "Kleibergen–Paap F"],
            rows: [
              ["Inventory turnover", "0.594***", "(0.162)", "6.1", "38.6"],
              ["Inventory-to-sales ratio", "−0.555***", "(0.171)", "−5.4", "38.6"],
              ["Real sales per worker", "0.412***", "(0.118)", "4.2", "38.6"],
              ["Sales floor area per unit of sales", "−0.294**", "(0.137)", "−2.9", "36.9"],
              ["Employment", "−0.088", "(0.104)", "−0.9", "38.6"],
              ["Average wage", "0.129*", "(0.071)", "1.3", "38.6"],
              ["Markup", "−0.041", "(0.052)", "−0.4", "38.6"],
            ],
            note: "IV estimates with the specification of column (3) of Table 2. The effect of a 10 percentage point increase in penetration is computed as exp(0.1 × coefficient) − 1. Standard errors clustered by headquarters municipality. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
        {
          id: "mechanisms-reallocation",
          heading: "8.3 Within-firm gains versus reallocation",
          paragraphs: [
            "To assess H3, we decompose the change in aggregate (share-weighted) retail TFP between 2010 and 2022 using the dynamic Olley–Pakes decomposition of Melitz and Polanec {11}, which separates the contributions of within-firm productivity growth among continuing firms, changes in the covariance between market shares and productivity among continuing firms, entry and exit. We then compare high- and low-exposure regions, attributing to e-commerce the difference in each component between regions that is explained by the instrument. Table 5 shows that aggregate retail TFP rose by 17.6 percent over the period, of which 13.9 percentage points reflect within-firm growth. In the IV decomposition, 84 percent of the productivity gain associated with e-commerce occurs within continuing firms, while the reallocation (covariance) term contributes 9 percent and net entry 7 percent.",
            "This contrasts with the US experience of the 1990s, in which most retail productivity growth came from the entry of more productive chain establishments and the exit of less productive independent stores [3]. One reason may be that Korean retail regulation restricts the opening hours and locations of large stores, limiting the scope for reallocation through physical expansion. Another is that online channels allow existing firms to raise productivity without opening new stores. Our results suggest that, at least over the period we study, e-commerce raised retail productivity primarily by changing how existing firms operate rather than by changing which firms operate.",
          ],
          table: {
            id: "tab-decomp",
            caption: "Table 5. Dynamic Olley–Pakes decomposition of retail TFP growth, 2010–2022",
            columns: ["Component", "Aggregate change (log points × 100)", "Share of total (%)", "Attributed to e-commerce (share, %)"],
            rows: [
              ["Within continuing firms", "13.9", "79", "84"],
              ["Covariance (reallocation) among continuing firms", "2.1", "12", "9"],
              ["Entry", "−0.6", "−3", "2"],
              ["Exit", "2.2", "12", "5"],
              ["Total", "17.6", "100", "100"],
            ],
            note: "Decomposition of the change in sales-weighted average log TFP following Melitz and Polanec (2015). The last column decomposes the component of TFP growth predicted by the instrument, computed from IV regressions of each component at the sub-industry-by-region level on regional e-commerce penetration.",
          },
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a series of robustness checks and placebo tests. The estimate is robust to alternative productivity measures: using TFP estimated by the Levinsohn–Petrin method [9], gross-output TFP or simple labour productivity yields similar or larger effects. Excluding the pandemic years 2020–2022, when online shopping surged for reasons unrelated to broadband, reduces the estimate slightly to 0.30 but leaves it highly significant. Excluding firms headquartered in Seoul, which might differ in unobserved ways, or using the headquarters municipality rather than the store network to measure exposure also gives similar results. Using exposure shares based on 2006 rather than 2009 store locations addresses the concern that store networks might have been chosen in anticipation of e-commerce, and leaves the estimate essentially unchanged.",
        "The placebo tests support the validity of the design. First, the instrument constructed with the national online share in 2010–2022 does not predict TFP growth over 2006–2009, before the main expansion of e-commerce. Second, the instrument has no significant effect on the TFP of manufacturing firms located in the same municipalities, which suggests that it does not capture general regional productivity shocks or the effect of broadband on firms that do not sell online to consumers. Third, a placebo instrument that replaces broadband coverage with coverage by an older generation of basic broadband, which was nearly universal by 2008, has no predictive power for e-commerce penetration. Finally, inference based on exposure-robust standard errors that account for the shift-share structure of the instrument [21] yields similar confidence intervals.",
      ],
      table: {
        id: "tab-robustness",
        caption: "Table 6. Robustness checks and placebo tests",
        columns: ["Specification", "Coefficient", "Std. error", "Kleibergen–Paap F", "Observations"],
        rows: [
          ["Baseline IV (Table 2, column 3)", "0.342***", "(0.094)", "38.6", "19,872"],
          ["TFP: Levinsohn–Petrin", "0.318***", "(0.097)", "38.6", "19,872"],
          ["TFP: gross-output production function", "0.297***", "(0.089)", "38.6", "19,872"],
          ["Labour productivity (value added per worker)", "0.405***", "(0.121)", "38.6", "19,872"],
          ["Excluding 2020–2022", "0.301***", "(0.103)", "31.4", "14,936"],
          ["Excluding Seoul-headquartered firms", "0.329***", "(0.112)", "26.7", "13,218"],
          ["Exposure from headquarters municipality only", "0.366***", "(0.118)", "24.9", "19,872"],
          ["Exposure based on 2006 store locations", "0.337***", "(0.099)", "35.1", "18,904"],
          ["Placebo: 2006–2009 TFP growth (reduced form)", "0.002", "(0.004)", "", "6,148"],
          ["Placebo: manufacturing firms in same regions (reduced form)", "0.001", "(0.003)", "", "48,315"],
          ["Placebo instrument: basic broadband (first stage)", "0.004", "(0.006)", "0.4", "19,872"],
        ],
        note: "Rows 2–8 report IV coefficients on e-commerce penetration with the baseline specification and the stated modification. Placebo rows report reduced-form or first-stage coefficients on the standardised instrument. Standard errors clustered by headquarters municipality. *** p < 0.01, ** p < 0.05, * p < 0.10.",
      },
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our findings have several implications. First, the productivity effects of e-commerce on retail are positive and economically significant, but they accrue mainly to firms that can integrate online channels with existing physical assets. Policies to support the digitalisation of small retailers, which are common in Korea and elsewhere, should therefore not focus solely on helping firms open online storefronts. The gains we measure arise from inventory pooling, more intensive use of stores and better demand forecasting, all of which require investment in logistics and information systems and changes in organisation. Support for shared logistics platforms, which allow small firms to pool inventory and fulfilment, might allow them to capture some of the scale advantages enjoyed by multi-store firms.",
        "Second, the dominance of within-firm gains over reallocation suggests that, so far, e-commerce has not driven a large-scale shakeout of Korean retail. This may change as online channels mature, and regulators should monitor whether the increasing concentration of online platforms affects the ability of traditional retailers to benefit from e-commerce. The concentration of gains in firms with large store networks also implies that e-commerce may widen productivity dispersion within retail, which has implications for wages and for the viability of small independent stores. Existing regulations that protect traditional markets and small stores by restricting large-store opening hours may interact with these developments in ways that deserve further study.",
        "Third, our results underline the long-run value of investment in digital infrastructure. The broadband networks deployed in the 2000s, before the main expansion of e-commerce, determined which retail firms could exploit online channels a decade later. Infrastructure decisions thus have consequences for productivity that may be realised only after a long lag and through uses that were not anticipated when the investment was made [5][19].",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "This paper has estimated the effect of e-commerce penetration on the productivity of Korean retail firms over 2010–2022, using pre-existing variation in broadband infrastructure as an instrument for online sales adoption. We find that a 10 percentage point increase in e-commerce penetration raises retail TFP by 3.4 percent, with effects concentrated in firms with larger pre-existing store networks. The gains are driven by within-firm improvements in inventory turnover and labour productivity rather than by reallocation across firms, and they are not accompanied by higher markups. The results are robust to alternative productivity measures, samples and exposure definitions, and placebo tests show no pre-trends and no effects on manufacturing firms in the same regions.",
        "Several avenues for future research remain. Linking firm-level data to transaction data from online platforms would allow a more detailed analysis of how firms use online channels and how this affects their supply chains. Extending the analysis to wholesale trade and logistics would shed light on how e-commerce reshapes the broader distribution sector. Finally, the welfare consequences of e-commerce depend not only on retail productivity but also on consumer gains from variety and convenience and on the distribution of these gains across regions and households, which remain important questions for Korea and other economies with rapidly growing online markets.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Online sales. The Survey of Business Activities asks firms to report the value of sales made through electronic commerce, distinguishing business-to-consumer and business-to-business sales. We use total online sales to consumers divided by total sales. Values above 100 percent or inconsistent with total sales (0.4 percent of observations) are set to missing. Firms that report zero online sales in all years are retained in the sample.",
        "Store networks. We link SBA firms to the Census on Establishments using business registration numbers to obtain the location and floor area of each establishment in 2006 and 2009. Firms with stores in multiple municipalities receive exposure equal to the floor-area-weighted average coverage across municipalities. For the 3 percent of firms whose 2009 floor area is missing, we weight by establishment employment.",
        "Broadband coverage. Municipal coverage of very-high-speed networks in 2008 was compiled from published deployment statistics, which report the number of households passed by networks providing at least 50 megabits per second. Where statistics were reported only for groups of municipalities, we allocate coverage using the share of households living in apartment complexes of more than 300 units, which is the main determinant of deployment in that period.",
        "Productivity estimation. Production functions are estimated for each two-digit retail sub-industry using the Ackerberg–Caves–Frazer two-step procedure with materials (purchased services and utilities) as the proxy variable [10]. The estimated output elasticities of labour range from 0.58 to 0.71 and those of capital from 0.21 to 0.33. Results are similar when we allow production-function coefficients to vary by period (2010–2015 and 2016–2022).",
      ],
    },
  ],
};
