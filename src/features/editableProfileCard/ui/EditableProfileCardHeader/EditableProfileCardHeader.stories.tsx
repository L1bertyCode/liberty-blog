import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";
import { EditableProfileCardHeader } from "./EditableProfileCardHeader";

const meta = {
  title: "features/EditableProfileCard/EditableProfileCardHeader",
  component: EditableProfileCardHeader,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof EditableProfileCardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
