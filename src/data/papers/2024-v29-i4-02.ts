// Vol. 29, No. 4 (October 2024) — full text for an existing article (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2024-v29-i4-02",
  acknowledgments:
    "We thank seminar participants at Hitotsubashi University, Hanyang University and the Japan Center for Economic Research, two anonymous referees and the handling editor for helpful comments. The Korea Employment Information Service and the Research Institute of Economy, Trade and Industry kindly provided access to the KLoSA and JSTAR microdata. All remaining errors are our own.",
  funding:
    "Keiko Sato acknowledges support from the Japan Society for the Promotion of Science (Grant-in-Aid for Scientific Research). Da-Eun Han acknowledges support from the Hanyang University research fund.",
  dataAvailability:
    "KLoSA microdata are available from the Korea Employment Information Service; JSTAR microdata are available to registered researchers from the Research Institute of Economy, Trade and Industry. Administrative long-term care statistics are published by the National Health Insurance Service (Korea) and the Ministry of Health, Labour and Welfare (Japan); population projections are from the United Nations World Population Prospects 2022. Harmonisation code, model code and the simulated moments are available from the corresponding author.",
  editorialNote:
    "Keiko Sato and Da-Eun Han estimate that expanding long-term care insurance coverage raises formal care use by 38 percent and reduces informal care by 21 percent, with much smaller effects on the labour supply of female caregivers than expected; with coverage intensity at roughly half of Japan's, Korea's system would need to expand by 60 percent by 2035 to meet projected demand.",
  refs: [
    /* 1 */ "Campbell, J. C., Ikegami, N., & Gibson, M. J. (2010). Lessons from public long-term care insurance in Germany and Japan. Health Affairs, 29(1), 87–95.",
    /* 2 */ "Tamiya, N., Noguchi, H., Nishi, A., Reich, M. R., Ikegami, N., Hashimoto, H., Shibuya, K., Kawachi, I., & Campbell, J. C. (2011). Population ageing and wellbeing: Lessons from Japan's long-term care insurance policy. The Lancet, 378(9797), 1183–1192.",
    /* 3 */ "Jeon, B., & Kwon, S. (2017). Health and long-term care systems for older people in the Republic of Korea: Policy challenges and lessons. Health Systems & Reform, 3(3), 214–223.",
    /* 4 */ "Kim, H. B., & Lim, W. (2015). Long-term care insurance, informal care, and medical expenditures. Journal of Public Economics, 125, 128–142.",
    /* 5 */ "Shimizutani, S., Suzuki, W., & Noguchi, H. (2008). The socialization of at-home elderly care and female labor market participation: Micro-level evidence from Japan. Japan and the World Economy, 20(1), 82–96.",
    /* 6 */ "Fu, R., Noguchi, H., Kawamura, A., Takahashi, H., & Tamiya, N. (2017). Spillover effect of Japanese long-term care insurance as an employment promotion policy for family caregivers. Journal of Health Economics, 56, 103–112.",
    /* 7 */ "Van Houtven, C. H., & Norton, E. C. (2004). Informal care and health care use of older adults. Journal of Health Economics, 23(6), 1159–1180.",
    /* 8 */ "Bonsang, E. (2009). Does informal care from children to their elderly parents substitute for formal care in Europe? Journal of Health Economics, 28(1), 143–154.",
    /* 9 */ "Charles, K. K., & Sevak, P. (2005). Can family caregiving substitute for nursing home care? Journal of Health Economics, 24(6), 1174–1190.",
    /* 10 */ "Ettner, S. L. (1995). The impact of \"parent care\" on female labor supply decisions. Demography, 32(1), 63–80.",
    /* 11 */ "Heitmueller, A. (2007). The chicken or the egg? Endogeneity in labour market participation of informal carers in England. Journal of Health Economics, 26(3), 536–559.",
    /* 12 */ "Bolin, K., Lindgren, B., & Lundborg, P. (2008). Your next of kin or your own career? Caring and working among the 50+ of Europe. Journal of Health Economics, 27(3), 718–738.",
    /* 13 */ "Crespo, L., & Mira, P. (2014). Caregiving to elderly parents and employment status of European mature women. Review of Economics and Statistics, 96(4), 693–709.",
    /* 14 */ "Skira, M. M. (2015). Dynamic wage and employment effects of elder parent care. International Economic Review, 56(1), 63–93.",
    /* 15 */ "Barczyk, D., & Kredler, M. (2018). Evaluating long-term-care policy options, taking the family seriously. Review of Economic Studies, 85(2), 766–809.",
    /* 16 */ "Ko, A. (2022). An equilibrium analysis of the long-term care insurance market. Review of Economic Studies, 89(4), 1993–2025.",
    /* 17 */ "Brown, J. R., & Finkelstein, A. (2008). The interaction of public and private insurance: Medicaid and the long-term care insurance market. American Economic Review, 98(3), 1083–1102.",
    /* 18 */ "Norton, E. C. (2000). Long-term care. In A. J. Culyer & J. P. Newhouse (Eds.), Handbook of health economics (Vol. 1B, pp. 955–994). Amsterdam: Elsevier.",
    /* 19 */ "Geyer, J., & Korfhage, T. (2018). Labor supply effects of long-term care reform in Germany. Health Economics, 27(9), 1328–1339.",
    /* 20 */ "De Nardi, M., French, E., & Jones, J. B. (2010). Why do the elderly save? The role of medical expenses. Journal of Political Economy, 118(1), 39–75.",
    /* 21 */ "Rust, J. (1987). Optimal replacement of GMC bus engines: An empirical model of Harold Zurcher. Econometrica, 55(5), 999–1033.",
    /* 22 */ "Hotz, V. J., & Miller, R. A. (1993). Conditional choice probabilities and the estimation of dynamic models. Review of Economic Studies, 60(3), 497–529.",
    /* 23 */ "Colombo, F., Llena-Nozal, A., Mercier, J., & Tjadens, F. (2011). Help wanted? Providing and paying for long-term care. Paris: OECD Publishing.",
    /* 24 */ "United Nations, Department of Economic and Social Affairs, Population Division. (2022). World population prospects 2022: Summary of results. New York: United Nations.",
    /* 25 */ { jer: "2024-v29-i2-03" },
    /* 26 */ { jer: "2023-v28-i1-02" },
    /* 27 */ { jer: "2022-v27-i4-02" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Japan and Korea are ageing faster than any other economies in the world. Japan became a super-aged society, with more than one in five residents aged 65 or older, in 2007; Korea will cross the same threshold around 2025, and on the medium variant of the United Nations projections its old-age share will overtake Japan's before 2045 [24]. Both countries responded to the growing need for care by establishing social long-term care insurance (LTCI): Japan in April 2000 and Korea in July 2008. The two schemes share a common architecture — mandatory contributions, needs-based certification, cash-limited service benefits and co-payments — but they differ markedly in generosity. Measured by the share of older people certified for benefits and the value of the benefits they receive, Korea's system currently operates at roughly half of Japan's coverage intensity.",
        "How much formal care a public insurance scheme buys, how much family care it displaces, and how far it frees family caregivers — overwhelmingly women — to work are central questions for both the design and the financing of LTCI [1][18][23]. They are also contested. Cross-sectional studies typically find strong substitution between formal and informal care and large negative associations between caregiving and female employment [7][8][10], but caregiving decisions, care needs and labour supply are jointly determined, and estimates that account for this endogeneity are often much smaller [11][12][13]. Evidence from the introduction of LTCI in Japan points to modest gains in the employment of family caregivers [5][6], while regression-discontinuity evidence from Korea shows that eligibility raises formal care use and lowers medical spending [4].",
        "This paper provides a comparative analysis of the two systems using harmonised micro-data and a structural model of household care decisions. We harmonise the Korean Longitudinal Study of Aging (KLoSA) and the Japanese Study of Aging and Retirement (JSTAR) to construct comparable measures of functional limitations, care arrangements, care hours and the labour supply of adult children. We then exploit reforms that shifted LTCI eligibility in each country — the creation of a new dementia-specific grade in Korea in 2014 and the reclassification of low-need beneficiaries into prevention benefits in Japan in 2006 — to obtain quasi-experimental estimates of how coverage changes care arrangements. These estimates discipline a dynamic discrete-choice model in which an older parent and an adult child jointly choose the care arrangement and the child's labour supply.",
        "We have three main findings. First, expanding LTCI coverage increases formal care utilisation by 38 percent and reduces informal care by 21 percent. The quasi-experimental and structural estimates agree closely, and the responses are similar in the two countries once differences in baseline generosity are taken into account. Second, the effects on female labour supply are smaller than expected: coverage raises the employment of primary female caregivers by 1.6 percentage points, about one-third of the effect implied by cross-sectional associations. Formal care replaces mainly the most intensive care hours provided by spouses and co-resident daughters-in-law, many of whom are past the age at which re-entry into employment is common, and the hours released are often too few and too fragmented to permit a return to work.",
        "Third, counterfactual simulations suggest that Korea's system will come under severe pressure. Combining the model with the United Nations World Population Prospects 2022, we project that the population of older Koreans with certifiable care needs will rise by 47 percent between 2023 and 2035, and that the decline in the availability of family caregivers — fewer children, more of them in work — will add further to demand for formal services. To keep the probability that an older person with care needs receives formal care at its 2023 level, the capacity of Korea's LTCI system would need to expand by 60 percent by 2035, well above the 35 percent implied by recent growth in the care workforce. A Japanese-style expansion of eligibility to lower-need groups would raise formal care use further but would cost about 0.4 percent of GDP a year by 2035.",
        "We contribute to three literatures. First, we add comparative evidence on two of the oldest and largest social LTCI schemes in Asia, complementing single-country studies [2][3][4][6]. Second, we contribute to work on the substitution between formal and informal care and on caregiving and labour supply [8][9][13][14], by combining quasi-experimental variation with a structural model that allows policy counterfactuals. Third, we extend the analysis of the fiscal consequences of ageing in Korea published in this journal [25][27] to long-term care. Section 2 describes the two systems, Section 3 reviews the literature, Section 4 presents the conceptual framework, Sections 5 and 6 describe the data and empirical strategy, Section 7 reports the results, Section 8 examines heterogeneity, Section 9 presents robustness checks, and Sections 10 and 11 discuss policy implications and conclude.",
      ],
    },
    {
      id: "background",
      heading: "2. Long-Term Care Insurance in Korea and Japan",
      paragraphs: [
        "Japan's LTCI scheme, introduced in 2000, covers all residents aged 40 and over. Benefits are available to those aged 65 and over who are certified as needing care or support, and to those aged 40–64 whose needs arise from age-related diseases. Applicants are assessed with a standardised 74-item questionnaire and a physician's report, and assigned to one of seven levels: two levels of 'support need' and five levels of 'care need'. Each level carries a monthly ceiling on the value of services, which beneficiaries choose with the help of a care manager; cash benefits are not available. Half of spending is financed by premiums and half by taxes, and co-payments are 10 percent for most beneficiaries, rising to 20 or 30 percent for higher-income households [1][2].",
        "Korea's scheme, introduced in 2008, is administered by the National Health Insurance Service and financed by an earmarked surcharge on health insurance contributions, a government subsidy and co-payments of 15 percent for home-based and 20 percent for institutional care, with reductions for low-income households [3]. Eligibility is determined by a 52-item assessment that yields a score between 0 and 100. Initially only three grades were defined, covering applicants with scores of 55 and above, and certification was restricted to the most severely impaired. The thresholds were lowered in 2012, a fourth and fifth grade were added in July 2014 — grade 5 covering people with dementia and scores of 45 to 50 — and a 'cognitive support' grade for people with mild dementia was added in 2018. A limited family care allowance exists for remote areas, but almost all benefits are provided in kind.",
        "Table 1 compares the two systems. The share of the population aged 65 and over certified for benefits was 10.3 percent in Korea in 2022, compared with 18.6 percent in Japan, and the average benefit per recipient, adjusted for purchasing power, was about 7 percent lower in Korea. We combine these two margins into an index of coverage intensity — recipients per older person multiplied by the relative value of benefits — which stands at 0.51 for Korea relative to Japan. Public LTC spending was 0.7 percent of GDP in Korea, against 2.0 percent in Japan, although Korea's old-age share is still well below Japan's.",
        "Two further differences matter for our analysis. Japan's 2006 reform reclassified many beneficiaries with the lowest care-need levels into a new 'support need' tier eligible only for prevention-oriented services with lower ceilings, effectively reducing coverage for people with mild impairments; this provides variation in the opposite direction from Korea's 2014 expansion. And family structure differs: co-residence of older parents with adult children has declined in both countries, but it remains more common in Korea, and Korean daughters-in-law continue to provide a substantial share of informal care.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Key features of long-term care insurance in Korea and Japan",
          columns: ["Feature", "Korea", "Japan"],
          rows: [
            ["Year introduced", "2008", "2000"],
            ["Contributors", "All health insurance members", "Residents aged 40 and over"],
            ["Financing (premiums / taxes / co-payments)", "≈65 / 20 / 15", "≈45 / 45 / 10"],
            ["Eligibility levels", "5 grades + cognitive support grade", "2 support + 5 care levels"],
            ["Co-payment (home / institutional)", "15% / 20%", "10% (20–30% higher income)"],
            ["Population aged 65+ (percent, 2022)", "17.5", "29.0"],
            ["Certified recipients per 100 aged 65+", "10.3", "18.6"],
            ["Relative benefit per recipient (Japan = 1)", "0.93", "1.00"],
            ["Coverage intensity index (Japan = 1)", "0.51", "1.00"],
            ["Public LTC spending (percent of GDP)", "0.7", "2.0"],
            ["Share of recipients in institutions (percent)", "22", "27"],
          ],
          note: "Note: Figures refer to 2022 or the latest available year. The coverage intensity index multiplies certified recipients per older person by the purchasing-power-adjusted value of benefits per recipient, both relative to Japan. Sources: National Health Insurance Service, Long-Term Care Insurance Statistical Yearbook; Ministry of Health, Labour and Welfare, Report on Long-Term Care Insurance Services; authors' calculations.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "A large literature studies whether informal care substitutes for formal care. Van Houtven and Norton {7} show, using children's characteristics as instruments, that informal care reduces the use of home health care and nursing homes among older Americans, and Charles and Sevak {9} find that family caregiving substantially lowers the probability of nursing-home entry. Bonsang {8} finds that informal care substitutes for paid domestic help in Europe but complements skilled nursing care, and that substitution weakens as disability becomes severe. These results suggest that public coverage of formal care should displace some, but not all, informal care.",
        "A second literature studies caregiving and labour supply. Ettner {10} finds that co-residence with a disabled parent reduces women's labour supply, but subsequent work emphasises that caregiving and employment are jointly chosen. Heitmueller {11} shows that the negative association between caregiving and employment in England shrinks once caregiving is instrumented, Bolin, Lindgren and Lundborg {12} find modest employment effects across Europe, and Crespo and Mira {13} estimate larger effects for intensive caregivers. Skira {14} estimates a dynamic model in which caregiving reduces the probability of returning to work and future wages, so that the costs of caregiving persist long after care ends.",
        "Evidence on public LTCI is growing. Shimizutani, Suzuki and Noguchi {5} find that the introduction of Japan's scheme increased the labour force participation of women in households with care needs, and Fu et al. {6} find that it raised the employment of family caregivers, particularly of those living with the care recipient. Kim and Lim {4} use the eligibility threshold of Korea's scheme to show that LTCI raised formal care use, reduced informal care by family members and lowered medical expenditure. In Germany, Geyer and Korfhage {19} find small positive labour supply effects of benefit increases. Our quasi-experimental estimates are consistent with this body of work, and the structural model allows us to reconcile the different magnitudes found in the two countries.",
        "Structural models of long-term care have been used to evaluate policy design. Barczyk and Kredler {15} show that taking family care seriously changes the evaluation of LTC subsidies substantially, because subsidies to formal care crowd out informal care while subsidies to informal care can be welfare-improving. Ko {16} analyses the private LTCI market in equilibrium, Brown and Finkelstein {17} show that means-tested public coverage crowds out private insurance, and De Nardi, French and Jones {20} show that late-life medical and care expenses are a key driver of saving among the elderly. Our model is simpler than these in its treatment of savings but richer in its treatment of the child's labour supply, and it is estimated on two countries jointly.",
        "Finally, the paper relates to work in this journal on demographic change in Korea. A general-equilibrium analysis shows that population ageing will put the National Pension Scheme under severe fiscal pressure [25], the 2013 pension reform changed the labour supply of older workers [27], and cohort analysis shows that the labour force participation of Korean women has risen steadily but remains constrained by family responsibilities [26]. Long-term care is the next frontier of this agenda.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a household consisting of an older parent with care needs and an adult child, typically a daughter or daughter-in-law, who is the potential primary caregiver. Care can be provided informally by the child or a spouse, purchased formally, or both. Formal and informal care are imperfect substitutes in producing the parent's well-being: informal care is valued for its familiarity, but the opportunity cost of the caregiver's time rises with her earning capacity, and caregiving at high intensity imposes a utility cost. LTCI lowers the price of formal care for households that are certified, up to the benefit ceiling.",
        "A reduction in the price of formal care has three effects. It raises formal care use, it reduces informal care to the extent that the two are substitutes, and it relaxes the caregiver's time constraint, allowing her to increase her labour supply. The size of the third effect depends on which informal care hours are displaced and on the caregiver's labour-market options. If formal services replace care that is provided at fixed times during the working day by a caregiver of working age, the labour supply response may be large. If they replace care provided by spouses or by caregivers who have already left the labour market and face low re-entry wages, or if the hours released are few and fragmented, the response will be small.",
        "These considerations yield three hypotheses. H1: Expanding LTCI coverage raises formal care use and reduces informal care hours. H2: The labour supply response of female caregivers is positive but smaller than implied by cross-sectional associations, because displaced informal care is concentrated among caregivers with weak labour-market attachment. H3: The effects of coverage are larger where informal care is costly — for caregivers with more education and for non-co-resident children — and for parents with cognitive impairment, for whom supervision needs are high. We test H1 with quasi-experimental variation and use the structural model to quantify H2 and H3 and to simulate counterfactual policies.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our analysis combines two longitudinal surveys of older people with administrative statistics on LTCI. The two surveys were designed with reference to the US Health and Retirement Study and share much of its questionnaire structure, which makes harmonisation feasible.",
      ],
      subsections: [
        {
          id: "data-surveys",
          heading: "5.1 KLoSA and JSTAR",
          paragraphs: [
            "KLoSA is a biennial panel of Koreans aged 45 and over, launched in 2006 with about 10,000 respondents and replenished in 2014; we use the eight waves from 2006 to 2020. JSTAR began in 2007 in five municipalities and has since been extended to ten; we use waves from 2007 to 2019. Both surveys record activities of daily living (ADL) and instrumental activities of daily living (IADL), cognitive function, chronic conditions, receipt of LTCI certification and services, the identity of informal caregivers and the hours they provide, and detailed information on each child, including sex, age, marital status, distance from the parent, employment and hours worked.",
            "We harmonise the two surveys following the conventions of the Gateway to Global Aging Data. Care needs are defined as at least one ADL limitation or a cognitive impairment score below a common threshold on the harmonised word-recall and orientation items. Formal care is any use of LTCI-financed or privately purchased home-based, day-care or institutional services; informal care hours are the weekly hours of help from the spouse, children, children-in-law and other relatives. The primary female caregiver is the woman providing the most informal care hours or, if no informal care is provided, the daughter or daughter-in-law living closest to the parent. Our analysis sample comprises 18,420 Korean respondents aged 65 and over (61,300 person-waves) and 9,860 Japanese respondents (31,700 person-waves), of whom 34 and 38 percent, respectively, have care needs in at least one wave.",
          ],
        },
        {
          id: "data-admin",
          heading: "5.2 Administrative and Demographic Data",
          paragraphs: [
            "We use administrative statistics from Korea's National Health Insurance Service and Japan's Ministry of Health, Labour and Welfare to obtain the number of certified beneficiaries by level, benefit ceilings, co-payment rates and spending, and to calibrate the price of formal care in the model. The supply of formal care — the number of licensed care workers and facility places — is taken from the same sources. For projections, we use the age-sex population projections of the United Nations World Population Prospects 2022, including its probabilistic prediction intervals [24], combined with age-specific prevalence of care needs estimated from the surveys.",
            "Table 2 reports summary statistics for respondents with care needs. Japanese respondents are older on average and more likely to live alone; Korean respondents are more likely to co-reside with a child. Formal care use is much lower in Korea (24.5 percent of person-waves with care needs, against 41.3 percent in Japan), while informal care hours are higher (24.6 hours per week, against 17.9). The primary female caregiver is 56 years old on average in Korea and 59 in Japan, and her employment rate is 41.2 and 43.5 percent, respectively.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Summary statistics: respondents aged 65+ with care needs",
              columns: ["Variable", "Korea (KLoSA)", "Japan (JSTAR)"],
              rows: [
                ["Age (years)", "77.8", "79.6"],
                ["Female (share)", "0.63", "0.61"],
                ["Number of ADL limitations", "1.9", "2.1"],
                ["Cognitive impairment (share)", "0.37", "0.33"],
                ["Lives alone (share)", "0.24", "0.29"],
                ["Co-resides with a child (share)", "0.31", "0.22"],
                ["LTCI certified (share)", "0.29", "0.52"],
                ["Uses formal care (share)", "0.245", "0.413"],
                ["Informal care hours per week", "24.6", "17.9"],
                ["Primary female caregiver: age", "56.1", "58.7"],
                ["Primary female caregiver: employed (share)", "0.412", "0.435"],
                ["Primary female caregiver: daughter-in-law (share)", "0.28", "0.17"],
                ["Person-waves with care needs", "20,840", "12,050"],
              ],
              note: "Note: Pooled person-waves of respondents aged 65 and over with at least one ADL limitation or harmonised cognitive impairment, KLoSA 2006–2020 and JSTAR 2007–2019, weighted by survey weights. Formal care includes LTCI-financed and privately purchased services.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our strategy proceeds in two steps. We first estimate the reduced-form effects of LTCI coverage on care arrangements and caregiver labour supply using reforms that shifted eligibility. We then estimate a structural model that reproduces these effects and use it to decompose the mechanisms and simulate counterfactual policies.",
      ],
      subsections: [
        {
          id: "quasi-experiment",
          heading: "6.1 Quasi-Experimental Variation",
          paragraphs: [
            "In Korea, the July 2014 reform created grade 5 for people with dementia and assessment scores of 45 to 50, who had previously been ineligible. We estimate difference-in-differences models comparing respondents with dementia and harmonised functional scores in the newly eligible range with respondents with dementia and slightly lower scores who remained ineligible, before and after 2014: y_it = β · (Target_i × Post_t) + X'_it γ + μ_i + τ_t + ε_it, where y_it is formal care use, informal care hours or caregiver employment, X_it contains age, ADL and IADL counts and household composition, and μ_i and τ_t are individual and wave fixed effects. Because the survey score is an approximation to the official assessment, we interpret β as an intention-to-treat effect and scale it by the first-stage change in certification.",
            "In Japan, the April 2006 reform moved beneficiaries at the lowest care-need level to prevention-oriented support benefits with lower ceilings. We compare respondents with mild impairments, who were affected, with those with moderate impairments, who were not, in waves before and after the reform, using the retrospective certification histories recorded in JSTAR's first wave. Because the reform reduced coverage, we expect effects of the opposite sign. For both reforms we estimate event-study versions of the model to examine pre-trends.",
          ],
        },
        {
          id: "structural",
          heading: "6.2 Structural Model and Estimation",
          paragraphs: [
            "In the structural model, each period (two years) the household chooses one of five care arrangements — no care, informal care only, formal home-based care only, mixed care, or institutional care — and the primary female caregiver chooses among non-employment, part-time and full-time work. The parent's care need evolves according to an estimated Markov process over four need states, and mortality depends on age, sex and need. Household utility depends on consumption, the parent's care quality, the caregiver's leisure and a disutility of intensive caregiving that varies with the caregiver's relationship to the parent and co-residence. Formal care is priced at the market rate net of LTCI benefits, which depend on certification and the benefit ceiling for each level.",
            "The caregiver's wage depends on education, age and accumulated experience, and re-entry into employment after a spell of caregiving carries a utility cost, capturing the persistence emphasised by Skira {14}. Choice-specific shocks are type-I extreme value, which yields closed-form conditional choice probabilities [21][22]. Country-specific parameters include the price of formal care, benefit rules and the preference for informal care, so that the model can attribute differences between Korea and Japan to policy or to preferences.",
            "We estimate the model by the method of simulated moments, matching the distribution of care arrangements by need state and country, informal care hours, caregiver employment and hours by age and education, transition rates between care arrangements and, crucially, the reduced-form effects of the two reforms. Including the quasi-experimental estimates among the targeted moments ensures that the price elasticities that drive the counterfactuals are identified from policy variation rather than from functional form. Standard errors account for simulation error and for the sampling variance of the reduced-form moments.",
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
          id: "results-reduced",
          heading: "7.1 Reduced-Form Effects of Coverage",
          paragraphs: [
            "Table 3 reports the quasi-experimental estimates. In Korea, the 2014 reform raised the probability of LTCI certification in the target group by 31 percentage points. Scaling the intention-to-treat effects by this first stage, coverage raised formal care use by 9.3 percentage points, or 38 percent of the pre-reform mean of 24.5 percent, and reduced informal care by 5.1 hours per week, or 21 percent of the mean of 24.6 hours. The employment of the primary female caregiver rose by 1.5 percentage points, an effect that is not statistically significant at conventional levels. In Japan, the 2006 reform reduced formal care use among affected beneficiaries by 13.9 percentage points (34 percent) and raised informal care by 3.6 hours per week (20 percent), with a small and insignificant fall in caregiver employment.",
            "Figure 1 shows the event-study estimates for Korea. Formal care use and informal care hours in the target group track those in the comparison group closely in the three waves before the reform, and diverge sharply in the wave after it. The effects are stable in the two subsequent waves, indicating that households did not revert to informal care once the novelty of the benefit wore off. The similarity of the proportional effects in the two countries, despite the opposite direction of the reforms and the different baseline levels of formal care, is notable: it suggests that a common model with country-specific prices and benefit rules can account for both.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effects of LTCI coverage on care arrangements and caregiver employment: reform-based estimates",
              columns: ["Outcome", "Korea 2014: ITT", "Korea 2014: per covered", "Pre-reform mean (Korea)", "Japan 2006: per uncovered", "Pre-reform mean (Japan)"],
              rows: [
                ["LTCI certification", "0.31*** (0.04)", "—", "0.04", "−0.42*** (0.05)", "0.89"],
                ["Uses formal care", "0.029*** (0.009)", "0.093*** (0.028)", "0.245", "−0.139*** (0.037)", "0.408"],
                ["Informal care hours per week", "−1.58** (0.66)", "−5.10** (2.11)", "24.6", "3.61** (1.52)", "18.1"],
                ["Caregiver employed", "0.005 (0.006)", "0.015 (0.019)", "0.412", "−0.011 (0.017)", "0.431"],
                ["Caregiver weekly hours", "0.27 (0.29)", "0.86 (0.94)", "16.3", "−0.48 (0.88)", "17.0"],
                ["Observations (person-waves)", "4,180", "4,180", "", "2,960", ""],
              ],
              note: "Note: Difference-in-differences estimates with individual and wave fixed effects and controls for age, ADL and IADL counts and household composition. Korea: ITT effects of the 2014 creation of grade 5 and effects per newly covered person (ITT divided by the first stage). Japan: effects of the 2006 reclassification per person losing care-level coverage. Standard errors clustered by individual in parentheses. *** p<0.01, ** p<0.05, * p<0.1.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Event-study estimates of the 2014 Korean reform on formal care use and informal care hours",
              kind: "line",
              xLabels: ["2008", "2010", "2012", "2014", "2016", "2018", "2020"],
              yLabel: "Effect per covered person (percent of pre-reform mean)",
              series: [
                {
                  name: "Formal care use",
                  values: [2.1, -3.4, 0.0, 9.8, 38.0, 36.4, 39.2],
                  lower: [-14.6, -19.8, 0.0, -6.1, 15.6, 12.1, 12.8],
                  upper: [18.8, 13.0, 0.0, 25.7, 60.4, 60.7, 65.6],
                },
                {
                  name: "Informal care hours",
                  values: [-1.8, 2.4, 0.0, -4.9, -20.7, -21.8, -19.6],
                  lower: [-17.4, -12.9, 0.0, -20.1, -37.5, -39.4, -38.7],
                  upper: [13.8, 17.7, 0.0, 10.3, -3.9, -4.2, -0.5],
                },
              ],
              marker: 3,
              note: "Note: Event-study coefficients scaled by the first stage, with 95 percent confidence intervals; 2012 is the reference wave. The 2014 wave was fielded partly before the July 2014 reform. The dashed line marks the reform.",
            },
          ],
        },
        {
          id: "results-structural",
          heading: "7.2 Structural Estimates and Model Fit",
          paragraphs: [
            "Table 4 reports selected parameter estimates and the fit of the model. The disutility of intensive caregiving is substantially lower for spouses than for children, and lower for co-resident than non-co-resident daughters-in-law, consistent with the persistence of norms of family care. The preference for informal over formal care is somewhat stronger in Korea, but the difference is small relative to the difference in the effective price of formal care: once benefit rules are accounted for, the model attributes about four-fifths of the gap in formal care use between the two countries to policy and only one-fifth to preferences. The re-entry cost for caregivers who have left employment is large, equivalent to about four months of earnings for a caregiver with a high-school education.",
            "The model fits the targeted moments well and reproduces the reform effects. Simulating the Korean 2014 reform in the model raises formal care use among the newly covered by 38 percent and reduces informal care hours by 21 percent, matching the reduced-form estimates. More generally, extending coverage to an uncovered household with care needs raises formal care use by 38 percent and lowers informal care by 21 percent in both countries; the corresponding elasticities with respect to the out-of-pocket price of formal care are −0.42 and 0.24. The model also matches untargeted moments, including the share of caregivers who return to work within two years of the death of the care recipient, which is 14 percent in the data and 15 percent in the model.",
            "The labour supply response is modest. Coverage raises the employment of the primary female caregiver by 1.6 percentage points and her weekly hours by 0.8 hours. By contrast, a regression of caregiver employment on the parent's formal care use, controlling for observed characteristics, implies an effect of 4.8 percentage points, and the effects reported for Japan's introduction of LTCI in some earlier studies are of similar size [5][6]. The difference arises because the cross-sectional association confounds the effect of formal care with the selection of employed caregivers into purchasing it. The labour supply effect of coverage is therefore about one-third of what the raw association would suggest — smaller than expected, as hypothesis H2 predicts.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Selected structural parameters and model fit",
              columns: ["Parameter / moment", "Estimate or data", "Std. error or model"],
              rows: [
                ["Disutility of intensive care: spouse", "0.62", "(0.09)"],
                ["Disutility of intensive care: daughter", "1.24", "(0.13)"],
                ["Disutility of intensive care: co-resident daughter-in-law", "0.97", "(0.12)"],
                ["Preference for informal care: Korea", "0.81", "(0.10)"],
                ["Preference for informal care: Japan", "0.66", "(0.09)"],
                ["Re-entry cost (months of earnings)", "4.1", "(0.7)"],
                ["Formal care use, Korea: data / model", "0.245", "0.249"],
                ["Formal care use, Japan: data / model", "0.413", "0.405"],
                ["Informal care hours, Korea: data / model", "24.6", "24.2"],
                ["Caregiver employment, Korea: data / model", "0.412", "0.417"],
                ["Korean reform, formal care (%): data / model", "38.0", "37.6"],
                ["Korean reform, informal care (%): data / model", "−20.7", "−21.0"],
                ["Japanese reform, formal care (%): data / model", "−34.1", "−35.2"],
                ["Return to work after care ends (untargeted): data / model", "0.14", "0.15"],
              ],
              note: "Note: Method-of-simulated-moments estimates. Disutility and preference parameters are expressed in units of the utility of one month of median household consumption. Standard errors, in parentheses, account for simulation error and for sampling error in the reduced-form moments.",
            },
          ],
        },
        {
          id: "results-counterfactual",
          heading: "7.3 Counterfactual Simulations to 2035",
          paragraphs: [
            "We use the estimated model to project demand for formal care in Korea to 2035. Demand depends on the number of older people with care needs, which we obtain by applying age-sex-specific prevalence rates to the United Nations population projections [24], and on the availability of family caregivers, which falls as cohorts with fewer children and higher female employment reach the ages at which they care for parents. On the medium variant, the population aged 65 and over rises from 9.5 million in 2023 to 14.8 million in 2035, and the population aged 80 and over from 2.4 million to 4.1 million; the number of older people with certifiable care needs rises by 47 percent.",
            "Figure 2 shows the implications. Holding LTCI rules fixed, demographic change alone would raise required capacity — measured in full-time-equivalent benefit units — by 47 percent. The erosion of family care adds a further 13 percentage points, because the model predicts that households with fewer and more strongly employed children substitute towards formal care. To keep the probability that an older person with care needs receives formal care at its 2023 level, the capacity of Korea's system would therefore need to expand by 60 percent by 2035. Using the 95 percent probabilistic prediction intervals of the UN projections, the required expansion ranges from 52 to 69 percent. If capacity instead grows in line with the expansion of the care workforce over 2015–2023 adjusted for the projected decline of the working-age population, it would rise by only 35 percent, and about 290,000 older people with care needs who would be covered under today's rules would go without formal care in 2035.",
            "We also simulate a policy that raises Korea's coverage intensity towards Japan's by extending eligibility to lower assessment scores. Raising the coverage intensity index from 0.51 to 0.75 by 2035 would raise formal care use among older people with care needs by a further 11 percentage points and reduce informal care hours by 9 percent, but it would raise the employment of female caregivers by only 0.7 percentage points and increase public spending by about 0.4 percent of GDP a year relative to the baseline projection. Because the model attributes most of the gap in formal care use to policy rather than to preferences, this expansion would be well used; whether it is worth its cost depends on how one values the well-being of care recipients and the reduced burden on family caregivers rather than on its labour-market dividend.",
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Projected capacity requirements of Korea's LTCI system, 2023–2035 (2023 = 100)",
              kind: "line",
              xLabels: ["2023", "2025", "2027", "2029", "2031", "2033", "2035"],
              yLabel: "Index of capacity in benefit units (2023 = 100)",
              series: [
                { name: "Required: demographics and family care", values: [100, 108, 117, 127, 138, 149, 160] },
                { name: "Required: demographics only", values: [100, 106, 113, 121, 129, 138, 147] },
                { name: "Capacity on current workforce trend", values: [100, 106, 112, 118, 124, 130, 135] },
              ],
              note: "Note: Model projections under the United Nations World Population Prospects 2022 medium variant, holding LTCI rules fixed. Required capacity keeps the probability that an older person with care needs receives formal care at its 2023 level. The workforce trend extrapolates growth in licensed care workers over 2015–2023, adjusted for the decline in the working-age population.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Why is the labour supply response so small? The model allows us to decompose the informal care hours displaced by coverage by the identity of the caregiver. Of the 5.1 weekly hours displaced on average, 2.0 hours are provided by spouses, who are mostly retired, 1.6 hours by co-resident daughters and daughters-in-law, of whom only a minority are employed, and 1.5 hours by non-co-resident children. Formal services thus relieve mainly caregivers whose labour-market attachment is already weak. Moreover, the hours displaced are concentrated in morning and evening personal care, while employment requires a continuous block of daytime hours; for many caregivers the reduction is too small to make a job feasible.",
        "Table 5 reports heterogeneous effects. Consistent with H3, the effects on formal care are largest for parents with cognitive impairment, whose supervision needs make informal care particularly burdensome, and the labour supply effects are concentrated among caregivers under 55 and among those with tertiary education, whose employment rises by 3.4 and 3.1 percentage points, respectively. For caregivers aged 60 and over, the employment effect is close to zero. Non-co-resident daughters respond more than co-resident daughters-in-law, reflecting both their stronger labour-market attachment and the higher utility cost of caregiving at a distance.",
        "The comparison between the two countries is also informative. Japanese caregivers respond somewhat more on the employment margin, mainly because the Japanese system offers more day-care and short-stay services, which free continuous blocks of time. In counterfactual simulations that give Korean households the Japanese mix of services at Korean benefit levels, the employment effect of coverage in Korea rises from 1.6 to 2.3 percentage points. The design of the benefit package, and not only its generosity, therefore shapes the labour-market dividend of LTCI, in line with evidence from Germany [19] and with the emphasis on respite and day care in international policy reviews [23].",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Heterogeneous effects of coverage (model simulations)",
          columns: ["Group", "Share of households", "Formal care use (%)", "Informal care hours (%)", "Caregiver employment (pp)"],
          rows: [
            ["All households with care needs", "1.00", "38", "−21", "1.6"],
            ["Parent with cognitive impairment", "0.36", "47", "−26", "2.0"],
            ["Parent without cognitive impairment", "0.64", "33", "−18", "1.4"],
            ["Caregiver aged under 55", "0.38", "41", "−24", "3.4"],
            ["Caregiver aged 60 and over", "0.35", "34", "−17", "0.2"],
            ["Caregiver with tertiary education", "0.27", "44", "−27", "3.1"],
            ["Co-resident daughter-in-law", "0.21", "31", "−15", "0.9"],
            ["Non-co-resident daughter", "0.33", "43", "−25", "2.5"],
            ["Korea, Japanese service mix", "—", "40", "−23", "2.3"],
          ],
          note: "Note: Effects of extending LTCI coverage to uncovered households with care needs, simulated from the estimated model for Korea. Formal care use and informal care hours in percent of the uncovered baseline; caregiver employment in percentage points. The last row gives Korean households the Japanese composition of home, day-care and short-stay services at Korean benefit levels.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports the main effects under alternative specifications. Restricting the reduced-form comparison in Korea to a narrower band of functional scores around the grade 5 threshold reduces precision but leaves the point estimates almost unchanged. Excluding the 2014 wave, which was fielded partly before and partly after the reform, slightly increases the estimated effects. Re-weighting the Japanese sample to match the Korean distribution of age, sex, care need and household composition changes the Japanese estimates by less than two percentage points, indicating that the cross-country similarity of proportional effects is not an artefact of sample composition.",
        "In the structural model, we examine alternative assumptions on the substitutability of formal and informal care, on the discount factor and on the re-entry cost. Allowing complementarity between formal nursing care and informal care for parents with severe needs, as suggested by Bonsang {8}, slightly lowers the reduction in informal care. Doubling the re-entry cost reduces the labour supply effect to 1.1 percentage points; setting it to zero raises it to 2.6 points but worsens the fit of caregivers' employment transitions considerably. The projected capacity requirement for 2035 ranges from 55 to 64 percent across these specifications, and from 57 to 62 percent when we use alternative prevalence trends that allow for compression or expansion of morbidity.",
        "Finally, we address measurement. Informal care hours are self-reported and may be over-stated for co-resident caregivers. Top-coding hours at 70 per week or replacing them with an indicator of intensive care (20 hours or more) leaves the proportional effects unchanged. Using the administrative certification records available for a subsample of KLoSA respondents who consented to linkage, rather than self-reported certification, gives a first stage of 0.34 and effects per covered person within one percentage point of the baseline.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the main estimates",
          columns: ["Specification", "Formal care (%)", "Informal care (%)", "Caregiver employment (pp)", "Required expansion by 2035 (%)"],
          rows: [
            ["Baseline", "38", "−21", "1.6", "60"],
            ["Narrow score band (Korea)", "37", "−22", "1.4", "—"],
            ["Excluding 2014 wave", "41", "−23", "1.7", "—"],
            ["Japan re-weighted to Korean sample", "36", "−20", "1.8", "—"],
            ["Formal–informal complementarity, severe needs", "37", "−18", "1.5", "58"],
            ["Discount factor 0.92 (baseline 0.96)", "38", "−21", "1.5", "61"],
            ["Re-entry cost doubled", "38", "−21", "1.1", "64"],
            ["Re-entry cost set to zero", "39", "−22", "2.6", "55"],
            ["Compression of morbidity", "38", "−21", "1.6", "57"],
            ["Expansion of morbidity", "38", "−21", "1.6", "62"],
            ["Administrative certification (linked subsample)", "37", "−20", "1.5", "—"],
          ],
          note: "Note: Effects of coverage on formal care use and informal care hours in percent of the uncovered mean, and on caregiver employment in percentage points; required expansion of Korean LTCI capacity between 2023 and 2035 under the UN medium variant. Reduced-form specifications report effects per covered person; '—' indicates that the specification does not alter the projection.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our findings have several implications for long-term care policy in Korea and Japan. First, public LTCI is effective at what it is primarily designed to do: it raises the use of formal care substantially and relieves family caregivers of a fifth of their care hours. The large gap in formal care use between Korea and Japan reflects mainly differences in policy rather than in preferences for family care, so the argument that Korean families will continue to provide care regardless of public provision finds little support in our estimates.",
        "Second, LTCI should not be sold primarily as a labour-market policy. The employment dividend of coverage is real but small, because formal care relieves mainly caregivers who are retired or have weak attachment to the labour market. Larger dividends could be obtained by tilting the benefit package towards day-care and short-stay services, which free continuous blocks of time for working-age caregivers, and by combining LTCI with caregiver leave and flexible working arrangements. Our simulations suggest that adopting the Japanese service mix would raise the employment effect by almost half at little additional cost.",
        "Third, Korea faces a capacity challenge that is arriving quickly. The required expansion of 60 percent by 2035 is driven mostly by demography, but the erosion of family care adds a substantial component that is often overlooked in official projections. Meeting this demand will require not only financing but also a substantial increase in the care workforce, whose wages and working conditions currently make recruitment difficult. Read together with evidence on the sustainability of the National Pension Scheme [25], our results indicate that the fiscal costs of ageing in Korea will rise sharply over the next decade, and that LTCI contributions — currently about 13 percent of health insurance contributions — will need to rise.",
        "Fourth, Japan's experience offers lessons on both expansion and restraint. Japan's 2006 reform, which reduced coverage for those with mild impairments, shifted care back to families almost one for one in proportional terms, with little effect on caregivers' employment. Policies that restrain spending by tightening eligibility at the low-need margin thus mainly transfer costs to families, a consideration that applies equally to proposals to slow the growth of Korea's scheme.",
        "Two caveats apply. Our quasi-experimental estimates come from reforms affecting people with mild to moderate needs, and extrapolation to severe needs relies on the structure of the model. And our projections hold constant the price and quality of formal care; if workforce shortages raise the price of care, the expansion needed to meet demand would be more costly than our estimates imply.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Using harmonised micro-data for Korea and Japan, reform-based quasi-experiments and a structural model of household care decisions, we find that expanding long-term care insurance coverage increases formal care utilisation by 38 percent and reduces informal care by 21 percent, while raising the employment of female caregivers by only 1.6 percentage points, about one-third of what cross-sectional associations suggest. Korea's system currently operates at roughly half of Japan's coverage intensity, and under the United Nations demographic scenarios its capacity would need to expand by 60 percent by 2035 to meet projected demand.",
        "These results suggest that public LTCI should be judged mainly by the care it provides and the burden it lifts from families rather than by its labour-market dividend, and that the design of the benefit package matters as much as its generosity. Future work could use linked administrative records to study the health effects of formal care, examine the labour market for care workers that will determine whether the required expansion is feasible, and extend the comparison to Taiwan and China, which are designing their own LTCI schemes.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Harmonisation and Model Details",
      paragraphs: [
        "Care needs. ADL limitations are harmonised over six activities common to both surveys: dressing, bathing, eating, getting in and out of bed, using the toilet and walking across a room. Cognitive impairment is defined from harmonised immediate and delayed word recall, orientation in time and serial subtraction, standardised within each survey on the 2008 (KLoSA) and 2009 (JSTAR) distributions of respondents aged 65–69 without ADL limitations.",
        "Approximating LTCI assessment scores. For the Korean reform, we predict the official assessment score from the survey's ADL, IADL, cognitive and behavioural items using the published weights of the assessment tool, calibrated so that the predicted share of respondents above each threshold matches certification rates by age and sex in administrative statistics. The predicted score correlates at 0.81 with the official score in the linked subsample.",
        "Model timing and solution. A model period is two years, matching the survey frequency. The parent's need state follows a four-state Markov chain estimated separately by age group and sex with survey data. The model is solved by backward induction from age 100, and the conditional choice probabilities are computed in closed form. We simulate 20 histories per household, and the weighting matrix is the inverse of the diagonal of the bootstrap covariance matrix of the moments.",
        "Projections. Age-sex prevalence of care needs is estimated from the 2016–2020 KLoSA waves and held constant in the baseline. Family caregiver availability is projected from cohort fertility, marriage and female employment rates, using the cohort analysis of Korean women's labour force participation in this journal [26] for employment trends.",
      ],
    },
  ],
};
