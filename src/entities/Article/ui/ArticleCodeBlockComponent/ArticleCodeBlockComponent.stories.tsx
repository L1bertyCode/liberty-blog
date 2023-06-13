import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";

import { ThemeDecoratorDark } from "@/shared/config/storybook/ThemeDecorator";
import { ArticleBlockType } from "@/entities/Article/model/consts/consts";

const meta = {
  title: "entities/ArticleCodeBlockComponent",
  component: ArticleCodeBlockComponent,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    block: {
      id: "3",
      type: ArticleBlockType.CODE,
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
  },
};

export const Dark: Story = {
  args: {
    block: {
      id: "3",
      type: ArticleBlockType.CODE,
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
  },
  decorators: [ThemeDecoratorDark],
};
