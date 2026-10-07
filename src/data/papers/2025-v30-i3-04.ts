// Vol. 30, No. 3 (July 2025) — full text (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2025-v30-i3-04",
  acknowledgments:
    "We thank seminar participants at Hanyang University and the Higher School of Economics, two anonymous referees and the handling editor for helpful comments. The data were analysed in the secure research environment of the data provider; all remaining errors are our own.",
  dataAvailability:
    "The linked employer–employee records are administrative data that can be accessed only in the provider's secure environment under a data-use agreement. Cell-level aggregates, the code used to construct frozen-cell indicators and firm-level shock measures, and the replication scripts are available from the corresponding author.",
  editorialNote:
    "Romanova and Choi find that 38 percent of Korean manufacturing firm-years contain at least one nominally frozen wage cell, and that firms with more frozen cells have 5.6 percentage points higher separations among new hires but 3.2 percentage points lower separations among tenured workers, a last-in-first-out pattern.",
  refs: [
    /* 1 */ "Bewley, T. F. (1999). Why wages don't fall during a recession. Cambridge, MA: Harvard University Press.",
    /* 2 */ "Akerlof, G. A., Dickens, W. T., & Perry, G. L. (1996). The macroeconomics of low inflation. Brookings Papers on Economic Activity, 1996(1), 1–76.",
    /* 3 */ "Card, D., & Hyslop, D. (1997). Does inflation “grease the wheels of the labor market”? In C. D. Romer & D. H. Romer (Eds.), Reducing inflation: Motivation and strategy (pp. 71–122). Chicago: University of Chicago Press.",
    /* 4 */ "Kahn, S. (1997). Evidence of nominal wage stickiness from microdata. American Economic Review, 87(5), 993–1008.",
    /* 5 */ "Barattieri, A., Basu, S., & Gottschalk, P. (2014). Some evidence on the importance of sticky wages. American Economic Journal: Macroeconomics, 6(1), 70–101.",
    /* 6 */ "Grigsby, J., Hurst, E., & Yildirmaz, A. (2021). Aggregate nominal wage adjustments: New evidence from administrative payroll data. American Economic Review, 111(2), 428–471.",
    /* 7 */ "Daly, M. C., & Hobijn, B. (2014). Downward nominal wage rigidities bend the Phillips curve. Journal of Money, Credit and Banking, 46(S2), 51–93.",
    /* 8 */ "Abowd, J. M., Kramarz, F., & Margolis, D. N. (1999). High wage workers and high wage firms. Econometrica, 67(2), 251–333.",
    /* 9 */ "Card, D., Heining, J., & Kline, P. (2013). Workplace heterogeneity and the rise of West German wage inequality. Quarterly Journal of Economics, 128(3), 967–1015.",
    /* 10 */ "Song, J., Price, D. J., Guvenen, F., Bloom, N., & von Wachter, T. (2019). Firming up inequality. Quarterly Journal of Economics, 134(1), 1–50.",
    /* 11 */ "Guiso, L., Pistaferri, L., & Schivardi, F. (2005). Insurance within the firm. Journal of Political Economy, 113(5), 1054–1087.",
    /* 12 */ "Oreopoulos, P., von Wachter, T., & Heisz, A. (2012). The short- and long-term career effects of graduating in a recession. American Economic Journal: Applied Economics, 4(1), 1–29.",
    /* 13 */ "Kahn, L. B. (2010). The long-term labor market consequences of graduating from college in a bad economy. Labour Economics, 17(2), 303–316.",
    /* 14 */ "Elsby, M. W. L., Shin, D., & Solon, G. (2016). Wage adjustment in the Great Recession and other downturns: Evidence from the United States and Great Britain. Journal of Labor Economics, 34(S1), S249–S291.",
    /* 15 */ "Fehr, E., & Goette, L. (2005). Robustness and real consequences of nominal wage rigidity. Journal of Monetary Economics, 52(4), 779–804.",
    /* 16 */ "Dickens, W. T., Goette, L., Groshen, E. L., Holden, S., Messina, J., Schweitzer, M. E., Turunen, J., & Ward, M. E. (2007). How wages change: Micro evidence from the International Wage Flexibility Project. Journal of Economic Perspectives, 21(2), 195–214.",
    /* 17 */ "Babecký, J., Du Caju, P., Kosma, T., Lawless, M., Messina, J., & Rõõm, T. (2010). Downward nominal and real wage rigidity: Survey evidence from European firms. Scandinavian Journal of Economics, 112(4), 884–910.",
    /* 18 */ "Gertler, M., Huckfeldt, C., & Trigari, A. (2020). Unemployment fluctuations, match quality, and the wage cyclicality of new hires. Review of Economic Studies, 87(4), 1876–1914.",
    /* 19 */ "Pissarides, C. A. (2009). The unemployment volatility puzzle: Is wage stickiness the answer? Econometrica, 77(5), 1339–1369.",
    /* 20 */ "Haefke, C., Sonntag, M., & van Rens, T. (2013). Wage rigidity and job creation. Journal of Monetary Economics, 60(8), 887–899.",
    /* 21 */ "Lazear, E. P. (1981). Agency, earnings profiles, productivity, and hours restrictions. American Economic Review, 71(4), 606–620.",
    /* 22 */ "Shimer, R. (2005). The cyclical behavior of equilibrium unemployment and vacancies. American Economic Review, 95(1), 25–49.",
    /* 23 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 24 */ "Topel, R. (1991). Specific capital, mobility, and wages: Wages rise with job seniority. Journal of Political Economy, 99(1), 145–176.",
    /* 25 */ "Autor, D. H. (2003). Outsourcing at will: The contribution of unjust dismissal doctrine to the growth of employment outsourcing. Journal of Labor Economics, 21(1), 1–42.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Why do employment losses in a recession fall so unevenly on different workers inside the same firm? A long tradition holds that wages are sticky downwards: employers rarely cut nominal pay, because pay cuts damage morale, effort and the willingness of workers to cooperate [1][2]. If a firm that faces a fall in demand cannot lower the wages of the workers it has, it must adjust along some other margin, and employment is the obvious candidate. The macroeconomic implications of this argument are well known, for the Phillips curve [2][7] and for the volatility of unemployment [19][22]. What is much less well documented is the microeconomic implication: if the wage of one group cannot fall, which workers lose their jobs?",
        "This paper answers that question for Korean manufacturing. We use administrative linked employer–employee records for 2010–2022 and define a wage cell as the set of workers in a firm who share an occupation and a tenure band. A cell is nominally frozen in a year when its median base wage is exactly unchanged from the previous year. Frozen cells are common: in about 38 percent of firm-year observations at least one cell is frozen, and the incidence rises sharply in 2020, when the pandemic recession hit manufacturing. Because freezing is chosen by firms, we do not compare firms with many and few frozen cells naively. Instead we study how separations respond to firm-specific demand shocks and ask whether the response differs with the firm's predetermined share of frozen cells.",
        "Our central finding is that nominal rigidity redistributes the burden of adjustment across worker groups rather than only raising its total. When a firm with a higher share of frozen cells is hit by a negative shock, separation rates among new hires are 5.6 percentage points higher than in comparable firms with fewer frozen cells, whereas separation rates among tenured workers are 3.2 percentage points lower. This is the pattern of a last-in-first-out adjustment rule: the firm protects its most senior workers, whose wages it cannot cut, and sheds those who have been with it for the shortest time. It is not what a simple model in which all workers are interchangeable would predict, and it is the reverse of what is sometimes assumed in studies that treat rigidity as a uniform cost on all employment.",
        "The paper contributes to three literatures. First, it adds to the evidence on the incidence of downward nominal wage rigidity, which comes mainly from household panels and payroll records in the United States and Europe [4][5][6][16], by documenting its prevalence and cyclicality in a major Asian manufacturing economy and by measuring it at the level of cells inside firms. Second, it contributes to research on firm-level wage setting and the transmission of firm shocks to workers [8][9][10][11], which has focused on pay rather than on who separates. Third, it speaks to the literature on the unequal costs of recessions for entrants, from graduates to new hires [12][13][18], by showing that part of the entrants' disadvantage is produced by the wage-setting institutions of the firms they enter.",
        "Our identification relies on firm-specific demand shocks that are plausibly unrelated to a firm's wage-setting practices: shifts in the demand of the destination markets to which each firm exported in the base period. We show that the shocks predict sales and hiring, that they are uncorrelated with the frozen-cell share measured before the shock, and that our results survive controls for firm fixed effects, industry-by-year effects and a rich set of interactions between the shock and firm characteristics such as size, union status and wage level. Heterogeneity and mechanism tests support the interpretation: the pattern is strongest in unionised firms and in firms with steep seniority wage profiles, and absent where flexible pay components allow adjustment through bonuses.",
        "The rest of the paper is organised as follows. Section 2 describes the Korean institutional setting. Section 3 reviews the literature and Section 4 presents a conceptual framework and hypotheses. Section 5 describes the data and Section 6 the empirical strategy. Section 7 reports the main results, Section 8 mechanisms and heterogeneity, and Section 9 robustness. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Wage setting in Korean manufacturing combines features of enterprise-level bargaining with a strong seniority tradition. Base pay is determined by annual negotiations at the firm or establishment level, between management and either an enterprise union or a labour–management council. Pay scales typically increase with years of service, and firms announce a collective base-pay increase each spring; a nominal cut in base pay is almost never proposed outside of restructuring. Variable pay, in the form of bonuses, overtime and allowances, absorbs much of the year-to-year variation in total compensation, which is why we measure freezing on base wages and treat the bonus margin separately in Section 8.",
        "Employment protection is relatively strict for regular workers. Dismissal for managerial reasons is lawful only when there is an urgent business need, an effort to avoid dismissal, a fair selection of the workers concerned and consultation with the workers' representatives. In practice this makes separations of tenured regular workers costly, and firms adjust headcount largely through attrition, hiring freezes, voluntary retirement programmes and the non-renewal of fixed-term contracts. Dismissal rules of this kind are known to influence how firms choose between regular employment and contingent arrangements [25]. For our purposes, the relevant implication is that protection rises with tenure, so that the costs of separating a worker differ across the cells of a single firm.",
        "Three episodes shaped the macroeconomic environment in our sample. The first is the slowdown of 2012–2013 and the restructuring of heavy industries such as shipbuilding and shipping after 2015. The second is the sequence of statutory minimum wage increases in 2018 and 2019, which raised the lower tail of the wage distribution and mechanically reduced the incidence of freezing at the bottom of the pay scale. The third is the pandemic recession of 2020, in which real GDP fell by 0.7 percent and manufacturing employment in our sample by 2.8 percent. The employment retention subsidy introduced that year reduced firms' incentives to dismiss workers, and we discuss its role in Section 9.",
        "Table 1 summarises the environment year by year. The share of firm-years with at least one frozen cell is stable at 36–38 percent in most years, falls to 34 percent in 2018 when minimum wage increases lifted the bottom of the scale, and jumps to 52 percent in 2020 before returning to 37 percent by 2022. The rise in 2020 occurred at a time when inflation was close to zero, a combination under which, as emphasised by earlier work, nominal rigidity binds more tightly because the real cut implied by a nominal freeze is small and firms cannot rely on inflation to erode real wages [2][3][7].",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Macroeconomic environment and incidence of frozen wage cells, 2010–2022",
          columns: ["Year", "Real GDP growth (percent)", "Manufacturing employment growth, sample (percent)", "Firm-years with a frozen cell (percent)"],
          rows: [
            ["2010", "6.8", "1.9", "37"],
            ["2011", "3.7", "2.1", "36"],
            ["2012", "2.4", "0.8", "38"],
            ["2013", "3.2", "0.6", "38"],
            ["2014", "3.2", "1.1", "37"],
            ["2015", "2.8", "0.4", "37"],
            ["2016", "2.9", "−0.5", "37"],
            ["2017", "3.2", "0.3", "38"],
            ["2018", "2.9", "−0.9", "34"],
            ["2019", "2.2", "−0.6", "36"],
            ["2020", "−0.7", "−2.8", "52"],
            ["2021", "4.3", "0.9", "42"],
            ["2022", "2.6", "1.2", "37"],
          ],
          note: "Note: Real GDP growth from national accounts. Employment growth is computed from the estimation sample. A cell is frozen when its median base wage is unchanged in nominal terms from the previous year. The overall incidence across all firm-years is 38 percent.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Evidence for downward nominal wage rigidity comes from several sources. Interviews with managers show that employers regard pay cuts as damaging to morale and as a last resort [1]. Household panel data show a spike at zero nominal wage change and a deficit of cuts in the distribution of wage changes [3][4], and the magnitude of the spike depends on inflation and on the method used to estimate it [5][16]. Payroll data, which are free of the measurement error that plagues survey wages, tell a similar story and indicate that rigidity is concentrated among job stayers and varies with the business cycle [6][14]. Surveys of European firms report that rigidity is related to the share of workers covered by collective agreements and to employment protection [17]. Experimental work confirms that workers reciprocate fair wages with effort and that pay cuts have real consequences [15].",
        "A related literature asks how rigid wages interact with labour-market flows. In search models, rigid wages for newly hired workers amplify unemployment fluctuations [19][22], though subsequent work stresses that it is the wage of new hires, rather than the wage of existing workers, that matters for job creation [20]. Evidence on the cyclicality of new-hire wages is mixed and depends on controlling for match quality [18]. Our setting is complementary: we study the wages of incumbent cells inside the firm and ask whether their rigidity changes the separation of workers in other cells. This is the margin that is missing from models in which all workers are homogeneous.",
        "A second strand estimates how firm-level shocks pass through to workers. Models with firm and worker fixed effects decompose pay into firm and person components [8][9], and recent work shows that rising dispersion between firms accounts for much of the increase in earnings inequality [10]. Firms partially insure their workers against idiosyncratic shocks, with the degree of insurance differing across groups of workers [11]. Our paper turns attention from pass-through to pay towards pass-through to jobs and shows that the groups that are insured by rigid wages are not those that bear the employment adjustment.",
        "A third strand studies the unequal effects of recessions on those at the start of their careers. Graduates who enter the labour market in a recession suffer persistent earnings losses [12][13], and those who are hired in a downturn move to lower-paying firms [18]. The explanation given usually relates to the demand side of the market for entrants, although seniority-based pay profiles make senior workers expensive to retain, since they are paid more than their marginal product late in their careers in contracts of the type analysed by Lazear [21], and the return to tenure itself is large [24]. We provide evidence that a firm's inability to cut nominal wages adds a supply-side margin: it makes the burden of adjustment fall on the workers whose employment is cheapest for the firm to terminate.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a firm that employs workers in two groups, new hires and tenured workers, and that is hit by a negative demand shock that lowers the marginal revenue product of labour in both groups. In the absence of rigidity, the firm would cut wages in both groups until the wage equalled the new marginal product, and the shock would be absorbed by a mixture of lower pay and fewer jobs. Suppose instead that the nominal wage of group g cannot fall. The firm then faces a wage that exceeds the marginal product by an amount that increases with the size of the shock, and it will want to reduce employment in that group.",
        "Two features determine who is dismissed. The first is cost: separating a tenured worker is more expensive than separating a new hire because of statutory protection, severance pay and the loss of firm-specific human capital [24], and the dismissal of tenured workers is further limited by the consultation requirements described in Section 2. The second is the wage gap: the larger the frozen wage relative to the marginal product, the larger the saving from separation. When the wage of new hires is free to adjust (because their cell is not frozen, or because they are on contracts that are renegotiated at entry), the wage gap in that group is zero and their separation rate is determined by cost alone. When the wage of new hires is frozen, the gap is positive, and since separating them is also cheap, they are the first to go.",
        "The framework suggests that the effect of rigidity should depend on where it is located. Rigidity in the cells of tenured workers keeps their wages above the marginal product, but the high cost of dismissing them means that the firm responds with separations at the lower-tenure margin and through hiring freezes. Rigidity in the cells of new hires directly raises their separation rate. In either case the firm's total adjustment need not rise; what changes is its composition, and the firm substitutes separations of new hires for separations of tenured workers. We turn this reasoning into three testable hypotheses.",
        "Hypothesis 1: In firms with a higher share of frozen cells, a negative demand shock raises separation rates of new hires by more than in firms with a lower share. Hypothesis 2: In the same firms, separation rates of tenured workers rise by less, so that the burden of adjustment is redistributed towards new hires, consistent with a last-in-first-out rule. Hypothesis 3: The redistribution should be stronger where seniority wage profiles are steeper and unions are present, because these features raise the value of protecting senior workers, and weaker where flexible pay allows the firm to adjust the compensation of workers without freezing or separating them [11][21].",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-sources",
          heading: "5.1 Linked Employer–Employee Records",
          paragraphs: [
            "We use administrative data that link three sources through a common firm identifier and an encrypted worker identifier: the employment insurance database, which records every worker's hiring and separation dates, monthly insured wage and employer; the corporate tax filings, which report sales, assets and exports; and the annual wage structure survey, which supplies occupation, education and bargaining coverage for a stratified sample of establishments. The linked file covers manufacturing firms with at least 30 employees between 2010 and 2022 and contains 9,860 firms, 96,400 firm-year observations and about 2.3 million distinct workers.",
            "A separation is defined as the end of an employment spell recorded with an exit code that is not a transfer within a corporate group. We distinguish new hires, defined as workers with less than two years of tenure at the start of the year, from mid-tenure workers (two to five years) and tenured workers (five or more years). Separation rates are computed for each firm-year and tenure group as the share of workers present at the start of the year who leave during the year. We also record voluntary and involuntary exits where the exit code allows, which supports the analysis of mechanisms in Section 8.",
            "Table 2 reports summary statistics. The average firm has 214 employees, of whom 18 percent are new hires and 54 percent tenured. Annual separation rates are 31.4 percent for new hires, 14.8 percent for mid-tenure workers and 7.1 percent for tenured workers, the usual gradient with tenure. A quarter of the sample firms have a union; the mean annual base-wage increase is 3.9 percent but with a large mass at zero.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Summary statistics, 2010–2022",
              columns: ["Variable", "Mean", "Std. dev.", "P10", "P90"],
              rows: [
                ["Employees (headcount)", "214", "256", "41", "492"],
                ["Share of new hires (percent)", "18.0", "11.2", "5.1", "34.0"],
                ["Share of tenured workers (percent)", "54.0", "16.8", "31.0", "76.0"],
                ["Separation rate, new hires (percent)", "31.4", "19.3", "9.0", "58.0"],
                ["Separation rate, mid-tenure (percent)", "14.8", "11.0", "3.5", "29.0"],
                ["Separation rate, tenured (percent)", "7.1", "6.4", "0.8", "15.5"],
                ["Wage cells per firm", "11.6", "5.2", "5", "19"],
                ["Frozen-cell share (percent)", "14.2", "17.5", "0.0", "40.0"],
                ["Firms with a union (percent)", "25.0", "", "", ""],
                ["Firm-years with a frozen cell (percent)", "38.0", "", "", ""],
                ["Firms / firm-years", "9,860 / 96,400", "", "", ""],
              ],
              note: "Note: Firm-year observations for manufacturing firms with at least 30 employees. The frozen-cell share is the fraction of a firm's wage cells (occupation by tenure band) whose median base wage is nominally unchanged from the previous year.",
            },
          ],
        },
        {
          id: "data-frozen",
          heading: "5.2 Measuring Frozen Wage Cells",
          paragraphs: [
            "A wage cell is the set of workers in a firm in the same occupation (one of eight groups) and tenure band (under two, two to five, five to ten and over ten years). We drop cells with fewer than five workers, which leaves on average 11.6 cells per firm. For each cell and year we compute the median monthly base wage of workers present in both the current and previous year, and call the cell frozen if the median is exactly unchanged. Using job stayers avoids composition effects that would otherwise create apparent wage changes when workers join or leave. The measure is an exact-zero criterion and therefore captures a stricter form of rigidity than one based on near-zero changes.",
            "The firm-level frozen share is the fraction of cells that are frozen, and the incidence at the firm-year level is an indicator that at least one cell is frozen. The measure used in the analysis of shocks is a predetermined one: the average frozen share of the firm over the two years before the year of the shock. Using the predetermined share avoids the mechanical correlation between a shock and the freezing decision taken in response to it. Table 3 reports how the incidence of freezing differs across types of firm: it is more common among unionised firms and large firms and among cells of tenured workers, where steep seniority scales and bargaining coverage reduce the scope for pay cuts.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Incidence of frozen cells by firm and cell characteristics",
              columns: ["Group", "Firm-years with a frozen cell (percent)", "Frozen-cell share (percent)"],
              rows: [
                ["All firm-years", "38.0", "14.2"],
                ["Unionised firms", "47.5", "19.8"],
                ["Non-unionised firms", "34.7", "12.4"],
                ["Fewer than 100 employees", "31.2", "11.6"],
                ["100–299 employees", "40.3", "15.1"],
                ["300 or more employees", "47.9", "18.0"],
                ["Electronics and machinery", "36.1", "13.5"],
                ["Basic metals and chemicals", "41.7", "16.3"],
                ["Cells: new hires (under two years)", "—", "9.8"],
                ["Cells: mid-tenure (two to five years)", "—", "13.9"],
                ["Cells: tenured (five or more years)", "—", "17.9"],
              ],
              note: "Note: The incidence is the share of firm-years with at least one frozen cell; the frozen-cell share is the average fraction of cells that are frozen. Tenure-group rows refer to the share of cells in that group that are frozen.",
            },
          ],
        },
        {
          id: "data-shocks",
          heading: "5.3 Firm-Specific Demand Shocks",
          paragraphs: [
            "To construct a shock that is exogenous to the firm's wage-setting decisions, we use the export-destination structure recorded in customs data in the first year the firm appears in the sample. For each firm and year we compute the weighted growth in real imports of the firm's base-period destinations in its product category, excluding imports from Korea itself, with the weights being the base-period destination shares. This is a shift-share measure in which the variation comes from foreign demand that the firm cannot influence. We define a negative shock as a year in which the index falls by more than one standard deviation below its firm-specific mean, which happens in 14 percent of firm-years, and we also use the continuous version in the robustness analysis.",
            "The shock is a good predictor of firm outcomes. A negative shock lowers firm sales by 6.3 percent and reduces headcount by 2.1 percent in the same year, and it is almost uncorrelated with the predetermined frozen share (correlation 0.03). The 2020 recession is a source of identifying variation but not the only one, because the shock varies across firms within each year with their export destinations; year fixed effects absorb the aggregate component.",
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
          heading: "6.1 Baseline Specification",
          paragraphs: [
            "Let s(f,g,t) denote the separation rate of tenure group g in firm f and year t. We estimate the triple-difference-style specification s(f,g,t) = α(f,g) + δ(g,t) + β1·Shock(f,t) + β2·Shock(f,t)×HighFrozen(f) + γ·X(f,t) + ε(f,g,t), where HighFrozen is an indicator that the firm's predetermined frozen-cell share is above the sample median, Shock is the negative-shock indicator, α(f,g) are firm-by-tenure-group fixed effects, δ(g,t) are tenure-group-by-year effects and X contains firm size and its interactions with the shock. The coefficient β2 measures how much more the separation rate of group g responds to a negative shock in firms with more frozen cells. Hypothesis 1 predicts that β2 is positive for new hires and Hypothesis 2 that it is negative for tenured workers.",
            "The main effect of HighFrozen is absorbed by the firm fixed effects, so identification comes from comparing how separation rates move within the same firm when the shock arrives, between firms that differ in the predetermined frozen share. We cluster standard errors by firm, which is conservative given that the shock varies at the firm-year level [23]. Estimation is by ordinary least squares on 3 groups × 96,400 firm-years, weighting by initial group headcount.",
          ],
        },
        {
          id: "strategy-identification",
          heading: "6.2 Identification and Threats",
          paragraphs: [
            "The key identifying assumption is that firms with high and low frozen shares would have experienced the same change in separation rates in the absence of the shock, conditional on controls. A first concern is that frozen shares proxy for other firm characteristics that influence separations, such as size, unionisation or pay level. We address this by interacting the shock with deciles of these characteristics, so that β2 is identified from variation in frozen shares among firms that are similar on them. A second concern is that firms with many frozen cells are on different trends. Figure 2 shows the event-study version of the specification, with leads that are statistically indistinguishable from zero.",
            "A third concern is that the shock itself might affect the freezing decision. We therefore use the predetermined share, measured before the shock. A fourth is selection into the sample through firm exit: if the shock causes the failure of the weakest firms with high frozen shares, we will understate the effect. We follow firms to the point of exit and show in Section 9 that results are not sensitive to treating exit as a separation of all remaining workers. A last concern is measurement error in the frozen indicator, which attenuates estimates and so works against our findings.",
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
          id: "results-incidence",
          heading: "7.1 The Incidence and Cyclicality of Frozen Wage Cells",
          paragraphs: [
            "Figure 1 plots the share of firm-years with at least one frozen cell by year, separately for unionised and non-unionised firms. The incidence is persistently high in both groups, between 34 and 38 percent in all years but 2020 and 2021, and always higher among unionised firms. In 2020 it rises to 52 percent overall, and to 63 percent among unionised firms, before falling back as growth recovered and inflation increased in 2021 and 2022. The sharp rise is consistent with the view that nominal rigidity binds most when nominal conditions are weak and demand falls abruptly.",
            "The rise in the incidence of freezing in 2020 was not driven by one industry: the increase was between 12 and 18 percentage points in each two-digit manufacturing sector, with the largest increases in transport equipment and in electronics. Within firms, frozen cells in 2020 were located mainly in the cells of workers with five or more years of tenure, and the freezing of new-hire cells rose by less, a pattern that we return to in Section 8.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Share of firm-years with at least one frozen wage cell, 2010–2022",
              kind: "line",
              xLabels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
              yLabel: "Percent of firm-years",
              series: [
                { name: "All firms", values: [37, 36, 38, 38, 37, 37, 37, 38, 34, 36, 52, 42, 37] },
                { name: "Unionised firms", values: [45, 44, 47, 47, 46, 46, 46, 48, 43, 45, 63, 53, 47] },
                { name: "Non-unionised firms", values: [34, 33, 35, 35, 34, 34, 34, 35, 31, 33, 48, 38, 34] },
              ],
              marker: 9,
              note: "Note: A cell is frozen when its median base wage is unchanged in nominal terms from the previous year. The dashed line marks the onset of the pandemic recession.",
            },
          ],
        },
        {
          id: "results-main",
          heading: "7.2 Separations by Tenure Group",
          paragraphs: [
            "Table 4 reports the baseline estimates. Column (1) shows that a negative shock raises the separation rate of new hires by 4.1 percentage points in firms with a low frozen share. In firms with a high frozen share the increase is 5.6 percentage points larger, a difference that is statistically significant at the 1 percent level and economically large relative to a mean separation rate of 31.4 percent. Column (3) reports the mirror-image result for tenured workers: in firms with more frozen cells, the separation rate of tenured workers rises by 3.2 percentage points less than in other firms, relative to a mean of 7.1 percent and to a rise of 1.9 percentage points in low-frozen firms. Both results support Hypotheses 1 and 2. The coefficient for mid-tenure workers in column (2) is small and statistically insignificant, so that the redistribution is concentrated at the two ends of the tenure distribution.",
            "The pooled result in column (4) shows that the effect on the overall separation rate is small and imprecisely estimated, 0.9 percentage points, because the gain at the bottom of the tenure distribution is largely offset by the loss at the top. The firm-level rigidity therefore changes who leaves more than how many leave. The bottom rows report that the interaction is similar in a specification that uses the continuous frozen share, where a 10 percentage point increase in the share raises new-hire separations by 1.7 percentage points and reduces tenured separations by 0.9 percentage points under a negative shock.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Frozen wage cells and separation rates after negative firm shocks",
              columns: ["", "(1) New hires", "(2) Mid-tenure", "(3) Tenured", "(4) All workers"],
              rows: [
                ["Negative shock", "4.1*** (0.9)", "2.3*** (0.6)", "1.9*** (0.5)", "2.6*** (0.5)"],
                ["Negative shock × high frozen share", "5.6*** (1.3)", "0.7 (0.9)", "−3.2*** (0.8)", "0.9 (0.7)"],
                ["Mean of dependent variable (percent)", "31.4", "14.8", "7.1", "15.6"],
                ["Firm × tenure-group fixed effects", "Yes", "Yes", "Yes", "Yes"],
                ["Tenure-group × year effects", "Yes", "Yes", "Yes", "Yes"],
                ["Shock × size deciles", "Yes", "Yes", "Yes", "Yes"],
                ["Firm-years", "96,400", "96,400", "96,400", "96,400"],
                ["Firms", "9,860", "9,860", "9,860", "9,860"],
                ["Continuous frozen share (per 10 pp), interaction", "1.7*** (0.4)", "0.2 (0.3)", "−0.9*** (0.3)", "0.3 (0.2)"],
              ],
              note: "Note: Dependent variable is the annual separation rate (percent) of the tenure group. High frozen share is an indicator for a predetermined share above the sample median. Standard errors clustered by firm in parentheses. *, **, *** denote significance at the 10, 5 and 1 percent levels.",
            },
          ],
        },
        {
          id: "results-dynamics",
          heading: "7.3 Event-Study Evidence",
          paragraphs: [
            "Figure 2 shows the difference in separation rates between high-frozen and low-frozen firms, by event time relative to the first year of a negative shock, for new hires and for tenured workers. Before the shock the differences are close to zero and statistically insignificant for both groups, which supports the parallel-trends assumption. In the year of the shock, new-hire separations in high-frozen firms jump by 3.9 percentage points relative to low-frozen firms and the gap reaches 5.6 percentage points by the second year, while tenured separations fall to 3.2 percentage points below. The gaps then narrow gradually, as wage cells are unfrozen and workers who would have been separated leave.",
            "The timing is informative about the mechanism. The divergence emerges within a year of the shock, which suggests that firms respond rapidly through separations rather than gradually through attrition, and it persists for three years. The persistence is consistent with the slow thawing of frozen cells that we document in Section 8, and with the view that the firm needs to remove the wage gap by shedding workers in the cells whose wages are frozen.",
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Event study: difference in separation rates between high- and low-frozen-share firms around a negative shock",
              kind: "line",
              xLabels: ["−3", "−2", "−1", "0", "1", "2", "3"],
              yLabel: "Percentage points",
              series: [
                {
                  name: "New hires",
                  values: [0.3, -0.2, 0.0, 3.9, 5.6, 4.4, 2.8],
                  lower: [-1.5, -2.0, 0.0, 1.5, 3.1, 1.9, 0.2],
                  upper: [2.1, 1.6, 0.0, 6.3, 8.1, 6.9, 5.4],
                },
                {
                  name: "Tenured workers",
                  values: [-0.2, 0.1, 0.0, -2.1, -3.2, -2.5, -1.4],
                  lower: [-1.6, -1.3, 0.0, -3.6, -4.8, -4.1, -3.0],
                  upper: [1.2, 1.5, 0.0, -0.6, -1.6, -0.9, 0.2],
                },
              ],
              marker: 2,
              note: "Note: Coefficients on the interaction between high frozen share and event time, with 95 percent confidence intervals; event time −1 is the omitted category. The dashed line marks the year before the shock.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "The framework in Section 4 predicts that the redistribution should be strongest where protecting senior workers is most valuable and where other margins of adjustment are not available. Table 5 splits the sample along four dimensions. Panel A shows that the effect on new hires is more than twice as large in unionised firms (8.3 percentage points) as in non-unionised firms (3.7 percentage points), and that the offsetting effect for tenured workers is similarly larger (−5.1 against −2.0). Unions increase the cost of dismissing tenured workers and strengthen opposition to pay cuts, which are the two channels through which the framework produces a last-in-first-out rule.",
        "Panel B compares firms with steep and flat seniority wage profiles, as measured by the predicted wage gap between a worker with ten years of tenure and a new hire. In firms with steep profiles the new-hire interaction is 7.4 and the tenured interaction is −4.4 percentage points; in firms with flat profiles the corresponding estimates are 3.1 and −1.4. This is the pattern implied by contracts in which senior workers are paid more than their current marginal product [21] and in which tenure is valuable because of accumulated specific capital [24]. It also suggests that the rule is not a statement about worker characteristics but about the compensation structure of the firm.",
        "Panel C examines flexible pay. Where bonuses account for more than 20 percent of total compensation, the firm can adjust labour costs without freezing or separating workers, and the redistribution is much weaker (new hires 2.2, tenured −0.8, the latter insignificant). This corroborates earlier evidence that firms use variable pay components to insure workers and to absorb shocks [11], and suggests that the rigidity of base pay matters most when it is not offset by other components. Panel D distinguishes voluntary from involuntary exits: the additional separations of new hires in high-frozen firms are mostly involuntary (4.4 of 5.6 percentage points), while the reduction among tenured workers is mostly in voluntary exits, which fall when firms stop offering voluntary retirement packages and when workers see fewer outside options.",
        "Frozen wages also affect other margins of adjustment, summarised at the bottom of Table 5. Under a negative shock, firms with high frozen shares reduce hiring by 3.5 percentage points more, in line with models in which rigid wages dampen job creation [19][20], and they are 4.6 percentage points more likely to cut working hours of tenured workers, which suggests that hours substitute for wage cuts. They do not differ in their propensity to move workers across establishments. Taken together, the results indicate that rigid wages push firms to adjust at the margins where adjustment costs are lowest: they shed new hires, freeze hiring and reduce hours.",
        "We also explore why freezing is more common in the cells of tenured workers (Table 3) and what happens to frozen cells after a shock. Following a negative shock, a frozen cell in the same firm is 11 percentage points more likely to remain frozen in the following year than a non-frozen cell is to become frozen, indicating persistence, consistent with reference-point wage setting in which employers fear that cuts will be difficult to reverse [1][15]. In the data, only 9 percent of the frozen cells in the year of the shock record a nominal cut the next year, a value that illustrates how rare reductions in base pay are even in a deep recession.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Heterogeneity and other margins of adjustment (interaction of negative shock with high frozen share)",
          columns: ["Sample / outcome", "New hires", "Tenured workers", "Observations"],
          rows: [
            ["A. Union: unionised firms", "8.3*** (2.1)", "−5.1*** (1.5)", "24,100"],
            ["A. Union: non-unionised firms", "3.7*** (1.4)", "−2.0** (0.9)", "72,300"],
            ["B. Seniority profile: steep", "7.4*** (1.9)", "−4.4*** (1.3)", "48,200"],
            ["B. Seniority profile: flat", "3.1** (1.5)", "−1.4 (1.0)", "48,200"],
            ["C. Bonus share above 20 percent", "2.2 (1.8)", "−0.8 (1.2)", "31,600"],
            ["C. Bonus share at most 20 percent", "6.5*** (1.5)", "−3.9*** (0.9)", "64,800"],
            ["D. Involuntary separations", "4.4*** (1.0)", "−0.8 (0.6)", "96,400"],
            ["D. Voluntary separations", "1.2* (0.7)", "−2.4*** (0.7)", "96,400"],
            ["Hiring rate (all workers)", "−3.5*** (1.0)", "", "96,400"],
            ["Hours cut for tenured workers (probability)", "", "4.6*** (1.5)", "96,400"],
          ],
          note: "Note: Each cell is the coefficient on Negative shock × High frozen share from the baseline specification estimated on the indicated subsample or outcome (percentage points). Standard errors clustered by firm in parentheses. *, **, *** denote significance at the 10, 5 and 1 percent levels.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 summarises a set of robustness checks. Row 1 repeats the baseline. Row 2 replaces the shock indicator with the continuous export-demand index and obtains an interaction of 0.9 for new hires and −0.5 for tenured workers per standard deviation. Row 3 changes the definition of freezing to a near-zero criterion, a wage change of less than 0.5 percent in absolute value, and Row 4 uses only cells with at least ten workers, which reduces the risk of spurious zeros in small cells; both leave the signs and approximate magnitudes unchanged.",
        "Row 5 excludes 2020 and 2021 so that the results do not depend on the pandemic, with estimates of 5.0 and −2.7 percentage points. Row 6 excludes firms that receive the employment retention subsidy, which lowered the cost of retaining workers and could itself interact with the frozen share; the estimates are 5.3 and −3.0. Row 7 treats the exit of the firm as a separation of all workers, with 5.9 and −2.8. Row 8 adds the interaction of the shock with the firm's wage level, productivity and debt ratio, and Row 9 uses the average frozen share over the previous three years rather than two; neither changes our conclusions.",
        "Row 10 provides a placebo test in which we assign each firm a shock from another firm of the same size class and industry. The placebo interactions are close to zero (0.3 and −0.2) and insignificant. Finally, because the average firm has multiple tenure groups, a concern is that standard errors may be too small if the shock is correlated across the firms of the same industry; clustering by industry-year instead of firm leaves the interactions significant at the 5 percent level.",
        "A remaining concern is that the frozen share is measured with the median wage of stayers and might therefore reflect composition, for instance if a firm replaces a senior worker with a junior one. We address this by recomputing the freezing indicator on workers observed in the firm for at least three consecutive years, with similar results (5.4 and −3.1). We also verify that our conclusions are unchanged if the sample is restricted to firms appearing in at least eight years, so that they are not driven by the entry and exit of small firms.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the interaction of negative shock with high frozen share",
          columns: ["Specification", "New hires", "Tenured workers"],
          rows: [
            ["1. Baseline", "5.6*** (1.3)", "−3.2*** (0.8)"],
            ["2. Continuous shock index (per s.d.)", "0.9*** (0.3)", "−0.5** (0.2)"],
            ["3. Near-zero freezing criterion (|change| < 0.5 percent)", "4.8*** (1.2)", "−2.8*** (0.8)"],
            ["4. Cells with at least ten workers", "6.1*** (1.6)", "−3.4*** (1.0)"],
            ["5. Excluding 2020–2021", "5.0*** (1.5)", "−2.7*** (0.9)"],
            ["6. Excluding retention-subsidy recipients", "5.3*** (1.4)", "−3.0*** (0.9)"],
            ["7. Firm exit counted as separation", "5.9*** (1.3)", "−2.8*** (0.8)"],
            ["8. Additional shock interactions", "5.1*** (1.4)", "−2.9*** (0.9)"],
            ["9. Three-year predetermined share", "5.7*** (1.4)", "−3.3*** (0.8)"],
            ["10. Placebo shock", "0.3 (1.1)", "−0.2 (0.7)"],
          ],
          note: "Note: Each row reports the coefficient on Negative shock × High frozen share (percentage points) for separation rates of new hires and tenured workers. Standard errors clustered by firm in parentheses. *, **, *** denote significance at the 10, 5 and 1 percent levels.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "The results show that nominal wage rigidity is not just a macroeconomic friction but a source of inequality within the firm. When a shock arrives, rigidity in the wage scale does not simply raise the total number of jobs lost; it determines which jobs are lost. Because new hires are cheaper to separate than tenured workers, and because tenured workers are protected by statute, bargaining and the value of accumulated specific capital, the burden of adjustment falls on those with the shortest tenure. The 5.6 percentage point increase in new-hire separations relative to a baseline of 31.4 percent represents an increase of 18 percent, while the 3.2 percentage point reduction in tenured separations is 45 percent of the baseline rate of 7.1 percent.",
        "This has implications for the interpretation of aggregate evidence. Studies that analyse the effect of rigidity on total employment may find small effects because the redistribution within firms offsets itself in the aggregate, as in column (4) of Table 4. For workers, however, the effects are far from small: entrants and young workers bear separation risk that is correlated with the freezing of the wage scale, and previous research shows that early-career shocks leave lasting scars [12][13]. The mechanism we document may therefore contribute to the persistent disadvantage of those who enter the labour market in a downturn, and it provides a firm-level explanation for the finding that the wages and employment of entrants are more cyclical than those of incumbents [18].",
        "For policy, three implications follow. First, measures that raise the flexibility of compensation without cutting base pay, such as higher shares of performance-related pay or wage-adjustment agreements that are conditional on firm performance, would allow firms to share adjustment more evenly across worker groups, as suggested by the muted effects where bonuses are large (Table 5). Second, retention subsidies and short-time work schemes help most when they are available to the firms in which freezing is concentrated and when they cover new hires as well as tenured workers; schemes that condition eligibility on tenure risk reinforcing the last-in-first-out rule. Third, the minimum wage increases in 2018–2019 reduced the incidence of freezing in the lower part of the pay scale, which suggests that policy-induced wage growth can loosen the rigidity of the lowest cells, though its effect on employment is a separate question.",
        "The results should be read with several limitations in mind. The data cover manufacturing firms with at least 30 employees, and the pattern may differ for services and for small firms, in which wage setting is more individualised. The frozen-cell indicator captures base wages and not total compensation; as Table 5 shows, firms with flexible pay respond differently. The identification rests on export-demand shocks, which affect mainly the firms oriented towards foreign markets, so that the results are less informative about adjustment to purely domestic shocks. Finally, we do not observe the destination of separated workers, so we cannot assess the welfare consequences of the redistribution without further evidence on re-employment.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Using administrative linked employer–employee data for Korean manufacturing firms between 2010 and 2022, we documented that nominal wage freezes are pervasive, with about 38 percent of firm-years containing at least one frozen wage cell and a sharp rise in 2020, and showed that they shape the allocation of employment adjustment across worker groups. Exploiting firm-specific export-demand shocks, we found that firms with a higher share of frozen cells have 5.6 percentage points greater separation rates among new hires and 3.2 percentage points lower separations among tenured workers, a pattern consistent with a last-in-first-out rule.",
        "The results are strongest in unionised firms and in firms with steep seniority profiles and are weak where flexible pay allows adjustment through bonuses. They are robust to alternative definitions of freezing, to excluding the pandemic years and to a placebo test. The overall conclusion is that nominal rigidities redistribute the burden of adjustment across worker groups, shifting it towards those with the least protection. Future research should link separated workers to their subsequent employment records to quantify the welfare costs of this redistribution and should examine whether the pattern holds in service industries and in other institutional settings with different dismissal rules.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Variable Construction",
      paragraphs: [
        "Wage cells. Each worker-year is assigned to a cell defined by firm, one of eight occupation groups and one of four tenure bands, using the occupation code in the wage structure survey where available and the code recorded in the employment insurance database otherwise. Cells with fewer than five workers present in both years are dropped. The median monthly base wage is computed from the insured wage after removing overtime and bonuses using the survey's components, and for firms outside the survey from the ratio of base to total pay in the matched establishment stratum.",
        "Frozen-cell share. A cell is frozen in year t if its median base wage among workers present in years t−1 and t equals its value in t−1 in nominal won. The firm-year incidence is an indicator that at least one cell is frozen; the frozen share is the unweighted fraction of the firm's cells that are frozen. The predetermined share used in the main analysis is the mean of the shares in t−1 and t−2, and HighFrozen is an indicator that this share exceeds its sample median of 8.3 percent.",
        "Separations and tenure groups. Tenure is measured at the start of the year using the first recorded hiring date with the employer, with re-hires within 90 days treated as continuous spells. A separation is an exit with a code other than intra-group transfer, death or retirement at the mandatory age. Separation rates are computed on workers present in January and weighted by the initial headcount of the group in the regression.",
        "Export-demand shock. For firm f in product category k, the shock is the log change in real imports of the firm's base-period destination markets in category k, excluding imports from Korea, weighted by the firm's base-period export shares. A negative shock is an observation in which the index is more than one standard deviation below the firm's mean; this occurs in 14 percent of firm-years. Firms with no exports in the base period are assigned the industry-level shock and are included in the sample, and excluding them leaves the results unchanged.",
      ],
    },
  ],
};
