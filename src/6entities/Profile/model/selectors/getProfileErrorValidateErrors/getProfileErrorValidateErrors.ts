import { StateSchema } from "1app/providers/StoreProvider";

export const getProfileErrorValidateErrors = (
  state: StateSchema
) => state?.profile?.validateError;
