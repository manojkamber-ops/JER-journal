import { EDITORIALS } from "./editorials";
import { ALL_FULLTEXTS, ALL_PAPERS } from "./papers";

// Full-text bodies for the ePub-style reader, keyed by article id.
// Paragraph text may cite references as [n]; the reader links these to the numbered reference list.
// Articles without an entry open in the reader with their front matter, abstract and back matter only.

export type BodyTable = {
  id: string;
  caption: string;
  columns: string[];
  rows: string[][];
  note?: string;
};

/** A chart drawn from data: event-study style line plots (with confidence intervals) or grouped bars. */
export type BodyFigure = {
  id: string;
  caption: string;
  kind: "line" | "bar";
  xLabels: string[];
  yLabel: string;
  series: { name: string; values: number[]; lower?: number[]; upper?: number[] }[];
  /** Index of the x position after which a dashed vertical line is drawn (e.g. the event date). */
  marker?: number;
  note?: string;
};

export type BodyExhibits = {
  table?: BodyTable;
  tables?: BodyTable[];
  figures?: BodyFigure[];
};

export type BodySubsection = { id: string; heading: string; paragraphs: string[] } & BodyExhibits;

export type BodySection = {
  id: string;
  heading: string;
  paragraphs: string[];
  subsections?: BodySubsection[];
} & BodyExhibits;

/** All tables of a section or subsection, in display order. */
export function exhibitTables(x: BodyExhibits): BodyTable[] {
  return [...(x.table ? [x.table] : []), ...(x.tables ?? [])];
}

