
// });
import type { Meta, StoryObj } from "@storybook/react";
import { MyHListbox } from "./ListBox";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "7shared/HListBox",
  component: MyHListbox,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof MyHListbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
