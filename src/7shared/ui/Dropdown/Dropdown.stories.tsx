import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "7shared/Dropdown",
  component: Dropdown,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
