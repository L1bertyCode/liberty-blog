import { StateSchema } from "1app/porviders/StoreProvider";

export const getProfileErrorValidateErrors = (
  state: StateSchema
) => state?.profile?.validateError;
