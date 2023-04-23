import {
  CombinedState,
  DeepPartial,
  Reducer,
  ReducersMapObject,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { StateSchema } from "./StateSchema";

import { counterReducer } from "6entities/Counter";
import { userReducer } from "6entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "7shared/api/api";
import { NavigateOptions, To } from "react-router-dom";

export type AppDispatch = ReturnType<
  typeof createReduxStore
>["dispatch"];

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) => {
  const RootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };
  const reducerManager = createReducerManager(RootReducer);

  const extraArg = {
    api: $api,
  };

  const store = configureStore({
    preloadedState: initialState,
    reducer: reducerManager.reduce as Reducer<
      CombinedState<StateSchema>
    >,
    devTools: __IS__DEV__,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });

  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
