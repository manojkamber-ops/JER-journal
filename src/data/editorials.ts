// Issue editorials, one per issue, written in the format of a journal "Editorial":
// a theme for the issue, a paragraph on each article, journal news, thanks, references and the editor's sign-off.
//
// Citations in the paragraphs refer to positions in `cited` (1-based):
//   [n]  parenthetical citation  → "(Park, Chen, & Kumar, 2025)"
//   {n}  narrative citation, written after the authors' names → "(2025)"
// The reference list (APA style, with DOI and on-site links) is generated from `cited` in journal.ts.
// URLs written in a paragraph are shown as links in the reader.

export type EditorialSpec = {
  id: string;
  /** true when the editorial already exists in ARTICLES (only its references, affiliation and text are added) */
  existing?: boolean;
  volume: number;
  issue: number;
  year: number;
  published: string;
  pages: string;
  title: string;
  abstract: string;
  keywords: string[];
  cited: string[];
  paragraphs: string[];
};

export const EDITORIALS: EditorialSpec[] = [
  /* ================================================================ */
  /* Volume 31, Issue 2 — August 2026 (current issue)   */
  /* ================================================================ */
  {
    id: "2026-v31-i2-ed",
    volume: 31,
    issue: 2,
    year: 2026,
    published: "2026-08-15",
    pages: "i–iii",
    title: "Editorial: Productivity, Prices and Public Services After the Pandemic",
    abstract:
      "The Editor-in-Chief introduces eleven articles on productivity in the age of AI, post-pandemic inflation, extreme heat, disaster risk-sharing and the delivery of public services, two of them in full text and nine as abstracts with references, with the full papers available on request from the authors.",
    keywords: ["Editorial", "Generative AI", "Climate policy", "Public services"],
    cited: ["2026-v31-i2-01", "2026-v31-i2-02", "2026-v31-i2-03", "2026-v31-i2-04", "2026-v31-i2-06", "2026-v31-i2-07", "2026-v31-i2-08", "2026-v31-i2-09", "2026-v31-i2-10", "2026-v31-i2-12", "2026-v31-i2-13"],
    paragraphs: [
      "This issue of the Journal of Economic Research (JER), Volume 31, Number 2, brings together eleven articles on productivity in the age of AI, post-pandemic inflation, extreme heat, disaster risk-sharing and the delivery of public services. Two of them appear in full in this issue; for the remaining nine, readers will find the abstract and the references on our website, and the full paper can be requested from the authors with one click on the lock symbol beside the full-text link. We hope this model, which lets authors decide how widely to circulate their manuscripts while the journal keeps the record of their work open and citable, will serve our community well.",
      "The first group of articles concerns work, households and public policy. Staggered access to a code-completion assistant raised output per developer-month by 11.4 per cent, with gains of 19 per cent for workers in the bottom experience tercile. Quality measured by defect rates did not deteriorate [1]. Using city-level price panels for Korea and Japan, the authors find that the Phillips-curve slope roughly doubled after 2021 and that inflation persistence rose from 0.52 to 0.71. Japan's slope remained about half of Korea's, consistent with lower wage pass-through [2]. A 2019 dispatch-zone reform cut ambulance response times by 1.8 minutes in treated districts, raising out-of-hospital cardiac arrest survival to discharge by 2.1 percentage points (14 per cent). Benefits were largest for night-time calls [3].",
      "The second group turns to markets, banks and prices. Adding breakfast to the midday meal in pilot districts raised attendance by 2.6 percentage points and mathematics test scores by 0.09 standard deviations. The effects were two to three times larger for girls from the poorest households [4]. Deposit outflows at Korean mutual credit cooperatives in early 2023 rose by 3.1 percentage points for each standard-deviation increase in local social media rumour intensity, even for fully insured accounts. Public guarantee announcements reversed roughly 70 per cent of withdrawals within two weeks [5]. Coffee growers on sustainability-certified contracts earned 17 per cent higher net income per hectare and faced 23 per cent lower price risk. Gains were concentrated among farms above one hectare, while the smallest farms were disproportionately excluded [6].",
      "A third group studies firms, farms and the way institutions shape economic outcomes. Households with larger kinship networks cut consumption by 11 percentage points less after the Lombok earthquakes. Informal transfers, however, covered only 18 per cent of the damage, and network insurance weakened sharply when the whole village was affected [7]. After Jio's 2016 entry, the effective price per gigabyte of mobile data fell by 91 per cent and monthly data use per subscriber rose nearly eightfold. Estimated consumer surplus gains were about 12 per cent of annual household telecommunication spending, with larger gains in rural circles [8]. Prefectures hosting nineteenth-century treaty ports have a 22 per cent higher manufacturing employment share today, but about three quarters of this gap reflects persistent port-hinterland trade links rather than local institutions. Effects fade beyond 150 kilometres from the coast [9].",
      "The final group of articles returns to public services, development and method. Switching to a time-of-use tariff reduced residential evening peak consumption by 8.7 per cent, with an own-price elasticity of -0.14 during peak hours. Savings were larger for households with automated appliances and for homes with rooftop solar [10]. Standard first-generation tests reject a unit root in Asian real exchange rates in 71 per cent of specifications, but the rate falls to 38 per cent once common factors are filtered. Half-lives of deviations are 2.9 years in the corrected specification [11].",
      "Taken together, the eleven articles show how much the effects of a policy or a technology depend on who is exposed to it and on the institutions that deliver it. I am grateful to the Associate Editors who handled the submissions in this issue — Lakshmi Iyer, Keiko Sato, Min-Jae Choi, Wei Zhang and Samuel Adeyemi — and to the reviewers who supported them with careful and timely reports.",
    ],
  },
  /* ================================================================ */
  /* Volume 31, Issue 1 — February 2026                 */
  /* ================================================================ */
  {
    id: "2026-v31-i1-ed",
    volume: 31,
    issue: 1,
    year: 2026,
    published: "2026-02-15",
    pages: "i–iii",
    title: "Editorial: Work, Demography and Climate — Policy in Times of Technological Change",
    abstract:
      "The Editor-in-Chief introduces ten articles on artificial intelligence and labour markets, demographic change, climate and trade policy, and the long shadow of historical shocks, one of them in full text and nine as abstracts with references, with the full papers available on request from the authors.",
    keywords: ["Editorial", "Generative AI", "Demography", "Climate policy"],
    cited: ["2026-v31-i1-01", "2026-v31-i1-02", "2026-v31-i1-03", "2026-v31-i1-05", "2026-v31-i1-06", "2026-v31-i1-08", "2026-v31-i1-09", "2026-v31-i1-11", "2026-v31-i1-12", "2026-v31-i1-13"],
    paragraphs: [
      "This issue of the Journal of Economic Research (JER), Volume 31, Number 1, brings together ten articles on artificial intelligence and labour markets, demographic change, climate and trade policy, and the long shadow of historical shocks. One of them appears in full in this issue; for the remaining nine, readers will find the abstract and the references on our website, and the full paper can be requested from the authors with one click on the lock symbol beside the full-text link. We hope this model, which lets authors decide how widely to circulate their manuscripts while the journal keeps the record of their work open and citable, will serve our community well.",
      "The first group of articles concerns work, households and public policy. Firms that deployed generative AI coding assistants cut fresher hiring by 11 percent relative to matched non-adopters, while mid-career hiring was unchanged; the decline is concentrated in routine testing and support roles [1]. A KRW 1 million birth grant raises the fertility rate by 0.9 percent, at roughly KRW 190 million per additional birth, with 40 percent of the response reflecting timing shifts [2]. Indian banks with larger exposure to carbon-intensive borrowers tightened credit to them by 6.3 percent after the 2021 net-zero announcement, but redirected only a small share to green sectors [3].",
      "The second group turns to markets, banks and prices. Each percentage point of higher perceived inflation raises negotiated wage settlements by 0.21 percentage point, with pass-through roughly twice as large in firms with unionised workforces [4]. Rollout of eSanjeevani health and wellness centres raised outpatient consultations in treated rural blocks by 17 percent and cut travel distance to a physician by a third, with little crowding out of in-person care [5]. Broiler growers under integrator contracts earn 24 percent higher net income per cycle than independents but face a 38 percent larger income risk from contract termination [6].",
      "A third group studies firms, farms and the way institutions shape economic outcomes. Conventional standard errors in shift-share regressions understate uncertainty by up to 40 percent under spatial correlation; the revised confidence intervals for India's 1991 tariff reform widen accordingly [7]. Wards randomly reserved for women see 13 percent more spending on water and sanitation and a 9 percent rise in citizen service requests, with no loss in fiscal discipline [8]. Adoption of repricing software by online grocers raised margins by 3.8 percent in concentrated product categories, with no effect where more than four rivals compete [9].",
      "The final group of articles returns to public services, development and method. Extending school meals to all Grade 1 to 6 pupils in covered divisions raised reading scores by 0.09 standard deviations and reduced absenteeism by 1.4 days per year, at a cost of about USD 36 per pupil [10].",
      "Taken together, the ten articles show how much the effects of a policy or a technology depend on who is exposed to it and on the institutions that deliver it. I am grateful to the Associate Editors who handled the submissions in this issue — Lakshmi Iyer, Keiko Sato, Min-Jae Choi, Wei Zhang and Samuel Adeyemi — and to the reviewers who supported them with careful and timely reports.",
    ],
  },
  /* ================================================================ */
  /* Volume 30, Issue 4 — October 2025                                */
  /* ================================================================ */
  {
    id: "2025-v30-i4-ed",
    volume: 30,
    issue: 4,
    year: 2025,
    published: "2025-10-15",
    pages: "i–iii",
    title: "Editorial: Payments, Public Works and Pay Floors — Policy Design and Who Bears the Adjustment",
    abstract:
      "The Editor-in-Chief introduces three contributions on digital payments and small-firm growth in India, India's rural employment guarantee as insurance against monsoon failure, and Korea's 2018–2019 minimum wage increases, all of which show that the effects of a policy depend on the details of its delivery.",
    keywords: ["Editorial", "Digital payments", "Public works", "Minimum wage", "India", "Korea"],
    cited: ["2025-v30-i4-01", "2021-v26-i1-04", "2025-v30-i4-02", "2021-v26-i3-04", "2025-v30-i4-03", "2021-v26-i1-01"],
    paragraphs: [
      "This issue of the Journal of Economic Research (JER) closes our thirtieth volume. Its three articles study policies that are now familiar across Asia — public digital payment infrastructure, guaranteed public employment and statutory minimum wages — and each reaches a conclusion that should interest policy makers as much as researchers: whether a policy works, and for whom, depends less on its headline design than on how it is delivered and on who bears the cost of adjustment.",
      "In ‘Digital payments and small-firm growth’, Aditi Sharma and Vikram Nair {1} study the expansion of India's Unified Payments Interface across 612 districts between 2018 and 2021. Using a panel of 286,000 small retail and service firms and heterogeneity-robust event-study methods, they find that three years after a district reaches a threshold density of UPI merchant acceptance, small-firm sales are 7.6 percent higher, new Goods and Services Tax registrations rise by 11.4 percent, and the number of small loans increases by 17.6 percent without any rise in delinquency. The gains are largest for the smallest and most cash-intensive firms and in districts hit hardest by the 2016 demonetisation. The paper extends earlier JER evidence that cheaper transfers within migrant networks help rural households in Bangladesh to smooth consumption [2], and shows that verifiable digital cash-flow records can open the door to formal credit for firms that lenders previously could not assess.",
      "Rohan Kulkarni and Meera Subramanian {3} ask whether India's Mahatma Gandhi National Rural Employment Guarantee Act insures rural households against monsoon failure. Exploiting the phased rollout of the programme across 497 districts in 2006–2008, they show that a drought reduced per capita consumption by 8.9 percent before the guarantee but by only 3.1 percent where it was available, so that the programme offset about two-thirds of the loss. Only part of this protection came from programme wages themselves; much of it came from the support that public works gave to private agricultural wages, whose drought-year decline shrank from 6.4 to 1.9 percent. Most strikingly, the insurance value was 82 percent in the best-implementing third of states and only 31 percent in the worst, and it fell sharply where wage payments were delayed. The article complements the review of conditional cash transfers in developing Asia published in this journal [4] by showing that, for demand-driven programmes, administrative capacity is itself a determinant of welfare.",
      "In the issue's single-authored article, Dong-Hyun Kwon {5} evaluates Korea's minimum wage increases of 16.4 percent in 2018 and 10.9 percent in 2019 using administrative employment-insurance records for small establishments. Applying a bunching approach, he finds that jobs paying below the new minimum fell by 4.1 percent of pre-reform small-business employment while jobs at and just above it rose by 3.3 percent, a net loss of 0.8 percent and an own-wage employment elasticity of −0.36. Employers also adjusted through hours, exit and prices, with restaurant prices rising by 2.6 percent more in high-bite regions. Net job losses were about two-thirds smaller where take-up of the Job Stability Fund wage subsidy was high. Read alongside earlier JER evidence on Korea's employment retention subsidy during the pandemic [6], the article suggests that temporary, well-targeted subsidies can make large labour-market reforms considerably less costly.",
      "Read together, the three articles share a lesson. Digital payments raised small-firm growth most where firms had previously been held back by cash; the employment guarantee insured households only where states delivered work and wages on time; and the cost of a higher pay floor depended on the support available to the smallest employers during the transition. In each case, the margin between a policy's promise and its effect was filled by the capacity of those implementing it and the constraints of those receiving it.",
      "Two of the three articles in this issue are by scholars based in India, and the third by a colleague in Seoul. I am glad that the journal continues to attract work from across the region, and I encourage authors working on South and Southeast Asian economies to consider JER for their research. I also remind readers that the call for papers for our special issue on the Economics of Artificial Intelligence remains open until 31 January 2026.",
      "I thank the Associate Editors who handled this issue — Lakshmi Iyer, Keiko Sato, Jin-Young Choi and Evelyn Stewart — and the reviewers who supported them with careful and timely reports.",
    ],
  },
  /* ================================================================ */
  /* Volume 30, Issue 3 — July 2025 (anniversary editorial)           */
  /* ================================================================ */
  {
    id: "2025-v30-i3-07",
    existing: true,
    volume: 30,
    issue: 3,
    year: 2025,
    published: "2025-07-15",
    pages: "411–416",
    title: "Editorial: Three Decades of the Journal of Economic Research — Reflections and Forward Agenda",
    abstract:
      "The Editor-in-Chief marks the journal’s thirtieth volume, reports the reaffirmation of its ABDC rating, and introduces the nine contributions to this issue, which share a common theme: the consequences of a shock depend on the liquidity, absorptive capacity and institutions of those who receive it.",
    keywords: ["Editorial", "Thirtieth anniversary", "Monetary transmission", "Absorptive capacity", "Inequality of opportunity"],
    cited: [
      "2025-v30-i3-01",
      "2025-v30-i3-09",
      "2025-v30-i3-04",
      "2025-v30-i3-03",
      "2025-v30-i3-08",
      "2025-v30-i3-10",
      "2025-v30-i1-04",
      "2025-v30-i3-02",
      "2025-v30-i3-05",
      "2025-v30-i3-06",
      "2024-v29-i2-01",
      "2023-v28-i3-03",
    ],
    paragraphs: [
      "Thirty years ago, in 1996, the Department of Economics at Hanyang University published the first volume of the Journal of Economic Research (JER) under the editorship of Young-Sam Kang. It appeared in print and was distributed mainly to Korean university libraries. The journal that readers open today — far more often on a screen than on paper — has changed in almost every respect since then. It was listed in the Korea Citation Index in 2003 and moved to quarterly publication in 2005; it began registering DOIs with Crossref in 2012; it became fully open access, without article processing charges, in 2016; and it entered the ABDC Journal Quality List, at the B tier in Applied Economics, in 2019. What has not changed is the conviction that careful empirical and theoretical work on the economies of Korea, Asia and the developing world deserves an outlet of international standard.",
      "It is therefore a pleasure to open this anniversary issue with good news on behalf of the Editorial Team. In its 2024 review cycle the Australian Business Deans Council reaffirmed JER at the ‘B’ tier of the ABDC Journal Quality List (https://abdc.edu.au/research/abdc-journal-list/), a rating the journal has held since 2019 under Field of Research code 3801. I would like to thank everyone who helped assemble the supporting statistics. As with every ranking exercise, the most important contribution our community can make to an even stronger position is to submit its best work to the journal and to read and cite what we publish.",
      "Reading the nine contributions to this issue front to back, as an Editor does, one theme stands out to me: the space between a shock and its consequences is filled by the characteristics of those who receive it. Policy rates, research grants, foreign investors and new technologies do not act on an average household or firm. Whether they matter, and for whom, depends on liquidity, on absorptive capacity and on the institutions that surround the recipient.",
      "In ‘Monetary policy transmission and household consumption heterogeneity’, Sungho Park, Mei-Ling Chen and Rajesh Kumar {1} show this most directly. Across seven emerging Asian economies, liquidity-constrained households cut non-durable consumption 2.4 times as much as unconstrained households after a 100-basis-point tightening, and financial development, mortgage-market structure and the share of variable-rate debt jointly explain 62 percent of the cross-country variation in transmission strength. The results sit well alongside earlier evidence in these pages that information about inflation changes spending plans only among unconstrained households [11]. Tae-Hee Kim’s article {2} adds an important methodological caution: in small open economies, high-frequency monetary surprises can be contaminated by simultaneous central-bank communication about exchange-rate management, and correcting for this implies a stronger and more persistent transmission to output and inflation. Alexandra Romanova and Jin-Young Choi {3} then show how downward nominal wage rigidity redistributes the burden of recessions inside firms: where more wage cells are frozen, separations rise among new hires and fall among tenured workers — a last-in-first-out rule that places adjustment on those with the least protection.",
      "A second group of articles is about absorbing knowledge rather than shocks. Da-Hye Song, Andreas Müller and Tae-Hee Kim {4} use the funding cut-off of the Brain Korea 21 Plus programme to show that university–industry collaboration raised regional patent applications per capita by 17.8 percent and the productivity of local SMEs by 4.1 percent, but mainly where absorptive capacity already existed and researchers moved between firms; their estimates complement earlier JER evidence on the additionality of public R&D subsidies [12]. Thi-Thu Nguyen and Hyun-Sung Lim {5} find robust backward spillovers from foreign direct investment to Vietnamese suppliers but little horizontal spillover, again concentrated among domestic firms with higher skill intensity and prior R&D. And in ‘Artificial intelligence adoption, productivity, and wage inequality’, Min-Jae Choi, Hyun-Ju Yang and Caroline Dubois {6} estimate that AI adoption raises firm productivity by 5.7 percent while widening the within-firm 90/10 wage gap by 4.2 percent — unless firms retrain their workers, in which case they keep most of the productivity gain at about a quarter of the inequality cost. Readers will notice the parallel with the productivity and wage-dispersion effects of remote work reported earlier in this volume [7].",
      "The remaining articles ask how markets and families price risks that unfold slowly. Jiwon Lee and Hyun-Jin Kim {8} document that physical and transition climate risks raise sovereign bond yields across 24 Asia-Pacific economies, most strongly where insurance penetration is shallow and fiscal space is limited, and that these premia widened after the 2015 Paris Agreement. Yuki Tanaka, Wei Zhang and Min-Su Park {9} build a firm-level measure of trade policy uncertainty from regulatory filings and find that it reduces offshoring and raises domestic sourcing, accompanied by higher R&D spending and productivity. Finally, Hong-Mei Wang and Sang-Yoon Han {10} estimate that circumstances beyond individual control account for 41 percent of the variance in schooling in urban China, and that inequality of opportunity, after falling for decades, has risen again for the 2000 birth cohort — a sobering reminder that the returns to the policies discussed above are not shared automatically.",
      "Looking ahead to the journal’s fourth decade, I hope JER will continue to combine credible identification with close attention to the institutions that shape outcomes in our region. Two initiatives will help. First, the call for papers for our special issue on the Economics of Artificial Intelligence, guest-edited by Min-Jae Choi and Caroline Dubois, accepts full-paper submissions from 1 September 2025 to 31 January 2026, with publication planned for October 2026. Second, we will continue to ask authors for replication packages and data availability statements, which several articles in this issue already provide.",
      "The articles in this issue have benefited from careful feedback and guidance by the Associate Editors who handled them, and I would like to thank Keiko Sato, Lakshmi Iyer, Anna Petrova, Roberto Rossi and Evelyn Stewart, as well as all the anonymous reviewers who were involved. I am also grateful to Co-Editors Tae-Woo Lee and Hyun-Jin Kim and to Managing Editor Sungho Park for their comments on this Editorial and for their work on the anniversary volume.",
    ],
  },

  /* ================================================================ */
  /* Volume 30, Issue 2 — April 2025                                  */
  /* ================================================================ */
  {
    id: "2025-v30-i2-ed",
    volume: 30,
    issue: 2,
    year: 2025,
    published: "2025-04-10",
    pages: "i–iv",
    title: "Buffers and Complements: Why the Same Policy Works Differently",
    abstract:
      "The Editor-in-Chief announces the 2024 Best Paper Award and introduces the six contributions to this issue, each of which shows that the effect of wealth, credit, public spending, skills or innovation depends on a complementary condition — collateral, bank capital, absorption capacity or credible regulation.",
    keywords: ["Editorial", "Housing wealth", "Fiscal multipliers", "Bank capital", "Financial inclusion"],
    cited: [
      "2025-v30-i2-01",
      "2024-v29-i4-03",
      "2025-v30-i2-03",
      "2024-v29-i1-02",
      "2025-v30-i2-02",
      "2023-v28-i3-01",
      "2025-v30-i2-04",
      "2025-v30-i2-05",
      "2025-v30-i2-06",
      "2024-v29-i3-04",
      "2024-v29-i4-01",
    ],
    paragraphs: [
      "Economists are trained to ask what a policy does on average. The six articles in this issue of the Journal of Economic Research (JER) are a useful reminder that the average can hide almost everything that matters. In each of them, the effect of a given change — in housing wealth, in capital requirements, in public spending, in schooling, in green innovation or in access to finance — depends on a second condition that acts as a buffer or a complement. Policy that ignores this second condition risks being ineffective at best and procyclical at worst.",
      "Before turning to the articles, I am delighted to report that the Editorial Board has awarded the JER Best Paper Award for 2024 to Sang-Wook Park and Hyun-Jin Kim for ‘Exchange rate pass-through to consumer prices in inflation-targeting Asian economies’ [11]. Their time-varying estimates, showing that pass-through has fallen from 0.32 in the 2000s to 0.12 after 2020 but strengthens asymmetrically during depreciations, have already been widely discussed in central-bank circles. Congratulations to both authors.",
      "Eun-Jung Kim and Roberto Rossi {1} open the issue with ‘Housing wealth effects on entrepreneurship’. Exploiting regional variation in housing prices driven by supply constraints, they find that a 10 percent increase in housing wealth raises new firm registration by 4.7 percent, with stronger effects among collateral-constrained and younger households and muted effects where bank credit is hard to reach. The same authors showed earlier in JER that housing wealth also moves non-durable consumption, especially for homeowners [2]; taken together, the two papers make a strong case that housing collateral is one of the main buffers through which Korean households finance both spending and risk-taking.",
      "Bank capital plays a similar role for firms. Anna Petrova and Tae-Woo Lee {3} exploit the phased introduction of Basel III in Korea and show that a one percentage point increase in required capital ratios reduces SME lending growth by 2.8 percentage points in downturns but has no significant effect in expansions — a procyclical pattern that is stronger at small and unaffiliated banks. The result complements earlier evidence in these pages that monetary tightening reduces lending most at weakly capitalised banks [4]. In the fiscal domain, Samuel Adeyemi and Hyun-Sung Lim {5} estimate four-year multipliers of 0.94 in resource-poor developing economies but only 0.41 in resource-rich ones, a gap they attribute to absorption capacity and Dutch-disease dynamics; readers interested in how fiscal credibility is priced will want to revisit the authors’ earlier work on fiscal rules and sovereign yields [6].",
      "The next two articles turn to skills and innovation. Sang-Yoon Han and Ji-Yeon Park {7} use compulsory-schooling reforms to estimate a return of 6.8 percent per year of schooling and show that cognitive and non-cognitive skills explain 22 and 18 percent of the remaining wage variance, with non-cognitive skills particularly important for women and managers. Wei Zhang and Min-Su Park {8} find that green innovation raises return on assets by 3.1 percentage points over three years — but only where environmental regulation is stringent and credibly enforced, consistent with the Porter hypothesis. Finally, in a further article, Samuel Adeyemi and Da-Eun Han {9} introduce a composite index of financial inclusion for 32 developing Asian economies, which has improved by 18 percent since 2011, with mobile money responsible for most of the gains in low-income economies. The index should be a useful companion to micro-evidence such as the household-resilience effects of digital inclusion in rural India reported in JER last year [10].",
      "I would like to thank the Associate Editors who handled the articles in this issue — Keiko Sato, Yuki Tanaka, Lakshmi Iyer, Andreas Müller and Evelyn Stewart — and the anonymous reviewers whose careful reports improved every paper. As always, readers can follow new issues and calls for papers by subscribing to the journal’s free content alerts.",
    ],
  },

  /* ================================================================ */
  /* Volume 30, Issue 1 — January 2025                                */
  /* ================================================================ */
  {
    id: "2025-v30-i1-ed",
    volume: 30,
    issue: 1,
    year: 2025,
    published: "2025-01-20",
    pages: "i–iv",
    title: "Opening the Thirtieth Volume: Markets, Policies and the People They Reach",
    abstract:
      "Opening the journal’s thirtieth volume, the Editor-in-Chief reports on the journal’s ABDC rating and KCI listing and introduces six contributions on platform competition, place-based industrial policy, tax-compliance nudges, remote work, currency mismatch and real-time expectations.",
    keywords: ["Editorial", "Digital platforms", "Industrial policy", "Remote work", "Nowcasting"],
    cited: [
      "2025-v30-i1-01",
      "2023-v28-i1-03",
      "2025-v30-i1-02",
      "2022-v27-i4-03",
      "2025-v30-i1-03",
      "2025-v30-i1-04",
      "2025-v30-i1-05",
      "2025-v30-i1-06",
      "2023-v28-i3-04",
    ],
    paragraphs: [
      "With this issue the Journal of Economic Research (JER) begins its thirtieth volume. Anniversaries invite looking back, and the July issue will do so at greater length. Here I want to look at what the six articles in this issue have in common: each asks how a market or a policy reaches the people it is meant to serve — consumers of digital platforms, workers in designated industrial regions, taxpayers, employees working from home, firms borrowing in foreign currency, and households forming expectations about the economy.",
      "First, some good news for authors and readers. We can confirm that JER (ISSN 1226-4261, eISSN 2713-6418) remains a KCI-listed journal in the Korea Citation Index of the National Research Foundation of Korea and continues to be rated B in the ABDC Journal Quality List under Applied Economics. Both listings make the journal’s articles easier to discover and to cite, and we thank our authors and reviewers, whose work they recognise.",
      "Min-Jae Choi and Caroline Dubois {1} open the volume with a structural model of the Korean ride-hailing market. Their counterfactuals suggest that a merger between the second- and third-largest platforms would cost consumers KRW 162 billion a year in the short run, only partly offset by network economies, whereas mandatory data portability would yield net gains of KRW 47 billion. The paper speaks directly to current debates on platform merger review and extends the line of work on market regulation and consumer welfare that JER published two years ago [2].",
      "Hyun-Ju Yang and Jae-Hoon Hwang {3} evaluate Korea’s national industrial complex programme over four decades and find persistent gains of 22 percent in manufacturing employment, 8.4 percent in TFP and a 6.1 percent wage premium — concentrated in regions that also received investment in vocational education. Together with the authors’ earlier study of the Heavy and Chemical Industry Drive [4], the article offers one of the most complete accounts of Korean industrial policy available. Because I am a co-author, this submission was handled independently by Co-Editor Tae-Woo Lee and an Associate Editor, without my involvement.",
      "Lakshmi Iyer and Soo-Hyun Park {5} report a field experiment with the Korean National Tax Service in which behaviourally informed letters to 78,000 self-employed taxpayers raised reported income by 4.1 percent and, intriguingly, voluntary pension contributions by 1.8 percent — a spillover across financial domains that suggests attention and salience at work. Jin-Young Choi and Alexandra Romanova {6} find that firms adopting remote work raised labour productivity by 4.2 percent but also widened their 90/10 wage gap by 6.8 percent, an effect attenuated by strong internal labour markets. Yuki Tanaka and Tae-Woo Lee {7} show that firms with larger net foreign-currency liabilities cut investment by 1.8 percentage points more after a 10 percent depreciation, with no symmetric gain after appreciations. In a further article, Min-Jae Choi and Hyun-Ju Yang {8} build a daily index of household expectations from internet searches that tracks the Bank of Korea’s sentiment survey closely and improves consumption nowcasts by about 12 percent, building on their earlier machine-learning nowcasting work in JER [9].",
      "I thank the Associate Editors who handled these articles — Keiko Sato, Wei Zhang, Hong-Mei Wang, Markus Bauer and Evelyn Stewart — and the reviewers who supported them. I wish all our authors, reviewers and readers a productive anniversary year.",
    ],
  },

  /* ================================================================ */
  /* Volume 29, Issue 4 — October 2024                                */
  /* ================================================================ */
  {
    id: "2024-v29-i4-ed",
    volume: 29,
    issue: 4,
    year: 2024,
    published: "2024-10-15",
    pages: "i–iv",
    title: "Open Economies, Ageing Societies: Adjustment at the Margins",
    abstract:
      "The Editor-in-Chief introduces five contributions on exchange-rate pass-through, capital flow management, housing-wealth effects, internal migration and long-term care, and argues that each studies how open and ageing economies adjust at the margin.",
    keywords: ["Editorial", "Exchange-rate pass-through", "Capital flows", "Migration", "Long-term care"],
    cited: [
      "2024-v29-i4-01",
      "2024-v29-i4-05",
      "2023-v28-i1-01",
      "2022-v27-i4-01",
      "2024-v29-i4-03",
      "2024-v29-i4-04",
      "2024-v29-i4-02",
      "2024-v29-i2-03",
    ],
    paragraphs: [
      "Two forces shape almost every economy in our region: openness to global capital and trade, and rapid population ageing. The five articles in this issue of the Journal of Economic Research (JER) study how economies adjust to both — not through dramatic structural change, but at the margins, through prices, flows, households and care arrangements.",
      "Sang-Wook Park and Hyun-Jin Kim {1} estimate exchange-rate pass-through to consumer prices in five inflation-targeting Asian economies with a time-varying parameter VAR. Pass-through has fallen from an average of 0.32 in the 2000s to 0.12 after 2020, most clearly for non-food, non-energy goods, consistent with greater monetary-policy credibility — yet it strengthens asymmetrically during depreciations, especially for energy-intensive goods. Anna Petrova and Hyun-Jin Kim {2} use synthetic controls to compare capital flow management measures in Korea, Brazil and Indonesia, finding that Korea’s levy on banks’ foreign-exchange liabilities reduced the sensitivity of inflows to global conditions by about 28 percent. Both articles extend a line of JER research on the global financial cycle [3] and on foreign-exchange intervention [4].",
      "At the level of households and regions, Eun-Jung Kim and Roberto Rossi {5} estimate that a 10 percent increase in housing wealth raises non-durable consumption by 1.1 percent across 16 Korean provinces, three times more for homeowners than for renters, and that this effect has roughly halved since 2008. Da-Hye Song and Sang-Yoon Han {6} show that internal migration lowers the wages of competing local workers by 0.9 percent in the short run but raises them by 1.3 percent over five years as complementarities take hold, with the largest gains for workers in complementary occupations.",
      "Finally, Keiko Sato and Da-Eun Han {7} compare long-term care insurance in Korea and Japan. Expanding coverage raises formal care use by 38 percent and reduces informal care by 21 percent, but has smaller than expected effects on women’s labour supply; to meet projected demand, Korea’s system would need to expand by 60 percent by 2035. Read together with the general-equilibrium analysis of pension sustainability published earlier this year [8], the article shows how quickly the fiscal consequences of ageing are arriving.",
      "I thank the Associate Editors who handled this issue — Yuki Tanaka, Wei Zhang, Lakshmi Iyer, Markus Bauer and Evelyn Stewart — and the reviewers who contributed to it. The Editorial Board will announce the 2024 Best Paper Award in the first quarter of next year.",
    ],
  },

  /* ================================================================ */
  /* Volume 29, Issue 3 — July 2024                                   */
  /* ================================================================ */
  {
    id: "2024-v29-i3-ed",
    volume: 29,
    issue: 3,
    year: 2024,
    published: "2024-07-15",
    pages: "i–iv",
    title: "Transitions and Those Who Carry Them",
    abstract:
      "The Editor-in-Chief introduces four contributions on the coal phase-out, intergenerational educational mobility, corporate cash holdings and digital financial inclusion, all of which ask who bears the costs of economic transitions and what cushions them.",
    keywords: ["Editorial", "Energy transition", "Intergenerational mobility", "Precautionary savings", "Financial inclusion"],
    cited: [
      "2024-v29-i3-01",
      "2023-v28-i4-02",
      "2024-v29-i3-02",
      "2021-v26-i4-02",
      "2024-v29-i3-03",
      "2022-v27-i2-02",
      "2024-v29-i3-04",
    ],
    paragraphs: [
      "Every economic transition has winners and losers, and the losses are rarely spread evenly. The four articles in this issue of the Journal of Economic Research (JER) look at transitions of very different kinds — away from coal, through educational expansion, under heightened uncertainty and towards digital finance — and ask who carries their costs and what can cushion them.",
      "Markus Bauer and Sungho Park {1} study coal phase-out policies in Kangwon and North Gyeongsang in Korea and in Germany’s Ruhr region. Synthetic-control estimates show persistent employment declines of 7 to 11 percent in coal-dependent labour markets ten years on, with little compensating growth in renewable-energy jobs; active labour market policies shorten non-employment spells but do not eliminate wage losses. The paper is a useful micro-level companion to the macroeconomic analysis of carbon pricing published in JER last year [2].",
      "Keiko Sato, Hong-Mei Wang and Sang-Yoon Han {3} compare intergenerational educational mobility in Korea, Japan and the United States using harmonised parent–child data. Korea has the highest intergenerational elasticity of schooling (0.42), ahead of the United States (0.36) and Japan (0.28), and the educational expansion of 1970–2000 reduced but did not eliminate the role of parental background. Their conclusion that the tertiary-access margin now matters most resonates with earlier JER evidence on the long-run effects of ending ability tracking in Korean high schools [4].",
      "Firms and households protect themselves in transition by holding buffers. Tae-Woo Lee and Caroline Dubois {5} document that median cash-to-assets ratios of 6,200 listed Asian firms rose by 4.1 percentage points between 2005 and 2023, and that firms hold less cash where financial markets are deeper and creditor rights stronger — a precautionary motive with real consequences for investment. Their findings complement work in these pages on trade credit as a stabiliser for small firms in downturns [6]. Lakshmi Iyer and Samuel Adeyemi {7} find that earlier rollout of India’s Pradhan Mantri Jan Dhan Yojana programme, combined with mobile banking, reduced consumption declines after income shocks by 18 percent and reliance on high-interest informal credit by 22 percent, with the largest gains for female-headed households.",
      "I thank the Associate Editors who handled this issue — Yuki Tanaka, Andreas Müller, Anna Petrova and Evelyn Stewart — and our reviewers for their careful and constructive work.",
    ],
  },

  /* ================================================================ */
  /* Volume 29, Issue 2 — April 2024                                  */
  /* ================================================================ */
  {
    id: "2024-v29-i2-ed",
    volume: 29,
    issue: 2,
    year: 2024,
    published: "2024-04-15",
    pages: "i–iii",
    title: "Expectations, Reallocation and the Long View",
    abstract:
      "The Editor-in-Chief introduces four contributions on inflation expectations, trade liberalisation, pension sustainability and the Easterlin paradox, which together ask how expectations about the future shape economic decisions today.",
    keywords: ["Editorial", "Inflation expectations", "Trade liberalisation", "Pensions", "Subjective wellbeing"],
    cited: ["2024-v29-i2-01", "2023-v28-i1-04", "2024-v29-i2-02", "2024-v29-i2-03", "2022-v27-i4-02", "2024-v29-i2-04"],
    paragraphs: [
      "Much of economics is about the future: what people expect, how they plan and whether the institutions they rely on will still be there. The four articles in this issue of the Journal of Economic Research (JER) each take the long view, from household inflation expectations to the solvency of the national pension system half a century ahead.",
      "Sungho Park and Ji-Yeon Park {1} embed a randomised information experiment in a survey of 4,200 Korean households. Exogenously raising short-run inflation expectations by one percentage point increases intended durable-goods spending by 4.6 percentage points — but only among liquidity-unconstrained households. The result supports central-bank communication as a policy lever while warning that its effects are uneven, and it pairs naturally with earlier JER work on forecasting Korean inflation, which found that expectations are among the most informative predictors [2].",
      "Yuki Tanaka and Min-Su Park {3} use customs micro-data to show that input-tariff cuts under Korea’s free trade agreements raised firm productivity by 2.1 percent on average, three times more for the most productive firms, and that reallocation accounts for about 40 percent of the aggregate gain. Jae-Hoon Hwang and Keiko Sato {4} build an overlapping-generations model of the National Pension Scheme: under the UN medium-fertility projection the fund is exhausted by 2055, and a package of parametric reforms would extend solvency by about 18 years at a substantial cost to today’s middle-aged cohorts. The analysis complements the evidence on labour-supply responses to the 2013 pension reform published in JER [5]. As I am a co-author of this article, it was handled entirely by Co-Editor Hyun-Jin Kim and an Associate Editor.",
      "In a further article, Evelyn Stewart and Sang-Yoon Han {6} revisit the Easterlin paradox with four decades of Korean data. Life satisfaction rises with real GDP per capita over time, contradicting the strong form of the paradox, but within cohorts the cross-sectional relationship is flat — suggesting that relative comparisons dominate at any moment. The note raises important questions for the use of subjective wellbeing as a policy target in fast-growing economies.",
      "My thanks go to the Associate Editors who handled this issue — Wei Zhang, Hong-Mei Wang, Andreas Müller, Anna Petrova and Roberto Rossi — and to all reviewers.",
    ],
  },

  /* ================================================================ */
  /* Volume 29, Issue 1 — January 2024                                */
  /* ================================================================ */
  {
    id: "2024-v29-i1-ed",
    volume: 29,
    issue: 1,
    year: 2024,
    published: "2024-01-15",
    pages: "i–iii",
    title: "Measuring What Policy Does: Wages, Credit, Connections and Productivity",
    abstract:
      "The Editor-in-Chief introduces four contributions on the 2018 minimum-wage reform, the bank lending channel, political connections and productivity measurement with endogenous markups, and reflects on the value of careful measurement.",
    keywords: ["Editorial", "Minimum wage", "Bank lending channel", "Political connections", "Productivity measurement"],
    cited: ["2024-v29-i1-01", "2024-v29-i1-02", "2021-v26-i4-01", "2024-v29-i1-03", "2024-v29-i1-04", "2023-v28-i1-03"],
    paragraphs: [
      "The first issue of Volume 29 of the Journal of Economic Research (JER) is, more than anything, about measurement. Each of the four articles asks a question that has been the subject of heated policy debate in Korea and beyond, and each answers it by measuring carefully what policy actually did.",
      "Jin-Young Choi and Da-Hye Song {1} study Korea’s 2018 minimum-wage reform, the largest single-year increase in two decades at 16.4 percent. Using administrative employment-insurance data, they find a 2.1 percentage point reduction in employment among directly affected workers but a 9.8 percent increase in monthly earnings for those who stayed employed — a net earnings gain, with larger employment losses in small firms and less-skilled occupations. Hyun-Jin Kim and Anna Petrova {2} estimate the bank lending channel in five Asian economies: after a 100-basis-point tightening, loan growth at the least-capitalised banks falls 3.4 percentage points more than at the best-capitalised, and easings do not produce symmetric responses. The paper extends JER’s earlier analysis of how unconventional policy is transmitted [3].",
      "Min-Jae Choi and Caroline Dubois {4} construct a new measure of political connections for listed Korean firms from board appointments, donations and lobbying. Connected firms enjoy a 6.2 percent Tobin’s q premium, concentrated in regulated industries, and the 2016 anti-corruption legislation reduced their value by 1.8 percent. In a further article, Andreas Müller and Min-Su Park {5} show that productivity estimates assuming perfect competition are biased upwards where markups have risen, and that a simple correction lowers measured TFP growth in Korean manufacturing by about 0.4 percentage points per year — a sizeable revision for growth accounting, and relevant to earlier JER work on regulation and market entry [6].",
      "I thank the Associate Editors who handled this issue — Keiko Sato, Yuki Tanaka, Lakshmi Iyer, Samuel Adeyemi and Roberto Rossi — and the reviewers who helped sharpen each paper. I wish all our readers a successful 2024.",
    ],
  },

  /* ================================================================ */
  /* Volume 28, Issue 4 — October 2023                                */
  /* ================================================================ */
  {
    id: "2023-v28-i4-ed",
    volume: 28,
    issue: 4,
    year: 2023,
    published: "2023-10-15",
    pages: "i–iii",
    title: "Costs That Arrive Later: Income Support, Carbon and Lost Schooling",
    abstract:
      "The Editor-in-Chief introduces four contributions on universal basic income pilots, carbon pricing, the earnings cost of pandemic school closures and news sentiment in bond markets, which all weigh present policy choices against costs that arrive in the future.",
    keywords: ["Editorial", "Universal basic income", "Carbon pricing", "Human capital", "News sentiment"],
    cited: ["2023-v28-i4-01", "2023-v28-i4-02", "2021-v26-i4-03", "2023-v28-i4-03", "2023-v28-i4-04"],
    paragraphs: [
      "Some of the most consequential policy choices impose costs that arrive years or decades later. The four articles in this issue of the Journal of Economic Research (JER) quantify such delayed costs — and benefits — in income support, climate policy, education and financial markets.",
      "The issue opens with a review article by Jae-Hoon Hwang and Evelyn Stewart {1} that synthesises evidence from 14 universal basic income pilots implemented between 2017 and 2022, including the Gyeonggi Youth Dividend. The meta-analysis finds a modest reduction in employment of 1.3 percentage points alongside larger gains in subjective wellbeing and food security, and discusses what scaling up would require fiscally. As I am a co-author, the review was handled independently by Co-Editor Tae-Woo Lee.",
      "Hyun-Jin Kim and Markus Bauer {2} develop a general-equilibrium model with energy inputs to evaluate carbon pricing in Korea. A carbon tax of USD 30 per ton, phased in over 2025–2030, would cut emissions by 18 percent by 2035 at a cumulative output cost of 0.6 percent of GDP, and recycling the revenue through lower labour taxes would reduce that cost by about 40 percent while offsetting most of the burden on low-income households. The same authors’ earlier article on pandemic lockdowns and air quality showed how quickly environmental gains reverse without structural change [3].",
      "Sang-Yoon Han and Ji-Yeon Park {4} project that the 2020–2022 cohort of Korean students will lose 1.8 percent of lifetime earnings — about KRW 31 million per student and 1.4 percent of 2022 GDP in present value — because of pandemic-era schooling losses, and that targeted remedial programmes could recover roughly half of this at modest cost. In a further article, Tae-Hee Kim and Jiwon Lee {5} construct a daily news-sentiment index from 1.2 million articles and show that it improves out-of-sample forecasts of Asian government bond yields by about 11 percent at the one-year horizon.",
      "I thank the Associate Editors who handled this issue — Keiko Sato, Wei Zhang, Lakshmi Iyer, Andreas Müller and Anna Petrova — and our many reviewers.",
    ],
  },

  /* ================================================================ */
  /* Volume 28, Issue 3 — July 2023                                   */
  /* ================================================================ */
  {
    id: "2023-v28-i3-ed",
    volume: 28,
    issue: 3,
    year: 2023,
    published: "2023-07-15",
    pages: "i–iii",
    title: "Credibility, Demand and Innovation",
    abstract:
      "The Editor-in-Chief introduces four contributions on fiscal rules, inequality and aggregate demand, public R&D subsidies and machine-learning nowcasts, linked by the role of credible institutions in turning policy into outcomes.",
    keywords: ["Editorial", "Fiscal rules", "Aggregate demand", "R&D subsidies", "Nowcasting"],
    cited: ["2023-v28-i3-01", "2023-v28-i3-02", "2023-v28-i3-03", "2023-v28-i3-04", "2023-v28-i1-04"],
    paragraphs: [
      "Credibility is an asset that institutions build slowly and can lose quickly. The four articles in this issue of the Journal of Economic Research (JER) show, in different ways, how much depends on it — in sovereign debt markets, in aggregate demand, in innovation policy and in the forecasts on which policymakers rely.",
      "Hyun-Sung Lim and Samuel Adeyemi {1} find that adopting a fiscal rule lowers 10-year sovereign yields in emerging markets by an average of 64 basis points over five years, with the largest effects where enforcement is credible and monetary frameworks are rule-based; expenditure rules outperform debt rules. Evelyn Stewart and Jae-Hoon Hwang {2} reassess the link between inequality and aggregate demand across 36 economies, finding that a one percentage point rise in the top-decile income share lowers the consumption share of GDP by 0.28 points and raises the current-account balance by 0.41 points — consistent with secular-stagnation channels. Because I co-authored this article, it was handled by Co-Editor Hyun-Jin Kim without my involvement.",
      "Andreas Müller, Da-Hye Song and Hyun-Ju Yang {3} exploit the funding cut-off of a national SME technology-innovation programme to show that public R&D subsidies raised patent applications by 19 percent and TFP by 3.2 percent, with an additionality ratio of 1.4: subsidies crowd in private R&D rather than replacing it. In a further article, Min-Jae Choi and Hyun-Ju Yang {4} show that a stacked ensemble of machine-learning models nowcasts Korean GDP growth more accurately than both the official nowcast and a dynamic-factor benchmark, extending their earlier work on inflation forecasting published in this volume [5].",
      "I thank the Associate Editors who handled this issue — Keiko Sato, Wei Zhang, Lakshmi Iyer, Anna Petrova and Roberto Rossi — and all reviewers.",
    ],
  },

  /* ================================================================ */
  /* Volume 28, Issue 2 — April 2023                                  */
  /* ================================================================ */
  {
    id: "2023-v28-i2-ed",
    volume: 28,
    issue: 2,
    year: 2023,
    published: "2023-04-15",
    pages: "i–iii",
    title: "Shocks from Outside: Monetary Surprises, Online Retail and Displaced Communities",
    abstract:
      "The Editor-in-Chief introduces four contributions on monetary surprises in Asian equity markets, e-commerce and retail productivity, a sudden population relocation and network centrality in Asian trade.",
    keywords: ["Editorial", "Monetary surprises", "E-commerce", "Labour markets", "Trade networks"],
    cited: ["2023-v28-i2-01", "2023-v28-i1-01", "2023-v28-i2-02", "2023-v28-i2-03", "2023-v28-i2-04"],
    paragraphs: [
      "The four articles in this issue of the Journal of Economic Research (JER) each study a shock that arrives from outside the unit being studied — a foreign central bank’s announcement, a new retail technology, the sudden arrival of displaced neighbours and the shifting position of an economy in global trade networks.",
      "Tae-Woo Lee and Roberto Rossi {1} use high-frequency identification to show that a 25-basis-point surprise tightening reduces Asian equity returns by 1.8 percentage points on the announcement day, with responses two to three times larger in rate-sensitive sectors, and that the transmission of US surprises to Asian markets has strengthened since 2008. The result sits well with JER’s recent evidence on the transmission of the global financial cycle to emerging Asia [2].",
      "Min-Jae Choi and Caroline Dubois {3} instrument e-commerce adoption with pre-existing broadband infrastructure and find that a 10 percentage point increase in online penetration raises retail TFP by 3.4 percent, driven by better inventory turnover and labour productivity within firms. Da-Hye Song and Lakshmi Iyer {4} exploit the relocation of about 1,400 residents from Yeonpyeong Island after the 2010 shelling and find no significant effect on the wages of low-skilled workers in Incheon but a 1.6 percentage point rise in local unemployment, absorbed mainly through the non-tradable service sector. In a further article, Yuki Tanaka and Wei Zhang {5} compute four network-centrality measures for Asian economies in the value-added trade network and document Korea’s steadily rising centrality.",
      "I thank the Associate Editors who handled this issue — Keiko Sato, Hong-Mei Wang, Andreas Müller, Anna Petrova and Evelyn Stewart — and the reviewers who supported them.",
    ],
  },

  /* ================================================================ */
  /* Volume 28, Issue 1 — January 2023                                */
  /* ================================================================ */
  {
    id: "2023-v28-i1-ed",
    volume: 28,
    issue: 1,
    year: 2023,
    published: "2023-01-15",
    pages: "i–iii",
    title: "Regimes, Cohorts and Rules",
    abstract:
      "The Editor-in-Chief introduces four contributions on exchange-rate regimes and the global financial cycle, cohort change in women’s labour force participation, product-market reform and machine-learning inflation forecasts.",
    keywords: ["Editorial", "Exchange-rate regimes", "Female labour force participation", "Regulation", "Forecasting"],
    cited: ["2023-v28-i1-01", "2023-v28-i1-02", "2022-v27-i2-01", "2023-v28-i1-03", "2023-v28-i1-04"],
    paragraphs: [
      "Volume 28 of the Journal of Economic Research (JER) opens with four articles about the frameworks within which economic decisions are made: exchange-rate regimes, the norms and opportunities faced by successive cohorts of women, the rules that govern entry into professions and the models central banks use to look ahead.",
      "Hyun-Jin Kim and Sungho Park {1} find that a one-standard-deviation rise in the VIX reduces capital inflows to emerging Asia by 2.8 percent on impact, and that the effect is about 40 percent smaller under floating exchange rates — evidence of exchange-rate flexibility acting as an automatic stabiliser. Sang-Yoon Han and Keiko Sato {2} decompose the rise in Korean women’s labour force participation since the late 1990s and show that it is driven mainly by cohort effects, each cohort participating 5 to 7 percentage points more than the last, with educational convergence explaining about 60 percent; their discussion of fertility and childcare connects with JER’s earlier work on housing affordability and fertility [3].",
      "Min-Jae Choi and Andreas Müller {4} evaluate Korea’s 2014 reform that lowered entry barriers in 52 professions: entry rose by 11.2 percent and consumer prices fell by 3.4 percent, with no measurable decline in service quality. In a further article, Min-Jae Choi and Hyun-Ju Yang {5} show that a random-forest model forecasts Korean inflation about 16 percent more accurately than a Phillips-curve benchmark at the one-year horizon, relying heavily on inflation expectations, import prices and labour-market tightness.",
      "I thank the Associate Editors who handled this issue — Yuki Tanaka, Lakshmi Iyer, Anna Petrova, Samuel Adeyemi and Evelyn Stewart — and our reviewers, and I wish all readers a good start to the new year.",
    ],
  },

  /* ================================================================ */
  /* Volume 27, Issue 4 — October 2022                                */
  /* ================================================================ */
  {
    id: "2022-v27-i4-ed",
    volume: 27,
    issue: 4,
    year: 2022,
    published: "2022-10-15",
    pages: "i–iii",
    title: "Policy with Long Memories: Intervention, Pensions and Industrial Strategy",
    abstract:
      "The Editor-in-Chief introduces three contributions on sterilised foreign-exchange intervention, the 2013 pension reform and the Heavy and Chemical Industry Drive, and explains the handling of submissions co-authored by the Editor.",
    keywords: ["Editorial", "Foreign-exchange intervention", "Pension reform", "Industrial policy"],
    cited: ["2022-v27-i4-01", "2022-v27-i4-02", "2022-v27-i4-03"],
    paragraphs: [
      "The three articles in this issue of the Journal of Economic Research (JER) study policies whose effects outlast the moment of decision: daily interventions in the foreign-exchange market, a reform of pension eligibility that changes retirement plans for years, and an industrial strategy from the 1970s whose consequences are still visible in Korea’s exports today.",
      "Sungho Park and Anna Petrova {1} use a high-frequency event study to show that a USD 1 billion intervention moves the won–dollar rate by about 0.3 percent on the day, with effects lasting five to ten trading days, and that sterilisation through monetary stabilisation bonds largely neutralises the monetary consequences. Jae-Hoon Hwang and Evelyn Stewart {2} exploit the age cut-off in Korea’s 2013 National Pension reform and find that labour-force participation of affected workers rose by 3.8 percentage points, with no measurable effect on household consumption. Hyun-Ju Yang and Jae-Hoon Hwang {3} find that sectors exposed to the Heavy and Chemical Industry Drive increased export sophistication by 28 percent over 1980–2000, with lasting effects that depended on existing capacity and human capital.",
      "A note on process: I am a co-author of two articles in this issue. In line with our editorial policy, both submissions were handled from first submission to final decision by Co-Editor Tae-Woo Lee and independent Associate Editors, and I had no access to the reviews. I am grateful to them, and to the Associate Editors who handled this issue — Keiko Sato, Yuki Tanaka, Lakshmi Iyer and Roberto Rossi — and all reviewers.",
    ],
  },

  /* ================================================================ */
  /* Volume 27, Issue 2 — April 2022                                  */
  /* ================================================================ */
  {
    id: "2022-v27-i2-ed",
    volume: 27,
    issue: 2,
    year: 2022,
    published: "2022-04-15",
    pages: "i–ii",
    title: "Housing, Credit and the Decisions Families and Firms Postpone",
    abstract:
      "The Editor-in-Chief introduces two contributions on housing affordability and fertility, and on trade credit and small-business survival, which both concern decisions that are postponed when resources are tight.",
    keywords: ["Editorial", "Housing affordability", "Fertility", "Trade credit", "Firm survival"],
    cited: ["2022-v27-i2-01", "2022-v27-i2-02"],
    paragraphs: [
      "When resources are tight, families and firms postpone decisions: to have children, to invest, or simply to stay open until conditions improve. The two articles in this issue of the Journal of Economic Research (JER) study what makes such decisions possible.",
      "Sang-Yoon Han and Da-Eun Han {1} use within-city variation in housing prices across 14 Korean metropolitan areas to estimate that a 10 percent rise in the house-price-to-income ratio reduces fertility by 2.4 percent over five years, concentrated among households aged 25 to 34 — a relationship that explains about a fifth of the cross-metropolitan variation in fertility decline. Tae-Woo Lee and Roberto Rossi {2} use the global financial crisis and the COVID-19 shock as natural experiments and find that a one-standard-deviation increase in pre-crisis reliance on trade credit lowers the probability of exit by 4.8 percentage points, especially for financially constrained firms.",
      "I thank the Associate Editors who handled this issue — Keiko Sato, Hong-Mei Wang, Andreas Müller and Evelyn Stewart — and the reviewers who supported them.",
    ],
  },

  /* ================================================================ */
  /* Volume 26, Issue 4 — October 2021                                */
  /* ================================================================ */
  {
    id: "2021-v26-i4-ed",
    volume: 26,
    issue: 4,
    year: 2021,
    published: "2021-10-15",
    pages: "i–iii",
    title: "Unconventional Times: Asset Purchases, School Reform and Cleaner Air",
    abstract:
      "The Editor-in-Chief reports the restructuring of the journal’s editorial board, and introduces three contributions on the Bank of Korea’s asset purchases, high-school equalisation and pandemic lockdowns.",
    keywords: ["Editorial", "Quantitative easing", "Educational tracking", "Air quality", "Editorial board"],
    cited: ["2021-v26-i4-01", "2021-v26-i4-02", "2021-v26-i4-03"],
    paragraphs: [
      "This issue of the Journal of Economic Research (JER) appears in unconventional times, and its articles reflect them: an asset-purchase programme launched in response to the pandemic, a reform of school assignment whose effects take a lifetime to observe, and an unplanned experiment in reducing economic activity.",
      "There is good news on behalf of the Editorial Team. We have restructured the editorial board, which now includes 18 Associate Editors from 11 countries. I thank our new colleagues for joining us and for broadening the journal’s international reach.",
      "Hyun-Jin Kim and Jiwon Lee {1} evaluate the Bank of Korea’s quantitative easing programme and find that it lowered 10-year treasury yields by about 26 basis points over its first six months, with portfolio-balance effects dominating signalling. Sang-Yoon Han and Hong-Mei Wang {2} exploit the gradual rollout of Korea’s high-school equalisation policy from 1974 and find that replacing ability tracking with random assignment raised lifetime earnings by 3.2 percent, mainly for disadvantaged students, and reduced earnings inequality across cohorts by about 8 percent. In a further article, Markus Bauer and Hyun-Jin Kim {3} show that lockdowns reduced PM2.5 concentrations in 32 Asian cities by 22 percent during the strictest weeks, but that the improvement reversed rapidly once restrictions were eased.",
      "I thank the Associate Editors who handled this issue — Keiko Sato, Yuki Tanaka, Lakshmi Iyer, Anna Petrova and Roberto Rossi — and all reviewers who supported the journal through a difficult year.",
    ],
  },

  /* ================================================================ */
  /* Volume 27, Issue 3 — July 2022                                   */
  /* ================================================================ */
  {
    id: "2022-v27-i3-ed",
    volume: 27,
    issue: 3,
    year: 2022,
    published: "2022-07-15",
    pages: "i–iii",
    title: "Energy, Prices and Households in a Year of Rising Inflation",
    abstract:
      "The Editor-in-Chief introduces four contributions on energy prices and inflation expectations, electricity tariff reform, renewable-energy auctions and exchange-rate shocks to migrant remittances, all of which concern how households and firms respond to changing relative prices.",
    keywords: ["Editorial", "Energy prices", "Inflation expectations", "Renewable energy", "Remittances"],
    cited: ["2022-v27-i3-01", "2021-v26-i1-02", "2022-v27-i3-02", "2021-v26-i3-02", "2022-v27-i3-03", "2022-v27-i3-04"],
    paragraphs: [
      "This issue of the Journal of Economic Research (JER) appears as inflation has returned to levels not seen in a generation, driven in large part by energy prices. Its four articles study how households and firms respond when relative prices change — at the pump, on the electricity bill, in renewable-energy procurement and through the exchange rates that determine what migrants' earnings are worth at home.",
      "Sungho Park and Jiwon Lee {1} show that a 10 percent rise in gasoline prices raises Korean households' one-year inflation expectations by 0.18 percentage points, with larger effects for car owners and lower-income respondents, and that the November 2021 fuel-tax cut lowered expectations by about 0.12 points. Their findings sit naturally beside earlier JER evidence on how the structure of household debt shapes the transmission of monetary policy [2].",
      "Hyun-Jin Kim and Markus Bauer {3} exploit the electricity tariff increases of 2011–2013 to estimate an elasticity of industrial electricity intensity of −0.34, with no measurable cost to productivity or employment; the paper complements the same research programme's evidence on the productivity costs of air pollution [4]. Wei Zhang and Da-Eun Han {5} assemble data on 1,140 solar projects across nine Asia-Pacific economies and find that auctions lowered contracted prices by 21 percent relative to feed-in tariffs — but that auctions without penalties for delay leave more capacity unbuilt. Finally, Thi-Thu Nguyen and Hyun-Sung Lim {6} show that a 10 percent appreciation of migrants' host currencies raises remittances received by Vietnamese households by 6.1 percent, with a third of the gain spent on education.",
      "I thank the Associate Editors who handled this issue — Keiko Sato, Yuki Tanaka, Andreas Müller, Anna Petrova and Samuel Adeyemi — and the reviewers who supported them.",
    ],
  },

  /* ================================================================ */
  /* Volume 27, Issue 1 — January 2022                                */
  /* ================================================================ */
  {
    id: "2022-v27-i1-ed",
    volume: 27,
    issue: 1,
    year: 2022,
    published: "2022-01-15",
    pages: "i–iii",
    title: "After the Shock: Credit, Management and Resilient Supply Chains",
    abstract:
      "Opening Volume 27, the Editor-in-Chief introduces four contributions on pandemic credit guarantees, management practices, the 2019 Japan–Korea export restrictions and the rise of zombie firms, linked by the question of how firms recover from shocks.",
    keywords: ["Editorial", "Credit guarantees", "Management", "Supply chains", "Zombie firms"],
    cited: ["2022-v27-i1-01", "2021-v26-i1-01", "2022-v27-i1-02", "2022-v27-i1-03", "2021-v26-i2-02", "2022-v27-i1-04"],
    paragraphs: [
      "Volume 27 of the Journal of Economic Research (JER) opens as economies move from emergency support towards recovery. The four articles in this issue ask what allows firms to come through shocks in good shape — access to credit, good management, resilient supply chains — and what happens when support keeps unviable firms alive.",
      "Tae-Woo Lee and Anna Petrova {1} use a sales threshold in the Korea Credit Guarantee Fund's 2020 expansion to show that eligible small firms increased new bank credit by 18 percent, investment rates by 2.3 percentage points and employment by 3.1 percent, with only a small rise in defaults. Together with the evidence on job retention subsidies published at the start of the previous volume [2], the paper gives a fuller picture of how Korea's pandemic support reached firms. Andreas Müller and Min-Su Park {3} measure management practices in 1,180 Korean plants and find that a one-standard-deviation better management score is associated with 9.6 percent higher productivity, with family firms run by family members lagging behind.",
      "Yuki Tanaka and Wei Zhang {4} study Japan's 2019 export controls on three chemicals essential to semiconductor production: exposed Korean firms raised inventories by 14 percent and cut the Japanese share of their suppliers by 19 percentage points, while output barely fell. The article builds on JER's earlier work on Korea's place in Asian value chains [5]. In a further article, Roberto Rossi and Hyun-Sung Lim {6} document a rise in the share of zombie firms from 9.6 percent in 2012 to 14.9 percent in 2020 — a reminder that support must eventually give way to reallocation.",
      "I thank the Associate Editors who handled this issue — Keiko Sato, Hong-Mei Wang, Lakshmi Iyer, Caroline Dubois and Evelyn Stewart — and our reviewers, and wish all readers a good new year.",
    ],
  },

  /* ================================================================ */
  /* Volume 26, Issue 3 — July 2021                                   */
  /* ================================================================ */
  {
    id: "2021-v26-i3-ed",
    volume: 26,
    issue: 3,
    year: 2021,
    published: "2021-07-15",
    pages: "i–iii",
    title: "Families, Schools and the Air We Breathe",
    abstract:
      "The Editor-in-Chief introduces four contributions on the motherhood penalty, air pollution and productivity, learning losses from online schooling and a review of conditional cash transfers in Asia, which together examine how family circumstances and environments shape human capital.",
    keywords: ["Editorial", "Child penalty", "Air pollution", "Learning loss", "Cash transfers"],
    cited: ["2021-v26-i3-01", "2021-v26-i3-03", "2021-v26-i3-02", "2021-v26-i3-04", "2021-v26-i1-04"],
    paragraphs: [
      "Human capital is built in families, schools and workplaces, and the environments in which it is built are far from equal. The four articles in this issue of the Journal of Economic Research (JER) examine how children affect mothers' careers, how the move online affected students, how polluted air lowers workers' productivity, and what two decades of cash transfers have achieved in Asia.",
      "Sang-Yoon Han and Keiko Sato {1} use linked administrative records to estimate that the birth of a first child reduces Korean mothers' earnings by 49 percent in the long run — more than twice the penalty found in Scandinavia — mainly through exits from employment, while workplace childcare and public-sector jobs substantially reduce it. Hong-Mei Wang and Ji-Yeon Park {2} find that remote schooling in 2020 cost middle-school students 0.11 standard deviations in mathematics on average, but 0.19 standard deviations for students without their own device or a quiet place to study.",
      "Hyun-Jin Kim and Caroline Dubois {3} exploit pollution carried from China by westerly winds to show that a 10 μg/m³ increase in PM2.5 lowers value added per worker in Korean manufacturing by 1.6 percent. The issue closes with a review by Evelyn Stewart and Da-Eun Han {4} of conditional cash transfers in developing Asia, which consistently raise school enrolment and the use of health services without reducing adults' work; readers interested in informal insurance will find a useful complement in the evidence on mobile money and remittances published earlier this year [5].",
      "Because Associate Editor Keiko Sato is a co-author in this issue, her article was handled by another editor. I thank the Associate Editors who handled this issue — Yuki Tanaka, Lakshmi Iyer, Andreas Müller, Anna Petrova and Roberto Rossi — and all reviewers.",
    ],
  },

  /* ================================================================ */
  /* Volume 26, Issue 2 — April 2021                                  */
  /* ================================================================ */
  {
    id: "2021-v26-i2-ed",
    volume: 26,
    issue: 2,
    year: 2021,
    published: "2021-04-15",
    pages: "i–iii",
    title: "Connections and Competition: Roads, Trade and Public Spending",
    abstract:
      "The Editor-in-Chief introduces four contributions on Korea's expressway network, import competition from China, the local multiplier of the Four Major Rivers project and real-time unemployment nowcasting with search data.",
    keywords: ["Editorial", "Transport infrastructure", "China shock", "Fiscal multipliers", "Nowcasting"],
    cited: ["2021-v26-i2-01", "2021-v26-i2-02", "2021-v26-i2-03", "2021-v26-i2-04", "2021-v26-i1-01"],
    paragraphs: [
      "How regions connect to one another and to the world economy determines where jobs are created and lost. The articles in this issue of the Journal of Economic Research (JER) study three such connections — roads, trade with China and public investment — and a new way of tracking the labour market in real time.",
      "Hyun-Ju Yang and Andreas Müller {1} show that a 10 percent increase in market access from Korea's expressway expansion raised manufacturing establishments by 3.2 percent and incumbent productivity by 1.1 percent, but that about 40 percent of the local gain reflected relocation from neighbouring municipalities. Yuki Tanaka and Min-Su Park {2} measure both sides of the China shock and find that import competition and export demand had effects of similar size and opposite sign, so that trade with China reshaped rather than shrank Korean manufacturing.",
      "Hyun-Sung Lim and Roberto Rossi {3} use the location of river segments selected for the Four Major Rivers project to estimate a relative local output multiplier of 1.6. In a further article, Tae-Hee Kim and Jiwon Lee {4} show that internet search data improved real-time unemployment nowcasts by 23 percent during the pandemic but added little in normal times — a useful tool for tracking the labour-market effects of the support programmes evaluated in our previous issue [5].",
      "I thank the Associate Editors who handled this issue — Keiko Sato, Wei Zhang, Lakshmi Iyer, Caroline Dubois and Evelyn Stewart — and the reviewers who supported them.",
    ],
  },

  /* ================================================================ */
  /* Volume 26, Issue 1 — January 2021                                */
  /* ================================================================ */
  {
    id: "2021-v26-i1-ed",
    volume: 26,
    issue: 1,
    year: 2021,
    published: "2021-01-15",
    pages: "i–iii",
    title: "A Year Like No Other: Shocks, Buffers and Policy Responses",
    abstract:
      "Opening Volume 26 after the first year of the pandemic, the Editor-in-Chief introduces four contributions on job retention subsidies, household debt and monetary policy, typhoons and local public finance, and mobile money in rural Bangladesh — all concerned with how shocks are absorbed.",
    keywords: ["Editorial", "COVID-19", "Job retention", "Household debt", "Natural disasters"],
    cited: ["2021-v26-i1-01", "2021-v26-i1-02", "2021-v26-i1-03", "2021-v26-i1-04"],
    paragraphs: [
      "Volume 26 of the Journal of Economic Research (JER) opens after a year like no other. The pandemic has tested every buffer that households, firms and governments rely on to absorb shocks. The four articles in this issue study those buffers directly: public subsidies that keep workers attached to firms, the cash flow that monetary policy releases to indebted households, the transfers that help municipalities recover from disasters, and the family networks that mobile money makes more responsive.",
      "Jin-Young Choi and Evelyn Stewart {1} evaluate Korea's expanded Employment Retention Subsidy using industry-specific size thresholds and find that the more generous subsidy reduced layoffs by 3.4 percent of pre-crisis employment and firm exit by 1.9 percentage points, at a cost of about KRW 8.7 million per job retained. Sungho Park and Ji-Yeon Park {2} show that a 25-basis-point rate cut raises card spending of variable-rate mortgage holders by 0.9 percent, with responses almost twice as large for highly indebted and liquidity-poor households.",
      "Markus Bauer and Da-Hye Song {3} find that typhoons reduce local activity by 3.8 percent in the year of a strike and that fiscally weak municipalities recover much more slowly, despite larger central grants. Lakshmi Iyer and Samuel Adeyemi {4} show that rural Bangladeshi households using mobile money cut consumption only a third as much as non-users after crop losses, because remittances from migrant relatives arrive faster and in larger amounts.",
      "I thank the Associate Editors who handled this issue — Keiko Sato, Yuki Tanaka, Hong-Mei Wang, Anna Petrova and Roberto Rossi — and all reviewers, who continued to give their time generously in a very difficult year.",
    ],
  },
];
