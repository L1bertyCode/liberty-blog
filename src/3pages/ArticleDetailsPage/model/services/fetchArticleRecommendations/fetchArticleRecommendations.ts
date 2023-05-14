import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "1app/providers/StoreProvider/config/StateSchema";
import { Article } from "6entities/Article";

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
  "acrticleDetailsPage/fetchArticleRecommendations",
  async (props, ThunkApi) => {
    const { extra, rejectWithValue } = ThunkApi;

    try {
      const response = await extra.api.get<Article[]>(
        "/articles",
        {
          params: {
            _limit: 4,
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