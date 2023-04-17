import { DeepPartial } from "@reduxjs/toolkit";
import { getCounterValue } from "./getCounterValue";
import { StateSchema } from "1app/porviders/StoreProvider";

describe("getCounterValue", () => {
  test("should return value", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(
      10
    );
  });
});
