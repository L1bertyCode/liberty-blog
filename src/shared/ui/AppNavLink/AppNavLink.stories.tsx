import type { Meta, StoryObj } from "@storybook/react";
import {
  AppNavLink,
  AppNavLinkVariant,
} from "./AppNavLink";

import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator";

const meta = {
  title: "shared/AppNavLink",
  component: AppNavLink,
  //tags: ["autodocs"],
  argTypes: {},
  args: { to: "/", children: "Link" },
} satisfies Meta<typeof AppNavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    variant: AppNavLinkVariant.PRIMARY,
  },
};

export const Red: Story = {
  args: {
    variant: AppNavLinkVariant.RED,
  },
};
export const Secondary: Story = {
  args: {
    variant: AppNavLinkVariant.SECONDARY,
  },
};
export const Dark: Story = {
  args: {
    variant: AppNavLinkVariant.PRIMARY,
  },
  decorators: [ThemeDecoratorDark],
};

export const RedDark: Story = {
  args: {
    variant: AppNavLinkVariant.RED,
  },
  decorators: [ThemeDecoratorDark],
};
export const SecondaryDark: Story = {
  args: {
    variant: AppNavLinkVariant.SECONDARY,
  },
  decorators: [ThemeDecoratorDark],
};
