// Vol. 30, No. 1 (January 2025) — full text for an existing article (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2025-v30-i1-01",
  acknowledgments:
    "We thank seminar participants at Hanyang University, the Paris School of Economics and the Korea Fair Trade Commission's competition economics workshop, two anonymous referees and the handling editor for helpful comments. We are grateful to the participating platforms and to the Seoul Metropolitan Government for providing access to trip-level data under confidentiality agreements; none of them reviewed the conclusions before publication. All remaining errors are our own.",
  dataAvailability:
    "Trip-request data were provided by three ride-hailing platforms under non-disclosure agreements and cannot be shared; researchers may apply to the platforms for access on the same terms. Taxi operations data are available from the Seoul Metropolitan Government and the transport authorities of the other metropolitan cities on request. Aggregated market-level shares, prices and waiting times sufficient to replicate the demand estimates, together with estimation and simulation code, are available from the corresponding author.",
  editorialNote:
    "Min-Jae Choi and Caroline Dubois estimate a two-sided structural model of the Korean ride-hailing market and find that a merger of the second- and third-largest platforms would cost consumers KRW 162 billion a year in the short run — a KRW 231 billion price effect only partly offset by KRW 69 billion of network economies — while mandatory data portability would yield net welfare gains of KRW 47 billion.",
  refs: [
    /* 1 */ "Berry, S., Levinsohn, J., & Pakes, A. (1995). Automobile prices in market equilibrium. Econometrica, 63(4), 841–890.",
    /* 2 */ "Berry, S. T. (1994). Estimating discrete-choice models of product differentiation. RAND Journal of Economics, 25(2), 242–262.",
    /* 3 */ "Nevo, A. (2000). Mergers with differentiated products: The case of the ready-to-eat cereal industry. RAND Journal of Economics, 31(3), 395–421.",
    /* 4 */ "Nevo, A. (2001). Measuring market power in the ready-to-eat cereal industry. Econometrica, 69(2), 307–342.",
    /* 5 */ "Rochet, J.-C., & Tirole, J. (2003). Platform competition in two-sided markets. Journal of the European Economic Association, 1(4), 990–1029.",
    /* 6 */ "Armstrong, M. (2006). Competition in two-sided markets. RAND Journal of Economics, 37(3), 668–691.",
    /* 7 */ "Rysman, M. (2009). The economics of two-sided markets. Journal of Economic Perspectives, 23(3), 125–143.",
    /* 8 */ "Weyl, E. G. (2010). A price theory of multi-sided platforms. American Economic Review, 100(4), 1642–1672.",
    /* 9 */ "Cohen, P., Hahn, R., Hall, J., Levitt, S., & Metcalfe, R. (2016). Using big data to estimate consumer surplus: The case of Uber. NBER Working Paper No. 22627. Cambridge, MA: National Bureau of Economic Research.",
    /* 10 */ "Buchholz, N. (2022). Spatial equilibrium, search frictions, and dynamic efficiency in the taxi industry. Review of Economic Studies, 89(2), 556–591.",
    /* 11 */ "Frechette, G. R., Lizzeri, A., & Salz, T. (2019). Frictions in a competitive, regulated market: Evidence from taxis. American Economic Review, 109(8), 2954–2992.",
    /* 12 */ "Hall, J. V., & Krueger, A. B. (2018). An analysis of the labor market for Uber's driver-partners in the United States. ILR Review, 71(2), 705–732.",
    /* 13 */ "Chen, M. K., Rossi, P. E., Chevalier, J. A., & Oehlsen, E. (2019). The value of flexible work: Evidence from Uber drivers. Journal of Political Economy, 127(6), 2735–2794.",
    /* 14 */ "Angrist, J. D., Caldwell, S., & Hall, J. V. (2021). Uber versus taxi: A driver's eye view. American Economic Journal: Applied Economics, 13(3), 272–308.",
    /* 15 */ "Farrell, J., & Shapiro, C. (2010). Antitrust evaluation of horizontal mergers: An economic alternative to market definition. B.E. Journal of Theoretical Economics, 10(1), 1–41.",
    /* 16 */ "Williamson, O. E. (1968). Economies as an antitrust defense: The welfare tradeoffs. American Economic Review, 58(1), 18–36.",
    /* 17 */ "Werden, G. J., & Froeb, L. M. (1994). The effects of mergers in differentiated products industries: Logit demand and merger policy. Journal of Law, Economics, & Organization, 10(2), 407–426.",
    /* 18 */ "Miller, N. H., & Weinberg, M. C. (2017). Understanding the price effects of the MillerCoors joint venture. Econometrica, 85(6), 1763–1791.",
    /* 19 */ "Katz, M. L., & Shapiro, C. (1985). Network externalities, competition, and compatibility. American Economic Review, 75(3), 424–440.",
    /* 20 */ "Farrell, J., & Klemperer, P. (2007). Coordination and lock-in: Competition with switching costs and network effects. In M. Armstrong & R. Porter (Eds.), Handbook of industrial organization (Vol. 3, pp. 1967–2072). Amsterdam: North-Holland.",
    /* 21 */ "Jones, C. I., & Tonetti, C. (2020). Nonrivalry and the economics of data. American Economic Review, 110(9), 2819–2858.",
    /* 22 */ "Bergemann, D., & Bonatti, A. (2019). Markets for information: An introduction. Annual Review of Economics, 11, 85–107.",
    /* 23 */ "Crémer, J., de Montjoye, Y.-A., & Schweitzer, H. (2019). Competition policy for the digital era. Luxembourg: Publications Office of the European Union.",
    /* 24 */ "Petrin, A. (2002). Quantifying the benefits of new products: The case of the minivan. Journal of Political Economy, 110(4), 705–729.",
    /* 25 */ "Conlon, C., & Gortmaker, J. (2020). Best practices for differentiated products demand estimation with PyBLP. RAND Journal of Economics, 51(4), 1108–1161.",
    /* 26 */ "Lee, R. S. (2013). Vertical integration and exclusivity in platform and two-sided markets. American Economic Review, 103(7), 2960–3000.",
    /* 27 */ "Klemperer, P. (1995). Competition when consumers have switching costs: An overview with applications to industrial organization, macroeconomics, and international trade. Review of Economic Studies, 62(4), 515–539.",
    /* 28 */ { jer: "2023-v28-i1-03" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Ride-hailing has become one of the most visible digital markets in Korea. Within a decade of the first smartphone taxi-dispatch applications, the majority of taxi trips in the seven metropolitan cities are booked through an app rather than hailed on the street, and a single platform intermediates most of them. Because riders value short waiting times and drivers value a steady flow of requests, ride-hailing platforms are classic two-sided markets in which the value of joining one side depends on participation on the other [5][6][7]. These network effects create efficiencies, since a larger pool of drivers reduces waiting times and idle driving, but they also favour concentration and raise the cost of switching away from an incumbent platform [19][20].",
        "Competition authorities have struggled to translate these features into concrete merger and conduct decisions. Standard merger simulation, which predicts post-merger prices from estimated demand elasticities and the assumption of Bertrand competition [3][17], ignores the fact that a merger of two platforms also pools their driver fleets and may shorten waiting times for riders of both. Conversely, arguments that network effects justify consolidation are rarely quantified. A similar gap affects data-sharing mandates: proposals to let riders and drivers carry their trip histories, ratings and payment credentials from one platform to another are widely discussed [23], but their effect on market shares, prices and welfare depends on how large switching costs are relative to other sources of differentiation.",
        "This paper provides a structural estimate of the Korean ride-hailing market that can address both questions. We combine transaction-level trip-request data from three platforms with municipal taxi-operations records to construct prices, waiting times and market shares for 7 metropolitan cities, 74 districts, 60 months between January 2019 and December 2023 and four time-of-day bands. On the rider side we estimate a random-coefficients discrete-choice model in which demand for each platform depends on fares, expected waiting time and an inertia term that captures switching costs [1][2]. On the driver side we estimate a supply equation in which drivers allocate their hours across platforms in response to expected earnings per hour. Waiting times are determined in equilibrium by the number of drivers active on each platform, so cross-side network effects arise endogenously. Platforms set fares and commissions as Bertrand–Nash competitors.",
        "We use the estimated model for two counterfactuals. The first simulates a merger between the second- and third-largest platforms, which together hold about 15 percent of app-booked trips. Holding the fleets constant, the merged platform would raise fares by 6.8 percent, and rival platforms would follow with smaller increases. Pooling drivers reduces the merged platform's average waiting time by 0.9 minutes, which offsets part of the harm. On balance, consumer surplus falls by KRW 162 billion a year in the short run: a price effect of KRW 231 billion is only partly offset by KRW 69 billion in network economies. The second counterfactual simulates mandatory data portability, which we model as a reduction in rider and driver switching costs calibrated to the share of switching cost attributable to lost histories and ratings. Portability increases multihoming, compresses the leading platform's margin and yields net welfare gains of KRW 47 billion a year after subtracting reductions in platform profit and compliance costs.",
        "These estimates rest on several identifying assumptions. Fare endogeneity is addressed with instruments that exploit regulated meter-fare revisions, fuel prices and the characteristics of rival platforms in the same market [1][25]. Waiting times are endogenous because they depend on driver supply, which in turn depends on rider demand; we instrument them with weather-induced shifts in the opportunity cost of driving and with the staggered expiry of taxi licences in particular districts. Switching costs are identified from the persistence of individual riders' platform choices after we control for rider-level heterogeneity in tastes. Section 9 shows that the main conclusions survive alternative nesting structures, instruments and conduct assumptions.",
        "The paper contributes to three literatures. First, it adds to the structural analysis of mergers with differentiated products [3][15][18] by incorporating cross-side network effects into merger simulation, in the spirit of the price theory of multi-sided platforms [8][26]. Second, it adds to the growing empirical literature on taxi and ride-hailing markets [9][10][11][14], which has largely focused on consumer surplus and matching efficiency rather than competition between platforms. Third, it offers one of the first quantitative evaluations of data portability in a platform market [21][22][23], showing that the gains depend on the extent to which switching costs, rather than genuine network effects, sustain the incumbent's position. Section 2 describes the market, Section 3 reviews the literature, Section 4 sets out the model, Sections 5 and 6 describe the data and estimation, Sections 7 to 9 present results, counterfactuals and robustness checks, and Section 10 discusses policy implications.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korean taxi services are heavily regulated. Each metropolitan government sets the base fare, the distance and time rates and the late-night surcharge, and caps the number of licences, which are held either by individual owner-drivers or by corporate taxi companies employing salaried drivers. App-based platforms cannot set metered fares for standard taxis, but they can charge riders a booking fee or offer premium services with platform-determined fares, and they charge drivers commissions or monthly subscription fees in exchange for dispatch. In practice, platforms therefore compete on the all-in price paid by riders, including booking and premium fees, on the commission charged to drivers and, above all, on waiting times, which depend on the number of drivers using each app.",
        "The market tipped quickly towards one platform after 2015, when the leading messaging company launched a free taxi-dispatch service that benefited from an existing user base of tens of millions of messaging accounts. By 2019 this platform, which we refer to as Platform A, handled about four in five app-booked taxi trips. A van-based service that allowed riders to book vehicles with drivers operated under an exemption for rented vans grew rapidly in 2018–2019 but was effectively ended by the March 2020 amendment of the Passenger Transport Service Act, which restricted the exemption. Since then, competition has come mainly from Platforms B and C, which operate franchised taxi brands and standard dispatch services backed by large telecommunications and transport groups, and from Platform D, a smaller service associated with a corporate taxi association. Table 1 summarises market shares and characteristics.",
        "Competition policy has paid increasing attention to the sector. In 2023 the Korea Fair Trade Commission fined the leading platform about KRW 25.7 billion for allegedly favouring its own franchised taxis in the allocation of ride requests, and it has reviewed proposed tie-ups between smaller platforms. In parallel, the 2023 amendment of the Personal Information Protection Act introduced a general right for data subjects to request the transfer of their personal data to another service provider, with implementing rules for specific sectors still under discussion in 2024. Both developments motivate our counterfactuals: the merger simulation corresponds to the type of consolidation among challengers that has been discussed publicly, and the portability simulation to a sector-specific implementation of the new right.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Ride-hailing platforms in the Korean metropolitan market, 2019–2023",
          columns: ["Platform", "Share of app-booked trips 2019 (%)", "Share 2023 (%)", "Mean all-in fare (KRW)", "Mean waiting time (min)", "Drivers active per month (thousand)", "Driver commission (%)"],
          rows: [
            ["Platform A", "81.4", "77.6", "12,840", "4.6", "198.2", "3.8"],
            ["Platform B", "5.9", "8.9", "13,410", "6.3", "41.7", "5.1"],
            ["Platform C", "4.1", "6.2", "13,120", "6.9", "33.5", "4.6"],
            ["Platform D", "2.3", "3.1", "12,560", "8.4", "17.9", "2.5"],
            ["Other apps", "6.3", "4.2", "12,690", "8.8", "14.6", "3.0"],
            ["Street hail (outside option)", "", "", "11,980", "", "", ""],
          ],
          note: "Note: Shares are percentages of trips booked through any app in the seven metropolitan cities. All-in fare is the mean amount paid by riders per trip including booking and premium fees, in 2020 prices. Waiting time is the mean time between request confirmation and pickup. Drivers active per month counts drivers completing at least one trip on the platform in the month; drivers who multihome are counted on each platform. Driver commission is the mean effective commission including subscription fees, as a share of fare revenue.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "The theoretical literature on two-sided markets established that platform prices depend on the externalities each side exerts on the other, so that one side may be subsidised and price–cost margins on either side are not informative about market power on their own [5][6][8]. {7} reviews applications and emphasises that the strength of cross-side effects, the extent of multihoming and the degree of differentiation determine whether markets tip. {19} and {20} show how network effects and switching costs combine to create lock-in, and {27} surveys the implications of switching costs for competition. Our model brings these elements together in a form that can be estimated and used for counterfactual analysis.",
        "Empirical work on mergers with differentiated products typically combines a discrete-choice demand system with a Bertrand pricing assumption. {3} uses this approach to simulate mergers in the cereal industry, building on demand estimation methods developed by {1}, {2} and {4}. {17} show that logit demand delivers tractable merger predictions, and {15} propose upward pricing pressure as a screen that does not require market definition. Retrospectives such as {18} show that post-merger coordination can raise prices beyond what unilateral-effects models predict. The efficiency defence originates with {16}, who showed that modest cost savings can offset sizeable price increases in total-welfare terms. In platform markets, efficiencies arise naturally from network effects, and {26} shows how exclusivity and vertical integration interact with indirect network effects in the video game industry.",
        "A growing literature studies taxi and ride-hailing markets directly. {9} estimate that UberX generated large consumer surplus using discontinuities in surge pricing, while {10} and {11} quantify search and matching frictions in regulated taxi markets and show that dispatch technologies can substantially raise efficiency. On the driver side, {12} and {13} document the value drivers place on flexible hours and the elasticity of their labour supply, and {14} use a field experiment to show that drivers respond strongly to commission changes. These studies typically consider a single platform. Our contribution is to model competition between several platforms with endogenous waiting times and to use the model for policy counterfactuals.",
        "Finally, the economics of data emphasises that data are nonrival and that their value can be increased by sharing [21][22]. Policy reports have proposed portability and interoperability mandates as remedies for entrenched digital platforms [23], but there is little quantitative evidence on their effects. In the Korean context, earlier work in this journal found that removing entry barriers in regulated professions raised entry and lowered consumer prices [28], suggesting that the welfare effects of pro-competitive regulation can be sizeable. We provide a quantitative assessment of portability in a market in which switching costs are measurable.",
      ],
    },
    {
      id: "model",
      heading: "4. Model",
      paragraphs: [
        "The model has three types of agents: riders, drivers and platforms. Markets are defined by city, district, month and time-of-day band (weekday peak, weekday off-peak, weekend and late night). In each market, riders who wish to make a trip choose between the platforms and the outside option of hailing a taxi on the street or using public transport. Drivers allocate their hours among platforms, and platforms set the all-in fare paid by riders and the commission charged to drivers.",
      ],
      subsections: [
        {
          id: "model-demand",
          heading: "4.1 Rider demand",
          paragraphs: [
            "The utility of rider i choosing platform j in market m is u_ijm = δ_jm + μ_ijm + κ·1[j = j_i,prev] + ε_ijm, where δ_jm = ξ_j − α·p_jm − β·w_jm + ξ_jm is the mean utility common to all riders, p_jm is the all-in fare, w_jm is the expected waiting time, ξ_j is a platform fixed effect capturing brand and service quality and ξ_jm is an unobserved demand shock. The term μ_ijm = σ_p·ν_i·p_jm + σ_w·ν'_i·w_jm allows heterogeneity in price and waiting-time sensitivities, with ν_i and ν'_i drawn from standard normal distributions and rider income shifting the mean price coefficient. The inertia term κ captures switching costs: riders gain κ when they choose the platform they used for their previous trip, reflecting stored payment details, saved addresses, ratings history and loyalty points. The idiosyncratic shock ε_ijm is type-I extreme value, and the outside option has utility normalised to zero up to ε_i0m.",
            "Waiting time is the channel through which network effects enter. We model the expected waiting time on platform j as w_jm = ω_m·(D_jm)^(−η)·(Q_jm)^(θ), where D_jm is the number of drivers active on the platform in the market, Q_jm the number of trip requests and ω_m a market-specific scale reflecting district density and congestion. The parameter η governs economies of density: when more drivers are available, the nearest vehicle is closer. This specification is consistent with matching functions estimated for taxi markets [10][11] and implies that a merger that pools drivers shortens waiting times for both sets of riders.",
          ],
        },
        {
          id: "model-supply",
          heading: "4.2 Driver supply and platform conduct",
          paragraphs: [
            "Drivers choose how many hours to supply to each platform. The log number of drivers active on platform j in market m depends on expected hourly earnings, e_jm = (1 − c_jm)·p_jm·Q_jm/H_jm, where c_jm is the commission and H_jm total hours on the platform: ln D_jm = λ_j + ψ·ln e_jm + ρ·MH_m + ζ_jm. The elasticity ψ governs how strongly drivers respond to earnings, and MH_m, the share of drivers in the market who multihome, allows multihoming to vary across markets. Because higher demand raises earnings and attracts drivers, which reduces waiting times and raises demand further, the model features a positive feedback loop between the two sides [5][6].",
            "Platforms choose fares (where unregulated components allow) and commissions to maximise profits, Π_j = Σ_m [c_jm·p_jm·Q_jm − mc_jm·Q_jm] − F_j, where mc_jm is the marginal cost per trip of payment processing, customer support and incentives. In equilibrium, each platform's first-order conditions account for the effect of its prices on its own demand directly and through the induced change in driver supply and waiting times, as in {8}. We assume Bertrand–Nash conduct and recover marginal costs from the first-order conditions given estimated demand and supply parameters. A merger is modelled as joint profit maximisation over the merging platforms' prices; in the short-run scenario, their apps continue to operate separately but share a common driver pool.",
          ],
        },
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We combine three sources: trip-request data from three platforms, taxi-operations data from metropolitan governments and a rider panel used to identify switching costs. The resulting market-level panel covers 7 cities, 74 districts, 60 months and 4 time bands, for a total of 17,760 markets and 88,800 platform-market observations, including the aggregate of minor apps.",
      ],
      subsections: [
        {
          id: "data-platform",
          heading: "5.1 Trip-request and taxi-operations data",
          paragraphs: [
            "Under data-sharing agreements, Platforms B, C and D provided records of every trip request made on their apps between January 2019 and December 2023, including the time and location of the request, the fare paid, the time to pickup, cancellation and the anonymised identifiers of the rider and driver. In total these records contain 1.94 billion requests. For Platform A, which did not participate, we construct market-level quantities, fares and waiting times from the digital tachograph and card-payment records that every licensed taxi must transmit to the metropolitan transport authorities. These records identify the dispatch app through which each fare was booked, which allows us to compute Platform A's trips and fares by market. Waiting times for Platform A are measured as the interval between the vehicle's acceptance of the booking, recorded by the meter, and the start of the trip, which we validate against the participating platforms' records for drivers who multihome.",
            "Street-hailed trips, identified in the same tachograph records as trips not associated with any app, provide the outside option's fares. Market size is defined as the total number of taxi trips plus an estimate of potential trips by riders who used public transport for comparable journeys, constructed from transit smart-card data; in robustness checks we scale market size up and down by 25 percent. Prices are deflated to 2020 won using the consumer price index for transport services.",
          ],
        },
        {
          id: "data-panel",
          heading: "5.2 Rider panel and summary statistics",
          paragraphs: [
            "To identify switching costs, we draw a random panel of 250,000 riders who used at least one of the participating platforms during the sample period and observe the sequence of their trips on those platforms. Because the panel does not observe trips on Platform A directly, we combine it with a 2022 survey of 12,400 app users who reported the share of their trips taken on each platform and the reasons for switching. Riders who used more than one app in a given month accounted for 23 percent of users, and the share of riders who switched their main platform from one quarter to the next was 6.1 percent.",
            "Table 2 reports summary statistics. The mean all-in fare across markets was KRW 12,910 and the mean waiting time 5.1 minutes. Waiting times were 2.4 minutes longer during the late-night band than during the weekday off-peak, reflecting the shortage of drivers at night that has been a persistent policy concern in Seoul. Total app-booked trips in the seven cities were about 640 million a year in 2023, and the market leader's share fell gradually from 81.4 percent in 2019 to 77.6 percent in 2023 as franchised taxi brands grew.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Summary statistics, market-level panel",
              columns: ["Variable", "Mean", "Std. dev.", "Min", "Max"],
              rows: [
                ["All-in fare per trip (KRW, 2020 prices)", "12,910", "3,240", "6,180", "31,450"],
                ["Waiting time (minutes)", "5.1", "2.3", "1.4", "19.8"],
                ["Trips per market-month (thousand)", "36.0", "41.7", "0.4", "412.3"],
                ["Inside share of app platforms", "0.58", "0.17", "0.11", "0.89"],
                ["Active drivers per platform-market", "1,842", "2,615", "12", "21,480"],
                ["Share of drivers multihoming", "0.31", "0.11", "0.06", "0.62"],
                ["Effective commission (%)", "3.9", "1.2", "0.0", "9.7"],
                ["Late-night band indicator", "0.25", "0.43", "0", "1"],
                ["Rainfall day share", "0.27", "0.18", "0.00", "0.87"],
                ["Platform-market observations", "88,800", "", "", ""],
              ],
              note: "Note: Unit of observation is the platform-market, where a market is a city × district × month × time-of-day band, January 2019–December 2023. Inside share is the share of potential trips taken through any app. Multihoming drivers completed trips on at least two platforms in the market in the month.",
            },
          ],
        },
      ],
    },
    {
      id: "estimation",
      heading: "6. Estimation and Identification",
      paragraphs: [
        "We estimate the demand and supply equations jointly by generalised method of moments, following the nested fixed-point approach with the numerical refinements recommended by {25}. Mean utilities are recovered by inverting observed market shares [2], and the inertia term is estimated by adding micro-moments from the rider panel that match the predicted and observed probabilities of choosing the previous platform, conditional on observable rider characteristics, as in {24}.",
      ],
      subsections: [
        {
          id: "estimation-instruments",
          heading: "6.1 Instruments",
          paragraphs: [
            "Fares are correlated with unobserved demand shocks because platforms raise booking fees and premium prices when demand is high. We use three sets of instruments. The first exploits regulated meter-fare revisions: Seoul raised the base fare in February 2023, and other cities revised fares at different dates, shifting the fare component that platforms do not control. The second consists of cost shifters, namely liquefied petroleum gas prices interacted with average trip distance in the market. The third consists of the characteristics of rival platforms, such as the number of rival franchised vehicles in the district, in the spirit of {1}, together with differentiation instruments constructed as in {25}.",
            "Waiting times are endogenous because demand shocks attract drivers. We instrument them with two shifters of driver supply that should not affect rider utility directly once weather and time effects are controlled for. The first is the number of individual taxi licences in the district that reached the mandatory age limit for vehicle replacement in the month, which temporarily removes vehicles from the road. The second is the interaction of heavy-snow days with the share of drivers in the district aged over 65, who are much more likely to stop driving in hazardous conditions. On the supply side, expected earnings are instrumented with the demand shifters excluded from the driver equation: public-transport strikes, school holidays and large events near the district.",
          ],
        },
        {
          id: "estimation-switching",
          heading: "6.2 Identifying switching costs",
          paragraphs: [
            "The inertia parameter κ is identified from the persistence of individual choices conditional on persistent heterogeneity in tastes. Without random coefficients, persistence could reflect stable preferences rather than switching costs. We address this by estimating rider-specific taste parameters from the first ten trips in the panel and using only subsequent trips to identify κ, and by exploiting quasi-experimental variation from promotional campaigns that temporarily lowered fares on Platforms B and C in selected districts. Riders induced to try a challenger platform during a promotion were 14 percentage points more likely to use it again six months later than comparable riders in non-promotion districts, which is difficult to reconcile with pure preference heterogeneity and provides a direct moment for κ.",
            "To decompose switching costs into components that portability would and would not remove, we use the survey responses. Of the riders who considered switching but did not, 38 percent cited the loss of saved addresses, payment credentials and ratings or points, 33 percent cited longer expected waiting times on the alternative app and 29 percent cited habit or unfamiliarity with the interface. Because waiting times are modelled explicitly, we attribute the share of κ associated with stored data and histories, 57 percent once waiting-time responses are excluded, to factors that a portability mandate would address.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "This section reports the estimated demand and supply parameters, the implied elasticities and margins, and the two counterfactual simulations.",
      ],
      subsections: [
        {
          id: "results-estimates",
          heading: "7.1 Parameter estimates",
          paragraphs: [
            "Table 3 reports the main parameter estimates. Column (1) presents a simple logit estimated by ordinary least squares, column (2) the logit with instruments and column (3) the full random-coefficients model. Instrumenting increases the magnitude of both the fare and waiting-time coefficients, as expected if platforms charge more and attract more drivers where demand is high. In the full model, the mean price coefficient implies that riders would pay KRW 1,480 to reduce expected waiting time by one minute, which is close to the value of time implied by average hourly wages in Korean metropolitan areas and to estimates from surge-pricing experiments [9]. The switching-cost parameter corresponds to about KRW 2,870 per trip, or 22 percent of the average fare, and is precisely estimated.",
            "The supply-side estimates indicate that drivers respond strongly to earnings: a 10 percent increase in expected hourly earnings raises the number of active drivers on a platform by 7.4 percent, in line with the large driver elasticities reported by {13} and {14}. The matching parameter η is 0.41, implying that doubling the number of drivers on a platform reduces waiting times by about 25 percent. Together, these estimates imply substantial cross-side network effects: in an average market, adding 100 drivers to Platform B raises its rider demand by 2.3 percent through shorter waiting times.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Demand and supply parameter estimates",
              columns: ["Parameter", "(1) Logit OLS", "(2) Logit IV", "(3) Random coefficients"],
              rows: [
                ["Fare, α (per KRW 1,000)", "−0.142*** (0.011)", "−0.318*** (0.029)", "−0.354*** (0.034)"],
                ["Waiting time, β (per minute)", "−0.271*** (0.019)", "−0.447*** (0.051)", "−0.524*** (0.058)"],
                ["Std. dev. of fare coefficient, σ_p", "", "", "0.112*** (0.027)"],
                ["Std. dev. of waiting-time coefficient, σ_w", "", "", "0.186*** (0.044)"],
                ["Switching cost, κ", "", "", "1.016*** (0.082)"],
                ["Matching elasticity, η", "0.37*** (0.03)", "0.41*** (0.04)", "0.41*** (0.04)"],
                ["Driver earnings elasticity, ψ", "0.48*** (0.06)", "0.74*** (0.09)", "0.74*** (0.09)"],
                ["Implied value of one minute of waiting (KRW)", "1,910", "1,410", "1,480"],
                ["First-stage F (fare / waiting time)", "", "47.3 / 31.8", "47.3 / 31.8"],
                ["Observations", "88,800", "88,800", "88,800"],
              ],
              note: "Note: All specifications include platform × city, month and time-band fixed effects and controls for weather. Standard errors clustered by city × district in parentheses. Column (3) adds 250,000 riders' choice sequences as micro-moments. *** p < 0.01, ** p < 0.05, * p < 0.1.",
            },
          ],
        },
        {
          id: "results-elasticities",
          heading: "7.2 Elasticities, margins and market power",
          paragraphs: [
            "Table 4 reports the implied own- and cross-price elasticities and the recovered margins. Platform A faces the least elastic demand, with an own-fare elasticity of −2.1, reflecting both the large number of drivers on its network and the switching costs of its large installed base. Challenger platforms face elasticities between −3.6 and −4.4. Diversion ratios between Platforms B and C are high: when Platform B raises its fare, 28 percent of the riders it loses move to Platform C, compared with a diversion of only 9 percent that would be predicted from shares alone. This reflects their similar positioning as franchised-taxi brands with comparable vehicle standards and fare structures, and it is the key reason why a merger between them would raise prices substantially despite their modest combined share.",
            "The recovered margins indicate substantial market power for the leader. Platform A's price–cost margin per trip is about 31 percent of the platform's revenue, compared with 12 to 17 percent for the challengers. Decomposing the leader's margin, about one-third reflects the switching costs of its installed base and two-thirds reflects genuine network advantages arising from shorter waiting times. This decomposition is central to the portability counterfactual, because portability addresses only the first component.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Implied fare elasticities, diversion ratios and margins",
              columns: ["", "Platform A", "Platform B", "Platform C", "Platform D", "Outside option"],
              rows: [
                ["Own-fare elasticity", "−2.1", "−3.6", "−3.9", "−4.4", ""],
                ["Cross-elasticity w.r.t. Platform A fare", "", "0.42", "0.39", "0.33", "0.18"],
                ["Cross-elasticity w.r.t. Platform B fare", "0.04", "", "0.71", "0.21", "0.02"],
                ["Diversion from Platform B (%)", "39", "", "28", "6", "27"],
                ["Diversion from Platform C (%)", "37", "33", "", "7", "23"],
                ["Price–cost margin (% of platform revenue)", "31", "17", "15", "12", ""],
                ["Share of margin due to switching costs (%)", "34", "18", "16", "14", ""],
              ],
              note: "Note: Elasticities are averages across markets weighted by trips, evaluated at observed 2023 prices. Diversion ratios report the percentage of riders lost by the row platform after a small fare increase who switch to each column alternative; rows do not sum to 100 because minor apps are omitted. Margins are recovered from Bertrand–Nash first-order conditions including the effect of prices on driver supply.",
            },
          ],
        },
        {
          id: "results-merger",
          heading: "7.3 Merger simulation",
          paragraphs: [
            "We simulate a merger between Platforms B and C, the second- and third-largest platforms, under two scenarios. In the short-run scenario, the merged firm sets prices jointly and pools drivers across the two apps, but there are no cost savings and no changes in service quality. In the long-run scenario, we additionally allow the merged firm's marginal costs to fall by 5 percent, reflecting consolidated customer support and payment processing, and allow driver supply to adjust fully to the new commissions.",
            "Table 5 reports the results. In the short run, the merged platform raises its all-in fares by 6.8 percent on average, and Platform A raises its fares by 1.4 percent in response. Pooling drivers reduces waiting times on the merged platform by 0.9 minutes, from 6.6 to 5.7 minutes on average, and riders of the merged apps value this at KRW 69 billion a year. However, the price effect costs consumers KRW 231 billion a year, so the net change in consumer surplus is a loss of KRW 162 billion, about 2.0 percent of annual consumer expenditure on app-booked trips. Drivers lose KRW 18 billion as the merged platform raises its commission, while platform profits rise by KRW 106 billion. In the long run, cost savings and fuller driver adjustment reduce the consumer loss to KRW 94 billion, but it remains negative. Figure 1 shows how the consumer-surplus change varies with the assumed strength of the matching elasticity: the network economies would need to be about three times as strong as our estimate to offset the price effect.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Simulated effects of a merger between Platforms B and C (annual, KRW billion unless stated)",
              columns: ["Outcome", "Short run", "Long run"],
              rows: [
                ["Change in merged platform fares (%)", "6.8", "4.1"],
                ["Change in Platform A fares (%)", "1.4", "0.9"],
                ["Change in merged platform waiting time (min)", "−0.9", "−1.1"],
                ["Consumer surplus: price effect", "−231", "−178"],
                ["Consumer surplus: network economies", "69", "84"],
                ["Consumer surplus: total", "−162", "−94"],
                ["Driver surplus", "−18", "−11"],
                ["Platform profits", "106", "121"],
                ["Total welfare", "−74", "16"],
              ],
              note: "Note: Short run holds the number of drivers in each city at pre-merger levels and allows them to reallocate among platforms; the long run allows total driver supply to adjust and lowers the merged firm's marginal cost by 5 percent. Consumer surplus is computed using the log-sum formula with the inertia term evaluated at observed previous platforms. Figures are in 2020 prices and refer to the seven metropolitan cities.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Short-run change in consumer surplus from the merger by strength of network economies",
              kind: "line",
              xLabels: ["0.0", "0.2", "0.41", "0.6", "0.8", "1.0", "1.2", "1.4"],
              yLabel: "Change in consumer surplus (KRW billion per year)",
              series: [
                { name: "Total change", values: [-231, -198, -162, -127, -91, -58, -24, 7], lower: [-262, -227, -189, -156, -124, -95, -66, -39], upper: [-200, -169, -135, -98, -58, -21, 18, 53] },
                { name: "Price effect only", values: [-231, -231, -231, -231, -231, -231, -231, -231] },
              ],
              marker: 2,
              note: "Note: Horizontal axis shows the matching elasticity η used in the simulation; the marker indicates the estimated value of 0.41. Shaded band shows 95 percent confidence intervals from 200 parametric bootstrap draws of the remaining parameters.",
            },
          ],
        },
      ],
    },
    {
      id: "portability",
      heading: "8. Data Portability and Heterogeneity",
      paragraphs: [
        "We model mandatory data portability as a reduction in the switching cost κ for riders and an analogous reduction in drivers' costs of joining a second platform, which arise mainly from the loss of ratings and verified documents. Using the survey decomposition in Section 6.2, the baseline scenario removes 57 percent of riders' switching costs and halves drivers' multihoming costs. We also subtract annual compliance costs of KRW 5 billion, based on the costs of the application programming interfaces that would be required, as reported in industry submissions to the Personal Information Protection Commission.",
        "Table 6 reports the results. Portability raises the share of riders who multihome from 23 to 34 percent and the share of drivers who multihome from 31 to 39 percent. Platform A's share falls by 4.6 percentage points, and its all-in fares fall by 2.3 percent as its installed-base advantage shrinks. Consumer surplus rises by KRW 71 billion a year, of which KRW 52 billion comes from lower prices and KRW 19 billion from shorter waiting times on challenger platforms as drivers multihome more. Drivers gain KRW 9 billion from lower effective commissions. Platform profits fall by KRW 28 billion, almost entirely at Platform A. After compliance costs, the net welfare gain is KRW 47 billion a year.",
        "The gains are heterogeneous across markets. Figure 2 shows the change in consumer surplus per trip by time band and city size. Gains are largest during the late-night band in Seoul, where waiting times are long and the additional drivers who multihome after portability are most valuable, and smallest in weekday off-peak periods in smaller metropolitan cities, where waiting times are short and Platform A's share is highest. Riders in the top income tercile gain more in absolute terms because they take more trips, but per trip the gains are similar across income groups.",
        "The effects of portability also depend on the strength of the mandate. If portability covers only riders and not drivers, the net gain falls to KRW 31 billion, because the waiting-time benefits that arise from driver multihoming disappear. If, in addition, it removes only one-quarter of riders' switching costs, for example because riders rarely exercise the right, the net gain falls to KRW 12 billion. Conversely, a combination of portability with a ban on exclusivity incentives for drivers raises the net gain to KRW 64 billion. These scenarios suggest that driver-side portability, including ratings and verification records, matters as much as rider-side portability.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Simulated effects of mandatory data portability (annual)",
          columns: ["Outcome", "Rider and driver portability (baseline)", "Rider portability only", "Low take-up (25% of switching cost removed)", "Portability plus ban on driver exclusivity"],
          rows: [
            ["Rider multihoming share (%)", "34", "33", "27", "35"],
            ["Driver multihoming share (%)", "39", "31", "36", "46"],
            ["Change in Platform A share (pp)", "−4.6", "−3.5", "−1.7", "−6.2"],
            ["Change in Platform A fares (%)", "−2.3", "−1.8", "−0.8", "−3.1"],
            ["Consumer surplus (KRW billion)", "71", "48", "21", "93"],
            ["Driver surplus (KRW billion)", "9", "2", "4", "14"],
            ["Platform profits (KRW billion)", "−28", "−14", "−8", "−38"],
            ["Compliance costs (KRW billion)", "−5", "−5", "−5", "−5"],
            ["Net welfare (KRW billion)", "47", "31", "12", "64"],
          ],
          note: "Note: Simulations hold the market structure fixed and recompute the Bertrand–Nash equilibrium in fares, commissions, driver supply and waiting times. Baseline removes 57 percent of riders' switching costs and halves drivers' multihoming costs. Compliance costs cover the development and maintenance of transfer interfaces. Figures in 2020 prices for the seven metropolitan cities.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Consumer-surplus gain per trip from data portability, by time band and city",
          kind: "bar",
          xLabels: ["Weekday peak", "Weekday off-peak", "Weekend", "Late night"],
          yLabel: "Gain per trip (KRW)",
          series: [
            { name: "Seoul", values: [118, 74, 102, 196] },
            { name: "Other metropolitan cities", values: [96, 58, 81, 147] },
          ],
          note: "Note: Change in consumer surplus per trip under the baseline portability scenario, averaged across markets in each time band and weighted by trips. Other metropolitan cities are Busan, Incheon, Daegu, Daejeon, Gwangju and Ulsan.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "We examine the sensitivity of the main results to alternative modelling choices. First, we replace the random-coefficients specification with a nested logit in which all app platforms form one nest and the outside option another. The nesting parameter is 0.62 and the merger-induced consumer loss is KRW 141 billion, somewhat smaller than our baseline because the nested logit does not capture the particularly close substitution between Platforms B and C. Second, scaling market size by plus or minus 25 percent changes the consumer loss from the merger to between KRW 148 and 175 billion and the net gain from portability to between KRW 42 and 53 billion.",
        "Third, we vary the instruments. Using only cost shifters for fares and only licence-expiry shocks for waiting times yields a value of waiting time of KRW 1,390 per minute and a merger consumer loss of KRW 171 billion. Dropping the micro-moments from the promotional campaigns raises the estimated switching cost, because part of persistent heterogeneity is then attributed to inertia, and increases the net portability gain to KRW 58 billion; we regard the baseline as conservative in this respect. Fourth, we allow for partial collusion among platforms through a conduct parameter that weights rivals' profits. Conduct parameters up to 0.2 cannot be rejected, and with a parameter of 0.2 the merger loss rises to KRW 189 billion, consistent with evidence that mergers can facilitate coordination [18].",
        "Fifth, we examine whether pandemic-era disruptions drive the results by excluding March 2020 to December 2021. Estimates of the price and waiting-time coefficients change by less than 7 percent, and the counterfactual results are within 10 percent of the baseline. Finally, we use the model's predictions of Platform A's fare response to the 2023 Seoul meter-fare increase as an out-of-sample check. The model predicts a fall in Platform A's trips of 8.7 percent in the three months after the increase; the observed fall was 9.4 percent, within the model's 95 percent prediction interval.",
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results have three implications for competition policy in platform markets. First, network effects should be quantified rather than assumed. In our setting, the network economies from pooling the drivers of two challenger platforms are real and worth KRW 69 billion a year to riders, but they offset less than one-third of the price effect of the merger. This is because the challengers' fleets are already large enough that additional drivers yield diminishing reductions in waiting times, and because the two platforms are each other's closest substitutes. An efficiency defence based on network effects therefore requires evidence that the merging platforms are below the scale at which economies of density are exhausted, a condition that can be tested with the type of matching function estimated here.",
        "Second, the closeness of competition between challengers matters more than their combined share. A merger of two platforms that together account for only about 15 percent of app-booked trips would raise prices substantially because the merging platforms divert riders mainly to each other. Screens based on concentration indices would understate the harm; upward pricing pressure indices based on estimated diversion ratios [15] would flag it. Competition authorities reviewing platform mergers should therefore invest in estimating diversion, for example using switching surveys or data from promotions, rather than relying on shares alone.",
        "Third, data portability can deliver gains, but only if it addresses the components of switching costs that matter and covers both sides of the market. In our estimates, about one-third of the leading platform's margin reflects switching costs that portability can reduce; the remainder reflects network advantages that portability leaves intact. A portability mandate is therefore a complement to, not a substitute for, merger control and conduct regulation. Implementing rules should include driver ratings and verification records and should ensure that transfers are easy enough to be exercised; our low-take-up scenario shows that a formal right that is rarely used yields small gains.",
        "Several limitations should be noted. The model treats service quality other than waiting time as fixed, whereas platforms may compete on safety features, vehicle standards and customer service. Our data on Platform A are constructed from tachograph records and lack rider identifiers, so switching costs are identified mainly from riders of challenger platforms and the survey; if Platform A's users have different inertia, the portability results would change. We also abstract from dynamic investment, such as the development of autonomous or electric fleets, which may alter the long-run effects of consolidation.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We estimate a structural model of the Korean ride-hailing market with endogenous waiting times, driver supply and switching costs. A merger between the second- and third-largest platforms would cost riders KRW 162 billion a year in the short run, as a price effect of KRW 231 billion outweighs network economies of KRW 69 billion. Mandatory data portability for riders and drivers would increase multihoming, lower the leading platform's fares and raise welfare by KRW 47 billion a year net of reduced platform profits and compliance costs. Network effects are an important source of efficiency in platform markets, but in this market they are not strong enough to justify consolidation among the closest competitors, and they do not account for all of the leader's market power.",
        "The approach can be applied to other matching platforms in which service quality depends on participation on the other side, such as food delivery and short-term accommodation. Future work could incorporate dynamic investment decisions, model how portability would interact with the entry of new platforms and evaluate the effects of the data-portability rules once they are implemented in practice.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Construction of Platform A Quantities and Waiting Times",
      paragraphs: [
        "Tachograph records. Every licensed taxi in the seven metropolitan cities transmits trip records, including meter start and end times, distance, fare and the identifier of the dispatch app where relevant, to the metropolitan transport authority. We obtained these records for January 2019 to December 2023, covering about 3.4 billion trips. We assign each trip to the district of origin and the time band of the meter start. App identifiers are missing for 2.1 percent of trips in 2019, which we impute using the driver's app usage in adjacent days.",
        "Fares. Platform A's all-in fare equals the meter fare plus any booking or premium fee recorded in the card-payment data. For cash payments, which account for 4 percent of Platform A trips, we impute booking fees using the average for the same driver and service type.",
        "Waiting times. For each Platform A trip, waiting time is the interval between the meter's recording of an accepted booking and the start of the metered trip. To validate this measure, we compare it, for drivers who also work on participating platforms, with the platform-recorded pickup times; the correlation of market-level averages is 0.93, and the mean difference is 0.2 minutes, which we subtract.",
        "Market size. Potential trips equal taxi trips plus transit journeys of comparable origin, destination and time recorded in smart-card data with a door-to-door transit time exceeding 1.5 times the equivalent taxi time, a threshold chosen to reflect journeys for which taxis are a plausible alternative.",
      ],
    },
  ],
};
