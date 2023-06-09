import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CounterSchema } from "../types/counterSchema";
import { buildSlice } from "@/shared/store";

const initialState: CounterSchema = {
  value: 0,
};
export const counterSlice = buildSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addSome: (state, { payload }: PayloadAction<number>) => {
      state.value += payload;
    },
  },
});

export const {
  actions: counterActions,
  reducer: counterReducer,
  useActions: useCounterActions,
} = counterSlice;
