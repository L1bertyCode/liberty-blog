import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import { I18nDecorator } from "../../src/shared/config/storybook/I18nDecorator";
import { RouteDecoratar } from "../../src/shared/config/storybook/RouteDecoratar";
import { StoreDecorator } from "../../src/shared/config/storybook/StoreDecorator";
import { Theme } from "../../src/shared/const/theme";
import { Preview } from "@storybook/react/dist";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // layout: "fullscreen",
    // mockAddonConfigs: {
    //   globalMockData: [
    //     {
    //       url: "http://localhost:0000",
    //       method: "PUT",
    //       status: 201,
    //       response: {},
    //     },
    //   ],
    //   refreshStoryOnUpdate: true,
    // },\

    themes: {
      default: "light",
      list: [
        {
          name: "light",
          class: Theme.LIGHT,
          color: "#ffffff",
        },
        {
          name: "dark",
          class: Theme.DARK,
          color: "#000000",
        },
        {
          name: "orange",
          class: Theme.ORANGE,
          color: "#ffb005",
        },
      ],
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
