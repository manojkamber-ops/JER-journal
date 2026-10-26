import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { paper } from "./schemaTypes/paper";
import { alertSubscription, contactMessage, fullTextRequest, manuscriptSubmission, readerAccount } from "./schemaTypes/forms";
import { formsStructure, papersStructure } from "./structure";
import { issueDate, volumeYear } from "./current-issue";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "imuzzo9u";

// Two workspaces: papers of every volume and issue (public "production" dataset, read live by the website) and the
// entries people submit through the website's forms (private "forms" dataset).
export default defineConfig([
  {
    name: "papers",
    title: "JER — Papers",
    basePath: "/papers",
    projectId,
    dataset: "production",
    plugins: [structureTool({ structure: papersStructure }), visionTool()],
    schema: {
      types: [paper],
      // "+" inside Volume > Issue creates a paper with that volume, issue, year and issue date already filled in
      templates: (prev) => [
        ...prev,
        {
          id: "paper-in-issue",
          title: "Paper in this issue",
          schemaType: "paper",
          parameters: [
            { name: "volume", type: "number" },
            { name: "issue", type: "number" },
          ],
          value: ({ volume, issue }: { volume: number; issue: number }) => ({
            volume,
            issue,
            year: volumeYear(volume),
            articleId: `${volumeYear(volume)}-v${volume}-i${issue}-`,
            sampleContent: false,
            ...(issueDate(volume, issue) ? { published: issueDate(volume, issue) } : {}),
          }),
        },
      ],
    },
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
