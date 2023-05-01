import type { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "6entities/CommentList",
  component: CommentList,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
