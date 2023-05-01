import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "1app/porviders/StoreProvider/config/StateSchema";
import { Comment } from "6entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>(
  "acrticleDetails/fetchCommentsByArticleId",
  async (articleId, ThunkApi) => {
    const { extra, rejectWithValue } = ThunkApi;

    if (!articleId) {
      return rejectWithValue("error");
    }
    try {
      const response = await extra.api.get<Comment[]>(
        "/comments/",
        {
          params: {
            articleId,
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
