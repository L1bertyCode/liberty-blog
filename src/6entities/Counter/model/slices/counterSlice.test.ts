import { counterActions, counterReducer } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice", () => {
  test("should return", () => {
    const data = { value: 11 };
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment)).toEqual(data);
  });
  test("should return", () => {
    const data = { value: 9 };
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement)).toEqual(data);
  });
  test("should work with emptu state", () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({
      value: 1,
    });
  });
});
