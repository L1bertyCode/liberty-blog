// });
import type { Meta, StoryObj } from "@storybook/react";
import { Listbox } from "./ListBox";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "shared/deprecated/Listbox",
  component: Listbox,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {
    items: [
      { content: "first", value: "123" },
      { content: "second", value: "234" },
      { content: "third", value: "345" },
      { content: "fourth", value: "456" },
    ],
    value: "Open",
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: 200, boxSizing: "border-box" }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopLert: Story = {
  args: { direction: "top left" },
  decorators: [ThemeDecoratorDark],
};
export const TopRight: Story = {
  args: { direction: "top right" },
  decorators: [ThemeDecoratorDark],
};
export const BottomLeft: Story = {
  args: { direction: "bottom left" },
  decorators: [ThemeDecoratorDark],
};
export const BottomRight: Story = {
  args: { direction: "bottom right" },
  decorators: [ThemeDecoratorDark],
};
