import type { Meta, StoryObj } from "@storybook/react";
import { AppInput } from "./AppInput";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "shared/deprecated/AppInput",
  component: AppInput,
  //tags: ["autodocs"],
  //argTypes: {},
  args: { placeholder: "Type text" },
} satisfies Meta<typeof AppInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
