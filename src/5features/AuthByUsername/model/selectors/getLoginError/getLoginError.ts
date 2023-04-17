import { StateSchema } from "1app/porviders/StoreProvider";

export const getLoginError = (state: StateSchema) =>
  state?.loginForm?.error || "";
