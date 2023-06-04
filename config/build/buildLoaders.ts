import { RuleSetRule } from "webpack";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { BuildOptions } from "./types/config";

export const buildLoaders = (
  buildOptions: BuildOptions
): RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
  // const tsLoader = {
  //   test: /\.tsx?$/,
  //   use: "ts-loader",
  //   exclude: /node_modules/,
  // };
  // const babelLoader = buildBabelLoader(buildOptions);
  const codeBabelLoader = buildBabelLoader({
    ...buildOptions,
    isTsx: false,
  });
  const tsxCodeBabelLoader = buildBabelLoader({
    ...buildOptions,
    isTsx: true,
  });
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
  const cssLoader = buildCssLoader(buildOptions.isDev);

  return [
    cssLoader,
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
  ];
};
