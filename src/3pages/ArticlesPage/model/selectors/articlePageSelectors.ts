import { StateSchema } from "1app/porviders/StoreProvider";
import { ArticleView } from "6entities/Article";

export const getArticlePageIsLoading = (
  state: StateSchema
) => state.articlesPage?.isLoading || false;

export const getArticlePageError = (state: StateSchema) =>
  state.articlesPage?.error;
export const getArticlePageView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.SMALL;
export const getArticlePageNymber = (state: StateSchema) =>
  state.articlesPage?.page;
export const getArticlePageLimit = (state: StateSchema) =>
  state.articlesPage?.limit || 9;
export const getArticlePagehasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore;
