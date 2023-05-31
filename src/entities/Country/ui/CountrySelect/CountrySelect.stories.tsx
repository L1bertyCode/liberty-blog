import type { Meta, StoryObj } from "@storybook/react";
import { CountrySelect } from "./CountrySelect";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "entities/CountrySelect",
  component: CountrySelect,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
