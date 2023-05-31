import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundPage } from "./NotFoundPage";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
