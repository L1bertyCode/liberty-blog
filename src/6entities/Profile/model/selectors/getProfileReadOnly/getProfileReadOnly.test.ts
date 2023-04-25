import { StateSchema } from "1app/porviders/StoreProvider";
import { getProfileReadOnly } from "./getProfileReadOnly";

describe("getProfileReadOnly", () => {
  test("should return treu", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readOnly: true,
      },
    };
    expect(
      getProfileReadOnly(state as StateSchema)
    ).toEqual(true);
  });
  test("should return false", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readOnly: false,
      },
    };
    expect(
      getProfileReadOnly(state as StateSchema)
    ).toEqual(false);
  });
  test("should work with emprty undefined", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(
      getProfileReadOnly(state as StateSchema)
    ).toEqual(undefined);
  });
});
