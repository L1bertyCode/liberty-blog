import {
  profileActions,
  profileReducer,
  profileSlice,
} from "./profileSlice";

import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { ProfileSchema } from "../types/editableProfileCardSchema";
import { ValidateProfileError } from "../consts/const";

const data = {
  firstname: "S",
  lastname: "Code",
  age: 18,
  currency: Currency.EUR,
  country: Country.Germany,
  city: "Moscow",
  username: "admin",
};
describe("profileSlice", () => {
  test("test set readOnly", () => {
    const state: DeepPartial<ProfileSchema> = {
      readOnly: false,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.setReadOnly(true)
      )
    ).toEqual({ readOnly: true });
  });
  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { username: "" },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.cancelEdit()
      )
    ).toEqual({
      readOnly: true,
      validateError: undefined,
      data,
      form: data,
    });
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: "123" },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: "test" })
      )
    ).toEqual({
      form: { username: "test" },
    });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.pending
      )
    ).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test("test update profile service fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      isLoading: false,
      data: data,
      form: data,
      readOnly: true,
      validateError: undefined,
    });
  });
});
