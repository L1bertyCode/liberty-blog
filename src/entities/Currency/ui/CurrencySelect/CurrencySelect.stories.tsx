import type { Meta, StoryObj } from "@storybook/react";
import { CurrencySelect } from "./CurrencySelect";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
