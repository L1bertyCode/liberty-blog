import { StateSchema } from "1app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Currency } from "6entities/Currency";
import { Country } from "6entities/Country";

describe("getProfileData", () => {
  const data = {
    firstname: "S",
    lastname: "Code",
    age: 18,
    currency: Currency.EUR,
    country: Country.Germany,
    city: "Moscow",
    username: "admin",
  };
  test("should return data", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(
      data
    );
  });
  test("should work with emprty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(
      undefined
    );
  });
});
