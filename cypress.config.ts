import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  env: {
    localUrl: "http://localhost:3000",
    prodUrl: "https://elo7-landing-case.vercel.app",
    apiUrl: "https://run.mocky.io/v3/8fc51aca-478a-4802-945b-688855d78e36",
  },
  e2e: {},
});
