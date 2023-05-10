import type { Meta, StoryObj } from "@storybook/react";
import { ArticlesPageFilters } from "./ArticlesPageFilters";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "3pages/ArticlesPageFilters",
  component: ArticlesPageFilters,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
