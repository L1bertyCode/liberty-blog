import { StateSchema } from "1app/porviders/StroreProvider";

export const getLoginIsLoading = (state: StateSchema) =>
  state?.loginForm?.isLoading || false;
