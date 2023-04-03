import type { Meta, StoryObj } from "@storybook/react";
import "1app/styles/variables.scss";

import { AppButton, AppButtonVariant } from "./AppButton";

const meta = {
  title: "7shared/AppButton",
  component: AppButton,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Text",
  },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
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
