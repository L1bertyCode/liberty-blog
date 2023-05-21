import { getLoginIsLoading } from "./getLoginIsLoading";
import { StateSchema } from "app/providers/StoreProvider";

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
