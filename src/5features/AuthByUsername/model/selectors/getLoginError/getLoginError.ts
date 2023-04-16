import { StateSchema } from "1app/porviders/StroreProvider";

export const getLoginError = (state: StateSchema) =>
  state?.loginForm?.error || "";
