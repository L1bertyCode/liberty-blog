import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";
import { StoreProvider } from "@/app/providers/StoreProvider";
import {
  DeepPartial,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { loginReducer } from "@/features/AuthByUsername/model/slices/loginSlice";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;
const defaultAsyncReducers: DeepPartial<ReducersMapObject> =
  { loginForm: loginReducer };
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
              isLoading: false,
            },
          }}
          asyncReducers={{ ...defaultAsyncReducers }}
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
              isLoading: false,
            },
          }}
          asyncReducers={{ ...defaultAsyncReducers }}
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
              isLoading: false,
            },
          }}
          asyncReducers={{ ...defaultAsyncReducers }}
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
              isLoading: false,
            },
          }}
          asyncReducers={{ ...defaultAsyncReducers }}
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
          asyncReducers={{ ...defaultAsyncReducers }}
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
          asyncReducers={{ ...defaultAsyncReducers }}
        >
          <Story />
        </StoreProvider>
      );
    },
  ],
};
