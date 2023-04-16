import { StateSchema } from "1app/porviders/StroreProvider";

export const getLoginPassword = (state: StateSchema) =>
  state?.loginForm?.password || "";
