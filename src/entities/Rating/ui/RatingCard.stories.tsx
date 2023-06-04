import type { Meta, StoryObj } from "@storybook/react";
import { RatingCard } from "./RatingCard";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "entities/RatingCard",
  component: RatingCard,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
