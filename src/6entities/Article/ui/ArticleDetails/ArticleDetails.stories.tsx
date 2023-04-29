import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetails } from "./ArticleDetails";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "6entities/ArticleDetails",
  component: ArticleDetails,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {id:"1"},
};

export const Dark: Story = {
  args: {id:"1"},
  decorators: [ThemeDecoratorDark],
};
