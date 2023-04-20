import { StateSchema } from "1app/porviders/StoreProvider";

export const getProfileIsLoading = (state: StateSchema) =>
  state?.profile?.isLoading;
