import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "1app/porviders/StoreProvider/config/StateSchema";
import { Article } from "6entities/Article";
import {
  getArticlesPageLimit,
  getArticlesPageNumber,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
} from "../../selectors/articlePageSelectors";
interface FetchArticleListProps {
  replace?: boolean;
}
export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>(
  "acrticlesPage/fetchArticlesList",
  async (props, ThunkApi) => {
    const { extra, rejectWithValue, getState } = ThunkApi;
    const limit = getArticlesPageLimit(getState());

    const order = getArticlesPageOrder(getState());
    const sort = getArticlesPageSort(getState());
    const search = getArticlesPageSearch(getState());
    const page = getArticlesPageNumber(getState());
    try {
      const response = await extra.api.get<Article[]>(
        "/articles",
        {
          params: {
            _expand: "user",
            _limit: limit,
            _page: page,
            _order: order,
            _sort: sort,
            q: search,
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
