import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { addCommentFormSchema } from "../types/addCommentForm";

const initialState: addCommentFormSchema = {
  text: "",
};

export const addCommentFormSlice = createSlice({
  name: "addCommentForm",
  initialState: initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  //   extraReducers:(builder)=>{
  //     builder.addCase(.pending,state=>(
  //         state.error=undefined
  //     ))
  //     builder.addCase(.fulfilled,state=>(
  //         state.error=undefined
  //        state.text = "";
  //     ))
  //     builder.addCase(.rejected,state=>(
  //         state.error=undefined
  //     ))
  //   }
});
export const { actions: addCommentFormActions } =
  addCommentFormSlice;
export const { reducer: addCommentFormReducer } =
  addCommentFormSlice;
