import type { Meta, StoryObj } from "@storybook/react";
import { CommentCard } from "./CommentCard";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
