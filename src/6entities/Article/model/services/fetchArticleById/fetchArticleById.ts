import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../../types/article";
import { ThunkConfig } from "1app/porviders/StoreProvider/config/StateSchema";

// First, create the thunk
export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>(
  "acrticleDetails/fetchArticleById",
  async (articleId, ThunkApi) => {
    const { extra, rejectWithValue } = ThunkApi;
    try {
      const response = await extra.api.get<Article>(
        `/articles/${articleId}`
      );
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("error");
    }
  }
);
