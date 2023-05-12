import { StateSchema } from "1app/providers/StoreProvider";

export const getLoginState = (state: StateSchema) =>
  state.loginForm;
