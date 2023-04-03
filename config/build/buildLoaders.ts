import { RuleSetRule } from "webpack";
import { buildCssLoader } from "./loaders/buildCssLoader";

export const buildLoaders = (isDev: boolean): RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [["i18next-extract", { locales: ["en", "ru"] }]],
      },
    },
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
  const cssLoader = buildCssLoader(isDev);

  return [cssLoader, fileLoader, svgLoader, babelLoader, tsLoader];
};
