import type { Meta, StoryObj } from "@storybook/react";
import ArticlesPage from "./ArticlesPage";

import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator";

const meta = {
  title: "pages/ArticlesPage",
  component: ArticlesPage,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
