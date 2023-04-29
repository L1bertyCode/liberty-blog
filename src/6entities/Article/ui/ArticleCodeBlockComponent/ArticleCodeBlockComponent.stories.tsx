import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "6entities/ArticleCodeBlockComponent",
  component: ArticleCodeBlockComponent,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
