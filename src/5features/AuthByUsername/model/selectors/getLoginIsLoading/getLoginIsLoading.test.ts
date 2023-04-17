import { DeepPartial } from "@reduxjs/toolkit";
import { getLoginIsLoading } from "./getLoginIsLoading";
import { StateSchema } from "1app/porviders/StoreProvider";

describe("getLoginIsLoading", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(
      true
    );
  });
});
describe("getLoginError", () => {
  test("should work with empt state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(
      false
    );
  });
});
