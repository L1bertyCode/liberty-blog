import type { Meta, StoryObj } from "@storybook/react";
import { AppNavLink } from "./AppNavLink";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "shared/redesigned/AppNavLink",
  component: AppNavLink,
  //tags: ["autodocs"],
  argTypes: {},
  args: { to: "/", children: "Link" },
} satisfies Meta<typeof AppNavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    variant: "primary",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
export const Dark: Story = {
  args: {
    variant: "primary",
  },
  decorators: [ThemeDecoratorDark],
};

export const RedDark: Story = {
  args: {
    variant: "red",
  },
  decorators: [ThemeDecoratorDark],
};
export const SecondaryDark: Story = {
  args: {
    variant: "secondary",
  },
  decorators: [ThemeDecoratorDark],
};
