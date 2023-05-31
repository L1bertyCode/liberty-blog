import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileErrorValidateErrors } from "./getProfileErrorValidateErrors";
import { ValidateProfileError } from "../../consts/const";




describe("getProfileErrorValidateErrors", () => {
  const validateErrors = [
    ValidateProfileError.SERVER_ERROR,
    ValidateProfileError.INCORRECT_USER_DATA,
  ];
  test("should return data", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: validateErrors,
      },
    };
    expect(
      getProfileErrorValidateErrors(state as StateSchema)
    ).toEqual(validateErrors);
  });
  test("should work with emprty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(
      getProfileErrorValidateErrors(state as StateSchema)
    ).toEqual(undefined);
  });
});
