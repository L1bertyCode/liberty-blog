import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";
import AvatarImg from "@/shared/assets/tests/storybook.jpg";
const meta = {
  title: "shared/Avatar",
  component: Avatar,
  //tags: ["autodocs"],
  //argTypes: {},
  args: { size: 150, src: AvatarImg },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};

export const SmallLight: Story = {
  args: { size: 50 },
};

export const SmallDark: Story = {
  args: { size: 50 },

  decorators: [ThemeDecoratorDark],
};
