import { StateSchema } from "1app/porviders/StoreProvider";

export const getAddCommentFormText = (state: StateSchema) =>
  state.addCommentForm?.text;
export const getAddCommentFormError = (
  state: StateSchema
) => state.addCommentForm?.error;
