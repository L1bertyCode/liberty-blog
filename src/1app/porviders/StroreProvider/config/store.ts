import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "6entities/Counter";
export function createReduxStore(initialState?: StateSchema) {
  const store = configureStore<StateSchema>({
    reducer: { counter: counterReducer },
    devTools: __IS__DEV__,
  });
  return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
