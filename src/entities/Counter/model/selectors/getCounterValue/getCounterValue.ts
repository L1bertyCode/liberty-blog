import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter";
import { CounterSchema } from "../../types/counterSchema";
import { buildSelector } from "@/shared/store";

export const [useCounterValue, getCounterValue] = buildSelector(
  (state) => state.counter.value,
);
// (counter: CounterSchema) =>
//   counter.value;
