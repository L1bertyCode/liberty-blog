import type { Meta, StoryObj } from "@storybook/react";
import "@/app/styles/variables.scss";

import {
  AppButton,
  AppButtonSize,
  AppButtonVariant,
} from "./AppButton";
import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
  title: "shared/AppButton",
  component: AppButton,
  // tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Text",
  },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    variant: AppButtonVariant.CLEAR,
  },
};
export const ClearInverted: Story = {
  args: {
    variant: AppButtonVariant.CLEAR_INVERTED,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <div className={` ${Theme.LIGHT}`}>
          <Story />
        </div>
      </div>
    ),
  ],
};
export const Outline: Story = {
  args: {
    variant: AppButtonVariant.OUTLINE,
  },
};
export const OutlineDark: Story = {
  args: {
    variant: AppButtonVariant.OUTLINE,
  },
  decorators: [ThemeDecoratorDark],
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
export const Disabled: Story = {
  args: {
    variant: AppButtonVariant.OUTLINE,
    children: ">",
    disabled: true,
  },
};
