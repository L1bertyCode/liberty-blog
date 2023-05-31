import type { Meta, StoryObj } from "@storybook/react";
import ForbiddenPage from "./ForbiddenPage";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "pages/ForbiddenPage",
  component: ForbiddenPage,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
