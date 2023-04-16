import { StateSchema } from "1app/porviders/StroreProvider";

export const getLoginUsername = (state: StateSchema) =>
  state?.loginForm?.username || "";
