import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardVariant } from "./Card";

import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator";
import { AppText } from "../AppText/AppText";

const meta = {
  title: "shared/Card",
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
export const LightOutlined: Story = {
  args: {
    children: <AppText text={"Text"} title={"Title"} />,
    variant: CardVariant.OUTLINED,
  },
};

export const DarkOutlined: Story = {
  args: {
    children: <AppText text={"Text"} title={"Title"} />,
    variant: CardVariant.OUTLINED,
  },
  decorators: [ThemeDecoratorDark],
};
