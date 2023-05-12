import { StateSchema } from "1app/providers/StoreProvider";

export const getProfileReadOnly = (state: StateSchema) =>
  state?.profile?.readOnly;
