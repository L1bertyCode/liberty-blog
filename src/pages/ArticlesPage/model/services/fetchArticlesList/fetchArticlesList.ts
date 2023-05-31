import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { Article, ArticleType } from "@/entities/Article";
import {
  getArticlesPageLimit,
  getArticlesPageNumber,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from "../../selectors/articlePageSelectors";
import { addQueryParams } from "@/shared/lib/url/addQueryParans/addQueryParams";
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
    const type = getArticlesPageType(getState());
    try {
      addQueryParams({
        sort,
        order,
        search,
        type,
      });
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
            type:
              type === ArticleType.ALL ? undefined : type,
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
