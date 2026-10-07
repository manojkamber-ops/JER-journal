import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { paper } from "./schemaTypes/paper";
import { alertSubscription, contactMessage, fullTextRequest, manuscriptSubmission, readerAccount } from "./schemaTypes/forms";
import { formsStructure, papersStructure } from "./structure";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "imuzzo9u";

// Two workspaces: the current issue's papers (public "production" dataset, read live by the website) and the
// entries people submit through the website's forms (private "forms" dataset).
export default defineConfig([
  {
    name: "papers",
    title: "JER — Current issue papers",
    basePath: "/papers",
    projectId,
    dataset: "production",
    plugins: [structureTool({ structure: papersStructure }), visionTool()],
    schema: { types: [paper] },
  },
  {
    name: "forms",
    title: "JER — Form submissions",
    basePath: "/forms",
    projectId,
    dataset: "forms",
    plugins: [structureTool({ structure: formsStructure }), visionTool()],
    schema: { types: [manuscriptSubmission, fullTextRequest, contactMessage, alertSubscription, readerAccount] },
  },
]);
