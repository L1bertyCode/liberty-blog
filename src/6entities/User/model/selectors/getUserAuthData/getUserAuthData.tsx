import { StateSchema } from "1app/porviders/StoreProvider";

export const getUserAuthData = (state: StateSchema) =>
  state.user.authData;
