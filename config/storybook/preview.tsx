import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/7shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "../../src/7shared/config/storybook/ThemeDecorator";
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
  decorators: [StyleDecorator, ThemeDecorator],
};

export default preview;
