import { defineArrayMember, defineField, defineType } from "sanity";
import { ARTICLE_ID_PATTERN, CURRENT_ISSUE, MANAGED_ISSUES } from "../current-issue";

/**
 * A paper in one of the issues managed in Sanity (studio/current-issue.ts). The website reads published papers live
 * (within about a minute) and shows each managed issue from Sanity, replacing the copies in the repository. Leave "Full text" empty for an abstract-only paper:
 * the site then shows the abstract and references, with a lock and a "request the full paper" form.
 */

const author = defineArrayMember({
  type: "object",
  name: "author",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "corresponding", title: "Corresponding author", type: "boolean", initialValue: false }),
    defineField({ name: "department", type: "string", validation: (r) => r.required() }),
    defineField({ name: "institution", type: "string", validation: (r) => r.required() }),
    defineField({ name: "city", type: "string", validation: (r) => r.required() }),
    defineField({ name: "country", type: "string", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "name", subtitle: "institution" } },
});

const table = defineArrayMember({
  type: "object",
  name: "bodyTable",
  title: "Table",
  fields: [
    defineField({ name: "tableId", title: "Table id (e.g. table-1)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "caption", type: "string", description: 'Start with "Table N."', validation: (r) => r.required() }),
    defineField({ name: "columns", type: "array", of: [{ type: "string" }], validation: (r) => r.required().min(1) }),
    defineField({
      name: "rows",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "tableRow",
          fields: [defineField({ name: "cells", type: "array", of: [{ type: "string" }] })],
          preview: { select: { cells: "cells" }, prepare: ({ cells }) => ({ title: (cells ?? []).join(" | ") }) },
        }),
      ],
    }),
    defineField({ name: "note", type: "text", rows: 2 }),
  ],
  preview: { select: { title: "caption" } },
});

const series = defineArrayMember({
  type: "object",
  name: "figureSeries",
  title: "Series",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "values", type: "array", of: [{ type: "number" }], validation: (r) => r.required().min(1) }),
    defineField({ name: "lower", title: "Lower confidence bound (optional)", type: "array", of: [{ type: "number" }] }),
    defineField({ name: "upper", title: "Upper confidence bound (optional)", type: "array", of: [{ type: "number" }] }),
  ],
});

const figure = defineArrayMember({
  type: "object",
  name: "bodyFigure",
  title: "Figure (chart)",
  fields: [
    defineField({ name: "figureId", title: "Figure id (e.g. figure-1)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "caption", type: "string", description: 'Start with "Figure N."', validation: (r) => r.required() }),
    defineField({
      name: "kind",
      type: "string",
      description: "Line or bar: a chart drawn from the data below. Image: upload the authors' figure (PNG or JPEG).",
      options: { list: ["line", "bar", "image"], layout: "radio" },
      initialValue: "line",
    }),
    defineField({
      name: "image",
      title: "Figure image",
      type: "image",
      hidden: ({ parent }) => parent?.kind !== "image",
      validation: (r) => r.custom((v, ctx) => ((ctx.parent as { kind?: string })?.kind === "image" && !v ? "Upload the figure image" : true)),
    }),
    defineField({
      name: "xLabels",
      title: "X-axis labels",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ parent }) => parent?.kind === "image",
      validation: (r) => r.custom((v, ctx) => ((ctx.parent as { kind?: string })?.kind !== "image" && !(v as unknown[] | undefined)?.length ? "Required for a chart" : true)),
    }),
    defineField({ name: "yLabel", title: "Y-axis label", type: "string", hidden: ({ parent }) => parent?.kind === "image" }),
    defineField({
      name: "series",
      type: "array",
      of: [series],
      hidden: ({ parent }) => parent?.kind === "image",
      validation: (r) => r.custom((v, ctx) => ((ctx.parent as { kind?: string })?.kind !== "image" && !(v as unknown[] | undefined)?.length ? "Required for a chart" : true)),
    }),
    defineField({ name: "marker", title: "Dashed line after x position (optional, 0-based)", type: "number", hidden: ({ parent }) => parent?.kind === "image" }),
    defineField({ name: "note", type: "text", rows: 2 }),
  ],
  preview: { select: { title: "caption" } },
});

const sectionFields = [
  defineField({ name: "sectionId", title: "Section id (e.g. introduction)", type: "string", validation: (r) => r.required() }),
  defineField({ name: "heading", type: "string", description: 'e.g. "1. Introduction" or "7.1 Main results"' }),
  defineField({
    name: "paragraphs",
    type: "array",
    of: [{ type: "text", rows: 6 }],
    description: "Cite references as [n] (parenthetical) or {n} (narrative), n = position in the reference list.",
  }),
  defineField({ name: "tables", type: "array", of: [table] }),
  defineField({ name: "figures", type: "array", of: [figure] }),
];

const subsection = defineArrayMember({
  type: "object",
  name: "bodySubsection",
  title: "Subsection",
  fields: sectionFields,
  preview: { select: { title: "heading", subtitle: "sectionId" } },
});

const section = defineArrayMember({
  type: "object",
  name: "bodySection",
  title: "Section",
  fields: [...sectionFields, defineField({ name: "subsections", type: "array", of: [subsection] })],
  preview: { select: { title: "heading", subtitle: "sectionId" } },
});

