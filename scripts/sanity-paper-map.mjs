// Converts between the site's PaperSpec format (src/data/paper-spec.ts) and Sanity "paper" documents
// (studio/schemaTypes/paper.ts). Used by sanity-push-2026.mjs.

export const SANITY_API_VERSION = "2025-01-01";

/** Reads Sanity settings from the environment (loading .env.local / .env when present). */
export function sanityEnv() {
  for (const file of [".env.local", ".env"]) {
    try {
      process.loadEnvFile(file);
    } catch {
      /* file not present */
    }
  }
  return {
    projectId: process.env.SANITY_PROJECT_ID ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "imuzzo9u",
    dataset: process.env.SANITY_DATASET ?? process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
    writeToken: process.env.SANITY_API_WRITE_TOKEN,
    readToken: process.env.SANITY_API_READ_TOKEN ?? process.env.SANITY_API_WRITE_TOKEN,
  };
}

const key = (prefix, i) => `${prefix}${i}`;
const tablesOf = (s) => [...(s.table ? [s.table] : []), ...(s.tables ?? [])];

function sectionToSanity(s, i, type) {
  return {
    _key: key("s", i),
    _type: type,
    sectionId: s.id,
    heading: s.heading ?? "",
    paragraphs: s.paragraphs ?? [],
    tables: tablesOf(s).map((t, j) => ({
      _key: key("t", j),
      _type: "bodyTable",
      tableId: t.id,
      caption: t.caption,
      columns: t.columns,
      rows: t.rows.map((cells, r) => ({ _key: key("r", r), _type: "tableRow", cells })),
      note: t.note,
    })),
    figures: (s.figures ?? []).map((f, j) => ({
      _key: key("f", j),
      _type: "bodyFigure",
      figureId: f.id,
      caption: f.caption,
      kind: f.kind,
      xLabels: f.xLabels,
      yLabel: f.yLabel,
      series: f.series.map((se, k) => ({ _key: key("se", k), _type: "figureSeries", name: se.name, values: se.values, lower: se.lower, upper: se.upper })),
      marker: f.marker,
      note: f.note,
    })),
    ...(type === "bodySection" ? { subsections: (s.subsections ?? []).map((x, k) => sectionToSanity(x, k, "bodySubsection")) } : {}),
  };
}

/** PaperSpec → Sanity document. */
export function toSanityPaper(spec, affiliations = {}) {
  return {
    _id: `paper-${spec.id}`,
    _type: "paper",
    articleId: spec.id,
    title: spec.title,
    authors: spec.authors.map((a, i) => {
      const aff = a.affiliation ?? affiliations[a.name] ?? {};
      return { _key: key("a", i), _type: "author", name: a.name, corresponding: Boolean(a.corresponding), department: aff.department ?? "", institution: aff.institution ?? "", city: aff.city ?? "", country: aff.country ?? "" };
    }),
    abstract: spec.abstract,
    keywords: spec.keywords,
    jelCodes: spec.jelCodes,
    type: spec.type,
    year: spec.year,
    volume: spec.volume,
    issue: spec.issue,
    pages: spec.pages,
    received: spec.received,
    accepted: spec.accepted,
    publishedOnline: spec.publishedOnline,
    published: spec.published,
    citations: spec.citations,
    downloads: spec.downloads,
    pdfSize: spec.pdfSize,
    acknowledgments: spec.acknowledgments,
    funding: spec.funding,
    dataAvailability: spec.dataAvailability,
    editorialNote: spec.editorialNote,
    body: spec.body ? spec.body.map((s, i) => sectionToSanity(s, i, "bodySection")) : undefined,
    refs: spec.refs.map((r, i) => (typeof r === "string" ? { _key: key("ref", i), _type: "refText", text: r } : { _key: key("ref", i), _type: "refJer", articleId: r.jer })),
  };
}

const clean = (o) => Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined && v !== null && v !== ""));

function sectionFromSanity(s) {
  const tables = (s.tables ?? []).map((t) => clean({ id: t.tableId, caption: t.caption, columns: t.columns ?? [], rows: (t.rows ?? []).map((r) => r.cells ?? []), note: t.note }));
  const figures = (s.figures ?? []).map((f) =>
    clean({
      id: f.figureId,
      caption: f.caption,
      kind: f.kind === "bar" ? "bar" : "line",
      xLabels: f.xLabels ?? [],
      yLabel: f.yLabel ?? "",
      series: (f.series ?? []).map((se) => clean({ name: se.name, values: se.values ?? [], lower: se.lower?.length ? se.lower : undefined, upper: se.upper?.length ? se.upper : undefined })),
      marker: typeof f.marker === "number" ? f.marker : undefined,
      note: f.note,
    }),
  );
  const out = { id: s.sectionId, heading: s.heading ?? "", paragraphs: s.paragraphs ?? [] };
  if (tables.length) out.tables = tables;
  if (figures.length) out.figures = figures;
  if (s.subsections?.length) out.subsections = s.subsections.map(sectionFromSanity);
  return out;
}

/** Sanity document → PaperSpec object. */
export function fromSanityPaper(doc) {
  return clean({
    id: doc.articleId,
    title: doc.title,
    authors: (doc.authors ?? []).map((a) =>
      clean({ name: a.name, corresponding: a.corresponding || undefined, affiliation: { department: a.department ?? "", institution: a.institution ?? "", city: a.city ?? "", country: a.country ?? "" } }),
    ),
    abstract: doc.abstract ?? "",
    keywords: doc.keywords ?? [],
    jelCodes: doc.jelCodes ?? [],
    pages: doc.pages || "1–24",
    volume: doc.volume ?? 31,
    issue: doc.issue,
    year: doc.year ?? 2026,
    received: doc.received,
    accepted: doc.accepted,
    published: doc.published,
    publishedOnline: doc.publishedOnline,
    citations: doc.citations ?? 0,
    downloads: doc.downloads ?? 0,
    pdfSize: doc.pdfSize || "1.50 MB",
    type: doc.type || "Research Article",
    acknowledgments: doc.acknowledgments,
    funding: doc.funding,
    dataAvailability: doc.dataAvailability,
    editorialNote: doc.editorialNote,
    refs: (doc.refs ?? []).map((r) => (r._type === "refJer" ? { jer: r.articleId } : r.text)).filter(Boolean),
    body: doc.body?.length ? doc.body.map(sectionFromSanity) : undefined,
  });
}

/** PaperSpec object → contents of a src/data/papers/<id>.ts file. */
export function paperToTs(spec) {
  return [
    `// Vol. ${spec.volume}, No. ${spec.issue} (${spec.year}) — synced from Sanity by scripts/sanity-pull-2026.mjs.`,
    "// Edit this paper in Sanity Studio; local changes are overwritten on the next sync.",
    'import type { PaperSpec } from "../paper-spec";',
    "",
    `export const paper: PaperSpec = ${JSON.stringify(spec, null, 2)};`,
    "",
  ].join("\n");
}
