import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "imuzzo9u",
    dataset: "production",
  },
  // Hosted at https://<studioHost>.sanity.studio after `npm run deploy`
  studioHost: process.env.SANITY_STUDIO_HOST || undefined,
});
