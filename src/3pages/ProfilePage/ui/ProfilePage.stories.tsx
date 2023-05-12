import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";

import {
  StateSchema,
  StoreProvider,
} from "1app/providers/StoreProvider";
import { Currency } from "6entities/Currency";
import { Country } from "6entities/Country";
import avatar from "7shared/assets/tests/storybook.jpg";
import {
  ProfileSchema,
  profileReducer,
} from "6entities/Profile";
import { ReducersMapObject } from "@reduxjs/toolkit";

const meta = {
  title: "3pages/ProfilePage",
  component: ProfilePage,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;
const defaultAsyncReducers: DeepPartial<ReducersMapObject> =
  { profile: profileReducer };
export const Light: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <StoreProvider
          initialState={{
            profile: {
              form: {
                firstname: "S",
                lastname: "Code",
                age: 18,
                currency: Currency.EUR,
                country: Country.Germany,
                city: "Moscow",
                username: "admin",
                avatar: avatar,
              },
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
            profile: {
              form: {
                firstname: "S",
                lastname: "Code",
                age: 18,
                currency: Currency.EUR,
                country: Country.Germany,
                city: "Moscow",
                username: "admin",
                avatar: avatar,
              },
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
