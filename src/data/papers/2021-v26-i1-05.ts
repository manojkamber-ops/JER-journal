// Vol. 26, No. 1 (January 2021) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i1-05",
  title: "Fixed-Term Contract Limits and Conversion to Permanent Employment: Evidence from Korea's Two-Year Rule",
  authors: [
    {
      name: "Seung-Hwan Oh",
      corresponding: true,
      affiliation: { department: "Department of Economics", institution: "Chung-Ang University", city: "Seoul", country: "Republic of Korea" },
    },
    {
      name: "Ji-Yeon Park",
      corresponding: false,
      affiliation: { department: "Labour Market Research Division", institution: "Korea Labor Institute", city: "Seoul", country: "Republic of Korea" },
    },
  ],
  abstract:
    "Limits on the duration of fixed-term contracts are meant to push employers to convert temporary workers to open-ended jobs, but they may instead induce dismissals just before the limit binds. We study Korea's 2007 Non-Regular Worker Protection Act, which deems fixed-term workers employed for more than two years to hold open-ended contracts. Using the Korean Labor and Income Panel Study for 2003–2018, linked to the supplementary waves of the Economically Active Population Survey, we exploit the July 2007 effective date and the phased application of the rule by firm size — establishments with 300 or more employees first and those with fewer than 100 employees from July 2009 — in difference-in-differences and discrete-time duration models. After the reform, the monthly separation hazard rises by 9.4 percentage points in the month before the two-year mark. At the same time, the probability of conversion to an open-ended contract rises by 6.1 percentage points overall, but firms with fewer than 100 employees show no significant conversion gain. Converted workers earn a 7.8 percent wage premium relative to matched stayers, and 'indefinite-contract' (mugigyeyak) positions absorb roughly 40 percent of conversions. Duration limits thus raise conversion where firms can absorb it but intensify churning at the threshold elsewhere.",
  keywords: ["fixed-term contracts", "employment protection", "non-regular workers", "labour market dualism", "Korea"],
  jelCodes: ["J41", "J42", "J63", "K31"],
  pages: "1–25",
  volume: 26,
  issue: 1,
  year: 2021,
  received: "2020-01-21",
  accepted: "2020-07-27",
  published: "2021-01-15",
  publishedOnline: "2021-01-02",
  citations: 30,
  downloads: 2182,
  pdfSize: "1.56 MB",
  type: "Research Article",
  acknowledgments:
    "We thank participants at the Korea Labor Institute labour-market workshop, the Korean Economic Association annual meeting and the Hanyang University economics seminar, two anonymous referees and the handling editor for helpful comments. The views expressed are those of the authors and do not necessarily reflect those of the Korea Labor Institute.",
  dataAvailability:
    "The Korean Labor and Income Panel Study is distributed by the Korea Labor Institute to registered users; microdata from the supplementary waves of the Economically Active Population Survey are available from Statistics Korea's MicroData Integrated Service. Code to construct the spell data and replicate all tables and figures is available from the corresponding author.",
  editorialNote:
    "Seung-Hwan Oh and Ji-Yeon Park show that Korea's two-year limit on fixed-term contracts raised the separation hazard by 9.4 percentage points in the month before the limit binds, while lifting conversion to open-ended contracts by 6.1 percentage points — a gain that is absent in firms with fewer than 100 employees. Converted workers earn 7.8 percent more than matched stayers, but about 40 percent of conversions are to separate 'indefinite-contract' (mugigyeyak) tracks.",
  refs: [
    /* 1 */ "Blanchard, O., & Landier, A. (2002). The perverse effects of partial labour market reform: Fixed-term contracts in France. Economic Journal, 112(480), F214–F244.",
    /* 2 */ "Boeri, T. (2011). Institutional reforms and dualism in European labor markets. In O. Ashenfelter & D. Card (Eds.), Handbook of Labor Economics (Vol. 4B, pp. 1173–1236). Amsterdam: Elsevier.",
    /* 3 */ "Cahuc, P., Charlot, O., & Malherbet, F. (2016). Explaining the spread of temporary jobs and its impact on labor turnover. International Economic Review, 57(2), 533–572.",
    /* 4 */ "Bentolila, S., Cahuc, P., Dolado, J. J., & Le Barbanchon, T. (2012). Two-tier labour markets in the Great Recession: France versus Spain. Economic Journal, 122(562), F155–F187.",
    /* 5 */ "Booth, A. L., Francesconi, M., & Frank, J. (2002). Temporary jobs: Stepping stones or dead ends? Economic Journal, 112(480), F189–F213.",
    /* 6 */ "Güell, M., & Petrongolo, B. (2007). How binding are legal limits? Transitions from temporary to permanent work in Spain. Labour Economics, 14(2), 153–183.",
    /* 7 */ "Autor, D. H. (2003). Outsourcing at will: The contribution of unjust dismissal doctrine to the growth of employment outsourcing. Journal of Labor Economics, 21(1), 1–42.",
    /* 8 */ "Kugler, A., & Pica, G. (2008). Effects of employment protection on worker and job flows: Evidence from the 1990 Italian reform. Labour Economics, 15(1), 78–95.",
    /* 9 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 10 */ "Lazear, E. P. (1990). Job security provisions and employment. Quarterly Journal of Economics, 105(3), 699–726.",
    /* 11 */ "Bentolila, S., & Bertola, G. (1990). Firing costs and labour demand: How bad is eurosclerosis? Review of Economic Studies, 57(3), 381–402.",
    /* 12 */ "Ichino, A., & Riphahn, R. T. (2005). The effect of employment protection on worker effort: Absenteeism during and after probation. Journal of the European Economic Association, 3(1), 120–143.",
    /* 13 */ "Dolado, J. J., García-Serrano, C., & Jimeno, J. F. (2002). Drawing lessons from the boom of temporary jobs in Spain. Economic Journal, 112(480), F270–F295.",
    /* 14 */ "Kahn, L. M. (2010). Employment protection reforms, employment and the incidence of temporary jobs in Europe: 1996–2001. Labour Economics, 17(1), 1–15.",
    /* 15 */ "Card, D., Chetty, R., & Weber, A. (2007). Cash-on-hand and competing models of intertemporal behavior: New evidence from the labor market. Quarterly Journal of Economics, 122(4), 1511–1560.",
    /* 16 */ "Kleven, H. J. (2016). Bunching. Annual Review of Economics, 8, 435–464.",
    /* 17 */ "Abadie, A. (2005). Semiparametric difference-in-differences estimators. Review of Economic Studies, 72(1), 1–19.",
    /* 18 */ "Meyer, B. D. (1990). Unemployment insurance and unemployment spells. Econometrica, 58(4), 757–782.",
    /* 19 */ "Jenkins, S. P. (1995). Easy estimation methods for discrete-time duration models. Oxford Bulletin of Economics and Statistics, 57(1), 129–138.",
    /* 20 */ "Rosenbaum, P. R., & Rubin, D. B. (1983). The central role of the propensity score in observational studies for causal effects. Biometrika, 70(1), 41–55.",
    /* 21 */ "Grubb, D., Lee, J.-K., & Tergeist, P. (2007). Addressing labour market duality in Korea. OECD Social, Employment and Migration Working Papers No. 61. Paris: OECD Publishing.",
    /* 22 */ "Gagliarducci, S. (2005). The dynamics of repeated temporary jobs. Labour Economics, 12(4), 429–448.",
    /* 23 */ "Faccini, R. (2014). Reassessing labour market reforms: Temporary contracts as a screening device. Economic Journal, 124(575), 167–200.",
    /* 24 */ "Cappellari, L., Dell'Aringa, C., & Leonardi, M. (2012). Temporary employment, job flows and productivity: A tale of two reforms. Economic Journal, 122(562), F188–F215.",
    /* 25 */ "Berton, F., & Garibaldi, P. (2012). Workers and firms sorting into temporary jobs. Economic Journal, 122(562), F125–F154.",
    /* 26 */ "Aguirregabiria, V., & Alonso-Borrego, C. (2014). Labor contracts and flexibility: Evidence from a labor market reform in Spain. Economic Inquiry, 52(2), 930–957.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Many labour markets are divided between workers on open-ended contracts, who enjoy strong protection against dismissal, and workers on fixed-term or other non-regular contracts, who can be let go at little cost when their contracts expire. This dualism has been linked to high turnover, low training and weak productivity growth among temporary workers, and to a disproportionate share of adjustment falling on them in downturns [2][4][13]. A common policy response is to limit the length of time for which a worker may be employed on successive fixed-term contracts, after which the employer must either offer an open-ended contract or let the worker go. Whether such limits help temporary workers depends on which of these two options employers choose.",
        "Theory gives no clear answer. If temporary contracts are used mainly to screen workers whose productivity is initially unknown, a duration limit may simply bring forward the decision to retain good matches, raising conversion [23]. If instead temporary contracts are a cheap buffer that lets firms avoid the firing costs attached to open-ended jobs, a limit raises the cost of keeping a worker beyond the threshold and may lead firms to replace experienced temporary workers with new ones just before it binds [1][3]. Evidence from France and Spain suggests that the second response is quantitatively important, with temporary workers churning through short spells rather than converting [1][6].",
        "We study Korea's Act on the Protection of Fixed-Term and Part-Time Employees, part of the 2007 package of laws known as the Non-Regular Worker Protection Act. From July 2007, a fixed-term worker employed by the same employer for more than two years is deemed to hold an open-ended contract. The rule was phased in by establishment size: it applied first to establishments with 300 or more employees, from July 2008 to those with 100–299 employees, and from July 2009 to those with 5–99 employees. Because workers hired before the effective date in each size class started their two-year clock only at that date, the phase-in generates variation across firm sizes in when the threshold first became binding, which we exploit in difference-in-differences and duration-hazard designs.",
        "Our data come from the Korean Labor and Income Panel Study (KLIPS) for 2003–2018, which records monthly employment histories, contract type and wages, linked to the August supplementary waves of the Economically Active Population Survey (EAPS), which provide a large cross-section of wage workers with detailed information on employment status. We construct 6,840 fixed-term employment spells and follow each month by month until conversion, separation or censoring.",
        "We have four main findings. First, the reform produced a sharp spike in separations just before the two-year mark: the monthly separation hazard in tenure month 23 rises by 9.4 percentage points relative to the pre-reform hazard and relative to unaffected size classes. Second, the probability that a fixed-term spell ends in conversion to an open-ended contract within 26 months rises by 6.1 percentage points overall, from a pre-reform base of 18.2 percent. Third, the conversion gain is concentrated in establishments with 100 or more employees; for establishments with fewer than 100 employees the estimated effect is small and statistically insignificant, and the separation spike is largest. Fourth, converted workers earn 7.8 percent more than matched workers who stayed with their employer in non-regular status, but roughly 40 percent of conversions are to so-called indefinite-contract (mugigyeyak) positions, which are open-ended but remain on separate, lower pay scales and carry a much smaller premium.",
        "These results contribute to the literature on partial labour market reforms and two-tier labour markets [1][2][3][4] by providing evidence from an Asian economy in which non-regular employment is widespread and in which the duration limit was introduced in a staggered way that allows cleaner identification than in most European reforms. They also inform the continuing debate in Korea about the regular–non-regular divide. Section 2 describes the institutional setting and Section 3 reviews related work. Section 4 sets out a simple framework. Sections 5 and 6 describe the data and empirical strategy, Section 7 reports the main results, Section 8 examines mechanisms and heterogeneity, Section 9 presents robustness checks, Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Non-regular employment expanded rapidly in Korea after the 1997–98 financial crisis. By the mid-2000s, workers classified by Statistics Korea as non-regular — fixed-term, part-time, dispatched, contracted-out and other atypical workers — accounted for roughly a third of wage employees, and fixed-term workers alone for about a fifth [21]. Non-regular workers earned considerably less than regular workers with similar characteristics, had lower coverage by social insurance and company welfare schemes, and faced much higher job instability. Regular workers, by contrast, are protected by the Labor Standards Act's requirement of 'justifiable reason' for dismissal, which courts have interpreted strictly.",
        "The Non-Regular Worker Protection Act, passed in November 2006 and effective from 1 July 2007, had two main components. The first prohibited discrimination in pay and working conditions against fixed-term, part-time and dispatched workers relative to comparable regular workers, enforced through the Labour Relations Commission. The second, which we study, limited the total duration of fixed-term employment with the same employer to two years. A worker employed beyond two years is deemed to hold a contract without a fixed term, so that dismissal requires justifiable reason as for any other open-ended employee. Exemptions cover workers aged 55 or over, those completing a specific project of defined length, those replacing employees on leave, professionals such as doctors and lawyers, and certain government job programmes.",
        "Table 1 summarises the phase-in schedule. For establishments with 300 or more employees and public-sector employers, the rule took effect in July 2007; for those with 100–299 employees, in July 2008; and for those with 5–99 employees, in July 2009. Establishments with fewer than five employees are not covered. Because only employment after the effective date counts towards the two-year limit, the first workers who could reach the threshold in large establishments did so in July 2009, in medium establishments in July 2010 and in small establishments in July 2011. The government considered extending the limit to four years in 2009, when the threshold first began to bind for large firms, but the proposal was not passed; the first binding month for large firms was nevertheless accompanied by intense public debate about mass dismissals.",
        "An important feature of the Korean implementation is the emergence of the 'indefinite-contract' (mugigyeyak) category. Many employers, particularly in the public sector, banks and large retailers, responded to the law by moving fixed-term workers onto open-ended contracts that were nevertheless distinct from regular employment: workers in these positions are protected against dismissal but remain on separate job ladders and pay scales, often with limited access to promotion and bonuses. Statistics Korea's classification counts such workers as regular when their contract has no fixed term, so headline conversion rates overstate the extent to which the law integrated fixed-term workers into regular employment. We return to this distinction in Section 8.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Phase-in of the two-year rule and fixed-term employment by establishment size",
          columns: ["Establishment size", "Effective date", "First month threshold binds", "Fixed-term share of wage employees, 2006 (%)", "Fixed-term workers, 2006 (thousands)"],
          rows: [
            ["300 or more employees and public sector", "July 2007", "July 2009", "15.8", "512"],
            ["100–299 employees", "July 2008", "July 2010", "18.4", "389"],
            ["5–99 employees", "July 2009", "July 2011", "22.7", "1,684"],
            ["Fewer than 5 employees", "Not covered", "—", "26.1", "726"],
          ],
          note: "Note: Fixed-term shares and counts are computed from the August 2006 supplementary wave of the Economically Active Population Survey, using survey weights. Fixed-term workers are those with a specified contract duration or who expect their job to end at a specified date.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "A large literature studies the effects of employment protection on employment and turnover. Early theoretical work showed that firing costs reduce both hiring and firing, with ambiguous effects on average employment [10][11]. Empirical studies exploiting reforms that changed protection for some firms or workers but not others find that stronger protection reduces worker flows and shifts hiring towards less protected forms of employment [7][8][14]. Ichino and Riphahn {12} show that protection also affects worker behaviour, with absenteeism rising once workers pass their probation period.",
        "When reforms liberalise temporary contracts while leaving protection for permanent contracts unchanged, they create a two-tier labour market. Blanchard and Landier {1} show theoretically that such partial reforms can raise turnover and reduce welfare, because firms use temporary contracts for entry-level jobs and convert few of them; Cahuc, Charlot and Malherbet {3} develop a model in which the firing-cost gap explains the spread of very short temporary contracts. Evidence from Spain, the canonical two-tier labour market, documents low conversion rates and high churning [6][13], and comparisons between France and Spain during the Great Recession show that a larger firing-cost gap amplified job losses among temporary workers [4]. Reforms in Italy that eased temporary contracts and increased their regulation had heterogeneous effects on job flows and productivity [24], and workers and firms sort into temporary jobs in systematic ways [25].",
        "Whether temporary jobs are stepping stones or dead ends has been studied extensively. Booth, Francesconi and Frank {5} find that fixed-term jobs in Britain are a stepping stone to permanent work, although with a wage penalty that persists for women; Gagliarducci {22} finds that repeated temporary jobs in Italy reduce the probability of obtaining permanent employment. Most directly related to our study, Güell and Petrongolo {6} examine the Spanish rule limiting temporary contracts to three years and find that conversion rates spike at the legal limit, but that a large share of contracts are terminated before it. Aguirregabiria and Alonso-Borrego {26} estimate that the liberalisation of temporary contracts in Spain raised employment but reduced job stability. Faccini {23} argues that temporary contracts serve as a screening device, which would predict that limits mainly bring conversion decisions forward.",
        "Korean evidence on the 2007 act is mostly descriptive or based on short post-reform windows, typically comparing conversion and separation rates before and after 2007 for all firms. Grubb, Lee and Tergeist {21} review the causes of dualism in Korea and anticipate many of the issues that later arose under the law. We add to this literature by exploiting the size-based phase-in, by using monthly spell data that allow us to measure behaviour precisely around the threshold, and by distinguishing conversions to regular jobs from conversions to indefinite-contract positions.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a firm that has employed a fixed-term worker for t months. The match has productivity that the firm learns over time. Before the reform, the firm can keep the worker on renewed fixed-term contracts indefinitely, paying the fixed-term wage and retaining the option to end the match at contract expiry at negligible cost. After the reform, if the firm keeps the worker beyond 24 months, the worker becomes open-ended and the firm loses that option: separation now incurs a firing cost F, and in practice the worker may also gain access to higher regular pay. At month 23 or 24, the firm therefore compares the expected value of an open-ended match, net of the option value lost, with the value of replacing the worker with a new fixed-term hire, whose clock starts at zero.",
        "This simple comparison yields three hypotheses. First, separations should bunch just before the threshold for matches whose value is positive but below the option-adjusted cost of conversion, producing a spike in the separation hazard at months 23–24 that was absent before the reform [1][6]. The logic is analogous to the bunching of behaviour at notches in benefit or tax schedules [15][16]. Second, conversions should rise for matches of sufficiently high quality, since the reform removes the possibility of retaining such workers indefinitely on fixed-term terms; the net effect on conversion is positive if screening motives dominate and could be negative if most fixed-term jobs are buffer positions [23]. Third, effects should differ by firm size. Large firms with internal labour markets, rent-sharing and visibility to regulators and unions have more high-value matches and face higher reputational costs of mass dismissals; small firms, with thinner margins and greater ease of replacing workers, are more likely to respond through churning.",
        "The framework also suggests that firms may seek intermediate options. Converting a worker to an open-ended contract that does not carry regular pay — an indefinite-contract position — satisfies the law while avoiding much of the wage cost. If this option is available, conversions will rise more than wages, and the wage premium associated with conversion will be smaller for workers moved to such positions. We test these predictions in Sections 7 and 8.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-klips",
          heading: "5.1 Korean Labor and Income Panel Study",
          paragraphs: [
            "KLIPS is an annual longitudinal survey of about 5,000 urban households and their members, conducted by the Korea Labor Institute since 1998, with a refreshment sample added in 2009. Respondents report a full history of jobs held since the previous interview, including start and end months, establishment size, industry, occupation, contract type, whether the contract has a fixed term and its length, and monthly earnings. We use waves 6 to 21, covering 2003–2018, and construct monthly employment histories for all wage employees aged 18–54. We exclude workers aged 55 or over, who are exempt from the two-year limit, as well as public administration, where contract policy changed under separate guidelines.",
            "A fixed-term spell begins when a worker starts a job with a specified contract duration, or begins to count towards the limit at the effective date in the establishment's size class if hired earlier. It ends with conversion, when the worker reports that the same job with the same employer has become open-ended; with separation, when the worker leaves the employer; or with right-censoring at the last interview. Our sample contains 6,840 fixed-term spells held by 4,912 workers, observed for 148,320 person-months. Because establishment size is reported in bands that match the phase-in thresholds, we can assign each spell to a size class; we use the size reported at the start of the spell to avoid endogenous changes.",
          ],
        },
        {
          id: "data-eaps",
          heading: "5.2 Economically Active Population Survey Supplements",
          paragraphs: [
            "The August supplementary waves of the EAPS, conducted annually since 2001, survey about 30,000 wage workers on their employment status, contract type, tenure and wages, using the classification of non-regular workers adopted by the tripartite commission in 2002. Because the supplements are cross-sections, they cannot track individual conversions, but their size allows precise estimates of the stock of fixed-term workers with tenure close to the threshold and of the share of open-ended workers who are on separate pay scales. We link the two surveys at the level of industry, size class and year to construct control variables and to validate KLIPS-based conversion rates against the larger sample.",
            "From 2007 onward, the supplements also identify workers whose contract has no fixed term but who report that they are not covered by the regular wage system of their employer, which allows us to measure indefinite-contract employment. We use this information together with the KLIPS questions on job title and pay scale after conversion to classify conversions into those to regular positions and those to indefinite-contract positions.",
          ],
        },
        {
          id: "data-descriptives",
          heading: "5.3 Descriptive Statistics",
          paragraphs: [
            "Table 2 reports characteristics of fixed-term spells in the pre-reform period (spells starting 2003–2006) and the post-reform period (spells counting towards the limit from the effective date), by establishment size. Fixed-term workers in small establishments are older, less educated and more concentrated in construction, wholesale and retail trade and personal services; those in large establishments are more likely to be university graduates and to work in finance, education and health. Spell durations are short in all size classes: before the reform, the median fixed-term spell lasted 13 months, and only about a quarter lasted more than two years.",
            "The descriptive changes after the reform foreshadow our results. The share of spells ending in conversion within 26 months rose from 21.4 to 31.2 percent in large establishments but barely changed in small ones, while the share ending in separation in months 22–24 rose in all size classes and most sharply in small establishments. Wages of fixed-term workers rose modestly in real terms, by somewhat more in large establishments.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Characteristics of fixed-term spells by establishment size and period",
              columns: ["Variable", "300+ pre", "300+ post", "100–299 pre", "100–299 post", "5–99 pre", "5–99 post"],
              rows: [
                ["Age (years)", "33.1", "33.8", "35.4", "36.0", "38.2", "38.9"],
                ["Female (share)", "0.52", "0.55", "0.49", "0.51", "0.47", "0.48"],
                ["University graduate (share)", "0.44", "0.49", "0.33", "0.37", "0.19", "0.22"],
                ["Monthly wage (KRW thousand, 2015 prices)", "1,742", "1,861", "1,563", "1,642", "1,388", "1,439"],
                ["Median spell length (months)", "14", "15", "13", "14", "12", "12"],
                ["Converted within 26 months (share)", "0.214", "0.312", "0.192", "0.256", "0.168", "0.172"],
                ["Separated in months 22–24 (share)", "0.061", "0.118", "0.066", "0.139", "0.072", "0.171"],
                ["Spells", "1,284", "1,069", "936", "802", "1,527", "1,222"],
              ],
              note: "Note: KLIPS waves 6–21. Pre-reform spells start in 2003–2006; post-reform spells start counting towards the two-year limit on or after the effective date for the establishment's size class. Shares of converted and separated spells are computed among spells that reach month 22 or are censored after month 26.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our strategy compares the behaviour of fixed-term spells before and after the two-year rule became binding, using establishments in size classes not yet covered as a control group. Because the rule was phased in by size class, at any date between July 2007 and July 2011 some size classes were covered and others were not, and the timing at which the threshold first bound differed across classes by up to two years. We combine this variation with the sharp tenure threshold at 24 months, which provides a second source of within-spell variation.",
      ],
      subsections: [
        {
          id: "strategy-did",
          heading: "6.1 Difference-in-Differences for Spell Outcomes",
          paragraphs: [
            "For spell-level outcomes, we estimate Y_isk = β·Covered_sk + X_i′γ + δ_s + θ_k + μ_j + ε_isk, where Y_isk is an indicator that spell i in size class s, starting in half-year k, ends in conversion within 26 months; Covered_sk equals one if the spell's two-year clock falls under the rule; δ_s and θ_k are size-class and start-period fixed effects; μ_j are industry fixed effects; and X_i includes age, sex, education, occupation and region. The coefficient β is the average effect of coverage on the conversion probability. We estimate analogous models for separation in months 22–24 and for spell length. Standard errors are clustered by size class and industry, and we report wild cluster bootstrap p-values given the small number of size classes [9].",
            "The identifying assumption is that, absent the reform, conversion and separation rates would have evolved similarly across size classes. We test this assumption by estimating event-study versions of the model in which coverage is interacted with year relative to the first binding month for each size class, and by examining pre-reform trends in outcomes by size class. We also estimate semiparametric difference-in-differences models that reweight control spells to match the covariate distribution of treated spells [17].",
          ],
        },
        {
          id: "strategy-hazard",
          heading: "6.2 Discrete-Time Duration Models",
          paragraphs: [
            "To measure behaviour around the threshold precisely, we estimate discrete-time hazard models on person-month data [18][19]. The monthly hazard of separation (or conversion) for spell i in tenure month t is modelled as h_it = Σ_b α_b·1[t ∈ b] + Σ_b β_b·1[t ∈ b]·Covered_it + X_i′γ + δ_s + θ_m + ε_it, where b indexes tenure bins (months 1–12, 13–21, 22, 23, 24, 25–26 and 27 or later), θ_m are calendar-month fixed effects and Covered_it indicates that the spell's clock falls under the rule. The coefficients β_b measure the change in the hazard in each tenure bin attributable to the reform. We estimate linear probability versions for ease of interpretation; logit and complementary log-log versions yield very similar marginal effects.",
            "The hazard design addresses a concern with the spell-level analysis: if the reform changed the composition of spells that reach month 22 — for example, because firms terminated weaker matches earlier — spell-level comparisons conditional on reaching the threshold would be biased. The hazard model estimates effects month by month for all spells at risk, so that changes in early separations are captured directly rather than through selection. We also estimate competing-risks versions that treat conversion and separation as alternative exits.",
          ],
        },
        {
          id: "strategy-wages",
          heading: "6.3 Wage Effects of Conversion",
          paragraphs: [
            "To estimate the wage return to conversion, we compare workers who converted at months 22–26 with matched stayers: workers in the same size class and industry who remained with their employer beyond 24 months in non-regular status, either under one of the legal exemptions or after reclassification to part-time or other atypical arrangements. Matching is on the propensity score estimated from pre-conversion wages, tenure, age, education, occupation and establishment characteristics [20]. We then estimate the change in log monthly wages from 12 months before to 12 months after the threshold for converted workers relative to matched stayers.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We first report the effect of the reform on the monthly separation hazard around the two-year threshold, then on the probability of conversion, and finally on wages. Throughout, the estimates compare covered with not-yet-covered spells, net of size-class, period and industry fixed effects.",
      ],
      subsections: [
        {
          id: "results-separation",
          heading: "7.1 Separations at the Threshold",
          paragraphs: [
            "Figure 1 plots the monthly separation hazard by tenure month for spells covered by the rule and for comparable pre-reform spells. Before the reform, the hazard declines gradually with tenure from about 4 percent per month in the first year to about 3 percent around month 24, with small spikes at months 12 and 24 corresponding to the end of annual contracts. After the reform, the hazard at month 23 jumps to 12.5 percent, and remains elevated in month 24, before falling below the pre-reform level after month 25, when the surviving workers have become open-ended employees.",
            "Table 3 reports the hazard-model estimates. Coverage raises the separation hazard in tenure month 23 by 9.4 percentage points relative to a pre-reform mean of 3.1 percent, and in month 24 by 4.2 percentage points. Effects in months 1–21 are small and insignificant, indicating that firms did not respond by terminating fixed-term spells earlier on a large scale. After month 25, the separation hazard falls by 1.1 percentage points, consistent with the increased protection of workers who passed the threshold. The cumulative effect over months 22–24 implies that about 14 percent of workers reaching month 22 were separated because of the rule.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effect of the two-year rule on the monthly separation hazard, by tenure month",
              columns: ["Tenure month", "Pre-reform hazard (%)", "Effect of coverage (pp)", "Std. error", "Person-months"],
              rows: [
                ["1–12", "4.2", "0.18", "(0.21)", "79,450"],
                ["13–21", "3.6", "0.31", "(0.27)", "41,880"],
                ["22", "3.2", "0.86*", "(0.47)", "3,962"],
                ["23", "3.1", "9.42***", "(1.38)", "3,711"],
                ["24", "3.4", "4.17***", "(1.05)", "3,269"],
                ["25–26", "2.9", "−0.64", "(0.52)", "5,538"],
                ["27 or later", "2.4", "−1.13***", "(0.33)", "10,510"],
              ],
              note: "Note: Linear probability hazard model estimated on person-month data; each row reports the coefficient on the interaction of the tenure bin with coverage by the two-year rule. All models include size-class, calendar-month and industry fixed effects and individual controls. Standard errors clustered by size class and industry. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Monthly separation hazard of fixed-term spells by tenure month, before and after coverage",
              kind: "line",
              xLabels: ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
              yLabel: "Separation hazard (percent per month)",
              series: [
                { name: "Pre-reform spells", values: [3.5, 3.4, 3.3, 3.3, 3.2, 3.1, 3.4, 3.0, 2.8, 2.6, 2.5, 2.4, 2.4] },
                { name: "Covered spells", values: [3.6, 3.6, 3.5, 3.6, 4.1, 12.5, 7.6, 2.3, 2.2, 1.5, 1.4, 1.3, 1.3] },
              ],
              marker: 6,
              note: "Note: Raw monthly separation hazards from KLIPS spell data, smoothed with a three-month moving average outside months 22–25. The vertical line marks tenure month 24, the last month of permissible fixed-term employment.",
            },
          ],
        },
        {
          id: "results-conversion",
          heading: "7.2 Conversion to Open-Ended Contracts",
          paragraphs: [
            "Table 4 reports difference-in-differences estimates of the effect of coverage on the probability that a fixed-term spell ends in conversion within 26 months. In the pooled sample, coverage raises the conversion probability by 6.1 percentage points, from a pre-reform base of 18.2 percent — an increase of about one third. The effect is largest in establishments with 300 or more employees, at 9.8 percentage points, and somewhat smaller in establishments with 100–299 employees, at 6.9 percentage points. In establishments with 5–99 employees, the estimated effect is 1.2 percentage points and statistically insignificant.",
            "The same table shows that the probability of separation in months 22–24 rises by 7.9 percentage points in the pooled sample, by 5.4 points in large establishments and by 10.6 points in small establishments. In small establishments, therefore, the reform raised separations at the threshold without a corresponding increase in conversion, whereas in large establishments the increase in conversion exceeds the increase in threshold separations. Taken together, the reform modestly lengthened completed fixed-term spells in large firms and shortened them in small firms, as shown in the last row of the table.",
            "Figure 2 reports event-study estimates of the conversion effect by year relative to the first binding month in each size class. Coefficients for the three years before the threshold first bound are small and insignificant, supporting the parallel-trends assumption. The conversion effect appears immediately when the threshold first binds and grows over the following two years, perhaps as firms reorganised job structures and created indefinite-contract positions. There is no evidence that the effect fades over the longer run.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Effect of the two-year rule on conversion and threshold separation, by establishment size",
              columns: ["Outcome", "All covered sizes", "300+ employees", "100–299 employees", "5–99 employees"],
              rows: [
                ["Converted within 26 months", "0.061***", "0.098***", "0.069**", "0.012"],
                ["", "(0.017)", "(0.024)", "(0.029)", "(0.016)"],
                ["Separated in months 22–24", "0.079***", "0.054***", "0.071***", "0.106***"],
                ["", "(0.014)", "(0.017)", "(0.021)", "(0.022)"],
                ["Completed spell length (months)", "0.42", "1.38**", "0.56", "−0.81*"],
                ["", "(0.37)", "(0.61)", "(0.58)", "(0.45)"],
                ["Pre-reform conversion rate", "0.182", "0.214", "0.192", "0.168"],
                ["Spells", "6,840", "2,353", "1,738", "2,749"],
              ],
              note: "Note: Difference-in-differences estimates of the coefficient on coverage by the two-year rule. Models include size-class, start-period and industry fixed effects and individual controls. Standard errors, clustered by size class and industry, in parentheses; wild cluster bootstrap p-values give the same significance levels. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Event-study estimates of the effect of coverage on the conversion probability",
              kind: "line",
              xLabels: ["−3", "−2", "−1", "0", "1", "2", "3", "4", "5"],
              yLabel: "Effect on conversion probability (pp)",
              series: [
                {
                  name: "Estimate",
                  values: [0.4, -0.6, 0, 4.2, 5.9, 7.1, 6.8, 6.6, 7.0],
                  lower: [-2.8, -3.9, 0, 1.0, 2.5, 3.4, 2.9, 2.4, 2.5],
                  upper: [3.6, 2.7, 0, 7.4, 9.3, 10.8, 10.7, 10.8, 11.5],
                },
              ],
              marker: 3,
              note: "Note: Coefficients on interactions of coverage with year relative to the first month in which the two-year threshold binds for the size class (year −1 omitted), with 95 percent confidence intervals. All covered size classes pooled.",
            },
          ],
        },
        {
          id: "results-wages",
          heading: "7.3 Wages after Conversion",
          paragraphs: [
            "Table 5 reports the wage effects of conversion. Converted workers' log monthly wages rise by 7.8 percent relative to matched stayers between 12 months before and 12 months after the threshold. The effect is not driven by differential pre-trends: wage growth in the year before the threshold is similar for converted workers and matched stayers. Nor is it driven by hours, which rise only slightly after conversion; the hourly wage premium is 7.1 percent.",
            "The average premium masks a sharp difference between conversion types. Workers converted to regular positions earn 11.4 percent more than matched stayers, while those converted to indefinite-contract positions earn only 2.4 percent more, an effect that is not statistically significant. Indefinite-contract positions account for 40 percent of all conversions in our sample, so that the weighted average of the two premia reproduces the overall estimate of 7.8 percent. Converted workers in both categories are, however, much more likely to be covered by employer-provided retirement benefits and to receive annual bonuses than matched stayers, which suggests that the total compensation gain is larger than the wage gain.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Wage premium of converted workers relative to matched stayers",
              columns: ["Outcome", "All conversions", "To regular positions", "To indefinite-contract positions"],
              rows: [
                ["Change in log monthly wage", "0.078***", "0.114***", "0.024"],
                ["", "(0.019)", "(0.023)", "(0.026)"],
                ["Change in log hourly wage", "0.071***", "0.103***", "0.023"],
                ["", "(0.018)", "(0.022)", "(0.025)"],
                ["Pre-threshold wage growth (placebo)", "0.006", "0.009", "0.002"],
                ["", "(0.012)", "(0.015)", "(0.017)"],
                ["Receives annual bonus after conversion (change)", "0.214***", "0.288***", "0.103**"],
                ["", "(0.038)", "(0.044)", "(0.049)"],
                ["Share of conversions", "1.00", "0.60", "0.40"],
                ["Converted workers", "1,184", "711", "473"],
              ],
              note: "Note: Changes from 12 months before to 12 months after tenure month 24, for converted workers relative to propensity-score-matched stayers (nearest neighbour, caliper 0.01). Standard errors from 500 bootstrap replications in parentheses. ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Why do small establishments respond to the rule mainly by separating workers, while large establishments convert many of them? The framework emphasises the value of matches relative to the cost of conversion. We examine three proxies for this comparison. First, the conversion effect is larger in occupations with higher returns to firm-specific experience, as measured by the pre-reform wage–tenure profile of regular workers in the same occupation: in the top tercile of this measure, coverage raises conversion by 9.1 percentage points, compared with 2.8 points in the bottom tercile. Second, the effect is larger in unionised establishments, where conversion was often negotiated collectively and where mass dismissals at the threshold would have been costly in terms of industrial relations. Third, small establishments in sectors with high turnover and low skill requirements, such as restaurants and personal services, show the largest separation spikes and no conversion gain at all.",
        "The availability of indefinite-contract positions is a second mechanism. Table 6 shows that the share of conversions to such positions is highest in the public sector and finance, where it exceeds half, and lowest in manufacturing. Industries and size classes in which indefinite-contract positions were common show larger conversion effects but smaller wage effects, consistent with firms using this option to comply with the law while limiting cost increases. In small establishments, which rarely have formal internal pay scales, the indefinite-contract option is largely irrelevant: they either retain workers on what are de facto regular terms or let them go.",
        "We also find that the effects vary across workers. The separation spike is larger for workers without a university degree and for those aged 35–54, who are less likely to be viewed as candidates for long-term internal careers, and the conversion gain is larger for university graduates. Women experienced similar conversion gains to men but were more likely to be converted to indefinite-contract positions, notably in banking and retail, so that their wage gains from conversion were smaller. Finally, the separation spike was most pronounced in 2009 for large firms and in 2011 for small firms, the first years in which the threshold bound in each size class, and diminished somewhat thereafter as firms adjusted hiring practices, including by offering initial contracts of 23 months or less.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Conversion effects, wage premia and indefinite-contract conversions by sector",
          columns: ["Sector", "Effect on conversion (pp)", "Effect on threshold separation (pp)", "Indefinite-contract share of conversions", "Wage premium of converted (%)"],
          rows: [
            ["Manufacturing", "7.4***", "6.1***", "0.22", "10.6***"],
            ["Wholesale and retail trade", "5.2**", "9.3***", "0.47", "5.1*"],
            ["Finance and insurance", "11.6***", "4.4**", "0.58", "4.2"],
            ["Education and health", "8.3***", "6.8***", "0.51", "6.3**"],
            ["Restaurants and personal services", "0.9", "12.7***", "0.18", "8.8*"],
            ["Business services and other", "4.7**", "8.0***", "0.36", "8.4***"],
            ["All sectors", "6.1***", "7.9***", "0.40", "7.8***"],
          ],
          note: "Note: Effects on conversion within 26 months and separation in months 22–24 are difference-in-differences estimates as in Table 4, estimated separately by sector. Indefinite-contract shares are from KLIPS conversions validated against the EAPS supplements. * p < 0.10, ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "We conduct several robustness checks. First, size-class assignment could be endogenous if firms kept their headcount below the thresholds to delay coverage. We find no evidence of bunching in the establishment size distribution just below 100 or 300 employees in the EAPS data after 2007, and our results are unchanged when we drop establishments within 20 employees of either threshold. Second, the 2008–2009 global financial crisis coincided with the first binding month for large firms. Controlling for industry-specific shocks with industry-by-year fixed effects reduces the pooled conversion effect only slightly, to 5.7 percentage points, and the separation spike at month 23 remains at 9.0 percentage points. Third, using establishments with fewer than five employees, which were never covered, as an additional control group yields very similar estimates.",
        "Fourth, measurement error in reported tenure could blur the threshold. Restricting the sample to spells whose start dates are confirmed in two consecutive waves sharpens the spike at month 23 and leaves the other estimates unchanged. Fifth, the semiparametric difference-in-differences estimator [17] yields a pooled conversion effect of 6.4 percentage points. Sixth, the anti-discrimination provisions of the act could have affected wages independently of conversion; but these provisions apply equally to converted workers and stayers, and the wage premium we estimate is a difference between these two groups. Finally, complementary log-log hazard models and competing-risks models give marginal effects within 0.5 percentage points of the linear estimates in Table 3.",
        "A remaining concern is that workers separated at the threshold may simply move to another fixed-term job, so that the separation spike overstates the welfare cost of the rule. Using the KLIPS employment histories, we find that 58 percent of workers separated in months 22–24 are re-employed within six months, but only 21 percent in an open-ended job, and their re-employment wages are on average 4 percent lower than their last fixed-term wage. Separation at the threshold therefore imposes real costs, even if most separated workers find new jobs.",
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results show that Korea's two-year rule had sharply different effects across firms. In large establishments, the rule raised conversion to open-ended contracts by about 10 percentage points and modestly lengthened fixed-term spells, consistent with screening motives and with the high value of experienced workers in internal labour markets [23]. In small establishments, the rule raised separations at the threshold without any detectable gain in conversion, consistent with the use of fixed-term contracts as a low-cost buffer [1][3]. The aggregate effect — a 6.1 percentage point increase in conversion alongside a 9.4 percentage point spike in the month-23 separation hazard — therefore conceals both winners and losers among fixed-term workers.",
        "These findings have several implications. First, duration limits alone are unlikely to eliminate dualism where the gap in firing costs between temporary and permanent contracts is large. As in Spain and France [4][6], firms that do not value long matches will rotate workers through successive temporary jobs. Reducing the gap itself — by easing dismissal procedures for open-ended contracts while strengthening income support for dismissed workers, or by introducing a single open-ended contract with protection that rises gradually with tenure — would address the incentive to separate workers at the threshold more directly [2][3]. Second, the rise of indefinite-contract positions shows that legal conversion does not guarantee integration into regular employment. Policies that address pay and promotion gaps within firms, including stronger enforcement of the act's anti-discrimination provisions, are needed for conversion to translate into higher earnings.",
        "Third, the absence of conversion gains in small firms suggests a role for targeted support. Korea introduced subsidies for conversion of non-regular workers in small and medium enterprises in subsequent years; our estimates suggest that such subsidies would need to be substantial to change behaviour at the threshold, given that the separation spike in small firms is concentrated in sectors with low returns to tenure. Finally, our results caution against extending the duration limit, as proposed in 2009 and again in later years: a longer limit would postpone the threshold rather than change the underlying incentives, and might reduce conversion in large firms by allowing them to retain workers on fixed-term terms for longer.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We have used the staggered introduction of Korea's two-year limit on fixed-term employment to study how employers respond to duration limits. The rule raised the probability of conversion to open-ended contracts by 6.1 percentage points, but also caused a 9.4 percentage point spike in separations in the month before the limit. Conversion gains were concentrated in establishments with 100 or more employees, and absent in smaller ones. Converted workers earned 7.8 percent more than matched stayers, but about 40 percent of conversions were to indefinite-contract positions with little wage gain.",
        "Future research could examine the longer-run careers of workers separated at the threshold and of those converted to indefinite-contract positions, and the effects of the rule on firms' hiring, productivity and use of other non-regular arrangements, such as dispatched and subcontracted workers, which the duration limit does not cover in the same way. Linked employer–employee data would allow a closer examination of these substitution responses, which are central to assessing the overall effect of the law on dualism in the Korean labour market [7][24].",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Construction of Spell Data",
      paragraphs: [
        "Job histories. KLIPS records for each job held since the last interview the start and end year and month, employer identifiers within the survey, and contract characteristics at the time of interview and at job start. We link jobs across waves using the survey's job identifiers, and resolve inconsistencies in start dates by taking the earliest reported date when two reports differ by less than three months and dropping the spell otherwise (2.6 percent of spells).",
        "Contract type and conversion. A job is classified as fixed-term if the respondent reports a fixed contract period or an expected end date. Conversion is recorded when, for the same job with the same employer, the respondent reports at a later interview that the contract has no fixed term; the conversion month is taken from the retrospective question on the date of the change where available and otherwise imputed as the midpoint between interviews. Indefinite-contract positions are identified from the questions, introduced in 2008, on whether the worker is covered by the employer's regular pay scale and promotion system.",
        "Coverage. A spell is covered if the establishment's size class at spell start had become subject to the rule and the spell's two-year clock would reach month 24 on or after the first binding date for the size class. Spells of workers aged 55 or over at month 24, and spells in exempt occupations, are excluded. Inference. Because coverage varies at the level of three size classes over time, we cluster by size class and two-digit industry (138 clusters) and confirm significance using wild cluster bootstrap p-values with 999 replications clustered by size class.",
      ],
    },
  ],
};
