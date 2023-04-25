import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";
import { Country } from "6entities/Country";
import { Currency } from "6entities/Currency";
import avatar from "7shared/assets/tests/storybook.jpg";
const meta = {
  title: "6entities/ProfileCard",
  component: ProfileCard,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    data: {
      firstname: "S",
      lastname: "Code",
      age: 18,
      currency: Currency.EUR,
      country: Country.Germany,
      city: "Moscowasdfs",
      username: "admin",
      avatar: avatar,
    },
  },
};

export const Dark: Story = {
  args: {
    data: {
      firstname: "S",
      lastname: "Code",
      age: 18,
      currency: Currency.EUR,
      country: Country.Germany,
      city: "Moscowas",
      username: "admin",
      avatar: avatar,
    },
  },
  decorators: [ThemeDecoratorDark],
};
export const isLoadingLight: Story = {
  args: {
    isLoading: true,
  },
};

export const isLoadingDark: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecoratorDark],
};
export const ErrorLight: Story = {
  args: {
    error: "error",
  },
};

export const ErrorDark: Story = {
  args: {
    error: "error",
  },
  decorators: [ThemeDecoratorDark],
};
