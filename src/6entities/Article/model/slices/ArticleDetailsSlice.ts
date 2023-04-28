import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { articleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { Article } from "../types/article";

const initialState: articleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const ArticleDetailsSlice = createSlice({
  name: "ArticleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        fetchArticleById.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { actions: ArticleDetailsActions } =
  ArticleDetailsSlice;
export const { reducer: ArticleDetailsReducer } =
  ArticleDetailsSlice;
