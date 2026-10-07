// Vol. 30, No. 2 (April 2025) — full text for an existing article (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2025-v30-i2-01",
  acknowledgments:
    "We thank seminar participants at Hanyang University, Bocconi University and the Korea Development Institute, two anonymous referees and the handling editor for helpful comments. Staff at the National Tax Service and Statistics Korea kindly answered questions about the business registration and household panel data. All errors are our own.",
  dataAvailability:
    "Municipal business registration counts are published by the National Tax Service; apartment transaction prices are available from the Ministry of Land, Infrastructure and Transport real transaction price system; the KB housing price index is published by KB Kookmin Bank; KLIPS microdata are available from the Korea Labor Institute. Land-use and slope data come from the Ministry of Land, Infrastructure and Transport and the National Geographic Information Institute. Replication code and the constructed municipal panel are available from the corresponding author.",
  editorialNote:
    "Eun-Jung Kim and Roberto Rossi exploit supply-constraint-driven regional variation in Korean housing prices (2006–2022) and find that a 10 percent increase in housing wealth raises new firm registration by 4.7 percent, with stronger effects among collateral-constrained and younger households, concentration in non-tradable services and muted responses where bank credit is hard to reach.",
  refs: [
    /* 1 */ "Evans, D. S., & Jovanovic, B. (1989). An estimated model of entrepreneurial choice under liquidity constraints. Journal of Political Economy, 97(4), 808–827.",
    /* 2 */ "Holtz-Eakin, D., Joulfaian, D., & Rosen, H. S. (1994). Sticking it out: Entrepreneurial survival and liquidity constraints. Journal of Political Economy, 102(1), 53–75.",
    /* 3 */ "Hurst, E., & Lusardi, A. (2004). Liquidity constraints, household wealth, and entrepreneurship. Journal of Political Economy, 112(2), 319–347.",
    /* 4 */ "Adelino, M., Schoar, A., & Severino, F. (2015). House prices, collateral, and self-employment. Journal of Financial Economics, 117(2), 288–306.",
    /* 5 */ "Schmalz, M. C., Sraer, D. A., & Thesmar, D. (2017). Housing collateral and entrepreneurship. Journal of Finance, 72(1), 99–132.",
    /* 6 */ "Corradin, S., & Popov, A. (2015). House prices, home equity borrowing, and entrepreneurship. Review of Financial Studies, 28(8), 2399–2428.",
    /* 7 */ "Saiz, A. (2010). The geographic determinants of housing supply. Quarterly Journal of Economics, 125(3), 1253–1296.",
    /* 8 */ "Mian, A., & Sufi, A. (2011). House prices, home equity-based borrowing, and the US household leverage crisis. American Economic Review, 101(5), 2132–2156.",
    /* 9 */ "Mian, A., Rao, K., & Sufi, A. (2013). Household balance sheets, consumption, and the economic slump. Quarterly Journal of Economics, 128(4), 1687–1726.",
    /* 10 */ "Chaney, T., Sraer, D., & Thesmar, D. (2012). The collateral channel: How real estate shocks affect corporate investment. American Economic Review, 102(6), 2381–2409.",
    /* 11 */ "Kerr, S. P., Kerr, W. R., & Nanda, R. (2022). House prices, home equity and entrepreneurship: Evidence from U.S. Census micro data. Journal of Monetary Economics, 130, 103–119.",
    /* 12 */ "Mian, A., & Sufi, A. (2014). What explains the 2007–2009 drop in employment? Econometrica, 82(6), 2197–2223.",
    /* 13 */ "Glaeser, E. L., Gyourko, J., & Saks, R. E. (2005). Why have housing prices gone up? American Economic Review, 95(2), 329–333.",
    /* 14 */ "Kiyotaki, N., & Moore, J. (1997). Credit cycles. Journal of Political Economy, 105(2), 211–248.",
    /* 15 */ "Fort, T. C., Haltiwanger, J., Jarmin, R. S., & Miranda, J. (2013). How firms respond to business cycles: The role of firm age and firm size. IMF Economic Review, 61(3), 520–559.",
    /* 16 */ "Haltiwanger, J., Jarmin, R. S., & Miranda, J. (2013). Who creates jobs? Small versus large versus young. Review of Economics and Statistics, 95(2), 347–361.",
    /* 17 */ "Hurst, E., & Pugsley, B. W. (2011). What do small businesses do? Brookings Papers on Economic Activity, 2011(2), 73–118.",
    /* 18 */ "Campbell, J. Y., & Cocco, J. F. (2007). How do house prices affect consumption? Evidence from micro data. Journal of Monetary Economics, 54(3), 591–621.",
    /* 19 */ "Jensen, T. L., Leth-Petersen, S., & Nanda, R. (2022). Financing constraints, home equity and selection into entrepreneurship. Journal of Financial Economics, 145(2), 318–337.",
    /* 20 */ "Black, S. E., & Strahan, P. E. (2002). Entrepreneurship and bank credit availability. Journal of Finance, 57(6), 2807–2833.",
    /* 21 */ "Guiso, L., Sapienza, P., & Zingales, L. (2004). Does local financial development matter? Quarterly Journal of Economics, 119(3), 929–969.",
    /* 22 */ "Davidoff, T. (2016). Supply constraints are not valid instrumental variables for home prices because they are correlated with many demand factors. Critical Finance Review, 5(2), 177–206.",
    /* 23 */ "Conley, T. G. (1999). GMM estimation with cross sectional dependence. Journal of Econometrics, 92(1), 1–45.",
    /* 24 */ "Berger, D., Guerrieri, V., Lorenzoni, G., & Vavra, J. (2018). House prices and consumer spending. Review of Economic Studies, 85(3), 1502–1542.",
    /* 25 */ "Goldsmith-Pinkham, P., Sorkin, I., & Swift, H. (2020). Bartik instruments: What, when, why, and how. American Economic Review, 110(8), 2586–2624.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Starting a business requires capital, and most new entrepreneurs cannot borrow against the future profits of a venture that does not yet exist. Banks therefore ask for collateral, and for most households the only asset that can serve as collateral is the family home. A long tradition in economics, beginning with the work of Evans and Jovanovic {1} and Holtz-Eakin, Joulfaian and Rosen {2}, argues that liquidity constraints of this kind keep many would-be entrepreneurs out of business. If this is right, movements in house prices should move entrepreneurship: rising prices relax the borrowing constraint of homeowners and should induce some of them to start firms, while falling prices should do the opposite [4][5].",
        "The empirical relationship between wealth and entrepreneurship is, however, notoriously hard to interpret. Wealthier households differ from poorer ones in ability, risk tolerance and access to networks, and the places where house prices rise fastest are also those where local demand, and hence business opportunities, expand fastest. Hurst and Lusardi {3} showed that the cross-sectional relationship between wealth and business entry is flat over most of the wealth distribution, casting doubt on the importance of liquidity constraints. More recent work using house price variation has found positive effects in the United States, France and Spain [4][5][6], but whether these effects reflect collateral rather than local demand remains debated [11][19].",
        "This paper studies the effect of housing wealth on entrepreneurship in Korea between 2006 and 2022. Korea is an informative setting for three reasons. First, housing accounts for roughly three-quarters of household assets, a much larger share than in most advanced economies, so house prices have first-order effects on household balance sheets. Second, Korean house prices have moved through two pronounced cycles in this period, with large and persistent differences across regions. Third, new businesses must register with the National Tax Service before they begin operating, which yields a complete annual count of business entry for every municipality.",
        "Our identification strategy exploits the fact that the sensitivity of local house prices to nationwide housing demand depends on how easily new housing can be built. Following Saiz {7}, we measure the share of each municipality's land that is unavailable for development because of steep slopes, water bodies or Development Restriction Zones (the Korean greenbelt). When national housing demand rises, prices increase more in municipalities where supply is inelastic. Interacting the undevelopable land share with the national house price cycle yields an instrument for local housing wealth that is plausibly unrelated to local business opportunities, conditional on municipality and year fixed effects and on region-specific trends.",
        "Our central estimate is that a 10 percent increase in housing wealth raises new firm registration by 4.7 percent. The effect is substantially larger than the corresponding ordinary least squares estimate, consistent with measurement error in local housing wealth. Household-level evidence from the Korean Labor and Income Panel Study (KLIPS) shows that the response is stronger among collateral-constrained households, which hold few liquid assets, and among younger households, which have had less time to accumulate savings. The entrepreneurial response is concentrated in non-tradable services such as restaurants, retail and personal services, where start-up capital requirements are modest and the probability of being financed with a home-equity loan is high. It is muted in municipalities where few bank branches operate and the share of small business loans in total lending is low, suggesting that collateral matters only when there is a lender willing to accept it. Placebo tests based on randomly reassigned supply constraints and estimates using an alternative wealth measure based on actual apartment transaction prices confirm these results.",
        "The paper contributes to three literatures. First, it adds to the literature on liquidity constraints and entrepreneurship [1][2][3][19] by providing causal evidence from an economy where housing dominates household balance sheets. Second, it contributes to work on the collateral channel of house prices [8][10][14] by showing how the entrepreneurial response depends on the availability of bank credit. Third, it complements the evidence that housing wealth affects household consumption [18][24], by showing that the same balance-sheet channel also shapes risk-taking. Section 2 describes the institutional background, Section 3 reviews related literature, Section 4 sets out a simple framework, Sections 5 and 6 describe the data and empirical strategy, Sections 7 to 9 present results, mechanisms and robustness checks, and Sections 10 and 11 discuss implications and conclude.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korean housing markets have several distinctive features. Apartments account for more than 60 percent of the housing stock and for an even larger share of transactions, which makes prices unusually comparable across locations and over time. Alongside ordinary purchase and monthly rental contracts, a large share of tenants hold jeonse contracts, under which the tenant deposits a lump sum of typically 50 to 80 percent of the property value with the landlord in lieu of rent and recovers it at the end of the contract. Jeonse deposits are themselves a form of household wealth, and their value moves closely with house prices. In our main analysis we treat housing wealth as the market value of owner-occupied housing and examine jeonse deposits separately.",
        "Business entry in Korea is dominated by very small firms. Around 1 million new businesses register each year, more than 90 percent of them sole proprietorships, and the self-employment rate of about 24 percent of total employment is among the highest in the OECD. Registration with the National Tax Service is mandatory before operations begin and is required to issue tax invoices, so the registration count closely tracks actual entry. Corporations register with both the tax authority and the court registry; we use the tax registration count because it covers both incorporated and unincorporated businesses.",
        "Bank lending to small businesses relies heavily on real estate collateral. Surveys by the Bank of Korea indicate that more than half of small business loans by commercial banks are secured by real estate, and that the share is higher for loans to sole proprietors. Mortgages on owner-occupied housing are subject to loan-to-value (LTV) and debt-to-income (DTI) limits that the authorities have tightened and loosened repeatedly since 2002, often differentially for speculative zones in the Seoul metropolitan area. Loans to self-employed borrowers secured on residential property were for long periods classified as business loans and were subject to looser limits than household mortgages, a feature that made home equity an attractive source of start-up finance.",
        "Housing supply is shaped by geography and regulation. Mountains cover around two-thirds of Korea's land area, and Development Restriction Zones introduced in 1971 encircle Seoul and several other large cities. Although parts of the greenbelt have been released for public housing since the late 1990s, the boundaries are largely fixed, and the share of land within them varies widely across municipalities. These constraints, which were set long before our sample period, form the basis of our identification strategy.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "The idea that wealth affects entry into entrepreneurship because of borrowing constraints was formalised by Evans and Jovanovic {1}, who estimated that liquidity constraints bind for most potential entrepreneurs in the United States. Holtz-Eakin, Joulfaian and Rosen {2} used inheritances as a source of wealth variation and found that receiving an inheritance raises the probability of business survival and the scale of operations. Hurst and Lusardi {3} challenged this view, showing that the relationship between wealth and entry is flat except at the very top of the wealth distribution, and that inheritances received in the future predict entry as well as past inheritances do, which suggests that the inheritance results capture unobserved family characteristics rather than liquidity.",
        "House prices offer a source of wealth variation that is less tied to family background. Adelino, Schoar and Severino {4} showed that US counties with larger increases in house prices experienced larger increases in small business employment, especially in industries that require little start-up capital. Schmalz, Sraer and Thesmar {5} used French administrative data and compared homeowners with renters in the same region to show that increases in collateral value raise the probability of starting a firm and the size of new firms. Corradin and Popov {6} reached similar conclusions using US household data on home equity borrowing. Jensen, Leth-Petersen and Nanda {19} exploited a Danish mortgage reform that allowed homeowners to borrow against home equity and found that entry increased mainly among those with high-quality business ideas.",
        "A competing interpretation is that house prices affect entrepreneurship through local demand rather than collateral. Mian and Sufi {8} and Mian, Rao and Sufi {9} showed that house prices have large effects on household borrowing and consumption, and Mian and Sufi {12} showed that the collapse of house prices after 2006 reduced employment in non-tradable industries through lower local demand. Kerr, Kerr and Nanda {11} used US census microdata and found that the effect of house prices on entry is small once local demand is controlled for, while Berger and coauthors {24} and Campbell and Cocco {18} document large consumption responses to house prices. Separating the collateral channel from the demand channel is therefore the main empirical challenge.",
        "Our identification strategy builds on the use of housing supply elasticities as instruments for house prices. Saiz {7} showed that geographic constraints predict local supply elasticities, and Glaeser, Gyourko and Saks {13} documented the role of regulation in supply constraints. Chaney, Sraer and Thesmar {10} interacted supply elasticities with national interest rates to estimate the effect of real estate collateral on corporate investment. Davidoff {22} argued that supply constraints are correlated with many local demand factors, which threatens the exclusion restriction; we address this concern by controlling for municipality fixed effects, region-specific trends and pre-period characteristics interacted with the national cycle, in the spirit of the shift-share literature [25]. Finally, our results on credit access relate to work showing that local financial development and bank deregulation promote entrepreneurship [20][21], and to evidence that young firms are particularly sensitive to credit conditions over the business cycle [15][16].",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework",
      paragraphs: [
        "Consider a household with initial wealth W, of which housing wealth H is the main component, and an entrepreneurial project that requires capital K and yields a return that depends on the household's ability. In the spirit of Evans and Jovanovic {1}, the household can borrow at most a fraction λ of its pledgeable assets, so that the maximum capital it can deploy is (1 + λ)W. If the optimal scale of the project exceeds this amount, the household either operates at a sub-optimal scale or does not enter. An increase in house prices raises H and therefore the borrowing capacity of homeowners, and induces entry among households whose project was previously constrained [14].",
        "The framework yields four predictions. First, entry should rise with housing wealth (H1). Second, the response should be stronger for households that are more likely to be constrained: those with little liquid wealth relative to the capital required, and younger households that have had less time to accumulate savings (H2). Third, the response should be concentrated in sectors where the required capital is small enough to be financed by a home-equity loan and where entry costs are low, which in Korea means non-tradable services such as food service, retail and personal services (H3). Fourth, because collateral only matters if a lender accepts it, the response should be weaker where access to bank credit is limited (H4).",
        "The local-demand channel shares the first and third predictions: rising house prices raise local spending and hence the profitability of new businesses in non-tradable sectors [12]. It does not, however, predict that the response should be stronger for constrained households within the same municipality, nor that it should depend on the availability of bank credit. Predictions H2 and H4 therefore help to distinguish the collateral channel from the demand channel, and we also compare homeowners with renters, whose borrowing capacity does not rise with house prices but who face the same local demand conditions [5].",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We combine municipal data on business entry and house prices with household panel data, land-use records and banking statistics. The unit of observation in the main analysis is the municipality (si-gun-gu) and year. After harmonising boundaries to their 2022 definitions, the panel covers 226 municipalities over the 17 years from 2006 to 2022, giving 3,842 municipality-year observations.",
      ],
      subsections: [
        {
          id: "data-entry",
          heading: "5.1 Business entry",
          paragraphs: [
            "New firm registrations are taken from the National Tax Service's annual statistics, which report the number of new business registrations by municipality, legal form and industry. We use the total count of new registrations as our main outcome and examine registrations by industry, distinguishing non-tradable services (food and accommodation, retail, personal services, real estate services), tradable sectors (manufacturing and wholesale trade), construction and other services. Over the sample period the mean municipality recorded 4,310 new registrations per year, or 21.4 per 1,000 working-age residents.",
          ],
        },
        {
          id: "data-housing",
          heading: "5.2 Housing wealth",
          paragraphs: [
            "We measure housing wealth as the product of the local house price index and the stock of owner-occupied dwellings, divided by the number of households. House prices come from the KB Kookmin Bank housing price index, which covers all municipalities from 2006 and is based on appraisals of a large sample of apartments and other dwellings. Owner-occupancy rates come from the population and housing census and are interpolated between census years. As an alternative wealth measure, we construct a hedonic price index from the Ministry of Land, Infrastructure and Transport (MOLIT) real transaction price database, which records the price, size, age and location of every apartment transaction since 2006. Real housing wealth per household rose by 38 percent on average between 2006 and 2022, but by 81 percent at the 90th percentile of municipalities and by only 7 percent at the 10th percentile.",
          ],
        },
        {
          id: "data-households",
          heading: "5.3 Household panel and supply constraints",
          paragraphs: [
            "For household-level analysis we use the Korean Labor and Income Panel Study (KLIPS), which follows around 5,000 households and their members annually and records employment status, home ownership, self-reported house value, financial assets and debt. We define entry into entrepreneurship as a transition from wage employment or non-employment to self-employment or business ownership between consecutive waves. We classify a household as collateral-constrained if its liquid financial assets are below the median ratio of liquid assets to annual income, and as young if the household head is under 40. The analysis sample contains 61,280 person-year observations of household heads aged 25 to 64.",
            "The undevelopable land share is constructed from digital elevation and land-use data. Following Saiz {7}, we classify as undevelopable all land with a slope above 15 percent, all water bodies and wetlands, and all land within Development Restriction Zones as designated in 2005, before the start of our sample. The share ranges from 4 percent in some urban municipalities to over 85 percent in mountainous counties. Bank credit access is measured by the number of commercial bank branches per 10,000 residents and the share of small and medium-sized enterprise loans in total bank lending in each municipality in 2005. Table 1 reports summary statistics.",
          ],
          table: {
            id: "table-1",
            caption: "Table 1. Summary statistics",
            columns: ["Variable", "Mean", "Std. dev.", "P10", "P90"],
            rows: [
              ["Municipal panel (N = 3,842)", "", "", "", ""],
              ["New firm registrations per 1,000 working-age residents", "21.4", "6.8", "13.9", "30.2"],
              ["   of which non-tradable services", "11.8", "4.1", "7.2", "17.3"],
              ["Log real housing wealth per household (KRW million)", "5.21", "0.58", "4.49", "6.02"],
              ["Annual change in log housing wealth (%)", "2.1", "5.4", "−3.8", "8.9"],
              ["Undevelopable land share", "0.46", "0.21", "0.17", "0.76"],
              ["Bank branches per 10,000 residents (2005)", "1.62", "0.71", "0.82", "2.61"],
              ["Homeownership rate", "0.58", "0.09", "0.45", "0.70"],
              ["Household panel (N = 61,280)", "", "", "", ""],
              ["Annual entry into entrepreneurship (%)", "2.6", "15.9", "", ""],
              ["Homeowner (%)", "62.4", "48.4", "", ""],
              ["Collateral-constrained (%)", "50.0", "50.0", "", ""],
              ["Head aged under 40 (%)", "27.8", "44.8", "", ""],
            ],
            note: "Note: Municipal panel covers 226 municipalities, 2006–2022. Housing wealth in constant 2020 prices. Household panel from KLIPS, heads aged 25–64. P10 and P90 are the 10th and 90th percentiles.",
          },
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our goal is to estimate the elasticity of business entry with respect to housing wealth. We do so at the municipal level, where business entry is measured comprehensively, and complement the analysis with household-level estimates that exploit within-municipality differences between homeowners and renters and between constrained and unconstrained households.",
      ],
      subsections: [
        {
          id: "strategy-baseline",
          heading: "6.1 Baseline specification",
          paragraphs: [
            "The baseline specification relates the log of new firm registrations in municipality m and year t to the log of housing wealth per household, municipality and year fixed effects, province-specific linear trends and time-varying controls: log Entry(m,t) = β log H(m,t) + α(m) + δ(t) + θ(p)·t + X(m,t)γ + ε(m,t). The controls X include log population, the share of residents aged 25 to 44, the manufacturing employment share in 2005 interacted with year dummies, and the lagged unemployment rate. Because housing wealth is measured with error and is correlated with unobserved local demand, the OLS estimate of β is likely biased, in an a priori ambiguous direction.",
          ],
        },
        {
          id: "strategy-iv",
          heading: "6.2 Instrument",
          paragraphs: [
            "We instrument log housing wealth with the interaction between the municipality's undevelopable land share and the log of the national real house price index. The first stage is log H(m,t) = π [Unavail(m) × log P(t)] + α(m) + δ(t) + θ(p)·t + X(m,t)γ + u(m,t). The main effect of the undevelopable share is absorbed by municipality fixed effects and the national price index by year fixed effects. The instrument thus exploits the differential sensitivity of local housing wealth to national housing demand: when national prices rise, they rise more where supply is constrained [7][10].",
            "The exclusion restriction requires that, conditional on the fixed effects, trends and controls, the interaction affects entry only through housing wealth. The main threat, emphasised by Davidoff {22}, is that supply-constrained municipalities may differ in ways that make their business conditions more sensitive to the national cycle, for example because they are larger, denser or more service-oriented. We address this threat in three ways. First, we control for 2005 values of population density, the service employment share, income per capita and the college-educated share, each interacted with the national price index. Second, we show that the instrument does not predict entry in the years before 2006 and does not predict entry in tradable manufacturing, whose demand is national. Third, we report placebo tests in which supply constraints are randomly reassigned across municipalities.",
          ],
        },
        {
          id: "strategy-household",
          heading: "6.3 Household-level specification",
          paragraphs: [
            "At the household level, we estimate linear probability models of entry into entrepreneurship on the log of local housing wealth interacted with homeownership, together with individual fixed effects, municipality-by-year fixed effects and individual controls for age, education, marital status and household size. Because municipality-by-year fixed effects absorb all local demand shocks, the coefficient on the interaction identifies the effect of housing wealth on homeowners relative to renters facing the same local conditions [5]. We instrument the interaction with the product of the supply-constraint instrument and homeownership status in 2005. Standard errors in the municipal regressions are clustered by municipality; we also report Conley {23} standard errors that allow for spatial correlation within 50 kilometres.",
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
          id: "results-main",
          heading: "7.1 Housing wealth and new firm registration",
          paragraphs: [
            "Table 2 reports the main municipal estimates. The OLS estimate in column 1 implies an elasticity of new firm registration with respect to housing wealth of 0.21. Column 2 reports the first stage: a one-standard-deviation increase in the undevelopable land share raises the elasticity of local housing wealth with respect to the national price index by 0.27, and the first-stage F-statistic of 38.6 indicates a strong instrument. The IV estimate in column 3 is 0.47, with a standard error of 0.12: a 10 percent increase in housing wealth raises new firm registration by 4.7 percent. Adding the pre-period controls interacted with the national cycle (column 4) changes the estimate only slightly, to 0.45.",
            "The IV estimate is more than twice the OLS estimate. Two forces may explain the gap. First, our housing wealth measure is constructed from an appraisal-based index and interpolated ownership rates, and classical measurement error attenuates OLS estimates. Second, house prices may rise in municipalities experiencing an influx of high-income households who are less likely to start small businesses, which would bias OLS downward. Using the MOLIT transaction-based measure, which is less subject to appraisal smoothing, raises the OLS estimate to 0.28, consistent with the measurement error explanation.",
            "To gauge the magnitude, the average annual change in housing wealth across municipalities was 2.1 percent, with a standard deviation of 5.4 percent. Our estimate implies that a one-standard-deviation housing wealth shock changes business entry by about 2.5 percent, or roughly 110 new registrations in the average municipality. Over the 2014–2018 housing boom, when real housing wealth in the Seoul metropolitan area rose by 24 percent, the estimate implies that housing wealth accounted for roughly 11 percent more new registrations than would otherwise have occurred.",
          ],
          table: {
            id: "table-2",
            caption: "Table 2. Housing wealth and new firm registration: municipal estimates",
            columns: ["", "(1) OLS", "(2) First stage", "(3) IV", "(4) IV + controls"],
            rows: [
              ["Log housing wealth", "0.21***", "", "0.47***", "0.45***"],
              ["", "(0.06)", "", "(0.12)", "(0.13)"],
              ["Undevelopable share × log national price", "", "1.29***", "", ""],
              ["", "", "(0.21)", "", ""],
              ["Pre-period controls × national price", "No", "No", "No", "Yes"],
              ["Municipality and year FE", "Yes", "Yes", "Yes", "Yes"],
              ["Province trends", "Yes", "Yes", "Yes", "Yes"],
              ["First-stage F", "", "38.6", "38.6", "31.2"],
              ["Conley SE (50 km)", "(0.07)", "(0.24)", "(0.14)", "(0.15)"],
              ["Observations", "3,842", "3,842", "3,842", "3,842"],
            ],
            note: "Note: Dependent variable is log new firm registrations (columns 1, 3, 4) or log housing wealth per household (column 2). Standard errors clustered by municipality in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
        {
          id: "results-dynamics",
          heading: "7.2 Dynamics and pre-trends",
          paragraphs: [
            "Figure 1 plots the reduced-form relationship between the instrument and entry at different leads and lags. We estimate a specification in which the change in log entry between year t and t + k is regressed on the instrument-predicted change in housing wealth between t − 1 and t. The coefficients for leads of one to three years are small and statistically insignificant, indicating that municipalities with constrained supply did not experience differential entry before housing wealth changed. The response builds over the first two years and stabilises at around 0.5 from the third year, suggesting that it takes time for households to arrange financing and set up businesses but that the effect is not merely a shift in the timing of entry.",
            "We also examine whether housing wealth affects the survival of new firms, since an increase in entry by marginal entrepreneurs could be followed by higher exit. Using registration closures from the same source, we find that a 10 percent increase in housing wealth raises business closures three years later by 1.6 percent, about a third of the increase in entry. Net business formation therefore rises substantially. This pattern is consistent with the view that relaxing collateral constraints brings in some marginal projects but mostly enables viable projects that were previously constrained [2][19].",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Dynamic response of new firm registration to housing wealth shocks",
              kind: "line",
              xLabels: ["t−3", "t−2", "t−1", "t", "t+1", "t+2", "t+3", "t+4"],
              yLabel: "Elasticity of entry",
              series: [
                {
                  name: "IV estimate",
                  values: [0.03, -0.02, 0.0, 0.29, 0.43, 0.49, 0.51, 0.48],
                  lower: [-0.18, -0.22, -0.19, 0.09, 0.2, 0.24, 0.24, 0.19],
                  upper: [0.24, 0.18, 0.19, 0.49, 0.66, 0.74, 0.78, 0.77],
                },
              ],
              marker: 2,
              note: "Note: Elasticities of new firm registration with respect to instrumented housing wealth at different leads and lags, with 95 percent confidence intervals. The dashed line marks the year of the housing wealth shock.",
            },
          ],
        },
        {
          id: "results-household",
          heading: "7.3 Household-level evidence",
          paragraphs: [
            "Table 3 reports the household-level estimates. Column 1 shows that, among homeowners, a 10 percent increase in local housing wealth raises the annual probability of entry into entrepreneurship by 0.12 percentage points relative to renters in the same municipality and year, about 4.6 percent of the baseline entry rate of 2.6 percent. This estimate is close to the municipal elasticity and, because it is identified from within-municipality differences, cannot be explained by local demand shocks. Among renters, there is no significant relationship between local house prices and entry once municipality-by-year fixed effects are removed and replaced with municipality and year effects, which suggests that local demand effects on entry are modest.",
            "Columns 2 to 5 examine heterogeneity. The effect is about three times larger for collateral-constrained homeowners than for unconstrained ones (0.19 versus 0.06 percentage points), and almost three times as large for households headed by someone under 40 as for older households (0.21 versus 0.07). Both differences are statistically significant at the 5 percent level. Expressed as elasticities relative to group-specific baseline entry rates, the response is 0.71 for constrained households and 0.24 for unconstrained ones, and 0.68 for young households and 0.31 for older ones. These patterns support hypothesis H2 and are hard to reconcile with a pure local demand interpretation.",
            "Households that start businesses after a housing wealth gain are significantly more likely to report an increase in mortgage or home-equity debt in the same or the following year. Among new entrepreneurs who are homeowners, the share whose secured debt increased in the entry year is 41 percent in municipalities in the top quartile of instrumented housing wealth growth and 27 percent in the bottom quartile. This direct evidence of borrowing against housing reinforces the collateral interpretation.",
          ],
          table: {
            id: "table-3",
            caption: "Table 3. Housing wealth and entry into entrepreneurship: household estimates (IV)",
            columns: ["", "(1) All", "(2) Constrained", "(3) Unconstrained", "(4) Head < 40", "(5) Head ≥ 40"],
            rows: [
              ["Log housing wealth × homeowner", "1.21***", "1.86***", "0.62**", "2.08***", "0.74***"],
              ["", "(0.34)", "(0.51)", "(0.29)", "(0.63)", "(0.27)"],
              ["Baseline entry rate (%)", "2.6", "2.6", "2.6", "3.1", "2.4"],
              ["Implied elasticity", "0.47", "0.71", "0.24", "0.68", "0.31"],
              ["Individual FE", "Yes", "Yes", "Yes", "Yes", "Yes"],
              ["Municipality × year FE", "Yes", "Yes", "Yes", "Yes", "Yes"],
              ["First-stage F", "44.9", "29.3", "26.8", "18.7", "35.1"],
              ["Observations", "61,280", "30,640", "30,640", "17,036", "44,244"],
            ],
            note: "Note: Coefficients multiplied by 100 (percentage points per unit of log housing wealth). Constrained households have liquid assets below the median ratio to income. Standard errors clustered by municipality in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Table 4 reports IV estimates of the elasticity of new firm registration by industry and by municipal access to bank credit. The entrepreneurial response is concentrated in non-tradable services: the elasticity is 0.79 for food and accommodation, retail and personal services, compared with 0.09 and statistically insignificant for tradable manufacturing and wholesale trade. Construction and other services lie in between. Non-tradable services account for about 55 percent of new registrations but for almost 90 percent of the additional registrations induced by housing wealth.",
        "This concentration is consistent with hypothesis H3, since start-up capital requirements in these sectors, typically KRW 50 to 150 million for a small restaurant or shop according to the Small Enterprise and Market Service, are within the range of a home-equity loan. It is also consistent with the local demand channel, since non-tradable services depend on local spending [12]. Two pieces of evidence favour the collateral interpretation. First, the household-level estimates in Table 3, which absorb local demand, imply a similar overall elasticity. Second, when we split new registrations by the age of the owner, the response in non-tradable services is concentrated among owners under 40, who are more likely to be constrained, while a pure demand shock should raise entry across age groups.",
        "The second panel of Table 4 shows that the response depends on access to bank credit. In municipalities in the top half of the distribution of bank branches per capita in 2005, the elasticity is 0.62; in the bottom half it is 0.14 and statistically insignificant. Splitting by the share of SME loans in local bank lending yields a similar pattern. Because both measures are fixed before the sample period, they are unlikely to be a response to housing market conditions. This result supports hypothesis H4: collateral matters only where there are lenders able and willing to lend against it, echoing evidence that local financial development is a precondition for entrepreneurship [20][21].",
        "Figure 2 summarises the heterogeneity across households, sectors and credit conditions. The common thread is that housing wealth raises entry where the borrowing constraint is most likely to bind and where the financial system can convert higher collateral values into credit. We also examine jeonse deposits. Renters with jeonse contracts experience an increase in their deposit when prices rise at contract renewal, but the deposit cannot be pledged and is often financed by loans. Consistent with this, we find no significant effect of local housing prices on entry among jeonse tenants.",
      ],
      table: {
        id: "table-4",
        caption: "Table 4. Heterogeneity by industry and access to bank credit (IV elasticities)",
        columns: ["Subsample", "Elasticity", "Std. error", "Share of entry (%)", "First-stage F"],
        rows: [
          ["By industry", "", "", "", ""],
          ["Non-tradable services", "0.79***", "(0.18)", "55.1", "38.6"],
          ["Construction", "0.42**", "(0.19)", "8.7", "38.6"],
          ["Other services", "0.27*", "(0.15)", "24.6", "38.6"],
          ["Tradable (manufacturing, wholesale)", "0.09", "(0.14)", "11.6", "38.6"],
          ["By access to bank credit", "", "", "", ""],
          ["High bank branch density", "0.62***", "(0.15)", "", "24.1"],
          ["Low bank branch density", "0.14", "(0.17)", "", "16.9"],
          ["High SME loan share", "0.58***", "(0.16)", "", "21.7"],
          ["Low SME loan share", "0.19", "(0.18)", "", "18.4"],
        ],
        note: "Note: IV estimates of the elasticity of new firm registrations with respect to housing wealth. High and low groups split at the median of the 2005 value. Standard errors clustered by municipality. *** p < 0.01, ** p < 0.05, * p < 0.10.",
      },
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Elasticity of entry with respect to housing wealth, by subgroup",
          kind: "bar",
          xLabels: ["All", "Constrained", "Unconstrained", "Head < 40", "Head ≥ 40", "Non-tradable", "Tradable", "High credit", "Low credit"],
          yLabel: "Elasticity",
          series: [{ name: "IV elasticity", values: [0.47, 0.71, 0.24, 0.68, 0.31, 0.79, 0.09, 0.62, 0.14] }],
          note: "Note: Household-level elasticities (constrained, unconstrained, age groups) from Table 3; municipal elasticities (sectors and credit access) from Table 4. High and low credit refer to bank branch density in 2005.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 5 reports placebo tests. First, we randomly reassign the undevelopable land share across municipalities within provinces 1,000 times and re-estimate the IV specification. The mean placebo coefficient is 0.003, and only 0.4 percent of placebo estimates exceed our baseline estimate of 0.47. Second, we estimate the effect of future housing wealth on current entry, which should be zero if the instrument is valid; the coefficient is −0.04 and insignificant. Third, the instrument does not predict entry in the years 2000 to 2005, before our sample begins, when it is interacted with the national price index of the corresponding years. Fourth, the instrument does not predict entry in tradable manufacturing, as shown in Table 4.",
        "Table 6 reports estimates with alternative measures and samples. Using the MOLIT transaction-based housing wealth measure yields an elasticity of 0.44, very close to the baseline. Using house prices alone rather than housing wealth per household gives 0.41. Excluding the Seoul metropolitan area, where the greenbelt is most extensive and the 2014–2021 boom was strongest, yields 0.51. Excluding the years 2020–2022, when pandemic-related support programmes affected business registration, yields 0.46. Using only the slope-based component of the undevelopable share, which is purely geographic and cannot reflect regulation, gives 0.49 with a first-stage F of 27.4. Measuring entry per working-age resident rather than in logs yields a similar implied elasticity.",
        "We also address the concern that the national house price cycle coincides with other national shocks that differentially affect supply-constrained places. Replacing the national price index with the national mortgage interest rate, following Chaney, Sraer and Thesmar {10}, yields an elasticity of 0.52 with a weaker first stage. Controlling for the interaction of the undevelopable share with national GDP growth, the policy interest rate and the LTV limit applicable in each year leaves the estimate essentially unchanged at 0.46. Finally, the estimates are not sensitive to the choice of clustering: Conley standard errors and two-way clustering by municipality and province-year produce similar confidence intervals.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Placebo tests",
          columns: ["Test", "Coefficient", "Std. error / p-value", "N"],
          rows: [
            ["Baseline IV", "0.47***", "(0.12)", "3,842"],
            ["Randomly reassigned supply constraints (mean of 1,000 draws)", "0.003", "p = 0.004", "3,842"],
            ["Future housing wealth (t + 2) on current entry", "−0.04", "(0.11)", "3,390"],
            ["Pre-period entry, 2000–2005", "0.05", "(0.14)", "1,356"],
            ["Tradable manufacturing entry", "0.09", "(0.14)", "3,842"],
          ],
          note: "Note: The p-value for the random reassignment test is the share of placebo estimates exceeding the baseline estimate. Standard errors clustered by municipality. *** p < 0.01.",
        },
        {
          id: "table-6",
          caption: "Table 6. Robustness: alternative measures, instruments and samples (IV)",
          columns: ["Specification", "Elasticity", "Std. error", "First-stage F"],
          rows: [
            ["Baseline", "0.47***", "(0.12)", "38.6"],
            ["Alternative wealth measure (MOLIT transaction prices)", "0.44***", "(0.11)", "42.3"],
            ["House prices instead of housing wealth", "0.41***", "(0.11)", "40.8"],
            ["Excluding Seoul metropolitan area", "0.51***", "(0.15)", "29.6"],
            ["Excluding 2020–2022", "0.46***", "(0.13)", "36.9"],
            ["Slope-based instrument only", "0.49***", "(0.16)", "27.4"],
            ["National mortgage rate instead of national price", "0.52***", "(0.19)", "14.2"],
            ["Controls for other national shocks × undevelopable share", "0.46***", "(0.13)", "33.5"],
          ],
          note: "Note: Dependent variable is log new firm registrations. Standard errors clustered by municipality. *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results imply that house prices are an important determinant of business formation in Korea. They also suggest that the elasticity we estimate reflects a collateral channel rather than local demand alone: the response is stronger among constrained and younger households within the same municipality, is accompanied by increases in secured borrowing, and disappears where bank credit is scarce. The magnitude of 0.47 lies at the upper end of estimates for the United States [4][11] and is comparable to those for France and Denmark [5][19], consistent with the larger share of housing in Korean household wealth and with the importance of real estate collateral in small business lending.",
        "Three policy implications follow. First, macroprudential tools that restrict borrowing against housing, such as LTV and DTI limits, have side effects on entrepreneurship. When the authorities tighten limits on household mortgages to cool the housing market, they may also restrict start-up finance for constrained households. Distinguishing between loans for consumption or speculation and loans for business investment, for example through dedicated start-up loan schemes with separate limits, could mitigate this side effect.",
        "Second, the concentration of the response in non-tradable services raises questions about the quality of the induced entry. Many of the additional businesses are small restaurants and shops in sectors already characterised by intense competition and high exit rates [17]. Our finding that net entry rises substantially, and that closures rise by about a third of the increase in entry, suggests that most induced entrants survive at least three years, but the long-run productivity contribution of these firms is unclear. Policies that reduce the dependence of start-up finance on real estate collateral, for example credit guarantees based on business plans, could channel finance towards higher-growth projects [15][16].",
        "Third, the muted response in regions with limited access to bank credit implies that house price booms widen regional disparities in business formation. Rural and peripheral municipalities, where both house price growth and bank presence are low, gain little. Expanding the reach of policy lenders and credit guarantee funds in these regions could help to equalise access to start-up finance.",
        "Our analysis has limitations. Registration data do not allow us to observe the size or growth of new firms beyond survival, and KLIPS is too small to study entry by detailed industry. The instrument identifies a local average treatment effect for municipalities whose housing wealth responds to the national cycle, which may differ from the effect of other sources of wealth variation. Finally, our framework abstracts from general equilibrium effects: if housing booms raise commercial rents, they may discourage entry by renters, an effect our estimates partially capture but cannot isolate.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "This paper has estimated the causal effect of housing wealth on entrepreneurship in Korea using regional variation in house prices driven by supply constraints. A 10 percent increase in housing wealth raises new firm registration by 4.7 percent. The effect is stronger among collateral-constrained and younger households, concentrated in non-tradable services, and muted where access to bank credit is limited. Placebo tests based on randomly reassigned supply constraints and an alternative wealth measure based on actual transaction prices confirm the robustness of these findings.",
        "Taken together with evidence that housing wealth affects household consumption [18][24], our results suggest that housing collateral is one of the main buffers through which Korean households finance both spending and risk-taking. This makes the design of housing and macroprudential policy relevant not only for financial stability but also for business dynamism. Future research could use linked employer-employee data to trace the growth and productivity of firms founded with home-equity finance, and could examine whether alternatives to real estate collateral can sustain entrepreneurship when house prices fall.",
      ],
    },
    {
      id: "appendix-a",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Municipal boundaries. Korea's municipal boundaries changed several times during the sample period, most notably with the creation of Sejong Special Self-Governing City in 2012 and the merger of Changwon, Masan and Jinhae in 2010. We harmonise all data to 2022 boundaries by aggregating merged units and allocating split units using 2010 population weights. Sejong is excluded because it did not exist for most of the period, as are Ulleung and Ongjin counties, whose island geography makes the slope measure unreliable, leaving 226 municipalities.",
        "Housing wealth. The KB index is available for all municipalities only from 2006, which determines the start of our sample. Housing wealth per household equals the average value of owner-occupied dwellings, computed by applying the KB index to the 2005 census-based average dwelling value, multiplied by the number of owner-occupied dwellings and divided by the number of households. The MOLIT alternative measure is a hedonic index estimated separately for each municipality from apartment transactions, controlling for floor area, building age, floor level and complex fixed effects.",
        "Undevelopable land. Slopes are computed from the 30-metre digital elevation model of the National Geographic Information Institute. Water bodies and wetlands come from the land cover map of the Ministry of Environment, and Development Restriction Zones from the 2005 designation records of MOLIT. Land in more than one category is counted once.",
        "Inference. With 226 clusters, cluster-robust inference is reliable, but we also report Conley {23} standard errors with a 50 kilometre cutoff and wild cluster bootstrap p-values with 999 replications. The bootstrap p-value for the baseline IV estimate is 0.001. Weak-instrument-robust Anderson–Rubin confidence intervals for the baseline estimate range from 0.24 to 0.73.",
      ],
    },
  ],
};
