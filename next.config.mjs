import path from "path";
import { fileURLToPath } from "url";
import withPlaiceholder from "@plaiceholder/next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = withPlaiceholder({
  compress: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
    prependData: `@import "@styles/main.scss";`,
  },
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    INITIAL_PATH_URL: process.env.NEXT_PUBLIC_INITIAL_PATH_URL,
  },
});

export default nextConfig;
