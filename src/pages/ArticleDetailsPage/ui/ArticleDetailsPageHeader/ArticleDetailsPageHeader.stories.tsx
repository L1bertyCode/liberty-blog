import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title:
    "pages/ArticleDetailsPage/ArticleDetailsPageHeader",
  component: ArticleDetailsPageHeader,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
