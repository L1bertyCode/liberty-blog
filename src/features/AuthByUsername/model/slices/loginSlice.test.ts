import { loginActions, loginReducer } from "./loginSlice";
import { LoginSchema } from "../types/loginSchema";

describe("loginSlice", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = {
      username: "name",
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername("name")),
    ).toEqual({ username: "name" });
  });

  test("test set password", () => {
    const state: DeepPartial<LoginSchema> = {
      password: "123",
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("123")),
    ).toEqual({ password: "123" });
  });
});
