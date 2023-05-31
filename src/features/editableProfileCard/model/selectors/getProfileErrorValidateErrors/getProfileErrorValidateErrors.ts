import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfileErrorValidateErrors = (
  state: StateSchema
) => state?.profile?.validateError;
