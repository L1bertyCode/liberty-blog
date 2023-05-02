import { StateSchema } from "1app/porviders/StoreProvider";

export const getAddCommentFormText = (state: StateSchema) =>
  state.addCommetnForm?.text;
export const getAddCommentFormError = (state: StateSchema) =>
  state.addCommetnForm?.error;
