import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import { I18nDecorator } from "../../src/shared/config/storybook/I18nDecorator";
import { RouteDecoratar } from "../../src/shared/config/storybook/RouteDecoratar";
import { StoreDecorator } from "../../src/shared/config/storybook/StoreDecorator";
import { Theme } from "../../src/app/providers/ThemePorvider";

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
  argTypes: {
    theme: {
      control: "select",
      options: [Theme.LIGHT, Theme.DARK],
    },
  },
  args: {
    theme: Theme.LIGHT,
  },
  decorators: [
    RouteDecoratar,
    StyleDecorator,
    ThemeDecorator,
    I18nDecorator,
    StoreDecorator,
  ],
};

export default preview;
