import type { Meta, StoryObj } from "@storybook/react";
import { ArticleRecomendationList } from "./ArticleRecomendationList";
import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator";
import { Article } from "entities/Article";
const article: Article = {
  id: "1",
  img: "",
  createdAt: "",
  views: 123,
  user: { id: "1", username: "123" },
  blocks: [],
  type: [],
  title: "123",
  subtitle: "asfsa",
};
const meta = {
  title: "features/ArticleRecomendationList",
  component: ArticleRecomendationList,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
  parameters: {
    mockData: [
      {
        url: __API__ + "/articles?_limit=3",
        method: "GET",
        status: 200,
        response: [
          { ...article, id: "1" },
          { ...article, id: "2" },
          { ...article, id: "3" },
        ],
      },
    ],
  },
} satisfies Meta<typeof ArticleRecomendationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorDark],
};
