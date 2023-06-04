import type { Meta, StoryObj } from "@storybook/react";
import { NotificationList } from "./NotificationList";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";
import { StoreProvider } from "@/app/providers/StoreProvider";

const meta = {
  title: "entities/NotificationList",
  component: NotificationList,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
  decorators: [],
  parameters: {
    mockData: [
      {
        url: __API__ + "/notifications",
        method: "GET",
        status: 200,
        response: [
          {
            id: "1",
            title: "Notification 1",
            desctiption: "Notification 1",
          },
          {
            id: "2",
            title: "Notification 2",
            desctiption: "Notification 2",
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
