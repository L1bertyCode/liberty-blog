import { StateSchema } from "1app/porviders/StoreProvider";

export const getProfileForm = (state: StateSchema) =>
  state?.profile?.form;
