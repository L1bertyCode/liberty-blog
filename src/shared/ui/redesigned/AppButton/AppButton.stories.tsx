import type { Meta, StoryObj } from "@storybook/react";
import "@/app/styles/variables.scss";

import { AppButton } from "./AppButton";
import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta = {
  title: "shared/redesigned/AppButton",
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
    variant: "clear",
  },
};
export const ClearInverted: Story = {
  args: {
    variant: "outline",
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
    variant: "outline",
  },
};
export const OutlineDark: Story = {
  args: {
    variant: "outline",
  },
  decorators: [ThemeDecoratorDark],
};

export const Background: Story = {
  args: {
    variant: "outline",
  },
};
export const BackgroundInverted: Story = {
  args: {
    variant: "outline",
  },
};

export const Square: Story = {
  args: {
    variant: "outline",
    children: ">",
    square: true,
  },
};
export const SquareL: Story = {
  args: {
    variant: "outline",
    children: ">",
    square: true,
    size: "l",
  },
};
export const SquareXL: Story = {
  args: {
    variant: "outline",
    children: ">",
    square: true,
    size: "xl",
  },
};
export const Disabled: Story = {
  args: {
    variant: "outline",
    children: ">",
    disabled: true,
  },
};
