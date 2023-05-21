import type { Meta, StoryObj } from "@storybook/react";
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent";

import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator";
import { ArticleBlockType } from "../../model/types/article";

const meta = {
  title: "entities/ArticleImageBlockComponent",
  component: ArticleImageBlockComponent,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    block: {
      id: "8",
      type: ArticleBlockType.IMAGE,
      src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
      title: "Рисунок 1 - скриншот сайта",
    },
  },
};

export const Dark: Story = {
  args: {
    block: {
      id: "8",
      type: ArticleBlockType.IMAGE,
      src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
      title: "Рисунок 1 - скриншот сайта",
    },
  },
  decorators: [ThemeDecoratorDark],
};
