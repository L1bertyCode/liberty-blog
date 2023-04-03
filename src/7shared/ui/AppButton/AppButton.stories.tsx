import type { Meta, StoryObj } from "@storybook/react";

import { AppButton, AppButtonVariant } from "./AppButton";

const meta = {
  title: "7shared/AppButton",
  component: AppButton,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};
export const Clear: Story = {
  args: {
    children: "Text",
    variant: AppButtonVariant.CLEAR,
  },
};
