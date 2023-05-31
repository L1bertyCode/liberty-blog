import { ResolveOptions } from "webpack";
import { BuildPaths } from "./types/config";

export const buildResolvers = (
  buildPaths: BuildPaths
): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [buildPaths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@": buildPaths.src,
    },
  };
};
