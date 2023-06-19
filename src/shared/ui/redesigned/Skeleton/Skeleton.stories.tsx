import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "shared/deprecated/Skeleton",
  component: Skeleton,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: { width: "100%", height: "200px" },
};

export const Dark: Story = {
  args: { width: "100%", height: "200px" },
  decorators: [ThemeDecoratorDark],
};
export const LightCircle: Story = {
  args: { border: "50%", width: "100px", height: "100px" },
};

export const DarkCircle: Story = {
  args: { border: "50%", width: "100px", height: "100px" },
  decorators: [ThemeDecoratorDark],
};
