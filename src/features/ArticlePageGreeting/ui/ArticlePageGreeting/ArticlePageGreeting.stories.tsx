import type { Meta, StoryObj } from "@storybook/react";
import { ArticlePageGreeting } from "./ArticlePageGreeting";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "features/ArticlePageGreeting",
  component: ArticlePageGreeting,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ArticlePageGreeting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
