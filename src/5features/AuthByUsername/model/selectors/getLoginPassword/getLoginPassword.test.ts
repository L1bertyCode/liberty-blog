import { DeepPartial } from "@reduxjs/toolkit";
import { getLoginPassword } from "./getLoginPassword";
import { StateSchema } from "1app/porviders/StoreProvider";

describe("getLoginPassword", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "123",
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual(
      "123"
    );
  });
});
describe("getLoginError", () => {
  test("should work with empt state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual(
      ""
    );
  });
});
