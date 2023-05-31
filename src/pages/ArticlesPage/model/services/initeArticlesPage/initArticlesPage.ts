import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { getArticlesPageInited } from "../../selectors/articlePageSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { SortOrder } from "@/shared/types";
import {
  ArticleType,
  ArticlesSortField,
} from "@/entities/Article";

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  "articlesPage/initArticlesPage",
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      const orderFromUrl = searchParams.get(
        "order"
      ) as SortOrder;
      const sortFromUrl = searchParams.get(
        "sort"
      ) as ArticlesSortField;
      const searchFromUrl = searchParams.get("search");
      const typeFromUrl = searchParams.get(
        "type"
      ) as ArticleType;

      if (orderFromUrl) {
        dispatch(
          articlesPageActions.setOrder(orderFromUrl)
        );
      }
      if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl));
      }
      if (searchFromUrl) {
        dispatch(
          articlesPageActions.setSearch(searchFromUrl)
        );
      }
      if (typeFromUrl) {
        dispatch(articlesPageActions.setType(typeFromUrl));
      }

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  }
);
