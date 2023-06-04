import type { Meta, StoryObj } from "@storybook/react";
import ArticleRating from "./ArticleRating";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import { StoreProvider } from "@/app/providers/StoreProvider";

const meta = {
  title: "features/ArticleRating",
  component: ArticleRating,
  //tags: ["autodocs"],
  //argTypes: {},
  args: { articleId: "1" },
  decorators: [
    (Story) => {
      return (
        <StoreProvider
          initialState={{
            user: {
              authData: { id: "1", username: "admin" },
            },
          }}
        >
          <Story />
        </StoreProvider>
      );
    },
  ],
    parameters: {
      mockData: [
        {
          url:
            __API__ + "/article-ratings?userId=1&articleId=1",
          method: "GET",
          status: 200,
          response: [{ rate: 4 }],
        },
      ],
    },
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
