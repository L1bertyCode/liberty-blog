import { StateSchema } from "1app/porviders/StroreProvider";

export const getUserAuthData = (state: StateSchema) =>
  state.user.authData;
