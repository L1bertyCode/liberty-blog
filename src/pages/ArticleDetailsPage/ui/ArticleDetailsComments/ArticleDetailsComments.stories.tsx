import type { Meta, StoryObj } from "@storybook/react";
import ArticleDetailsComments from "./ArticleDetailsComments";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "pages/ArticleDetailsPage/ArticleDetailsComments",
  component: ArticleDetailsComments,
  //tags: ["autodocs"],
  //argTypes: {},
  args: { id: "1" },
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
