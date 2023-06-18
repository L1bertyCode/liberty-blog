import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "shared/deprecated/Modal",
  component: Modal,
  //tags: ["autodocs"],
  //argTypes: {},
  args: { children: "123", isOpen: true },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
