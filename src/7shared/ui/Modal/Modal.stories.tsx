import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

import {
  ThemeDecoratorDark,
  ThemeDecorator,
} from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "7shared/Modal",
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
