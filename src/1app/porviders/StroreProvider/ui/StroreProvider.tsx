import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";

interface StroreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

export const StroreProvider = (props: StroreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
