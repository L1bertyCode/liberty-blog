import { StateSchema } from "1app/porviders/StoreProvider";

export const getCounter = (state: StateSchema) =>
  state?.counter;