export const ARTICLE_BODIES: Record<string, BodySection[]> = {
  // SAMPLE full text for the featured (sample) article — replace with the authors' published text.
  "2025-v30-i3-10": [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Artificial intelligence has moved from research laboratories into the production lines of ordinary manufacturing firms. Machine-vision quality control, predictive maintenance and AI-assisted scheduling are now offered as off-the-shelf services, and adoption has accelerated sharply since 2018. Whether these technologies raise productivity, and who captures the gains, has become a central question for economic policy [1][2].",
        "Existing evidence comes mostly from industrial robots and from the United States and Western Europe [1][10]. Robots automate physical tasks; AI systems increasingly perform cognitive and judgement tasks, so the occupations exposed to the two technologies differ [6][20]. Korea offers an unusually informative setting: it combines the highest robot density in the world with rapid diffusion of AI among mid-sized manufacturers and rich administrative data on firms and workers [14][16].",
        "This paper makes three contributions. First, we build a firm-level panel that links survey measures of AI adoption to administrative employment and balance-sheet records for 1,460 manufacturing firms between 2018 and 2023. Second, we propose an instrument for adoption based on firms' pre-existing exposure to AI-substitutable tasks. Third, we document both the productivity effects of adoption and its consequences for the within-firm wage distribution, and we show that complementary investments in worker training shape the trade-off between the two.",
      ],
    },
    {
      id: "literature",
      heading: "2. Related Literature",
      paragraphs: [
        "Our work relates first to the literature on automation and labour markets. Acemoglu and Restrepo show that robots reduce employment and wages in exposed commuting zones in the United States [1], and that task displacement explains a large share of the rise in U.S. wage inequality [2]. Dauth et al. find smaller displacement effects in Germany, where adjustment occurred mainly through reduced hiring of young workers [10].",
        "A second strand studies AI specifically. Webb measures occupational exposure using the overlap between patent text and job descriptions [20], and Babina et al. show that AI investment is associated with faster firm growth driven by product innovation [5]. Brynjolfsson, Li and Raymond provide experimental evidence that generative AI raises the productivity of less-experienced workers [6]. We complement these studies with causal firm-level estimates for manufacturing and with direct evidence on within-firm inequality.",
        "Finally, we contribute to work on firm-level wage setting. Card, Heining and Kline show that workplace heterogeneity accounts for a substantial share of rising wage dispersion [8]. Our results suggest that technology adoption is one channel through which firms' wage structures diverge.",
      ],
    },
    {
      id: "data",
      heading: "3. Data",
      paragraphs: [
        "We combine three sources. The Korea Development Institute's AI Adoption Survey records, for each firm and year, whether AI systems are used in production, quality control, logistics or administration. The Survey of Business Activities provides output, capital, intermediate inputs and employment [18]. Matched employer–employee records provide earnings by occupation and skill group.",
        "Our sample contains 1,460 manufacturing firms observed annually from 2018 to 2023. A firm is classified as an adopter from the first year in which it reports AI use in at least one production function. Table 1 reports summary statistics. Adopters are larger, more capital-intensive and pay higher average wages than non-adopters, which motivates the instrumental-variable strategy described below.",
      ],
      table: {
        id: "table-1",
        caption: "Table 1. Summary statistics, 2018–2023",
        columns: ["Variable", "Adopters", "Non-adopters", "Difference"],
        rows: [
          ["Employment (workers)", "412", "187", "225***"],
          ["Log value added per worker", "11.42", "11.05", "0.37***"],
          ["Capital per worker (KRW m)", "184.6", "121.3", "63.3***"],
          ["Share with training programme", "0.58", "0.31", "0.27***"],
          ["90/10 wage ratio", "3.21", "2.97", "0.24***"],
          ["Firms", "538", "922", ""],
        ],
        note: "Note: Means over firm-years. *** denotes a difference significant at the 1 percent level.",
      },
    },
    {
      id: "strategy",
      heading: "4. Empirical Strategy",
      paragraphs: [
        "Adoption is not random: firms that adopt AI may differ in management quality or demand conditions that also affect productivity. We therefore instrument adoption with each firm's pre-2018 exposure to AI-substitutable tasks, constructed from the historical occupational composition of its local labour market and Webb's occupational exposure scores [20].",
      ],
      subsections: [
        {
          id: "specification",
          heading: "4.1 Specification",
          paragraphs: [
            "We estimate two-stage least squares regressions of log total factor productivity and of the within-firm 90/10 wage gap on AI adoption, controlling for firm and industry-by-year fixed effects. Standard errors are clustered at the local labour-market level.",
          ],
        },
        {
          id: "identification",
          heading: "4.2 Identifying Assumption",
          paragraphs: [
            "The exclusion restriction requires that historical task exposure affects post-2018 outcomes only through AI adoption. We show that exposure is uncorrelated with pre-period productivity trends and that results are robust to controlling for robot exposure and export intensity [21].",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "5. Results",
      paragraphs: [
        "AI adoption raises firm-level total factor productivity by 5.7 percent on average within two years. The first-stage F-statistic exceeds 40, and the estimate is stable across specifications. Effects are concentrated among firms that also invest in worker training and digital infrastructure, consistent with the view that AI is a general-purpose technology requiring complementary investments [11].",
        "Adoption also widens wage dispersion within firms. The 90/10 wage gap increases by 4.2 percent, driven by relative wage gains for high-skilled workers in AI-complementary occupations and modest wage stagnation for workers in AI-substitutable routine tasks [15].",
        "The productivity–equity trade-off is not inevitable. Firms that combine adoption with explicit retraining programmes capture approximately 80 percent of the productivity gains while limiting the increase in the wage gap to one quarter of the sample average.",
      ],
    },
    {
      id: "conclusion",
      heading: "6. Conclusion",
      paragraphs: [
        "Using new firm-level data from Korean manufacturing, we find that AI adoption raises productivity but also increases within-firm wage inequality. Complementary investments in worker training substantially soften this trade-off. These findings suggest that policies supporting AI diffusion are most effective when paired with support for workforce retraining, aligning the private returns to adoption with broader productivity and distributional objectives [13][16].",
      ],
    },
  ],
};

// Issue editorials: one untitled section, as in the journal's editorial template
for (const ed of EDITORIALS) {
  ARTICLE_BODIES[ed.id] = [{ id: "editorial", heading: "", paragraphs: ed.paragraphs }];
}

// Full research papers (src/data/papers/): complete PaperSpecs and full texts for articles defined in journal.ts
for (const paper of [...ALL_PAPERS, ...ALL_FULLTEXTS]) {
  ARTICLE_BODIES[paper.id] = paper.body;
}
