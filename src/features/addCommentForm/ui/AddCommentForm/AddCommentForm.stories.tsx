import type { Meta, StoryObj } from "@storybook/react";
import AddCommentForm from "./AddCommentForm";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
