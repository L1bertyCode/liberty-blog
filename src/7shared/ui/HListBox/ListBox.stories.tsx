// });
import type { Meta, StoryObj } from "@storybook/react";
import { Listbox } from "./ListBox";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "7shared/HListBox",
  component: Listbox,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
