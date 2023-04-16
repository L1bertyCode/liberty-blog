import {
  ReducersMapObject,
  configureStore,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { StateSchema } from "./StateSchema";

import { counterReducer } from "6entities/Counter";
import { userReducer } from "6entities/User";
import { createReducerManager } from "./reducerManager";

export type AppDispatch = ReturnType<
  typeof createReduxStore
>["dispatch"];

export const useAppDispatch = () =>
  useDispatch<AppDispatch>();

export const createReduxStore = (
  initialState?: StateSchema
) => {
  const RootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };
  const reducerManager = createReducerManager(RootReducer);

  const store = configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: reducerManager.reduce,
    devTools: __IS__DEV__,
  });

  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
