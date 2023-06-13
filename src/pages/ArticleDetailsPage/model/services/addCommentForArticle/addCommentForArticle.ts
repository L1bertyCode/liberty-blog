import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { Comment } from "@/entities/Comment";
import { getUserAuthData } from "@/entities/User";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

import { getArticleDetailsData } from "@/entities/Article/model/selectors/ArticleDetails";

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>("artiucleDetails/addCommentForArticle", async (text, ThunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = ThunkApi;

  const userData = getUserAuthData(getState());
  const article = getArticleDetailsData(getState());

  if (!userData || !text || !article) {
    return rejectWithValue("no data");
  }

  try {
    const response = await extra.api.post<Comment>("/comments", {
      articleId: article?.id,
      userId: userData?.id,
      text,
    });
    if (!response.data) {
      throw new Error();
    }
    dispatch(fetchCommentsByArticleId(article.id));
    return response.data;
  } catch (error) {
    return rejectWithValue("error");
  }
});
