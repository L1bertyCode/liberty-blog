import axios from "axios";
import { fetchProfileData } from "./fetchProfileData";

import { TestAsyncThunk } from "7shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Currency } from "6entities/Currency";
import { Country } from "6entities/Country";

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
describe("fetchProfileData", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(
      Promise.resolve({
        data: data,
      })
    );
    const result = await thunk.cakkThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(data);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );
    const result = await thunk.cakkThunk("1");

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
