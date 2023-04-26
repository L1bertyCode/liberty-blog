import axios from "axios";
import { validateProfileData } from "./validateProfileData";

import { TestAsyncThunk } from "7shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Currency } from "6entities/Currency";
import { Country } from "6entities/Country";
import { ValidateProfileError } from "../../types/profile";

jest.mock("axios");
const mockedAxios = jest.mocked(axios);
const data = {
  firstname: "S",
  lastname: "Code",
  age: 18,
  currency: Currency.EUR,
  country: Country.Germany,
  city: "Moscow",
  username: "admin",
};
describe("validateProfileData", () => {
  test("success", async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test("without firstname and lastname", async () => {
    const result = validateProfileData({
      ...data,
      firstname: "",
      lastname: "",
    });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test("incorrect age", async () => {
    const result = validateProfileData({
      ...data,
      age: undefined,
    });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test("incorrect country", async () => {
    const result = validateProfileData({
      ...data,
      country: undefined,
    });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test("incorrect all", async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
