// Vol. 29, No. 3 (July 2024) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2024-v29-i3-03",
  acknowledgments:
    "We thank seminar participants at Hanyang University, the Paris School of Economics and the Asian Finance Association annual meeting, two anonymous referees and the handling editor for helpful comments. Tae-Woo Lee gratefully acknowledges research support from Hanyang University.",
  dataAvailability:
    "Firm-level financial statements were obtained from a commercial provider under a licence that does not permit redistribution. Country-level indicators of financial depth and the coded reform dates are constructed from public sources; the reform coding, code and instructions for reproducing the sample are available from the corresponding author.",
  editorialNote:
    "Tae-Woo Lee and Caroline Dubois show that median cash-to-assets ratios of 6,200 listed firms in nine Asian economies rose by 4.1 percentage points over 2005–2023, with the largest jumps during the global financial crisis and COVID-19, and that reforms improving financial access lowered cash holdings by about 1.6 percentage points of assets while raising investment by roughly 0.6 percentage points.",
  refs: [
    /* 1 */ "Opler, T., Pinkowitz, L., Stulz, R., & Williamson, R. (1999). The determinants and implications of corporate cash holdings. Journal of Financial Economics, 52(1), 3–46.",
    /* 2 */ "Bates, T. W., Kahle, K. M., & Stulz, R. M. (2009). Why do U.S. firms hold so much more cash than they used to? Journal of Finance, 64(5), 1985–2021.",
    /* 3 */ "Almeida, H., Campello, M., & Weisbach, M. S. (2004). The cash flow sensitivity of cash. Journal of Finance, 59(4), 1777–1804.",
    /* 4 */ "Dittmar, A., Mahrt-Smith, J., & Servaes, H. (2003). International corporate governance and corporate cash holdings. Journal of Financial and Quantitative Analysis, 38(1), 111–133.",
    /* 5 */ "Han, S., & Qiu, J. (2007). Corporate precautionary cash holdings. Journal of Corporate Finance, 13(1), 43–57.",
    /* 6 */ "Keynes, J. M. (1936). The general theory of employment, interest and money. London: Macmillan.",
    /* 7 */ "Bloom, N. (2009). The impact of uncertainty shocks. Econometrica, 77(3), 623–685.",
    /* 8 */ "Baker, S. R., Bloom, N., & Davis, S. J. (2016). Measuring economic policy uncertainty. Quarterly Journal of Economics, 131(4), 1593–1636.",
    /* 9 */ "La Porta, R., Lopez-de-Silanes, F., Shleifer, A., & Vishny, R. W. (1998). Law and finance. Journal of Political Economy, 106(6), 1113–1155.",
    /* 10 */ "Djankov, S., McLiesh, C., & Shleifer, A. (2007). Private credit in 129 countries. Journal of Financial Economics, 84(2), 299–329.",
    /* 11 */ "Rajan, R. G., & Zingales, L. (1998). Financial dependence and growth. American Economic Review, 88(3), 559–586.",
    /* 12 */ "Khurana, I. K., Martin, X., & Pereira, R. (2006). Financial development and the cash flow sensitivity of cash. Journal of Financial and Quantitative Analysis, 41(4), 787–808.",
    /* 13 */ "Kalcheva, I., & Lins, K. V. (2007). International evidence on cash holdings and expected managerial agency problems. Review of Financial Studies, 20(4), 1087–1112.",
    /* 14 */ "Pinkowitz, L., Stulz, R., & Williamson, R. (2006). Does the contribution of corporate cash holdings and dividends to firm value depend on governance? A cross-country analysis. Journal of Finance, 61(6), 2725–2751.",
    /* 15 */ "Harford, J., Mansi, S. A., & Maxwell, W. F. (2008). Corporate governance and firm cash holdings in the US. Journal of Financial Economics, 87(3), 535–555.",
    /* 16 */ "Acharya, V. V., Almeida, H., & Campello, M. (2007). Is cash negative debt? A hedging perspective on corporate financial policies. Journal of Financial Intermediation, 16(4), 515–554.",
    /* 17 */ "Duchin, R., Ozbas, O., & Sensoy, B. A. (2010). Costly external finance, corporate investment, and the subprime mortgage credit crisis. Journal of Financial Economics, 97(3), 418–435.",
    /* 18 */ "Campello, M., Graham, J. R., & Harvey, C. R. (2010). The real effects of financial constraints: Evidence from a financial crisis. Journal of Financial Economics, 97(3), 470–487.",
    /* 19 */ "Acharya, V. V., & Steffen, S. (2020). The risk of being a fallen angel and the corporate dash for cash in the midst of COVID. Review of Corporate Finance Studies, 9(3), 430–471.",
    /* 20 */ "Gulen, H., & Ion, M. (2016). Policy uncertainty and corporate investment. Review of Financial Studies, 29(3), 523–564.",
    /* 21 */ "Riddick, L. A., & Whited, T. M. (2009). The corporate propensity to save. Journal of Finance, 64(4), 1729–1766.",
    /* 22 */ "Foley, C. F., Hartzell, J. C., Titman, S., & Twite, G. (2007). Why do firms hold so much cash? A tax-based explanation. Journal of Financial Economics, 86(3), 579–607.",
    /* 23 */ "Hadlock, C. J., & Pierce, J. R. (2010). New evidence on measuring financial constraints: Moving beyond the KZ index. Review of Financial Studies, 23(5), 1909–1940.",
    /* 24 */ "Calomiris, C. W., Larrain, M., Liberti, J., & Sturgess, J. (2017). How collateral laws shape lending and sectoral activity. Journal of Financial Economics, 123(1), 163–188.",
    /* 25 */ "Vig, V. (2013). Access to collateral and corporate debt structure: Evidence from a natural experiment. Journal of Finance, 68(3), 881–928.",
    /* 26 */ "Goodman-Bacon, A. (2021). Difference-in-differences with variation in treatment timing. Journal of Econometrics, 225(2), 254–277.",
    /* 27 */ "Callaway, B., & Sant'Anna, P. H. C. (2021). Difference-in-differences with multiple time periods. Journal of Econometrics, 225(2), 200–230.",
    /* 28 */ { jer: "2022-v27-i2-02" },
    /* 29 */ "Lins, K. V., Servaes, H., & Tufano, P. (2010). What drives corporate liquidity? An international survey of cash holdings and lines of credit. Journal of Financial Economics, 98(1), 160–176.",
    /* 30 */ "Sufi, A. (2009). Bank lines of credit in corporate finance: An empirical analysis. Review of Financial Studies, 22(3), 1057–1088.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Listed firms in Asia hold a great deal of cash. At the end of 2023 the median listed non-financial firm in our sample of nine Asian economies held cash and short-term investments equal to 16.4 percent of total assets, up from 12.3 percent in 2005. Aggregated across firms, these balances amount to several trillion US dollars of liquid assets that are not being used to build plants, buy equipment or fund research. Whether such cash piles reflect prudent self-insurance, weak governance or simply the absence of better alternatives has first-order implications for investment, for the transmission of monetary policy and for the design of financial-sector reforms.",
        "The classic answer, going back to Keynes {6}, is that firms hold cash for transactions and for precaution: liquid balances allow a firm to meet unexpected needs and to exploit investment opportunities when external finance is costly or unavailable. Modern corporate finance has formalised the precautionary motive and documented that firms with riskier cash flows, better growth opportunities and more limited access to capital markets hold more cash [1][3][5]. Bates, Kahle and Stulz {2} attribute the secular rise in US cash ratios largely to increases in idiosyncratic cash-flow risk. Much less is known about the evolution of corporate liquidity in Asia, where financial systems are more bank-based, creditor protection varies widely and firms have experienced two large external shocks in the past two decades.",
        "This paper documents the evolution of corporate cash holdings for 6,200 listed firms across nine Asian economies — China, India, Indonesia, Japan, Korea, Malaysia, the Philippines, Singapore and Thailand — over 2005–2023, and asks how financial development shapes them. We establish three sets of findings. First, median cash-to-assets ratios rose by 4.1 percentage points over the period. The rise was not gradual: the median ratio increased by 1.3 percentage points between 2007 and 2009 and by 1.7 percentage points between 2019 and 2021, so that the global financial crisis and the COVID-19 pandemic together account for about three quarters of the total increase. Cash ratios did not return to pre-shock levels after either episode.",
        "Second, firms in countries with deeper financial markets and stronger creditor rights hold less cash. A one-standard-deviation increase in private credit to GDP is associated with a cash ratio that is 0.86 percentage points lower within the same firm, and a one-point increase in the creditor rights index with a ratio that is 0.62 percentage points lower. Consistent with a precautionary motive, the sensitivity of cash to cash-flow volatility and the increase in cash during the two crises were markedly smaller where finance was deeper, and the negative association between financial depth and cash is concentrated among financially constrained firms.",
        "Third, we provide evidence that these relationships are causal. Cross-country comparisons are vulnerable to omitted institutional and cultural differences [4][13], so our identification exploits within-firm variation in policy-driven measures of financial access. We code 14 legal and regulatory reforms adopted in eight of the nine economies — secured-transactions laws that expanded the use of movable collateral, insolvency reforms and credit-information reforms — and interact their staggered timing with each firm's pre-determined exposure to the affected margin of finance. Reforms that improved financial access reduced cash holdings by 1.62 percentage points of assets among exposed firms, with no differential pre-trends. Instrumenting private credit with the reform index yields a slightly larger effect than the fixed-effects estimates.",
        "Finally, we trace the real consequences. Firms whose cash holdings fell after a reform raised capital expenditure by 0.58 percentage points of assets, around 13 percent of the median investment rate, and the effect was largest among firms that held the most cash before the reform. Our results imply that policies deepening domestic credit markets can have non-trivial effects on corporate investment by reducing precautionary cash holdings. The paper contributes to the international literature on cash holdings [4][13][14], to work on the real effects of financial constraints in crises [17][18][19], and to evidence on how legal reforms shape corporate finance [24][25]. It also complements earlier evidence in this journal that trade credit stabilises small firms in downturns [28], by showing how large firms self-insure through liquidity."
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "The nine economies in our sample span a wide range of financial development. In 2005 domestic credit to the private sector ranged from about a quarter of GDP in Indonesia and the Philippines to more than a hundred percent in Japan, Korea, China, Malaysia and Thailand. Equity and corporate bond markets were deep in Japan, Singapore and Korea but thin elsewhere, and in most economies banks remained the dominant source of external finance for listed firms. Creditor protection also differed: secured lenders in several economies faced long, uncertain insolvency procedures, and movable assets such as inventory, receivables and equipment could not easily be pledged as collateral.",
        "Between 2005 and 2023 most of these economies reformed the legal infrastructure of credit. China's Property Law of 2007 allowed firms to pledge a broad range of movable assets, and its new Enterprise Bankruptcy Law took effect in the same year. Korea's Act on Secured Transactions in Movable Property and Claims came into force in 2012. Thailand's Business Security Act, effective in 2016, created a security interest over business assets, and the Philippines adopted a Personal Property Security Act in 2018. India's Insolvency and Bankruptcy Code of 2016 replaced a fragmented and slow set of procedures with a time-bound resolution process, Singapore strengthened its restructuring regime in 2017, and Malaysia introduced corporate rescue mechanisms under its Companies Act 2016. Indonesia and several other economies reformed credit-information systems, expanding the coverage of credit registries and licensing private bureaus. Japan did not adopt a reform that meets our coding criteria and serves as a never-treated economy.",
        "The period also contained two large common shocks. The global financial crisis reached Asia in late 2008 through a sudden stop in foreign bank funding, a collapse in export demand and sharp currency depreciations in Korea, India and Indonesia. The COVID-19 pandemic in 2020 combined a collapse in demand with severe disruptions of supply chains and, in several economies, extended lockdowns. In both episodes governments and central banks responded with liquidity support, credit guarantees and loan moratoria, but listed firms faced considerable uncertainty about their access to bank credit and the duration of the shock."
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Opler, Pinkowitz, Stulz and Williamson {1} established the canonical determinants of cash holdings: firms with strong growth opportunities and riskier cash flows hold more cash, while larger firms and those with better access to capital markets hold less. Almeida, Campello and Weisbach {3} show that financially constrained firms save a larger share of their cash flow as cash, and Han and Qiu {5} find that constrained firms increase cash holdings in response to higher cash-flow volatility while unconstrained firms do not. Riddick and Whited {21} emphasise that the relationship between cash flow and saving depends on the persistence of productivity shocks, and Acharya, Almeida and Campello {16} show that constrained firms with hedging needs prefer cash to lower debt. Survey evidence by Lins, Servaes and Tufano {29} indicates that cash is held mainly as a buffer against future cash-flow shortfalls, whereas lines of credit are used to fund opportunities in good times; Sufi {30} shows that access to credit lines is conditional on cash-flow covenants, which limits their value as liquidity insurance for riskier firms.",
        "A second strand examines international differences. Dittmar, Mahrt-Smith and Servaes {4} find that firms in countries with weaker shareholder protection hold more cash, consistent with agency problems; Kalcheva and Lins {13} and Pinkowitz, Stulz and Williamson {14} show that cash is valued less when governance is weak. Harford, Mansi and Maxwell {15} find the opposite pattern within the United States, where poorly governed firms spend cash quickly. Khurana, Martin and Pereira {12} show that the cash-flow sensitivity of cash declines with financial development, which they interpret as evidence that deeper markets relax financing constraints. Foley, Hartzell, Titman and Twite {22} highlight repatriation taxes as a source of cash accumulation by multinationals. Our evidence on financial depth and creditor rights builds on the law-and-finance tradition of La Porta, Lopez-de-Silanes, Shleifer and Vishny {9} and on Djankov, McLiesh and Shleifer {10}, who show that creditor rights and credit information are associated with deeper private credit markets.",
        "A third strand studies uncertainty and crises. Bloom {7} shows that uncertainty shocks cause firms to pause investment, and Gulen and Ion {20} find that the policy uncertainty index of Baker, Bloom and Davis {8} predicts lower corporate investment. Duchin, Ozbas and Sensoy {17} and Campello, Graham and Harvey {18} document that cash-poor and constrained firms cut investment most sharply during the global financial crisis, and Acharya and Steffen {19} describe a dash for cash in March 2020 in which firms drew down credit lines and issued bonds to build liquidity. Finally, closest to our identification strategy, Calomiris, Larrain, Liberti and Sturgess {24} show that collateral laws favouring movable assets shift lending towards firms with such assets, and Vig {25} shows that strengthening secured creditors' rights in India altered firms' debt structure. Rather than studying debt, we ask how such reforms change firms' demand for internal liquidity.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a firm that will face an investment opportunity or a liquidity need of uncertain size next period. It can meet the need from cash carried forward or by raising external funds at a cost that increases with information frictions and with the difficulty of pledging assets to lenders. Holding cash is costly because of the liquidity premium and agency costs, so the firm chooses a buffer that equates the marginal cost of carrying cash with the expected marginal benefit of avoiding costly external finance or forgone investment in states where the need is large. In the spirit of the precautionary models of Almeida, Campello and Weisbach {3} and Acharya, Almeida and Campello {16}, the optimal buffer rises with the variance of the need and with the wedge between internal and external finance.",
        "Financial development reduces the wedge. Deeper credit markets, better credit information and stronger creditor rights lower the cost of external finance in bad states and raise the probability that a firm can borrow when it needs to. Secured-transactions reforms are particularly relevant for firms whose assets are mostly movable, because they expand debt capacity in exactly the states in which internally generated funds fall short [24]. Creditor-rights reforms have a more ambiguous effect: by making liquidation more likely they could reduce firms' willingness to borrow, which would raise cash [25]. Which force dominates is an empirical question.",
        "The framework yields four hypotheses. H1: firms in countries with deeper financial markets and stronger creditor rights hold less cash, conditional on firm characteristics. H2: reforms that improve financial access reduce cash holdings, more so for firms exposed to the reformed margin of finance. H3: the sensitivity of cash to uncertainty — both firm-level cash-flow volatility and aggregate crisis shocks — is smaller where finance is deeper, and the effect of financial depth is concentrated among constrained firms. H4: firms that reduce precautionary cash after improvements in financial access increase investment. An agency explanation would instead predict that reforms improving creditor protection reduce cash mainly in poorly governed firms and leave investment unchanged."
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We combine firm-level financial statements with country-level measures of financial depth, creditor rights and a coded chronology of financial-access reforms.",
      ],
      subsections: [
        {
          id: "data-firms",
          heading: "5.1 Firm-Level Data and Sample",
          paragraphs: [
            "Annual consolidated financial statements for listed firms come from a commercial database that harmonises accounting items across the nine economies. We include all non-financial, non-utility firms listed on the main exchanges at any point between 2005 and 2023 with at least five consecutive years of data, and exclude firms with missing total assets, sales or cash. To limit the influence of state-directed balance sheets we also exclude firms in which the government holds a majority stake throughout the period. The final sample is an unbalanced panel of 6,200 firms and 86,700 firm-years.",
            "Our dependent variable is cash and short-term investments divided by total assets. Firm controls follow Opler et al. {1} and Bates et al. {2}: the logarithm of total assets in constant 2015 US dollars, the market-to-book ratio, cash flow (operating income after interest and taxes) over assets, net working capital excluding cash over assets, capital expenditure over assets, book leverage, research and development over sales, a dividend-payer indicator and industry cash-flow volatility, measured as the standard deviation of cash flow over assets for the firm's two-digit industry and country over the previous ten years. We winsorise continuous variables at the 1st and 99th percentiles.",
            "Table 1 describes the sample by economy. China, Japan and India together account for 64 percent of firms, but no economy dominates once observations are weighted equally by country in robustness checks. Median cash ratios rose in every economy, by between 2.7 percentage points in Singapore and 4.8 percentage points in China; the largest relative increases occurred in India and the Philippines, which started from low levels.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Sample composition and cash holdings by economy",
              columns: ["Economy", "Firms", "Firm-years", "Median cash/assets 2005 (%)", "Median cash/assets 2023 (%)", "Private credit/GDP 2005 (%)", "Private credit/GDP 2023 (%)", "Reforms coded"],
              rows: [
                ["China", "1,650", "21,400", "14.8", "19.6", "112", "185", "2"],
                ["India", "1,050", "14,900", "6.9", "10.8", "36", "56", "2"],
                ["Indonesia", "330", "4,300", "10.2", "14.9", "23", "33", "2"],
                ["Japan", "1,280", "19,600", "14.1", "17.3", "102", "121", "0"],
                ["Korea", "820", "11,500", "9.8", "13.6", "122", "174", "2"],
                ["Malaysia", "420", "6,200", "11.6", "15.4", "110", "122", "2"],
                ["Philippines", "130", "1,800", "9.4", "13.9", "30", "48", "1"],
                ["Singapore", "260", "3,400", "13.5", "16.2", "96", "126", "2"],
                ["Thailand", "260", "3,600", "8.7", "12.5", "101", "119", "1"],
                ["All", "6,200", "86,700", "12.3", "16.4", "—", "—", "14"],
              ],
              note: "Note: Cash is cash and short-term investments. Private credit is domestic credit to the private sector by banks and other financial institutions, rounded to the nearest percentage point. Reforms coded are secured-transactions, insolvency and credit-information reforms adopted in 2006–2021 (see Appendix A).",
            },
          ],
        },
        {
          id: "data-country",
          heading: "5.2 Financial Depth, Creditor Rights and Reforms",
          paragraphs: [
            "Financial depth is measured by domestic credit to the private sector as a share of GDP, the standard indicator in the literature [10][11]; we also use stock market capitalisation to GDP in robustness checks. Creditor rights are measured by an index from zero to four that follows the definition of La Porta et al. {9} and Djankov et al. {10}, scoring restrictions on reorganisation, the absence of an automatic stay on secured assets, the priority of secured creditors and the replacement of management in reorganisation. We update the index annually using the text of insolvency and secured-lending laws, so that it varies within countries over time.",
            "To isolate policy-driven variation, we construct a financial access index (FAI) that cumulates reforms in three areas: secured transactions (laws expanding the range of movable assets that can be pledged and creating collateral registries), insolvency (laws that shorten resolution and strengthen secured creditors' position) and credit information (expansions of registry coverage and licensing of private bureaus). Each reform adds one point to the index from the year it takes effect. We code 14 reforms in eight economies between 2006 and 2021. Appendix A describes the coding.",
            "Exposure to reforms differs across firms. For secured-transactions reforms, exposure is the pre-sample share of movable assets — inventory, receivables and machinery — in total assets; for insolvency and credit-information reforms, it is the firm's industry dependence on external finance, computed as in Rajan and Zingales {11} from US data. Both are measured before 2005 or, for later listings, in the first year a firm appears, and are standardised. Table 2 reports descriptive statistics for the firm-year panel. The average cash ratio is 15.7 percent and the median 13.9 percent; cash holdings are dispersed, with an interquartile range of more than 13 percentage points.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Descriptive statistics, firm-year panel 2005–2023",
              columns: ["Variable", "Mean", "SD", "P25", "Median", "P75"],
              rows: [
                ["Cash/assets (%)", "15.7", "12.4", "6.8", "13.9", "20.6"],
                ["Log total assets (USD million)", "6.12", "1.58", "5.04", "6.01", "7.11"],
                ["Market-to-book", "1.71", "1.32", "0.92", "1.34", "2.03"],
                ["Cash flow/assets (%)", "6.4", "7.9", "2.9", "6.3", "10.1"],
                ["Net working capital/assets (%)", "9.8", "17.1", "−1.6", "9.5", "21.2"],
                ["Capital expenditure/assets (%)", "5.2", "4.6", "1.9", "4.0", "7.0"],
                ["Book leverage (%)", "23.6", "17.3", "8.4", "22.1", "35.9"],
                ["R&D/sales (%)", "1.8", "3.4", "0.0", "0.4", "2.3"],
                ["Dividend payer (0/1)", "0.68", "0.47", "0", "1", "1"],
                ["Industry cash-flow volatility", "0.071", "0.032", "0.048", "0.066", "0.088"],
                ["Private credit/GDP (%)", "108.4", "44.1", "77.0", "112.0", "136.0"],
                ["Creditor rights index (0–4)", "2.21", "0.94", "2", "2", "3"],
                ["Financial access index (FAI)", "0.84", "0.71", "0", "1", "1"],
              ],
              note: "Note: 86,700 firm-years for 6,200 firms. Continuous firm variables are winsorised at the 1st and 99th percentiles. Country variables are reported at the firm-year level.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "We proceed in three steps: descriptive regressions linking cash to country-level financial depth and creditor rights, a reform-based design that exploits within-firm variation in policy-driven financial access, and an analysis of investment.",
      ],
      subsections: [
        {
          id: "strategy-baseline",
          heading: "6.1 Baseline Specification",
          paragraphs: [
            "Our baseline regression relates the cash ratio of firm i in country c and year t to private credit to GDP and the creditor rights index, both lagged one year, controlling for firm characteristics X(i,t−1). We start with pooled regressions with industry-by-year fixed effects, which exploit cross-country variation, and then add firm fixed effects, which absorb time-invariant differences in governance, ownership, culture and business models. With firm fixed effects the coefficients on financial depth and creditor rights are identified only from changes within countries over time. In the most demanding specification we add country-specific linear trends, so that identification comes from deviations of financial depth from its trend. Private credit is standardised to have unit standard deviation. Standard errors are clustered by country-year, and we report wild cluster bootstrap p-values at the country level as a check given that there are only nine economies.",
          ],
        },
        {
          id: "strategy-reforms",
          heading: "6.2 Reform-Based Identification",
          paragraphs: [
            "Changes in private credit can respond to firms' demand for credit, which may itself be correlated with their liquidity needs. Our main identification therefore uses the reform-driven financial access index. We estimate a regression of the cash ratio on FAI(c,t) interacted with the firm's standardised exposure, with firm fixed effects, country-by-year fixed effects and industry-by-year fixed effects. Country-by-year fixed effects absorb all aggregate shocks, including business cycles, crises, exchange rates and macroeconomic policy, so the coefficient is identified from the differential response of more- and less-exposed firms within the same economy and year. The identifying assumption is that, absent the reform, cash holdings of more- and less-exposed firms would have evolved in parallel.",
            "Because reforms are staggered, two-way fixed-effects estimates can be biased when treatment effects vary over time [26]. We therefore also report estimates from the estimator of Callaway and Sant'Anna {27}, defining a firm as treated when its economy adopts its first reform and its exposure is above the median, with firms in not-yet-treated and never-treated economies as controls. We present event-study estimates for four years before and five years after the reform. Finally, we use FAI as an instrument for private credit in a two-stage least squares regression of cash on financial depth, which gives a policy-driven counterpart to the fixed-effects estimates.",
          ],
        },
        {
          id: "strategy-investment",
          heading: "6.3 Investment",
          paragraphs: [
            "To test H4 we estimate the same reform specification with capital expenditure over beginning-of-period assets as the outcome, controlling for Tobin's q and cash flow. If reforms reduce precautionary cash, freed-up liquidity and easier access to credit should translate into higher investment, particularly among firms that held the most cash before the reform. We split exposed firms by their pre-reform cash ratio relative to the industry-country median and also estimate a two-stage specification in which the reform-induced change in cash is used to predict investment.",
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
          id: "results-trends",
          heading: "7.1 The Evolution of Cash Holdings",
          paragraphs: [
            "Figure 1 plots the median cash-to-assets ratio for the full sample and for firms in economies with above- and below-median private credit to GDP in 2005. The median ratio rose from 12.3 percent in 2005 to 16.4 percent in 2023, an increase of 4.1 percentage points. Two step changes dominate the series. Between 2007 and 2009 the median rose by 1.3 percentage points, and between 2019 and 2021 by a further 1.7 percentage points. Outside these windows, the ratio drifted upwards by less than 0.1 percentage points per year on average, and it fell only slightly in 2023 as interest rates rose. The pattern is common to both groups, but the level and the increases were larger in economies with shallow financial markets, where the median rose by 5.1 percentage points against 3.0 percentage points in deep-finance economies.",
            "The rise is not explained by changes in sample composition. Holding firm composition fixed by estimating year effects in a regression with firm fixed effects yields an increase of 3.8 percentage points, close to the raw change. Controlling also for the standard firm characteristics leaves an unexplained increase of 2.9 percentage points; changes in firm size, market-to-book, leverage and net working capital account for roughly a quarter of the rise, mainly through declining net working capital and leverage, which parallels the US evidence of Bates et al. {2}.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Median cash-to-assets ratio of listed firms, 2005–2023",
              kind: "line",
              xLabels: ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
              yLabel: "Cash/assets (%)",
              series: [
                { name: "All firms", values: [12.3, 12.4, 12.5, 13.1, 13.8, 13.9, 13.8, 14.0, 14.1, 14.2, 14.4, 14.5, 14.6, 14.6, 14.8, 16.0, 16.5, 16.6, 16.4] },
                { name: "Deep finance (above-median private credit, 2005)", values: [10.9, 11.0, 11.0, 11.5, 12.0, 12.1, 12.0, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.6, 12.7, 13.6, 13.9, 14.0, 13.9] },
                { name: "Shallow finance (below-median private credit, 2005)", values: [13.6, 13.7, 13.9, 14.6, 15.5, 15.6, 15.5, 15.8, 15.9, 16.1, 16.3, 16.4, 16.6, 16.6, 16.8, 18.3, 18.9, 19.0, 18.7] },
              ],
              note: "Note: Medians across firms in each year. Economies are split at the median of private credit to GDP in 2005. Shaded crisis windows correspond to 2008–2009 and 2020–2021.",
            },
          ],
        },
        {
          id: "results-baseline",
          heading: "7.2 Financial Depth, Creditor Rights and Cash",
          paragraphs: [
            "Table 3 reports the baseline regressions. In the pooled specification of column (1), a one-standard-deviation increase in private credit to GDP is associated with a cash ratio that is 1.42 percentage points lower, and each additional point of the creditor rights index with a ratio 0.95 percentage points lower. Adding firm controls in column (2) reduces both coefficients modestly. The control variables have the expected signs: larger firms, more levered firms and dividend payers hold less cash, while firms with higher market-to-book, more R&D and riskier industries hold more, in line with Opler et al. {1}.",
            "Columns (3) and (4) add firm fixed effects and, in column (4), country-specific trends. The coefficients fall to −0.86 and −0.79 for private credit and to −0.62 and −0.57 for creditor rights but remain statistically significant, including under wild cluster bootstrap inference at the country level. The decline relative to the pooled estimates suggests that part of the cross-country association reflects persistent differences in governance or business models, as emphasised by Dittmar et al. {4}, but that changes in financial depth within economies are themselves associated with substantial changes in cash. The positive sign one might expect from a liquidation-bias channel of creditor rights does not appear in the data: on net, stronger creditor protection is associated with lower cash. Column (5) reports the two-stage least squares estimate in which private credit is instrumented with the financial access index; the coefficient of −1.24 is larger in absolute value than the fixed-effects estimate, consistent with measurement error in private credit or with demand-driven credit expansions that coincide with higher liquidity needs.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Financial depth, creditor rights and corporate cash holdings",
              columns: ["", "(1) Pooled", "(2) Pooled + controls", "(3) Firm FE", "(4) Firm FE + country trends", "(5) 2SLS"],
              rows: [
                ["Private credit/GDP (std.)", "−1.42*** (0.31)", "−1.18*** (0.27)", "−0.86*** (0.22)", "−0.79*** (0.24)", "−1.24*** (0.38)"],
                ["Creditor rights index", "−0.95*** (0.24)", "−0.81*** (0.21)", "−0.62** (0.25)", "−0.57** (0.26)", "−0.49* (0.27)"],
                ["Log total assets", "", "−1.36*** (0.09)", "−1.12*** (0.14)", "−1.10*** (0.14)", "−1.11*** (0.14)"],
                ["Market-to-book", "", "1.04*** (0.08)", "0.61*** (0.07)", "0.60*** (0.07)", "0.61*** (0.07)"],
                ["Industry cash-flow volatility", "", "18.7*** (3.9)", "12.4*** (3.6)", "12.1*** (3.6)", "12.2*** (3.6)"],
                ["Book leverage", "", "−0.19*** (0.01)", "−0.15*** (0.01)", "−0.15*** (0.01)", "−0.15*** (0.01)"],
                ["Other firm controls", "No", "Yes", "Yes", "Yes", "Yes"],
                ["Fixed effects", "Ind×year", "Ind×year", "Firm, ind×year", "Firm, ind×year", "Firm, ind×year"],
                ["First-stage F-statistic", "", "", "", "", "27.4"],
                ["Wild bootstrap p-value (credit)", "0.004", "0.006", "0.012", "0.021", "0.009"],
                ["Observations", "86,700", "86,700", "86,700", "86,700", "86,700"],
                ["R-squared", "0.08", "0.31", "0.74", "0.75", "—"],
              ],
              note: "Note: Dependent variable is cash and short-term investments over total assets (percent). Country variables and firm controls are lagged one year. Other controls are cash flow, net working capital, capital expenditure, R&D/sales and a dividend-payer indicator. Column (5) instruments private credit with the financial access index. Standard errors clustered by country-year in parentheses; wild cluster bootstrap p-values cluster by country. *** p<0.01, ** p<0.05, * p<0.1.",
            },
          ],
        },
        {
          id: "results-reforms",
          heading: "7.3 Reform Evidence and Investment",
          paragraphs: [
            "Table 4 reports the reform-based estimates. In Panel A, column (1) shows that a one-point increase in the financial access index reduces the cash ratio of a firm with one-standard-deviation higher exposure by 0.94 percentage points, controlling for country-by-year fixed effects. Column (2) reports the Callaway and Sant'Anna {27} estimate for firms with above-median exposure: the average treatment effect on the treated is a reduction of 1.62 percentage points of assets, roughly 12 percent of the median cash ratio. The effects are similar across reform types. Secured-transactions reforms reduce cash by 1.84 percentage points among firms with many movable assets, insolvency reforms by 1.47 points and credit-information reforms by 1.21 points among externally dependent firms. The first stage confirms that reforms deepened credit markets: each reform raised private credit by 0.38 standard deviations within five years.",
            "Figure 2 plots the event-study coefficients. Cash ratios of exposed and less-exposed firms evolved in parallel in the four years before reforms; none of the pre-period coefficients is statistically different from zero, and a joint test cannot reject that they are all zero (p = 0.61). After reforms, cash holdings of exposed firms decline gradually, by 0.41 percentage points in the reform year and by about 1.8 percentage points after four to five years. The gradual adjustment is consistent with firms running down precautionary balances as they learn that new forms of credit are available, rather than with a mechanical reclassification of assets.",
            "Panel B of Table 4 turns to investment. Exposed firms raise capital expenditure by 0.58 percentage points of assets after reforms, around 13 percent of the median investment rate of 4.6 percent among exposed firms in the pre-reform year. The effect is concentrated among firms that held above-median cash before the reform, whose investment rises by 0.94 percentage points, against 0.21 points for firms with low initial cash. Using the reform-induced change in cash as the source of variation, each percentage point of assets released from cash is associated with an additional 0.36 percentage points of investment. Firms do not use the released cash to raise dividends or buy back shares on a comparable scale: payout ratios increase by an insignificant 0.12 percentage points, which argues against a pure agency interpretation.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Financial-access reforms, cash holdings and investment",
              columns: ["", "(1) FAI × exposure", "(2) Callaway–Sant'Anna", "(3) Secured transactions", "(4) Insolvency", "(5) Credit information"],
              rows: [
                ["Panel A: Cash/assets (%)", "", "", "", "", ""],
                ["Reform effect", "−0.94*** (0.21)", "−1.62*** (0.34)", "−1.84*** (0.41)", "−1.47*** (0.39)", "−1.21** (0.48)"],
                ["Pre-trend test p-value", "0.58", "0.61", "0.47", "0.66", "0.52"],
                ["Panel B: Capital expenditure/assets (%)", "", "", "", "", ""],
                ["Reform effect", "0.33*** (0.09)", "0.58*** (0.15)", "0.67*** (0.19)", "0.52*** (0.18)", "0.41* (0.22)"],
                ["High pre-reform cash", "0.55*** (0.13)", "0.94*** (0.22)", "1.08*** (0.27)", "0.86*** (0.26)", "0.69** (0.31)"],
                ["Low pre-reform cash", "0.12 (0.11)", "0.21 (0.18)", "0.25 (0.22)", "0.19 (0.21)", "0.14 (0.26)"],
                ["Panel C: First stage, private credit/GDP (std.)", "", "", "", "", ""],
                ["Effect of one reform", "0.38*** (0.07)", "", "0.41*** (0.09)", "0.36*** (0.08)", "0.29*** (0.09)"],
                ["Fixed effects", "Firm, country×year, ind×year", "Cohort-time", "Firm, country×year", "Firm, country×year", "Firm, country×year"],
                ["Observations", "86,700", "86,700", "86,700", "86,700", "86,700"],
              ],
              note: "Note: Column (1) interacts the financial access index with standardised firm exposure. Column (2) reports average treatment effects on the treated for above-median-exposure firms using not-yet-treated and never-treated firms as controls. Columns (3)–(5) consider each reform type separately with the relevant exposure measure. Panel C is estimated at the country-year level with country and year fixed effects. Standard errors clustered by country-year (by firm in column 2) in parentheses. *** p<0.01, ** p<0.05, * p<0.1.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Event study: cash holdings of exposed firms around financial-access reforms",
              kind: "line",
              xLabels: ["−4", "−3", "−2", "−1", "0", "1", "2", "3", "4", "5"],
              yLabel: "Effect on cash/assets (pp)",
              series: [
                {
                  name: "Estimate",
                  values: [0.12, -0.05, 0.08, 0, -0.41, -0.88, -1.25, -1.52, -1.7, -1.78],
                  lower: [-0.31, -0.46, -0.31, 0, -0.80, -1.34, -1.76, -2.07, -2.31, -2.45],
                  upper: [0.55, 0.36, 0.47, 0, -0.02, -0.42, -0.74, -0.97, -1.09, -1.11],
                },
              ],
              marker: 3,
              note: "Note: Callaway–Sant'Anna dynamic effects relative to the year before the first reform, for firms with above-median exposure. Bars show 95 percent confidence intervals clustered by firm. Year −1 is the reference period.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "If financial development reduces cash by weakening the precautionary motive, it should dampen the response of cash to uncertainty and matter most for firms that would otherwise struggle to raise funds. Table 5 tests these predictions. Column (1) interacts firm-level cash-flow volatility with financial depth. A one-standard-deviation increase in volatility raises the cash ratio by 1.46 percentage points at mean financial depth, but the sensitivity falls by 0.63 percentage points for each standard deviation of private credit, so that in the deepest markets of the sample the volatility effect is less than half as large as in the shallowest. Column (2) uses the country-level economic policy uncertainty index of Baker et al. {8}, available for five of the nine economies; the pattern is similar.",
        "Column (3) examines the two crises. The cash ratio of the average firm increased by 1.05 percentage points more during 2008–2009 and by 1.38 percentage points more during 2020–2021 than its own trend would predict, with increases that were 0.46 and 0.58 percentage points smaller per standard deviation of financial depth. Firms that entered the crises with credit lines and deep domestic markets could rely on external finance, as in the US evidence of Acharya and Steffen {19}, whereas firms in shallow markets hoarded cash. The persistence of higher cash ratios after both shocks suggests that firms revised upwards their perceived risk of being cut off from credit [7][20].",
        "Columns (4) to (6) split the sample by financial constraints. Using the size-age index of Hadlock and Pierce {23}, the reform effect is −2.31 percentage points for constrained firms and an insignificant −0.48 for unconstrained firms. Firms without a committed credit line before the reform, for which bank credit is the marginal source of finance, reduce cash by 2.06 percentage points, against 0.71 points for firms with credit lines; this is consistent with credit lines and cash being substitutes as sources of liquidity [29][30]. Group affiliation also matters. Firms belonging to business groups, which can draw on internal capital markets, respond about half as strongly as stand-alone firms.",
        "By contrast, we find little support for an agency explanation. If reforms reduced cash mainly by improving outside investors' ability to discipline managers, effects should be concentrated among firms with weak governance, measured by high insider ownership or low institutional ownership [4][15]. The reform effect is −1.58 percentage points for firms with weak governance and −1.66 for firms with strong governance, and the difference is not statistically significant. Nor do reforms change the cash-flow sensitivity of cash for unconstrained firms. Together with the investment response, the evidence points to the precautionary channel emphasised by Almeida et al. {3} and Han and Qiu {5}.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Uncertainty, financial constraints and the effect of financial depth",
          columns: ["", "(1) Volatility", "(2) Policy uncertainty", "(3) Crises", "(4) Constrained", "(5) Unconstrained", "(6) No credit line"],
          rows: [
            ["Uncertainty measure (std.)", "1.46*** (0.18)", "0.52*** (0.14)", "", "", "", ""],
            ["Uncertainty × private credit (std.)", "−0.63*** (0.15)", "−0.27** (0.12)", "", "", "", ""],
            ["GFC (2008–2009)", "", "", "1.05*** (0.22)", "", "", ""],
            ["GFC × private credit (std.)", "", "", "−0.46*** (0.16)", "", "", ""],
            ["COVID-19 (2020–2021)", "", "", "1.38*** (0.26)", "", "", ""],
            ["COVID-19 × private credit (std.)", "", "", "−0.58*** (0.19)", "", "", ""],
            ["Reform effect (Callaway–Sant'Anna)", "", "", "", "−2.31*** (0.49)", "−0.48 (0.37)", "−2.06*** (0.46)"],
            ["Firm controls and firm FE", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
            ["Observations", "86,700", "70,800", "86,700", "43,350", "43,350", "35,800"],
          ],
          note: "Note: Dependent variable is cash/assets (percent). Column (1) uses the firm's rolling ten-year standard deviation of cash flow over assets; column (2) uses the country economic policy uncertainty index, available for China, India, Japan, Korea and Singapore. Column (3) includes firm-specific trends. Columns (4) and (5) split at the median of the Hadlock–Pierce index; column (6) covers firms without a committed credit line before the reform. Standard errors clustered by country-year in parentheses (by firm in columns 4–6). *** p<0.01, ** p<0.05, * p<0.1.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 shows that the main reform estimate is robust to a range of alternative choices. Measuring cash net of short-term debt, or scaling by net rather than total assets, yields estimates of −1.49 and −1.83 percentage points. Weighting countries equally, so that China, Japan and India do not dominate, gives −1.71. Dropping one economy at a time produces estimates between −1.38 (excluding China) and −1.86 (excluding India), so no single reform drives the result. Excluding the crisis years 2008–2009 and 2020–2021, which might coincide with reforms adopted in response to crises, yields −1.55. Using stock market capitalisation instead of private credit as the measure of financial depth in the baseline regression gives a smaller but significant coefficient of −0.41.",
        "We also address the concern that reforms coincided with other policy changes that affected exposed firms differently. Controlling for interactions of exposure with the country's policy interest rate, exchange-rate changes and GDP growth leaves the estimate essentially unchanged at −1.60. A placebo test that assigns reform dates five years earlier yields an estimate of 0.09 with a standard error of 0.31. Restricting the sample to a balanced panel of 3,140 firms present in every year gives −1.68. Finally, the tax-based explanation of Foley et al. {22} predicts that multinational firms with foreign earnings hold more cash; excluding firms with more than a quarter of sales abroad changes the estimate to −1.57.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the reform effect on cash holdings",
          columns: ["Specification", "Reform effect (pp)", "Standard error", "Observations"],
          rows: [
            ["Baseline (Table 4, column 2)", "−1.62***", "(0.34)", "86,700"],
            ["Cash net of short-term debt", "−1.49***", "(0.37)", "86,700"],
            ["Cash scaled by net assets", "−1.83***", "(0.41)", "86,700"],
            ["Countries weighted equally", "−1.71***", "(0.43)", "86,700"],
            ["Excluding China", "−1.38***", "(0.39)", "65,300"],
            ["Excluding India", "−1.86***", "(0.38)", "71,800"],
            ["Excluding crisis years", "−1.55***", "(0.36)", "68,400"],
            ["Exposure × macro controls", "−1.60***", "(0.35)", "86,700"],
            ["Balanced panel (3,140 firms)", "−1.68***", "(0.40)", "59,660"],
            ["Excluding multinationals", "−1.57***", "(0.37)", "70,200"],
            ["Placebo: reform dated five years earlier", "0.09", "(0.31)", "86,700"],
          ],
          note: "Note: Each row reports the Callaway–Sant'Anna average treatment effect on the treated for firms with above-median exposure, under the stated modification. Standard errors clustered by firm. *** p<0.01, ** p<0.05, * p<0.1.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our estimates allow a rough calculation of the aggregate stakes. Applying the reform effect of 1.62 percentage points to exposed firms, which hold about 60 percent of sample assets, implies that the reforms we study released liquidity equal to about 1 percent of the total assets of listed firms in the reforming economies. With the estimated pass-through of 0.36, roughly a third of this amount was reinvested in physical capital. These are modest numbers for any one year but not for an economy's capital stock over a decade, and they suggest that the cash accumulated after the two crises would have been smaller had financial markets been deeper.",
        "Three policy implications follow. First, reforms of the legal infrastructure of credit — collateral registries, movable-asset lending and efficient insolvency — have benefits beyond the volume of credit, because they reduce the self-insurance firms must undertake when credit may not be available in bad times. Second, the large and persistent increases in cash during the global financial crisis and the pandemic indicate that crisis-time liquidity support, while effective in preventing failures, did not fully restore firms' confidence in access to credit. Credible, rule-based backstops for corporate credit could reduce the incentive to hoard. Third, because the effects are concentrated among constrained firms without credit lines, policies that broaden access to committed bank facilities may be as valuable as policies that increase aggregate credit.",
        "Some caveats apply. Our sample consists of listed firms, which are larger and less constrained than the typical Asian firm; effects for unlisted small and medium-sized firms could be larger. Our reform index treats each reform as equally important, which is a simplification, and implementation quality varies across economies. Finally, precautionary cash also has social value as a buffer in crises: lower cash holdings are desirable only to the extent that they are replaced by reliable access to external finance."
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Corporate cash holdings of listed firms in nine Asian economies rose by 4.1 percentage points of assets between 2005 and 2023, with most of the increase concentrated in the global financial crisis and the COVID-19 pandemic. Firms in countries with deeper financial markets and stronger creditor rights hold less cash, and the sensitivity of cash to uncertainty is lower where finance is deeper. Exploiting within-firm variation in policy-driven measures of financial access, we show that reforms of secured transactions, insolvency and credit information reduced cash holdings of exposed firms by 1.62 percentage points and raised their investment by 0.58 percentage points of assets. These findings support a precautionary interpretation of corporate cash and imply that policies deepening domestic credit markets can have non-trivial effects on corporate investment. Extending the analysis to unlisted firms and to the interaction between corporate liquidity and monetary policy transmission are natural next steps.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Reform Coding and Variable Construction",
      paragraphs: [
        "Reform coding. We code a reform when a law or regulation takes effect that (i) expands the range of movable assets that can be used as collateral or creates a unified collateral registry, (ii) reorganises insolvency procedures so as to shorten resolution or strengthen the position of secured creditors, or (iii) materially expands the coverage of credit information through a public registry or licensed private bureaus. Dates are effective dates rather than dates of enactment. The 14 coded reforms are: China (secured transactions and insolvency, 2007); India (insolvency, 2016; credit information, 2009 licensing of credit bureaus); Indonesia (two credit-information reforms in the second half of the 2010s); Korea (secured transactions, 2012; insolvency, 2006); Malaysia (credit information, 2014; insolvency, 2018); the Philippines (secured transactions, 2018); Singapore (insolvency, 2017; credit information, 2016); and Thailand (secured transactions, 2016). Where two reforms took effect in the same year we count both but use the earliest date for the event study.",
        "Exposure. Movable-asset intensity is the sum of inventory, receivables and machinery and equipment divided by total assets, averaged over 2003–2004 or the first two years a firm appears. External finance dependence is the median, across US listed firms in the same industry over 1990–2004, of capital expenditure minus cash flow from operations divided by capital expenditure. Both measures are standardised to mean zero and unit variance within the sample.",
        "Constraint and governance measures. The Hadlock–Pierce index is computed from size and age as in the original paper, using total assets in constant 2015 US dollars capped at USD 4.5 billion and age capped at 37 years. Credit-line availability is taken from financial statement notes and is available for 74 percent of firms. Weak governance is defined as insider ownership above, or institutional ownership below, the country-year median.",
        "Inference. With only nine economies, conventional clustered standard errors at the country level may be unreliable. We report standard errors clustered by country-year and complement them with wild cluster bootstrap p-values clustered by country with 9,999 replications and Webb weights. Results are also robust to two-way clustering by firm and year.",
      ],
    },
  ],
};
