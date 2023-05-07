import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "1app/porviders/StoreProvider/config/StateSchema";
import { Article } from "6entities/Article";
import { getArticlePageLimit } from "../../selectors/articlePageSelectors";
interface FetchArticleListProps {
  page?: number;
}
export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>(
  "acrticlesPage/fetchArticleList",
  async (props, ThunkApi) => {
    const { extra, rejectWithValue, getState } = ThunkApi;
    const { page = 1 } = props;
    const limit = getArticlePageLimit(getState());
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
