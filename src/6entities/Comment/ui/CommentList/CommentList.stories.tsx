import type { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList";

import { ThemeDecoratorDark } from "7shared/config/storybook/ThemeDecorator";
import { StoreProvider } from "1app/porviders/StoreProvider";
import { addCommentFormReducer } from "5features/addCommentForm/model/slices/addCommentFormSlice";
import { ReducersMapObject } from "@reduxjs/toolkit";

const meta = {
  title: "6entities/CommentList",
  component: CommentList,
  //tags: ["autodocs"],
  //argTypes: {},
  args: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;
const defaultAsyncReducers: DeepPartial<ReducersMapObject> =
  {
    addCommentForm: addCommentFormReducer,
  };
export const Light: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <StoreProvider
          initialState={{
            addCommetnForm: {
              text: "sdfa",
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
            addCommetnForm: {
              text: "sdfa",
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
