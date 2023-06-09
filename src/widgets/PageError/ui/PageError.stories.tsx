import type { Meta, StoryObj } from "@storybook/react";
import { PageError } from "./PageError";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "widgets/PageError",
  component: PageError,
  argTypes: {},
  args: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
