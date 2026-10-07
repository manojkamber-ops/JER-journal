// Vol. 28, No. 3 (July 2023) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2023-v28-i3-03",
  acknowledgments:
    "We thank seminar participants at the University of Zurich, Seoul National University and the Korea Development Institute, two anonymous referees and the handling Associate Editor for helpful comments. We are grateful to the Ministry of SMEs and Startups and the Korea Technology and Information Promotion Agency for SMEs for facilitating access to programme evaluation records. The views expressed are those of the authors and not necessarily those of the Korea Development Institute. All errors are our own.",
  dataAvailability:
    "Programme application and evaluation records were provided under a confidentiality agreement and cannot be shared by the authors; researchers may apply for access to the Ministry of SMEs and Startups. Patent data are publicly available from the Korean Intellectual Property Office. Firm financial data are commercially available from Korea Enterprise Data. Code to replicate all results is available from the corresponding author.",
  editorialNote:
    "Andreas Müller, Da-Hye Song and Hyun-Ju Yang exploit the funding cut-off of the national SME technology-innovation programme in a regression-discontinuity design and find that public R&D subsidies raise patent applications by 19 percent and TFP by 3.2 percent over four years, with an additionality ratio of 1.4 and the largest gains for technology-intensive firms and firms with prior R&D experience.",
  refs: [
    /* 1 */ "Nelson, R. R. (1959). The simple economics of basic scientific research. Journal of Political Economy, 67(3), 297–306.",
    /* 2 */ "Arrow, K. J. (1962). Economic welfare and the allocation of resources for invention. In National Bureau of Economic Research (Ed.), The rate and direction of inventive activity: Economic and social factors (pp. 609–626). Princeton University Press.",
    /* 3 */ "Hall, B. H., & Lerner, J. (2010). The financing of R&D and innovation. In B. H. Hall & N. Rosenberg (Eds.), Handbook of the economics of innovation (Vol. 1, pp. 609–639). Elsevier.",
    /* 4 */ "David, P. A., Hall, B. H., & Toole, A. A. (2000). Is public R&D a complement or substitute for private R&D? A review of the econometric evidence. Research Policy, 29(4–5), 497–529.",
    /* 5 */ "Zúñiga-Vicente, J. Á., Alonso-Borrego, C., Forcadell, F. J., & Galán, J. I. (2014). Assessing the effect of public subsidies on firm R&D investment: A survey. Journal of Economic Surveys, 28(1), 36–67.",
    /* 6 */ "Wallsten, S. J. (2000). The effects of government-industry R&D programs on private R&D: The case of the Small Business Innovation Research program. RAND Journal of Economics, 31(1), 82–100.",
    /* 7 */ "Lerner, J. (1999). The government as venture capitalist: The long-run impact of the SBIR program. Journal of Business, 72(3), 285–318.",
    /* 8 */ "Lach, S. (2002). Do R&D subsidies stimulate or displace private R&D? Evidence from Israel. Journal of Industrial Economics, 50(4), 369–390.",
    /* 9 */ "González, X., Jaumandreu, J., & Pazó, C. (2005). Barriers to innovation and subsidy effectiveness. RAND Journal of Economics, 36(4), 930–950.",
    /* 10 */ "Czarnitzki, D., & Lopes-Bento, C. (2013). Value for money? New microeconometric evidence on public R&D grants in Flanders. Research Policy, 42(1), 76–89.",
    /* 11 */ "Takalo, T., Tanayama, T., & Toivanen, O. (2013). Estimating the benefits of targeted R&D subsidies. Review of Economics and Statistics, 95(1), 255–272.",
    /* 12 */ "Einiö, E. (2014). R&D subsidies and company performance: Evidence from geographic variation in government funding based on the ERDF population-density rule. Review of Economics and Statistics, 96(4), 710–728.",
    /* 13 */ "Bronzini, R., & Iachini, E. (2014). Are incentives for R&D effective? Evidence from a regression discontinuity approach. American Economic Journal: Economic Policy, 6(4), 100–134.",
    /* 14 */ "Howell, S. T. (2017). Financing innovation: Evidence from R&D grants. American Economic Review, 107(4), 1136–1164.",
    /* 15 */ "Bloom, N., Griffith, R., & Van Reenen, J. (2002). Do R&D tax credits work? Evidence from a panel of countries 1979–1997. Journal of Public Economics, 85(1), 1–31.",
    /* 16 */ "Bloom, N., Van Reenen, J., & Williams, H. (2019). A toolkit of policies to promote innovation. Journal of Economic Perspectives, 33(3), 163–184.",
    /* 17 */ "Hottenrott, H., & Peters, B. (2012). Innovative capability and financing constraints for innovation: More money, more innovation? Review of Economics and Statistics, 94(4), 1126–1142.",
    /* 18 */ "Cohen, W. M., & Levinthal, D. A. (1990). Absorptive capacity: A new perspective on learning and innovation. Administrative Science Quarterly, 35(1), 128–152.",
    /* 19 */ "Imbens, G. W., & Lemieux, T. (2008). Regression discontinuity designs: A guide to practice. Journal of Econometrics, 142(2), 615–635.",
    /* 20 */ "Lee, D. S., & Lemieux, T. (2010). Regression discontinuity designs in economics. Journal of Economic Literature, 48(2), 281–355.",
    /* 21 */ "Calonico, S., Cattaneo, M. D., & Titiunik, R. (2014). Robust nonparametric confidence intervals for regression-discontinuity designs. Econometrica, 82(6), 2295–2326.",
    /* 22 */ "McCrary, J. (2008). Manipulation of the running variable in the regression discontinuity design: A density test. Journal of Econometrics, 142(2), 698–714.",
    /* 23 */ "Gelman, A., & Imbens, G. (2019). Why high-order polynomials should not be used in regression discontinuity designs. Journal of Business & Economic Statistics, 37(3), 447–456.",
    /* 24 */ "Griliches, Z. (1990). Patent statistics as economic indicators: A survey. Journal of Economic Literature, 28(4), 1661–1707.",
    /* 25 */ "Hall, B. H., Jaffe, A., & Trajtenberg, M. (2005). Market value and patent citations. RAND Journal of Economics, 36(1), 16–38.",
    /* 26 */ "Levinsohn, J., & Petrin, A. (2003). Estimating production functions using inputs to control for unobservables. Review of Economic Studies, 70(2), 317–341.",
    /* 27 */ "Ackerberg, D. A., Caves, K., & Frazer, G. (2015). Identification properties of recent production function estimators. Econometrica, 83(6), 2411–2451.",
    /* 28 */ { jer: "2022-v27-i1-01" },
    /* 29 */ { jer: "2022-v27-i1-02" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Governments in almost every advanced economy subsidise private research and development. The economic rationale is well established: because firms cannot fully appropriate the returns to new knowledge, and because financing frictions are particularly severe for intangible, risky investment, private R&D falls short of the social optimum [1][2][3]. Small and medium-sized enterprises (SMEs) are thought to be especially affected by these frictions, since they have limited collateral, short track records and little access to equity markets. Direct grants targeted at SMEs are therefore a central instrument of innovation policy in many countries, alongside R&D tax credits [15][16].",
        "Whether such grants achieve their aims is a long-standing question. The central concern is additionality: a subsidy raises total R&D only if the firm would not have undertaken the subsidised project anyway, and it may even crowd out privately financed R&D if the firm reallocates its own funds elsewhere [4][5]. Early studies of the US Small Business Innovation Research (SBIR) programme reached conflicting conclusions [6][7], and the large subsequent literature using matching and selection models has found mostly positive but heterogeneous effects [8][9][10][11]. Because agencies select projects they consider promising, comparisons between funded and unfunded firms are vulnerable to selection bias. A smaller number of studies exploit discontinuities in funding rules to obtain credible estimates, with strikingly different results: Howell {14} finds large effects of early-stage SBIR grants on subsequent venture capital and patenting, while Bronzini and Iachini {13} find no average effect of an Italian regional programme on investment, except among small firms.",
        "This paper estimates the effect of public R&D subsidies on the innovation outcomes of Korean SMEs using a regression-discontinuity (RD) design. We study the technology-innovation programme of the Small and Medium Business Administration (SMBA) — since 2017 the Ministry of SMEs and Startups — which is the largest direct R&D grant scheme for SMEs in Korea. Applications are scored by expert panels, and proposals are funded if their score exceeds a cut-off that is determined by the budget available in each call. Firms just above and just below the cut-off are similar in all respects except for the receipt of funding, which allows us to estimate the causal effect of the subsidy by comparing their subsequent outcomes [19][20]. Our data cover all applications submitted to the programme over 2014–2020, linked to patent records and to firms' financial statements.",
        "We find that subsidised firms experience a 19 percent increase in patent applications and a 3.2 percent increase in firm-level total factor productivity (TFP) over the subsequent four years. Additionality is substantial: subsidy-induced R&D spending crowds in rather than crowds out private R&D expenditure. Each won of subsidy raises total R&D spending by 1.4 won, implying that firms raise their own R&D funding by 0.4 won per won of subsidy. The effects on patents build over time and are not driven by low-value applications: citation-weighted patents and granted patents increase by similar proportions.",
        "The effects are strongest for firms in technology-intensive industries and for firms with prior R&D experience. In high- and medium-high-technology manufacturing and knowledge-intensive services, patent applications rise by 29 percent and TFP by 5.1 percent, and the additionality ratio is 1.8; in other industries the effects are small and statistically insignificant. Similarly, firms that had positive R&D spending in the three years before applying experience much larger gains than first-time R&D performers. These patterns are consistent with the importance of absorptive capacity [18] and suggest that the returns to R&D subsidies depend on firms' ability to turn additional resources into innovation. The results are robust to alternative bandwidths, polynomial orders and kernel choices, to excluding observations close to the cut-off, and to placebo cut-offs, and validity tests reveal no manipulation of scores or discontinuities in pre-application characteristics.",
        "The rest of the paper is organised as follows. Section 2 describes the programme, Section 3 reviews the related literature and Section 4 develops our hypotheses. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 examines additionality, mechanisms and heterogeneity, and Section 9 reports robustness checks. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korea is one of the most R&D-intensive economies in the world, with gross expenditure on R&D exceeding 4.5 percent of GDP in recent years. Most of this spending is concentrated in a small number of large business groups, while SMEs, which account for more than 80 percent of manufacturing employment, perform a much smaller share. Successive governments have sought to raise innovation in SMEs through tax credits, credit guarantees and direct subsidies. Public support to SMEs during the pandemic, including credit guarantees, has been shown to have sustained investment [28], and productivity differences across Korean firms are large and closely associated with management practices [29].",
        "The technology-innovation programme, established in the late 1990s, provides grants for SME-led R&D projects with a duration of up to two years. Over 2014–2020 the programme funded roughly 1,500 to 2,500 projects a year, with an annual budget of several hundred billion won. Grants cover up to 65 to 75 percent of total project costs, depending on the track, with the remainder financed by the firm in cash or in kind; the maximum grant is KRW 500 million for two-year projects, and the average grant in our sample is KRW 287 million. Eligible firms must meet the statutory definition of an SME and must not be in default on previous government R&D obligations.",
        "Applications are evaluated in calls organised by technology field and programme track. Each application receives a written evaluation and, if it passes an initial screening, a presentation evaluation by a panel of five to seven external experts drawn from universities, research institutes and industry. Panel members score the technical merit, commercial potential and implementation capacity of the project on a 100-point scale, and the final score is the average after dropping the highest and lowest scores. Applications are then ranked within each call and funded in order of score until the budget for the call is exhausted, subject to a minimum score of 70. The cut-off score therefore varies across calls, and applicants do not know it in advance. Panel members do not observe the budget constraint or the scores of other panels, and applicants cannot revise their applications after evaluation, which limits the scope for manipulation of the running variable.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper contributes to the literature on the effects of R&D subsidies on firm behaviour. The question of whether public funding complements or substitutes for private R&D has been studied extensively; David, Hall and Toole {4} and Zúñiga-Vicente et al. {5} review this literature and find that most studies report complementarity, but that results vary widely and that many are vulnerable to selection bias. Studies of the SBIR programme illustrate this tension: Lerner {7} finds that awardees grew faster than matched firms, while Wallsten {6} finds that grants crowded out firm-financed R&D roughly one for one. Studies using matching and selection models find positive effects on R&D in Israel [8], Spain [9], Flanders [10] and Finland [11], with larger effects for smaller firms and firms facing financial barriers.",
        "A more recent literature exploits quasi-experimental variation. Bronzini and Iachini {13} use a regression-discontinuity design around the scoring threshold of an Italian regional programme and find no effect on investment for the average firm but substantial effects for small firms. Howell {14} uses the ranking of applicants for US Department of Energy SBIR grants and finds that early-stage grants roughly double the probability of subsequent venture capital funding and raise patenting and revenue, an effect she attributes to the financing of prototyping rather than to certification. Einiö {12} uses geographic variation in Finnish funding induced by an EU population-density rule and finds that subsidies raise employment and sales but with a delay. We contribute evidence from Korea, whose SME innovation policy is among the most extensive in the world, and we examine both innovation outputs and productivity together with the additionality of R&D spending.",
        "Our work also relates to research on the determinants of the returns to R&D. Cohen and Levinthal {18} argue that firms' ability to exploit external knowledge and resources depends on their prior investment in R&D — their absorptive capacity. Hottenrott and Peters {17} show that financing constraints bind most strongly for firms with high innovative capability. Bloom, Van Reenen and Williams {16} survey the evidence on innovation policies and conclude that R&D subsidies and tax credits are effective on average but that their returns depend on the characteristics of recipients. Our heterogeneity results speak directly to this question. Finally, we build on the literature using patents as indicators of innovation [24][25], recognising that patent counts are an imperfect measure whose value can be assessed through grants and citations.",
      ],
    },
    {
      id: "hypotheses",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider an SME that chooses its R&D spending by equating the marginal return to R&D with the marginal cost of funds, which rises with the amount of external finance required because of information asymmetries and limited collateral [3]. A matching grant for a specific project affects R&D through three channels. First, if the project would not have been undertaken without the grant, the grant raises R&D by at least the amount of the grant; if the project would have been undertaken anyway, it may simply replace private funding. Second, because the firm must co-finance the project, the grant lowers the marginal cost of R&D at the margin of the subsidised project and may induce the firm to invest more of its own resources. Third, by relaxing financing constraints and providing a signal of quality to outside investors, the grant may lower the firm's cost of external finance and raise R&D beyond the subsidised project [14][17].",
        "Under these conditions, the additionality ratio — the increase in total R&D per won of subsidy — exceeds one if the grant crowds in private R&D, equals one if it neither crowds in nor crowds out, and lies below one if it partially crowds out private spending. Additional R&D should in turn raise innovation output and, with a lag, productivity. The size of these effects should depend on the firm's capacity to use additional resources productively: firms with prior R&D experience have established research teams and processes, and firms in technology-intensive industries face richer technological opportunities [18]. This framework yields four hypotheses. H1: R&D subsidies raise patent applications. H2: R&D subsidies raise TFP. H3: subsidies crowd in private R&D, so that the additionality ratio exceeds one. H4: the effects are larger for firms in technology-intensive industries and for firms with prior R&D experience.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We combine three data sources. Programme records provide all applications to the technology-innovation programme in calls held between 2014 and 2020, including the applicant's business registration number, the call, the programme track, the requested amount, the panel scores, the funding decision and the amount granted. We link these records to patent applications filed with the Korean Intellectual Property Office (KIPO) and to annual financial statements from Korea Enterprise Data, which cover almost all incorporated firms subject to external audit or credit evaluation.",
      ],
      subsections: [
        {
          id: "data-sample",
          heading: "5.1 Sample construction",
          paragraphs: [
            "The raw records contain 21,734 applications that reached the presentation evaluation stage. We drop applications in calls in which all or no applicants were funded (4.1 percent), applications from firms that could not be matched to financial statements (6.3 percent) and applications from firms that had received a grant from the programme in the previous two years (4.6 percent), since these firms were subject to additional eligibility restrictions. Our final sample contains 18,462 applications from 12,903 firms in 1,127 calls. For each application we define the running variable as the difference between the final score and the cut-off score of the call, which is the score of the lowest-ranked funded application.",
            "Outcomes are measured over the four years following the year of application. Because our patent and financial data extend to 2021, four-year outcomes are observed for applications in the 2014–2017 calls; applications in 2018–2020 contribute to the estimates for shorter horizons. Patents are counted by application date and assigned to firms using the applicant's business registration number and name. We construct counts of patent applications, granted patents and citation-weighted patents, where citations are counted within five years of publication. R&D expenditure is reported in financial statements as research and development costs, including both expensed and capitalised components, and government grants are recorded separately, which allows us to distinguish privately financed from publicly financed R&D.",
            "Table 1 reports summary statistics for all applicants and for applicants within 5 points of the cut-off. The average applicant is 11.4 years old, employs 37 workers and spends KRW 812 million a year on R&D. About 72 percent of applicants had positive R&D spending in each of the three years before applying, and 58 percent operate in technology-intensive industries. Applicants close to the cut-off are very similar to the full sample. Funded applicants in the 5-point window received an average grant of KRW 291 million.",
          ],
          table: {
            id: "tab-summary",
            caption: "Table 1. Summary statistics, applicants to the technology-innovation programme, 2014–2020",
            columns: ["Variable (year before application)", "All applicants: mean", "All: std. dev.", "Within ±5 points: mean", "Within ±5: std. dev."],
            rows: [
              ["Firm age (years)", "11.4", "7.9", "11.2", "7.7"],
              ["Employees", "37.2", "41.8", "36.5", "40.3"],
              ["Sales (KRW billion)", "9.84", "14.6", "9.61", "14.1"],
              ["R&D expenditure (KRW million)", "812", "1,047", "796", "1,021"],
              ["R&D intensity (% of sales)", "11.3", "15.2", "11.5", "15.6"],
              ["Patent applications (per year)", "1.42", "3.18", "1.38", "3.05"],
              ["Prior R&D experience (share)", "0.72", "0.45", "0.71", "0.45"],
              ["Technology-intensive industry (share)", "0.58", "0.49", "0.59", "0.49"],
              ["Funded (share)", "0.41", "0.49", "0.47", "0.50"],
              ["Grant if funded (KRW million)", "287", "121", "291", "118"],
              ["Applications", "18,462", "", "6,214", ""],
            ],
            note: "Firm characteristics are measured in the year before application. Prior R&D experience indicates positive R&D expenditure in each of the three years before application. Technology-intensive industries are high- and medium-high-technology manufacturing and knowledge-intensive services (OECD classification). Monetary values in 2015 prices.",
          },
        },
        {
          id: "data-tfp",
          heading: "5.2 Productivity",
          paragraphs: [
            "We estimate TFP from value-added production functions using the control-function approach of Ackerberg, Caves and Frazer {27}, with intermediate inputs as the proxy variable following Levinsohn and Petrin {26}. Production functions are estimated separately for each two-digit industry on the universe of firms in Korea Enterprise Data over 2010–2021, not only on applicants, so that the estimated output elasticities are not affected by the programme. Value added is deflated by industry producer price indices and capital by the investment goods deflator. Because R&D spending is partly recorded as current costs, measured value added may fall mechanically when R&D rises; we therefore add expensed R&D back to value added, as is standard in the measurement of productivity in R&D-intensive firms, and show that results are similar without this adjustment.",
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
          id: "strategy-rd",
          heading: "6.1 Fuzzy regression discontinuity",
          paragraphs: [
            "The probability of funding jumps sharply at the cut-off but does not move from zero to one, because some applicants above the cut-off decline the grant or fail the subsequent agreement process, and a small number of applicants below the cut-off are funded when higher-ranked applicants withdraw. We therefore use a fuzzy RD design [19][20]. The first stage is D(i) = α + π · 1[S(i) ≥ 0] + f(S(i)) + ε(i), where D is an indicator for receiving the grant and S is the score relative to the call-specific cut-off. The reduced form replaces D with an outcome Y measured over the subsequent years, and the treatment effect is the ratio of the reduced-form discontinuity to the first-stage discontinuity, which we estimate by two-stage least squares with the indicator for being above the cut-off as the instrument.",
            "We estimate the regressions using local linear functions of the running variable on each side of the cut-off, with a triangular kernel and the mean-squared-error optimal bandwidth of Calonico, Cattaneo and Titiunik {21}, and report bias-corrected robust confidence intervals. Following Gelman and Imbens {23}, we avoid high-order global polynomials. All specifications include call fixed effects, so that applicants are compared with others in the same call, and standard errors are clustered by firm. The treatment effect is a local average treatment effect for applicants close to the cut-off whose funding status depends on whether they clear it.",
          ],
        },
        {
          id: "strategy-validity",
          heading: "6.2 Validity",
          paragraphs: [
            "The key identifying assumption is that applicants cannot precisely manipulate their scores around the cut-off. This is plausible given the institutional setting: scores are averages of several independent panel members' assessments, the cut-off depends on the scores of all applicants in the call and on the budget, and neither applicants nor panel members know the cut-off in advance. We test the assumption in two ways. First, the density test of McCrary {22} detects no discontinuity in the distribution of the running variable at the cut-off (the estimated log difference in density is 0.031 with a standard error of 0.058). Second, Table 2 shows that pre-application characteristics are balanced around the cut-off: none of 10 pre-determined variables, including size, age, R&D spending, previous patents and productivity, exhibits a significant discontinuity, and a joint test does not reject the null hypothesis of no discontinuity (p = 0.71).",
          ],
          table: {
            id: "tab-balance",
            caption: "Table 2. Validity tests: discontinuities in pre-application characteristics at the cut-off",
            columns: ["Variable (year before application)", "Mean below cut-off", "Discontinuity", "Robust std. error", "Bandwidth (points)"],
            rows: [
              ["Log employees", "3.04", "0.021", "(0.041)", "6.2"],
              ["Log sales", "8.51", "−0.034", "(0.062)", "5.9"],
              ["Firm age (years)", "11.3", "0.18", "(0.47)", "6.8"],
              ["Log R&D expenditure", "6.02", "0.027", "(0.066)", "6.1"],
              ["R&D intensity (%)", "11.6", "−0.29", "(0.84)", "5.7"],
              ["Patent applications, past 3 years", "4.06", "0.11", "(0.29)", "6.4"],
              ["Log TFP", "0.00", "0.008", "(0.024)", "6.0"],
              ["Prior R&D experience", "0.71", "0.012", "(0.023)", "6.6"],
              ["Technology-intensive industry", "0.59", "−0.009", "(0.025)", "6.9"],
              ["Previous government R&D grant", "0.34", "0.017", "(0.024)", "6.3"],
              ["Joint test (p-value)", "", "0.71", "", ""],
              ["McCrary density test: log difference", "", "0.031", "(0.058)", ""],
            ],
            note: "Local linear regressions with triangular kernel and MSE-optimal bandwidths, including call fixed effects. Robust standard errors clustered by firm in parentheses. The joint test stacks all variables in a seemingly unrelated regression. No discontinuity is significant at the 10 percent level.",
          },
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
            "Figure 1 shows the probability of receiving a grant by score relative to the cut-off, in bins of one point. Below the cut-off, the probability of funding is close to zero, at around 5 percent; it jumps to about 85 percent at the cut-off and is broadly flat above it. Column (1) of Table 3 reports the corresponding first-stage estimate: clearing the cut-off raises the probability of funding by 79 percentage points, with an F statistic far above conventional thresholds. Clearing the cut-off raises the amount of public R&D funding received over the following two years by KRW 229 million on average.",
          ],
          figures: [
            {
              id: "fig-first-stage",
              caption: "Figure 1. Probability of receiving a grant by evaluation score relative to the cut-off",
              kind: "line",
              xLabels: ["−10", "−9", "−8", "−7", "−6", "−5", "−4", "−3", "−2", "−1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
              yLabel: "Share funded",
              series: [
                { name: "Share of applications funded", values: [0.02, 0.03, 0.02, 0.04, 0.03, 0.05, 0.04, 0.06, 0.05, 0.07, 0.84, 0.85, 0.86, 0.85, 0.87, 0.88, 0.87, 0.89, 0.88, 0.90] },
              ],
              marker: 10,
              note: "Share of applications receiving a grant in one-point bins of the final evaluation score minus the call-specific cut-off. Applications in calls held 2014–2020. The vertical marker indicates the cut-off.",
            },
          ],
        },
        {
          id: "results-main",
          heading: "7.2 Patents and productivity",
          paragraphs: [
            "Table 3 reports the main fuzzy RD estimates for outcomes measured over the four years following application. The estimate in column (2) implies that receiving a grant raises the log of one plus cumulative patent applications by 0.174, which corresponds to an increase of 19 percent. The effect is similar for granted patents (17 percent) and for citation-weighted patents (22 percent), which suggests that the additional patents are not of lower quality than those of unfunded firms. Column (5) shows that the grant raises log TFP four years after application by 0.032, an increase of 3.2 percent. Column (6) reports the effect on cumulative total R&D spending over the four years, which rises by KRW 321 million, compared with additional public funding of KRW 229 million; we discuss this additionality in Section 8.",
            "Figure 2 shows how the effect on patent applications evolves over time. The effect is close to zero in the year of application, when the subsidised projects are just beginning, rises in the first and second years as projects are completed, and continues to grow in the third and fourth years, consistent with follow-on innovation building on the subsidised projects. The effect on TFP follows a similar but more delayed pattern: it is insignificant in the first two years and becomes significant in the third year after application. The growing effects make it unlikely that our results reflect a simple shift in the timing of patent applications.",
          ],
          table: {
            id: "tab-main",
            caption: "Table 3. Effects of R&D subsidies on innovation, productivity and R&D: fuzzy RD estimates (four-year horizon)",
            columns: ["", "(1) Funded", "(2) Log patents", "(3) Log granted", "(4) Log cit.-weighted", "(5) Log TFP", "(6) Total R&D"],
            rows: [
              ["Above cut-off (first stage)", "0.791***", "", "", "", "", ""],
              ["", "(0.017)", "", "", "", "", ""],
              ["Funded (2SLS)", "", "0.174***", "0.157***", "0.199***", "0.032**", "321***"],
              ["", "", "(0.051)", "(0.048)", "(0.067)", "(0.013)", "(84)"],
              ["Effect (%)", "", "19.0", "17.0", "22.0", "3.2", ""],
              ["Mean below cut-off", "0.05", "1.63", "1.21", "1.94", "0.00", "2,846"],
              ["Bandwidth (points)", "6.4", "6.1", "6.3", "5.8", "6.6", "6.2"],
              ["Observations", "6,371", "3,482", "3,544", "3,297", "3,618", "3,529"],
            ],
            note: "Local linear fuzzy RD estimates with triangular kernel and MSE-optimal bandwidths; call fixed effects included. Patent outcomes are log(1 + cumulative count) over years 0–3 after application; TFP is measured in year 4; total R&D is cumulative expenditure in KRW million (2015 prices) over years 0–3. Outcomes in columns (2)–(6) are observed for applications in the 2014–2017 calls. Robust standard errors clustered by firm in parentheses. Effects in percent are exp(β) − 1. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
          figures: [
            {
              id: "fig-dynamics",
              caption: "Figure 2. Effect of receiving a grant on cumulative patent applications by year since application",
              kind: "line",
              xLabels: ["Year −2", "Year −1", "Year 0", "Year 1", "Year 2", "Year 3"],
              yLabel: "Effect on log(1 + cumulative patents)",
              series: [
                {
                  name: "Fuzzy RD estimate",
                  values: [0.006, -0.004, 0.018, 0.071, 0.128, 0.174],
                  lower: [-0.052, -0.061, -0.034, 0.012, 0.051, 0.074],
                  upper: [0.064, 0.053, 0.070, 0.130, 0.205, 0.274],
                },
              ],
              marker: 2,
              note: "Fuzzy RD estimates of the effect of receiving a grant on log(1 + cumulative patent applications) from the year of application to the year shown; pre-application years use applications filed in the two years before the call as placebo outcomes. Bands are 95 percent robust confidence intervals. Years 0–2 use the 2014–2018 calls and year 3 the 2014–2017 calls.",
            },
          ],
        },
        {
          id: "results-magnitude",
          heading: "7.3 Magnitudes",
          paragraphs: [
            "Our estimates imply that the programme's grants generate innovation at a moderate cost. With an average grant of KRW 291 million near the cut-off and a baseline of about 4.1 patent applications over four years among unfunded applicants, the 19 percent effect corresponds to about 0.8 additional patent applications per grant, or roughly KRW 370 million in public funding per additional patent application. This is within the range of estimates for other direct R&D programmes once differences in patent propensity are taken into account [13][14]. The 3.2 percent increase in TFP, applied to the value added of the average funded firm, corresponds to an annual increase of about KRW 110 million in value added once the effect is fully realised, implying that the grant would be recouped in additional value added within three to four years, ignoring spillovers to other firms, which the literature suggests are substantial [16].",
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Additionality, Mechanisms and Heterogeneity",
      paragraphs: [],
      subsections: [
        {
          id: "mechanisms-additionality",
          heading: "8.1 Additionality and firm growth",
          paragraphs: [
            "Table 4 decomposes the R&D response and examines other firm outcomes. Over the four years following application, receiving a grant raises public R&D funding by KRW 229 million and total R&D expenditure by KRW 321 million. The additionality ratio — the increase in total R&D per won of public funding — is therefore 1.4, with a 95 percent confidence interval from 1.03 to 1.77 that excludes one. Privately financed R&D rises by KRW 92 million, or 0.4 won per won of subsidy. Subsidy-induced R&D spending thus crowds in rather than crowds out private R&D, in contrast to the crowding out found by Wallsten {6} and in line with the complementarity found in most of the literature [4][5][10]. The increase in private R&D is concentrated in the second to fourth years after application, after the subsidised project has ended, which suggests that the grant leads firms to continue and expand their research activities rather than merely to co-finance the subsidised project.",
            "Subsidised firms also grow. The number of R&D employees rises by 11 percent and total employment by 6.4 percent, and sales rise by 7.9 percent four years after application. There is evidence of a relaxation of financing constraints: subsidised firms are more likely to obtain new bank loans and venture capital, consistent with a certification effect of the grant [14], although the effect on venture capital is imprecisely estimated because few applicants receive it. The probability of firm survival over four years rises by 2.1 percentage points but the effect is not statistically significant.",
          ],
          table: {
            id: "tab-additionality",
            caption: "Table 4. R&D additionality and firm outcomes: fuzzy RD estimates (four-year horizon)",
            columns: ["Outcome", "Estimate", "Robust std. error", "Mean below cut-off", "Observations"],
            rows: [
              ["Public R&D funding, cumulative (KRW million)", "229***", "(21)", "118", "3,529"],
              ["Total R&D expenditure, cumulative (KRW million)", "321***", "(84)", "2,846", "3,529"],
              ["Privately financed R&D, cumulative (KRW million)", "92*", "(53)", "2,728", "3,529"],
              ["Additionality ratio (total R&D / public funding)", "1.40***", "(0.19)", "", "3,529"],
              ["Log R&D employees", "0.104***", "(0.035)", "2.02", "3,496"],
              ["Log employment", "0.062**", "(0.027)", "3.11", "3,618"],
              ["Log sales", "0.076**", "(0.034)", "8.63", "3,618"],
              ["New bank loan (indicator)", "0.048**", "(0.022)", "0.37", "3,618"],
              ["Venture capital investment (indicator)", "0.017", "(0.011)", "0.04", "3,618"],
              ["Survival (indicator)", "0.021", "(0.016)", "0.91", "3,812"],
            ],
            note: "Fuzzy RD estimates with the specification of Table 3. The additionality ratio is estimated by 2SLS as the ratio of the discontinuities in total R&D and in public R&D funding, with a standard error obtained by the delta method; the test of a ratio equal to one has p = 0.036. Log outcomes are measured in year 4 after application. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
        {
          id: "mechanisms-heterogeneity",
          heading: "8.2 Heterogeneity",
          paragraphs: [
            "Table 5 examines heterogeneity by industry and firm characteristics. Consistent with H4, the effects are strongest for firms in technology-intensive industries: in high- and medium-high-technology manufacturing and knowledge-intensive services, the grant raises patent applications by 29 percent and TFP by 5.1 percent, and the additionality ratio is 1.8. In other industries the effects on patents (5 percent) and TFP (1.2 percent) are small and insignificant, and the additionality ratio of 1.0 indicates neither crowding in nor crowding out. Similarly, firms with prior R&D experience experience a 25 percent increase in patents and a 4.1 percent increase in TFP, with an additionality ratio of 1.6, whereas first-time R&D performers show much smaller effects.",
            "These patterns are consistent with the role of absorptive capacity [18]: firms with established research capabilities and in sectors with rich technological opportunities can use additional funding more productively, and they appear to expand their own research in response. They also suggest that the grant's role in relaxing financing constraints is most valuable for firms with high innovative capability, as found by Hottenrott and Peters {17}. Effects by firm size and age are less pronounced: smaller and younger firms show somewhat larger effects on patents but the differences are not statistically significant, in contrast to the strong size gradient found by Bronzini and Iachini {13} for Italy. One explanation is that our sample consists entirely of SMEs, among which size differences are smaller.",
          ],
          table: {
            id: "tab-hetero",
            caption: "Table 5. Heterogeneity in the effects of R&D subsidies (fuzzy RD estimates, four-year horizon)",
            columns: ["Subgroup", "Patents (%)", "TFP (%)", "Additionality ratio", "Observations (patents)"],
            rows: [
              ["Technology-intensive industries", "28.9*** (9.0)", "5.1*** (1.7)", "1.82*** (0.27)", "2,061"],
              ["Other industries", "4.6 (7.3)", "1.2 (1.6)", "1.00 (0.24)", "1,421"],
              ["Difference (p-value)", "0.041", "0.087", "0.028", ""],
              ["Prior R&D experience", "25.0*** (7.4)", "4.1*** (1.4)", "1.61*** (0.23)", "2,497"],
              ["No prior R&D experience", "4.7 (9.8)", "1.4 (2.0)", "1.04 (0.31)", "985"],
              ["Difference (p-value)", "0.049", "0.192", "0.116", ""],
              ["Below median employment (≤ 25)", "22.6*** (8.4)", "3.5* (1.9)", "1.47*** (0.26)", "1,746"],
              ["Above median employment (> 25)", "15.8** (7.1)", "2.9** (1.4)", "1.33*** (0.24)", "1,736"],
              ["Firm age < 7 years", "23.9** (10.3)", "3.8* (2.2)", "1.52*** (0.33)", "1,104"],
              ["Firm age ≥ 7 years", "16.9*** (6.2)", "2.9** (1.3)", "1.36*** (0.21)", "2,378"],
            ],
            note: "Each row reports fuzzy RD estimates for a subsample with the specification of Table 3. Effects on patents and TFP are in percent (exp(β) − 1), with standard errors in percentage points in parentheses. Differences are tested in pooled regressions with interactions. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks for the two headline outcomes. The estimates are stable across bandwidths: halving the optimal bandwidth widens confidence intervals but leaves point estimates close to the baseline, while doubling it gives slightly smaller and more precise estimates. Using local quadratic rather than local linear functions, or a uniform rather than triangular kernel, gives similar results. A 'donut' specification that drops applications within 0.5 points of the cut-off, where any manipulation would be concentrated, also leaves the estimates unchanged. Estimating the effects on patent counts with a Poisson model gives an effect of 21 percent. Results are also similar when we exclude the 2017 calls, which coincided with the reorganisation of the SMBA into a ministry, and when we restrict the sample to each firm's first application in the sample period, which addresses the concern that firms that narrowly fail reapply and receive funding later.",
        "Placebo tests support the design. Estimating the discontinuity at placebo cut-offs 3 points above or below the actual cut-off yields no significant effects. Pre-application patents show no discontinuity (Table 2 and Figure 2). Finally, we address the concern that unfunded applicants near the cut-off may obtain funding from other programmes: the share of narrowly unfunded applicants that receive another government R&D grant in the following two years is 23 percent, compared with 15 percent for narrowly funded applicants. Our estimates should therefore be interpreted as the effect of the technology-innovation grant relative to a counterfactual that includes some access to alternative public funding; the effect of public funding relative to no funding at all is likely somewhat larger.",
      ],
      table: {
        id: "tab-robustness",
        caption: "Table 6. Robustness checks: effects on patents and TFP (fuzzy RD, four-year horizon)",
        columns: ["Specification", "Log patents", "Log TFP", "Bandwidth (points)", "Observations (patents)"],
        rows: [
          ["Baseline (Table 3)", "0.174*** (0.051)", "0.032** (0.013)", "6.1 / 6.6", "3,482"],
          ["Half bandwidth", "0.181** (0.074)", "0.035* (0.019)", "3.1 / 3.3", "1,763"],
          ["Double bandwidth", "0.158*** (0.039)", "0.028*** (0.010)", "12.2 / 13.2", "6,812"],
          ["Local quadratic", "0.183*** (0.066)", "0.034** (0.017)", "9.4 / 9.9", "5,248"],
          ["Uniform kernel", "0.169*** (0.049)", "0.030** (0.013)", "6.1 / 6.6", "3,482"],
          ["Donut: exclude |score − cut-off| < 0.5", "0.177*** (0.058)", "0.031** (0.015)", "6.1 / 6.6", "3,201"],
          ["Poisson model for patent counts", "0.191*** (0.057)", "", "6.1", "3,482"],
          ["Excluding 2017 calls", "0.169*** (0.057)", "0.033** (0.015)", "6.0 / 6.5", "2,664"],
          ["First application per firm only", "0.186*** (0.060)", "0.034** (0.015)", "6.3 / 6.8", "2,741"],
          ["TFP without R&D add-back", "", "0.027** (0.013)", "6.6", ""],
          ["Placebo cut-off: +3 points", "0.021 (0.064)", "0.004 (0.016)", "5.2 / 5.6", "2,413"],
          ["Placebo cut-off: −3 points", "−0.017 (0.059)", "−0.006 (0.015)", "5.4 / 5.9", "2,689"],
        ],
        note: "Fuzzy RD estimates of the effect of receiving a grant; placebo rows report reduced-form discontinuities at the stated placebo cut-offs, estimated separately on each side of the true cut-off. Bandwidths are for patents / TFP. Robust standard errors clustered by firm in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
      },
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our findings carry several implications for innovation policy. First, direct R&D grants to SMEs can be effective: at the margin of the funding decision, Korea's technology-innovation programme raised patenting, productivity and private R&D investment. The finding that grants crowd in private R&D, with an additionality ratio of 1.4, is particularly important, since it implies that the programme's fiscal cost understates its effect on the economy's research effort. Concerns that subsidies merely replace private funding are not borne out for the marginal projects funded by the programme.",
        "Second, the returns to subsidies are highly heterogeneous. Grants to firms in technology-intensive industries and to firms with prior R&D experience generate large effects, while those to other firms have small and insignificant effects. This suggests that selection criteria emphasising absorptive capacity and technological opportunity can raise the returns to public funding. At the same time, the goal of broadening the base of innovating SMEs — bringing new firms into R&D — may require complementary support, such as advisory services, training or collaboration with research institutes, rather than grants alone. Policymakers face a trade-off between maximising measured returns and building innovative capacity in firms that do not yet have it.",
        "Third, because our estimates are local to the cut-off, they speak most directly to the effects of marginal changes in the programme budget. An increase in the budget would fund applicants just below the current cut-off, who are similar to those in our estimation sample, and our results suggest that such an expansion would yield substantial returns. The effects of grants to the highest-scoring applicants, which are inframarginal to the funding decision, may differ, and these firms might have undertaken their projects even without support. Allocating a larger share of funding to the margin, for instance by reducing the maximum grant and funding more projects, may therefore raise the programme's overall additionality.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "This paper has estimated the effects of public R&D subsidies on Korean SMEs using a regression-discontinuity design around the funding cut-off of the SMBA's technology-innovation programme over 2014–2020. Subsidised firms experience a 19 percent increase in patent applications and a 3.2 percent increase in TFP over the subsequent four years. Subsidies crowd in private R&D, with an additionality ratio of 1.4, and the effects are strongest for firms in technology-intensive industries and firms with prior R&D experience. The results are robust to alternative specifications and supported by validity and placebo tests.",
        "Future research could extend our analysis in several directions. Longer follow-up periods will reveal whether the effects on productivity persist and translate into lasting differences in firm growth and survival. Knowledge spillovers from subsidised firms to suppliers, customers and competitors, which our firm-level design does not capture, are central to the social return to R&D and deserve direct study. Finally, comparing the effects of direct grants with those of R&D tax credits and credit guarantees for the same population of firms would help policymakers design an efficient mix of instruments for SME innovation.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Linkage and Variable Definitions",
      paragraphs: [
        "Linkage. Programme records are linked to Korea Enterprise Data using business registration numbers, with a match rate of 93.7 percent. Patent applications are linked using applicant business registration numbers where available in KIPO records and by standardised firm name and address otherwise; manual checks of a random sample of 500 matches found an error rate below 2 percent. Patents with multiple applicants are counted fractionally.",
        "Cut-off scores. For each call, the cut-off is the final score of the lowest-ranked application that was selected for funding in the initial decision, before withdrawals. Applications with scores equal to the cut-off (0.8 percent) are coded as above the cut-off. In 34 calls in which the selection list was revised after initial publication, we use the initial list.",
        "R&D measures. Total R&D expenditure is the sum of research and development costs recorded in manufacturing costs, selling and administrative expenses, and capitalised development costs. Public R&D funding is recorded in the notes to financial statements as government grants for R&D; for firms that do not report grants separately (11 percent), we use the programme's disbursement records and the national R&D information system. Privately financed R&D is total R&D less public R&D funding.",
      ],
    },
  ],
};
