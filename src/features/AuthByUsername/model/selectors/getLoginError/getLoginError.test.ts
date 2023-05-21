import { getLoginError } from "./getLoginError";
import { StateSchema } from "app/providers/StoreProvider";

describe("getLoginError", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: "error",
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual(
      "error"
    );
  });
});
describe("getLoginError", () => {
  test("should work with empt state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual("");
  });
});
