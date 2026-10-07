// Vol. 30, No. 4 (October 2025) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2025-v30-i4-01",
  title: "Digital Payments and Small-Firm Growth: Evidence from the Expansion of UPI in India",
  authors: [{ name: "Aditi Sharma", corresponding: true }, { name: "Vikram Nair" }],
  abstract:
    "India's Unified Payments Interface (UPI) made instant, nearly free mobile payments available to any merchant able to display a QR code, and within five years it became the dominant retail payment rail in the country. We study how this expansion affected small firms using the staggered timing with which 612 districts reached a threshold density of UPI merchant acceptance between 2018 and 2021. Combining district-level payment, tax-registration and credit-bureau data with a quarterly panel of 286,000 small retail and service firms drawn from a widely used bookkeeping application, we estimate heterogeneity-robust event-study models. Three years after take-off, small-firm sales are 7.6 percent higher than in not-yet-treated districts, with no differential pre-trends. New registrations for the Goods and Services Tax rise by 11.4 percent, the number of new loans below ₹10 lakh increases by 17.6 percent without any rise in delinquency, and establishment entry rises by 5.2 percent. Gains are largest for the smallest and most cash-intensive firms and in districts hit hardest by the 2016 demonetisation. The results suggest that digital payment infrastructure eases growth constraints of small firms through lower transaction costs, wider customer reach and verifiable cash-flow records that support lending.",
  keywords: ["Digital payments", "UPI", "Small firms", "Financial inclusion", "India"],
  jelCodes: ["G21", "O16", "O33", "L25"],
  pages: "453–482",
  volume: 30,
  issue: 4,
  year: 2025,
  received: "2024-08-19",
  accepted: "2025-05-12",
  published: "2025-10-15",
  publishedOnline: "2025-10-02",
  citations: 6,
  downloads: 912,
  pdfSize: "1.62 MB",
  type: "Research Article",
  acknowledgments:
    "We thank seminar participants at IIM Ahmedabad, IGIDR, the NIPFP–DEA research conference and the Hanyang University economics seminar, two anonymous referees and the handling editor for helpful comments. We are grateful to the bookkeeping platform that shared anonymised firm records under a data-use agreement. The views expressed are those of the authors alone; all errors are our own.",
  dataAvailability:
    "District-level UPI statistics are compiled from public National Payments Corporation of India releases; GST registration counts were obtained from the GST Network under a research request; district credit aggregates are available for purchase from the credit bureau. The firm-level bookkeeping data are proprietary and were accessed under a non-disclosure agreement; researchers may apply to the provider for access. Code and district-level replication files are available from the corresponding author.",
  refs: [
    /* 1 */ "Chodorow-Reich, G., Gopinath, G., Mishra, P., & Narayanan, A. (2020). Cash and the economy: Evidence from India's demonetization. Quarterly Journal of Economics, 135(1), 57–103.",
    /* 2 */ "Crouzet, N., Gupta, A., & Mezzanotti, F. (2023). Shocks and technology adoption: Evidence from electronic payment systems. Journal of Political Economy, 131(11), 3003–3065.",
    /* 3 */ "Higgins, S. (2024). Financial technology adoption: Network externalities of cashless payments in Mexico. American Economic Review, 114(11), 3469–3512.",
    /* 4 */ "Jack, W., & Suri, T. (2014). Risk sharing and transactions costs: Evidence from Kenya's mobile money revolution. American Economic Review, 104(1), 183–223.",
    /* 5 */ "Suri, T., & Jack, W. (2016). The long-run poverty and gender impacts of mobile money. Science, 354(6317), 1288–1292.",
    /* 6 */ "Beck, T., Pamuk, H., Ramrattan, R., & Uras, B. R. (2018). Payment instruments, finance and development. Journal of Development Economics, 133, 162–186.",
    /* 7 */ "Aker, J. C., Boumnijel, R., McClelland, A., & Tierney, N. (2016). Payment mechanisms and antipoverty programs: Evidence from a mobile money cash transfer experiment in Niger. Economic Development and Cultural Change, 65(1), 1–37.",
    /* 8 */ "Riley, E. (2018). Mobile money and risk sharing against village shocks. Journal of Development Economics, 135, 43–58.",
    /* 9 */ "Muralidharan, K., Niehaus, P., & Sukhtankar, S. (2016). Building state capacity: Evidence from biometric smartcards in India. American Economic Review, 106(10), 2895–2929.",
    /* 10 */ "Burgess, R., & Pande, R. (2005). Do rural banks matter? Evidence from the Indian social banking experiment. American Economic Review, 95(3), 780–795.",
    /* 11 */ "Banerjee, A. V., & Duflo, E. (2014). Do firms want to borrow more? Testing credit constraints using a directed lending program. Review of Economic Studies, 81(2), 572–607.",
    /* 12 */ "de Mel, S., McKenzie, D., & Woodruff, C. (2008). Returns to capital in microenterprises: Evidence from a field experiment. Quarterly Journal of Economics, 123(4), 1329–1372.",
    /* 13 */ "Dupas, P., & Robinson, J. (2013). Savings constraints and microenterprise development: Evidence from a field experiment in Kenya. American Economic Journal: Applied Economics, 5(1), 163–192.",
    /* 14 */ "Banerjee, A., Duflo, E., Glennerster, R., & Kinnan, C. (2015). The miracle of microfinance? Evidence from a randomized evaluation. American Economic Journal: Applied Economics, 7(1), 22–53.",
    /* 15 */ "Hsieh, C.-T., & Klenow, P. J. (2009). Misallocation and manufacturing TFP in China and India. Quarterly Journal of Economics, 124(4), 1403–1448.",
    /* 16 */ "Hsieh, C.-T., & Klenow, P. J. (2014). The life cycle of plants in India and Mexico. Quarterly Journal of Economics, 129(3), 1035–1084.",
    /* 17 */ "La Porta, R., & Shleifer, A. (2014). Informality and development. Journal of Economic Perspectives, 28(3), 109–126.",
    /* 18 */ "Ghani, E., Kerr, W. R., & O'Connell, S. D. (2014). Spatial determinants of entrepreneurship in India. Regional Studies, 48(6), 1071–1089.",
    /* 19 */ "Pomeranz, D. (2015). No taxation without information: Deterrence and self-enforcement in the value added tax. American Economic Review, 105(8), 2539–2569.",
    /* 20 */ "Kleven, H. J., Kreiner, C. T., & Saez, E. (2016). Why can modern governments tax so much? An agency model of firms as fiscal intermediaries. Economica, 83(330), 219–246.",
    /* 21 */ "Gordon, R., & Li, W. (2009). Tax structures in developing countries: Many puzzles and a possible explanation. Journal of Public Economics, 93(7–8), 855–866.",
    /* 22 */ "Stiglitz, J. E., & Weiss, A. (1981). Credit rationing in markets with imperfect information. American Economic Review, 71(3), 393–410.",
    /* 23 */ "Petersen, M. A., & Rajan, R. G. (1994). The benefits of lending relationships: Evidence from small business data. Journal of Finance, 49(1), 3–37.",
    /* 24 */ "Berg, T., Burg, V., Gombović, A., & Puri, M. (2020). On the rise of fintechs: Credit scoring using digital footprints. Review of Financial Studies, 33(7), 2845–2897.",
    /* 25 */ "Callaway, B., & Sant'Anna, P. H. C. (2021). Difference-in-differences with multiple time periods. Journal of Econometrics, 225(2), 200–230.",
    /* 26 */ "Sun, L., & Abraham, S. (2021). Estimating dynamic treatment effects in event studies with heterogeneous treatment effects. Journal of Econometrics, 225(2), 175–199.",
    /* 27 */ "Goodman-Bacon, A. (2021). Difference-in-differences with variation in treatment timing. Journal of Econometrics, 225(2), 254–277.",
    /* 28 */ "de Chaisemartin, C., & D'Haultfœuille, X. (2020). Two-way fixed effects estimators with heterogeneous treatment effects. American Economic Review, 110(9), 2964–2996.",
    /* 29 */ "Rambachan, A., & Roth, J. (2023). A more credible approach to parallel trends. Review of Economic Studies, 90(5), 2555–2591.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Small firms account for the bulk of non-farm employment in India, yet most of them remain tiny, informal and cash-based throughout their lives. Plants in India grow far less with age than plants in the United States or even Mexico {16}, and the dispersion of marginal products across firms points to large frictions in the allocation of capital and customers [15]. Informality is both a symptom and a cause of this stagnation: firms that operate outside the tax net have limited access to formal credit, cannot easily sell to larger buyers and leave few verifiable records of their activity [17]. Cash is the glue that holds this equilibrium together. Cash transactions are costly to handle and insure, but they are also anonymous, which makes them attractive to firms that wish to stay below the radar of tax authorities and costly for lenders who need information on borrowers' revenues.",
        "The Unified Payments Interface (UPI), launched by the National Payments Corporation of India (NPCI) in 2016, offers an unusual opportunity to study what happens when this glue is dissolved. UPI is an interoperable real-time payment system that allows any bank account holder with a smartphone to pay any other account holder instantly and at zero cost to the payer. For merchants, accepting UPI requires nothing more than a printed QR code linked to a bank account; there is no terminal to rent and, for most of our sample period, no merchant discount rate. Monthly UPI transactions rose from fewer than 20 million in 2017 to more than 10 billion by 2023, and by the end of our sample person-to-merchant payments accounted for well over half of transaction volume. Few payment technologies anywhere have diffused so quickly.",
        "This paper estimates the effect of UPI merchant adoption on small-firm sales, formalisation, credit access and entry. Our identification exploits the staggered timing with which districts reached a threshold density of UPI acceptance. We define a district's take-off quarter as the first quarter in which active UPI merchant QR codes exceed 25 per 1,000 adults, a level at which consumers could expect to pay digitally at most neighbourhood shops. Take-off occurred between 2018 and 2021 for 565 of the 612 districts in our sample. The timing was shaped largely by supply-side factors—the sequencing of merchant-acquirer field networks, pre-existing bank and point-of-sale infrastructure and the rollout of 4G mobile coverage—that, conditional on state-by-quarter fixed effects and baseline characteristics, are unrelated to pre-existing trends in our outcomes.",
        "We combine four data sources: district-by-quarter UPI statistics compiled from NPCI releases; counts of new registrations for the Goods and Services Tax (GST); district aggregates of new small-business loans from a national credit bureau; and a quarterly panel of 286,000 small retail and service firms drawn from a widely used bookkeeping application, which records both cash and digital sales. Because treatment timing varies and effects are likely to grow over time, we rely on the heterogeneity-robust estimators of Callaway and Sant'Anna {25} and Sun and Abraham {26} rather than conventional two-way fixed effects regressions, which can be badly biased in this setting [27][28].",
        "Our main findings are as follows. Small-firm sales rise steadily after take-off and are 7.6 percent higher on average over the following three years than in not-yet-treated districts, reaching 10.2 percent by the twelfth quarter. Event-study estimates show no differential trends in the eight quarters before take-off. New GST registrations per 1,000 establishments rise by 11.4 percent and the share of panel firms registered for GST rises by 3.2 percentage points. The number of new loans below ₹10 lakh increases by 17.6 percent, driven by non-bank and fintech lenders that underwrite on the basis of digital transaction histories, and 12-month delinquency rates do not rise. Establishment entry increases by 5.2 percent, concentrated in retail trade and food services, with no increase in exit. Effects on sales are roughly twice as large for firms that were most cash-intensive before take-off and are larger in districts that experienced a more severe currency shortage during the 2016 demonetisation.",
        "The paper contributes to three literatures. First, it adds to work on the economic consequences of payment technologies, which has focused largely on households and on mobile money in Africa [4][5][8], and more recently on adoption dynamics among firms [2][3]. We provide evidence on the consequences of adoption for the growth of firms in a large emerging economy. Second, we contribute to the literature on small-firm growth and credit constraints in developing countries [11][12][13] by documenting a channel—the creation of verifiable cash-flow records—through which payment infrastructure relaxes informational constraints on lending. Third, we contribute to work on informality and tax capacity [17][19][20] by showing that digital payments are associated with voluntary formalisation, consistent with the view that third-party information trails make formal status less costly to avoid and more valuable to acquire.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "UPI was launched in April 2016 as an open protocol operated by NPCI, a not-for-profit company owned by a consortium of banks. It sits on top of the Immediate Payment Service and allows users to link one or more bank accounts to a virtual payment address, so that payments can be initiated with a phone number or a QR code rather than account details. Any licensed bank or authorised third-party application can connect to the system, and payments between applications are fully interoperable. Biometric authentication had already been used to reduce leakage in welfare payments [9], and UPI extended the same public digital infrastructure to everyday commerce.",
        "Initial take-up was slow. The decisive early impulse came from the demonetisation of November 2016, when 86 percent of currency in circulation by value ceased to be legal tender overnight. Replacement currency was distributed unevenly through the network of currency chests, producing sharp and spatially heterogeneous cash shortages that lasted several months {1}. Digital wallets and card payments surged during the shortage, but much of the increase in card use reversed once currency was remonetised. UPI adoption by merchants accelerated later, from 2018 onwards, as third-party applications deployed large field-sales teams to sign up small merchants with free printed QR codes and soundbox devices that announce incoming payments. Because the merchant discount rate on UPI was set to zero from January 2020, accepting UPI was effectively free for merchants, unlike debit or credit cards.",
        "The field networks of merchant acquirers were rolled out district by district. Acquirers generally entered districts with dense bank-branch networks and good 4G coverage first, since merchants needed a bank account and customers needed mobile data. The rollout of 4G coverage itself was driven by the network investments of telecom operators after 2016, which followed engineering and spectrum considerations rather than local business conditions. As a result, the date at which a district reached high merchant acceptance varied by as much as four years across otherwise similar districts within the same state. Two other policy developments are relevant to our outcomes. The GST, introduced in July 2017, replaced a patchwork of state and central indirect taxes with a single value-added tax with a registration threshold of ₹20 lakh (later ₹40 lakh for goods). The Account Aggregator framework, operational from 2021, allows firms to share bank transaction data with lenders electronically, making digital cash-flow records directly usable in loan underwriting.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "A large literature documents the effects of mobile money on households in developing countries. In Kenya, M-Pesa allowed households to smooth consumption in response to shocks by lowering the cost of remittances within social networks {4}, and access to mobile money lifted an estimated 2 percent of households out of poverty, with particularly large effects for female-headed households who moved from agriculture into business [5]. Mobile money also improved risk sharing against village-level shocks [8] and reduced the costs of delivering cash transfers [7]. Beck, Pamuk, Ramrattan and Uras {6} show, using a model calibrated to Kenyan firm data, that mobile payments can raise entrepreneurship by reducing the theft risk of cash and facilitating supplier credit. Our setting differs in that UPI is account-to-account and fully interoperable, and our focus is on the growth of incumbent firms and the entry of new ones.",
        "A newer literature studies the adoption of electronic payments by firms. Crouzet, Gupta and Mezzanotti {2} use the Indian demonetisation as a shock to the relative cost of cash and show that it triggered persistent adoption of a fintech wallet, consistent with strong network complementarities between merchants and consumers. Higgins {3} documents similar complementarities in Mexico, where the distribution of debit cards to welfare recipients led small retailers to adopt card terminals, which in turn induced further card adoption by consumers. Chodorow-Reich, Gopinath, Mishra and Narayanan {1} find that the demonetisation shock reduced economic activity and bank credit growth in districts with larger currency shortages, but also accelerated the adoption of alternative payment technologies. We take the adoption process as given and study its consequences for firms.",
        "Our analysis also relates to work on credit constraints of small firms. Field experiments find high marginal returns to capital in microenterprises [12], and directed lending programmes in India reveal that many firms are credit constrained [11]. Microfinance, by contrast, has had modest effects on average business outcomes [14], suggesting that the form and terms of credit matter. Information frictions are a classic source of credit rationing [22], which relationship lending can partly overcome [23]. Digital footprints can substitute for such relationships: Berg, Burg, Gombović and Puri {24} show that simple information from online purchases predicts default as well as credit-bureau scores. Payment records are a natural extension of this idea. Finally, the expansion of rural bank branches in India reduced rural poverty [10], and savings technologies help microenterprises invest [13]. UPI can be seen as a further, much cheaper expansion of the reach of formal finance.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework",
      paragraphs: [
        "To organise the empirical analysis, consider a small firm that chooses its scale and whether to register for GST. Sales depend on the number of customers the firm can serve and on the transaction cost of each sale. Accepting UPI affects the firm through three channels. The first is a transaction-cost channel: digital payments eliminate the need to hold and count change, reduce losses from theft and errors and make it possible to accept payments of any size, including small amounts for which making change is costly. The second is a demand channel: once consumers carry less cash, firms that accept digital payments capture sales that would otherwise be lost or diverted to larger stores. Because adoption by consumers and merchants is complementary [2][3], the demand channel strengthens as acceptance spreads within a district.",
        "The third is an information channel. Digital payments create a verifiable record of a firm's revenues. This record has two opposing effects on formalisation. It raises the expected cost of remaining informal, since revenues become more visible to the tax authority, and it raises the benefit of formal status, since lenders and large buyers can use the record together with GST filings to assess the firm. In the model of Gordon and Li {21}, firms trade off access to the financial sector against tax evasion; when the cost of evading taxes rises and the value of financial access increases simultaneously, formalisation becomes more attractive. The information channel also lowers the cost of screening borrowers for lenders [22], which should increase the supply of small loans, particularly by lenders that rely on automated underwriting rather than long-term relationships.",
        "The framework yields four predictions. First, sales should rise after take-off, and the increase should grow over time as acceptance and consumer usage spread. Second, effects should be larger for firms that relied more heavily on cash before take-off, for which transaction-cost savings are largest, and in districts where the demonetisation shock had already pushed consumers towards digital payments. Third, GST registrations and the number of small loans should increase, with the credit response concentrated among lenders that use transaction data. Fourth, lower fixed costs of operating and easier access to working capital should raise firm entry. If the gains of adopters came mainly at the expense of non-adopting competitors, we would instead expect increased exit and limited effects at the district level.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our sample consists of 612 districts, defined using 2011 Census boundaries, observed quarterly between 2016Q1 and 2023Q4. We exclude districts in Jammu and Kashmir and the north-eastern hill states, where internet shutdowns and data gaps make UPI statistics unreliable. Table 1 reports summary statistics for the full sample and separately for districts that reached take-off early (2018–2019) and late (2020 or later).",
      ],
      subsections: [
        {
          id: "data-payments",
          heading: "5.1 Payment Adoption",
          paragraphs: [
            "We construct district-by-quarter counts of active UPI merchant QR codes from NPCI's published statistics on merchant transactions by pin code, supplemented by acquirer-level onboarding reports that NPCI shares with member banks. A QR code is counted as active in a quarter if it receives at least five payments. We aggregate pin codes to districts and normalise by the adult population projected from the 2011 Census. Active merchant QR codes rose from 1.9 per 1,000 adults in the average district in 2017Q4 to 96.4 per 1,000 adults in 2023Q4. Our baseline threshold of 25 per 1,000 adults corresponds to roughly one accepting merchant for every three to four non-farm establishments, and districts crossed it rapidly: the median district moved from 10 to 40 codes per 1,000 adults within five quarters. Of the 612 districts, 96 reached take-off in 2018, 171 in 2019, 158 in 2020 and 140 in 2021; the remaining 47 crossed the threshold only in 2022 or 2023 and serve as late-treated controls.",
          ],
        },
        {
          id: "data-firms",
          heading: "5.2 Firm-Level Panel",
          paragraphs: [
            "Firm-level outcomes come from a widely used bookkeeping application through which small shopkeepers and service providers record sales, purchases and customer credit. The application was adopted by many small firms before UPI became widespread, because it replaced the paper ledger in which merchants recorded sales on credit; it records each sale with the mode of payment, so it captures cash and digital sales alike. We restrict the sample to firms that began using the application before 2018Q1, record at least one transaction in at least 20 of the 32 quarters and report annual turnover below ₹1.5 crore. This yields 286,412 firms and about 7.1 million firm-quarter observations. The firms are concentrated in grocery and general retail (46 percent), food services (14 percent), apparel and footwear (11 percent), personal services (12 percent) and small-scale manufacturing and repair (17 percent).",
          ],
        },
        {
          id: "data-admin",
          heading: "5.3 Administrative Outcomes",
          paragraphs: [
            "We measure formalisation using monthly counts of new GST registrations by district, obtained from the GST Network, and normalise them by the number of non-farm establishments in the 2013 Economic Census. Credit outcomes come from district-level aggregates of commercial credit-bureau records for loans to sole proprietorships and micro enterprises. We focus on new loans with sanctioned amounts below ₹10 lakh, and observe the number and value of loans by lender type (public-sector banks, private banks, non-bank financial companies and fintech lenders) and the share that is 90 days or more past due 12 months after origination. Firm entry is measured using new registrations on the government's Udyam portal for micro, small and medium enterprises, complemented by the first appearance of new firms in the bookkeeping panel. Exit is measured as the permanent cessation of transactions in the panel.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Summary statistics",
              columns: ["Variable", "All districts", "Early take-off (2018–19)", "Late take-off (2020–23)"],
              rows: [
                ["District level (612 districts)", "", "", ""],
                ["Adult population, 2016 (thousands)", "1,642", "1,958", "1,402"],
                ["Bank branches per 100,000 adults, 2015", "13.8", "16.1", "12.0"],
                ["Card POS terminals per 1,000 adults, 2016", "1.6", "2.4", "1.0"],
                ["Share of population with 4G coverage, 2017", "0.48", "0.61", "0.38"],
                ["Active UPI merchant QR codes per 1,000 adults, 2017Q4", "1.9", "2.8", "1.2"],
                ["Active UPI merchant QR codes per 1,000 adults, 2023Q4", "96.4", "118.7", "79.3"],
                ["New GST registrations per 1,000 establishments (quarterly)", "3.6", "4.1", "3.2"],
                ["New loans < ₹10 lakh per 1,000 establishments (quarterly)", "11.2", "13.5", "9.4"],
                ["Firm level (286,412 firms)", "", "", ""],
                ["Quarterly sales, 2017 (₹ thousand)", "412", "447", "381"],
                ["Digital share of sales, 2017", "0.07", "0.09", "0.05"],
                ["Registered for GST, 2017", "0.27", "0.30", "0.25"],
                ["Female owner", "0.14", "0.15", "0.13"],
                ["Any formal loan outstanding, 2017", "0.18", "0.21", "0.16"],
              ],
              note: "Note: District-level means are weighted by adult population. Firm-level statistics refer to the bookkeeping panel in 2017, before any district reached take-off. Take-off is the first quarter in which active UPI merchant QR codes exceed 25 per 1,000 adults.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our research design compares outcomes in districts that have reached take-off with outcomes in districts that have not yet done so, before and after take-off. Because take-off occurs at different dates and the effects of adoption are likely to grow with time, conventional two-way fixed effects estimates would use already-treated districts as controls for later-treated ones and could be severely biased [27][28]. We therefore use estimators that are robust to heterogeneous and dynamic treatment effects.",
      ],
      subsections: [
        {
          id: "estimation",
          heading: "6.1 Estimation",
          paragraphs: [
            "Our main estimator is that of Callaway and Sant'Anna {25}. For each take-off cohort g and quarter t, we estimate the group-time average treatment effect ATT(g,t) by comparing the change in outcomes between quarter g−1 and quarter t for cohort g with the corresponding change for districts that have not yet reached take-off by quarter t. We condition on baseline covariates—bank branch density, card terminal density, 4G coverage, urbanisation, literacy and the demonetisation cash shock—using the doubly robust estimator, and include state-by-quarter effects by residualising outcomes on them. Group-time effects are aggregated into event-time effects, weighted by cohort size, and into an overall average effect over the first 12 quarters after take-off. For firm-level outcomes, we run the same estimator on the firm panel, with firms inheriting the take-off date of their district, and cluster standard errors by district.",
            "We complement this with the interaction-weighted estimator of Sun and Abraham {26}, which uses the last-treated cohort as the control group, and the estimator of de Chaisemartin and D'Haultfœuille {28}, which compares switching districts with districts whose treatment status does not change between consecutive quarters. We also report conventional two-way fixed effects estimates for comparison. Finally, we estimate an instrumental-variables specification in which merchant QR density is instrumented by the interaction of the demonetisation cash shock of Chodorow-Reich, Gopinath, Mishra and Narayanan {1} with pre-2016 card terminal density, which captures the idea that the cash crunch accelerated digital adoption most in places with some existing digital readiness [2].",
          ],
        },
        {
          id: "identification",
          heading: "6.2 Identification",
          paragraphs: [
            "The key assumption is that, absent take-off, outcomes in districts that reached take-off at different dates would have evolved in parallel, conditional on covariates and state-by-quarter effects. Take-off timing was not random: Table 2 shows that districts with more bank branches, more card terminals, broader 4G coverage and larger demonetisation shocks reached take-off earlier. A one-standard-deviation increase in 4G coverage in 2017 brings take-off forward by about 1.2 quarters, conditional on state fixed effects. Crucially, however, take-off timing is not predicted by pre-2018 growth in firm sales, GST registrations or small-business credit, either individually or jointly. These variables enter with small and insignificant coefficients, and a joint test does not reject that they are all zero (p = 0.64).",
            "The infrastructure determinants of take-off are levels that are fixed before our sample, and we control for them flexibly. The remaining variation in timing reflects the order in which acquirers deployed field teams across districts with similar infrastructure, which industry sources describe as driven by logistical considerations such as the location of regional offices and the availability of field staff. We probe the parallel-trends assumption using the eight pre-take-off quarters in our event studies, and we assess the sensitivity of our conclusions to violations of parallel trends using the approach of Rambachan and Roth {29}.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Baseline characteristics and timing of UPI take-off",
              columns: ["Characteristic (standardised)", "Univariate", "Joint, with state FE"],
              rows: [
                ["Bank branches per 100,000 adults, 2015", "−0.92*** (0.14)", "−0.41*** (0.12)"],
                ["Card POS terminals per 1,000 adults, 2016", "−1.08*** (0.15)", "−0.56*** (0.13)"],
                ["4G population coverage, 2017", "−1.71*** (0.16)", "−1.18*** (0.15)"],
                ["Demonetisation cash shock", "−0.63*** (0.17)", "−0.37** (0.15)"],
                ["Urban population share, 2011", "−0.88*** (0.15)", "−0.21 (0.14)"],
                ["Literacy rate, 2011", "−0.54*** (0.16)", "−0.12 (0.13)"],
                ["Sales growth of panel firms, 2016–17", "−0.09 (0.12)", "0.03 (0.08)"],
                ["Growth in GST registrations, 2017Q3–2017Q4", "−0.06 (0.11)", "−0.02 (0.07)"],
                ["Growth in small-business loans, 2016–17", "−0.11 (0.13)", "0.04 (0.09)"],
                ["p-value: pre-trend variables jointly zero", "", "0.64"],
                ["Observations (districts)", "612", "612"],
              ],
              note: "Note: Dependent variable is the take-off quarter (number of quarters after 2018Q1). Negative coefficients indicate earlier take-off. Characteristics are standardised to mean zero and unit standard deviation. Robust standard errors in parentheses. ** p < 0.05, *** p < 0.01.",
            },
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
          id: "sales",
          heading: "7.1 Sales",
          paragraphs: [
            "Table 3 reports the main estimates of the effect of UPI take-off on small-firm sales. The Callaway–Sant'Anna estimate of the average effect over the first 12 quarters after take-off is 0.076, implying that sales of small firms are 7.6 percent higher than they would have been without take-off. The Sun–Abraham and de Chaisemartin–D'Haultfœuille estimates are similar at 0.074 and 0.071. The conventional two-way fixed effects estimate is smaller, at 0.052, consistent with the downward bias that arises when early-treated districts, whose effects are still growing, serve as controls for later-treated ones [27]. The instrumental-variables estimate is somewhat larger, at 0.091, which is plausible if the districts whose adoption was most accelerated by the demonetisation shock were also those with the largest latent demand for digital payments.",
            "The share of sales received digitally rises by 18.4 percentage points after take-off, from a pre-period mean of 7 percent. This first-stage response is large and confirms that the take-off measure captures a real change in how panel firms are paid. Taking the ratio of the two estimates, a 10 percentage point increase in the digital share of sales is associated with roughly 4 percent higher sales. Cash sales fall by only 9.4 percent, while the number of distinct customers rises by 6.1 percent.",
            "Figure 1 shows the event-study estimates. Coefficients in the eight quarters before take-off are small, never exceed 0.6 log points in absolute value and are jointly insignificant (p = 0.71). After take-off, sales rise gradually: the effect is 2.4 percent in the take-off quarter, 6.3 percent after one year, 8.6 percent after two years and 10.2 percent after three years. The gradual increase is consistent with the network complementarities emphasised by Crouzet, Gupta and Mezzanotti {2} and Higgins {3}, as consumer usage of UPI continues to grow for several years after merchant acceptance crosses our threshold. Using the approach of Rambachan and Roth {29}, the average post-take-off effect remains significantly positive unless violations of parallel trends after take-off are more than 1.8 times as large as the largest violation observed between consecutive pre-take-off quarters.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. UPI take-off and small-firm sales",
              columns: ["Outcome", "TWFE", "Callaway–Sant'Anna", "Sun–Abraham", "dCDH", "IV"],
              rows: [
                ["Log quarterly sales", "0.052***", "0.076***", "0.074***", "0.071***", "0.091***"],
                ["", "(0.014)", "(0.018)", "(0.017)", "(0.020)", "(0.031)"],
                ["Digital share of sales", "0.142***", "0.184***", "0.179***", "0.176***", "0.213***"],
                ["", "(0.011)", "(0.013)", "(0.013)", "(0.015)", "(0.024)"],
                ["Log cash sales", "−0.071***", "−0.094***", "−0.090***", "−0.088***", "−0.103***"],
                ["", "(0.016)", "(0.021)", "(0.020)", "(0.023)", "(0.035)"],
                ["Log distinct customers", "0.044***", "0.061***", "0.058***", "0.055***", "0.072**"],
                ["", "(0.013)", "(0.016)", "(0.016)", "(0.018)", "(0.029)"],
                ["Firm-quarter observations", "7,148,320", "7,148,320", "7,148,320", "7,148,320", "7,148,320"],
                ["First-stage F-statistic", "", "", "", "", "38.6"],
              ],
              note: "Note: Each cell is a separate estimate of the average effect over the 12 quarters after take-off. dCDH is the de Chaisemartin–D'Haultfœuille estimator. IV instruments merchant QR density with the demonetisation cash shock interacted with 2016 card terminal density; coefficients are rescaled to the average change in QR density at take-off. Standard errors clustered by district in parentheses. ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Event-study estimates of the effect of UPI take-off on log sales of small firms",
              kind: "line",
              xLabels: ["−8", "−7", "−6", "−5", "−4", "−3", "−2", "−1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
              yLabel: "Effect on log sales (×100)",
              series: [
                {
                  name: "Callaway–Sant'Anna estimate",
                  values: [0.4, -0.6, 0.2, -0.3, 0.5, -0.2, 0.1, 0, 2.4, 4.1, 5.4, 6.3, 7.1, 7.7, 8.2, 8.6, 9.0, 9.4, 9.7, 10.0, 10.2],
                  lower: [-1.8, -2.8, -2.0, -2.5, -1.7, -2.4, -2.1, 0, 0.0, 1.7, 2.9, 3.8, 4.4, 5.0, 5.3, 5.7, 5.9, 6.3, 6.4, 6.7, 6.7],
                  upper: [2.6, 1.6, 2.4, 1.9, 2.7, 2.0, 2.3, 0, 4.8, 6.5, 7.9, 8.8, 9.8, 10.4, 11.1, 11.5, 12.1, 12.5, 13.0, 13.3, 13.7],
                },
              ],
              marker: 7,
              note: "Note: Quarters relative to take-off; quarter −1 is the reference period. Estimates use not-yet-treated districts as controls; 95 percent confidence intervals based on standard errors clustered by district. The dashed line marks the quarter before take-off.",
            },
          ],
        },
        {
          id: "formalisation-credit",
          heading: "7.2 Formalisation and Credit",
          paragraphs: [
            "Table 4 reports effects on formalisation and credit. New GST registrations per 1,000 establishments increase by 0.41 per quarter, or 11.4 percent relative to the pre-take-off mean of 3.6. Among panel firms, the probability of being registered for GST rises by 3.2 percentage points from a baseline of 27 percent. The increase is concentrated among firms with turnover close to the registration threshold, many of which register voluntarily in order to claim input tax credits and to sell to registered buyers. Because GST registration requires firms to file regular returns that can be matched with buyers' filings, these registrations represent a real increase in the visibility of small firms to the tax authority [19][20].",
            "The number of new loans below ₹10 lakh rises by 0.162 log points, or 17.6 percent. The increase is driven by non-bank financial companies and fintech lenders, whose share of new small loans rises by 4.8 percentage points, consistent with their reliance on digital transaction data in underwriting [24]. Average loan size falls slightly, though not significantly, indicating that the additional loans are mostly small working-capital loans to first-time or thin-file borrowers. In the firm panel, the probability of obtaining a new formal loan within four quarters rises by 1.1 percentage points from a baseline of 4.2 percent. Importantly, there is no evidence that the expansion of credit came with a deterioration in loan quality: the share of new loans that are 90 or more days past due after 12 months is essentially unchanged.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. UPI take-off, formalisation and credit (Callaway–Sant'Anna estimates)",
              columns: ["Outcome", "Pre-take-off mean", "ATT", "Std. error", "Percent effect"],
              rows: [
                ["New GST registrations per 1,000 establishments", "3.6", "0.41***", "(0.11)", "11.4"],
                ["Firm registered for GST (panel)", "0.27", "0.032***", "(0.008)", "11.9"],
                ["Log number of new loans < ₹10 lakh", "—", "0.162***", "(0.041)", "17.6"],
                ["Log value of new loans < ₹10 lakh", "—", "0.131***", "(0.045)", "14.0"],
                ["NBFC and fintech share of new small loans", "0.23", "0.048***", "(0.012)", "20.9"],
                ["Log average loan size", "—", "−0.031", "(0.027)", "−3.1"],
                ["New formal loan within four quarters (panel)", "0.042", "0.011***", "(0.003)", "26.2"],
                ["Share of new loans 90+ days past due at 12 months", "0.061", "−0.002", "(0.003)", "−3.3"],
              ],
              note: "Note: Average effects over the 12 quarters after take-off, using not-yet-treated districts as controls. District-level outcomes are weighted by the number of establishments; panel outcomes are firm-level. Percent effects for log outcomes are computed as exp(ATT) − 1. Standard errors clustered by district in parentheses. *** p < 0.01.",
            },
          ],
        },
        {
          id: "entry",
          heading: "7.3 Firm Entry and Exit",
          paragraphs: [
            "Figure 2 reports effects on establishment entry and exit by sector. Udyam registrations of new micro enterprises rise by 5.2 percent after take-off, and the entry of new firms into the bookkeeping panel rises by a similar amount. Entry increases most in food services (7.4 percent) and retail trade (6.8 percent), sectors in which customers make many small payments and in which the cost of handling cash is high relative to margins. Entry in small-scale manufacturing and repair, where payments are larger and often made on credit between firms, barely changes.",
            "If the gains of adopting firms came mainly from stealing customers from non-adopters, we would expect exit to increase. Instead, exit rates in the panel fall slightly, by 0.8 percent on average, and the decline is significant only in retail trade. This pattern suggests that the sales gains documented above reflect an expansion of total small-firm activity rather than pure reallocation among small firms. The finding echoes the importance of local conditions for entrepreneurship in India documented by Ghani, Kerr and O'Connell {18}.",
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Effects of UPI take-off on establishment entry and exit by sector",
              kind: "bar",
              xLabels: ["Retail trade", "Food services", "Personal services", "Manufacturing and repair", "All sectors"],
              yLabel: "Percent change",
              series: [
                { name: "Entry", values: [6.8, 7.4, 5.9, 1.6, 5.2] },
                { name: "Exit", values: [-1.2, -0.4, -0.9, 0.8, -0.8] },
              ],
              note: "Note: Callaway–Sant'Anna average effects over the 12 quarters after take-off. Entry is measured by new Udyam registrations; exit by the permanent cessation of transactions in the bookkeeping panel.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Table 5 examines heterogeneity in the effects on sales, GST registration and new borrowing. Consistent with the transaction-cost channel, the effect on sales is roughly twice as large for firms whose cash share of sales in 2017 was above the median (10.1 percent) as for firms below the median (4.9 percent). Effects also decline with firm size: sales rise by 9.4 percent for firms in the bottom tercile of 2017 turnover but by 5.1 percent for the top tercile. Small firms appear to benefit most because the fixed costs of handling cash and of offering alternatives such as card terminals weighed most heavily on them.",
        "The effect on sales is larger in districts with an above-median demonetisation cash shock (9.2 percent versus 5.8 percent). In these districts, consumers had already experimented with digital payments during the currency shortage of 2016–2017 {1}, so that merchant acceptance translated more quickly into consumer usage. This pattern is consistent with the persistence of adoption after temporary shocks documented by Crouzet, Gupta and Mezzanotti {2}.",
        "The heterogeneity in credit outcomes supports the information channel. The increase in borrowing is concentrated among firms whose digital share of sales rose by more than the median after take-off, for which lenders could observe a longer and richer record of revenues. Among these firms the probability of a new formal loan rises by 1.9 percentage points; among firms with below-median increases in digital receipts the effect is only 0.4 percentage points and insignificant. The credit response also strengthens markedly after 2021, when the Account Aggregator framework made it possible to share bank-statement data with lenders electronically. These patterns are difficult to reconcile with a pure demand explanation, in which firms borrow more simply because their sales have grown, since the sales response does not differ in the same way. They are consistent with the view that information frictions, rather than a lack of profitable investment opportunities, constrain small-firm borrowing [11][22][23].",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Heterogeneous effects of UPI take-off (Callaway–Sant'Anna estimates)",
          columns: ["Subsample", "Log sales", "GST registered", "New formal loan"],
          rows: [
            ["Cash share of sales, 2017: above median", "0.101*** (0.021)", "0.041*** (0.010)", "0.013*** (0.004)"],
            ["Cash share of sales, 2017: below median", "0.049*** (0.017)", "0.022*** (0.008)", "0.009*** (0.003)"],
            ["Turnover, 2017: bottom tercile", "0.094*** (0.022)", "0.018** (0.008)", "0.012*** (0.004)"],
            ["Turnover, 2017: middle tercile", "0.077*** (0.019)", "0.031*** (0.009)", "0.011*** (0.004)"],
            ["Turnover, 2017: top tercile", "0.051*** (0.018)", "0.049*** (0.012)", "0.010** (0.004)"],
            ["Demonetisation shock: above median", "0.092*** (0.022)", "0.037*** (0.010)", "0.013*** (0.004)"],
            ["Demonetisation shock: below median", "0.058*** (0.019)", "0.027*** (0.009)", "0.009** (0.004)"],
            ["Urban districts", "0.081*** (0.019)", "0.035*** (0.009)", "0.012*** (0.004)"],
            ["Rural districts", "0.069*** (0.023)", "0.027*** (0.010)", "0.009** (0.004)"],
            ["Female-owned firms", "0.083*** (0.026)", "0.029** (0.012)", "0.012** (0.005)"],
            ["Male-owned firms", "0.074*** (0.018)", "0.033*** (0.008)", "0.011*** (0.003)"],
            ["Rise in digital share: above median", "0.088*** (0.020)", "0.044*** (0.010)", "0.019*** (0.005)"],
            ["Rise in digital share: below median", "0.063*** (0.019)", "0.020** (0.009)", "0.004 (0.003)"],
          ],
          note: "Note: Each cell is a separate estimate on the indicated subsample of the bookkeeping panel; average effects over the 12 quarters after take-off. GST registered and new formal loan (within four quarters) are binary outcomes. Standard errors clustered by district in parentheses. ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a range of robustness checks for the three main outcomes. Results are similar when we use only never-treated (late-treated) districts as controls, when we lower the take-off threshold to 15 codes per 1,000 adults or raise it to 40, and when we add district-specific linear trends. Because the COVID-19 pandemic affected small firms severely and may have accelerated digital adoption, we drop the quarters from 2020Q2 to 2021Q2 and obtain nearly identical estimates. Excluding the 53 metropolitan districts, where large retailers and card payments were already common, slightly increases the estimates. Reweighting the bookkeeping panel to match the sectoral and urban–rural composition of the Annual Survey of Unincorporated Sector Enterprises leaves the sales estimate at 0.072.",
        "Two further checks address the concern that take-off coincides with other district-level shocks. First, a placebo test that assigns each district a take-off date eight quarters earlier than its actual date yields estimates close to zero for all three outcomes. Second, controlling for the rollout of the GST e-way bill system and for state-level changes in MSME support schemes does not affect the results. The instrumental-variables estimates, which rely only on variation in adoption induced by the interaction of the demonetisation shock with pre-existing card infrastructure, are larger than the baseline but statistically indistinguishable from it.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness checks",
          columns: ["Specification", "Log sales", "New GST registrations", "Log new small loans"],
          rows: [
            ["Baseline (Callaway–Sant'Anna)", "0.076***", "0.41***", "0.162***"],
            ["Late-treated districts as controls only", "0.079***", "0.43***", "0.170***"],
            ["Threshold of 15 QR codes per 1,000 adults", "0.071***", "0.38***", "0.151***"],
            ["Threshold of 40 QR codes per 1,000 adults", "0.082***", "0.44***", "0.174***"],
            ["District-specific linear trends", "0.070***", "0.37***", "0.149***"],
            ["Excluding 2020Q2–2021Q2", "0.073***", "0.40***", "0.158***"],
            ["Excluding metropolitan districts", "0.080***", "0.42***", "0.168***"],
            ["Panel reweighted to survey composition", "0.072***", "—", "—"],
            ["IV: demonetisation shock × POS density", "0.091***", "0.49**", "0.197***"],
            ["Placebo: take-off eight quarters earlier", "0.004", "0.03", "0.011"],
          ],
          note: "Note: Each cell is a separate estimate of the average effect over the 12 quarters after take-off. New GST registrations are per 1,000 establishments. Standard errors (not shown) are clustered by district. ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our estimates imply economically significant gains from the diffusion of digital payments to small firms. Applying the average sales effect to the panel firms implies an increase of about ₹31,000 in quarterly sales per firm, roughly equal to the monthly earnings of a hired shop assistant. Aggregated across the roughly 60 million non-farm establishments in India, and assuming that the effects in our panel are representative of firms of similar size, the gains are large relative to the public cost of the payment infrastructure.",
        "The results speak to the debate over whether formalisation follows or precedes growth [17]. We find that a technology that makes firm revenues more visible was followed by an increase in voluntary GST registration alongside growth in sales and credit. This suggests that, at least for firms near the registration threshold, the benefits of formal status rise with digital records by more than the costs of greater tax visibility. Policies that make digital payments costly for small firms, such as reintroducing a merchant discount rate or tying digital receipts mechanically to tax assessments, could reverse this balance. The zero-fee regime has been criticised for leaving the payment system without a sustainable revenue model, and our results suggest that any move to charge merchants should exempt the smallest firms, for which the benefits are largest.",
        "Our analysis has limitations. The bookkeeping panel over-represents urban and digitally connected firms, so effects for the smallest informal enterprises may differ. We observe sales but not profits, so we cannot rule out that some of the sales gains are offset by higher costs, although the absence of increased exit suggests that profitability did not decline. And while our design addresses the most obvious threats to identification, the timing of take-off is not randomly assigned, and we cannot fully exclude unobserved shocks that coincided with the arrival of acquirers' field teams.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "This paper has studied the effects of the expansion of UPI merchant payments on small firms in India. Exploiting the staggered timing with which districts reached high levels of merchant acceptance, we find that digital payments raised small-firm sales by 7.6 percent on average over three years, increased GST registrations by 11.4 percent, raised the number of new small-business loans by 17.6 percent without increasing defaults and raised establishment entry by 5.2 percent. The gains were largest for the smallest and most cash-dependent firms and in districts where the demonetisation shock had already familiarised consumers with digital payments.",
        "The results suggest that cash is not merely a neutral medium of exchange for small firms in developing economies but part of an equilibrium of small scale, informality and limited access to credit. Low-cost, interoperable digital payments can help to unravel this equilibrium by lowering transaction costs, expanding customer reach and creating information that lenders and the state can use. Future research could study the effects on profits and employment within firms, the interaction between digital payments and the formal supply chains of larger buyers, and whether the gains persist as the payment system moves towards charging merchants for its services.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "UPI merchant statistics. NPCI releases monthly statistics on UPI person-to-merchant transactions by state and, for member banks, by pin code. We map 19,100 pin codes to 2011 Census districts using the India Post directory and population-weighted correspondence for pin codes that straddle district boundaries. A merchant QR code is counted as active in a quarter if it receives at least five payments; results are similar when we use one or ten payments. Adult population by district and year is interpolated from the 2011 Census using state-level projections of the Registrar General of India.",
        "Administrative outcomes. GST registration counts are monthly by district and are aggregated to quarters; we exclude registrations by non-resident taxable persons and by tax-deductors. Credit-bureau aggregates cover all commercial loans to sole proprietorships and micro enterprises reported by member institutions. Lender types are classified by the bureau; we group fintech lenders with non-bank financial companies because many fintech platforms lend through partner non-banks. The demonetisation cash shock is the measure of Chodorow-Reich, Gopinath, Mishra and Narayanan {1}, constructed from the distribution of new currency across currency chests in November and December 2016.",
      ],
    },
  ],
};
