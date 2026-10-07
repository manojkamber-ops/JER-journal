// Vol. 26, No. 1 (January 2021) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i1-07",
  title: "Public Health Insurance Expansion and Out-of-Pocket Spending: Evidence from Indonesia's JKN",
  authors: [
    {
      name: "Dewi Kusumawardani",
      corresponding: true,
      affiliation: { department: "Faculty of Economics and Business", institution: "Universitas Indonesia", city: "Depok", country: "Indonesia" },
    },
    {
      name: "Thomas Brennan",
      corresponding: false,
      affiliation: { department: "Crawford School of Public Policy", institution: "Australian National University", city: "Canberra", country: "Australia" },
    },
  ],
  abstract:
    "Indonesia's Jaminan Kesehatan Nasional (JKN), launched in January 2014, has become the largest single-payer health insurance scheme in the world, covering more than 220 million people by 2019. We ask whether it reduced the out-of-pocket health spending of Indonesian households and for whom. Using SUSENAS household surveys for 2011–2019 combined with district-level administrative enrolment data from BPJS Kesehatan, we exploit variation in the speed with which subsidised (PBI) membership was rolled out across 514 districts in an event-study and instrumental-variables design. JKN enrolment raises outpatient visits by 11 percent and inpatient admissions by 18 percent among households in the poorest quintile. Out-of-pocket spending falls by 14 percent for the bottom two quintiles but is unchanged for the top quintile, and the incidence of catastrophic health expenditure — spending above 10 percent of household consumption — declines by 2.1 percentage points among the poorest 40 percent. The gains are markedly smaller in districts outside Java with fewer hospital beds per capita, where higher utilisation is constrained by the availability of facilities. Expanding financial coverage protects poor households, but supply-side investment is needed for insurance to deliver equal benefits across regions.",
  keywords: ["health insurance", "universal health coverage", "out-of-pocket spending", "catastrophic expenditure", "Indonesia"],
  jelCodes: ["I13", "I18", "H51", "O15"],
  pages: "1–29",
  volume: 26,
  issue: 1,
  year: 2021,
  received: "2020-01-02",
  accepted: "2020-09-12",
  published: "2021-01-15",
  publishedOnline: "2021-01-04",
  citations: 58,
  downloads: 2675,
  pdfSize: "1.59 MB",
  type: "Research Article",
  acknowledgments:
    "We thank participants at the Universitas Indonesia health economics workshop, the ANU Indonesia Update and the Hanyang University economics seminar, two anonymous referees and the handling editor for helpful comments. We are grateful to staff of BPJS Kesehatan for clarifying the construction of the district enrolment series.",
  dataAvailability:
    "SUSENAS microdata are available from Statistics Indonesia (BPS) on application. District enrolment data were provided by BPJS Kesehatan under a data-use agreement; aggregated series are published in its annual reports. Hospital bed counts are from the Ministry of Health's facility registry. Code is available from the corresponding author.",
  editorialNote:
    "Dewi Kusumawardani and Thomas Brennan find that Indonesia's national health insurance scheme raised outpatient visits by 11 percent and inpatient admissions by 18 percent among the poorest households, cut out-of-pocket spending by 14 percent for the bottom two quintiles and reduced catastrophic health expenditure among the poorest 40 percent by 2.1 percentage points. The gains are much smaller in districts outside Java with few hospital beds, underlining the importance of supply-side constraints.",
  refs: [
    /* 1 */ "Finkelstein, A., Taubman, S., Wright, B., Bernstein, M., Gruber, J., Newhouse, J. P., Allen, H., Baicker, K., & Oregon Health Study Group. (2012). The Oregon health insurance experiment: Evidence from the first year. Quarterly Journal of Economics, 127(3), 1057–1106.",
    /* 2 */ "Miller, G., Pinto, D., & Vera-Hernández, M. (2013). Risk protection, service use, and health outcomes under Colombia's health insurance program for the poor. American Economic Journal: Applied Economics, 5(4), 61–91.",
    /* 3 */ "King, G., Gakidou, E., Imai, K., Lakin, J., Moore, R. T., Nall, C., Ravishankar, N., Vargas, M., Téllez-Rojo, M. M., Ávila, J. E. H., Ávila, M. H., & Llamas, H. H. (2009). Public policy for the poor? A randomised assessment of the Mexican universal health insurance programme. Lancet, 373(9673), 1447–1454.",
    /* 4 */ "Limwattananon, S., Neelsen, S., O'Donnell, O., Prakongsai, P., Tangcharoensathien, V., van Doorslaer, E., & Vongmongkol, V. (2015). Universal coverage with supply-side reform: The impact on medical expenditure risk and utilization in Thailand. Journal of Public Economics, 121, 79–94.",
    /* 5 */ "Gruber, J., Hendren, N., & Townsend, R. M. (2014). The great equalizer: Health care access and infant mortality in Thailand. American Economic Journal: Applied Economics, 6(1), 91–107.",
    /* 6 */ "Wagstaff, A., & Lindelow, M. (2008). Can insurance increase financial risk? The curious case of health insurance in China. Journal of Health Economics, 27(4), 990–1005.",
    /* 7 */ "Wagstaff, A., Lindelow, M., Jun, G., Ling, X., & Juncheng, Q. (2009). Extending health insurance to the rural population: An impact evaluation of China's new cooperative medical scheme. Journal of Health Economics, 28(1), 1–19.",
    /* 8 */ "Xu, K., Evans, D. B., Kawabata, K., Zeramdini, R., Klavus, J., & Murray, C. J. L. (2003). Household catastrophic health expenditure: A multicountry analysis. Lancet, 362(9378), 111–117.",
    /* 9 */ "Wagstaff, A., & van Doorslaer, E. (2003). Catastrophe and impoverishment in paying for health care: With applications to Vietnam 1993–1998. Health Economics, 12(11), 921–933.",
    /* 10 */ "Sparrow, R., Suryahadi, A., & Widyanti, W. (2013). Social health insurance for the poor: Targeting and impact of Indonesia's Askeskin programme. Social Science & Medicine, 96, 264–271.",
    /* 11 */ "Gertler, P., & Gruber, J. (2002). Insuring consumption against illness. American Economic Review, 92(1), 51–70.",
    /* 12 */ "Manning, W. G., Newhouse, J. P., Duan, N., Keeler, E. B., Leibowitz, A., & Marquis, M. S. (1987). Health insurance and the demand for medical care: Evidence from a randomized experiment. American Economic Review, 77(3), 251–277.",
    /* 13 */ "Thornton, R. L., Hatt, L. E., Field, E. M., Islam, M., Solís Diaz, F., & González, M. A. (2010). Social security health insurance for the informal sector in Nicaragua: A randomized evaluation. Health Economics, 19(S1), 181–206.",
    /* 14 */ "Banerjee, A., Finkelstein, A., Hanna, R., Olken, B. A., Ornaghi, A., & Sumarto, S. (2019). The challenges of universal health insurance in developing countries: Evidence from a large-scale randomized experiment in Indonesia. NBER Working Paper No. 26204. Cambridge, MA: National Bureau of Economic Research.",
    /* 15 */ "Alatas, V., Banerjee, A., Hanna, R., Olken, B. A., & Tobias, J. (2012). Targeting the poor: Evidence from a field experiment in Indonesia. American Economic Review, 102(4), 1206–1240.",
    /* 16 */ "Agustina, R., Dartanto, T., Sitompul, R., Susiloretni, K. A., Suparmi, Achadi, E. L., Taher, A., Wirawan, F., Sungkar, S., Sudarmono, P., Shankar, A. H., Thabrany, H., & Indonesian Health Systems Group. (2019). Universal health coverage in Indonesia: Concept, progress, and challenges. Lancet, 393(10166), 75–102.",
    /* 17 */ "Finkelstein, A. (2007). The aggregate effects of health insurance: Evidence from the introduction of Medicare. Quarterly Journal of Economics, 122(1), 1–37.",
    /* 18 */ "de Chaisemartin, C., & D'Haultfœuille, X. (2020). Two-way fixed effects estimators with heterogeneous treatment effects. American Economic Review, 110(9), 2964–2996.",
    /* 19 */ "Freyaldenhoven, S., Hansen, C., & Shapiro, J. M. (2019). Pre-event trends in the panel event-study design. American Economic Review, 109(9), 3307–3338.",
    /* 20 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 21 */ "Duflo, E. (2001). Schooling and labor market consequences of school construction in Indonesia: Evidence from an unusual policy experiment. American Economic Review, 91(4), 795–813.",
    /* 22 */ "Pradhan, M., Saadah, F., & Sparrow, R. (2007). Did the health card program ensure access to medical care for the poor during Indonesia's economic crisis? World Bank Economic Review, 21(1), 125–150.",
    /* 23 */ "Wagstaff, A., Flores, G., Hsu, J., Smitz, M.-F., Chepynoga, K., Buisman, L. R., van Wilgenburg, K., & Eozenou, P. (2018). Progress on catastrophic health spending in 133 countries: A retrospective observational study. Lancet Global Health, 6(2), e169–e179.",
    /* 24 */ "Kutzin, J. (2013). Health financing for universal coverage and health system performance: Concepts and implications for policy. Bulletin of the World Health Organization, 91(8), 602–611.",
    /* 25 */ "Sood, N., Bendavid, E., Mukherji, A., Wagner, Z., Nagpal, S., & Mullen, P. (2014). Government health insurance for people below poverty line in India: Quasi-experimental evaluation of insurance and health outcomes. BMJ, 349, g5114.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Out-of-pocket payments remain a major source of health financing in low- and middle-income countries, and each year they push many households into financial hardship [8][23]. Expanding publicly financed health insurance to the poor and to workers in the informal sector is the central instrument by which governments pursue universal health coverage [24]. Whether insurance actually reduces the financial burden of ill health is, however, an empirical question. If insurance lowers the price of care, households may consume more care, and total out-of-pocket spending can fall, stay constant or even rise, depending on how much utilisation responds, how comprehensive coverage is, and whether providers charge informal or balance-billed fees [6][7][12].",
        "Indonesia provides an unusually important setting in which to study this question. In January 2014 the government launched Jaminan Kesehatan Nasional (JKN), a single national health insurance scheme administered by a new social security agency, BPJS Kesehatan. JKN merged earlier schemes for civil servants, formal-sector workers and the poor into one programme with a common benefit package, and set a goal of covering the whole population by 2019. By that year it had more than 220 million members, making it the largest single-payer health insurance system in the world [16]. Premiums for about 96 million poor and near-poor Indonesians are paid by the central government under the Penerima Bantuan Iuran (PBI) scheme, and many local governments fund additional subsidised members.",
        "We estimate the effects of JKN on health care utilisation, out-of-pocket spending and catastrophic expenditure, using SUSENAS, the national socio-economic household survey, for 2011–2019, combined with administrative data on JKN enrolment by district from BPJS Kesehatan. Our identification exploits differences across Indonesia's 514 districts in the speed with which subsidised membership was rolled out after 2014. The speed depended on the integration of pre-existing regional health schemes into JKN, on local governments' decisions to fund additional PBI members and on administrative capacity for verifying and registering beneficiaries — factors we show to be unrelated to pre-2014 trends in health spending.",
        "Our main findings are as follows. Among households in the poorest consumption quintile, JKN enrolment raises outpatient visits by 11 percent and inpatient admissions by 18 percent. Despite this higher utilisation, out-of-pocket spending falls by 14 percent for households in the bottom two quintiles, while it is unchanged for the top quintile. The incidence of catastrophic expenditure, defined as health spending above 10 percent of household consumption, falls by 2.1 percentage points among the poorest 40 percent of households, from a pre-JKN level of 6.4 percent. Gains are markedly smaller in districts outside Java with fewer hospital beds per capita, where utilisation rises less and out-of-pocket spending on transport and medicines bought outside the scheme remains high.",
        "These results contribute to a literature on the effects of health insurance in developing countries, which has found large gains in financial protection from some programmes [2][3][4] and little or none from others [6][7][13]. Our evidence comes from the largest scheme yet studied and covers the full national rollout rather than a pilot. We also show how supply-side constraints shape the benefits of insurance, a theme emphasised in the Thai experience of universal coverage [4][5]. For Indonesia, our results complement experimental evidence on the difficulty of enrolling non-poor informal workers [14] and earlier studies of the Askeskin and health card programmes [10][22].",
        "The rest of the paper is organised as follows. Section 2 describes JKN and its predecessors. Section 3 reviews the literature and Section 4 sets out a framework. Section 5 describes the data, Section 6 our empirical strategy and Section 7 the results. Section 8 examines heterogeneity and supply-side constraints, Section 9 presents robustness checks, Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Before 2014, health insurance in Indonesia was fragmented. Civil servants and military personnel were covered by Askes and Asabri, formal private-sector workers by the Jamsostek health programme, and the poor by a succession of tax-financed schemes: the health card programme introduced after the 1997–98 crisis [22], Askeskin from 2005 [10] and Jamkesmas from 2008, which covered about 76 million people by 2013. In addition, many provinces and districts operated their own regional schemes (Jamkesda) for residents not covered by Jamkesmas, with widely varying benefits and funding. Nearly half the population, mostly informal workers and their families, had no coverage at all.",
        "Law No. 40 of 2004 on the National Social Security System and Law No. 24 of 2011 on BPJS laid the legal basis for a unified scheme. On 1 January 2014, Askes, Jamsostek's health programme and Jamkesmas were merged into JKN, administered by BPJS Kesehatan. All members are entitled to the same comprehensive benefit package, including primary care at registered health centres (puskesmas) and private clinics, referral to hospitals for specialist and inpatient care, and medicines on a national formulary, with no co-payments for covered services within the referral system. Primary care providers are paid by capitation and hospitals by case-based payments using Indonesian diagnosis-related groups (INA-CBGs).",
        "Membership is organised in segments, summarised in Table 1. PBI members, whose premiums are paid by the central government, were initially the 86.4 million former Jamkesmas beneficiaries, selected from the Unified Database for Social Protection Programmes, which ranks households by a proxy-means test [15]. Local governments could enrol additional residents as subsidised members funded from regional budgets (PBI-APBD), which typically occurred as regional Jamkesda schemes were integrated into JKN. Formal-sector workers are enrolled through payroll contributions, while informal workers and the self-employed must register and pay monthly premiums voluntarily, a segment with low enrolment and adverse selection [14].",
        "The pace of integration varied greatly across districts. Some local governments integrated their Jamkesda schemes in 2014 and enrolled large numbers of additional PBI-APBD members immediately; others delayed integration until 2016–2017 or later, often because of disputes over funding, data verification or the coverage of benefits that their regional schemes had offered. Updating of the central PBI list in 2015–2016 also proceeded at different speeds, depending on the capacity of district social affairs offices to verify beneficiaries. As a result, the share of the poorest 40 percent of district residents enrolled as subsidised members in 2016 ranged from under 40 percent to nearly 100 percent.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. JKN membership by segment, 2014–2019 (millions)",
          columns: ["Segment", "2014", "2015", "2016", "2017", "2018", "2019"],
          rows: [
            ["PBI, central government (PBI-APBN)", "86.4", "88.2", "91.1", "92.4", "92.3", "96.5"],
            ["Subsidised by local governments (PBI-APBD)", "8.8", "10.8", "17.3", "23.2", "29.4", "35.2"],
            ["Formal-sector wage workers and dependants", "24.4", "37.4", "50.3", "55.0", "57.6", "58.8"],
            ["Informal and self-employed members", "9.0", "13.1", "18.3", "25.4", "30.5", "29.6"],
            ["Non-workers (pensioners, veterans)", "4.8", "5.0", "5.0", "5.1", "5.1", "4.9"],
            ["Total", "133.4", "154.5", "182.0", "201.1", "214.9", "225.0"],
          ],
          note: "Note: End-of-year membership from BPJS Kesehatan annual reports; formal-sector members include civil servants and military personnel previously covered by Askes and Asabri. Totals may not sum because of rounding.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Evidence on the effects of health insurance on utilisation is fairly consistent: insurance raises the use of health care, as shown in the RAND experiment [12], the Oregon experiment [1] and the introduction of Medicare [17]. Evidence on financial protection is more mixed, especially in developing countries. Miller, Pinto and Vera-Hernández {2} find that Colombia's subsidised insurance regime for the poor reduced the variability of out-of-pocket spending and raised the use of preventive care; King et al. {3} find that Mexico's Seguro Popular reduced catastrophic expenditure in a randomised evaluation. Limwattananon et al. {4} show that Thailand's universal coverage scheme reduced out-of-pocket spending and its variance, and Gruber, Hendren and Townsend {5} find that it raised utilisation and reduced infant mortality among the poor. By contrast, Wagstaff and Lindelow {6} find that health insurance in China increased the risk of high spending, because insured patients were steered towards more expensive care, and Wagstaff et al. {7} find no reduction in out-of-pocket spending from China's new cooperative medical scheme. Thornton et al. {13} find that take-up of voluntary social security insurance among informal workers in Nicaragua was low and retention poor, suggesting that voluntary enrolment can limit the benefits of insurance for the informal sector.",
        "For Indonesia, Pradhan, Saadah and Sparrow {22} show that the health card programme during the 1997–98 crisis raised utilisation among the poor, and Sparrow, Suryahadi and Widyanti {10} find that Askeskin raised outpatient utilisation but did not reduce out-of-pocket spending, partly because of poor targeting and gaps in coverage. Gertler and Gruber {11} use Indonesian data to show that households are only partially able to insure consumption against major illness. More recently, Banerjee et al. {14} conduct a large randomised experiment on JKN enrolment among informal workers, finding that subsidies raise enrolment but attract a less healthy pool. Agustina et al. {16} review JKN's progress and challenges, highlighting regional inequalities in the supply of facilities. Studies of India's government insurance scheme for the poor find reductions in out-of-pocket hospital spending where the scheme was implemented [25].",
        "Our paper adds to this literature by providing quasi-experimental national estimates of JKN's effects on financial protection, and by documenting how these effects vary with the local supply of health facilities. Methodologically, we draw on recent work on event-study designs with variation in treatment timing and intensity [18][19], and on the tradition of using the staggered implementation of Indonesian national programmes across districts for identification [21].",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework",
      paragraphs: [
        "Consider a household that faces health shocks and chooses how much care to consume. Total out-of-pocket spending equals the quantity of care times the share of its price borne by the household, plus spending on items outside insurance coverage, such as transport, informal payments and medicines bought from private pharmacies. Insurance reduces the price of covered care, raising utilisation. The effect on out-of-pocket spending depends on the price elasticity of demand: if demand is inelastic, spending falls; if it is elastic, the increase in quantity may offset the reduction in price [12]. Spending on uncovered items may also rise with utilisation.",
        "Three predictions follow. First, effects on utilisation should be largest for households that were previously uninsured and faced high prices relative to income — in our setting, the poor — and for inpatient care, which is expensive and for which prior out-of-pocket costs were most prohibitive. Second, out-of-pocket spending should fall most for households with the largest reductions in effective price, but may not fall at all for richer households, which can choose private providers outside the referral system or opt for higher service classes. Third, where the supply of facilities is limited, insurance will raise utilisation less and the household may still incur substantial costs for travel and for care outside the scheme, so the gains in financial protection will be smaller.",
        "Financial protection is measured both by mean out-of-pocket spending and by the incidence of catastrophic spending, defined as health spending exceeding a threshold share of household consumption [8][9]. We use a threshold of 10 percent of total consumption, consistent with the indicator used to monitor the Sustainable Development Goals [23], and report results for alternative thresholds.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-susenas",
          heading: "5.1 SUSENAS",
          paragraphs: [
            "SUSENAS is a nationally representative household survey conducted by Statistics Indonesia (BPS). Since 2011 the March round has surveyed about 300,000 households a year, and since 2015 it is representative at the district level. The core questionnaire records the health insurance coverage of each household member, outpatient visits in the past month and inpatient admissions in the past year, together with the type of provider. The consumption module records household spending on more than 300 items, including health spending over the past month (outpatient care, medicines, traditional treatments) and the past twelve months (inpatient care), from which we construct monthly out-of-pocket spending in constant 2014 prices.",
            "We pool the March rounds for 2011–2019, giving three pre-JKN years and six post-JKN years, and 2.64 million household observations. Households are assigned to quintiles of per capita consumption net of health spending within each province and year. Because consumption could respond to JKN, we also report results using quintiles predicted from pre-determined household characteristics — education of the head, housing quality and assets — which yield very similar results.",
          ],
        },
        {
          id: "data-bpjs",
          heading: "5.2 Administrative Enrolment Data",
          paragraphs: [
            "BPJS Kesehatan provided district-level membership counts by segment for each December from 2014 to 2019. We combine PBI-APBN and PBI-APBD members to measure subsidised enrolment, and express it relative to the number of residents in the bottom 40 percent of the national consumption distribution, estimated from SUSENAS. We refer to this ratio as the district's subsidised enrolment rate. For pre-2014 years, we use the corresponding Jamkesmas and Jamkesda coverage from district health office records, which is necessary for the event-study analysis. District boundaries are harmonised to the 514 districts existing in 2014.",
            "Table 2 reports pre-JKN characteristics of households by consumption quintile. In 2011–2013, 38 percent of households in the poorest quintile had some health insurance, mostly through Jamkesmas, compared with 34 percent in the top quintile, mostly through formal-sector schemes. Out-of-pocket spending rose steeply with consumption in absolute terms, but its share of consumption was similar across quintiles, and the incidence of catastrophic spending was 6.4 percent among the poorest 40 percent of households.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Household characteristics by consumption quintile, 2011–2013",
              columns: ["Variable", "Q1 (poorest)", "Q2", "Q3", "Q4", "Q5 (richest)"],
              rows: [
                ["Any health insurance (share of members)", "0.38", "0.33", "0.29", "0.30", "0.34"],
                ["Outpatient visits per member, past month", "0.13", "0.14", "0.15", "0.16", "0.17"],
                ["Inpatient admissions per 100 members, past year", "1.9", "2.4", "2.8", "3.2", "4.1"],
                ["Monthly out-of-pocket spending (IDR thousand, 2014 prices)", "31", "46", "62", "88", "181"],
                ["Out-of-pocket spending / consumption (%)", "2.3", "2.2", "2.2", "2.3", "2.6"],
                ["Catastrophic spending, >10% of consumption (share)", "0.063", "0.065", "0.068", "0.072", "0.081"],
                ["Rural (share)", "0.68", "0.61", "0.53", "0.43", "0.27"],
                ["Household observations (thousands)", "176", "176", "176", "176", "176"],
              ],
              note: "Note: SUSENAS March rounds 2011–2013, weighted. Quintiles of per capita consumption net of health spending, defined within province and year. The incidence of catastrophic spending among the bottom two quintiles combined is 0.064.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "We exploit variation across districts in the speed with which subsidised JKN enrolment expanded after 2014. Our main approach is an instrumental-variables design in which a household's JKN coverage is instrumented by the district's subsidised enrolment rate, estimated separately for each consumption quintile, complemented by a reduced-form event study that compares districts with fast and slow rollout.",
      ],
      subsections: [
        {
          id: "strategy-event",
          heading: "6.1 Event-Study Specification",
          paragraphs: [
            "Let S_d denote the increase in the subsidised enrolment rate of district d between 2013 and 2016, the period of most rapid rollout. We estimate y_hdt = Σ_k β_k·S_d·1[t = k] + X_hdt′γ + α_d + δ_pt + ε_hdt, where y_hdt is an outcome for household h in district d and year t, α_d are district fixed effects, δ_pt are province-by-year fixed effects and X_hdt includes household size and composition, the head's age, sex and education, and urban residence. The coefficients β_k, normalised to zero in 2013, trace the evolution of outcomes in districts with faster rollout relative to slower ones within the same province. Standard errors are clustered by district [20].",
          ],
        },
        {
          id: "strategy-iv",
          heading: "6.2 Instrumental Variables",
          paragraphs: [
            "To obtain effects per enrolled household, we estimate y_hdt = θ·JKN_hdt + X_hdt′γ + α_d + δ_pt + ε_hdt, instrumenting the indicator that the household is covered by JKN (or, before 2014, by its predecessor schemes) with the district's subsidised enrolment rate in year t. The coefficient θ measures the effect of coverage for households whose enrolment was induced by the district rollout — predominantly poor and near-poor households enrolled as PBI members. We estimate separate models by quintile. In the bottom two quintiles, the first stage is strong, with F-statistics above 100; in the top quintile, where subsidised enrolment is rare, it is weaker but still well above conventional thresholds.",
            "The identifying assumption is that, conditional on district and province-by-year fixed effects, the speed of rollout is unrelated to other district-level changes affecting health care use and spending. We examine this assumption in three ways. First, the event-study coefficients for 2011 and 2012 test for differential pre-trends. Second, we show that rollout speed is not predicted by pre-2014 levels or trends in out-of-pocket spending, poverty, or the supply of health facilities, but is strongly predicted by the date of Jamkesda integration and by the fiscal capacity of the district government. Third, we control for district-level trends in hospital beds, health workers and village health posts, and for other social programmes rolled out in the same period. Because our design uses continuous variation in treatment intensity rather than a binary staggered treatment, the concerns about negative weights in two-way fixed-effects estimates are less acute; we nevertheless report results using estimators robust to heterogeneous effects [18].",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We first report effects on insurance coverage and utilisation, then on out-of-pocket spending, and finally on catastrophic expenditure.",
      ],
      subsections: [
        {
          id: "results-utilisation",
          heading: "7.1 Coverage and Utilisation",
          paragraphs: [
            "Table 3 reports first-stage and utilisation results by consumption quintile. A 10 percentage point increase in the district's subsidised enrolment rate raises the probability that a household in the poorest quintile is covered by 7.2 percentage points, and in the second quintile by 6.1 points, but has a negligible effect in the top quintile. The IV estimates show that JKN coverage raises outpatient visits per member by 11 percent and inpatient admissions by 18 percent in the poorest quintile, relative to pre-JKN means. Effects are somewhat smaller in the second quintile — 9 and 14 percent respectively — and decline further up the distribution. Most of the increase in outpatient visits is at public health centres, and most of the increase in admissions at public hospitals, consistent with the referral structure of JKN.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effects of JKN coverage on utilisation, by consumption quintile",
              columns: ["Outcome", "Q1 (poorest)", "Q2", "Q3", "Q4", "Q5 (richest)"],
              rows: [
                ["First stage: coverage on enrolment rate", "0.72***", "0.61***", "0.44***", "0.27***", "0.14***"],
                ["", "(0.04)", "(0.04)", "(0.05)", "(0.04)", "(0.03)"],
                ["Log outpatient visits per member", "0.110***", "0.091***", "0.064**", "0.041", "0.022"],
                ["", "(0.028)", "(0.027)", "(0.031)", "(0.036)", "(0.049)"],
                ["Log inpatient admissions per member", "0.180***", "0.142***", "0.103**", "0.067", "0.031"],
                ["", "(0.044)", "(0.043)", "(0.049)", "(0.055)", "(0.071)"],
                ["First-stage F-statistic", "324", "232", "77", "46", "22"],
              ],
              note: "Note: IV estimates of the effect of household JKN coverage, instrumented by the district subsidised enrolment rate. Utilisation outcomes are expressed as proportional changes relative to the pre-JKN mean. All regressions include district and province-by-year fixed effects and household controls. Standard errors clustered by district (514 clusters) in parentheses. ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "results-oop",
          heading: "7.2 Out-of-Pocket Spending",
          paragraphs: [
            "Table 4 reports effects on out-of-pocket spending. Despite higher utilisation, JKN coverage reduces out-of-pocket spending by 14 percent for households in the bottom two quintiles combined, with effects of 15 percent in the poorest quintile and 13 percent in the second. The reductions are concentrated in spending on inpatient care, which falls by 31 percent, while spending on medicines bought outside health facilities falls only slightly. For the top quintile, the estimated effect is close to zero and statistically insignificant. Figure 2 summarises the gradient across the distribution: the proportional reduction in out-of-pocket spending declines steadily from the poorest to the richest quintile.",
            "Figure 1 shows the reduced-form event-study estimates for out-of-pocket spending among the bottom two quintiles. In 2011 and 2012, districts with faster subsequent rollout had trends similar to those with slower rollout. Out-of-pocket spending begins to decline in fast-rollout districts in 2014 and the gap widens through 2016, as subsidised enrolment expanded, before stabilising. The pattern closely tracks the timing of enrolment, supporting a causal interpretation.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Event-study estimates: out-of-pocket health spending of the bottom two quintiles",
              kind: "line",
              xLabels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
              yLabel: "Effect on log out-of-pocket spending (×100)",
              series: [
                {
                  name: "Estimate",
                  values: [0.8, -0.5, 0, -3.1, -6.9, -9.8, -10.4, -10.1, -10.6],
                  lower: [-2.6, -3.8, 0, -6.4, -10.5, -13.6, -14.4, -14.3, -15.0],
                  upper: [4.2, 2.8, 0, 0.2, -3.3, -6.0, -6.4, -5.9, -6.2],
                },
              ],
              marker: 3,
              note: "Note: Coefficients on the interaction of the 2013–2016 increase in the district subsidised enrolment rate (scaled to a 70 percentage point increase, the difference between the 10th and 90th percentiles) with year indicators (2013 omitted), with 95 percent confidence intervals. District and province-by-year fixed effects and household controls included.",
            },
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Effects of JKN coverage on out-of-pocket spending and catastrophic expenditure",
              columns: ["Outcome", "Bottom 40%", "Q1 (poorest)", "Q2", "Q3–Q4", "Q5 (richest)"],
              rows: [
                ["Log total out-of-pocket spending", "−0.140***", "−0.151***", "−0.128***", "−0.063*", "0.012"],
                ["", "(0.032)", "(0.038)", "(0.036)", "(0.035)", "(0.061)"],
                ["Log inpatient out-of-pocket spending", "−0.310***", "−0.334***", "−0.287***", "−0.152**", "−0.024"],
                ["", "(0.071)", "(0.083)", "(0.079)", "(0.074)", "(0.112)"],
                ["Log spending on medicines outside facilities", "−0.038", "−0.041", "−0.034", "−0.012", "0.028"],
                ["", "(0.029)", "(0.033)", "(0.032)", "(0.034)", "(0.054)"],
                ["Catastrophic spending, >10% (pp)", "−2.1***", "−2.2***", "−2.0***", "−0.9", "0.2"],
                ["", "(0.6)", "(0.7)", "(0.7)", "(0.7)", "(1.2)"],
                ["Pre-JKN catastrophic incidence (%)", "6.4", "6.3", "6.5", "7.0", "8.1"],
              ],
              note: "Note: IV estimates of the effect of household JKN coverage, instrumented by the district subsidised enrolment rate, estimated separately for each group. Spending outcomes use the inverse hyperbolic sine of monthly spending in 2014 prices. All regressions include district and province-by-year fixed effects and household controls. Standard errors clustered by district in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "results-catastrophic",
          heading: "7.3 Catastrophic Expenditure",
          paragraphs: [
            "The bottom rows of Table 4 report effects on catastrophic expenditure. JKN coverage reduces the probability that a household in the bottom 40 percent spends more than 10 percent of its consumption on health by 2.1 percentage points, from a pre-JKN incidence of 6.4 percent — a reduction of about one third. The effect is driven primarily by fewer households incurring large inpatient bills. Using a threshold of 25 percent of consumption, the effect is 0.9 percentage points from a base of 1.6 percent, a proportionally larger reduction, consistent with JKN's greatest impact being on the largest expenditures. Measured relative to non-food consumption, the capacity-to-pay approach suggested by Xu et al. {8}, the reduction is similar in proportional terms.",
            "These effects imply meaningful gains in financial protection. Scaling the estimate by the number of households in the bottom two quintiles that gained coverage through the rollout, JKN prevented roughly 1.1 million episodes of catastrophic spending per year among the poor by 2017. The gains are of a similar order to those found for Seguro Popular in Mexico [3] and for Thailand's universal coverage scheme [4], and contrast with the absence of financial protection found for Askeskin [10] and for China's early insurance programmes [6][7].",
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Effect of JKN coverage on out-of-pocket spending by consumption quintile",
              kind: "bar",
              xLabels: ["Q1 (poorest)", "Q2", "Q3", "Q4", "Q5 (richest)"],
              yLabel: "Change in out-of-pocket spending (percent)",
              series: [{ name: "IV estimate", values: [-15.1, -12.8, -7.4, -5.1, 1.2] }],
              note: "Note: IV estimates from separate regressions by quintile; see Table 4 for specification. Estimates for Q3 and Q4 are shown separately here and pooled in Table 4.",
            },
          ],
        },
      ],
    },
    {
      id: "heterogeneity",
      heading: "8. Supply-Side Constraints and Heterogeneity",
      paragraphs: [
        "Indonesia's health facilities are unevenly distributed. In 2014, Java and Bali had about 1.3 hospital beds per 1,000 population, compared with fewer than 0.8 in many districts of Nusa Tenggara, Maluku and Papua, and the density of specialists was even more unequal [16]. The framework predicts that insurance will raise utilisation less, and reduce out-of-pocket spending less, where facilities are scarce. Table 5 tests this prediction by splitting districts into those on Java and Bali and those elsewhere, and by whether the district had above- or below-median hospital beds per capita in 2013.",
        "The results strongly support the prediction. In Java–Bali districts with above-median bed density, JKN coverage raises inpatient admissions among the bottom 40 percent by 21 percent and reduces out-of-pocket spending by 17 percent. In districts outside Java–Bali with below-median bed density, the increase in admissions is only 7 percent and statistically insignificant, and out-of-pocket spending falls by just 6 percent. The reduction in catastrophic spending is 2.6 percentage points in the former group and 1.0 percentage point in the latter. Districts outside Java–Bali with above-median bed density lie in between. Households in remote districts continue to incur substantial costs for transport and accommodation when they seek hospital care, which are not covered by JKN, and are more likely to buy medicines from private pharmacies when public facilities run out of stock.",
        "We find other dimensions of heterogeneity. Effects on utilisation are larger for households with elderly members or chronic illness, and for women of reproductive age, for whom JKN covers delivery in facilities. Effects on out-of-pocket spending are larger in districts that integrated their Jamkesda schemes early, where JKN replaced less generous regional benefits, and smaller in districts whose previous regional schemes had already offered comprehensive coverage. Finally, among the top quintile, JKN membership is mostly through formal-sector contributions and is often complemented by private insurance or out-of-network care, which explains the absence of effects on their spending.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Effects of JKN coverage for the bottom 40 percent by region and hospital bed density",
          columns: ["Outcome", "Java–Bali, high beds", "Java–Bali, low beds", "Outside Java–Bali, high beds", "Outside Java–Bali, low beds"],
          rows: [
            ["Log outpatient visits", "0.126***", "0.098***", "0.087**", "0.041"],
            ["", "(0.034)", "(0.035)", "(0.039)", "(0.037)"],
            ["Log inpatient admissions", "0.214***", "0.168***", "0.139**", "0.071"],
            ["", "(0.052)", "(0.055)", "(0.061)", "(0.058)"],
            ["Log out-of-pocket spending", "−0.172***", "−0.146***", "−0.118**", "−0.061"],
            ["", "(0.041)", "(0.044)", "(0.048)", "(0.046)"],
            ["Catastrophic spending, >10% (pp)", "−2.6***", "−2.2***", "−1.7**", "−1.0"],
            ["", "(0.8)", "(0.8)", "(0.8)", "(0.8)"],
            ["Districts", "64", "54", "193", "203"],
          ],
          note: "Note: IV estimates as in Table 4 for households in the bottom two consumption quintiles. High and low bed density refer to above- and below-median hospital beds per 1,000 population in 2013 across all districts. Standard errors clustered by district. ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks for the effects on out-of-pocket spending and catastrophic expenditure among the bottom 40 percent. Estimates are similar when we define quintiles using predicted rather than actual consumption, when we control for district-specific linear trends, when we add time-varying controls for hospital beds, doctors and village health posts per capita, and when we control for the district rollout of the Program Keluarga Harapan conditional cash transfer and the Kartu Indonesia Sehat card. Excluding the 2014 transition year, in which enrolment data may be less accurate, also has little effect. Using the estimator of de Chaisemartin and D'Haultfœuille {18}, which is robust to heterogeneous treatment effects across districts and years, yields a reduction in out-of-pocket spending of 13 percent.",
        "We also address concerns about measurement. Out-of-pocket spending in SUSENAS is recalled over a month for outpatient care and a year for inpatient care, and recall periods could interact with JKN if insured households under-report spending they expect to be reimbursed; this is unlikely because JKN does not reimburse households but pays providers directly. A placebo test using spending on non-health items that should not respond to insurance, such as tobacco and recreation, finds no effects. Following Freyaldenhoven, Hansen and Shapiro {19}, we test for confounding pre-trends using the pre-2014 coverage of Jamkesmas as a proxy for anticipation and find no evidence of bias. Finally, we estimate effects using individual-level outcomes from the health module rather than household spending from the consumption module and obtain very similar results.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the effects for the bottom 40 percent",
          columns: ["Specification", "Log out-of-pocket spending", "Std. error", "Catastrophic spending (pp)", "Std. error"],
          rows: [
            ["Baseline", "−0.140***", "(0.032)", "−2.1***", "(0.6)"],
            ["Quintiles from predicted consumption", "−0.133***", "(0.033)", "−2.0***", "(0.6)"],
            ["District-specific linear trends", "−0.126***", "(0.037)", "−1.9***", "(0.7)"],
            ["Health supply controls", "−0.137***", "(0.032)", "−2.1***", "(0.6)"],
            ["Social programme controls", "−0.142***", "(0.033)", "−2.2***", "(0.6)"],
            ["Excluding 2014", "−0.145***", "(0.034)", "−2.2***", "(0.6)"],
            ["Heterogeneity-robust estimator", "−0.130***", "(0.036)", "−2.0***", "(0.7)"],
            ["Placebo: log tobacco and recreation spending", "0.009", "(0.021)", "", ""],
          ],
          note: "Note: IV estimates for households in the bottom two consumption quintiles. All specifications include district and province-by-year fixed effects and household controls. Standard errors clustered by district. *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results show that JKN has substantially improved financial protection for poor Indonesian households. Among the poorest 40 percent, coverage reduced out-of-pocket spending by 14 percent and the incidence of catastrophic spending by about a third, even as utilisation rose by 11 percent for outpatient care and 18 percent for inpatient care in the poorest quintile. JKN's combination of a comprehensive benefit package, no co-payments within the referral system and direct payment of providers appears to have avoided the pattern seen in China's early schemes, where insurance increased the use of expensive services without reducing financial risk [6].",
        "Two policy implications stand out. First, the benefits of JKN depend critically on the supply of health services. In districts outside Java–Bali with low hospital bed density, coverage produced much smaller gains, because households could not easily convert entitlement into care. As in Thailand, where universal coverage was accompanied by investment in district hospitals and health centres [4][5], achieving equitable benefits requires supply-side investment in under-served regions alongside financial coverage. JKN's case-based payments, set nationally, may not cover the higher costs of service provision in remote areas, which reduces incentives for providers to locate there.",
        "Second, the financial sustainability of JKN has been a growing concern. BPJS Kesehatan has run deficits every year since 2014, driven partly by low premium compliance among informal members and by rising hospital claims. Our finding that utilisation increased substantially among the poor indicates that higher spending is in part the intended consequence of expanding access. Proposals to contain costs by raising premiums or introducing co-payments should be evaluated against the financial protection gains documented here; co-payments, in particular, could erode the reductions in catastrophic spending that are concentrated among the poor. Improving targeting of PBI membership [15] and enrolment of informal workers [14] would strengthen both equity and the risk pool.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We have evaluated the effects of Indonesia's JKN on health care utilisation and financial protection using variation in the speed of subsidised enrolment across 514 districts. JKN raised outpatient visits by 11 percent and inpatient admissions by 18 percent in the poorest quintile, cut out-of-pocket spending by 14 percent for the bottom two quintiles and reduced catastrophic spending among the poorest 40 percent by 2.1 percentage points, with no effect on spending in the top quintile. The gains were much smaller in districts outside Java with few hospital beds.",
        "Future research should examine whether higher utilisation under JKN has translated into better health outcomes, how providers have responded to capitation and case-based payments, and how JKN has affected labour supply and informality, given that subsidised coverage is tied to household rather than employment status. Longer panels will also allow an assessment of whether the supply of facilities in under-served regions responds to the increased demand generated by insurance.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Variable Construction",
      paragraphs: [
        "Out-of-pocket spending. Monthly household out-of-pocket health spending is the sum of spending on outpatient care, medicines and other health items over the past month and one-twelfth of inpatient spending over the past twelve months, deflated to 2014 prices using provincial consumer price indices. Health insurance premiums are excluded. Because many households report zero spending, we use the inverse hyperbolic sine transformation; results using levels, or logs with zeros replaced by small values, are similar.",
        "Catastrophic expenditure. A household is classified as experiencing catastrophic expenditure if its monthly out-of-pocket health spending exceeds 10 percent of its total monthly consumption, including health spending. In robustness checks we use thresholds of 25 percent of total consumption and 40 percent of non-food consumption [8][9].",
        "Enrolment rate. The district subsidised enrolment rate is the number of PBI-APBN and PBI-APBD members registered in the district at the end of the previous year divided by the estimated number of residents in the bottom 40 percent of the national consumption distribution. Rates above one, which occur in a few districts with generous local enrolment, are top-coded at one. District population and consumption distributions are estimated from SUSENAS using survey weights.",
      ],
    },
  ],
};
