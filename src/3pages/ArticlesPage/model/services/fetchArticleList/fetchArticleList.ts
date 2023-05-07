import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "1app/porviders/StoreProvider/config/StateSchema";
import { Article } from "6entities/Article";

export const fetchArticleList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
  "acrticlesPage/fetchArticleList",
  async (articleId, ThunkApi) => {
    const { extra, rejectWithValue } = ThunkApi;

    try {
      const response = await extra.api.get<Article[]>(
        "/articles",
        {
          params: {
            _expand: "user",
          },
        }
      );
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
