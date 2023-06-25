import type { Meta, StoryObj } from "@storybook/react";
import { UiDesignSwitcher } from "./UiDesignSwitcher";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "pages/UiDesignSwitcher",
  component: UiDesignSwitcher,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof UiDesignSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
