import { RuleSetRule } from "webpack";

export const buildLoaders = (): RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const cssLoader = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  };

  return [cssLoader, tsLoader];
};
