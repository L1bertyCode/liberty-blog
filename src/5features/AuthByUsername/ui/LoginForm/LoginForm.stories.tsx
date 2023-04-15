import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";
import { StoreProvider } from "1app/porviders/StroreProvider";

const meta = {
  title: "5features/LoginForm",
  component: LoginForm,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <StoreProvider
          initialState={{
            loginForm: {
              username: "admin",
              password: "123",
            },
          }}
        >
          <Story />
        </StoreProvider>
      );
    },
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecoratorDark,
    (Story) => {
      return (
        <StoreProvider
          initialState={{
            loginForm: {
              username: "admin",
              password: "123",
            },
          }}
        >
          <Story />
        </StoreProvider>
      );
    },
  ],
};

export const LightError: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <StoreProvider
          initialState={{
            loginForm: {
              username: "admin",
              password: "123",
              error: "For example error",
            },
          }}
        >
          <Story />
        </StoreProvider>
      );
    },
  ],
};

export const DarkError: Story = {
  args: {},
  decorators: [
    ThemeDecoratorDark,
    (Story) => {
      return (
        <StoreProvider
          initialState={{
            loginForm: {
              username: "admin",
              password: "123",
              error: "For example error",
            },
          }}
        >
          <Story />
        </StoreProvider>
      );
    },
  ],
};
export const LightIsLoading: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <StoreProvider
          initialState={{
            loginForm: {
              username: "admin",
              password: "123",
              isLoading: true,
            },
          }}
        >
          <Story />
        </StoreProvider>
      );
    },
  ],
};

export const DarkIsLoading: Story = {
  args: {},
  decorators: [
    ThemeDecoratorDark,
    (Story) => {
      return (
        <StoreProvider
          initialState={{
            loginForm: {
              username: "admin",
              password: "123",
              isLoading: true,
            },
          }}
        >
          <Story />
        </StoreProvider>
      );
    },
  ],
};
