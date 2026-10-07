// Vol. 29, No. 2 (April 2024) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2024-v29-i2-01",
  acknowledgments:
    "We thank seminar participants at Hanyang University, the Korea Labor Institute and the Bank of Korea, two anonymous referees and the handling Co-Editor for helpful comments. We are grateful to the survey company's project team for their careful implementation of the experiment. The views expressed are our own and do not necessarily reflect those of the Korea Labor Institute. All errors are our own.",
  dataAvailability:
    "The anonymised survey data, the full questionnaire (in Korean and English translation), the pre-analysis plan and replication code are available from the corresponding author. Official inflation statistics are published by Statistics Korea, and the Consumer Survey expectations series is published by the Bank of Korea.",
  editorialNote:
    "Sungho Park and Ji-Yeon Park embed a randomised information experiment in a survey of 4,200 Korean households and find that a 1 percentage point increase in short-run inflation expectations raises intended durable-goods spending by 4.6 percentage points, an effect driven entirely by liquidity-unconstrained households (7.1 points) with no detectable response among constrained households.",
  refs: [
    /* 1 */ "Coibion, O., Gorodnichenko, Y., & Weber, M. (2022). Monetary policy communications and their effects on household inflation expectations. Journal of Political Economy, 130(6), 1537–1584.",
    /* 2 */ "Coibion, O., Georgarakos, D., Gorodnichenko, Y., & van Rooij, M. (2023). How does consumption respond to news about inflation? Field evidence from a randomized control trial. American Economic Journal: Macroeconomics, 15(3), 109–152.",
    /* 3 */ "Bachmann, R., Berg, T. O., & Sims, E. R. (2015). Inflation expectations and readiness to spend: Cross-sectional evidence. American Economic Journal: Economic Policy, 7(1), 1–35.",
    /* 4 */ "D'Acunto, F., Hoang, D., & Weber, M. (2022). Managing households' expectations with unconventional policies. Review of Financial Studies, 35(4), 1597–1642.",
    /* 5 */ "Armantier, O., Bruine de Bruin, W., Topa, G., van der Klaauw, W., & Zafar, B. (2015). Inflation expectations and behavior: Do survey respondents act on their beliefs? International Economic Review, 56(2), 505–536.",
    /* 6 */ "Armantier, O., Nelson, S., Topa, G., van der Klaauw, W., & Zafar, B. (2016). The price is right: Updating inflation expectations in a randomized price information experiment. Review of Economics and Statistics, 98(3), 503–523.",
    /* 7 */ "Cavallo, A., Cruces, G., & Perez-Truglia, R. (2017). Inflation expectations, learning, and supermarket prices: Evidence from survey experiments. American Economic Journal: Macroeconomics, 9(3), 1–35.",
    /* 8 */ "Coibion, O., Gorodnichenko, Y., & Kumar, S. (2018). How do firms form their expectations? New survey evidence. American Economic Review, 108(9), 2671–2713.",
    /* 9 */ "Coibion, O., Gorodnichenko, Y., & Ropele, T. (2020). Inflation expectations and firm decisions: New causal evidence. Quarterly Journal of Economics, 135(1), 165–219.",
    /* 10 */ "Haaland, I., Roth, C., & Wohlfart, J. (2023). Designing information provision experiments. Journal of Economic Literature, 61(1), 3–40.",
    /* 11 */ "Roth, C., & Wohlfart, J. (2020). How do expectations about the macroeconomy affect personal expectations and behavior? Review of Economics and Statistics, 102(4), 731–748.",
    /* 12 */ "Kaplan, G., & Violante, G. L. (2014). A model of the consumption response to fiscal stimulus payments. Econometrica, 82(4), 1199–1239.",
    /* 13 */ "Kaplan, G., Moll, B., & Violante, G. L. (2018). Monetary policy according to HANK. American Economic Review, 108(3), 697–743.",
    /* 14 */ "Zeldes, S. P. (1989). Consumption and liquidity constraints: An empirical investigation. Journal of Political Economy, 97(2), 305–346.",
    /* 15 */ "Malmendier, U., & Nagel, S. (2016). Learning from inflation experiences. Quarterly Journal of Economics, 131(1), 53–87.",
    /* 16 */ "D'Acunto, F., Malmendier, U., Ospina, J., & Weber, M. (2021). Exposure to grocery prices and inflation expectations. Journal of Political Economy, 129(5), 1615–1639.",
    /* 17 */ "Binder, C. C. (2017). Measuring uncertainty based on rounding: New method and application to inflation expectations. Journal of Monetary Economics, 90, 1–12.",
    /* 18 */ "Burke, M. A., & Ozdagli, A. (2023). Household inflation expectations and consumer spending: Evidence from panel data. Review of Economics and Statistics, 105(4), 948–961.",
    /* 19 */ "Eggertsson, G. B., & Woodford, M. (2003). The zero bound on interest rates and optimal monetary policy. Brookings Papers on Economic Activity, 2003(1), 139–211.",
    /* 20 */ "Blinder, A. S., Ehrmann, M., Fratzscher, M., De Haan, J., & Jansen, D.-J. (2008). Central bank communication and monetary policy: A survey of theory and evidence. Journal of Economic Literature, 46(4), 910–945.",
    /* 21 */ "Weber, M., D'Acunto, F., Gorodnichenko, Y., & Coibion, O. (2022). The subjective inflation expectations of households and firms: Measurement, determinants, and implications. Journal of Economic Perspectives, 36(3), 157–184.",
    /* 22 */ "Ichiue, H., & Nishiguchi, S. (2015). Inflation expectations and consumer spending at the zero bound: Micro evidence. Economic Inquiry, 53(2), 1086–1107.",
    /* 23 */ "Jappelli, T., & Pistaferri, L. (2010). The consumption response to income changes. Annual Review of Economics, 2, 479–506.",
    /* 24 */ "Manski, C. F. (2004). Measuring expectations. Econometrica, 72(5), 1329–1376.",
    /* 25 */ "Mankiw, N. G., Reis, R., & Wolfers, J. (2003). Disagreement about inflation expectations. NBER Macroeconomics Annual, 18, 209–248.",
    /* 26 */ { jer: "2023-v28-i1-04" },
    /* 27 */ "Anderson, M. L. (2008). Multiple inference and gender differences in the effects of early intervention: A reevaluation of the Abecedarian, Perry Preschool, and Early Training Projects. Journal of the American Statistical Association, 103(484), 1481–1495.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Central banks devote considerable effort to managing the inflation expectations of households. The premise behind forward guidance, inflation targeting and much of modern central-bank communication is that expectations matter for behaviour: if households expect higher inflation while nominal interest rates are held fixed, the perceived real interest rate falls and households should bring spending forward [19][20]. Whether households actually behave this way is, however, an open empirical question. Survey evidence on the link between expectations and spending is mixed, and correlations in observational data are hard to interpret because expectations and spending plans respond jointly to income news, price shocks and personal circumstances [3][18][21].",
        "This paper provides causal evidence for Korea. We embed a randomised information experiment in a survey of 4,200 Korean households fielded in November 2022, when consumer-price inflation had just passed its highest level in a quarter of a century and the Bank of Korea was in the middle of its fastest tightening cycle since the adoption of inflation targeting. After eliciting each respondent's prior expectation of inflation over the next twelve months, we randomly assign households to a control group or to one of three information treatments that present different, accurate statistics on inflation. Because the treatments move expectations in different directions and by different amounts for different respondents, random assignment provides instruments for posterior inflation expectations that are, by construction, unrelated to households' income, wealth and personal outlook.",
        "Our main finding is that a 1 percentage point increase in inflation expectations raises intended durable-goods spending — the probability that a household plans to buy a car, a major appliance, furniture or electronics within the next twelve months — by 4.6 percentage points. The response is consistent with an intertemporal-substitution channel: households that come to expect higher inflation also report lower expected real interest rates and a stronger belief that it is a good time to buy durables, while their expectations of their own real income do not improve. The effect on non-durable spending is small and statistically insignificant, as standard theory predicts for goods whose purchase is hard to shift in time.",
        "The average effect conceals sharp heterogeneity. Classifying households by whether they hold enough liquid assets to cover three months of expenses or report having been refused credit, we find that the entire response is driven by liquidity-unconstrained households, among whom a 1 percentage point increase in expectations raises intended durable spending by 7.1 percentage points. Among liquidity-constrained households — 38 percent of the sample — the estimated response is 0.6 percentage points and statistically indistinguishable from zero. Constrained households update their expectations as much as unconstrained ones; they simply cannot act on them. A three-month follow-up shows that the intentions translate partly into actual purchases.",
        "The paper contributes to three literatures. First, it adds to a growing body of randomised information experiments on expectations and behaviour [1][2][4][9][10], and provides the first such evidence for an East Asian economy in a high-inflation environment with an active policy rate. Second, it connects the expectations literature to heterogeneous-agent models of monetary transmission, in which the distribution of liquid wealth governs how households respond to changes in real interest rates [12][13]. Third, it informs the debate on central-bank communication: our results suggest that communication can move spending, but that its effects are concentrated among households with financial slack, so that the macroeconomic potency of communication depends on the distribution of liquidity.",
        "The rest of the paper proceeds as follows. Section 2 describes the Korean inflation episode and the Bank of Korea's communication. Section 3 reviews related literature and Section 4 sets out a simple framework and our hypotheses. Sections 5 and 6 describe the survey and the empirical strategy. Section 7 presents the main results, Section 8 examines mechanisms and heterogeneity, and Section 9 reports robustness checks. Section 10 discusses implications for policy and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korea adopted inflation targeting in 1998, and since 2016 the Bank of Korea has pursued a target of 2 percent consumer-price inflation. For most of the 2010s inflation ran below target, averaging about 1.3 percent between 2013 and 2020, and household inflation expectations drifted down with it. The pandemic reversed this pattern. As global energy and food prices surged and the won depreciated, consumer-price inflation rose from 0.5 percent in 2020 to 2.5 percent in 2021 and peaked at 6.3 percent in July 2022, the highest rate since 1998. In November 2022, when our survey was fielded, the annual rate stood at 5.0 percent, and food prices were rising faster still.",
        "The Bank of Korea responded earlier than most advanced-economy central banks. It began raising its base rate from 0.50 percent in August 2021, delivered its first-ever 50-basis-point increase in July 2022 and raised the rate to 3.25 percent on 24 November 2022, during our fieldwork. Throughout the episode the Bank emphasised communication: the Governor's press conferences repeatedly referred to the risk that elevated expectations would become entrenched, and the Bank's quarterly forecasts projected that inflation would decline towards 3.6 percent in 2023. Household expectations, measured by the Bank's monthly Consumer Survey, rose from about 2 percent in early 2021 to a peak of 4.7 percent in July 2022 and remained above 4 percent at the end of the year.",
        "These features make Korea a useful setting for an information experiment. Inflation was salient and widely discussed, so information treatments were credible and relevant. Official statistics on headline and food inflation and the Bank's own forecasts differed substantially, so different accurate treatments could move expectations in opposite directions. And because policy rates were rising, the experiment speaks to the effect of expectations when nominal rates are not constrained by a lower bound — a setting less studied than the zero-lower-bound episodes in Japan and the euro area [4][22].",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Observational studies of the link between inflation expectations and spending reach mixed conclusions. {3} find that higher expected inflation is associated with a lower, not higher, readiness to buy durables in the Michigan Survey of Consumers, which they attribute to households associating inflation with bad economic times. {18} find little relationship between expectations and actual spending in U.S. panel data. In contrast, {22} find that Japanese households expecting higher inflation increased their spending at the zero lower bound, and {4} show that an announced increase in the German value-added tax raised durable spending among households who expected it to raise prices.",
        "Because observational correlations may reflect omitted factors, recent work uses randomised information treatments to generate exogenous variation in expectations [10]. {5} show that survey respondents' inflation expectations predict their choices in a financially incentivised investment task, suggesting that reported beliefs are meaningful. {6} and {7} show that households update their expectations in response to accurate information about prices, and more so when their priors are less precise. {1} show that information about the Federal Reserve's target and recent inflation shifts U.S. household expectations, while plain-language communication is more effective than technical statements. Turning to behaviour, Building on evidence that firms' expectations are also dispersed and poorly anchored [8], {9} find that Italian firms receiving information that raises their expectations reduce employment and investment, and {2} find that Dutch households induced to expect higher inflation reduce durable spending in the following months. The latter result runs counter to the intertemporal-substitution logic and has been interpreted as evidence of a stagflationary interpretation of inflation news. {11} show that macroeconomic expectations spill over to personal income expectations, an important channel for interpreting such responses.",
        "Our work also relates to research on how expectations are formed. Households' expectations are dispersed and biased upwards relative to realised inflation [21][25], depend on lifetime experiences [15] and on the prices of goods they purchase frequently, such as groceries [16], and are reported with considerable rounding that signals uncertainty [17]. Finally, we draw on the literature on liquidity constraints and consumption [12][14][23]. Heterogeneous-agent models imply that households holding little liquid wealth respond strongly to income changes but weakly to changes in real interest rates, because they are at a corner of their intertemporal problem [13]. Our results provide experimental evidence for this prediction in the context of expectations. Closer to home, earlier work in this journal shows that survey expectations are among the most informative predictors of Korean inflation {26}, which underscores why their behavioural consequences matter.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a household that chooses non-durable consumption and the timing of a durable purchase to maximise expected lifetime utility. With a nominal interest rate i set by the central bank and expected inflation πᵉ, the household's perceived real interest rate is r = i − πᵉ. In the standard Euler equation, a fall in r makes future consumption relatively more expensive and induces the household to consume more today. For durable goods the effect is amplified: because the service flow of a durable is spread over many periods, a small change in the relative price of buying today versus next year has a large effect on the optimal timing of the purchase. Holding i fixed, an increase in πᵉ therefore raises the probability that a household brings forward a planned durable purchase.",
        "Three caveats qualify this prediction. First, households may not perceive nominal rates as fixed: if they expect the central bank to raise rates in response to higher inflation, the perceived real rate may fall by less than one for one. Second, households may interpret higher inflation as a signal of worse economic conditions and lower real income, which reduces spending through an income effect [3][11]. Third, households at a borrowing or liquidity constraint cannot shift consumption forward in response to a lower real rate, because doing so would require borrowing or drawing down liquid wealth they do not have [13][14]. For these households the Euler equation does not hold with equality, and the intertemporal-substitution channel is shut off.",
        "These considerations yield three hypotheses. H1: exogenous increases in inflation expectations raise intended durable-goods spending. H2: the effect operates through lower perceived real interest rates rather than through changes in expected real income. H3: the effect is concentrated among liquidity-unconstrained households, and constrained households show little or no response even though their expectations move by a similar amount. We registered these hypotheses, together with the main specifications and the definition of liquidity constraints, in a pre-analysis plan before the survey was fielded.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "This section describes the survey, the experimental design and the outcome measures.",
      ],
      subsections: [
        {
          id: "data-survey",
          heading: "5.1 The survey",
          paragraphs: [
            "The survey was administered online by a major Korean survey company between 14 and 30 November 2022 to members of its probability-recruited household panel. Quotas on region, age, sex and household income ensured that the sample matches the distribution of household heads in the 2020 Census, and we use post-stratification weights in all estimates. Respondents were the household member primarily responsible for financial decisions. Of 5,133 panel members who began the survey, 4,200 completed it and passed two attention checks; these form our analysis sample. Median completion time was 16 minutes.",
            "The questionnaire had four parts. The first collected demographic information, household income, assets and debts, and recent experiences with credit. The second elicited prior expectations of inflation over the next twelve months, first as a point forecast and then as a probability distribution over ten bins, following {24}. The third presented the information treatment, if any. The fourth elicited posterior expectations, using a differently worded question to reduce anchoring, together with spending plans, interest-rate expectations and expectations of own income.",
            "Table 1 reports summary statistics. The average respondent is 49 years old, 47 percent are women and 41 percent hold a university degree. Median monthly household income is KRW 4.6 million. Prior inflation expectations average 4.9 percent with a standard deviation of 2.8 percentage points, close to the 4.2 percent reported in the Bank of Korea's Consumer Survey for the same month once differences in question wording are taken into account. Thirty-one percent of households planned a durable purchase in the next twelve months before any treatment. Characteristics are balanced across treatment arms: none of the differences is statistically significant, and a joint test of equality across arms does not reject (p = 0.62).",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Summary statistics and balance across treatment arms",
              columns: ["Variable", "Control", "T1: Headline CPI", "T2: Food prices", "T3: BoK forecast", "p-value (equality)"],
              rows: [
                ["Age (years)", "48.9", "49.3", "48.6", "49.1", "0.71"],
                ["Female (share)", "0.47", "0.46", "0.48", "0.47", "0.84"],
                ["University degree (share)", "0.41", "0.42", "0.40", "0.41", "0.77"],
                ["Monthly household income (KRW million)", "5.12", "5.08", "5.17", "5.05", "0.69"],
                ["Homeowner (share)", "0.58", "0.59", "0.57", "0.58", "0.88"],
                ["Liquidity-constrained (share)", "0.38", "0.37", "0.39", "0.38", "0.81"],
                ["Prior inflation expectation (%)", "4.92", "4.88", "4.95", "4.90", "0.93"],
                ["Prior uncertainty (s.d. of bins, pp)", "1.84", "1.81", "1.87", "1.83", "0.58"],
                ["Planned durable purchase, prior (share)", "0.31", "0.30", "0.32", "0.31", "0.66"],
                ["Observations", "1,052", "1,048", "1,051", "1,049", ""],
              ],
              note: "Note: Weighted means by treatment arm. The last column reports the p-value of an F-test that the means are equal across the four arms. A household is liquidity-constrained if its liquid assets (deposits, savings accounts and listed securities) are less than three months of household expenses or it reports having been refused credit, or discouraged from applying, in the past twelve months. A joint test across all covariates yields p = 0.62.",
            },
          ],
        },
        {
          id: "data-treatments",
          heading: "5.2 Information treatments",
          paragraphs: [
            "Households were randomly assigned with equal probability to a control group or one of three treatments. Treatment 1 (T1) told respondents that consumer prices had risen by 5.7 percent in the twelve months to October 2022, the latest official figure at the time. Treatment 2 (T2) told them that prices of food and non-alcoholic beverages had risen by 7.6 percent over the same period. Treatment 3 (T3) told them that the Bank of Korea forecast inflation of 3.6 percent for 2023. All statements were accurate and attributed to Statistics Korea or the Bank of Korea, and each was presented on a separate screen with a simple chart. The control group received no information.",
            "Because priors were dispersed around a mean of 4.9 percent, the treatments imply signals above the prior for some respondents and below it for others. T2, which emphasises the most salient and rapidly rising prices [16], is above the prior for 73 percent of respondents; T3 is below the prior for 64 percent. This variation in the direction and size of the news is what identifies the effect of expectations on behaviour.",
          ],
        },
        {
          id: "data-outcomes",
          heading: "5.3 Outcome measures",
          paragraphs: [
            "Our primary outcome is intended durable-goods spending: an indicator, scaled to 0–100, equal to 100 if the household reports that it plans to buy at least one of a car, a major household appliance, furniture or consumer electronics costing more than KRW 500,000 within the next twelve months. Secondary outcomes are the planned change in monthly non-durable spending (in percent), the planned change in monthly saving, the expected one-year deposit interest rate, the perceived real interest rate (expected deposit rate minus posterior inflation expectation), expectations of own nominal income growth and the share of respondents agreeing that 'now is a good time to buy major household items'.",
            "Three months after the main survey, in late February 2023, we re-contacted all respondents. Of these, 2,870 (68 percent) completed a short follow-up that asked about actual durable purchases since November and re-elicited inflation expectations. Attrition is unrelated to treatment assignment (p = 0.47) and to the interaction of treatment with prior expectations (p = 0.39).",
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our approach follows the design of recent information experiments [1][2][9]: we use random assignment to treatments, interacted with prior beliefs, as instruments for posterior expectations.",
      ],
      subsections: [
        {
          id: "strategy-first",
          heading: "6.1 First stage: belief updating",
          paragraphs: [
            "Let πᵖʳⁱᵒʳ and πᵖᵒˢᵗ denote household i's prior and posterior twelve-month inflation expectations and Tᵢᵏ an indicator for assignment to treatment k. In a Bayesian learning model, the posterior is a weighted average of the prior and the signal sᵏ, with the weight on the signal depending on the relative precision of the two. We therefore estimate πᵖᵒˢᵗ = α + β πᵖʳⁱᵒʳ + Σₖ γₖ Tᵢᵏ + Σₖ δₖ Tᵢᵏ × πᵖʳⁱᵒʳ + X′θ + ε, where X contains the demographic and financial controls in Table 1. The coefficients δₖ measure how much treated households reduce the weight on their prior; with full updating, δₖ would equal −β.",
          ],
        },
        {
          id: "strategy-second",
          heading: "6.2 Second stage: spending decisions",
          paragraphs: [
            "The second stage relates outcomes to posterior expectations: yᵢ = a + b πᵖᵒˢᵗ + c πᵖʳⁱᵒʳ + X′φ + u. We instrument πᵖᵒˢᵗ with the six treatment indicators and their interactions with the prior. Controlling for the prior ensures that identification comes only from the exogenous shift in beliefs induced by the treatments, and not from cross-sectional variation in expectations that may be correlated with unobserved household circumstances. The coefficient b is the effect of a 1 percentage point increase in expected inflation on the outcome; for intended durable spending, measured on a 0–100 scale, it is expressed in percentage points.",
            "The exclusion restriction requires that the information affects spending plans only through inflation expectations. This would fail if, for example, the Bank of Korea forecast also changed households' expectations of economic growth. We assess this concern by estimating effects on expectations of own income and unemployment, and by showing that results are similar when we use each treatment separately. We report heteroskedasticity-robust standard errors and, for families of secondary outcomes, sharpened q-values that control the false discovery rate [27].",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We first show that the treatments moved expectations, then estimate their effects on spending plans, and finally examine actual purchases in the follow-up survey.",
      ],
      subsections: [
        {
          id: "results-updating",
          heading: "7.1 Belief updating",
          paragraphs: [
            "Figure 1 summarises how the treatments moved expectations. In the control group the mean expectation barely changes between the prior and the posterior question (4.9 to 4.8 percent). The headline-CPI treatment raises the mean posterior to 5.4 percent, the food-price treatment to 6.0 percent, and the Bank of Korea forecast lowers it to 4.0 percent. Dispersion falls in all treated groups, as respondents converge towards the signal.",
            "Table 2 reports the first-stage regressions. In the control group the coefficient on the prior is 0.91, indicating that respondents report broadly consistent expectations across the two questions. In each treatment arm the weight on the prior is significantly lower: by 0.38 for headline CPI, 0.33 for food prices and 0.46 for the Bank's forecast, so that treated households place between 45 and 58 percent of the weight on their prior. Updating is stronger among respondents with more uncertain priors, consistent with Bayesian learning [6][7]. The instruments are strong: the Kleibergen–Paap F-statistic is 96.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Mean prior and posterior inflation expectations by treatment arm",
              kind: "bar",
              xLabels: ["Control", "T1: Headline CPI", "T2: Food prices", "T3: BoK forecast"],
              yLabel: "Expected inflation, next 12 months (%)",
              series: [
                { name: "Prior", values: [4.92, 4.88, 4.95, 4.9] },
                { name: "Posterior", values: [4.84, 5.41, 6.02, 4.01] },
              ],
              note: "Note: Weighted means of point forecasts of consumer-price inflation over the next twelve months, elicited before (prior) and after (posterior) the information treatment. N = 4,200. Expectations are winsorised at 0 and 20 percent.",
            },
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. First stage: effect of information treatments on posterior inflation expectations",
              columns: ["", "(1) All", "(2) Unconstrained", "(3) Constrained", "(4) All, uncertainty interaction"],
              rows: [
                ["Prior expectation", "0.91*** (0.02)", "0.92*** (0.02)", "0.89*** (0.03)", "0.93*** (0.02)"],
                ["T1 × prior", "−0.38*** (0.04)", "−0.39*** (0.05)", "−0.36*** (0.06)", "−0.29*** (0.05)"],
                ["T2 × prior", "−0.33*** (0.04)", "−0.34*** (0.05)", "−0.31*** (0.06)", "−0.25*** (0.05)"],
                ["T3 × prior", "−0.46*** (0.04)", "−0.47*** (0.05)", "−0.44*** (0.06)", "−0.36*** (0.05)"],
                ["T1", "2.47*** (0.22)", "2.55*** (0.27)", "2.33*** (0.36)", "2.41*** (0.22)"],
                ["T2", "2.69*** (0.23)", "2.74*** (0.28)", "2.60*** (0.37)", "2.63*** (0.23)"],
                ["T3", "1.36*** (0.21)", "1.40*** (0.26)", "1.29*** (0.34)", "1.33*** (0.21)"],
                ["T × prior × prior uncertainty", "", "", "", "−0.07*** (0.02)"],
                ["Controls", "Yes", "Yes", "Yes", "Yes"],
                ["Kleibergen–Paap F", "96.2", "71.4", "38.9", "84.5"],
                ["Observations", "4,200", "2,604", "1,596", "4,200"],
                ["R²", "0.71", "0.72", "0.69", "0.72"],
              ],
              note: "Note: Dependent variable is the posterior twelve-month inflation expectation (percent). Prior uncertainty is the standard deviation of the respondent's subjective probability distribution, standardised. Controls are those listed in Table 1 plus region fixed effects. Heteroskedasticity-robust standard errors in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "results-spending",
          heading: "7.2 Spending plans",
          paragraphs: [
            "Table 3 presents the second-stage estimates. Column 1 shows the ordinary least squares relationship between posterior expectations and intended durable spending, controlling for priors: it is positive but small (1.2 percentage points). Column 2 reports the instrumental-variables estimate, our headline result: a 1 percentage point increase in inflation expectations raises the probability of a planned durable purchase by 4.6 percentage points (standard error 1.2). Relative to the baseline share of 31 percent, this is an increase of about 15 percent. The difference between the OLS and IV estimates is consistent with attenuation from measurement error in reported expectations, which is substantial given the rounding of responses [17], and with omitted factors such as pessimism that raise expected inflation while depressing spending [3].",
            "The remaining columns report effects on other margins. Planned non-durable spending rises by a statistically insignificant 0.3 percent per percentage point of expected inflation (column 3), and planned monthly saving falls by 0.9 percent (column 4), significant at the 10 percent level. These patterns fit the intertemporal-substitution interpretation: the timing of large durable purchases is the margin most easily adjusted when the perceived cost of waiting rises, whereas everyday consumption is largely insensitive to modest changes in real interest rates [23].",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effect of inflation expectations on spending plans",
              columns: ["", "(1) Durables, OLS", "(2) Durables, IV", "(3) Non-durables, IV", "(4) Saving, IV", "(5) Durables, IV, no controls"],
              rows: [
                ["Posterior inflation expectation", "1.21** (0.52)", "4.62*** (1.18)", "0.31 (0.27)", "−0.88* (0.49)", "4.71*** (1.24)"],
                ["Prior inflation expectation", "−0.34 (0.55)", "−3.51*** (1.13)", "−0.22 (0.26)", "0.61 (0.47)", "−3.60*** (1.19)"],
                ["Mean of dependent variable", "31.4", "31.4", "1.8", "−2.1", "31.4"],
                ["Controls", "Yes", "Yes", "Yes", "Yes", "No"],
                ["First-stage F", "", "96.2", "96.2", "96.2", "93.7"],
                ["Observations", "4,200", "4,200", "4,200", "4,200", "4,200"],
              ],
              note: "Note: Durables is an indicator (×100) for planning to buy a car, major appliance, furniture or consumer electronics costing more than KRW 500,000 within twelve months. Non-durables and saving are planned percentage changes in monthly spending and saving over the next twelve months. In IV columns the posterior expectation is instrumented with treatment indicators and their interactions with the prior. Heteroskedasticity-robust standard errors in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "results-followup",
          heading: "7.3 Actual purchases in the follow-up",
          paragraphs: [
            "Intentions need not translate into behaviour. In the follow-up sample of 2,870 respondents, we estimate the same IV specification with an indicator for having actually purchased a qualifying durable good between November 2022 and February 2023 as the outcome. A 1 percentage point increase in posterior expectations raises the probability of an actual purchase by 2.9 percentage points (standard error 1.3), relative to a baseline purchase rate of 12 percent. Given that the follow-up window covers only three of the twelve months in the intention question, this is a large realisation rate. Re-elicited expectations in February show that about 40 percent of the initial treatment effect on beliefs persisted after three months, in line with the decay documented in other experiments [1][2].",
            "We also verify that the effect on intentions is not driven by respondents who report plans they never intended to carry out. Among households that planned a durable purchase in November, those in treatment arms that raised expectations were significantly more likely to have made the purchase by February than those in the control group. The pattern of results — strong effects on intentions, a meaningful pass-through to purchases within three months and fading beliefs — suggests that information-induced changes in expectations have real but temporary effects on spending.",
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "We now ask why expectations affect spending and for whom.",
      ],
      subsections: [
        {
          id: "mech-channels",
          heading: "8.1 Channels",
          paragraphs: [
            "Table 4 examines the channels proposed in Section 4. Higher posterior inflation expectations raise expected deposit rates, but by only 0.21 percentage points per point of expected inflation (column 1), so the perceived real interest rate falls by 0.79 percentage points (column 2). Households therefore do not expect the Bank of Korea to offset higher inflation one for one, and the perceived cost of postponing purchases rises. Consistent with this, the share agreeing that now is a good time to buy major household items rises by 3.8 percentage points (column 3).",
            "By contrast, we find no evidence of a positive income channel. Expected nominal income growth rises by 0.12 percentage points per point of expected inflation (column 4), implying that expected real income growth falls — households do not expect their wages to keep up with prices. Expectations of unemployment are unaffected (column 5). If anything, the income channel works against higher spending, which makes the positive durable response all the more striking and suggests that the intertemporal-substitution channel dominates. All estimates remain significant after controlling the false discovery rate across the family of channel outcomes.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Mechanisms: interest-rate, timing and income expectations",
              columns: ["", "(1) Expected deposit rate", "(2) Perceived real rate", "(3) Good time to buy durables", "(4) Expected nominal income growth", "(5) Expected unemployment"],
              rows: [
                ["Posterior inflation expectation", "0.21*** (0.06)", "−0.79*** (0.06)", "3.84*** (1.27)", "0.12 (0.09)", "0.38 (0.71)"],
                ["Mean of dependent variable", "3.62", "−1.29", "22.6", "2.41", "18.3"],
                ["Sharpened q-value", "0.001", "0.001", "0.004", "0.198", "0.594"],
                ["First-stage F", "96.2", "96.2", "96.2", "96.2", "96.2"],
                ["Observations", "4,200", "4,200", "4,200", "4,200", "4,200"],
              ],
              note: "Note: IV estimates; the posterior inflation expectation is instrumented as in Table 3, with controls for the prior and the covariates in Table 1. Perceived real rate is the expected one-year deposit rate minus the posterior inflation expectation. Columns 3 and 5 are indicators (×100) for agreeing that now is a good time to buy major household items and for expecting that someone in the household will lose their job within twelve months. Sharpened q-values follow Anderson (2008). Robust standard errors in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "mech-liquidity",
          heading: "8.2 Liquidity constraints",
          paragraphs: [
            "Table 5 tests H3. Among liquidity-unconstrained households, a 1 percentage point increase in inflation expectations raises intended durable spending by 7.1 percentage points (column 1). Among constrained households the estimate is 0.6 percentage points with a standard error of 1.9 (column 2); the difference between the two is significant at the 1 percent level (column 3). Crucially, Table 2 showed that constrained households update their beliefs almost as much as unconstrained ones, and the first stage remains strong in both groups. The absence of a spending response is not because constrained households ignore the information but because they cannot act on it.",
            "The perceived real interest rate falls by similar amounts in both groups, but only unconstrained households report that it is a better time to buy. This is exactly the pattern predicted by models in which constrained households are at a corner of their intertemporal problem [12][13][14]. The results are similar when we use alternative definitions of constraints: an indicator for holding liquid assets below one month of income, an indicator for having a debt-service-to-income ratio above 40 percent, or the household's own report that it would be unable to raise KRW 3 million within a week (columns 4–6 for the unconstrained group under each definition).",
            "Figure 2 shows the response across quintiles of liquid wealth relative to income. The estimated effect is close to zero in the bottom two quintiles and rises to between 6 and 9 percentage points in the top three. The gradient is not explained by income or age: when we interact the posterior with income terciles and age groups in addition to liquidity, the liquidity interaction retains its size and significance, while the other interactions are small and insignificant. Homeowners respond more than renters, but this difference disappears once liquid wealth is controlled for.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Heterogeneity by liquidity constraints: intended durable spending",
              columns: ["", "(1) Unconstrained", "(2) Constrained", "(3) Difference", "(4) Liquid assets ≥ 1 month", "(5) DSTI ≤ 40%", "(6) Can raise KRW 3m"],
              rows: [
                ["Posterior inflation expectation", "7.08*** (1.52)", "0.61 (1.88)", "6.47*** (2.42)", "6.62*** (1.49)", "6.14*** (1.41)", "6.85*** (1.55)"],
                ["Effect on perceived real rate", "−0.80*** (0.07)", "−0.77*** (0.09)", "−0.03 (0.11)", "−0.80*** (0.07)", "−0.79*** (0.07)", "−0.81*** (0.07)"],
                ["Mean of dependent variable", "35.2", "25.2", "", "34.6", "33.9", "35.0"],
                ["First-stage F", "71.4", "38.9", "", "74.0", "79.3", "70.8"],
                ["Observations", "2,604", "1,596", "4,200", "2,814", "3,032", "2,688"],
              ],
              note: "Note: IV estimates of the effect of posterior inflation expectations on intended durable spending (×100), estimated separately by group. Column 3 reports the difference from a fully interacted model. Columns 4–6 restrict the sample to households classified as unconstrained under alternative definitions: liquid assets of at least one month of income, a debt-service-to-income (DSTI) ratio of at most 40 percent, and reporting being able to raise KRW 3 million within a week. Robust standard errors in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Effect of inflation expectations on intended durable spending by liquid-wealth quintile",
              kind: "bar",
              xLabels: ["Q1 (lowest)", "Q2", "Q3", "Q4", "Q5 (highest)"],
              yLabel: "Effect of 1 pp higher expectation (pp)",
              series: [
                {
                  name: "IV estimate",
                  values: [0.2, 1.1, 6.3, 7.4, 8.6],
                  lower: [-4.1, -3.2, 1.9, 3.1, 3.9],
                  upper: [4.5, 5.4, 10.7, 11.7, 13.3],
                },
              ],
              note: "Note: IV estimates from a model interacting the posterior inflation expectation (and the instruments) with quintiles of liquid assets relative to monthly household income, with 95 percent confidence intervals. Controls as in Table 3. N = 4,200.",
            },
          ],
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a series of robustness checks for the headline estimate. Using each treatment arm separately as the instrument yields estimates between 3.9 and 5.3 percentage points (rows 2–4), and over-identification tests do not reject the equality of the implied effects (Hansen J p-value = 0.44). This similarity is reassuring for the exclusion restriction: the three treatments convey different types of information, and a violation that operated through, say, perceived growth prospects would be unlikely to produce the same effect for headline inflation, food prices and the central bank's forecast.",
        "The estimate is also robust to measurement choices. Using the mean of each respondent's subjective probability distribution instead of the point forecast gives 4.4 percentage points (row 5). Excluding respondents with extreme priors above 15 percent or below zero gives 4.8 (row 6), and excluding respondents who completed the survey in under eight minutes gives 4.7 (row 7). Unweighted estimates are slightly larger (row 8). Estimating a probit-IV model, appropriate for the binary outcome, yields an average marginal effect of 4.3 (row 9).",
        "A natural concern in survey experiments is experimenter demand: treated respondents might report spending plans they believe the researchers want to see [10]. Several features of our results argue against this. The treatments did not mention spending, and the direction of the expected response is not obvious to respondents — indeed, previous evidence suggests many households associate inflation with reduced spending [2][3]. Constrained households, who received the same treatments, show no response. Most importantly, the effect extends to actual purchases reported three months later, by which time the experimental context is long past. Finally, using the three-month-later re-elicitation of expectations in the follow-up as the endogenous variable gives a larger estimate, consistent with partial persistence of beliefs (row 10).",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the effect of inflation expectations on intended durable spending",
          columns: ["Specification", "Estimate", "Std. error", "First-stage F", "Observations"],
          rows: [
            ["(1) Baseline (Table 3, column 2)", "4.62***", "(1.18)", "96.2", "4,200"],
            ["(2) Instrument: T1 only", "4.37***", "(1.61)", "112.5", "2,100"],
            ["(3) Instrument: T2 only", "5.28***", "(1.74)", "88.1", "2,103"],
            ["(4) Instrument: T3 only", "3.94**", "(1.69)", "121.3", "2,101"],
            ["(5) Distribution mean as expectation", "4.41***", "(1.15)", "102.7", "4,200"],
            ["(6) Excluding extreme priors", "4.83***", "(1.26)", "91.4", "3,968"],
            ["(7) Excluding fast completers", "4.71***", "(1.22)", "93.0", "3,902"],
            ["(8) Unweighted", "4.95***", "(1.14)", "99.8", "4,200"],
            ["(9) Probit-IV, average marginal effect", "4.30***", "(1.12)", "", "4,200"],
            ["(10) Follow-up expectation as endogenous variable", "6.82**", "(3.07)", "24.6", "2,870"],
          ],
          note: "Note: Each row reports the IV coefficient on posterior inflation expectations from a separate regression with intended durable spending (×100) as the dependent variable and controls as in Table 3. In rows 2–4 the sample comprises the control group and the indicated treatment arm. Row 6 drops priors below 0 or above 15 percent; row 7 drops respondents completing the survey in less than eight minutes. Robust standard errors in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results have three implications for monetary policy. First, they show that household inflation expectations have causal effects on spending, and that these effects operate in the direction predicted by standard intertemporal theory. This supports the view that central-bank communication is a policy lever and not merely a description of policy [1][20]. In a disinflationary context, the corollary is that communication which successfully lowers expectations would, holding nominal rates fixed, raise perceived real rates and dampen durable demand — reinforcing the effect of rate increases such as those the Bank of Korea undertook during 2022.",
        "Second, our findings differ from those of {2}, who find that Dutch households induced to expect higher inflation reduce spending. One possible reconciliation lies in the perceived policy response and the income channel. In our sample, households expected the Bank of Korea to raise rates by only about one-fifth of the increase in inflation, so perceived real rates fell substantially, and households' expected real income declined only modestly. Where households interpret inflation news chiefly as a signal of worsening real income, the income effect may dominate. The sign of the response is therefore not a universal constant but depends on how households interpret inflation news, which is itself a function of the central bank's credibility and communication.",
        "Third, the concentration of effects among liquidity-unconstrained households implies that the aggregate potency of expectations management depends on the distribution of liquid wealth. In our data unconstrained households account for 62 percent of households but a larger share of durable spending, so the aggregate effect is substantial; but in downturns, when the share of constrained households rises, the same communication would have weaker effects. This is consistent with heterogeneous-agent models of monetary transmission [13] and suggests that communication and fiscal transfers may be complementary: transfers relax constraints for those who cannot respond to lower real rates, while communication works through those who can.",
        "Our study has limitations. The primary outcome is a spending intention, and although the follow-up confirms a meaningful pass-through to actual purchases, the sample is smaller and the window shorter than we would like. The experiment shifts expectations temporarily; persistent changes in expectations generated by sustained policy might have different effects. And our estimates apply to a period of high and salient inflation with rising policy rates; responses may differ when inflation is low and inattention is widespread [21].",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Using a randomised information experiment with 4,200 Korean households, we find that exogenous increases in inflation expectations raise intended durable-goods spending: a 1 percentage point increase in expected inflation raises the probability of planning a durable purchase by 4.6 percentage points. The effect works through lower perceived real interest rates rather than higher expected income, and it is concentrated among liquidity-unconstrained households, with no detectable response among constrained households despite similar belief updating. Central-bank communication can therefore move household spending, but its transmission is heterogeneous and depends on households' financial slack.",
        "Future research could link information experiments to administrative or card-transaction data to measure spending responses more precisely, track the persistence of belief changes over longer horizons, and study how the interpretation of inflation news varies with central-bank credibility. Repeating the experiment as Korean inflation returns towards target would reveal whether the effects we document are specific to periods of high and salient inflation.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Survey Design and Variable Construction",
      paragraphs: [
        "Expectations questions. The prior point forecast asked: 'Over the next 12 months, what do you think the rate of inflation, measured by the change in consumer prices, will be?' The posterior question asked respondents to state 'by how much prices in general will rise or fall over the next twelve months'. Probabilistic expectations were elicited over ten bins from 'prices will fall by more than 2 percent' to 'prices will rise by more than 12 percent', with probabilities required to sum to 100. Means and standard deviations of the subjective distribution assume uniform mass within interior bins and use the bin limits plus 2 percentage points for the open-ended bins.",
        "Liquidity constraints. Liquid assets comprise demand and time deposits, instalment savings accounts and directly held listed securities and funds, as reported in banded form; we use band midpoints. Household expenses are reported monthly spending excluding mortgage principal. A household is classified as constrained if liquid assets are below three months of expenses or if, in the past twelve months, it was refused credit, received less credit than requested or did not apply because it expected to be refused. This definition was fixed in the pre-analysis plan.",
        "Weights and attrition. Post-stratification weights match the joint distribution of region (17 provinces and metropolitan cities), age group, sex and income quintile of household heads in the 2020 Census. For follow-up analyses we multiply these by inverse-probability weights from a probit of follow-up completion on baseline covariates and treatment assignment; unweighted follow-up estimates are similar.",
      ],
    },
  ],
};
