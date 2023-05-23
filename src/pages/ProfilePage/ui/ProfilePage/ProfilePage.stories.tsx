import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";

import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator";

import {
  StateSchema,
  StoreProvider,
} from "app/providers/StoreProvider";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import avatar from "shared/assets/tests/storybook.jpg";

import { ReducersMapObject } from "@reduxjs/toolkit";
import { profileReducer } from "features/editableProfileCard/model/slice/profileSlice";

const meta = {
  title: "pages/ProfilePage",
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
