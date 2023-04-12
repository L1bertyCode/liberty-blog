import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "6entities/Counter";
import { userReducer } from "6entities/User";

export const createReduxStore = (initialState?: StateSchema) => {
  const RootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };
  const store = configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: RootReducer,
    devTools: __IS__DEV__,
  });
  return store;
};
