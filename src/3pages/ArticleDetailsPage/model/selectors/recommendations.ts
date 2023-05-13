import { StateSchema } from "1app/providers/StoreProvider";

export const getArticleRecommendationsIsLoading = (
  state: StateSchema
) => {
  return (
    state.articleDetailsPage?.recomendations.isLoading ||
    false
  );
};

export const getArticleRecommendationsError = (
  state: StateSchema
) => {
  return state.articleDetailsPage?.recomendations.error;
};
