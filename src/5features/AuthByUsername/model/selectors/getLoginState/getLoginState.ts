import { StateSchema } from "1app/porviders/StoreProvider";

export const getLoginState = (state: StateSchema) =>
  state.loginForm;
