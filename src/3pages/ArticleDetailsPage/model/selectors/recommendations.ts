import { StateSchema } from "1app/providers/StoreProvider";

export const getArticleRecommendationsIsLoading = (
  state: StateSchema
) => {
  return (
    state.articleDetailsRecomendations?.isLoading || false
  );
};

export const getArticleRecommendationsError = (
  state: StateSchema
) => {
  return state.articleDetailsRecomendations?.error;
};
