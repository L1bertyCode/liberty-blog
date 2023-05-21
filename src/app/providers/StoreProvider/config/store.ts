import {
  CombinedState,
  Reducer,
  ReducersMapObject,
  configureStore,
} from "@reduxjs/toolkit";

import { StateSchema } from "./StateSchema";

import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import { scrollSaveReducer } from "features/ScrollSave";

export type AppDispatch = ReturnType<
  typeof createReduxStore
>["dispatch"];

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const RootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollSave: scrollSaveReducer,
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
