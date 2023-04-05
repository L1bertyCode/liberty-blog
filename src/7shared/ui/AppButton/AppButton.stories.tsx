import type { Meta, StoryObj } from "@storybook/react";
import "1app/styles/variables.scss";

import { AppButton, AppButtonVariant } from "./AppButton";
import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "7shared/AppButton",
  component: AppButton,
  // tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Text",
  },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Clear: Story = {
  args: {
    variant: AppButtonVariant.CLEAR,
  },
};
export const Outline: Story = {
  args: {
    variant: AppButtonVariant.OUTLINE,
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecoratorDark],
};
export const ClearDark: Story = {
  args: {
    variant: AppButtonVariant.CLEAR,
  },
  decorators: [ThemeDecoratorDark],
};
export const OutlineDark: Story = {
  args: {
    variant: AppButtonVariant.OUTLINE,
  },
  decorators: [ThemeDecoratorDark],
};
