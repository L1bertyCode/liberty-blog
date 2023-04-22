import { StateSchema } from "1app/porviders/StoreProvider";

export const getProfileReadOnly = (state: StateSchema) =>
  state?.profile?.readOnly;
