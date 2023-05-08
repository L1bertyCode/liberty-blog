import { StateSchema } from "1app/porviders/StoreProvider";
import { ArticleView } from "6entities/Article";

export const getArticlesPageIsLoading = (
  state: StateSchema
) => state.articlesPage?.isLoading || false;

export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPageNumber = (state: StateSchema) =>
  state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore;
