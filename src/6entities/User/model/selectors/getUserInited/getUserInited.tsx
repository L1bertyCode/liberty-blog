import { StateSchema } from "1app/porviders/StoreProvider";

export const getUserInited = (state: StateSchema) =>
  state.user._inited;
