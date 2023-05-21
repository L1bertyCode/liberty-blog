import { StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsPageReducer } from "pages/ArticleDetailsPage/model/slices";

import { loginReducer } from "features/AuthByUsername/model/slices/loginSlice";
import { addCommentFormReducer } from "features/addCommentForm/model/slices/addCommentFormSlice";
import { articleDetailsReducer } from "entities/Article/model/slices/ArticleDetailsSlice";
import { profileReducer } from "entities/Profile";
import {
  DeepPartial,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { Decorator } from "@storybook/react";

const defaultAsyncReducers: DeepPartial<ReducersMapObject> =
  {
    loginForm: loginReducer,
    pofile: profileReducer,
    articleDFetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
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
