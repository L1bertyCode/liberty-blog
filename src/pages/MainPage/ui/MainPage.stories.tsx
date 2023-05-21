import type { Meta, StoryObj } from "@storybook/react";
import MainPage from "./MainPage";

import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
