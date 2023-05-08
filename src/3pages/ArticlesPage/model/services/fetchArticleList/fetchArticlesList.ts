import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "1app/porviders/StoreProvider/config/StateSchema";
import { Article } from "6entities/Article";
import { getArticlesPageLimit } from "../../selectors/articlePageSelectors";
interface FetchArticleListProps {
  page?: number;
}
export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>(
  "acrticlesPage/fetchArticlesList",
  async (props, ThunkApi) => {
    const { extra, rejectWithValue, getState } = ThunkApi;
    const { page = 1 } = props;
    const limit = getArticlesPageLimit(getState());
    try {
      const response = await extra.api.get<Article[]>(
        "/articles",
        {
          params: {
            _expand: "user",
            _limit: limit,
            _page: page,
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
