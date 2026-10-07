// Reads the current issue's papers from Sanity's public "production" dataset (no token needed) and converts them
// to the site's PaperSpec format. Used by the home page (refreshed every minute) and the full-paper request route.
import type { PaperSpec } from "@/data/paper-spec";
import type { BodySection } from "@/data/article-bodies";

export const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "imuzzo9u";
export const SANITY_PAPERS_DATASET = process.env.SANITY_DATASET ?? process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const API_VERSION = "2025-01-01";

/** How often (seconds) the site re-reads Sanity, so a paper published in Sanity appears without a redeploy. */
export const SANITY_REFRESH_SECONDS = 60;

type SanityDoc = Record<string, any>;

const clean = <T extends Record<string, unknown>>(o: T): T =>
  Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined && v !== null && v !== "")) as T;

function sectionFromSanity(s: SanityDoc): BodySection {
  const tables = (s.tables ?? []).map((t: SanityDoc) =>
    clean({ id: t.tableId, caption: t.caption, columns: t.columns ?? [], rows: (t.rows ?? []).map((r: SanityDoc) => r.cells ?? []), note: t.note }),
  );
  const figures = (s.figures ?? []).map((f: SanityDoc) =>
    clean({
      id: f.figureId,
      caption: f.caption,
      kind: f.kind === "bar" ? "bar" : "line",
      xLabels: f.xLabels ?? [],
      yLabel: f.yLabel ?? "",
      series: (f.series ?? []).map((se: SanityDoc) =>
        clean({ name: se.name, values: se.values ?? [], lower: se.lower?.length ? se.lower : undefined, upper: se.upper?.length ? se.upper : undefined }),
      ),
      marker: typeof f.marker === "number" ? f.marker : undefined,
      note: f.note,
    }),
  );
  const out: BodySection = { id: s.sectionId, heading: s.heading ?? "", paragraphs: s.paragraphs ?? [] };
  if (tables.length) out.tables = tables;
  if (figures.length) out.figures = figures;
  if (s.subsections?.length) out.subsections = s.subsections.map(sectionFromSanity);
  return out;
}

/** Sanity "paper" document → PaperSpec (null when required fields are missing). */
export function fromSanityPaper(doc: SanityDoc): PaperSpec | null {
  if (!/^\d{4}-v\d+-i\d+-\d{2}$/.test(doc.articleId ?? "") || !doc.title || !doc.issue || !doc.volume || !doc.published || !doc.authors?.length) return null;
  return clean({
    id: doc.articleId,
    title: doc.title,
    authors: doc.authors.map((a: SanityDoc) =>
      clean({ name: a.name, corresponding: a.corresponding || undefined, affiliation: { department: a.department ?? "", institution: a.institution ?? "", city: a.city ?? "", country: a.country ?? "" } }),
    ),
    abstract: doc.abstract ?? "",
    keywords: doc.keywords ?? [],
    jelCodes: doc.jelCodes ?? [],
    pages: doc.pages || "1–24",
    volume: doc.volume,
    issue: doc.issue,
    year: doc.year ?? Number(String(doc.published).slice(0, 4)),
    received: doc.received ?? doc.published,
    accepted: doc.accepted ?? doc.published,
    published: doc.published,
    publishedOnline: doc.publishedOnline,
    citations: doc.citations ?? 0,
    downloads: doc.downloads ?? 0,
    pdfSize: doc.pdfSize || "1.50 MB",
    type: doc.type || "Research Article",
    // Papers added in Sanity are genuine publications unless an editor ticks "Sample / demonstration content"
    sample: doc.sampleContent === true,
    acknowledgments: doc.acknowledgments,
    funding: doc.funding,
    dataAvailability: doc.dataAvailability,
    editorialNote: doc.editorialNote,
    refs: (doc.refs ?? []).map((r: SanityDoc) => (r._type === "refJer" ? { jer: r.articleId } : r.text)).filter(Boolean),
    body: doc.body?.length ? doc.body.map(sectionFromSanity) : undefined,
  }) as PaperSpec;
}

/**
 * Published papers of one issue from Sanity, or null if Sanity cannot be reached (the site then keeps the papers
 * in the repository). Results are cached by Next.js for SANITY_REFRESH_SECONDS.
 */
export async function fetchIssuePapers(volume: number, issue: number): Promise<PaperSpec[] | null> {
  const query = encodeURIComponent('*[_type == "paper" && volume == $v && issue == $i && !(_id in path("drafts.**"))] | order(articleId asc)');
  const url = `https://${SANITY_PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${SANITY_PAPERS_DATASET}?query=${query}&$v=${volume}&$i=${issue}`;
  try {
    const res = await fetch(url, { next: { revalidate: SANITY_REFRESH_SECONDS, tags: ["sanity-papers"] } });
    if (!res.ok) return null;
    const docs = ((await res.json()) as { result?: SanityDoc[] }).result ?? [];
    return docs.map(fromSanityPaper).filter((p): p is PaperSpec => p !== null);
  } catch {
    return null;
  }
}
