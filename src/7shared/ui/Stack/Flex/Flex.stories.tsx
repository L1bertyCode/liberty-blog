import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

const meta = {
  title: "7shared/Flex",
  component: Flex,
  tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: "column",
    justify: "end",
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
  decorators: [ThemeDecoratorDark],
};
export const RowGap4: Story = {
  args: {
    gap: "4",
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
  decorators: [ThemeDecoratorDark],
};
export const RowGap8: Story = {
  args: {
    gap: "8",
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
  decorators: [ThemeDecoratorDark],
};
export const RowGap16: Story = {
  args: {
    gap: "16",
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
  decorators: [ThemeDecoratorDark],
};
export const RowGap32: Story = {
  args: {
    gap: "32",
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
  decorators: [ThemeDecoratorDark],
};
