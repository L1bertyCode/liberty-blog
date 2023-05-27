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
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import CircularDependencyPlugin from "circular-dependency-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
export const buildPlugins = (
  buildOptions: BuildOptions
): WebpackPluginInstance[] => {
  const { buildPaths, isDev, apiUrl, project } =
    buildOptions;
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
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: buildPaths.locales,
          to: buildPaths.buildLocales,
        },
      ],
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
  ];
  if (isDev) {
    plugins.push(
      new BundleAnalyzerPlugin({ openAnalyzer: false })
    );
    plugins.push(new ReactRefreshWebpackPlugin());

    // plugins.push(new HotModuleReplacementPlugin());
  }

  return plugins;
};
