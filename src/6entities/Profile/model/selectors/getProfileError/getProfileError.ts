import { StateSchema } from "1app/porviders/StoreProvider";

export const getProfileError = (state: StateSchema) =>
  state?.profile?.error;
