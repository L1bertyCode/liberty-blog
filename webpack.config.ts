import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv } from "./config/build/types/config";

const path = require("path");

export default (env: BuildEnv) => {
  const buildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    buildDev: path.resolve(__dirname, "build-dev"),
    buildProd: path.resolve(__dirname, "build-prod"),
    html: path.resolve(__dirname, "public", "index.html"),
    favicon: path.resolve(
      __dirname,
      "public",
      "favicon.ico"
    ),
    src: path.resolve(__dirname, "src"),
  };
  const buildMode = env.mode || "development";
  const isDev = buildMode === "development";
  const PORT = env.port || 3300;
  const apiUrl = env.apiUrl || "http://localhost:8000";

  const config = buildWebpackConfig({
    buildMode,
    buildPaths,
    isDev,
    port: PORT,
    apiUrl: apiUrl,
  });
  return config;
};
