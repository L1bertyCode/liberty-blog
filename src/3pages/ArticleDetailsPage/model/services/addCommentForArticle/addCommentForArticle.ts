import { ThunkConfig } from "1app/porviders/StoreProvider/config/StateSchema";
import { Comment } from "6entities/Comment";
import { getUserAuthData } from "6entities/User";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

import { getArticleDetailsData } from "6entities/Article/model/selectors/ArticleDetails";

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  "artiucleDetails/addCommentForArticle",
  async (text, ThunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } =
      ThunkApi;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue("no data");
    }

    try {
      const response = await extra.api.post<Comment>(
        "/comments",
        {
          articleId: article?.id,
          userId: userData?.id,
          text,
        }
      );
      if (!response.data) {
        throw new Error();
      }
      dispatch(fetchCommentsByArticleId(article.id));
      return response.data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
