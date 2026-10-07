import { defineField, defineType } from "sanity";

/** Entries created by the website's forms (via the server API routes). Editors only update the status fields. */

const submittedAt = defineField({ name: "submittedAt", title: "Submitted at", type: "datetime", readOnly: true });
const status = (list: string[], initial: string) =>
  defineField({ name: "status", title: "Handling status", type: "string", options: { list, layout: "radio" }, initialValue: initial });

export const contactMessage = defineType({
  name: "contactMessage",
  title: "Contact message",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", readOnly: true }),
    defineField({ name: "email", type: "string", readOnly: true }),
    defineField({ name: "organisation", type: "string", readOnly: true }),
    defineField({ name: "subject", type: "string", readOnly: true }),
    defineField({ name: "message", type: "text", readOnly: true }),
    submittedAt,
    status(["new", "in progress", "replied", "closed"], "new"),
  ],
  orderings: [{ title: "Newest first", name: "newest", by: [{ field: "submittedAt", direction: "desc" }] }],
  preview: { select: { title: "subject", subtitle: "email" } },
});

export const fullTextRequest = defineType({
  name: "fullTextRequest",
  title: "Full-paper request",
  type: "document",
  fields: [
    defineField({ name: "articleId", type: "string", readOnly: true }),
    defineField({ name: "articleTitle", type: "string", readOnly: true }),
    defineField({ name: "doi", title: "DOI", type: "string", readOnly: true }),
    defineField({ name: "correspondingAuthor", type: "string", readOnly: true }),
    defineField({ name: "name", title: "Requester", type: "string", readOnly: true }),
    defineField({ name: "email", type: "string", readOnly: true }),
    defineField({ name: "organisation", type: "string", readOnly: true }),
    defineField({ name: "purpose", type: "string", readOnly: true }),
    defineField({ name: "message", type: "text", readOnly: true }),
    submittedAt,
    status(["new", "forwarded to author", "sent", "declined"], "new"),
  ],
  orderings: [{ title: "Newest first", name: "newest", by: [{ field: "submittedAt", direction: "desc" }] }],
  preview: { select: { title: "articleTitle", subtitle: "email" } },
});

export const manuscriptSubmission = defineType({
  name: "manuscriptSubmission",
  title: "Manuscript submission",
  type: "document",
  fields: [
    defineField({ name: "reference", type: "string", readOnly: true }),
    defineField({ name: "submissionStatus", title: "Form status", type: "string", readOnly: true, description: "draft or submitted" }),
    defineField({ name: "title", type: "string", readOnly: true }),
    defineField({ name: "articleType", type: "string", readOnly: true }),
    defineField({ name: "wordCount", type: "number", readOnly: true }),
    defineField({ name: "abstract", type: "text", readOnly: true }),
    defineField({ name: "keywords", type: "string", readOnly: true }),
    defineField({ name: "jelCodes", title: "JEL codes", type: "string", readOnly: true }),
    defineField({ name: "authorName", title: "Corresponding author", type: "string", readOnly: true }),
    defineField({ name: "authorEmail", type: "string", readOnly: true }),
    defineField({ name: "orcid", title: "ORCID", type: "string", readOnly: true }),
    defineField({ name: "affiliations", type: "text", readOnly: true }),
    defineField({ name: "coverLetter", type: "text", readOnly: true }),
    defineField({ name: "manuscriptFile", title: "Manuscript file", type: "file", readOnly: true }),
    defineField({ name: "accountEmail", title: "Submitted from account", type: "string", readOnly: true }),
    submittedAt,
    defineField({
      name: "status",
      title: "Editorial status",
      type: "string",
      options: { list: ["received", "desk review", "under review", "revision requested", "accepted", "rejected"], layout: "dropdown" },
      initialValue: "received",
    }),
  ],
  orderings: [{ title: "Newest first", name: "newest", by: [{ field: "submittedAt", direction: "desc" }] }],
  preview: { select: { title: "title", ref: "reference", st: "submissionStatus" }, prepare: ({ title, ref, st }) => ({ title, subtitle: `${ref} · ${st}` }) },
});

export const alertSubscription = defineType({
  name: "alertSubscription",
  title: "Email alert subscription",
  type: "document",
  fields: [
    defineField({ name: "email", type: "string", readOnly: true }),
    defineField({ name: "name", type: "string", readOnly: true }),
    defineField({ name: "topics", type: "array", of: [{ type: "string" }], readOnly: true }),
    defineField({ name: "updatedAt", title: "Last updated", type: "datetime", readOnly: true }),
    defineField({ name: "active", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "email", topics: "topics" }, prepare: ({ title, topics }) => ({ title, subtitle: (topics ?? []).join(", ") }) },
});

export const readerAccount = defineType({
  name: "readerAccount",
  title: "Reader account",
  type: "document",
  description: "Created when someone registers on the website. Passwords are never sent to Sanity.",
  fields: [
    defineField({ name: "name", type: "string", readOnly: true }),
    defineField({ name: "email", type: "string", readOnly: true }),
    defineField({ name: "affiliation", type: "string", readOnly: true }),
    defineField({ name: "registeredAt", title: "Registered at", type: "datetime", readOnly: true }),
  ],
  preview: { select: { title: "name", subtitle: "email" } },
});
