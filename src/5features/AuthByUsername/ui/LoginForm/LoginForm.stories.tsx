import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "5features/LoginForm",
  component: LoginForm,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
