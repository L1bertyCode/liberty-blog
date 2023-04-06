import {
  ProgressPlugin,
  DefinePlugin,
  WebpackPluginInstance,
  // HotModuleReplacementPlugin,
} from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export const buildPlugins = (
  buildOptions: BuildOptions
): WebpackPluginInstance[] => {
  const { buildPaths, isDev } = buildOptions;
  const plugins = [
    new HtmlWebpackPlugin({
      template: buildPaths.html,
      favicon: buildPaths.favicon,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __IS__DEV__: JSON.stringify(isDev),
    }),
  ];
  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
    // plugins.push(new HotModuleReplacementPlugin());
  }
  return plugins;
};
