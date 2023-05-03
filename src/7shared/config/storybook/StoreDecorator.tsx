import { StoreProvider } from "1app/porviders/StoreProvider";
import { articleDetailsCommentsReducer } from "3pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";
import { loginReducer } from "5features/AuthByUsername/model/slices/loginSlice";
import { addCommentFormReducer } from "5features/addCommentForm/model/slices/addCommentFormSlice";
import { ArticleDetailsReducer } from "6entities/Article/model/slices/ArticleDetailsSlice";
import { profileReducer } from "6entities/Profile";
import {
  DeepPartial,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { Decorator } from "@storybook/react";

const defaultAsyncReducers: DeepPartial<ReducersMapObject> =
  {
    loginForm: loginReducer,
    pofile: profileReducer,
    articleDFetails: ArticleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
  };

export const StoreDecorator: Decorator = (
  Story,
  { state, asyncReducers }
) => {
  return (
    <StoreProvider
      initialState={state ? state : {}}
      asyncReducers={{
        ...defaultAsyncReducers,
        ...asyncReducers,
      }}
    >
      <Story />
    </StoreProvider>
  );
};
