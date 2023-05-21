import type { Meta, StoryObj } from "@storybook/react";
import {
  AppText,
  AppTextSize,
  AppTextVariant,
} from "./AppText";

import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator";

const meta = {
  title: "shared/AppText",
  component: AppText,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof AppText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: { title: "Title Light", text: "Text Light" },
};

export const Dark: Story = {
  args: { title: "Title Dark", text: "Text Dark" },
  decorators: [ThemeDecoratorDark],
};
export const OnlyTitle: Story = {
  args: { title: "Title Only Light" },
};

export const OnlyTitleDark: Story = {
  args: { title: "Title Only Dark" },
  decorators: [ThemeDecoratorDark],
};

export const OnlyText: Story = {
  args: { text: "Text Only Light" },
};
export const OnlyTextDark: Story = {
  args: { text: "Text Only Dark" },
  decorators: [ThemeDecoratorDark],
};

export const ErrorLight: Story = {
  args: {
    title: "Error Title Light",
    text: "Error Text Light",
    variant: AppTextVariant.ERROR,
  },
};

export const ErrorDark: Story = {
  args: {
    title: "Error Title Dark",
    text: "Error Text Dark",
    variant: AppTextVariant.ERROR,
  },
  decorators: [ThemeDecoratorDark],
};

export const SizeL: Story = {
  args: {
    title: "Size L Title Light",
    text: "Size L Text Light",
    size: AppTextSize.L,
  },
};

export const SizeLDark: Story = {
  args: {
    title: "Size L Dark Title",
    text: "Size L Dark Text",
    size: AppTextSize.L,
  },
  decorators: [ThemeDecoratorDark],
};
export const SizeM: Story = {
  args: {
    title: "Size M Title Light",
    text: "Size M Text Light",
    size: AppTextSize.M,
  },
};

export const SizeMDark: Story = {
  args: {
    title: "Size M Dark Title",
    text: "Size M Dark Text",
    size: AppTextSize.M,
  },
  decorators: [ThemeDecoratorDark],
};
export const SizeS: Story = {
  args: {
    title: "Size S Title Light",
    text: "Size S Text Light",
    size: AppTextSize.S,
  },
};

export const SizeSDark: Story = {
  args: {
    title: "Size S Dark Title",
    text: "Size S Dark Text",
    size: AppTextSize.S,
  },
  decorators: [ThemeDecoratorDark],
};
