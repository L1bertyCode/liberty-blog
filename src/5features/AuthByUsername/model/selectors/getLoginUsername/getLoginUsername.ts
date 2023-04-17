import { StateSchema } from "1app/porviders/StoreProvider";

export const getLoginUsername = (state: StateSchema) =>
  state?.loginForm?.username || "";
