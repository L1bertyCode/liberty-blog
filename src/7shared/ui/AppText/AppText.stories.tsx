import type { Meta, StoryObj } from "@storybook/react";
import { AppText } from "./AppText";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "7shared/AppText",
  component: AppText,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof AppText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: { title: "Title Light", text: "Text Light" },
};

export const Dark: Story = {
  args: { title: "Title Dark", text: "Text Dark" },
  decorators: [ThemeDecoratorDark],
};
export const OnlyTitle: Story = {
  args: { title: "Title Only Light" },
};

export const OnlyTitleDark: Story = {
  args: { title: "Title Only Dark" },
  decorators: [ThemeDecoratorDark],
};

export const OnlyText: Story = {
  args: { text: "Text Only Light" },
};
export const OnlyTextDark: Story = {
  args: { text: "Text Only Dark" },
  decorators: [ThemeDecoratorDark],
};
