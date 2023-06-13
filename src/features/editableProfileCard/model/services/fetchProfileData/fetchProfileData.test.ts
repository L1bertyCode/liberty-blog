import axios from "axios";
import { fetchProfileData } from "./fetchProfileData";

import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";

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
describe("fetchProfileData.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error login", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
