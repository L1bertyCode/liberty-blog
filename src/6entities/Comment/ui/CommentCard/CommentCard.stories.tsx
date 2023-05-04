import type { Meta, StoryObj } from "@storybook/react";
import { CommentCard } from "./CommentCard";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "6entities/Comment/CommentCard",
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
