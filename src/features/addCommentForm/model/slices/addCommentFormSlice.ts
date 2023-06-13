import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../types/addCommentForm";

const initialState: AddCommentFormSchema = {
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
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
