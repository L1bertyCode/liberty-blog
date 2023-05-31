import type { Meta, StoryObj } from "@storybook/react";
import { EditableProfileCard } from "./EditableProfileCard";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";

const meta = {
  title: "features/EditableProfileCard/EditableProfileCard",
  component: EditableProfileCard,
  //tags: ["autodocs"],
  //argTypes: {},
  args: { id: "1" },
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
