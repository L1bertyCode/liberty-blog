import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildPaths } from "./types/config";
const HtmlWebpackPlugin = require("html-webpack-plugin");

export const buildPlugins = (
  buildPaths: BuildPaths
): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: buildPaths.html,
      favicon: buildPaths.favicon,
    }),
    new ProgressPlugin(),
  ];
};
