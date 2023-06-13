import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";
import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";
import { StoreProvider } from "@/app/providers/StoreProvider";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  // tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNoAuth: Story = {};

export const DarkNoAuth: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};

export const LightAuth: Story = {
  decorators: [
    (Story) => {
      return (
        <StoreProvider
          initialState={{
            user: {
              authData: { id: "", username: "user" },
            },
          }}>
          <Story />
        </StoreProvider>
      );
    },
  ],
};

export const DarkAuth: Story = {
  args: {},
  decorators: [
    ThemeDecoratorDark,
    (Story) => {
      return (
        <StoreProvider
          initialState={{
            user: {
              authData: { id: "", username: "user" },
            },
          }}>
          <Story />
        </StoreProvider>
      );
    },
  ],
};
