import { Provider } from "react-redux";

import { ReactNode } from "react";
import { store } from "../config/store";

interface StroreProviderProps {
  children?: ReactNode;
  // initialState?: StateSchema;
}

export const StroreProvider = (props: StroreProviderProps) => {
  const { children } = props;

  // const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
export type AppDispatch = typeof store.dispatch;
