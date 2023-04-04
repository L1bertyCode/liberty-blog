import type { Meta, StoryObj } from "@storybook/react";
import "1app/styles/variables.scss";

import { Sidebar } from "./Sidebar";
import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "4shared/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {},
  args: {
  
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
