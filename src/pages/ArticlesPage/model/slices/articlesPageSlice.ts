import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleType, ArticleView, ArticlesSortField } from "entities/Article";
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import { ARTCILE_VIEW_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";

import { SortOrder } from "shared/types";

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles =
  articlesAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articlesPage ||
      articlesAdapter.getInitialState()
  );

const articlesPageSlice = createSlice({
  name: "articlesPageSlice",
  initialState:
    articlesAdapter.getInitialState<ArticlesPageSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
      view: ArticleView.SMALL,
      page: 1,
      limit: 1,
      hasMore: false,

      order: "asc",
      sort: ArticlesSortField.CREATED,
      search: "",
      type: ArticleType.ALL,

      _inited: false,
    }),
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setView: (
      state,
      action: PayloadAction<ArticleView>
    ) => {
      state.view = action.payload;
      localStorage.setItem(
        ARTCILE_VIEW_LOCALSTORAGE_KEY,
        action.payload
      );
    },

    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (
      state,
      action: PayloadAction<ArticlesSortField>
    ) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (
      state,
      action: PayloadAction<ArticleType>
    ) => {
      state.type = action.payload;
    },

    initState: (state) => {
      const view = localStorage.getItem(
        ARTCILE_VIEW_LOCALSTORAGE_KEY
      ) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.BIG ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchArticlesList.pending,
        (state, action) => {
          state.error = undefined;
          state.isLoading = true;

          if (action.meta.arg.replace) {
            articlesAdapter.removeAll(state);
          }
        }
      )
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.hasMore =
            action.payload.length >= state.limit;

          if (action.meta.arg.replace) {
            articlesAdapter.setAll(state, action.payload);
          } else {
            articlesAdapter.addMany(state, action.payload);
          }
        }
      )
      .addCase(
        fetchArticlesList.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions,
} = articlesPageSlice;
