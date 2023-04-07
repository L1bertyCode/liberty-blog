import type { Meta, StoryObj } from "@storybook/react";
import "1app/styles/variables.scss";

import { AppButton, AppButtonSize, AppButtonVariant } from "./AppButton";
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

export const Default: Story = {};
export const Primary: Story = {
  args: {
    variant: AppButtonVariant.PRIMARY,
  },
};

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

export const Background: Story = {
  args: {
    variant: AppButtonVariant.BACKGROUND,
  },
};
export const BackgroundInverted: Story = {
  args: {
    variant: AppButtonVariant.BACKGROUND_INVERTED,
  },
};
export const DefaultDark: Story = {
  decorators: [ThemeDecoratorDark],
};

export const PrimaryDark: Story = {
  args: {
    variant: AppButtonVariant.PRIMARY,
  },
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
export const Square: Story = {
  args: {
    variant: AppButtonVariant.BACKGROUND_INVERTED,
    children: ">",
    square: true,
  },
};
export const SquareL: Story = {
  args: {
    variant: AppButtonVariant.BACKGROUND_INVERTED,
    children: ">",
    square: true,
    size: AppButtonSize.L,
  },
};
export const SquareXL: Story = {
  args: {
    variant: AppButtonVariant.BACKGROUND_INVERTED,
    children: ">",
    square: true,
    size: AppButtonSize.XL,
  },
};
