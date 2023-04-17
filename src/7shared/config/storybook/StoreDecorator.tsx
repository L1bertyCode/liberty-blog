import { StoreProvider } from "1app/porviders/StoreProvider";
import { loginReducer } from "5features/AuthByUsername/model/slices/loginSlice";
import {
  DeepPartial,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { Decorator } from "@storybook/react";

const defaultAsyncReducers: DeepPartial<ReducersMapObject> =
  { loginForm: loginReducer };

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
