import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";
import { AppText } from "../AppText/AppText";

const meta = {
  title: "7shared/Card",
  component: Card,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: <AppText text={"Text"} title={"Title"} />,
  },
};

export const Dark: Story = {
  args: {
    children: <AppText text={"Text"} title={"Title"} />,
  },
  decorators: [ThemeDecoratorDark],
};
