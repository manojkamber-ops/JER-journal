// Vol. 31, No. 1 (February 2026) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2026-v31-i1-01",
  title: "Generative AI Adoption and Entry-Level Hiring: Evidence from Indian IT Services Firms",
  authors: [
    { name: "Ananth Subramaniam", corresponding: true, affiliation: { department: "Economics and Social Sciences Area", institution: "Indian Institute of Management Bangalore", city: "Bengaluru", country: "India" } },
    { name: "Pooja Iyengar", corresponding: false, affiliation: { department: "Department of Humanities and Social Sciences", institution: "Indian Institute of Technology Madras", city: "Chennai", country: "India" } },
  ],
  abstract:
    "India's IT services sector is the country's largest private employer of white-collar graduates, and its work is unusually exposed to code-generating language models. We ask whether the enterprise adoption of generative AI coding assistants has reduced demand for entry-level graduates. We assemble a quarterly panel of 214 listed and unlisted IT services firms from 2021 to mid-2025, combining campus-recruitment records, postings from two national job portals and firm disclosures of the date on which an enterprise licence for an AI coding assistant was first signed. Using staggered-adoption difference-in-differences estimators that are robust to heterogeneous effects, and instrumenting adoption timing with pre-existing cloud-partnership exposure to the main model providers, we find that adopters cut fresher offers by 11 percent within eighteen months. Postings for testing and maintenance roles fall by 19 percent, while mid-level postings rise by 2 percent. Revenue per employee grows 7 percent faster in adopting firms, and the fall in fresher hiring is about twice as large in firms with a high pre-adoption share of routine tasks. The evidence suggests that generative AI reshapes the bottom rung of the career ladder before it changes the size of the workforce.",
  keywords: ["generative AI", "entry-level hiring", "IT services", "task automation", "India"],
  jelCodes: ["J23", "J24", "O33", "L86"],
  pages: "1–30",
  volume: 31,
  issue: 1,
  year: 2026,
  received: "2024-11-04",
  accepted: "2025-09-12",
  published: "2026-02-15",
  publishedOnline: "2026-01-26",
  citations: 3,
  downloads: 1180,
  pdfSize: "1.58 MB",
  type: "Research Article",
  acknowledgments:
    "We thank seminar participants at the Indian Institute of Management Bangalore, the Indian Statistical Institute Delhi Centre and the annual conference of the Indian Society of Labour Economics, two anonymous referees and the handling editor for helpful comments. Placement officers at several engineering colleges and human-resources executives at three IT services firms generously discussed recruitment practice with us. All errors are our own.",
  dataAvailability:
    "Firm financials and disclosures are drawn from public filings and the Prowess database; job-posting data were obtained under licence from two national job portals and cannot be redistributed, but aggregated firm-quarter counts, the adoption dates compiled from public disclosures and replication code are available from the corresponding author.",
  editorialNote:
    "Firms that deployed generative AI coding assistants cut fresher hiring by 11 percent relative to matched non-adopters, while mid-career hiring was unchanged; the decline is concentrated in routine testing and support roles.",
  refs: [
    /* 1 */ "Acemoglu, D., & Restrepo, P. (2018). The race between man and machine: Implications of technology for growth, factor shares, and employment. American Economic Review, 108(6), 1488–1542.",
    /* 2 */ "Acemoglu, D., & Restrepo, P. (2020). Robots and jobs: Evidence from US labor markets. Journal of Political Economy, 128(6), 2188–2244.",
    /* 3 */ "Autor, D. H., Levy, F., & Murnane, R. J. (2003). The skill content of recent technological change: An empirical exploration. Quarterly Journal of Economics, 118(4), 1279–1333.",
    /* 4 */ "Brynjolfsson, E., Li, D., & Raymond, L. (2025). Generative AI at work. Quarterly Journal of Economics, 140(2), 889–938.",
    /* 5 */ "Noy, S., & Zhang, W. (2023). Experimental evidence on the productivity effects of generative artificial intelligence. Science, 381(6654), 187–192.",
    /* 6 */ "Eloundou, T., Manning, S., Mishkin, P., & Rock, D. (2024). GPTs are GPTs: Labor market impact potential of LLMs. Science, 384(6702), 1306–1308.",
    /* 7 */ "Felten, E., Raj, M., & Seamans, R. (2021). Occupational, industry, and geographic exposure to artificial intelligence: A novel dataset and its potential uses. Strategic Management Journal, 42(12), 2195–2217.",
    /* 8 */ "Acemoglu, D., Autor, D., Hazell, J., & Restrepo, P. (2022). Artificial intelligence and jobs: Evidence from online vacancies. Journal of Labor Economics, 40(S1), S293–S340.",
    /* 9 */ "Callaway, B., & Sant'Anna, P. H. C. (2021). Difference-in-differences with multiple time periods. Journal of Econometrics, 225(2), 200–230.",
    /* 10 */ "Sun, L., & Abraham, S. (2021). Estimating dynamic treatment effects in event studies with heterogeneous treatment effects. Journal of Econometrics, 225(2), 175–199.",
    /* 11 */ "de Chaisemartin, C., & D'Haultfœuille, X. (2020). Two-way fixed effects estimators with heterogeneous treatment effects. American Economic Review, 110(9), 2964–2996.",
    /* 12 */ "Goodman-Bacon, A. (2021). Difference-in-differences with variation in treatment timing. Journal of Econometrics, 225(2), 254–277.",
    /* 13 */ "Borusyak, K., Jaravel, X., & Spiess, J. (2024). Revisiting event-study designs: Robust and efficient estimation. Review of Economic Studies, 91(6), 3253–3285.",
    /* 14 */ "Autor, D. H., & Dorn, D. (2013). The growth of low-skill service jobs and the polarization of the US labor market. American Economic Review, 103(5), 1553–1597.",
    /* 15 */ "Goos, M., & Manning, A. (2007). Lousy and lovely jobs: The rising polarization of work in Britain. Review of Economics and Statistics, 89(1), 118–133.",
    /* 16 */ "Kahn, L. B. (2010). The long-term labor market consequences of graduating from college in a bad economy. Labour Economics, 17(2), 303–316.",
    /* 17 */ "Oreopoulos, P., von Wachter, T., & Heisz, A. (2012). The short- and long-term career effects of graduating in a recession. American Economic Journal: Applied Economics, 4(1), 1–29.",
    /* 18 */ "Bessen, J. (2019). Automation and jobs: When technology boosts employment. Economic Policy, 34(100), 589–626.",
    /* 19 */ "Bresnahan, T. F., Brynjolfsson, E., & Hitt, L. M. (2002). Information technology, workplace organization, and the demand for skilled labor: Firm-level evidence. Quarterly Journal of Economics, 117(1), 339–376.",
    /* 20 */ "Bloom, N., Garicano, L., Sadun, R., & Van Reenen, J. (2014). The distinct effects of information technology and communication technology on firm organization. Management Science, 60(12), 2859–2885.",
    /* 21 */ "Goldsmith-Pinkham, P., Sorkin, I., & Swift, H. (2020). Bartik instruments: What, when, why, and how. American Economic Review, 110(8), 2586–2624.",
    /* 22 */ "Borusyak, K., Hull, P., & Jaravel, X. (2022). Quasi-experimental shift-share research designs. Review of Economic Studies, 89(1), 181–213.",
    /* 23 */ "Autor, D. H. (2015). Why are there still so many jobs? The history and future of workplace automation. Journal of Economic Perspectives, 29(3), 3–30.",
    /* 24 */ "Gathmann, C., & Schönberg, U. (2010). How general is human capital? A task-based approach. Journal of Labor Economics, 28(1), 1–49.",
    /* 25 */ "Acemoglu, D., & Autor, D. (2011). Skills, tasks and technologies: Implications for employment and earnings. In O. Ashenfelter & D. Card (Eds.), Handbook of Labor Economics (Vol. 4B, pp. 1043–1171). Elsevier.",
    /* 26 */ "Oster, E. (2019). Unobservable selection and coefficient stability: Theory and evidence. Journal of Business & Economic Statistics, 37(2), 187–204.",
    /* 27 */ "Rambachan, A., & Roth, J. (2023). A more credible approach to parallel trends. Review of Economic Studies, 90(5), 2555–2591.",
    /* 28 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 29 */ "Acemoglu, D., & Restrepo, P. (2019). Automation and new tasks: How technology displaces and reinstates labor. Journal of Economic Perspectives, 33(2), 3–30.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Every year India's engineering colleges send several hundred thousand graduates into the labour market, and for two decades the largest single destination for those graduates has been the IT services industry. Firms such as the large listed exporters and the long tail of mid-sized and unlisted companies recruit freshers in cohorts, put them through weeks of classroom training and deploy them on client projects as junior developers, testers and support engineers. This arrangement has functioned as a ladder: routine work at the bottom is performed cheaply by large cohorts, and the most able climb to design, delivery management and client-facing roles. The arrival of code-generating language models, which can write, explain and test routine software, therefore raises an uncomfortable question about the bottom rung of the ladder.",
        "Early evidence suggests the question is not idle. In controlled settings, generative AI raises the productivity of customer-support agents by about 14 percent on average and by much more for the least experienced workers [4], and it shortens the time taken on professional writing tasks while improving their rated quality [5]. Assessments of task exposure place programming and software testing among the activities most susceptible to language models [6][7]. If an AI coding assistant lets one junior developer do the work of one and a half, a firm facing a given volume of client work has less need to hire the second. The history of automation suggests that such effects need not be one-directional, since technologies that displace tasks can also expand output and reinstate demand for labour elsewhere [23]. Whether firms actually respond in this way, how quickly, and in which roles, are empirical questions that experiments cannot settle, because hiring is a firm-level decision taken over many months in the shadow of client contracts, bench costs and training commitments.",
        "This paper studies those questions for the Indian IT services industry between 2021 and mid-2025. We ask whether firms that adopted generative AI coding assistants at enterprise scale subsequently reduced their hiring of entry-level graduates, whether the effect is concentrated in particular tasks, and whether the savings show up as higher output per employee. We assemble a quarterly panel of 214 listed and unlisted firms that links campus-recruitment records, vacancy postings from two national job portals and hand-collected dates on which firms announced or disclosed an enterprise licence for an AI coding assistant. Adoption is staggered over nine quarters, which allows us to compare adopters with firms that have not yet adopted or never adopt.",
        "Our identification strategy has two legs. The first is a staggered-adoption difference-in-differences design estimated with methods that are robust to heterogeneous treatment effects across cohorts and over time [9][10][11][13]. The second addresses the concern that firms choose to adopt when they are already planning to hire less. We instrument adoption timing with each firm's pre-existing exposure to the large cloud and model providers, measured by its partnership tier and certified-engineer headcount in 2021, before generative coding assistants were commercially available. Partnership exposure lowers the cost and lead time of enterprise licensing but, we argue and test, does not otherwise affect fresher hiring after conditioning on firm and period effects and on pre-period cloud revenue.",
        "We find that adopting firms reduce fresher offers by 11 percent within eighteen months relative to comparable non-adopters, and that fresher postings fall by about 9 percent. The decline is concentrated in the tasks that the models perform best: postings for testing and maintenance roles fall by 19 percent, those for technical support by 14 percent, and those for junior application development by 6.5 percent, while postings for data and analytics roles rise. Mid-level postings increase by 2 percent and total headcount is essentially unchanged over our window, so the adjustment operates through composition and timing rather than layoffs. Revenue per employee grows 7 percent faster in adopters, and the decline in fresher hiring is about twice as large in firms with a high pre-adoption share of routine tasks. Instrumental-variable estimates are larger than the difference-in-differences estimates, which suggests that, if anything, selection into early adoption works against our findings.",
        "We contribute to three literatures. First, we add firm-level evidence on the employment consequences of generative AI to a task-based literature that has so far focused on earlier waves of automation [1][2][3][29] and on vacancy-level exposure to AI [8]. Second, we connect that literature to the economics of entry-level work and early-career scarring [16][17], showing that the first channel through which a general-purpose technology can reduce employment is the recruitment of new entrants rather than the dismissal of incumbents. Third, we bring evidence from a large emerging economy, where the sector is an export industry whose graduates are a significant share of urban middle-class employment. The paper proceeds as follows. Section 2 describes the industry and the diffusion of AI coding tools; Section 3 reviews related work; Section 4 sets out a conceptual framework; Sections 5 and 6 describe the data and empirical strategy; Sections 7 to 9 report results, mechanisms and robustness; Sections 10 and 11 discuss implications and conclude.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "India's IT services industry exports software development, testing, maintenance and business-process services, primarily to clients in North America and Europe. It employs on the order of five million people directly and accounts for a significant share of services exports and of urban graduate employment. Its business model rests on labour arbitrage and scale: clients outsource large, often long-running programmes of application development, quality assurance and maintenance, and vendors staff them with pyramids of engineers in which junior staff greatly outnumber seniors. Contracts are frequently priced on time-and-materials or fixed-price bases with annual productivity commitments, so that a vendor that can deliver the same scope with fewer hours retains much of the saving.",
        "Recruitment of freshers follows a distinctive annual cycle. Large firms visit engineering campuses between August and March, make conditional offers to cohorts that will graduate months later, and onboard them in batches after graduation. Offers are therefore a forward-looking decision made well before the graduates start work, and the number of offers is a sensitive measure of firms' beliefs about junior labour demand. Mid-sized and unlisted firms rely more on off-campus drives and on postings through national job portals. Both channels are observable to us, and together they cover the bulk of entry-level recruitment in the industry.",
        "Generative AI coding assistants entered this setting quickly. General availability of the first widely used assistant came in mid-2022, and business and enterprise tiers with administrative controls, data-residency commitments and indemnities followed in 2023. Most large vendors signed enterprise licences between the second quarter of 2023 and the end of 2024, typically announcing them alongside client-facing partnerships, internal training programmes and sometimes targets for the share of code written with assistance. Smaller firms followed later, often after clients began to ask for AI-assisted delivery or productivity discounts. By mid-2025 a clear majority of the firms in our sample had signed an enterprise licence, but a substantial minority had not, which provides the comparison group.",
        "Three features of the setting matter for interpretation. First, the licensing decision is a discrete, dated, firm-wide event that we can observe, unlike the gradual and unmeasured use of tools by individual developers. Second, enterprise licensing is a managerial commitment to adoption at scale, so our estimates capture the effect of organisational adoption rather than of individual experimentation. Third, because most of the work is exported and priced in foreign currency, demand shocks in the client countries affect all vendors, which helps the comparison between adopters and non-adopters but also means that we must control carefully for firms' exposure to client sectors and geographies.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "The task-based framework of Autor, Levy and Murnane {3} and its extensions [25] provides the conceptual foundation for studying how technologies change labour demand. Technologies substitute for labour in the tasks they can perform and complement it in others, and a technology that automates tasks may also create new ones in which humans retain an advantage [1][29]. Applications of this framework to industrial robots find negative effects on employment and wages in exposed local labour markets {2}, while evidence on information technology shows that its returns depend on complementary changes in organisation and in the demand for skills [19][20]. Evidence on the polarisation of employment shows that routine-intensive occupations in the middle of the skill distribution have declined as computers have taken over codifiable tasks [14][15].",
        "A smaller but growing literature studies artificial intelligence specifically. Acemoglu and co-authors {8} use vacancy data from the United States to show that establishments with greater AI exposure reduce hiring in non-AI positions, although they find no detectable effect at the occupation or industry level. Felten, Raj and Seamans {7} construct measures of occupational exposure to AI capabilities, and Eloundou and co-authors {6} estimate that a large share of US workers could see at least a tenth of their tasks affected by language models. Experimental studies of generative AI report productivity gains that are largest for less experienced workers [4][5]. Our paper differs by observing firms' hiring decisions after a dated, firm-wide adoption event, and by studying a sector in which the exposed tasks, the writing and testing of code, form the core of the product.",
        "Entry-level hiring has a particular place in the labour economics of technological change because new entrants bear adjustment costs disproportionately. Graduating into a weak labour market lowers early-career earnings and can leave lasting scars [16][17]. If a technology reduces the volume of junior work, entrants may lose the on-the-job learning through which skills accumulate, a concern that is especially relevant when tasks are learned in sequence and firm-specific investments are modest [24]. Bessen {18} emphasises that automation can raise employment when demand is elastic, which is a reason to expect that the effect on hiring depends on whether productivity gains are passed through to prices and volumes.",
        "Finally, our empirical design draws on recent advances in difference-in-differences with staggered treatment timing. Two-way fixed-effects estimators can be biased when effects vary across cohorts or over time because already-treated units serve as controls [11][12]. We therefore estimate group-time effects and aggregate them [9], cross-check with interaction-weighted and imputation estimators [10][13], and assess sensitivity to violations of parallel trends with the bounds proposed by Rambachan and Roth {27}. Our instrument is a shift-share-type exposure measure and is evaluated following the guidance for such designs in Goldsmith-Pinkham, Sorkin and Swift {21} and Borusyak, Hull and Jaravel {22}.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a firm that delivers a given volume of client work using three tasks: routine coding and testing, non-routine design and integration, and coordination with clients. Junior and senior workers differ in their comparative advantage: juniors are cheap and relatively productive at routine tasks, while seniors specialise in design and coordination. A generative AI coding assistant raises the productivity of labour in routine coding and testing tasks. The effect on the demand for juniors has two components. The substitution effect reduces the junior hours required per unit of output, so that fewer juniors are needed to produce the same volume of work. The scale effect operates through the price and volume of output: if productivity gains lower prices or win additional contracts, the firm needs more work in total, and demand for all labour, including juniors, rises [18].",
        "In a services industry in which clients negotiate productivity commitments but volumes are constrained by client budgets and delivery capacity in the short run, the substitution effect is likely to dominate during the first years of adoption. This yields our first hypothesis. H1: adoption lowers the hiring of freshers relative to non-adopting firms, with the decline emerging gradually after the licensing date as recruitment cycles adjust. Because campus offers are made months ahead of onboarding, offers should respond within two to six quarters.",
        "The second hypothesis concerns composition. Complementarity between the assistant and senior judgement implies that the demand for experienced staff who review, design and integrate AI-assisted output should be unchanged or higher. H2: the decline is concentrated in routine roles such as testing, maintenance and technical support, with no decline, or an increase, in mid-level and in data and AI-related roles. The third hypothesis concerns heterogeneity. H3: the decline is larger in firms whose workforce was more heavily concentrated in routine tasks before adoption, because these firms have more tasks to substitute. Finally, if substitution is the mechanism, firms should produce at least as much output with fewer new entrants, which implies H4: revenue per employee rises in adopters relative to non-adopters.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our analysis combines four sources that we match at the firm-quarter level. Table 1 summarises them.",
      ],
      subsections: [
        {
          id: "data-sources",
          heading: "5.1 Data sources and sample",
          paragraphs: [
            "The sample frame comprises firms classified as IT services, software development or business-process outsourcing providers in the Prowess database and in the membership lists of the industry association, with at least 500 employees in 2021 and a continuous record of postings or campus offers over the sample period. We exclude product companies, captive centres of foreign multinationals and firms that were acquired or delisted during the period. This yields 214 firms, of which 112 are listed and 102 are unlisted, observed for 18 quarters from the first quarter of 2021 to the second quarter of 2025, or 3,852 firm-quarters.",
            "Campus-recruitment records come from the placement offices of 312 engineering and science colleges, which report the number of offers made by each recruiting firm in each placement season; we assign offers to the quarter in which they were made. Job postings are drawn from two national portals and cover about 1.9 million postings by the sample firms, which we classify by seniority (fresher, mid-level and senior) from stated experience requirements and by role family from the job title and description, using a supervised text classifier validated against 4,000 hand-coded postings. Adoption dates are hand-collected from press releases, annual reports, earnings-call transcripts and client announcements, and cross-checked with the vendors' own customer announcements where available.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Data sources and coverage",
              columns: ["Source", "Unit of observation", "Coverage", "Use in the paper"],
              rows: [
                ["Campus placement records", "Firm × college × season", "312 colleges; 2021–2025", "Fresher offers"],
                ["National job portals (two)", "Posting", "About 1.9 million postings", "Postings by seniority and role"],
                ["Firm disclosures and press", "Firm", "214 firms", "Enterprise-licence date"],
                ["Prowess and annual reports", "Firm × year", "214 firms; 2020–2025", "Revenue, headcount, wage bill"],
                ["Vendor partnership listings", "Firm", "214 firms; 2021 snapshot", "Cloud-partnership exposure"],
                ["Occupational task content", "Role family", "Six role families", "Routine-task share"],
              ],
              note: "Note: Postings are classified by seniority from stated experience requirements (fresher: up to one year; mid-level: two to eight years; senior: more than eight years). Fresher offers are assigned to the quarter in which the offer was made.",
            },
          ],
        },
        {
          id: "data-outcomes",
          heading: "5.2 Outcome and treatment variables",
          paragraphs: [
            "Our primary outcome is the inverse hyperbolic sine of the number of fresher offers made by firm i in quarter t, which handles zeros and is interpreted as a percentage change for large counts. Secondary outcomes are the corresponding transformations of fresher, mid-level and senior postings, postings by role family, total headcount (from quarterly disclosures for listed firms and interpolated annual reports for unlisted ones) and revenue per employee. The treatment is an indicator equal to one from the quarter in which the firm first signed an enterprise licence for an AI coding assistant. Adoption is absorbing: no firm in the sample cancels its licence.",
            "Of the 214 firms, 126 had adopted by the second quarter of 2025. The first adopters signed in the second quarter of 2023; 38 firms adopted in the remaining three quarters of 2023, 61 in 2024 and 27 in the first half of 2025, and 88 firms never adopted within the window. We measure each firm's routine-task share as the fraction of its 2021 postings in role families whose task descriptions are dominated by codifiable, repetitive activities, such as test-case execution, regression testing, ticket resolution and routine maintenance; the measure is computed before generative coding tools were available. Cloud-partnership exposure is an index, standardised to the unit interval, that combines the firm's partnership tier with the three leading model and cloud providers and the number of its engineers holding provider certifications in 2021.",
          ],
        },
        {
          id: "data-descriptives",
          heading: "5.3 Descriptive statistics",
          paragraphs: [
            "Table 2 compares adopters and never-adopters in the pre-adoption years 2021 and 2022. Adopters are larger, more likely to be listed and make more fresher offers, and they have higher cloud-partnership exposure, which is consistent with partnership lowering the cost of licensing. The routine-task share and the share of freshers in total postings are similar across the two groups, and so is the growth in fresher offers between 2021 and 2022. These differences in levels are absorbed by firm fixed effects in our specifications, but they motivate our attention to differential trends, to controls interacted with time, and to the instrumental-variable design.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Pre-adoption characteristics of adopting and non-adopting firms (2021–2022)",
              columns: ["Variable", "Adopters (n = 126)", "Never-adopters (n = 88)", "Normalised difference"],
              rows: [
                ["Employees (mean)", "6,820", "3,150", "0.41"],
                ["Annual fresher offers (mean)", "1,310", "560", "0.37"],
                ["Fresher share of postings (%)", "41.2", "38.4", "0.12"],
                ["Routine-task share of postings (%)", "38.6", "36.9", "0.09"],
                ["Revenue per employee (USD thousand)", "52.4", "47.9", "0.16"],
                ["Growth in fresher offers, 2021–22 (%)", "14.8", "13.9", "0.03"],
                ["Offshore delivery share of revenue (%)", "78", "71", "0.21"],
                ["Listed (share of firms)", "0.58", "0.41", "0.35"],
                ["Cloud-partnership exposure index", "0.46", "0.31", "0.58"],
              ],
              note: "Note: Means over 2021–2022. Normalised difference is the difference in means divided by the square root of the sum of the two sample variances; values above 0.25 indicate meaningful imbalance. Firms that adopt in 2025 are classified as adopters.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "We estimate the effect of adoption on firm i's outcome in quarter t using staggered difference-in-differences methods, supplemented with an instrumental-variable design for adoption timing.",
      ],
      subsections: [
        {
          id: "strategy-did",
          heading: "6.1 Staggered difference-in-differences",
          paragraphs: [
            "Let Y_it be an outcome and g_i the quarter in which firm i first adopts, with g_i equal to infinity for never-adopters. Our baseline estimator follows Callaway and Sant'Anna {9}: for each adoption cohort g and calendar quarter t we estimate the average treatment effect ATT(g, t) by comparing the change in outcomes from the last pre-adoption quarter for firms adopting in g with the change for firms not yet treated at t, with the doubly robust estimator conditioning on log pre-period employment, listed status and routine-task share. We aggregate the group-time effects into an overall average effect and into event-study coefficients indexed by quarters relative to adoption.",
            "We use this approach rather than the conventional two-way fixed-effects regression because the latter can place negative weights on some cohort comparisons, and may be badly biased when treatment effects vary over time, as they plausibly do here given the gradual response of recruitment cycles [11][12]. We report two-way fixed-effects estimates for comparison and show in the robustness section that interaction-weighted [10], imputation [13] and alternative estimators give similar results. Standard errors are clustered by firm [28].",
          ],
        },
        {
          id: "strategy-iv",
          heading: "6.2 Instrumenting adoption timing",
          paragraphs: [
            "The difference-in-differences design identifies the effect of adoption if, absent adoption, adopters and not-yet-adopters would have followed parallel trends in hiring. This could fail if firms adopt in anticipation of slower hiring, for example because a client is cutting volumes, or if adopters are those with stronger management and more elastic hiring plans. To address such selection we exploit the fact that the cost and lead time of enterprise licensing depend on a firm's existing relationships with the large cloud and model providers: partners can obtain licences through existing marketplace agreements, have engineers who are already certified in the vendors' platforms and receive early access to enterprise tiers.",
            "We construct an instrument as the interaction of the 2021 partnership-exposure index with an indicator for periods after the first quarter of 2023, when enterprise tiers became available. The first stage regresses the adoption indicator on this instrument, firm and quarter fixed effects and controls for time-varying firm characteristics. The exclusion restriction requires that, conditional on these controls, partnership exposure affects fresher hiring after 2023 only through adoption of AI coding assistants. The principal threat is that partnership exposure also raises the demand for cloud-migration work, which would affect hiring directly. We therefore control throughout for the pre-period share of revenue from cloud services interacted with the post-2023 indicator, and we examine pre-trends in the reduced form.",
          ],
        },
        {
          id: "strategy-threats",
          heading: "6.3 Threats to validity",
          paragraphs: [
            "We consider three main threats. First, anticipatory behaviour: if firms reduced fresher offers before signing licences, event-study coefficients before adoption would be negative. Second, correlated shocks: client-sector demand, rupee movements and the global technology hiring slowdown in 2023 affected all firms but may have affected adopters differently. We address this by controlling for firm-specific exposure to client sectors (banking, retail, telecommunications and others) interacted with quarter fixed effects. Third, measurement: the licence date measures a managerial commitment, not the intensity of use, so our estimates are intention-to-treat effects of adoption at scale. In Section 9 we also bound the consequences of violations of parallel trends following Rambachan and Roth {27}, and compare our estimates with the sensitivity of coefficients to observables, following Oster {26}.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We present results for the main hiring outcomes, for hiring by role family and by firm routine intensity, and for the instrumental-variable estimates and productivity.",
      ],
      subsections: [
        {
          id: "results-main",
          heading: "7.1 Adoption and hiring",
          paragraphs: [
            "Table 3 reports the average effect of adoption on hiring outcomes. In column (1), adoption reduces the inverse hyperbolic sine of fresher offers by 0.117, which corresponds to an 11 percent decline relative to not-yet-treated firms. The effect on fresher postings in column (2) is smaller, 0.098 or about 9 percent, and is estimated less precisely; the discrepancy reflects the fact that campus offers are the main channel for large firms, which adjust earlier and more strongly, whereas portal postings are used more by mid-sized firms. In column (3), mid-level postings rise by 2.0 percent, a small and statistically insignificant increase. Senior postings (column 4) and total headcount (column 5) are statistically unchanged, indicating that the adjustment over our window occurs through the composition of hiring rather than through reductions in the existing workforce.",
            "The two-way fixed-effects estimates in the lower panel have the same signs but are smaller in magnitude: 0.083 for fresher offers, about 30 percent smaller than the group-time estimate. This is the pattern we would expect if the effect grows with time since adoption and early adopters serve as implicit controls for later ones [11][12]. Figure 1 shows the event-study coefficients for fresher offers. Before adoption the coefficients are small and statistically indistinguishable from zero, with no discernible trend; none of the six pre-adoption quarters differs significantly from the omitted quarter. After adoption the effect builds gradually, from 2 percent in the quarter of adoption to 6 percent after two quarters, 9 percent after four quarters and 11 percent after six quarters, the eighteen-month horizon at which we report headline effects. The gradual pattern is consistent with forward-looking campus recruitment: offers made in a season reflect expected needs one year ahead, so firms adjust the next cycle after adopting.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effects of generative AI adoption on hiring",
              columns: ["", "(1) Fresher offers", "(2) Fresher postings", "(3) Mid-level postings", "(4) Senior postings", "(5) Total headcount"],
              rows: [
                ["Panel A: Callaway–Sant'Anna ATT", "", "", "", "", ""],
                ["Post-adoption", "−0.117*** (0.034)", "−0.098** (0.041)", "0.020 (0.021)", "0.011 (0.024)", "−0.014 (0.011)"],
                ["Implied percent change", "−11.0", "−9.3", "2.0", "1.1", "−1.4"],
                ["Panel B: Two-way fixed effects", "", "", "", "", ""],
                ["Post-adoption", "−0.083*** (0.027)", "−0.071** (0.032)", "0.016 (0.018)", "0.009 (0.021)", "−0.010 (0.009)"],
                ["Pre-adoption mean of outcome (levels)", "327", "412", "286", "98", "5,310"],
                ["Firms", "214", "214", "214", "214", "214"],
                ["Observations", "3,852", "3,852", "3,852", "3,852", "3,852"],
              ],
              note: "Note: Outcomes are inverse hyperbolic sines of counts (log for headcount). Panel A reports overall ATT from the Callaway–Sant'Anna estimator with not-yet-treated and never-treated comparison firms; panel B reports two-way fixed-effects regressions with firm and quarter effects. Standard errors clustered by firm in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01. Implied percent change is exp(β) − 1.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Event-study estimates of the effect of adoption on fresher offers",
              kind: "line",
              xLabels: ["−6", "−5", "−4", "−3", "−2", "−1", "0", "1", "2", "3", "4", "5", "6"],
              yLabel: "Effect on log fresher offers",
              series: [
                {
                  name: "Estimate",
                  values: [-0.01, 0.014, -0.008, 0.005, -0.012, 0, -0.021, -0.038, -0.059, -0.081, -0.098, -0.109, -0.117],
                  lower: [-0.065, -0.038, -0.058, -0.043, -0.058, 0, -0.063, -0.086, -0.113, -0.141, -0.162, -0.175, -0.184],
                  upper: [0.045, 0.066, 0.042, 0.053, 0.034, 0, 0.021, 0.01, -0.005, -0.021, -0.034, -0.043, -0.05],
                },
              ],
              marker: 6,
              note: "Note: Callaway–Sant'Anna event-study coefficients for the inverse hyperbolic sine of fresher offers, by quarters relative to the enterprise-licence date, with 95 percent confidence intervals clustered by firm; quarter −1 is the reference period. The dashed line marks the first quarter of adoption.",
            },
          ],
        },
        {
          id: "results-roles",
          heading: "7.2 Which roles and which firms",
          paragraphs: [
            "Table 4 decomposes the postings effects by role family (panel A) and reports the effect on fresher offers by tercile of the pre-adoption routine-task share (panel B). The pattern in panel A is sharply consistent with H2. Postings for testing and maintenance roles, which represent 21 percent of fresher postings before adoption, fall by 19 percent, and postings for technical support and operations, 17 percent of the total, fall by 14 percent. Junior application development, the largest category at 38 percent, falls by 6.5 percent. By contrast, data and analytics postings increase by 4.2 percent, and consulting and pre-sales roles, which depend on client interaction, are essentially unchanged. A weighted average of the role-level effects, using pre-adoption shares, is close to the overall fresher postings effect in Table 3.",
            "Panel B shows that the effect on fresher offers rises with routine intensity, as H3 predicts. Firms in the lowest tercile of routine-task share reduce offers by 7.9 percent, those in the middle tercile by 10.7 percent, and those in the top tercile by 15.5 percent, nearly twice the effect in the bottom tercile. The difference between the top and bottom terciles is statistically significant at the five percent level (p = 0.041). We view this gradient as the most direct evidence that the decline in hiring reflects the substitution of AI assistance for routine tasks rather than a generic reaction to adoption, such as the reallocation of budgets or a hiring freeze accompanying a reorganisation.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Effects by role family and by firm routine-task intensity",
              columns: ["Group", "Pre-adoption share (%)", "Effect (log points)", "Std. error", "Implied percent change"],
              rows: [
                ["Panel A: Fresher postings by role family", "", "", "", ""],
                ["Testing and maintenance", "21", "−0.211***", "0.049", "−19.0"],
                ["Technical support and operations", "17", "−0.152***", "0.052", "−14.1"],
                ["Junior application development", "38", "−0.067*", "0.038", "−6.5"],
                ["Data and analytics", "9", "0.041", "0.058", "4.2"],
                ["Consulting and pre-sales", "7", "−0.012", "0.061", "−1.2"],
                ["Other", "8", "−0.030", "0.064", "−3.0"],
                ["Panel B: Fresher offers by routine-task tercile", "", "", "", ""],
                ["Lowest tercile of routine share", "", "−0.082*", "0.045", "−7.9"],
                ["Middle tercile", "", "−0.113**", "0.048", "−10.7"],
                ["Highest tercile of routine share", "", "−0.169***", "0.055", "−15.5"],
              ],
              note: "Note: Each row is a separate Callaway–Sant'Anna ATT for the inverse hyperbolic sine of postings (panel A) or of offers (panel B). Terciles are of the 2021 routine-task share of postings. Standard errors clustered by firm. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "results-iv",
          heading: "7.3 Instrumental-variable estimates and productivity",
          paragraphs: [
            "Table 5 reports the instrumental-variable analysis. The first stage in column (1) shows that a one-unit increase in partnership exposure raises the probability of adoption after the third quarter of 2023 by 0.382, with a Kleibergen–Paap F-statistic of 29.0, well above conventional thresholds for weak instruments. The reduced form in column (2) shows that firms with higher exposure cut fresher offers by more after 2023: a coefficient of −0.054. The implied two-stage least-squares estimate in column (3), the ratio of the reduced form to the first stage, is −0.141, larger in magnitude than the difference-in-differences estimate of −0.117 but statistically indistinguishable from it. The instrumented effect is therefore not weaker than the baseline, which is hard to reconcile with a story in which firms that adopt are those that would have cut hiring anyway.",
            "Columns (4) and (5) turn to H4. Revenue per employee rises by 6.8 log points, or 7 percent, in adopting firms relative to non-adopters in the difference-in-differences estimate (column 5), and by 10.4 log points in the instrumented specification (column 4), albeit with a wider confidence interval. This is consistent with a composition and productivity effect: firms are producing at least as much revenue with a smaller inflow of new entrants and a workforce tilted toward experienced staff. Because revenue also reflects pricing, and clients increasingly negotiate productivity discounts, we regard the 7 percent as a net outcome after any pass-through, and as a lower bound on the technology's gross effect on productivity.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Instrumental-variable estimates and revenue per employee",
              columns: ["", "(1) First stage: adoption", "(2) Reduced form: fresher offers", "(3) 2SLS: fresher offers", "(4) 2SLS: revenue per employee", "(5) DiD: revenue per employee"],
              rows: [
                ["Cloud exposure × post-2023Q1", "0.382*** (0.071)", "−0.054*** (0.019)", "", "", ""],
                ["Adoption", "", "", "−0.141** (0.058)", "0.104** (0.049)", "0.068*** (0.022)"],
                ["Implied percent change", "", "", "−13.2", "11.0", "7.0"],
                ["Kleibergen–Paap F-statistic", "29.0", "", "29.0", "29.0", ""],
                ["Controls: cloud revenue share × post", "Yes", "Yes", "Yes", "Yes", "Yes"],
                ["Firm and quarter fixed effects", "Yes", "Yes", "Yes", "Yes", "Yes"],
                ["Observations", "3,852", "3,852", "3,852", "3,852", "3,852"],
              ],
              note: "Note: Instrument is the 2021 cloud-partnership exposure index interacted with an indicator for periods after the first quarter of 2023. Controls include log employment, listed status and client-sector exposure interacted with quarter effects. Column (5) reports the Callaway–Sant'Anna ATT. Standard errors clustered by firm in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "The evidence in Section 7 points to substitution of AI assistance for routine junior tasks, with output sustained by experienced staff. Figure 2 summarises the role-level estimates alongside the effect on mid-level postings. The first three bars show that the decline is steepest where tasks are most codifiable, and the data and analytics bar shows that firms continue to hire freshers into roles where complementarity with the technology is stronger.",
        "Several additional patterns support this interpretation. First, the effect is larger for firms that sign enterprise licences with usage commitments, those that announced targets for the share of code written with assistance, and for firms whose clients require AI-assisted delivery; the effect on fresher offers among firms with such disclosed targets is 14 percent against 7 percent among others. Second, the effect is considerably larger for offers made to graduates of lower-ranked colleges: offers to graduates of institutions outside the top 100 fall by 15 percent against 7 percent for the top tier, which suggests that firms ration scarce junior positions toward candidates with stronger signals. Third, fresher starting salaries offered in postings are unchanged, so the adjustment is along the quantity margin rather than the price margin, consistent with the standardised salary bands used by large employers.",
        "These results are suggestive rather than definitive on the long-run consequences. The rise in mid-level postings is small, and we cannot say whether it reflects firms' replacement of juniors with experienced workers, or the same level of demand for experienced staff in a growing industry. Nor can we observe whether the freshers who are not hired find employment elsewhere in the economy. The reduction in the number of entry-level jobs matters for the career ladder: if the junior stage is where skills are learned, a smaller number of entrants may reduce the future supply of experienced engineers, a point that firms themselves raised in interviews with us.",
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Percent change in postings after adoption, by role family",
          kind: "bar",
          xLabels: ["Testing and maintenance", "Technical support", "Junior development", "Data and analytics", "Consulting and pre-sales", "Mid-level (all roles)"],
          yLabel: "Percent change in postings",
          series: [{ name: "Effect of adoption", values: [-19, -14.1, -6.5, 4.2, -1.2, 2] }],
          note: "Note: Implied percent changes, exp(β) − 1, from Callaway–Sant'Anna estimates for fresher postings by role family and for mid-level postings overall (Tables 3 and 4).",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 shows that our headline estimates are not sensitive to the choice of estimator or to a range of alternative specifications. The interaction-weighted estimator of Sun and Abraham {10}, the imputation estimator of Borusyak, Jaravel and Spiess {13} and the estimator of de Chaisemartin and D'Haultfœuille {11} produce estimates of fresher offers between −0.112 and −0.126, and mid-level estimates between 0.015 and 0.023. Using only not-yet-treated firms as controls gives −0.108. Restricting to listed firms, for which headcount data are of higher quality, gives a larger effect of −0.131. Excluding the 2025 adopters, for which we observe fewer post-adoption quarters, leaves the estimate at −0.121.",
        "We also address the main identification concerns. A placebo test that assigns adoption eight quarters earlier than the actual date yields an effect of −0.006, indistinguishable from zero. Controlling for firms' adoption of robotic process automation and other non-generative tools, which might proxy for general digital maturity, changes the estimate only to −0.113, and allowing firm-specific linear trends reduces it to −0.095, which remains statistically significant at the five percent level. Sensitivity analysis following Rambachan and Roth {27} shows that the effect at eighteen months remains negative if post-adoption deviations from parallel trends are no larger than half the largest pre-adoption deviation, and the coefficient-stability bound of Oster {26}, which uses a value of 1.3 for the ratio of R-squared, indicates that unobservables would have to be about 2.2 times as important as observables to eliminate the effect.",
        "Finally, we consider spillovers. Non-adopting firms may benefit if displaced graduates become available at lower cost, which would bias the difference-in-differences estimate away from zero if the control group increased hiring. In practice, we find no evidence that never-adopters' hiring rises in quarters when many peers adopt: the coefficient on the share of adopting peers in their city is 0.008 (standard error 0.019). Excluding firms in the cities with the largest adopter concentrations leaves the estimate unchanged. The estimates are also robust to dropping any single adoption cohort, to winsorising counts at the 1st and 99th percentiles and to defining adoption by the announcement quarter rather than the signature quarter.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the effects on fresher offers and mid-level postings",
          columns: ["Specification", "Fresher offers", "Mid-level postings", "Observations"],
          rows: [
            ["Baseline: Callaway–Sant'Anna", "−0.117*** (0.034)", "0.020 (0.021)", "3,852"],
            ["Sun–Abraham interaction-weighted", "−0.121*** (0.037)", "0.018 (0.022)", "3,852"],
            ["Borusyak–Jaravel–Spiess imputation", "−0.112*** (0.032)", "0.023 (0.020)", "3,852"],
            ["de Chaisemartin–D'Haultfœuille", "−0.126*** (0.041)", "0.015 (0.025)", "3,852"],
            ["Not-yet-treated controls only", "−0.108*** (0.036)", "0.017 (0.023)", "3,852"],
            ["Listed firms only", "−0.131*** (0.047)", "0.026 (0.024)", "2,016"],
            ["Excluding 2025 adopters", "−0.121*** (0.036)", "0.021 (0.022)", "3,366"],
            ["Controlling for non-generative automation", "−0.113*** (0.035)", "0.019 (0.021)", "3,852"],
            ["Firm-specific linear trends", "−0.095** (0.040)", "0.014 (0.026)", "3,852"],
            ["Placebo: adoption eight quarters earlier", "−0.006 (0.031)", "0.004 (0.020)", "3,852"],
          ],
          note: "Note: Each row reports the overall ATT on the inverse hyperbolic sine of the outcome from a separate specification. Standard errors clustered by firm in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our evidence indicates that generative AI coding assistants have begun to change how Indian IT services firms staff their pyramids. Firms that adopted at enterprise scale made fewer offers to freshers, concentrated the reduction in testing, maintenance and support, and earned more revenue per employee. We find no evidence of a reduction in total employment through mid-2025, which is consistent with strong underlying demand in the sector and with firms preferring to slow intake rather than to dismiss incumbents. The adjustment documented here should therefore be read as an early signal about the margin along which the technology operates, not as an estimate of its steady-state employment effect, which could be smaller if demand expands [18] or larger if clients later demand price reductions that exceed productivity gains.",
        "Three implications follow for policy and practice. First, the burden of adjustment falls on new entrants. Young graduates compete for a smaller number of entry-level positions, and the evidence on graduating into weak labour markets suggests that effects on early-career outcomes can persist [16][17]. Policymakers who monitor graduate unemployment should pay attention to the recruitment pipeline in a few large sectors, because the effect on offers precedes any effect on measured employment by several quarters. Second, training systems should shift emphasis from routine coding and testing toward the skills that complement the technology: system design, review of machine-generated code, data engineering and client communication. Our finding that data and analytics postings rise suggests that these roles are available, although in smaller numbers than the roles being displaced.",
        "Third, there is a case for cooperation between industry and colleges on the structure of the first job. If junior routine work has been the main apprenticeship in the industry, then its automation removes the learning opportunities that produced the experienced engineers on whom the mid-level estimates depend. Structured apprenticeships, paid internships tied to client work and training that uses AI tools to accelerate learning are possible responses, and firms in our interviews described pilot versions of each. For colleges, a clear implication is that the mapping from degree to first job is becoming less certain, and the market signal is stronger for graduates of institutions with strong placement records.",
        "Our analysis has limitations. Enterprise licensing is a coarse proxy for the intensity of use, and our estimates are intention-to-treat effects. Our window ends in mid-2025, so we cannot observe long-run adjustment, including any later reductions in total employment, and results may differ for the largest firms, where a few observations carry much of the weight in the offers series. The classification of postings by seniority and role relies on text and may contain errors, although we validate it against hand-coded samples. Finally, our design identifies the relative effect of adoption among firms in the same sector, and cannot capture the general-equilibrium consequences of AI adoption for graduate employment across the economy, including any hiring by non-IT firms that benefit from the availability of graduates.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Using a panel of 214 Indian IT services firms and the staggered timing of enterprise adoption of generative AI coding assistants, we find that adopters reduce fresher offers by 11 percent within eighteen months, with a 19 percent fall in testing and maintenance postings, a 2 percent increase in mid-level postings and a 7 percent faster growth in revenue per employee. The hiring decline is about twice as large in firms with the highest routine-task shares, and instrumental-variable estimates based on pre-existing cloud-partnership exposure are at least as large as the baseline.",
        "These findings suggest that the first-order labour-market effect of generative AI in a task-intensive service sector operates at the entry point of the career ladder. Future research should follow cohorts of graduates across firms and sectors to learn where displaced entrants go, extend the window to observe whether total employment adjusts, and measure the intensity of tool use rather than the date of licensing. As the technology diffuses beyond software to other white-collar services, the question of how firms train their next generation of experienced workers will become a central problem for labour markets and for education policy.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Variable Construction",
      paragraphs: [
        "Adoption date. The adoption date is the earliest quarter in which a firm publicly disclosed, or a vendor announced, an enterprise-wide licence or contract for an AI coding assistant covering a substantial share of the firm's delivery workforce. Pilot programmes, hackathons and licences for fewer than a stated 500 seats are not counted. Where sources disagree we use the earliest credible date and report robustness to using the announcement date instead.",
        "Fresher offers and postings. Offers are summed over placement seasons and assigned to the quarter in which the offer was made. A posting is classified as fresher if it requires up to one year of experience, mid-level if two to eight years and senior if more than eight; postings without experience requirements are assigned using title keywords. Role families are assigned by a supervised classifier, with accuracy of 91 percent on a hand-coded validation sample of 4,000 postings. Duplicate postings across the two portals are removed using firm, title, location and date.",
        "Routine-task share and exposure. The routine-task share is the fraction of a firm's 2021 postings in role families rated as predominantly routine on the basis of the task descriptions in the postings (test-case execution, regression testing, ticket resolution, routine maintenance and monitoring). The cloud-partnership exposure index averages the standardised partnership tier with the three leading providers and the standardised number of provider-certified engineers per thousand employees in 2021, rescaled to the unit interval.",
      ],
    },
  ],
};
