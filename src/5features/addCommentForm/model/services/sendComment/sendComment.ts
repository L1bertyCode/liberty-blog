import { ThunkConfig } from "1app/porviders/StoreProvider/config/StateSchema";
import { Comment } from "6entities/Comment";
import { getUserAuthData } from "6entities/User";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAddCommentFormText } from "../../selectors/addCommentFormSelectors";
import { getArticleDetailsData } from "6entities/Article/model/selectors/ArticleDetails";
import { addCommentFormActions } from "../../slices/addCommentFormSlice";

export const sendComment = createAsyncThunk<
  Comment,
  void,
  ThunkConfig<string>
>("addCommentForm/sendComment", async (_, ThunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } =
    ThunkApi;

  const userData = getUserAuthData(getState());
  const text = getAddCommentFormText(getState());
  const article = getArticleDetailsData(getState());
  console.log("addCommentForm/sendComment");

  if (!userData || !text || !article) {
    console.log("userData", userData);
    console.log("text", text);
    console.log("article", article);

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
    dispatch(addCommentFormActions.setText(""));
    return response.data;
  } catch (error) {
    return rejectWithValue("error");
  }
});
