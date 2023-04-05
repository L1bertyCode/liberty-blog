import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

import {
  ThemeDecoratorDark,
  ThemeDecorator,
} from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "7shared/ThemeSwitcher",
  component: ThemeSwitcher,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
