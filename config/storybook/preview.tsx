import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/7shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "../../src/7shared/config/storybook/ThemeDecorator";
import { Theme } from "../../src/1app/porviders/ThemePorvider/index";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // argTypes: {
  //   theme: { control: "select", options: [Theme.LIGHT, Theme.DARK] },
  // },
  // args: {
  //   theme: Theme.LIGHT,
  // },
  decorators: [ThemeDecorator, StyleDecorator],
};

export default preview;