export const paper = defineType({
  name: "paper",
  title: "Paper",
  type: "document",
  groups: [
    { name: "meta", title: "Article", default: true },
    { name: "dates", title: "Dates & metrics" },
    { name: "text", title: "Full text" },
    { name: "refs", title: "References" },
  ],
  fields: [
    defineField({
      name: "articleId",
      title: "Article id",
      type: "string",
      group: "meta",
      description: `Format ${CURRENT_ISSUE.year}-v${CURRENT_ISSUE.volume}-i<issue>-<NN>, e.g. "${CURRENT_ISSUE.year}-v${CURRENT_ISSUE.volume}-i${CURRENT_ISSUE.issue}-15". The issue number in the id must match the Issue field. The DOI is derived from it.`,
      validation: (r) =>
        r.required().custom((v) =>
          typeof v === "string" && ARTICLE_ID_PATTERN.test(v) ? true : `Use the format ${CURRENT_ISSUE.year}-v${CURRENT_ISSUE.volume}-i<issue>-<NN>`,
        ),
    }),
    defineField({ name: "title", type: "string", group: "meta", validation: (r) => r.required() }),
    defineField({
      name: "sampleContent",
      title: "Sample / demonstration content",
      type: "boolean",
      group: "meta",
      initialValue: false,
      description: 'Turn on only for illustrative papers: the website then tags the paper "Sample article". Leave off for genuine published papers.',
    }),
    defineField({ name: "authors", type: "array", of: [author], group: "meta", validation: (r) => r.required().min(1) }),
    defineField({ name: "abstract", type: "text", rows: 8, group: "meta", validation: (r) => r.required() }),
    defineField({ name: "keywords", type: "array", of: [{ type: "string" }], options: { layout: "tags" }, group: "meta" }),
    defineField({ name: "jelCodes", title: "JEL codes", type: "array", of: [{ type: "string" }], options: { layout: "tags" }, group: "meta" }),
    defineField({
      name: "type",
      title: "Article type",
      type: "string",
      group: "meta",
      options: { list: ["Research Article", "Review Article", "Short Communication"] },
      initialValue: "Research Article",
    }),
    defineField({ name: "year", type: "number", group: "meta", initialValue: CURRENT_ISSUE.year, readOnly: true }),
    defineField({ name: "volume", type: "number", group: "meta", initialValue: CURRENT_ISSUE.volume, readOnly: true }),
    defineField({
      name: "issue",
      type: "number",
      group: "meta",
      initialValue: CURRENT_ISSUE.issue,
      options: { list: MANAGED_ISSUES.map((i) => ({ title: i.label, value: i.issue })), layout: "radio" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "pages", type: "string", group: "meta", description: 'Length only matters, e.g. "1–28" (the site renumbers pages per volume)', initialValue: "1–24" }),

    defineField({ name: "received", type: "date", group: "dates", validation: (r) => r.required() }),
    defineField({ name: "accepted", type: "date", group: "dates", validation: (r) => r.required() }),
    defineField({ name: "publishedOnline", title: "Published online", type: "date", group: "dates" }),
    defineField({ name: "published", title: "Issue published", type: "date", group: "dates", initialValue: CURRENT_ISSUE.published, validation: (r) => r.required() }),
    defineField({ name: "citations", type: "number", group: "dates", initialValue: 0 }),
    defineField({ name: "downloads", type: "number", group: "dates", initialValue: 0 }),
    defineField({ name: "pdfSize", title: "PDF size label", type: "string", group: "dates", initialValue: "1.50 MB" }),

    defineField({ name: "acknowledgments", type: "text", rows: 3, group: "text" }),
    defineField({ name: "funding", type: "text", rows: 2, group: "text" }),
    defineField({ name: "dataAvailability", title: "Data availability statement", type: "text", rows: 3, group: "text" }),
    defineField({ name: "editorialNote", title: "Editorial note (summary for the issue editorial)", type: "text", rows: 3, group: "text" }),
    defineField({
      name: "body",
      title: "Full text",
      type: "array",
      of: [section],
      group: "text",
      description: "Leave empty for an abstract-only paper (readers then request the full paper from the authors).",
    }),

    defineField({
      name: "refs",
      title: "References",
      type: "array",
      group: "refs",
      description: "In citation order: [1] is the first item. Use a JER citation to cite another JER article by its id.",
      of: [
        defineArrayMember({
          type: "object",
          name: "refText",
          title: "Reference (APA)",
          fields: [defineField({ name: "text", type: "text", rows: 2, validation: (r) => r.required() })],
          preview: { select: { title: "text" } },
        }),
        defineArrayMember({
          type: "object",
          name: "refJer",
          title: "JER citation",
          fields: [defineField({ name: "articleId", title: "JER article id", type: "string", validation: (r) => r.required() })],
          preview: { select: { id: "articleId" }, prepare: ({ id }) => ({ title: `JER article ${id}` }) },
        }),
      ],
    }),
  ],
  orderings: [{ title: "Article id", name: "articleIdAsc", by: [{ field: "articleId", direction: "asc" }] }],
  preview: {
    select: { title: "title", id: "articleId", hasBody: "body" },
    prepare: ({ title, id, hasBody }) => ({ title, subtitle: `${id} · ${hasBody?.length ? "full text" : "abstract only"}` }),
  },
});
