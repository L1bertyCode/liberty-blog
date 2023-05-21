import { getLoginUsername } from "./getLoginUsername";
import { StateSchema } from "app/providers/StoreProvider";

describe("getLoginUsername", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "admin",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual(
      "admin"
    );
  });
});
describe("getLoginError", () => {
  test("should work with empt state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual(
      ""
    );
  });
});
