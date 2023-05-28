import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator";
import { AppButton } from "../../../AppButton/AppButton";

const meta = {
  title: "shared/Dropdown",
  component: Dropdown,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {
    trigger: <AppButton>Open</AppButton>,
    items: [
      { content: "first" },
      { content: "second" },
      { content: "third" },
      { content: "foutrh" },
    ],
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
