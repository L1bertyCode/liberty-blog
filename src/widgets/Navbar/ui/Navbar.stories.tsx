import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
