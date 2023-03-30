import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (
  buildOptions: BuildOptions
): Configuration => {
  const { buildMode, buildPaths, port, isDev } = buildOptions;
  return {
    mode: buildMode,
    entry: buildPaths.entry,
    output: {
      path: buildOptions.isDev ? buildPaths.buildDev : buildPaths.buildProd,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(buildOptions),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(buildPaths),
    devServer: isDev ? buildDevServer(port) : undefined,
    devtool: isDev ? "inline-source-map" : undefined,
  };
};
