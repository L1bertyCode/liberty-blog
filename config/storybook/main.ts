import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { Configuration } from "webpack";
// import type { StorybookConfig } from "@storybook/react-webpack5";

module.exports = {
  stories: ["../../src/**/*.mdx", "../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
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
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push(".ts", ".tsx");
    config.resolve?.extensions?.push(".ts", ".tsx");
    config.module?.rules?.push(buildCssLoader(true));
    // if (config.module?.rules) {
    //   config.module.rules = config.module?.rules?.map(
    //     (rule: RuleSetRule | "...") => {
    //       if (rule !== "..." && /svg/.test(rule.test as string)) {
    //         return { ...rule, exclude: /\.svg$/i };
    //       }
    //       return rule;
    //     }
    //   );
    // }
    return config;
  },
};

// import type { StorybookConfig } from "@storybook/react-webpack5";
// const config: StorybookConfig = {
//   stories: ["../../src/**/*.mdx", "../../src/**/*.stories.@(js|jsx|ts|tsx)"],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions",
//   ],
//   framework: {
//     name: "@storybook/react-webpack5",
//     options: {},
//   },
//   docs: {
//     autodocs: "tag",
//   },
// };
// export default config;
