import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";

describe("getProfileForm", () => {
  const form = {
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
        form: form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
  test("should work with emprty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
