import { StateSchema } from "1app/providers/StoreProvider";
import { Comment } from "6entities/Comment";
import {
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { ArticleDetailsRecommendationsSchema } from "../types/ArticleDetailsRecommendationsSchema";

import { Article } from "6entities/Article";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

const recommendationsAdapter = createEntityAdapter<Article>(
  {
    selectId: (article) => article.id,
  }
);

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsRecomendations ||
      recommendationsAdapter.getInitialState()
  );

const articleDetailsRecommendationsSlice = createSlice({
  name: "articleDetailsRecommendationsSlice",
  initialState:
    recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
      {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
      }
    ),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchArticleRecommendations.pending,
        (state) => {
          state.error = undefined;
          state.isLoading = true;
        }
      )
      .addCase(
        fetchArticleRecommendations.fulfilled,
        (state, action) => {
          state.isLoading = false;
          recommendationsAdapter.setAll(
            state,
            action.payload
          );
        }
      )
      .addCase(
        fetchArticleRecommendations.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const {
  reducer: articleDetailsRecommendationsReducer,
} = articleDetailsRecommendationsSlice;
