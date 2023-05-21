import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";

import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator";

const meta = {
  title: "shared/Loader",
  component: Loader,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
