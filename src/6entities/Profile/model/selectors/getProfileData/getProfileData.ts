import { StateSchema } from "1app/porviders/StoreProvider";

export const getProfileData = (state: StateSchema) =>
  state?.profile?.data;
