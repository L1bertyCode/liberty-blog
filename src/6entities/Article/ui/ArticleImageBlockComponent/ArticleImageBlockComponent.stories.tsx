import type { Meta, StoryObj } from "@storybook/react";
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "6entities/ArticleImageBlockComponent",
  component: ArticleImageBlockComponent,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
