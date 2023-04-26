import axios from "axios";
import { updateProfileData } from "./updateProfileData";

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
describe("updateProfileData", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(
      Promise.resolve({
        data: data,
      })
    );
    const result = await thunk.cakkThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );
    const result = await thunk.cakkThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: "" },
      },
    });
    thunk.api.put.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );
    const result = await thunk.cakkThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
});
