import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/7shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "../../src/7shared/config/storybook/ThemeDecorator";
import { I18nDecorator } from "../../src/7shared/config/storybook/I18nDecorator";
import "../../src/7shared/config/i18n/i18n";
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
  decorators: [ThemeDecorator, StyleDecorator, I18nDecorator],
};

export default preview;
