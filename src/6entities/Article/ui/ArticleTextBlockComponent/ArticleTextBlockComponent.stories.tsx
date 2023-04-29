import type { Meta, StoryObj } from "@storybook/react";
import { ArticleTextBlockComponent } from "./ArticleTextBlockComponent";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "6entities/ArticleTextBlockComponent",
  component: ArticleTextBlockComponent,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
