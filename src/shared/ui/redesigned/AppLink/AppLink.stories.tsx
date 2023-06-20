import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkVariant } from "./AppLink";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "shared/redesigned/AppLink",
  component: AppLink,
  //tags: ["autodocs"],
  argTypes: {},
  args: { to: "/", children: "Link" },
} satisfies Meta<typeof AppLink>;

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
