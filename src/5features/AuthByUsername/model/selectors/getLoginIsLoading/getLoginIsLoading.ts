import { StateSchema } from "1app/porviders/StoreProvider";

export const getLoginIsLoading = (state: StateSchema) =>
  state?.loginForm?.isLoading || false;
