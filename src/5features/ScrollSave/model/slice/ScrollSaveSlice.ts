import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { ScrollSaveSchema } from "../types/ScrollSaveSchema";

const initialState: ScrollSaveSchema = {
  scroll: {},
};

export const ScrollSaveSlice = createSlice({
  name: "ScrollSave",
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      {
        payload,
      }: PayloadAction<{
        parh: string;
        position: number;
      }>
    ) => {
      state.scroll[payload.parh] = payload.position;
    },
  },
});

export const { actions: scrollSaveActions } =
  ScrollSaveSlice;
export const { reducer: scrollSaveReducer } =
  ScrollSaveSlice;
