import { StateSchema } from "1app/porviders/StoreProvider";

export const getArticleCommentsIsLoading = (
  state: StateSchema
) => state.articleDetailsComments?.isLoading;

export const getArticleCommentsError = (
  state: StateSchema
) => state.articleDetailsComments?.error;
