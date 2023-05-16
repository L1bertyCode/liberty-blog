import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { Configuration, DefinePlugin } from "webpack";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../../src/**/*.mdx",
    "../../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-themes",
    "@etchteam/storybook-addon-css-variables-theme",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config: Configuration) => {
    const paths: BuildPaths = {
      buildDev: "",
      buildProd: "",
      html: "",
      favicon: "",
      entry: "",
      src: path.resolve(__dirname, "..", "..", "src"),
      locales: "",
      buildLocales: "",
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push(".ts", ".tsx");
    config.resolve?.extensions?.push(".ts", ".tsx");
    config.module?.rules?.push(buildCssLoader(true));

    if (config?.module?.rules) {
      const imageRule = config.module?.rules?.find(
        (rule) => {
          if (
            typeof rule !== "string" &&
            rule.test instanceof RegExp
          ) {
            return rule.test.test(".svg");
          }
        }
      );

      if (imageRule && typeof imageRule !== "string") {
        imageRule.exclude = /\.svg$/;
      }
      config.module?.rules?.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    }

    config.plugins?.push(
      new DefinePlugin({
        __IS__DEV__: JSON.stringify(true),
        __API__: JSON.stringify(""),
        __PROJECT__: JSON.stringify("storybook"),
      })
    );
    return config;
  },
};
export default config;
