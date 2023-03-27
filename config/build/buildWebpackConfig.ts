import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (
  buildOPtions: BuildOptions
): Configuration => {
  const { buildMode, buildPaths, PORT } = buildOPtions;
  return {
    mode: buildMode,
    entry: buildPaths.entry,
    output: {
      path: buildOPtions.isDev ? buildPaths.buildDev : buildPaths.buildProd,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(buildPaths),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devServer: buildDevServer(PORT),
  };
};
