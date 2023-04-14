import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { loginReducer } from "5features/AuthByUsername/model/slices/loginSlice";
import { counterReducer } from "6entities/Counter";
import { userReducer } from "6entities/User";
import { useDispatch } from "react-redux";

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const createReduxStore = (initialState?: StateSchema) => {
  const RootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };
  const store = configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: RootReducer,
    devTools: __IS__DEV__,
  });
  return store;
};
