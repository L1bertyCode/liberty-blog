import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../../types/article";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";

// First, create the thunk
export const fetchArticleById = createAsyncThunk<
  Article,
  string | undefined,
  ThunkConfig<string>
>(
  "acrticleDetails/fetchArticleById",
  async (articleId, ThunkApi) => {
    const { extra, rejectWithValue } = ThunkApi;

    try {
      const response = await extra.api.get<Article>(
        `/articles/${articleId}`,
        {
          params: {
            _expand: "user",
          },
        }
      );

      if (!articleId) {
        throw new Error();
      }
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
