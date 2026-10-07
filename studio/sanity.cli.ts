import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "imuzzo9u",
    dataset: "production",
  },
  // Hosted at https://jer-journal.sanity.studio (`npm run deploy` in this folder)
  studioHost: process.env.SANITY_STUDIO_HOST || "jer-journal",
  deployment: { appId: "yo7yrxjylfgoh64kuyng8cq2" },
});
