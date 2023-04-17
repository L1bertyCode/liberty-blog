import { StateSchema } from "1app/porviders/StoreProvider";

export const getLoginPassword = (state: StateSchema) =>
  state?.loginForm?.password || "";
