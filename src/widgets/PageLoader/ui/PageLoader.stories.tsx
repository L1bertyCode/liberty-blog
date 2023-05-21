import type { Meta, StoryObj } from "@storybook/react";
import { PageLoader } from "./PageLoader";

import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator";

const meta = {
  title: "widgets/PageLoader",
  component: PageLoader,
  // tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
