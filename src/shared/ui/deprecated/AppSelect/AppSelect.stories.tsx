import type { Meta, StoryObj } from "@storybook/react";
import { AppSelect } from "./AppSelect";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "shared/deprecated/AppSelect",
  component: AppSelect,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {
    label: "Select",
    options: [
      { content: "first", value: "1" },
      { content: "second", value: "2" },
      { content: "fird", value: "3" },
      { content: "fourth", value: "4" },
    ],
  },
} satisfies Meta<typeof AppSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
