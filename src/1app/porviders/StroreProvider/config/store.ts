import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "6entities/Counter";

export const createReduxStore = (initialState?: StateSchema) => {
  const store = configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS__DEV__,
  });
  return store;
};
