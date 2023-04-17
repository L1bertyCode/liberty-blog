import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { StateSchema } from "1app/porviders/StoreProvider";
jest.mock("axios");
const mockedAxios = jest.mocked(axios);

describe("loginByUsername", () => {
  let dispatch: Dispatch;
  let getState: () => StataSchema;
  test("should return", () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        data: {
          username: "user",
          id: "1",
        },
      })
    );
    const action = loginByUsername({
      username: "123",
      password: "123",
    });
    // expect(loginByUsername()).toEqual();
  });
});
