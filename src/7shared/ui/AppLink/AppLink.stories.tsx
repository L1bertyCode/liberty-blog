import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkVariant } from "./AppLink";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "7shared/AppLink",
  component: AppLink,
  //tags: ["autodocs"],
  argTypes: {},
  args: { to: "/", children: "Link" },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    variant: AppLinkVariant.PRIMARY,
  },
};

export const Red: Story = {
  args: {
    variant: AppLinkVariant.RED,
  },
};
export const Secondary: Story = {
  args: {
    variant: AppLinkVariant.SECONDARY,
  },
};
export const Dark: Story = {
  args: {
    variant: AppLinkVariant.PRIMARY,
  },
  decorators: [ThemeDecoratorDark],
};

export const RedDark: Story = {
  args: {
    variant: AppLinkVariant.RED,
  },
  decorators: [ThemeDecoratorDark],
};
export const SecondaryDark: Story = {
  args: {
    variant: AppLinkVariant.SECONDARY,
  },
  decorators: [ThemeDecoratorDark],
};
