import { RuleSetRule } from "webpack";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export const buildLoaders = (
  isDev: boolean
): RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const babelLoader = buildBabelLoader(isDev);
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
  const cssLoader = buildCssLoader(isDev);

  return [
    cssLoader,
    fileLoader,
    svgLoader,
    babelLoader,
    tsLoader,
  ];
};
